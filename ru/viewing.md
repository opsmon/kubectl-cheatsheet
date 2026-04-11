# kubectl - Просмотр и диагностика

> Быстрая навигация: используйте `Ctrl/Cmd + F` для перехода к разделам. Ключевые слова: `get`, `describe`, `logs`, `top`, `debug`, `events`, `troubleshooting`, `ephemeral`.

## Получение информации (get)

```bash
# Получить список всех подов в текущем namespace
kubectl get pods

# Получить список подов во всех namespace
kubectl get pods --all-namespaces
kubectl get pods -A

# Получить список подов с расширенной информацией (IP, нода)
kubectl get pods -o wide

# Получить список всех сервисов
kubectl get services
kubectl get svc

# Получить список всех деплойментов
kubectl get deployments
kubectl get deploy

# Получить список всех ресурсов в namespace
kubectl get all

# Получить информацию в формате YAML
kubectl get pod <pod-name> -o yaml

# Получить информацию в формате JSON
kubectl get pod <pod-name> -o json

# Получить список нод кластера
kubectl get nodes

# Получить список namespace
kubectl get namespaces
kubectl get ns
```

## Детальная информация (describe)

```bash
# Детальная информация о поде
kubectl describe pod <pod-name>

# Детальная информация о ноде
kubectl describe node <node-name>

# Детальная информация о сервисе
kubectl describe service <service-name>
kubectl describe svc <service-name>

# Детальная информация о деплойменте
kubectl describe deployment <deployment-name>

# Детальная информация о configmap
kubectl describe configmap <configmap-name>
kubectl describe cm <configmap-name>

# Детальная информация о secret
kubectl describe secret <secret-name>

# Детальная информация об ingress
kubectl describe ingress <ingress-name>

# Describe в определённом namespace
kubectl describe pod <pod-name> -n <namespace>
```

## Просмотр логов (logs)

```bash
# Логи пода
kubectl logs <pod-name>

# Логи конкретного контейнера в поде (если несколько контейнеров)
kubectl logs <pod-name> -c <container-name>

# Логи в реальном времени (follow)
kubectl logs -f <pod-name>

# Последние N строк логов
kubectl logs --tail=100 <pod-name>

# Логи за последний час
kubectl logs --since=1h <pod-name>

# Логи за последние 30 минут
kubectl logs --since=30m <pod-name>

# Логи предыдущего контейнера (после рестарта)
kubectl logs <pod-name> --previous
kubectl logs <pod-name> -p

# Логи всех подов по label
kubectl logs -l app=myapp

# Логи в определённом namespace
kubectl logs <pod-name> -n <namespace>

# Комбинация: follow + tail + namespace
kubectl logs -f --tail=50 <pod-name> -n <namespace>
```

## Мониторинг ресурсов (top)

```bash
# Использование ресурсов нодами
kubectl top nodes

# Использование ресурсов подами
kubectl top pods

# Top поды во всех namespace
kubectl top pods -A

# Top поды в конкретном namespace
kubectl top pods -n <namespace>

# Top с сортировкой по CPU
kubectl top pods --sort-by=cpu

# Top с сортировкой по памяти
kubectl top pods --sort-by=memory

# Top для контейнеров внутри подов
kubectl top pods --containers
```

## Отладка и диагностика (debug)

```bash
# Создать отладочный контейнер в существующем поде
kubectl debug <pod-name> -it --image=busybox

# Создать копию пода для отладки
kubectl debug <pod-name> -it --image=busybox --copy-to=debug-pod

# Отладка ноды (создаёт привилегированный под на ноде)
kubectl debug node/<node-name> -it --image=ubuntu

# Посмотреть события в namespace
kubectl get events

# События с сортировкой по времени
kubectl get events --sort-by='.lastTimestamp'

# События для конкретного пода
kubectl get events --field-selector involvedObject.name=<pod-name>

# Проверить статус API сервера
kubectl cluster-info

# Детальная информация о кластере
kubectl cluster-info dump

# Проверить доступ к API
kubectl auth can-i create pods
kubectl auth can-i delete deployments --namespace=production

# Проверить доступ для другого пользователя
kubectl auth can-i create pods --as=<user>

# Список всех разрешений
kubectl auth can-i --list

# Проверить почему под не запускается
kubectl describe pod <pod-name> | grep -A 10 Events

# Проверить состояние компонентов кластера
kubectl get componentstatuses
kubectl get cs
```

## События (events)

> `kubectl events` — самостоятельная команда, доступна с kubectl 1.26. Удобнее и гибче, чем `kubectl get events`.

```bash
# Показать все события в текущем неймспейсе
kubectl events

# События во всех неймспейсах
kubectl events -A
kubectl events --all-namespaces

# События для конкретного ресурса
kubectl events --for pod/<pod-name>
kubectl events --for deployment/<deploy-name>
kubectl events --for node/<node-name>

# Фильтрация по типу события (Normal, Warning)
kubectl events --types=Warning
kubectl events --types=Normal
kubectl events --types=Warning,Normal

# Следить за событиями в реальном времени
kubectl events --watch
kubectl events -w

# Мониторинг событий конкретного ресурса в реальном времени
kubectl events --for pod/<pod-name> --watch

# Вывод в JSON / YAML
kubectl events -o json
kubectl events -o yaml

# Получить только Warning-события по всему кластеру с анализом через jq
kubectl events -A -o json | \
  jq '.items[] | select(.type=="Warning") | {reason: .reason, message: .message, object: .involvedObject.name}'

# Диагностика пода в CrashLoopBackOff
kubectl events --for pod/<pod-name> --types=Warning

# Сравнение подходов:
# Классический (устаревший):
kubectl get events --field-selector involvedObject.name=<pod-name>
# Новый (предпочтительный):
kubectl events --for pod/<pod-name>

# Все Warning-события в неймспейсе, отсортированные по времени
kubectl events --types=Warning -o json | \
  jq -r '.items | sort_by(.lastTimestamp) | .[] | "\(.lastTimestamp) \(.reason) \(.involvedObject.name): \(.message)"'
```

## Диагностика типичных проблем подов (troubleshooting)

```bash
# Найти все не-running поды во всех неймспейсах
kubectl get pods -A --field-selector='status.phase!=Running'

# Быстро показать рестарты и текущее состояние контейнера
kubectl get pods -A -o custom-columns=NS:.metadata.namespace,POD:.metadata.name,PHASE:.status.phase,RESTARTS:.status.containerStatuses[0].restartCount,STATE:.status.containerStatuses[0].state.waiting.reason

# Проверить события конкретного пода (image pull, scheduling, probes)
kubectl describe pod <pod-name> -n <namespace>
kubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by=.lastTimestamp

# CrashLoopBackOff: посмотреть логи предыдущего запуска контейнера
kubectl logs <pod-name> -n <namespace> --previous
kubectl logs <pod-name> -n <namespace> -c <container-name> --previous

# Pending: проверить ошибки scheduler и запрошенные ресурсы
kubectl describe pod <pod-name> -n <namespace> | grep -A 20 -E 'Events|Requests|Limits|node(s)'

# ImagePullBackOff / ErrImagePull: проверить image и pull secret
kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Failed|ErrImagePull|ImagePullBackOff|pull'
kubectl get secret -n <namespace>

# Ошибки liveness/readiness/startup probes
kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Liveness|Readiness|Startup|probe'

# Проверить env и смонтированные config/secret внутри контейнера
kubectl exec -it <pod-name> -n <namespace> -- env
kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/config /etc/secrets

# Временный debug-контейнер в сетевом namespace целевого пода
kubectl debug <pod-name> -n <namespace> -it --image=busybox
```

## Ephemeral Containers (временные контейнеры)

```bash
# Добавить временный отладочный контейнер в работающий под (kubectl >= 1.23)
kubectl debug -it <pod-name> --image=busybox --target=<container-name>

# Использовать расширенный образ для отладки сети
kubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>

# Посмотреть временные контейнеры, уже прикреплённые к поду
kubectl get pod <pod-name> -o jsonpath='{.spec.ephemeralContainers}' | jq .

# Создать отладочную копию пода (оригинал не затрагивается)
kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --image=busybox

# Заменить точку входа падающего контейнера в копии
kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --container=<container-name> -- sh

# Разделить пространство процессов с целевым контейнером (видеть его процессы)
kubectl debug -it <pod-name> --image=busybox --target=<container-name> --share-processes

# Отладка узла — запустить привилегированный под на ноде
kubectl debug node/<node-name> -it --image=busybox

# Найти все поды с прикреплёнными временными контейнерами
kubectl get pods -A -o json | jq '.items[] | select(.spec.ephemeralContainers != null) | .metadata.name'

# Удалить отладочную копию пода после работы
kubectl delete pod <pod-name>-debug
```


---

[← Назад к README](../README.md)
