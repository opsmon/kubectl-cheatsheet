document.querySelectorAll(".docs-content .highlighter-rouge").forEach((block) => {
  const code = block.querySelector("pre code");
  if (!code) {
    return;
  }

  const button = document.createElement("button");
  button.className = "copy-code";
  button.type = "button";
  button.textContent = document.documentElement.lang === "ru" ? "Копировать" : "Copy";
  button.setAttribute("aria-label", button.textContent);

  button.addEventListener("click", async () => {
    const originalLabel = button.textContent;
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = document.documentElement.lang === "ru" ? "Готово" : "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1400);
    } catch (_error) {
      button.textContent = document.documentElement.lang === "ru" ? "Выделите код" : "Select code";
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });

  block.append(button);
});

localStorage.setItem(
  "kubectl-cheatsheet-language",
  document.documentElement.lang === "en" ? "eng" : "ru"
);

const currentPage = window.location.pathname.replace(/\/$/, "");
document.querySelectorAll(".docs-sidebar a").forEach((link) => {
  const linkPage = new URL(link.href).pathname.replace(/\/$/, "");
  if (linkPage === currentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});

const languageSwitchLink = document.querySelector("[data-language-switch-link]");
languageSwitchLink?.addEventListener("click", async (event) => {
  if (!window.location.hash) {
    return;
  }

  const headings = [...document.querySelectorAll(".docs-content h2, .docs-content h3")];
  const currentHeadingIndex = headings.findIndex((heading) => `#${heading.id}` === window.location.hash);
  if (currentHeadingIndex < 0) {
    return;
  }

  event.preventDefault();
  const targetUrl = new URL(languageSwitchLink.href);

  try {
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error(`Unable to load ${targetUrl}`);
    }

    const documentText = await response.text();
    const targetDocument = new DOMParser().parseFromString(documentText, "text/html");
    const targetHeadings = targetDocument.querySelectorAll(".docs-content h2, .docs-content h3");
    const targetHeading = targetHeadings[currentHeadingIndex];
    if (targetHeading) {
      targetUrl.hash = targetHeading.id;
    }
  } catch (_error) {
    // The language switch still works; it only loses the current section.
  }

  window.location.assign(targetUrl);
});
