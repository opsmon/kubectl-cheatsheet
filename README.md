# kubectl Cheatsheet

> Шпаргалка по `kubectl` для ежедневной работы с Kubernetes.
> Practical `kubectl` cheatsheet for day-to-day Kubernetes work.

---

## Quick Navigation / Быстрая навигация

| Category / Категория | 🇷🇺 RU | 🇬🇧 EN |
|---|---|---|
| **Viewing / Просмотр** | [get](ru/viewing.md#получение-информации-get) · [describe](ru/viewing.md#детальная-информация-describe) · [logs](ru/viewing.md#просмотр-логов-logs) · [top](ru/viewing.md#мониторинг-ресурсов-top) · [debug](ru/viewing.md#отладка-и-диагностика-debug) · [events](ru/viewing.md#события-events) · [troubleshooting](ru/viewing.md#диагностика-типичных-проблем-подов-troubleshooting) · [ephemeral](ru/viewing.md#ephemeral-containers-временные-контейнеры) | [get](eng/viewing.md#getting-information-get) · [describe](eng/viewing.md#detailed-information-describe) · [logs](eng/viewing.md#viewing-logs-logs) · [top](eng/viewing.md#resource-monitoring-top) · [debug](eng/viewing.md#debugging-and-diagnostics-debug) · [events](eng/viewing.md#events-events) · [troubleshooting](eng/viewing.md#troubleshooting-common-pod-issues-troubleshooting) · [ephemeral](eng/viewing.md#ephemeral-containers) |
| **Management / Управление** | [apply/create](ru/management.md#создание-и-применение-ресурсов-applycreate) · [edit](ru/management.md#редактирование-ресурсов-edit) · [patch](ru/management.md#патчинг-ресурсов-patch) · [set](ru/management.md#быстрое-изменение-ресурсов-set) · [delete](ru/management.md#удаление-ресурсов-delete) · [diff](ru/management.md#сравнение-конфигураций-diff) · [ssa](ru/management.md#server-side-apply-ssa) · [replace](ru/management.md#замена-и-подключение-к-ресурсам-replaceattach) · [wait](ru/management.md#ожидание-готовности-ресурсов-wait) | [apply/create](eng/management.md#creating-and-applying-resources-applycreate) · [edit](eng/management.md#editing-resources-edit) · [patch](eng/management.md#patching-resources-patch) · [set](eng/management.md#quick-resource-modification-set) · [delete](eng/management.md#deleting-resources-delete) · [diff](eng/management.md#comparing-configurations-diff) · [ssa](eng/management.md#server-side-apply-ssa) · [replace](eng/management.md#replace-and-attach-to-resources-replaceattach) · [wait](eng/management.md#waiting-for-conditions-wait) |
| **Workloads / Нагрузки** | [run](ru/workloads.md#запуск-подов-и-задач-run) · [rollout](ru/workloads.md#управление-обновлениями-rollout) · [scale](ru/workloads.md#масштабирование-scale) · [hpa](ru/workloads.md#horizontalpodautoscaler-hpa) · [vpa](ru/workloads.md#verticalpodautoscaler-vpa) · [statefulsets](ru/workloads.md#statefulsets) · [daemonsets](ru/workloads.md#daemonsets) · [jobs](ru/workloads.md#jobs-и-cronjobs) | [run](eng/workloads.md#running-pods-and-jobs-run) · [rollout](eng/workloads.md#managing-updates-rollout) · [scale](eng/workloads.md#scaling-scale) · [hpa](eng/workloads.md#horizontalpodautoscaler-hpa) · [vpa](eng/workloads.md#verticalpodautoscaler-vpa) · [statefulsets](eng/workloads.md#statefulsets) · [daemonsets](eng/workloads.md#daemonsets) · [jobs](eng/workloads.md#jobs-and-cronjobs) |
| **Network / Сеть** | [port-forward](ru/network.md#проброс-портов-port-forward) · [expose](ru/network.md#создание-сервисов-expose) · [ingress](ru/network.md#ingress) · [networkpolicy](ru/network.md#сетевые-политики-networkpolicy) · [proxy](ru/network.md#прокси-и-доступ-к-api-proxy) | [port-forward](eng/network.md#port-forwarding-port-forward) · [expose](eng/network.md#creating-services-expose) · [ingress](eng/network.md#ingress) · [networkpolicy](eng/network.md#network-policies-networkpolicy) · [proxy](eng/network.md#proxy-and-api-access-proxy) |
| **Storage / Хранилище** | [configmaps](ru/storage.md#configmaps) · [secrets](ru/storage.md#управление-secret-secret) · [pv/pvc](ru/storage.md#постоянные-тома-pvpvc) · [kustomize](ru/storage.md#работа-с-kustomize-kustomize) | [configmaps](eng/storage.md#configmaps) · [secrets](eng/storage.md#secrets-management-secret) · [pv/pvc](eng/storage.md#persistent-volumes-pvpvc) · [kustomize](eng/storage.md#working-with-kustomize-kustomize) |
| **Security / Безопасность** | [rbac](ru/security.md#rbac---роли-и-управление-доступом) · [auth](ru/security.md#проверка-прав-доступа-auth) · [csr](ru/security.md#запросы-на-подпись-сертификата-csr) · [pss](ru/security.md#pod-security-standards-pss) · [security-context](ru/security.md#security-context) · [pdb](ru/security.md#poddisruptionbudget-pdb) · [quota](ru/security.md#resourcequota-и-limitrange) | [rbac](eng/security.md#rbac---roles-and-access-control) · [auth](eng/security.md#checking-permissions-auth) · [csr](eng/security.md#certificate-signing-requests-csr) · [pss](eng/security.md#pod-security-standards-pss) · [security-context](eng/security.md#security-context) · [pdb](eng/security.md#poddisruptionbudget-pdb) · [quota](eng/security.md#resourcequota-and-limitrange) |
| **Cluster / Кластер** | [config](ru/cluster.md#контексты-и-конфигурация-config) · [namespaces](ru/cluster.md#управление-неймспейсами) · [nodes](ru/cluster.md#управление-нодами-taintcordondrain) · [crd](ru/cluster.md#custom-resource-definitions-crd) · [api-resources](ru/cluster.md#работа-с-api-ресурсами-api-resources) · [capacity](ru/cluster.md#планирование-ёмкости-кластера-capacity-planning) · [field-selectors](ru/cluster.md#селекторы-полей-и-фильтрация) | [config](eng/cluster.md#contexts-and-configuration-config) · [namespaces](eng/cluster.md#namespace-management) · [nodes](eng/cluster.md#node-management-taintcordondrain) · [crd](eng/cluster.md#custom-resource-definitions-crd) · [api-resources](eng/cluster.md#working-with-api-resources-api-resources) · [capacity](eng/cluster.md#cluster-capacity--resource-planning) · [field-selectors](eng/cluster.md#field-selectors-and-filtering) |
| **Utilities / Утилиты** | [exec](ru/utilities.md#выполнение-команд-в-контейнере-exec) · [cp](ru/utilities.md#копирование-файлов-cp) · [label](ru/utilities.md#работа-с-метками-labelannotate) · [jsonpath](ru/utilities.md#продвинутый-вывод-данных-jsonpathcustom-columns) · [scheduling](ru/utilities.md#планирование-подов-affinity--tolerations--nodeselector) · [tips](ru/utilities.md#советы-и-полезные-паттерны) · [helm](ru/utilities.md#helm) · [krew](ru/utilities.md#плагины-kubectl-krew) · [aliases](ru/utilities.md#алиасы-и-автодополнение-в-shell) | [exec](eng/utilities.md#execute-commands-in-container-exec) · [cp](eng/utilities.md#copying-files-cp) · [label](eng/utilities.md#working-with-labels-labelannotate) · [jsonpath](eng/utilities.md#advanced-output-jsonpathcustom-columns) · [scheduling](eng/utilities.md#pod-scheduling-affinity--tolerations--nodeselector) · [tips](eng/utilities.md#tips-and-useful-patterns) · [helm](eng/utilities.md#helm) · [krew](eng/utilities.md#kubectl-plugins-krew) · [aliases](eng/utilities.md#shell-aliases--autocompletion) |

---

## Structure / Структура

```
.
├── eng/
│   ├── viewing.md      # get, describe, logs, top, debug, events, troubleshooting, ephemeral-containers
│   ├── management.md   # apply/create, edit, patch, set, delete, diff, ssa, replace/attach, wait
│   ├── workloads.md    # run, rollout, scale, hpa, vpa, statefulsets, daemonsets, jobs
│   ├── network.md      # port-forward, expose, ingress, networkpolicy, proxy
│   ├── storage.md      # configmaps, secrets, pv/pvc, kustomize
│   ├── security.md     # rbac, auth, csr, pss, security-context, pdb, quota
│   ├── cluster.md      # config, namespaces, nodes, crd, api-resources, capacity, field-selectors
│   └── utilities.md    # exec, cp, label/annotate, jsonpath/custom-columns, scheduling, tips, helm, krew, aliases
├── ru/
│   ├── viewing.md
│   ├── management.md
│   ├── workloads.md
│   ├── network.md
│   ├── storage.md
│   ├── security.md
│   ├── cluster.md
│   └── utilities.md
└── README.md
```

## Contributing

1. Fork the repository.
2. Update commands in **both** language files when possible.
3. Keep the same section order in `ru/` and `eng/` files.
4. Open a Pull Request with a short description of what was added.
