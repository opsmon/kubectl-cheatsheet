# kubectl Cheatsheet / Шпаргалка

> Practical `kubectl` cheatsheet for day-to-day Kubernetes work.
> Практическая шпаргалка по `kubectl` для повседневной работы с Kubernetes.

---

## Topics / Темы

| # | English | Русский |
|---|---------|---------|
| 1 | [Viewing & Diagnostics](eng/viewing.md) | [Просмотр и диагностика](ru/viewing.md) |
| 2 | [Resource Management](eng/management.md) | [Управление ресурсами](ru/management.md) |
| 3 | [Workloads](eng/workloads.md) | [Рабочие нагрузки](ru/workloads.md) |
| 4 | [Network](eng/network.md) | [Сеть](ru/network.md) |
| 5 | [Storage & Config](eng/storage.md) | [Хранилище и конфигурация](ru/storage.md) |
| 6 | [Security](eng/security.md) | [Безопасность](ru/security.md) |
| 7 | [Cluster & Infrastructure](eng/cluster.md) | [Кластер и инфраструктура](ru/cluster.md) |
| 8 | [Utilities & Tools](eng/utilities.md) | [Утилиты и инструменты](ru/utilities.md) |

---

## Quick Navigation / Быстрая навигация

### Viewing & Diagnostics / Просмотр и диагностика
[get](eng/viewing.md#getting-information-get) · [describe](eng/viewing.md#detailed-information-describe) · [logs](eng/viewing.md#viewing-logs-logs) · [top](eng/viewing.md#resource-monitoring-top) · [events](eng/viewing.md#events-events) · [debug](eng/viewing.md#debugging-and-diagnostics-debug) · [troubleshooting](eng/viewing.md#troubleshooting-common-pod-issues-troubleshooting)

[get](ru/viewing.md#получение-информации-get) · [describe](ru/viewing.md#детальная-информация-describe) · [logs](ru/viewing.md#просмотр-логов-logs) · [top](ru/viewing.md#мониторинг-ресурсов-top) · [events](ru/viewing.md#события-events) · [debug](ru/viewing.md#отладка-и-диагностика-debug) · [troubleshooting](ru/viewing.md#диагностика-типичных-проблем-подов-troubleshooting)

### Resource Management / Управление ресурсами
[apply/create](eng/management.md#creating-and-applying-resources-applycreate) · [edit](eng/management.md#editing-resources-edit) · [patch](eng/management.md#patching-resources-patch) · [set](eng/management.md#quick-resource-modification-set) · [delete](eng/management.md#deleting-resources-delete) · [diff](eng/management.md#comparing-configurations-diff) · [replace](eng/management.md#replace-and-attach-to-resources-replaceattach) · [ssa](eng/management.md#server-side-apply-ssa)

[apply/create](ru/management.md#создание-и-применение-ресурсов-applycreate) · [edit](ru/management.md#редактирование-ресурсов-edit) · [patch](ru/management.md#патчинг-ресурсов-patch) · [set](ru/management.md#быстрое-изменение-ресурсов-set) · [delete](ru/management.md#удаление-ресурсов-delete) · [diff](ru/management.md#сравнение-конфигураций-diff) · [replace](ru/management.md#замена-и-подключение-к-ресурсам-replaceattach) · [ssa](ru/management.md#server-side-apply-ssa)

### Workloads / Рабочие нагрузки
[run](eng/workloads.md#running-pods-and-jobs-run) · [rollout](eng/workloads.md#managing-updates-rollout) · [scale](eng/workloads.md#scaling-scale) · [hpa](eng/workloads.md#horizontalpodautoscaler-hpa) · [vpa](eng/workloads.md#verticalpodautoscaler-vpa) · [statefulsets](eng/workloads.md#statefulsets) · [daemonsets](eng/workloads.md#daemonsets) · [jobs](eng/workloads.md#jobs-and-cronjobs)

[run](ru/workloads.md#запуск-подов-и-задач-run) · [rollout](ru/workloads.md#управление-обновлениями-rollout) · [scale](ru/workloads.md#масштабирование-scale) · [hpa](ru/workloads.md#horizontalpodautoscaler-hpa) · [vpa](ru/workloads.md#verticalpodautoscaler-vpa) · [statefulsets](ru/workloads.md#statefulsets) · [daemonsets](ru/workloads.md#daemonsets) · [jobs](ru/workloads.md#jobs-и-cronjobs)

### Network / Сеть
[port-forward](eng/network.md#port-forwarding-port-forward) · [expose](eng/network.md#creating-services-expose) · [ingress](eng/network.md#ingress) · [networkpolicy](eng/network.md#network-policies-networkpolicy) · [proxy](eng/network.md#proxy-and-api-access-proxy)

[port-forward](ru/network.md#проброс-портов-port-forward) · [expose](ru/network.md#создание-сервисов-expose) · [ingress](ru/network.md#ingress) · [networkpolicy](ru/network.md#сетевые-политики-networkpolicy) · [proxy](ru/network.md#прокси-и-доступ-к-api-proxy)

### Storage & Config / Хранилище и конфигурация
[configmaps](eng/storage.md#configmaps) · [secrets](eng/storage.md#secrets-management-secret) · [pv/pvc](eng/storage.md#persistent-volumes-pvpvc) · [kustomize](eng/storage.md#working-with-kustomize-kustomize)

[configmaps](ru/storage.md#configmaps) · [secrets](ru/storage.md#управление-secret-secret) · [pv/pvc](ru/storage.md#постоянные-тома-pvpvc) · [kustomize](ru/storage.md#работа-с-kustomize-kustomize)

### Security / Безопасность
[rbac](eng/security.md#rbac---roles-and-access-control) · [auth](eng/security.md#checking-permissions-auth) · [csr](eng/security.md#certificate-signing-requests-csr) · [pss](eng/security.md#pod-security-standards-pss) · [security-context](eng/security.md#security-context) · [pdb](eng/security.md#poddisruptionbudget-pdb) · [quota](eng/security.md#resourcequota-and-limitrange)

[rbac](ru/security.md#rbac---роли-и-управление-доступом) · [auth](ru/security.md#проверка-прав-доступа-auth) · [csr](ru/security.md#запросы-на-подпись-сертификата-csr) · [pss](ru/security.md#pod-security-standards-pss) · [security-context](ru/security.md#security-context) · [pdb](ru/security.md#poddisruptionbudget-pdb) · [quota](ru/security.md#resourcequota-и-limitrange)

### Cluster & Infrastructure / Кластер и инфраструктура
[config](eng/cluster.md#contexts-and-configuration-config) · [namespaces](eng/cluster.md#namespace-management) · [nodes](eng/cluster.md#node-management-taintcordondrain) · [crd](eng/cluster.md#custom-resource-definitions-crd) · [api-resources](eng/cluster.md#working-with-api-resources-api-resources) · [field-selectors](eng/cluster.md#field-selectors-and-filtering)

[config](ru/cluster.md#контексты-и-конфигурация-config) · [namespaces](ru/cluster.md#управление-неймспейсами) · [nodes](ru/cluster.md#управление-нодами-taintcordondrain) · [crd](ru/cluster.md#custom-resource-definitions-crd) · [api-resources](ru/cluster.md#работа-с-api-ресурсами-api-resources) · [field-selectors](ru/cluster.md#селекторы-полей-и-фильтрация)

### Utilities & Tools / Утилиты и инструменты
[exec](eng/utilities.md#execute-commands-in-container-exec) · [cp](eng/utilities.md#copying-files-cp) · [labels](eng/utilities.md#working-with-labels-labelannotate) · [wait](eng/utilities.md#waiting-for-conditions-wait) · [jsonpath](eng/utilities.md#advanced-output-jsonpathcustom-columns) · [scheduling](eng/utilities.md#pod-scheduling-affinity--tolerations--nodeselector) · [tips](eng/utilities.md#tips-and-useful-patterns) · [helm](eng/utilities.md#helm) · [krew](eng/utilities.md#kubectl-plugins-krew) · [aliases](eng/utilities.md#shell-aliases--autocompletion)

[exec](ru/utilities.md#выполнение-команд-в-контейнере-exec) · [cp](ru/utilities.md#копирование-файлов-cp) · [labels](ru/utilities.md#работа-с-метками-labelannotate) · [wait](ru/utilities.md#ожидание-готовности-ресурсов-wait) · [jsonpath](ru/utilities.md#продвинутый-вывод-данных-jsonpathcustom-columns) · [scheduling](ru/utilities.md#планирование-подов-affinity--tolerations--nodeselector) · [tips](ru/utilities.md#советы-и-полезные-паттерны) · [helm](ru/utilities.md#helm) · [krew](ru/utilities.md#плагины-kubectl-krew) · [aliases](ru/utilities.md#алиасы-и-автодополнение-в-shell)

---

## Structure / Структура

```
.
├── README.md
├── eng/
│   ├── viewing.md       — get, describe, logs, top, events, debug, troubleshooting
│   ├── management.md    — apply, edit, patch, set, delete, diff, replace, SSA
│   ├── workloads.md     — run, rollout, scale, HPA, VPA, StatefulSets, DaemonSets, Jobs
│   ├── network.md       — port-forward, expose, ingress, networkpolicy, proxy
│   ├── storage.md       — configmaps, secrets, pv/pvc, kustomize
│   ├── security.md      — rbac, auth, csr, pss, security-context, pdb, quota
│   ├── cluster.md       — config, namespaces, nodes, crd, api-resources, field-selectors
│   └── utilities.md     — exec, cp, labels, wait, jsonpath, scheduling, tips, helm, krew, aliases
└── ru/
    ├── viewing.md       — get, describe, logs, top, events, debug, troubleshooting
    ├── management.md    — apply, edit, patch, set, delete, diff, replace, SSA
    ├── workloads.md     — run, rollout, scale, HPA, VPA, StatefulSets, DaemonSets, Jobs
    ├── network.md       — port-forward, expose, ingress, networkpolicy, proxy
    ├── storage.md       — configmaps, secrets, pv/pvc, kustomize
    ├── security.md      — rbac, auth, csr, pss, security-context, pdb, quota
    ├── cluster.md       — config, namespaces, nodes, crd, api-resources, field-selectors
    └── utilities.md     — exec, cp, labels, wait, jsonpath, scheduling, tips, helm, krew, aliases
```

## Contributing / Участие

1. Fork the repository / Сделайте форк.
2. Add or update commands in the relevant topic file under `eng/` or `ru/` / Добавьте или обновите команды в нужном файле.
3. Open a Pull Request with a short description / Откройте Pull Request с кратким описанием изменений.
