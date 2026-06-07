# kubectl Cheatsheet

Шпаргалка по `kubectl` для ежедневной работы с Kubernetes.
Practical `kubectl` cheatsheet for day-to-day Kubernetes work.

[Открыть визуальный индекс](index.html) · [Русская версия](ru/viewing.md) · [English version](eng/viewing.md) · [Contributing](eng/contributing.md)

## С чего начать / Start Here

| I need to... | RU | EN |
|---|---|---|
| Quickly inspect pods, logs, events, or resource usage | [Просмотр и диагностика](ru/viewing.md) | [Viewing and diagnostics](eng/viewing.md) |
| Create, apply, patch, delete, or wait for resources | [Управление ресурсами](ru/management.md) | [Resource management](eng/management.md) |
| Run workloads, roll out changes, scale, or manage jobs | [Нагрузки](ru/workloads.md) | [Workloads](eng/workloads.md) |
| Expose services, debug access, or work with ingress policies | [Сеть](ru/network.md) | [Network](eng/network.md) |
| Work with configmaps, secrets, volumes, or kustomize | [Хранилище](ru/storage.md) | [Storage](eng/storage.md) |
| Check permissions, RBAC, security contexts, or quotas | [Безопасность](ru/security.md) | [Security](eng/security.md) |
| Switch contexts, namespaces, nodes, CRDs, and API resources | [Кластер](ru/cluster.md) | [Cluster](eng/cluster.md) |
| Use exec, cp, labels, jsonpath, helm, krew, and aliases | [Утилиты](ru/utilities.md) | [Utilities](eng/utilities.md) |

## Визуальный индекс / Visual Index

Для более удобной навигации откройте [`index.html`](index.html). Внутри есть:

- переключатель RU / EN;
- поиск по команде, теме или сценарию с прямыми ссылками на разделы;
- компактные карточки категорий со ссылками на оформленные разделы;
- адаптивная верстка без сборки и зависимостей.

## GitHub Pages

Сайт автоматически собирается и публикуется workflow
[`Deploy GitHub Pages`](.github/workflows/pages.yml) после каждого push в `main`.

Однократная настройка репозитория:

1. Откройте `Settings` → `Pages`.
2. В `Build and deployment` выберите `Source: GitHub Actions`.
3. Дождитесь завершения workflow во вкладке `Actions`.

Адрес сайта: <https://opsmon.github.io/kubectl-cheatsheet/>

## Карта команд / Command Map

| Category | Main commands |
|---|---|
| Viewing | `get`, `describe`, `logs`, `top`, `debug`, `events` |
| Management | `apply`, `create`, `edit`, `patch`, `set`, `delete`, `diff`, `wait` |
| Workloads | `run`, `rollout`, `scale`, `autoscale`, `jobs`, `cronjobs` |
| Network | `port-forward`, `expose`, `ingress`, `networkpolicy`, `proxy` |
| Storage | `configmap`, `secret`, `pv`, `pvc`, `kustomize` |
| Security | `auth can-i`, `rbac`, `csr`, `pss`, `pdb`, `quota` |
| Cluster | `config`, `namespace`, `node`, `crd`, `api-resources`, `version skew`, `kuberc` |
| Utilities | `exec`, `cp`, `label`, `annotate`, `jsonpath`, `helm`, `krew` |

## Структура / Structure

```text
.
├── index.html
├── assets/
│   ├── app.js
│   ├── search-index.js
│   └── styles.css
├── scripts/
│   ├── build_search_index.rb
│   └── check_repo.rb
├── eng/
│   ├── viewing.md
│   ├── management.md
│   ├── workloads.md
│   ├── network.md
│   ├── storage.md
│   ├── security.md
│   ├── cluster.md
│   └── utilities.md
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

Подробные инструкции: [на русском](ru/contributing.md) · [in English](eng/contributing.md).

1. По возможности обновляйте команды сразу в обеих языковых версиях.
2. Сохраняйте одинаковый порядок разделов в `ru/` и `eng/`.
3. Добавляйте новые темы в `index.html`, чтобы визуальная навигация оставалась полной.
4. После изменения Markdown обновляйте поисковый индекс: `ruby scripts/build_search_index.rb`.
5. Перед pull request запускайте проверку: `ruby scripts/check_repo.rb`.
6. Открывайте pull request с коротким описанием изменений.
