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
