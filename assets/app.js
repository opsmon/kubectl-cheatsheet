const categories = [
  {
    id: "viewing",
    ruTitle: "Просмотр и диагностика",
    enTitle: "Viewing and diagnostics",
    summary: "Pods, logs, events, resource usage, and first-line troubleshooting.",
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
      ["ephemeral", "ephemeral-containers-временные-контейнеры", "ephemeral-containers"]
    ]
  },
  {
    id: "management",
    ruTitle: "Управление ресурсами",
    enTitle: "Resource management",
    summary: "Apply, create, edit, patch, delete, diff, and wait for resource state.",
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
    summary: "Pods, deployments, rollouts, scaling, HPA/VPA, jobs, and cronjobs.",
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
    summary: "Port-forwarding, services, ingress, network policies, and API proxy access.",
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
    summary: "ConfigMaps, Secrets, persistent volumes, claims, and Kustomize workflows.",
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
    summary: "RBAC, permission checks, certificates, pod security, PDB, quotas, and limits.",
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
    summary: "Contexts, namespaces, nodes, CRDs, API resources, capacity, and selectors.",
    ruFile: "ru/cluster.md",
    enFile: "eng/cluster.md",
    topics: [
      ["config", "контексты-и-конфигурация-config", "contexts-and-configuration-config"],
      ["namespaces", "управление-неймспейсами", "namespace-management"],
      ["nodes", "управление-нодами-taintcordondrain", "node-management-taintcordondrain"],
      ["crd", "custom-resource-definitions-crd", "custom-resource-definitions-crd"],
      ["api-resources", "работа-с-api-ресурсами-api-resources", "working-with-api-resources-api-resources"],
      ["capacity", "планирование-ёмкости-кластера-capacity-planning", "cluster-capacity--resource-planning"],
      ["field-selectors", "селекторы-полей-и-фильтрация", "field-selectors-and-filtering"]
    ]
  },
  {
    id: "utilities",
    ruTitle: "Утилиты",
    enTitle: "Utilities",
    summary: "Exec, copy, labels, annotations, jsonpath, scheduling helpers, Helm, Krew, and aliases.",
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

const state = {
  lang: "ru",
  query: ""
};

const ui = {
  ru: {
    eyebrow: "Быстрый поиск команд",
    title: 'Найдите нужную команду <code>kubectl</code> без долгого чтения заметок.',
    lead: "Ищите по задаче, команде или объекту Kubernetes. Затем переходите прямо в нужный Markdown-раздел.",
    terminalFlow: "типичный сценарий",
    terminalHint: "бери из docs",
    searchLabel: "Поиск",
    searchPlaceholder: "logs, rollout, namespace, ingress...",
    tasksTitle: "Частые задачи",
    open: "Открыть",
    empty: "Ничего не найдено. Попробуйте logs, patch, namespace, jsonpath или rollout.",
    tasks: {
      pod: "Под не запускается",
      diff: "Проверить изменения перед apply",
      rollback: "Откатить deployment",
      auth: "Проверить права доступа",
      format: "Настроить формат вывода"
    }
  },
  eng: {
    eyebrow: "Fast command lookup",
    title: 'Find the right <code>kubectl</code> command without digging through long notes.',
    lead: "Search by task, command, or Kubernetes object. Then jump straight to the exact Markdown section.",
    terminalFlow: "common flow",
    terminalHint: "copy from docs",
    searchLabel: "Search",
    searchPlaceholder: "logs, rollout, namespace, ingress...",
    tasksTitle: "Common Tasks",
    open: "Open",
    empty: "Nothing found. Try a command like logs, patch, namespace, jsonpath, or rollout.",
    tasks: {
      pod: "Pod will not start",
      diff: "Check changes before apply",
      rollback: "Roll back a deployment",
      auth: "Check access rights",
      format: "Format output"
    }
  }
};

const cards = document.querySelector("#cards");
const searchInput = document.querySelector("#searchInput");
const langButtons = document.querySelectorAll("[data-lang]");
const taskLinks = document.querySelectorAll("[data-i18n-href]");

function titleFor(category) {
  return state.lang === "ru" ? category.ruTitle : category.enTitle;
}

function fileFor(category) {
  return state.lang === "ru" ? category.ruFile : category.enFile;
}

function hashFor(topic) {
  return state.lang === "ru" ? topic[1] : topic[2];
}

function matches(category) {
  const haystack = [
    category.id,
    category.ruTitle,
    category.enTitle,
    category.summary,
    ...category.topics.map((topic) => topic.join(" "))
  ].join(" ").toLowerCase();

  return haystack.includes(state.query);
}

function render() {
  const visible = categories.filter(matches);
  const copy = ui[state.lang];

  document.querySelector("#eyebrow").textContent = copy.eyebrow;
  document.querySelector("#page-title").innerHTML = copy.title;
  document.querySelector("#lead").textContent = copy.lead;
  document.querySelector("#terminalFlow").textContent = copy.terminalFlow;
  document.querySelector("#terminalHint").textContent = copy.terminalHint;
  document.querySelector("#searchLabel").textContent = copy.searchLabel;
  document.querySelector("#tasksTitle").textContent = copy.tasksTitle;
  searchInput.placeholder = copy.searchPlaceholder;
  document.querySelectorAll("[data-task]").forEach((item) => {
    item.textContent = copy.tasks[item.dataset.task];
  });

  cards.innerHTML = visible.length
    ? visible.map(renderCard).join("")
    : `<p class="empty">${copy.empty}</p>`;

  taskLinks.forEach((link) => {
    if (state.lang === "eng") {
      link.dataset.ruHref = link.getAttribute("href");
      link.setAttribute("href", link.dataset.i18nHref);
    } else if (link.dataset.ruHref) {
      link.setAttribute("href", link.dataset.ruHref);
    }
  });
}

function renderCard(category) {
  const file = fileFor(category);
  const copy = ui[state.lang];
  const chips = category.topics
    .map((topic) => `<a class="chip" href="${file}#${hashFor(topic)}">${topic[0]}</a>`)
    .join("");

  return `
    <article class="card" data-category="${category.id}">
      <div class="card-header">
        <span class="card-kicker">${category.id}</span>
        <h2>${titleFor(category)}</h2>
        <p>${category.summary}</p>
      </div>
      <div class="chips">${chips}</div>
      <div class="card-footer">
        <a class="button-link" href="${file}">${copy.open} ${state.lang.toUpperCase()}</a>
        <a class="button-link secondary" href="${state.lang === "ru" ? category.enFile : category.ruFile}">
          ${state.lang === "ru" ? "EN" : "RU"}
        </a>
      </div>
    </article>
  `;
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    langButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    document.documentElement.lang = state.lang === "ru" ? "ru" : "en";
    render();
  });
});

render();
