<script module>
import ruViewing from "../../ru/viewing.md?raw";
import ruManagement from "../../ru/management.md?raw";
import ruWorkloads from "../../ru/workloads.md?raw";
import ruNetwork from "../../ru/network.md?raw";
import ruStorage from "../../ru/storage.md?raw";
import ruSecurity from "../../ru/security.md?raw";
import ruCluster from "../../ru/cluster.md?raw";
import ruUtilities from "../../ru/utilities.md?raw";
import ruContributing from "../../ru/contributing.md?raw";
import engViewing from "../../eng/viewing.md?raw";
import engManagement from "../../eng/management.md?raw";
import engWorkloads from "../../eng/workloads.md?raw";
import engNetwork from "../../eng/network.md?raw";
import engStorage from "../../eng/storage.md?raw";
import engSecurity from "../../eng/security.md?raw";
import engCluster from "../../eng/cluster.md?raw";
import engUtilities from "../../eng/utilities.md?raw";
import engContributing from "../../eng/contributing.md?raw";

export const docs = {
  ru: {
    viewing: ruViewing,
    management: ruManagement,
    workloads: ruWorkloads,
    network: ruNetwork,
    storage: ruStorage,
    security: ruSecurity,
    cluster: ruCluster,
    utilities: ruUtilities,
    contributing: ruContributing
  },
  eng: {
    viewing: engViewing,
    management: engManagement,
    workloads: engWorkloads,
    network: engNetwork,
    storage: engStorage,
    security: engSecurity,
    cluster: engCluster,
    utilities: engUtilities,
    contributing: engContributing
  }
};

export function slug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[`~!@#$%^&*()+=\[\]{}\\|;:"',.<>/?]/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, href) => {
      const target = String(href).replace(/\.md($|#)/, ".html$1");
      const external = /^https?:\/\//.test(target);
      const attrs = external ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${escapeHtml(target)}"${attrs}>${inlineMarkdown(text)}</a>`;
    });
}

function officialDocs(line, copy) {
  const attrs = Object.fromEntries([...line.matchAll(/(\w+)="([^"]+)"/g)].map((match) => [match[1], match[2]]));
  if (!attrs.url || !attrs.title) {
    return "";
  }

  const second = attrs.url2 && attrs.title2
    ? `<a href="${escapeHtml(attrs.url2)}" target="_blank" rel="noreferrer">${escapeHtml(attrs.title2)} ↗</a>`
    : "";

  return `<p class="official-docs"><span>${copy.officialDocs}</span><a href="${escapeHtml(attrs.url)}" target="_blank" rel="noreferrer">${escapeHtml(attrs.title)} ↗</a>${second}</p>`;
}

function renderTable(lines) {
  const rows = lines
    .filter((line, index) => index !== 1 || !/^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line))
    .map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));
  if (!rows.length) {
    return "";
  }

  const [head, ...body] = rows;
  return `<table><thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;
}

export function renderMarkdown(markdown, copy) {
  const lines = markdown.replace(/\r\n/g, "\n").replace(/^---[\s\S]*?---\n/, "").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];
  let table = [];
  let code = [];
  let codeLanguage = "";
  let blockquote = [];
  let inCode = false;

  function flushParagraph() {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  }

  function flushList() {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      list = [];
    }
  }

  function flushTable() {
    if (table.length) {
      html.push(renderTable(table));
      table = [];
    }
  }

  function flushBlockquote(className = "") {
    if (blockquote.length) {
      const body = blockquote.map((item) => inlineMarkdown(item)).join("<br>");
      html.push(`<blockquote${className ? ` class="${className}"` : ""}><p>${body}</p></blockquote>`);
      blockquote = [];
    }
  }

  for (const line of lines) {
    if (line.trim() === "---" || line.includes("{{ site.baseurl }}")) {
      flushParagraph();
      flushList();
      flushTable();
      flushBlockquote();
      continue;
    }

    const fence = line.match(/^```(\w+)?/);
    if (fence) {
      if (inCode) {
        html.push(`<div class="highlighter-rouge"><pre><code class="language-${escapeHtml(codeLanguage)}">${escapeHtml(code.join("\n"))}</code></pre></div>`);
        code = [];
        codeLanguage = "";
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        flushTable();
        flushBlockquote();
        inCode = true;
        codeLanguage = fence[1] || "";
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (line.trim() === "{: .warning}") {
      flushBlockquote("warning");
      continue;
    }

    if (line.startsWith("{% include official-docs.html")) {
      flushParagraph();
      flushList();
      flushTable();
      flushBlockquote();
      html.push(officialDocs(line, copy));
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushTable();
      flushBlockquote();
      const level = heading[1].length;
      const text = heading[2].trim();
      html.push(`<h${level} id="${slug(text)}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      flushList();
      flushTable();
      blockquote.push(line.replace(/^>\s?/, ""));
      continue;
    }

    if (/^\|.*\|$/.test(line.trim())) {
      flushParagraph();
      flushList();
      flushBlockquote();
      table.push(line);
      continue;
    }

    const bullet = line.match(/^\s*-\s+(.+)$/);
    const numbered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (bullet || numbered) {
      flushParagraph();
      flushTable();
      flushBlockquote();
      list.push((bullet || numbered)[1]);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushTable();
      flushBlockquote();
      continue;
    }

    flushList();
    flushTable();
    flushBlockquote();
    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushTable();
  flushBlockquote();

  return html.join("\n");
}
</script>
