// Canonical recipe data. A status of editorial means reviewed for this catalog,
// not executed against a Kubernetes cluster or guaranteed for every version.
const source = "https://kubernetes.io/docs/reference/kubectl/";

function resourceFor(id) {
  if (/^pods?-/.test(id)) return "pod";
  if (/^deployment-/.test(id)) return "deployment";
  if (/^services?-/.test(id)) return "service";
  if (/^nodes?-/.test(id)) return "node";
  if (/^secrets?-/.test(id)) return "secret";
  if (/^(pvcs?|pvs?)-/.test(id)) return "volume";
  if (/^(roles|clusterroles|can-i)-/.test(id)) return "rbac";
  return "other";
}

function taskFor(id, effect) {
  if (effect === "write") return "change";
  if (effect === "exec") return "execute";
  if (/^(pod-describe|pod-previous-logs|service-describe|service-slices|node-describe)$/.test(id)) return "diagnose";
  return "inspect";
}

function recipe(id, category, section, ruHash, enHash, ruTitle, enTitle, command, effect = "read", params = [], extras = {}) {
  return {
    id, category, section, status: "editorial", effect,
    compatibility: "unknown", shell: "posix", resource: resourceFor(id), task: taskFor(id, effect),
    title: { ru: ruTitle, eng: enTitle }, command, params,
    source: extras.source || source,
    requires: extras.requires || ["kubectl", "cluster access"],
    sensitive: extras.sensitive || false,
    intents: extras.intents || [],
    links: { ru: `ru/${section}.html#${ruHash}`, eng: `eng/${section}.html#${enHash}` },
    ...extras
  };
}

const pod = { name: "pod", label: { ru: "Имя Pod", eng: "Pod name" }, kind: "name" };
const deploy = { name: "deployment", label: { ru: "Deployment", eng: "Deployment" }, kind: "name" };
const service = { name: "service", label: { ru: "Service", eng: "Service" }, kind: "name" };
const file = { name: "file", label: { ru: "Путь к файлу", eng: "File path" }, kind: "path" };
const node = { name: "node", label: { ru: "Имя Node", eng: "Node name" }, kind: "name" };

export const recipes = [
  // Viewing and troubleshooting
  recipe("pods-list", "viewing", "viewing", "получение-информации-get", "getting-information-get", "Список Pod", "List Pods", "kubectl get pods", "read", [], { intents: ["поды список", "list pods"] }),
  recipe("pods-wide", "viewing", "viewing", "получение-информации-get", "getting-information-get", "Pod с нодами и IP", "Pods with nodes and IPs", "kubectl get pods -o wide", "read"),
  recipe("pod-describe", "viewing", "viewing", "детальная-информация-describe", "detailed-information-describe", "События и состояние Pod", "Pod events and status", "kubectl describe pod {{pod}}", "read", [pod], { intents: ["под не запускается", "pod pending", "describe pod"] }),
  recipe("pod-logs", "viewing", "viewing", "просмотр-логов-logs", "viewing-logs-logs", "Логи Pod", "Pod logs", "kubectl logs {{pod}}", "read", [pod], { sensitive: true, intents: ["логи пода", "pod logs"] }),
  recipe("pod-previous-logs", "viewing", "viewing", "просмотр-логов-logs", "viewing-logs-logs", "Логи предыдущего контейнера", "Previous container logs", "kubectl logs {{pod}} --previous", "read", [pod], { sensitive: true, intents: ["прошлые логи", "previous logs", "crashloopbackoff"] }),
  // Management
  recipe("resources-get", "management", "viewing", "получение-информации-get", "getting-information-get", "Получить ресурс", "Get a resource", "kubectl get {{resource}}", "read", [{ name: "resource", label: { ru: "Ресурс", eng: "Resource" }, kind: "resource" }]),
  recipe("deployment-diff", "management", "management", "сравнение-конфигураций-diff", "comparing-configurations-diff", "Сравнить конфигурацию", "Diff configuration", "kubectl diff -f {{file}}", "read", [file], { intents: ["проверить перед apply", "diff before apply"] }),
  recipe("file-apply", "management", "management", "создание-и-применение-ресурсов-applycreate", "creating-and-applying-resources-applycreate", "Применить конфигурацию", "Apply configuration", "kubectl apply -f {{file}}", "write", [file]),
  recipe("file-dry-run", "management", "management", "создание-и-применение-ресурсов-applycreate", "creating-and-applying-resources-applycreate", "Проверка конфигурации на сервере", "Server dry run", "kubectl apply -f {{file}} --dry-run=server", "unknown", [file]),
  recipe("resource-explain", "management", "cluster", "работа-с-api-ресурсами-api-resources", "working-with-api-resources-api-resources", "Описание полей ресурса", "Explain resource fields", "kubectl explain {{resource}}", "read", [{ name: "resource", label: { ru: "Ресурс", eng: "Resource" }, kind: "resource" }]),
  // Workloads
  recipe("deployment-status", "workloads", "workloads", "управление-обновлениями-rollout", "managing-updates-rollout", "Статус rollout", "Rollout status", "kubectl rollout status deployment/{{deployment}}", "read", [deploy]),
  recipe("deployment-history", "workloads", "workloads", "управление-обновлениями-rollout", "managing-updates-rollout", "История rollout", "Rollout history", "kubectl rollout history deployment/{{deployment}}", "read", [deploy]),
  recipe("deployment-restart", "workloads", "workloads", "управление-обновлениями-rollout", "managing-updates-rollout", "Перезапустить Deployment", "Restart Deployment", "kubectl rollout restart deployment/{{deployment}}", "write", [deploy], { intents: ["перезапустить deployment", "restart deployment"] }),
  recipe("deployment-undo", "workloads", "workloads", "управление-обновлениями-rollout", "managing-updates-rollout", "Откатить Deployment", "Undo Deployment rollout", "kubectl rollout undo deployment/{{deployment}}", "write", [deploy]),
  recipe("jobs-list", "workloads", "workloads", "jobs-и-cronjobs", "jobs-and-cronjobs", "Список Job", "List Jobs", "kubectl get jobs", "read"),
  // Network
  recipe("services-list", "network", "viewing", "получение-информации-get", "getting-information-get", "Список Service", "List Services", "kubectl get services", "read"),
  recipe("service-describe", "network", "viewing", "детальная-информация-describe", "detailed-information-describe", "Проверить Service", "Describe Service", "kubectl describe svc {{service}}", "read", [service]),
  recipe("service-slices", "network", "viewing", "быстрые-сценарии-инцидентов-incidents", "fast-incident-playbooks-incidents", "EndpointSlice сервиса", "Service EndpointSlices", "kubectl get endpointslices -l kubernetes.io/service-name={{service}}", "read", [service], { intents: ["service не отвечает", "service unavailable", "endpoints"] }),
  recipe("network-policies", "network", "network", "сетевые-политики-networkpolicy", "network-policies-networkpolicy", "Список NetworkPolicy", "List NetworkPolicies", "kubectl get networkpolicy", "read"),
  recipe("ingress-list", "network", "network", "ingress", "ingress", "Список Ingress", "List Ingresses", "kubectl get ingress", "read"),
  // Storage
  recipe("configmaps-list", "storage", "storage", "configmaps", "configmaps", "Список ConfigMap", "List ConfigMaps", "kubectl get configmaps", "read"),
  recipe("secrets-list", "storage", "storage", "управление-secret-secret", "secrets-management-secret", "Список Secret", "List Secrets", "kubectl get secrets", "read", [], { sensitive: true }),
  recipe("secret-describe", "storage", "storage", "управление-secret-secret", "secrets-management-secret", "Метаданные Secret", "Secret metadata", "kubectl describe secret {{secret}}", "read", [{ name: "secret", label: { ru: "Secret", eng: "Secret" }, kind: "name" }], { sensitive: true }),
  recipe("pvcs-list", "storage", "storage", "постоянные-тома-pvpvc", "persistent-volumes-pvpvc", "Список PVC", "List PVCs", "kubectl get pvc", "read"),
  recipe("pvs-list", "storage", "storage", "постоянные-тома-pvpvc", "persistent-volumes-pvpvc", "Список PV", "List PVs", "kubectl get pv", "read", [], { scope: "cluster" }),
  // Security
  recipe("can-i", "security", "security", "проверка-прав-доступа-auth", "checking-permissions-auth", "Проверить право", "Check permission", "kubectl auth can-i {{verb}} {{resource}}", "read", [{ name: "verb", label: { ru: "Действие", eng: "Verb" }, kind: "name" }, { name: "resource", label: { ru: "Ресурс", eng: "Resource" }, kind: "resource" }], { intents: ["права доступа", "check permission"] }),
  recipe("roles-list", "security", "security", "rbac---роли-и-управление-доступом", "rbac---roles-and-access-control", "Список Role", "List Roles", "kubectl get roles", "read"),
  recipe("clusterroles-list", "security", "security", "rbac---роли-и-управление-доступом", "rbac---roles-and-access-control", "Список ClusterRole", "List ClusterRoles", "kubectl get clusterroles", "read", [], { scope: "cluster" }),
  recipe("csr-list", "security", "security", "запросы-на-подпись-сертификата-csr", "certificate-signing-requests-csr", "Список CSR", "List CSRs", "kubectl get csr", "read", [], { scope: "cluster" }),
  recipe("quota-list", "security", "security", "resourcequota-и-limitrange", "resourcequota-and-limitrange", "Список ResourceQuota", "List ResourceQuotas", "kubectl get resourcequota", "read"),
  // Cluster
  recipe("contexts-list", "cluster", "cluster", "контексты-и-конфигурация-config", "contexts-and-configuration-config", "Список контекстов", "List contexts", "kubectl config get-contexts", "read", [], { scope: "local" }),
  recipe("current-context", "cluster", "cluster", "контексты-и-конфигурация-config", "contexts-and-configuration-config", "Текущий контекст", "Current context", "kubectl config current-context", "read", [], { scope: "local" }),
  recipe("nodes-list", "cluster", "cluster", "управление-нодами-taintcordondrain", "node-management-taintcordondrain", "Список Node", "List Nodes", "kubectl get nodes", "read", [], { scope: "cluster" }),
  recipe("node-describe", "cluster", "cluster", "управление-нодами-taintcordondrain", "node-management-taintcordondrain", "Состояние Node", "Describe Node", "kubectl describe node {{node}}", "read", [node], { scope: "cluster" }),
  recipe("api-resources", "cluster", "cluster", "работа-с-api-ресурсами-api-resources", "working-with-api-resources-api-resources", "Доступные API-ресурсы", "Available API resources", "kubectl api-resources", "read", [], { scope: "cluster" }),
  // Utilities
  recipe("pod-exec", "utilities", "utilities", "выполнение-команд-в-контейнере-exec", "execute-commands-in-container-exec", "Запустить shell в Pod", "Open shell in Pod", "kubectl exec -it {{pod}} -- sh", "exec", [pod], { intents: ["зайти в контейнер", "exec into pod"] }),
  recipe("pod-copy", "utilities", "utilities", "копирование-файлов-cp", "copying-files-cp", "Скопировать файл из Pod", "Copy file from Pod", "kubectl cp {{pod}}:{{path}} ./", "read", [pod, { name: "path", label: { ru: "Путь в контейнере", eng: "Path in container" }, kind: "path" }], { sensitive: true }),
  recipe("events-list", "utilities", "utilities", "советы-и-полезные-паттерны", "tips-and-useful-patterns", "Список событий", "List events", "kubectl get events --sort-by=.lastTimestamp", "read", [], { intents: ["события пода", "events"] }),
  recipe("helm-releases", "utilities", "utilities", "helm", "helm", "Список Helm releases", "List Helm releases", "helm list", "read", [], { requires: ["helm", "cluster access"] }),
  recipe("krew-list", "utilities", "utilities", "плагины-kubectl-krew", "kubectl-plugins-krew", "Установленные Krew плагины", "Installed Krew plugins", "kubectl krew list", "read", [], { requires: ["kubectl", "krew"], scope: "local" })
];

export const recipeById = Object.fromEntries(recipes.map((item) => [item.id, item]));
