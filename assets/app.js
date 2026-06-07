const categories = [
  {
    id: "viewing",
    ruTitle: "Просмотр и диагностика",
    enTitle: "Viewing and diagnostics",
    ruSummary: "Поды, логи, события, потребление ресурсов и базовая диагностика.",
    enSummary: "Pods, logs, events, resource usage, and first-line troubleshooting.",
    ruFile: "ru/viewing.md",
    enFile: "eng/viewing.md",
    topics: [
      ["get", "получение-информации-get", "getting-information-get"],
      ["describe", "детальная-информация-describe", "detailed-information-describe"],
      ["logs", "просмотр-логов-logs", "viewing-logs-logs"],
      ["top", "мониторинг-ресурсов-top", "resource-monitoring-top"],
      ["debug", "отладка-и-диагностика-debug", "debugging-and-diagnostics-debug"],
      ["events", "события-events", "events-events"],
      ["troubleshooting", "диагностика-типичных-проблем-подов-troubleshooting", "troubleshooting-common-pod-issues-troubleshooting"],
      ["incidents", "быстрые-сценарии-инцидентов-incidents", "fast-incident-playbooks-incidents"],
      ["ephemeral", "ephemeral-containers-временные-контейнеры", "ephemeral-containers"]
    ]
  },
  {
    id: "management",
    ruTitle: "Управление ресурсами",
    enTitle: "Resource management",
    ruSummary: "Apply, create, edit, patch, delete, diff и ожидание состояния ресурсов.",
    enSummary: "Apply, create, edit, patch, delete, diff, and wait for resource state.",
    ruFile: "ru/management.md",
    enFile: "eng/management.md",
    topics: [
      ["apply/create", "создание-и-применение-ресурсов-applycreate", "creating-and-applying-resources-applycreate"],
      ["edit", "редактирование-ресурсов-edit", "editing-resources-edit"],
      ["patch", "патчинг-ресурсов-patch", "patching-resources-patch"],
      ["set", "быстрое-изменение-ресурсов-set", "quick-resource-modification-set"],
      ["delete", "удаление-ресурсов-delete", "deleting-resources-delete"],
      ["diff", "сравнение-конфигураций-diff", "comparing-configurations-diff"],
      ["ssa", "server-side-apply-ssa", "server-side-apply-ssa"],
      ["replace/attach", "замена-и-подключение-к-ресурсам-replaceattach", "replace-and-attach-to-resources-replaceattach"],
      ["wait", "ожидание-готовности-ресурсов-wait", "waiting-for-conditions-wait"]
    ]
  },
  {
    id: "workloads",
    ruTitle: "Нагрузки",
    enTitle: "Workloads",
    ruSummary: "Поды, deployment-ы, rollout-ы, масштабирование, HPA/VPA, jobs и cronjobs.",
    enSummary: "Pods, deployments, rollouts, scaling, HPA/VPA, jobs, and cronjobs.",
    ruFile: "ru/workloads.md",
    enFile: "eng/workloads.md",
    topics: [
      ["run", "запуск-подов-и-задач-run", "running-pods-and-jobs-run"],
      ["rollout", "управление-обновлениями-rollout", "managing-updates-rollout"],
      ["scale", "масштабирование-scale", "scaling-scale"],
      ["hpa", "horizontalpodautoscaler-hpa", "horizontalpodautoscaler-hpa"],
      ["vpa", "verticalpodautoscaler-vpa", "verticalpodautoscaler-vpa"],
      ["statefulsets", "statefulsets", "statefulsets"],
      ["daemonsets", "daemonsets", "daemonsets"],
      ["jobs/cronjobs", "jobs-и-cronjobs", "jobs-and-cronjobs"]
    ]
  },
  {
    id: "network",
    ruTitle: "Сеть",
    enTitle: "Network",
    ruSummary: "Port-forwarding, сервисы, ingress, сетевые политики и доступ к API.",
    enSummary: "Port-forwarding, services, ingress, network policies, and API proxy access.",
    ruFile: "ru/network.md",
    enFile: "eng/network.md",
    topics: [
      ["port-forward", "проброс-портов-port-forward", "port-forwarding-port-forward"],
      ["expose", "создание-сервисов-expose", "creating-services-expose"],
      ["ingress", "ingress", "ingress"],
      ["networkpolicy", "сетевые-политики-networkpolicy", "network-policies-networkpolicy"],
      ["proxy", "прокси-и-доступ-к-api-proxy", "proxy-and-api-access-proxy"]
    ]
  },
  {
    id: "storage",
    ruTitle: "Хранилище",
    enTitle: "Storage",
    ruSummary: "ConfigMaps, Secrets, постоянные тома, PVC и рабочие процессы Kustomize.",
    enSummary: "ConfigMaps, Secrets, persistent volumes, claims, and Kustomize workflows.",
    ruFile: "ru/storage.md",
    enFile: "eng/storage.md",
    topics: [
      ["configmaps", "configmaps", "configmaps"],
      ["secrets", "управление-secret-secret", "secrets-management-secret"],
      ["pv/pvc", "постоянные-тома-pvpvc", "persistent-volumes-pvpvc"],
      ["kustomize", "работа-с-kustomize-kustomize", "working-with-kustomize-kustomize"]
    ]
  },
  {
    id: "security",
    ruTitle: "Безопасность",
    enTitle: "Security",
    ruSummary: "RBAC, проверка прав, сертификаты, безопасность подов, PDB, квоты и лимиты.",
    enSummary: "RBAC, permission checks, certificates, pod security, PDB, quotas, and limits.",
    ruFile: "ru/security.md",
    enFile: "eng/security.md",
    topics: [
      ["rbac", "rbac---роли-и-управление-доступом", "rbac---roles-and-access-control"],
      ["auth can-i", "проверка-прав-доступа-auth", "checking-permissions-auth"],
      ["csr", "запросы-на-подпись-сертификата-csr", "certificate-signing-requests-csr"],
      ["pss", "pod-security-standards-pss", "pod-security-standards-pss"],
      ["security-context", "security-context", "security-context"],
      ["pdb", "poddisruptionbudget-pdb", "poddisruptionbudget-pdb"],
      ["quota/limits", "resourcequota-и-limitrange", "resourcequota-and-limitrange"]
    ]
  },
  {
    id: "cluster",
    ruTitle: "Кластер",
    enTitle: "Cluster",
    ruSummary: "Контексты, namespaces, ноды, CRD, API-ресурсы, ёмкость, версии и селекторы.",
    enSummary: "Contexts, namespaces, nodes, CRDs, API resources, capacity, versions, and selectors.",
    ruFile: "ru/cluster.md",
    enFile: "eng/cluster.md",
    topics: [
      ["config", "контексты-и-конфигурация-config", "contexts-and-configuration-config"],
      ["namespaces", "управление-неймспейсами", "namespace-management"],
      ["nodes", "управление-нодами-taintcordondrain", "node-management-taintcordondrain"],
      ["crd", "custom-resource-definitions-crd", "custom-resource-definitions-crd"],
      ["api-resources", "работа-с-api-ресурсами-api-resources", "working-with-api-resources-api-resources"],
      ["capacity", "планирование-ёмкости-кластера-capacity-planning", "cluster-capacity--resource-planning"],
      ["versions", "версии-и-совместимость-version-skew", "versions-and-compatibility-version-skew"],
      ["field-selectors", "селекторы-полей-и-фильтрация", "field-selectors-and-filtering"]
    ]
  },
  {
    id: "utilities",
    ruTitle: "Утилиты",
    enTitle: "Utilities",
    ruSummary: "Exec, copy, labels, annotations, jsonpath, планирование, Helm, Krew и aliases.",
    enSummary: "Exec, copy, labels, annotations, jsonpath, scheduling helpers, Helm, Krew, and aliases.",
    ruFile: "ru/utilities.md",
    enFile: "eng/utilities.md",
    topics: [
      ["exec", "выполнение-команд-в-контейнере-exec", "execute-commands-in-container-exec"],
      ["cp", "копирование-файлов-cp", "copying-files-cp"],
      ["label/annotate", "работа-с-метками-labelannotate", "working-with-labels-labelannotate"],
      ["jsonpath", "продвинутый-вывод-данных-jsonpathcustom-columns", "advanced-output-jsonpathcustom-columns"],
      ["scheduling", "планирование-подов-affinity--tolerations--nodeselector", "pod-scheduling-affinity--tolerations--nodeselector"],
      ["tips", "советы-и-полезные-паттерны", "tips-and-useful-patterns"],
      ["helm", "helm", "helm"],
      ["krew", "плагины-kubectl-krew", "kubectl-plugins-krew"],
      ["aliases", "алиасы-и-автодополнение-в-shell", "shell-aliases--autocompletion"]
    ]
  }
];

const storedLanguage = localStorage.getItem("kubectl-cheatsheet-language");
const state = {
  lang: storedLanguage === "eng" ? "eng" : "ru",
  query: ""
};

const ui = {
  ru: {
    eyebrow: "Команды Kubernetes. Без лишнего.",
    title: 'Всё нужное для <code>kubectl</code><br>в одном месте.',
    lead: "Найдите команду по задаче, объекту или сценарию. На русском и английском.",
    searchLabel: "Поиск по командам",
    searchPlaceholder: "Попробуйте logs, rollout или namespace",
    commandCountLabel: "команд и примеров",
    navBrowse: "Разделы",
    navDocs: "Документация",
    quickKicker: "Быстрый старт",
    quickTitle: "Часто нужно прямо сейчас",
    quickNote: "Проверенные сценарии",
    categoriesKicker: "Справочник",
    categoriesTitle: "Все разделы",
    categoriesDescription: "От первого get до диагностики кластера.",
    footerCopy: "для спокойной работы с Kubernetes.",
    open: "Открыть",
    resultsTitle: "Результаты поиска",
    resultsSuffix: " найдено",
    empty: "Ничего не найдено. Попробуйте logs, patch, namespace, jsonpath или rollout.",
    copied: "Скопировано",
    copyCommand: "Скопировать команду",
    tasks: {
      pod: ["Под не запускается", "Статус, события, логи и диагностика"],
      diff: ["Проверить перед apply", "Сравнение конфигураций"],
      rollback: ["Откатить deployment", "Rollout history и undo"]
    }
  },
  eng: {
    eyebrow: "Kubernetes commands. Nothing extra.",
    title: 'Everything you need for <code>kubectl</code><br>in one place.',
    lead: "Find a command by task, object, or scenario. Available in English and Russian.",
    searchLabel: "Search commands",
    searchPlaceholder: "Try logs, rollout, or namespace",
    commandCountLabel: "commands and examples",
    navBrowse: "Browse",
    navDocs: "Documentation",
    quickKicker: "Quick start",
    quickTitle: "What you need right now",
    quickNote: "Practical workflows",
    categoriesKicker: "Reference",
    categoriesTitle: "All topics",
    categoriesDescription: "From your first get to cluster diagnostics.",
    footerCopy: "for calmer Kubernetes work.",
    open: "Open",
    resultsTitle: "Search results",
    resultsSuffix: " found",
    empty: "Nothing found. Try logs, patch, namespace, jsonpath, or rollout.",
    copied: "Copied",
    copyCommand: "Copy command",
    tasks: {
      pod: ["Pod will not start", "Status, events, logs, and diagnostics"],
      diff: ["Check before apply", "Compare configurations"],
      rollback: ["Roll back a deployment", "Rollout history and undo"]
    }
  }
};

const cards = document.querySelector("#cards");
const results = document.querySelector("#results");
const searchInput = document.querySelector("#searchInput");
const langButtons = document.querySelectorAll("[data-lang]");
const taskLinks = document.querySelectorAll("[data-i18n-href]");
const commandIndex = Array.isArray(window.commandIndex) ? window.commandIndex : [];

function publishedFile(file) {
  return file.replace(/\.md$/, ".html");
}

function titleFor(category) {
  return state.lang === "ru" ? category.ruTitle : category.enTitle;
}

function fileFor(category) {
  return publishedFile(state.lang === "ru" ? category.ruFile : category.enFile);
}

function summaryFor(category) {
  return state.lang === "ru" ? category.ruSummary : category.enSummary;
}

function hashFor(topic) {
  return state.lang === "ru" ? topic[1] : topic[2];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function matchingCommands(categoryId) {
  if (!state.query) {
    return [];
  }

  return commandIndex
    .filter((item) => item.lang === state.lang && item.category === categoryId)
    .filter((item) => {
      const haystack = [item.section, item.comment, item.command].join(" ").toLowerCase();
      return haystack.includes(state.query);
    });
}

function matches(category) {
  if (!state.query) {
    return true;
  }

  const haystack = [
    category.id,
    category.ruTitle,
    category.enTitle,
    category.ruSummary,
    category.enSummary,
    ...category.topics.map((topic) => topic.join(" "))
  ].join(" ").toLowerCase();

  return haystack.includes(state.query) || matchingCommands(category.id).length > 0;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function render() {
  const visible = categories.filter(matches);
  const copy = ui[state.lang];

  setText("#eyebrow", copy.eyebrow);
  document.querySelector("#page-title").innerHTML = copy.title;
  setText("#lead", copy.lead);
  setText("#searchLabel", copy.searchLabel);
  setText("#commandCountLabel", copy.commandCountLabel);
  setText("#navBrowse", copy.navBrowse);
  setText("#navDocs", copy.navDocs);
  setText("#quickKicker", copy.quickKicker);
  setText("#quick-title", copy.quickTitle);
  setText("#quickNote", copy.quickNote);
  setText("#categoriesKicker", copy.categoriesKicker);
  setText("#categories-title", copy.categoriesTitle);
  setText("#categoriesDescription", copy.categoriesDescription);
  setText("#footerCopy", copy.footerCopy);
  searchInput.placeholder = copy.searchPlaceholder;

  document.querySelectorAll("[data-task]").forEach((item) => {
    item.textContent = copy.tasks[item.dataset.task][0];
  });
  document.querySelectorAll("[data-task-detail]").forEach((item) => {
    item.textContent = copy.tasks[item.dataset.taskDetail][1];
  });

  cards.innerHTML = visible.length
    ? visible.map(renderCard).join("")
    : `<p class="empty">${copy.empty}</p>`;

  renderResults();

  taskLinks.forEach((link) => {
    if (!link.dataset.ruHref) {
      link.dataset.ruHref = link.getAttribute("href");
    }
    link.setAttribute("href", state.lang === "eng" ? link.dataset.i18nHref : link.dataset.ruHref);
  });

  document.querySelector("#navDocs").setAttribute("href", state.lang === "ru" ? "ru/viewing.html" : "eng/viewing.html");
  langButtons.forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.documentElement.lang = state.lang === "ru" ? "ru" : "en";
}

function renderCard(category, index) {
  const file = fileFor(category);
  const alternateFile = publishedFile(state.lang === "ru" ? category.enFile : category.ruFile);
  const copy = ui[state.lang];
  const chips = category.topics
    .map((topic) => `<a class="chip" href="${file}#${hashFor(topic)}">${escapeHtml(topic[0])}</a>`)
    .join("");

  return `
    <article class="card" data-category="${category.id}">
      <span class="card-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <div class="card-header">
        <span class="card-kicker">${escapeHtml(category.id)}</span>
        <h2>${escapeHtml(titleFor(category))}</h2>
        <p>${escapeHtml(summaryFor(category))}</p>
      </div>
      <div class="chips">${chips}</div>
      <div class="card-footer">
        <a class="button-link" href="${file}">${copy.open} ${state.lang.toUpperCase()}</a>
        <a class="button-link secondary" href="${alternateFile}">
          ${state.lang === "ru" ? "English" : "Русский"}
        </a>
      </div>
    </article>
  `;
}

function renderResults() {
  const copy = ui[state.lang];
  const items = state.query
    ? commandIndex.filter((item) => {
        if (item.lang !== state.lang) {
          return false;
        }

        const haystack = [item.category, item.section, item.comment, item.command].join(" ").toLowerCase();
        return haystack.includes(state.query);
      }).slice(0, 12)
    : [];

  results.hidden = items.length === 0;
  results.innerHTML = items.length
    ? `
      <div class="results-head">
        <h2>${copy.resultsTitle}</h2>
        <span>${items.length}${copy.resultsSuffix}</span>
      </div>
      <div class="result-list">
        ${items.map(renderResult).join("")}
      </div>
    `
    : "";
}

function renderResult(item) {
  const label = item.comment || item.section;
  const command = escapeHtml(item.command);

  return `
    <div class="result">
      <a class="result-main" href="${publishedFile(item.file)}#${item.hash}">
        <span>${escapeHtml(item.category)} / ${escapeHtml(item.section)}</span>
        <strong>${escapeHtml(label)}</strong>
        <code>${command}</code>
      </a>
      <button class="copy-command" type="button" data-command="${command}" aria-label="${ui[state.lang].copyCommand}">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <rect x="6" y="5" width="8" height="9" rx="1.5"></rect>
          <path d="M4 11V4.5C4 3.7 4.7 3 5.5 3H11"></path>
        </svg>
      </button>
    </div>
  `;
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("kubectl-cheatsheet-language", state.lang);
    render();
  });
});

results.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-command");
  if (!button) {
    return;
  }

  try {
    await navigator.clipboard.writeText(button.dataset.command);
    button.setAttribute("aria-label", ui[state.lang].copied);
    button.classList.add("is-copied");
    window.setTimeout(() => {
      button.setAttribute("aria-label", ui[state.lang].copyCommand);
      button.classList.remove("is-copied");
    }, 1400);
  } catch (_error) {
    searchInput.value = button.dataset.command;
    searchInput.select();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    searchInput.blur();
    render();
  }
});

setText("#commandCount", `${commandIndex.length}+`);
document.querySelector("#searchShortcut").textContent = navigator.platform.toLowerCase().includes("mac") ? "⌘ K" : "Ctrl K";
render();
