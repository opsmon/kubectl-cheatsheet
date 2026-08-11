<script module>
export const categories = [
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

export const docsOrder = ["viewing", "management", "workloads", "network", "storage", "security", "cluster", "utilities"];

export const ui = {
  ru: {
    eyebrow: "Команды Kubernetes. Без лишнего.",
    title: 'Всё нужное для <code>kubectl</code><br>в одном месте.',
    lead: "Найдите команду по задаче, объекту или сценарию. На русском и английском.",
    searchLabel: "Поиск по командам",
    searchPlaceholder: "Попробуйте logs, rollout или namespace",
    commandCountLabel: "команд и примеров",
    navBrowse: "Разделы",
    navDocs: "Документация",
    navContribute: "Участвовать",
    navigationLabel: "Основная навигация",
    languageLabel: "Язык сайта",
    brandLabel: "kubectl Cheatsheet - главная",
    description: "Быстрый двуязычный справочник команд kubectl для ежедневной работы с Kubernetes.",
    quickKicker: "Быстрый старт",
    quickTitle: "Часто нужно прямо сейчас",
    quickNote: "Проверенные сценарии",
    categoriesKicker: "Справочник",
    categoriesTitle: "Все разделы",
    categoriesDescription: "От первого get до диагностики кластера.",
    footerCopy: "для спокойной работы с Kubernetes.",
    footerGitHub: "Открытый код на GitHub",
    openCurrent: "Открыть на русском",
    openAlternate: "Открыть на английском",
    resultsTitle: "Результаты поиска",
    resultsSuffix: " найдено",
    empty: "Ничего не найдено. Попробуйте logs, patch, namespace, jsonpath или rollout.",
    copied: "Скопировано",
    copyCommand: "Скопировать команду",
    home: "На главную",
    topics: "Разделы",
    backToTop: "Наверх",
    officialDocs: "Официальная документация",
    practicalReference: "Практический справочник kubectl",
    categoryLabels: {
      viewing: "Диагностика",
      management: "Управление",
      workloads: "Нагрузки",
      network: "Сеть",
      storage: "Хранилище",
      security: "Безопасность",
      cluster: "Кластер",
      utilities: "Утилиты"
    },
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
    navContribute: "Contribute",
    navigationLabel: "Primary navigation",
    languageLabel: "Site language",
    brandLabel: "kubectl Cheatsheet - home",
    description: "A fast bilingual kubectl command reference for everyday Kubernetes work.",
    quickKicker: "Quick start",
    quickTitle: "What you need right now",
    quickNote: "Practical workflows",
    categoriesKicker: "Reference",
    categoriesTitle: "All topics",
    categoriesDescription: "From your first get to cluster diagnostics.",
    footerCopy: "for calmer Kubernetes work.",
    footerGitHub: "Open source on GitHub",
    openCurrent: "Open English",
    openAlternate: "Open Russian",
    resultsTitle: "Search results",
    resultsSuffix: " found",
    empty: "Nothing found. Try logs, patch, namespace, jsonpath, or rollout.",
    copied: "Copied",
    copyCommand: "Copy command",
    home: "Home",
    topics: "Topics",
    backToTop: "Back to top",
    officialDocs: "Official documentation",
    practicalReference: "A practical kubectl reference",
    categoryLabels: {
      viewing: "Viewing",
      management: "Management",
      workloads: "Workloads",
      network: "Network",
      storage: "Storage",
      security: "Security",
      cluster: "Cluster",
      utilities: "Utilities"
    },
    tasks: {
      pod: ["Pod will not start", "Status, events, logs, and diagnostics"],
      diff: ["Check before apply", "Compare configurations"],
      rollback: ["Roll back a deployment", "Rollout history and undo"]
    }
  }
};

export function publishedFile(file) {
  return file.replace(/\.md$/, ".html");
}

export function titleFor(category, lang) {
  return lang === "ru" ? category.ruTitle : category.enTitle;
}

export function fileFor(category, lang) {
  return publishedFile(lang === "ru" ? category.ruFile : category.enFile);
}

export function summaryFor(category, lang) {
  return lang === "ru" ? category.ruSummary : category.enSummary;
}

export function hashFor(topic, lang) {
  return lang === "ru" ? topic[1] : topic[2];
}
</script>
