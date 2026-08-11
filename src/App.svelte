<script>
  import { onMount, tick } from "svelte";
  import { categories, docsOrder, fileFor, hashFor, publishedFile, summaryFor, titleFor, ui } from "./lib/catalog.svelte";
  import { docs, renderMarkdown } from "./lib/docs.svelte";

  const commandIndex = Array.isArray(window.commandIndex) ? window.commandIndex : [];
  const route = parseRoute();
  let lang = initialLanguage();
  let query = "";
  let shortcut = "Ctrl K";

  $: copy = ui[lang];
  $: currentDoc = route.kind === "docs" ? docs[route.lang]?.[route.slug] : null;
  $: currentDocHtml = currentDoc ? renderMarkdown(currentDoc, copy) : "";
  $: matchingItems = query
    ? commandIndex.filter((item) => {
        const haystack = [item.category, item.section, item.comment, item.command].join(" ").toLowerCase();
        return item.lang === lang && haystack.includes(query.toLowerCase());
      })
    : [];
  $: visibleCategories = categories.filter((category) => matches(category));
  $: commandCount = commandIndex.filter((item) => item.lang === lang).length || 700;

  $: if (typeof document !== "undefined") {
    document.documentElement.lang = lang === "ru" ? "ru" : "en";
    document.body.id = "top";
    document.title = route.kind === "docs" ? `${docTitle()} - kubectl Cheatsheet` : "kubectl Cheatsheet";
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
  }

  onMount(() => {
    shortcut = navigator.platform.toLowerCase().includes("mac") ? "⌘ K" : "Ctrl K";
    enhanceDocs();

    const onKeydown = (event) => {
      const search = document.querySelector("#searchInput");
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        search?.focus();
        search?.select();
      }

      if (event.key === "Escape" && document.activeElement === search) {
        query = "";
        search.blur();
      }
    };

    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  $: if (currentDocHtml) {
    tick().then(enhanceDocs);
  }

  function parseRoute() {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const langIndex = parts.findIndex((part) => part === "ru" || part === "eng");
    if (langIndex >= 0) {
      return {
        kind: "docs",
        lang: parts[langIndex],
        slug: (parts[langIndex + 1] || "viewing.html").replace(/\.html$/, "")
      };
    }
    return { kind: "home" };
  }

  function initialLanguage() {
    if (route.kind === "docs") {
      return route.lang;
    }

    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested === "ru" || requested === "eng") {
      return requested;
    }

    return localStorage.getItem("kubectl-cheatsheet-language") === "ru" ? "ru" : "eng";
  }

  function withPrefix(file) {
    return route.kind === "docs" ? `../${file}` : file;
  }

  function docHref(file, hash = "") {
    return `${withPrefix(publishedFile(file))}${hash ? `#${hash}` : ""}`;
  }

  function homeHref(targetLang = lang) {
    return route.kind === "docs" ? `../?lang=${targetLang}` : `?lang=${targetLang}`;
  }

  function setLanguage(nextLang) {
    lang = nextLang;
    localStorage.setItem("kubectl-cheatsheet-language", nextLang);

    if (route.kind === "home") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLang);
      window.history.replaceState({}, "", url);
      return;
    }

    const nextPath = withPrefix(`${nextLang}/${route.slug}.html`);
    window.location.assign(`${nextPath}${window.location.hash}`);
  }

  function matches(category) {
    if (!query) {
      return true;
    }

    const normalizedQuery = query.toLowerCase();
    const haystack = [
      category.id,
      category.ruTitle,
      category.enTitle,
      category.ruSummary,
      category.enSummary,
      ...category.topics.map((topic) => topic.join(" "))
    ].join(" ").toLowerCase();

    return haystack.includes(normalizedQuery) || matchingCommands(category.id).length > 0;
  }

  function matchingCommands(categoryId) {
    if (!query) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    return commandIndex
      .filter((item) => item.lang === lang && item.category === categoryId)
      .filter((item) => [item.section, item.comment, item.command].join(" ").toLowerCase().includes(normalizedQuery));
  }

  async function copyCommand(command, event) {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(command);
      button.classList.add("is-copied");
      button.setAttribute("aria-label", copy.copied);
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", copy.copyCommand);
      }, 1400);
    } catch (_error) {
      query = command;
      await tick();
      document.querySelector("#searchInput")?.select();
    }
  }

  function docTitle() {
    const category = categories.find((item) => item.id === route.slug);
    if (category) {
      return titleFor(category, lang);
    }
    return lang === "ru" ? "Как помочь проекту" : "Contributing";
  }

  function docsNav() {
    return docsOrder.map((id) => categories.find((item) => item.id === id)).filter(Boolean);
  }

  function enhanceDocs() {
    document.querySelectorAll(".docs-content .highlighter-rouge").forEach((block) => {
      if (block.querySelector(".copy-code")) {
        return;
      }

      const code = block.querySelector("pre code");
      if (!code) {
        return;
      }

      const button = document.createElement("button");
      button.className = "copy-code";
      button.type = "button";
      button.textContent = lang === "ru" ? "Копировать" : "Copy";
      button.setAttribute("aria-label", button.textContent);
      button.addEventListener("click", async () => {
        const originalLabel = button.textContent;
        try {
          await navigator.clipboard.writeText(code.textContent);
          button.textContent = lang === "ru" ? "Готово" : "Copied";
          window.setTimeout(() => {
            button.textContent = originalLabel;
          }, 1400);
        } catch (_error) {
          button.textContent = lang === "ru" ? "Выделите код" : "Select code";
          const range = document.createRange();
          range.selectNodeContents(code);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      });
      block.append(button);
    });

    const currentPage = window.location.pathname.replace(/\/$/, "");
    document.querySelectorAll(".docs-sidebar a").forEach((link) => {
      const linkPage = new URL(link.href).pathname.replace(/\/$/, "");
      link.classList.toggle("is-active", linkPage === currentPage);
      if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
</script>

{#if route.kind === "home"}
  <header class="topbar">
    <a class="brand" href="./" aria-label={copy.brandLabel}>
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M7.5 7.25 3 12l4.5 4.75M16.5 7.25 21 12l-4.5 4.75M14.25 4l-4.5 16" />
        </svg>
      </span>
      <strong>kubectl</strong>
    </a>

    <nav class="topnav" aria-label={copy.navigationLabel}>
      <a href="#categories">{copy.navBrowse}</a>
      <a href={docHref(`${lang}/viewing.md`)}>{copy.navDocs}</a>
      <a class="contribute-link" href={docHref(`${lang}/contributing.md`)}>{copy.navContribute}</a>
      <a class="github-link" href="https://github.com/opsmon/kubectl-cheatsheet" target="_blank" rel="noreferrer">
        GitHub
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5 11 11 5M6 5h5v5" />
        </svg>
      </a>
      <div class="segments header-language" role="group" aria-label={copy.languageLabel}>
        <button class="segment" class:is-active={lang === "ru"} type="button" aria-pressed={lang === "ru"} on:click={() => setLanguage("ru")}>RU</button>
        <button class="segment" class:is-active={lang === "eng"} type="button" aria-pressed={lang === "eng"} on:click={() => setLanguage("eng")}>EN</button>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-glow" aria-hidden="true"></div>
      <p class="eyebrow">{copy.eyebrow}</p>
      <h1 id="page-title">{@html copy.title}</h1>
      <p class="lead">{copy.lead}</p>

      <label class="search">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.75"></circle>
          <path d="m16 16 4.25 4.25"></path>
        </svg>
        <span class="sr-only">{copy.searchLabel}</span>
        <input id="searchInput" bind:value={query} type="search" placeholder={copy.searchPlaceholder} autocomplete="off">
        <kbd>{shortcut}</kbd>
      </label>

      <div class="hero-meta">
        <span class="command-count"><strong>{commandCount}+</strong> <span>{copy.commandCountLabel}</span></span>
      </div>
    </section>

    {#if matchingItems.length}
      <section class="results" aria-live="polite">
        <div class="results-head">
          <h2>{copy.resultsTitle}</h2>
          <span>{matchingItems.length}{copy.resultsSuffix}</span>
        </div>
        <div class="result-list">
          {#each matchingItems.slice(0, 12) as item}
            <div class="result">
              <a class="result-main" href={docHref(item.file, item.hash)}>
                <span>{copy.categoryLabels[item.category] || item.category} / {item.section}</span>
                <strong>{item.comment || item.section}</strong>
                <code>{item.command}</code>
              </a>
              <button class="copy-command" type="button" aria-label={copy.copyCommand} on:click={(event) => copyCommand(item.command, event)}>
                <svg viewBox="0 0 18 18" aria-hidden="true">
                  <rect x="6" y="5" width="8" height="9" rx="1.5"></rect>
                  <path d="M4 11V4.5C4 3.7 4.7 3 5.5 3H11"></path>
                </svg>
              </button>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    <section class="quick-start" aria-labelledby="quick-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{copy.quickKicker}</p>
          <h2 id="quick-title">{copy.quickTitle}</h2>
        </div>
        <span class="section-note">{copy.quickNote}</span>
      </div>

      <div class="quick-grid">
        <a class="quick-card quick-card-wide" href={docHref(`${lang}/viewing.md`, lang === "ru" ? "диагностика-типичных-проблем-подов-troubleshooting" : "troubleshooting-common-pod-issues-troubleshooting")}>
          <span class="quick-icon icon-blue" aria-hidden="true">01</span>
          <span><strong>{copy.tasks.pod[0]}</strong><small>{copy.tasks.pod[1]}</small></span>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5.5 5.5-5.5 5.5" /></svg>
        </a>
        <a class="quick-card" href={docHref(`${lang}/management.md`, lang === "ru" ? "сравнение-конфигураций-diff" : "comparing-configurations-diff")}>
          <span class="quick-icon icon-purple" aria-hidden="true">02</span>
          <span><strong>{copy.tasks.diff[0]}</strong><small>{copy.tasks.diff[1]}</small></span>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5.5 5.5-5.5 5.5" /></svg>
        </a>
        <a class="quick-card" href={docHref(`${lang}/workloads.md`, lang === "ru" ? "управление-обновлениями-rollout" : "managing-updates-rollout")}>
          <span class="quick-icon icon-orange" aria-hidden="true">03</span>
          <span><strong>{copy.tasks.rollback[0]}</strong><small>{copy.tasks.rollback[1]}</small></span>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5.5 5.5-5.5 5.5" /></svg>
        </a>
      </div>
    </section>

    <section class="catalog" id="categories" aria-labelledby="categories-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{copy.categoriesKicker}</p>
          <h2 id="categories-title">{copy.categoriesTitle}</h2>
        </div>
        <p class="section-description">{copy.categoriesDescription}</p>
      </div>
      <div class="cards" aria-live="polite">
        {#if visibleCategories.length}
          {#each visibleCategories as category, index}
            <article class="card" data-category={category.id}>
              <span class="card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div class="card-header">
                <span class="card-kicker">{copy.categoryLabels[category.id]}</span>
                <h2>{titleFor(category, lang)}</h2>
                <p>{summaryFor(category, lang)}</p>
              </div>
              <div class="chips">
                {#each category.topics as topic}
                  <a class="chip" href={docHref(fileFor(category, lang), hashFor(topic, lang))}>{topic[0]}</a>
                {/each}
              </div>
              <div class="card-footer">
                <a class="button-link" href={docHref(fileFor(category, lang))}>{copy.openCurrent}</a>
                <a class="button-link secondary" href={docHref(fileFor(category, lang === "ru" ? "eng" : "ru"))}>{copy.openAlternate}</a>
              </div>
            </article>
          {/each}
        {:else}
          <p class="empty">{copy.empty}</p>
        {/if}
      </div>
    </section>
  </main>

  <footer>
    <p><strong>kubectl Cheatsheet</strong> <span>{copy.footerCopy}</span></p>
    <a href="https://github.com/opsmon/kubectl-cheatsheet" target="_blank" rel="noreferrer">{copy.footerGitHub}</a>
  </footer>
{:else if currentDoc}
  <header class="docs-topbar">
    <a class="docs-brand" href={homeHref(lang)}>
      <span class="docs-brand-mark" aria-hidden="true">&gt;_</span>
      <strong>kubectl</strong>
    </a>
    <nav aria-label={copy.navigationLabel}>
      <a href={homeHref(lang)}>{copy.home}</a>
      <a class="docs-contribute" href={docHref(`${lang}/contributing.md`)}>{copy.navContribute}</a>
      <a href="https://github.com/opsmon/kubectl-cheatsheet" target="_blank" rel="noreferrer">GitHub</a>
      <div class="docs-language-switch" role="group" aria-label={copy.languageLabel}>
        {#if lang === "eng"}
          <a href={docHref(`ru/${route.slug}.md`)} on:click|preventDefault={() => setLanguage("ru")}>RU</a>
          <span aria-current="true">EN</span>
        {:else}
          <span aria-current="true">RU</span>
          <a href={docHref(`eng/${route.slug}.md`)} on:click|preventDefault={() => setLanguage("eng")}>EN</a>
        {/if}
      </div>
    </nav>
  </header>

  <div class="docs-shell">
    <aside class="docs-sidebar">
      <p>{copy.topics}</p>
      <nav aria-label={copy.topics}>
        {#each docsNav() as category}
          <a href={docHref(fileFor(category, lang))}>{titleFor(category, lang)}</a>
        {/each}
        <a class="sidebar-contribute" href={docHref(`${lang}/contributing.md`)}>{copy.navContribute}</a>
      </nav>
    </aside>

    <main class="docs-main">
      <a class="back-link" href={homeHref(lang)}>← {copy.home}</a>
      <article class="docs-content">
        {@html currentDocHtml}
      </article>
      <footer>
        <span>{copy.practicalReference}</span>
        <a href="#top">{copy.backToTop} ↑</a>
      </footer>
    </main>
  </div>
{:else}
  <main class="docs-main">
    <article class="docs-content">
      <h1>Page not found</h1>
      <p><a href={homeHref(lang)}>{copy.home}</a></p>
    </article>
  </main>
{/if}
