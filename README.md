# kubectl Cheatsheet

Практичная шпаргалка по `kubectl` для ежедневной работы с Kubernetes.

Practical `kubectl` commands cheatsheet for day-to-day Kubernetes work.

## Language

- [RU version](ru/kubectl.md)
- [EN version](eng/kubectl.md)

## Quick Navigation

### RU (основные разделы)

| Категория | Разделы |
|-----------|---------|
| **Просмотр** | [get](ru/kubectl.md#получение-информации-get) · [describe](ru/kubectl.md#детальная-информация-describe) · [logs](ru/kubectl.md#просмотр-логов-logs) · [top](ru/kubectl.md#мониторинг-ресурсов-top) · [debug](ru/kubectl.md#отладка-и-диагностика-debug) · [troubleshooting](ru/kubectl.md#диагностика-типичных-проблем-подов-troubleshooting) |
| **Управление** | [apply/create](ru/kubectl.md#создание-и-применение-ресурсов-applycreate) · [edit](ru/kubectl.md#редактирование-ресурсов-edit) · [patch](ru/kubectl.md#патчинг-ресурсов-patch) · [set](ru/kubectl.md#быстрое-изменение-ресурсов-set) · [delete](ru/kubectl.md#удаление-ресурсов-delete) · [diff](ru/kubectl.md#сравнение-конфигураций-diff) |
| **Рабочие нагрузки** | [run](ru/kubectl.md#запуск-подов-и-задач-run) · [rollout](ru/kubectl.md#управление-обновлениями-rollout) · [scale](ru/kubectl.md#масштабирование-scale) · [hpa](ru/kubectl.md#horizontalpodautoscaler-hpa) · [vpa](ru/kubectl.md#verticalpodautoscaler-vpa) · [statefulsets](ru/kubectl.md#statefulsets) · [daemonsets](ru/kubectl.md#daemonsets) · [jobs](ru/kubectl.md#jobs-и-cronjobs) |
| **Сеть** | [port-forward](ru/kubectl.md#проброс-портов-port-forward) · [expose](ru/kubectl.md#создание-сервисов-expose) · [ingress](ru/kubectl.md#ingress) · [networkpolicy](ru/kubectl.md#сетевые-политики-networkpolicy) · [proxy](ru/kubectl.md#прокси-и-доступ-к-api-proxy) |
| **Хранилище** | [configmaps](ru/kubectl.md#configmaps) · [secrets](ru/kubectl.md#управление-secret-secret) · [pv/pvc](ru/kubectl.md#постоянные-тома-pvpvc) · [kustomize](ru/kubectl.md#работа-с-kustomize-kustomize) |
| **Безопасность** | [rbac](ru/kubectl.md#rbac---роли-и-управление-доступом) · [auth](ru/kubectl.md#проверка-прав-доступа-auth) · [csr](ru/kubectl.md#запросы-на-подпись-сертификата-csr) · [pss](ru/kubectl.md#pod-security-standards-pss) · [security-context](ru/kubectl.md#security-context) · [pdb](ru/kubectl.md#poddisruptionbudget-pdb) · [quota](ru/kubectl.md#resourcequota-и-limitrange) |
| **Кластер** | [config](ru/kubectl.md#контексты-и-конфигурация-config) · [namespaces](ru/kubectl.md#управление-неймспейсами) · [nodes](ru/kubectl.md#управление-нодами-taintcordondrain) · [crd](ru/kubectl.md#custom-resource-definitions-crd) · [api-resources](ru/kubectl.md#работа-с-api-ресурсами-api-resources) |
| **Утилиты** | [exec](ru/kubectl.md#выполнение-команд-в-контейнере-exec) · [cp](ru/kubectl.md#копирование-файлов-cp) · [label](ru/kubectl.md#работа-с-метками-labelannotate) · [jsonpath](ru/kubectl.md#продвинутый-вывод-данных-jsonpathcustom-columns) · [scheduling](ru/kubectl.md#планирование-подов-affinity--tolerations--nodeselector) · [tips](ru/kubectl.md#советы-и-полезные-паттерны) · [helm](ru/kubectl.md#helm) · [krew](ru/kubectl.md#плагины-kubectl-krew) |

### EN (main sections)

| Category | Sections |
|----------|----------|
| **Viewing** | [get](eng/kubectl.md#getting-information-get) · [describe](eng/kubectl.md#detailed-information-describe) · [logs](eng/kubectl.md#viewing-logs-logs) · [top](eng/kubectl.md#resource-monitoring-top) · [debug](eng/kubectl.md#debugging-and-diagnostics-debug) · [troubleshooting](eng/kubectl.md#troubleshooting-common-pod-issues-troubleshooting) |
| **Management** | [apply/create](eng/kubectl.md#creating-and-applying-resources-applycreate) · [edit](eng/kubectl.md#editing-resources-edit) · [patch](eng/kubectl.md#patching-resources-patch) · [set](eng/kubectl.md#quick-resource-modification-set) · [delete](eng/kubectl.md#deleting-resources-delete) · [diff](eng/kubectl.md#comparing-configurations-diff) |
| **Workloads** | [run](eng/kubectl.md#running-pods-and-jobs-run) · [rollout](eng/kubectl.md#managing-updates-rollout) · [scale](eng/kubectl.md#scaling-scale) · [hpa](eng/kubectl.md#horizontalpodautoscaler-hpa) · [vpa](eng/kubectl.md#verticalpodautoscaler-vpa) · [statefulsets](eng/kubectl.md#statefulsets) · [daemonsets](eng/kubectl.md#daemonsets) · [jobs](eng/kubectl.md#jobs-and-cronjobs) |
| **Network** | [port-forward](eng/kubectl.md#port-forwarding-port-forward) · [expose](eng/kubectl.md#creating-services-expose) · [ingress](eng/kubectl.md#ingress) · [networkpolicy](eng/kubectl.md#network-policies-networkpolicy) · [proxy](eng/kubectl.md#proxy-and-api-access-proxy) |
| **Storage** | [configmaps](eng/kubectl.md#configmaps) · [secrets](eng/kubectl.md#secrets-management-secret) · [pv/pvc](eng/kubectl.md#persistent-volumes-pvpvc) · [kustomize](eng/kubectl.md#working-with-kustomize-kustomize) |
| **Security** | [rbac](eng/kubectl.md#rbac---roles-and-access-control) · [auth](eng/kubectl.md#checking-permissions-auth) · [csr](eng/kubectl.md#certificate-signing-requests-csr) · [pss](eng/kubectl.md#pod-security-standards-pss) · [security-context](eng/kubectl.md#security-context) · [pdb](eng/kubectl.md#poddisruptionbudget-pdb) · [quota](eng/kubectl.md#resourcequota-and-limitrange) |
| **Cluster** | [config](eng/kubectl.md#contexts-and-configuration-config) · [namespaces](eng/kubectl.md#namespace-management) · [nodes](eng/kubectl.md#node-management-taintcordondrain) · [crd](eng/kubectl.md#custom-resource-definitions-crd) · [api-resources](eng/kubectl.md#working-with-api-resources-api-resources) |
| **Utilities** | [exec](eng/kubectl.md#execute-commands-in-container-exec) · [cp](eng/kubectl.md#copying-files-cp) · [label](eng/kubectl.md#working-with-labels-labelannotate) · [jsonpath](eng/kubectl.md#advanced-output-jsonpathcustom-columns) · [scheduling](eng/kubectl.md#pod-scheduling-affinity--tolerations--nodeselector) · [tips](eng/kubectl.md#tips-and-useful-patterns) · [helm](eng/kubectl.md#helm) · [krew](eng/kubectl.md#kubectl-plugins-krew) |

## Repository Structure

```text
.
├── ru/
│   └── kubectl.md
├── eng/
│   └── kubectl.md
└── README.md
```

## Contributing

1. Fork repository.
2. Add/update commands in both language files when possible.
3. Keep the same section order in `ru/kubectl.md` and `eng/kubectl.md`.
4. Open Pull Request with a short description of what was added.
