import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import MarkdownIt from "markdown-it";

const output = "src/lib/generated-docs";
mkdirSync(output, { recursive: true });

function slug(text) {
  return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[`~!@#$%^&*()+=\[\]{}\\|;:"',.<>/?]/g, "");
}

function safeHref(value) {
  return /^(https?:\/\/|\/?(?:ru|eng)\/|\.\.?\/|#)/.test(value);
}

function preprocess(source) {
  return source.replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/^\{% include official-docs\.html ([^%]+)%\}$/gm, (_whole, attributes) => {
      const values = Object.fromEntries([...attributes.matchAll(/(\w+)="([^"]+)"/g)].map((match) => [match[1], match[2]]));
      const links = [[values.title, values.url], [values.title2, values.url2]].filter(([title, url]) => title && /^https:\/\/kubernetes\.io\//.test(url));
      return links.map(([title, url]) => `[${title}](${url})`).join(" · ");
    })
    .replace(/^.*\{\{ site\.baseurl \}\}.*\n?/gm, "")
    .replace(/^\{: \.warning\}\s*$/gm, "");
}

const md = new MarkdownIt({ html: false, linkify: false, typographer: false });
md.validateLink = safeHref;
const defaultLinkOpen = md.renderer.rules.link_open;
md.renderer.rules.link_open = (tokens, index, options, env, self) => {
  const token = tokens[index];
  const hrefIndex = token.attrIndex("href");
  if (hrefIndex >= 0) {
    const href = token.attrs[hrefIndex][1].replace(/\.md(?=$|#)/, ".html");
    token.attrs[hrefIndex][1] = href;
    if (/^https?:\/\//.test(href)) {
      token.attrSet("target", "_blank");
      token.attrSet("rel", "noreferrer");
    }
  }
  return defaultLinkOpen ? defaultLinkOpen(tokens, index, options, env, self) : self.renderToken(tokens, index, options);
};
md.renderer.rules.fence = (tokens, index) => {
  const token = tokens[index];
  const language = (token.info || "").trim().split(/\s+/)[0].replace(/[^a-zA-Z0-9_-]/g, "");
  return `<div class="highlighter-rouge"><pre><code class="language-${language}">${md.utils.escapeHtml(token.content.replace(/\n$/, ""))}</code></pre></div>\n`;
};

const manifest = { ru: {}, eng: {} };
for (const lang of ["ru", "eng"]) {
  for (const name of ["viewing", "management", "workloads", "network", "storage", "security", "cluster", "utilities", "contributing"]) {
    const tokens = md.parse(preprocess(readFileSync(`${lang}/${name}.md`, "utf8")), {});
    const anchors = [];
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === "heading_open") {
        const anchor = slug(tokens[i + 1].content);
        tokens[i].attrSet("id", anchor);
        anchors.push(anchor);
      }
    }
    manifest[lang][name] = anchors;
    writeFileSync(`${output}/${lang}-${name}.js`, `export default ${JSON.stringify(md.renderer.render(tokens, md.options, {}))};\n`);
  }
}
writeFileSync(`${output}/anchors.json`, `${JSON.stringify(manifest, null, 2)}\n`);
console.log("OK: generated 18 sanitized, per-page documentation modules.");
