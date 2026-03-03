# kubectl Cheatsheet

Практичная шпаргалка по `kubectl` для ежедневной работы с Kubernetes.

Practical `kubectl` commands cheatsheet for day-to-day Kubernetes work.

## Language

- [RU version](ru/kubectl.md)
- [EN version](eng/kubectl.md)

## Quick Navigation

### RU (основные разделы)

- [Получение информации](ru/kubectl.md#получение-информации-get)
- [Логи](ru/kubectl.md#просмотр-логов-logs)
- [Exec в контейнер](ru/kubectl.md#выполнение-команд-в-контейнере-exec)
- [Apply/Create](ru/kubectl.md#создание-и-применение-ресурсов-applycreate)
- [Удаление ресурсов](ru/kubectl.md#удаление-ресурсов-delete)
- [Scale](ru/kubectl.md#масштабирование-scale)
- [Rollout](ru/kubectl.md#управление-обновлениями-rollout)
- [Config и контексты](ru/kubectl.md#контексты-и-конфигурация-config)
- [Debug и диагностика](ru/kubectl.md#отладка-и-диагностика-debug)
- [Kustomize](ru/kubectl.md#работа-с-kustomize-kustomize)
- [RBAC](ru/kubectl.md#rbac---роли-и-управление-доступом)
- [Полезные паттерны](ru/kubectl.md#советы-и-полезные-паттерны)

### EN (main sections)

- [Getting information](eng/kubectl.md#getting-information-get)
- [Viewing logs](eng/kubectl.md#viewing-logs-logs)
- [Exec in container](eng/kubectl.md#execute-commands-in-container-exec)
- [Apply/Create](eng/kubectl.md#creating-and-applying-resources-applycreate)
- [Deleting resources](eng/kubectl.md#deleting-resources-delete)
- [Scaling](eng/kubectl.md#scaling-scale)
- [Rollout](eng/kubectl.md#managing-updates-rollout)
- [Config and contexts](eng/kubectl.md#contexts-and-configuration-config)
- [Debugging](eng/kubectl.md#debugging-and-diagnostics-debug)
- [Kustomize](eng/kubectl.md#working-with-kustomize-kustomize)
- [RBAC](eng/kubectl.md#rbac---roles-and-access-control)
- [Tips and patterns](eng/kubectl.md#tips-and-useful-patterns)

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
