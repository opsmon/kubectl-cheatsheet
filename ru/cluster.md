# kubectl - Кластер и инфраструктура

> Быстрая навигация: используйте `Ctrl/Cmd + F` для перехода к разделам. Ключевые слова: `config`, `namespaces`, `nodes`, `crd`, `api-resources`, `capacity`, `field-selectors`.

## Контексты и конфигурация (config)

```bash
# Показать текущий контекст
kubectl config current-context

# Показать все контексты
kubectl config get-contexts

# Переключиться на другой контекст
kubectl config use-context <context-name>

# Показать всю конфигурацию
kubectl config view

# Установить namespace по умолчанию для контекста
kubectl config set-context --current --namespace=<namespace>

# Добавить новый кластер
kubectl config set-cluster <cluster-name> --server=https://k8s-api:6443

# Добавить credentials
kubectl config set-credentials <user-name> --token=<token>

# Создать новый контекст
kubectl config set-context <context-name> --cluster=<cluster> --user=<user>

# Удалить контекст
kubectl config delete-context <context-name>
```

## Управление неймспейсами

```bash
# Список всех неймспейсов
kubectl get namespaces
kubectl get ns

# Подробная информация о неймспейсе (квоты, лимиты)
kubectl describe ns <namespace>

# Создать неймспейс
kubectl create namespace <namespace>
kubectl create ns <namespace>

# Удалить неймспейс (удаляет все ресурсы внутри)
kubectl delete ns <namespace>

# Установить дефолтный неймспейс для текущего контекста
kubectl config set-context --current --namespace=<namespace>

# Показать текущий дефолтный неймспейс
kubectl config view --minify | grep namespace

# Получить все ресурсы в неймспейсе
kubectl get all -n <namespace>

# Получить все ресурсы во всех неймспейсах
kubectl get all -A

# Список неймспейсов со статусом и датой создания
kubectl get ns -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,AGE:.metadata.creationTimestamp

# Добавить метку к неймспейсу
kubectl label namespace <namespace> env=production

# Показать неймспейсы с метками
kubectl get ns --show-labels

# Подсчёт подов по неймспейсам
kubectl get pods -A --no-headers | awk '{print $1}' | sort | uniq -c | sort -rn
```

## Управление нодами (taint/cordon/drain)

```bash
# Запретить планирование новых подов на ноду
kubectl cordon <node-name>

# Разрешить планирование на ноду
kubectl uncordon <node-name>

# Эвакуировать поды с ноды (для обслуживания)
kubectl drain <node-name>

# Drain с игнорированием DaemonSet
kubectl drain <node-name> --ignore-daemonsets

# Drain с удалением локальных данных
kubectl drain <node-name> --delete-emptydir-data

# Добавить taint на ноду
kubectl taint nodes <node-name> key=value:NoSchedule

# Удалить taint (минус в конце)
kubectl taint nodes <node-name> key=value:NoSchedule-

# Типы taint эффектов: NoSchedule, PreferNoSchedule, NoExecute
kubectl taint nodes <node-name> key=value:NoExecute
```

## Custom Resource Definitions (CRD)

```bash
# Список всех CRD в кластере
kubectl get crds
kubectl get customresourcedefinitions

# Подробная информация о CRD
kubectl describe crd <crd-name>

# Просмотр CRD в формате YAML
kubectl get crd <crd-name> -o yaml

# Удалить CRD (удаляет все экземпляры этого ресурса тоже)
kubectl delete crd <crd-name>

# Список экземпляров кастомного ресурса
kubectl get <custom-resource-kind>
kubectl get <custom-resource-kind> -A

# Подробная информация об экземпляре кастомного ресурса
kubectl describe <custom-resource-kind> <name>

# Фильтр CRD по группе
kubectl get crds | grep <group-name>

# Показать CRD с группой и областью видимости
kubectl get crds -o custom-columns=NAME:.metadata.name,GROUP:.spec.group,SCOPE:.spec.scope,VERSION:.spec.versions[0].name

# Объяснение полей кастомного ресурса
kubectl explain <custom-resource-kind>
kubectl explain <custom-resource-kind>.spec

# Применить кастомный ресурс из файла
kubectl apply -f my-resource.yaml

# Удалить все экземпляры кастомного ресурса
kubectl delete <custom-resource-kind> --all -n <namespace>
```

## Работа с API ресурсами (api-resources)

```bash
# Показать все доступные API ресурсы
kubectl api-resources

# Показать только namespaced ресурсы
kubectl api-resources --namespaced=true

# Показать ресурсы конкретной API группы
kubectl api-resources --api-group=apps

# Показать версии API
kubectl api-versions

# Объяснить структуру ресурса
kubectl explain pod
kubectl explain pod.spec
kubectl explain pod.spec.containers

# Рекурсивное объяснение
kubectl explain pod --recursive
```

## Планирование ёмкости кластера (capacity planning)

```bash
# Показать выделяемые ресурсы по каждой ноде
kubectl get nodes -o custom-columns=\
'NAME:.metadata.name,CPU:.status.allocatable.cpu,MEMORY:.status.allocatable.memory,PODS:.status.allocatable.pods'

# Запрошенные (requests) ресурсы vs выделяемые по нодам
kubectl describe nodes | grep -A 6 "Allocated resources"

# Реальное потребление ресурсов по нодам (требует metrics-server)
kubectl top nodes --sort-by=cpu
kubectl top nodes --sort-by=memory

# Реальное потребление по подам во всех неймспейсах
kubectl top pods -A --sort-by=cpu
kubectl top pods -A --sort-by=memory

# 20 самых «прожорливых» по памяти подов
kubectl top pods -A --sort-by=memory --no-headers | head -20

# Запросы и лимиты ресурсов для всех подов в неймспейсе
kubectl get pods -o custom-columns=\
'NAME:.metadata.name,CPU_REQ:.spec.containers[0].resources.requests.cpu,MEM_REQ:.spec.containers[0].resources.requests.memory,CPU_LIM:.spec.containers[0].resources.limits.cpu,MEM_LIM:.spec.containers[0].resources.limits.memory'

# Найти поды без resource requests (риск: могут вытеснять другие workload-ы)
kubectl get pods -A -o json | \
  jq -r '.items[] | select(.spec.containers[].resources.requests == null) | [.metadata.namespace, .metadata.name] | @tsv'

# Количество подов на каждой ноде (проверка равномерности распределения)
kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn

# Проверить ResourceQuota и текущее потребление
kubectl describe resourcequota -A

# Проверить LimitRange в неймспейсе
kubectl get limitrange -A

# Детальная сводка по ноде: запрошено vs доступно
kubectl describe node <node-name> | grep -E "cpu|memory|Allocated|requests|limits" | head -30
```

## Селекторы полей и фильтрация

```bash
# Получить поды по статусу (Running, Pending, Failed)
kubectl get pods --field-selector=status.phase=Running
kubectl get pods --field-selector=status.phase=Failed -A

# Получить поды на конкретной ноде
kubectl get pods --field-selector=spec.nodeName=<node-name> -A

# Получить поды НЕ в статусе Running
kubectl get pods --field-selector='status.phase!=Running' -A

# Объединить несколько селекторов полей
kubectl get pods --field-selector=status.phase=Running,spec.nodeName=<node-name>

# Получить сервисы определённого типа
kubectl get services --field-selector=spec.type=LoadBalancer -A

# Получить события определённого типа (Warning/Normal)
kubectl get events --field-selector=type=Warning -A

# Получить события для конкретного объекта
kubectl get events --field-selector=involvedObject.name=<pod-name>,involvedObject.kind=Pod

# Следить за ресурсами в реальном времени (--watch)
kubectl get pods --watch
kubectl get pods -w

# Следить с конкретным селектором полей
kubectl get pods --field-selector=status.phase=Pending -w

# Фильтрация по меткам (несколько вариантов)
kubectl get pods -l 'app=myapp,tier=backend'
kubectl get pods -l 'app in (frontend,backend)'
kubectl get pods -l 'app notin (legacy)'
kubectl get pods -l '!deprecated'
```


---

[← Назад к README](../README.md)
