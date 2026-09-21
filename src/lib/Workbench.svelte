<script>
  import { onMount, tick } from "svelte";
  import { recipes, recipeById } from "./recipes.js";
  import { searchRecipes } from "./search.js";
  import { buildCommand } from "./command.js";
  import { readCollections, writeCollections, exportCollections } from "./collections.js";

  export let lang = "eng";
  export let compact = false;
  export let prefix = "";

  const buildable = new Set(["pods-list", "pod-describe", "pod-logs", "events-list", "deployment-status", "deployment-restart"]);
  let query = "";
  let category = "";
  let effect = "";
  let showAll = false;
  let selectedId = "";
  let values = {};
  let context = "";
  let namespace = "";
  let prod = false;
  let copied = false;
  let copyError = false;
  let storageAvailable = true;
  let saved = { version: 1, favorites: [], collections: [] };
  let collectionName = "";
  let activeCollection = "";
  let searchInput;
  let previousFocus;
  let resultCursor = -1;

  $: results = searchRecipes(recipes, query, lang, { category, effect });
  $: visible = showAll || compact ? results : results.slice(0, 8);
  $: selected = recipeById[selectedId];
  $: built = selected ? buildCommand(selected, values, { context, namespace }) : null;
  $: canCopy = selected && (buildable.has(selected.id) || selected.params.length === 0) && built?.ready;
  $: sourceHref = selected ? `${prefix}${selected.links[lang]}` : "";

  onMount(() => {
    let storage;
    try { storage = window.localStorage; } catch (_error) { storage = { getItem: () => { throw Error("unavailable"); }, setItem: () => { throw Error("unavailable"); } }; }
    const result = readCollections(storage, recipes.map((item) => item.id));
    saved = result.data;
    storageAvailable = result.available;
    const id = new URLSearchParams(window.location.search).get("recipe");
    if (id && recipeById[id]) choose(id);

    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        previousFocus = document.activeElement;
        searchInput?.focus();
        searchInput?.select();
      } else if (event.key === "Escape" && document.activeElement === searchInput) {
        query = "";
        searchInput?.blur();
        previousFocus?.focus?.();
      } else if (document.activeElement === searchInput && event.key === "ArrowDown") {
        event.preventDefault();
        resultCursor = Math.min(resultCursor + 1, visible.length - 1);
      } else if (document.activeElement === searchInput && event.key === "ArrowUp") {
        event.preventDefault();
        resultCursor = Math.max(resultCursor - 1, -1);
      } else if (document.activeElement === searchInput && event.key === "Enter" && resultCursor >= 0) {
        event.preventDefault();
        choose(visible[resultCursor].id);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  function choose(id) {
    selectedId = id;
    const url = new URL(window.location.href);
    url.searchParams.set("recipe", id);
    window.history.replaceState({}, "", url);
    values = {};
    context = "";
    namespace = "";
    copied = false;
    copyError = false;
    tick().then(() => document.getElementById("recipe-detail")?.scrollIntoView({ block: "nearest" }));
  }

  function closeRecipe() {
    selectedId = "";
    const url = new URL(window.location.href);
    url.searchParams.delete("recipe");
    window.history.replaceState({}, "", url);
  }

  function persist(next) {
    saved = next;
    try { storageAvailable = writeCollections(window.localStorage, next); }
    catch (_error) { storageAvailable = false; }
  }

  function toggleFavorite(id) {
    const favorites = saved.favorites.includes(id) ? saved.favorites.filter((item) => item !== id) : [...saved.favorites, id];
    persist({ ...saved, favorites });
  }

  function addCollection() {
    const name = collectionName.trim();
    if (!name || name.length > 40 || saved.collections.some((item) => item.name === name) || saved.collections.length >= 20) return;
    persist({ ...saved, collections: [...saved.collections, { name, ids: [] }] });
    activeCollection = name;
    collectionName = "";
  }

  function toggleInCollection(id) {
    const collections = saved.collections.map((item) => item.name === activeCollection
      ? { ...item, ids: item.ids.includes(id) ? item.ids.filter((savedId) => savedId !== id) : [...item.ids, id] }
      : item);
    persist({ ...saved, collections });
  }

  function deleteCollection() {
    persist({ ...saved, collections: saved.collections.filter((item) => item.name !== activeCollection) });
    activeCollection = "";
  }

  async function copyCommand() {
    if (!canCopy) return;
    try {
      await navigator.clipboard.writeText(built.command);
      copied = true;
      copyError = false;
    } catch (_error) {
      copied = false;
      copyError = true;
    }
  }
</script>

<section class:compact class="workbench" id="recipes" aria-label={lang === "ru" ? "Рецепты команд" : "Command recipes"}>
  <div class="wb-head">
    <div>
      <p class="section-kicker">{lang === "ru" ? "Каталог рецептов" : "Recipe catalog"}</p>
      <h2>{lang === "ru" ? "Найдите и подготовьте команду" : "Find and prepare a command"}</h2>
      {#if !compact}<p>{lang === "ru" ? "40 редакторских рецептов. Команды выполняете вы, после проверки контекста и параметров." : "40 editorial recipes. Review context and parameters before running a command yourself."}</p>{/if}
    </div>
  </div>
  <label class="wb-search-label" for="recipe-search">{lang === "ru" ? "Поиск рецептов" : "Search recipes"}</label>
  <input id="recipe-search" class="wb-search" bind:this={searchInput} bind:value={query} on:input={() => resultCursor = -1} type="search" autocomplete="off" placeholder={lang === "ru" ? "Например: прошлые логи, service, rollout" : "Try previous logs, service, rollout"} aria-keyshortcuts="Control+K Meta+K">
  {#if !compact || query}
    <div class="wb-filters">
      <label>{lang === "ru" ? "Раздел" : "Category"}
        <select bind:value={category}><option value="">{lang === "ru" ? "Все" : "All"}</option>{#each ["viewing", "management", "workloads", "network", "storage", "security", "cluster", "utilities"] as item}<option value={item}>{item}</option>{/each}</select>
      </label>
      <label>{lang === "ru" ? "Последствия" : "Effect"}
        <select bind:value={effect}><option value="">{lang === "ru" ? "Все" : "All"}</option><option value="read">{lang === "ru" ? "Чтение" : "Read"}</option><option value="write">{lang === "ru" ? "Изменение" : "Write"}</option><option value="exec">Exec</option></select>
      </label>
      <span role="status">{results.length} {lang === "ru" ? "рецептов" : "recipes"}</span>
    </div>
    {#if results.length}
      <div class="wb-results" role="listbox" aria-label={lang === "ru" ? "Результаты" : "Results"}>
        {#each visible as item, index (item.id)}
          <button type="button" role="option" aria-selected={selectedId === item.id || resultCursor === index} class:active={resultCursor === index} on:click={() => choose(item.id)}>
            <span><strong>{item.title[lang]}</strong><small>{item.category} · {item.effect} · {item.id}</small></span><span aria-hidden="true">→</span>
          </button>
        {/each}
      </div>
      {#if !compact && results.length > 8 && !showAll}<button class="wb-more" type="button" on:click={() => showAll = true}>{lang === "ru" ? `Показать все ${results.length}` : `Show all ${results.length}`}</button>{/if}
    {:else}<p class="wb-empty">{lang === "ru" ? "Совпадений нет. Уберите фильтр или измените запрос." : "No matches. Change the query or clear a filter."}</p>{/if}
  {/if}

  {#if selected}
    <article class="wb-detail" id="recipe-detail">
      <div class="wb-detail-head"><div><small>{selected.id} · {selected.status}</small><h3>{selected.title[lang]}</h3></div><button type="button" on:click={closeRecipe} aria-label={lang === "ru" ? "Закрыть карточку" : "Close card"}>×</button></div>
      <p class:danger={selected.effect !== "read"} class="wb-effect"><strong>{lang === "ru" ? "Последствие:" : "Effect:"}</strong> {selected.effect === "read" ? (lang === "ru" ? "чтение, без изменения ресурсов" : "reads without changing resources") : selected.effect === "write" ? (lang === "ru" ? "изменяет ресурсы кластера" : "changes cluster resources") : (lang === "ru" ? "выполняет команду в контейнере" : "runs a command in a container")}</p>
      {#if selected.sensitive}<p class="wb-notice">{lang === "ru" ? "Вывод может содержать чувствительные данные." : "Output may contain sensitive data."}</p>{/if}
      {#if prod}<p class="wb-notice">{lang === "ru" ? "Вы отметили production. Проверьте контекст и влияние команды перед запуском." : "You marked production. Check context and impact before running."}</p>{/if}
      <div class="wb-fields">
        {#each selected.params as param}
          <label>{param.label[lang]} <input value={values[param.name] || ""} on:input={(event) => values = { ...values, [param.name]: event.currentTarget.value }} autocomplete="off" aria-invalid={Boolean(built?.errors[param.name])}></label>
        {/each}
        {#if selected.command.startsWith("kubectl ") && selected.scope !== "local"}
          <label>Context <input bind:value={context} autocomplete="off" aria-invalid={Boolean(built?.errors.context)}></label>
          {#if selected.scope !== "cluster"}<label>Namespace <input bind:value={namespace} autocomplete="off" aria-invalid={Boolean(built?.errors.namespace)}></label>{/if}
        {/if}
        <label class="wb-check"><input type="checkbox" bind:checked={prod}>Production</label>
      </div>
      {#if !built?.ready}<p class="wb-notice">{lang === "ru" ? "Заполните параметры допустимыми именами и проверьте контекст. Команда пока не готова." : "Enter valid names and check context. The command is not ready."}</p>{/if}
      <pre class="wb-code"><code>{built?.ready ? built.command : selected.command}</code></pre>
      {#if canCopy}<button class="wb-primary" type="button" on:click={copyCommand}>{copied ? (lang === "ru" ? "Скопировано" : "Copied") : (lang === "ru" ? "Копировать команду" : "Copy command")}</button>{:else if selected.params.length && !buildable.has(selected.id)}<p class="wb-notice">{lang === "ru" ? "Для этого рецепта пока доступен только справочник; конструктор не проверен." : "This recipe currently links to the reference; its builder is not reviewed yet."}</p>{/if}
      {#if copyError}<p role="alert">{lang === "ru" ? "Буфер обмена недоступен. Выделите текст команды вручную." : "Clipboard unavailable. Select the command text manually."}</p>{/if}
      <p class="wb-meta">{lang === "ru" ? "Нужно:" : "Requires:"} {selected.requires.join(", ")} · {lang === "ru" ? "Статус: редакторская проверка, без проверки на кластере" : "Status: editorial review, not tested on a cluster"}</p>
      <p class="wb-links"><a href={sourceHref}>{lang === "ru" ? "Исходный раздел" : "Source section"}</a> · <a href={selected.source} target="_blank" rel="noreferrer">Kubernetes docs ↗</a></p>
      {#if storageAvailable}<div class="wb-save"><button type="button" on:click={() => toggleFavorite(selected.id)}>{saved.favorites.includes(selected.id) ? (lang === "ru" ? "Убрать из избранного" : "Remove favorite") : (lang === "ru" ? "В избранное" : "Favorite")}</button>{#if activeCollection}<button type="button" on:click={() => toggleInCollection(selected.id)}>{saved.collections.find((item) => item.name === activeCollection)?.ids.includes(selected.id) ? (lang === "ru" ? "Убрать из подборки" : "Remove from collection") : (lang === "ru" ? "В подборку" : "Add to collection")}</button>{/if}</div>{/if}
    </article>
  {/if}

  {#if !compact}
    <details class="wb-collections"><summary>{lang === "ru" ? "Избранное и подборки" : "Favorites and collections"} ({saved.favorites.length})</summary>
      {#if storageAvailable}
        <p>{saved.favorites.map((id) => recipeById[id]?.title[lang]).filter(Boolean).join(", ") || (lang === "ru" ? "Пока пусто" : "Empty")}</p>
        <div class="wb-collection-form"><input bind:value={collectionName} maxlength="40" placeholder={lang === "ru" ? "Название подборки" : "Collection name"}><button type="button" on:click={addCollection}>{lang === "ru" ? "Создать" : "Create"}</button></div>
        <label>{lang === "ru" ? "Активная подборка" : "Active collection"}<select bind:value={activeCollection}><option value="">—</option>{#each saved.collections as item}<option value={item.name}>{item.name} ({item.ids.length})</option>{/each}</select></label>
        {#if activeCollection}<button type="button" on:click={deleteCollection}>{lang === "ru" ? "Удалить подборку" : "Delete collection"}</button>{/if}
        <a download="kubectl-recipes.json" href={`data:application/json;charset=utf-8,${encodeURIComponent(exportCollections(saved))}`}>{lang === "ru" ? "Экспорт ID" : "Export IDs"}</a>
        <button type="button" on:click={() => persist({ version: 1, favorites: [], collections: [] })}>{lang === "ru" ? "Удалить все сохранённые данные" : "Delete all saved data"}</button>
      {:else}<p role="status">{lang === "ru" ? "Локальное хранилище недоступно; сохранение отключено." : "Local storage is unavailable; saving is disabled."}</p>{/if}
    </details>
  {/if}
</section>
