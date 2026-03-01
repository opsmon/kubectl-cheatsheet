# kubectl команды

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

## Выполнение команд в контейнере (exec)

```bash
# Выполнить команду в поде
kubectl exec <pod-name> -- <command>

# Пример: посмотреть список файлов
kubectl exec <pod-name> -- ls -la

# Интерактивный shell в поде
kubectl exec -it <pod-name> -- /bin/bash
kubectl exec -it <pod-name> -- /bin/sh

# Exec в конкретный контейнер (если несколько)
kubectl exec -it <pod-name> -c <container-name> -- /bin/bash

# Exec в определённом namespace
kubectl exec -it <pod-name> -n <namespace> -- /bin/bash

# Посмотреть переменные окружения
kubectl exec <pod-name> -- env

# Проверить сетевую доступность изнутри пода
kubectl exec <pod-name> -- curl -s http://service-name:port

# Посмотреть содержимое файла
kubectl exec <pod-name> -- cat /path/to/file
```

## Создание и применение ресурсов (apply/create)

```bash
# Применить конфигурацию из файла
kubectl apply -f deployment.yaml

# Применить все yaml файлы из директории
kubectl apply -f ./configs/

# Применить конфигурацию из URL
kubectl apply -f https://example.com/config.yaml

# Создать namespace
kubectl create namespace <namespace-name>
kubectl create ns <namespace-name>

# Создать deployment императивно
kubectl create deployment <name> --image=<image>

# Создать service
kubectl create service clusterip <name> --tcp=80:8080

# Создать configmap из файла
kubectl create configmap <name> --from-file=config.txt

# Создать configmap из literal
kubectl create configmap <name> --from-literal=key=value

# Создать secret из literal
kubectl create secret generic <name> --from-literal=password=secret123

# Создать secret для docker registry
kubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<pass>
```

## Удаление ресурсов (delete)

```bash
# Удалить pod
kubectl delete pod <pod-name>

# Удалить deployment
kubectl delete deployment <deployment-name>

# Удалить service
kubectl delete service <service-name>

# Удалить ресурсы из файла
kubectl delete -f deployment.yaml

# Удалить все ресурсы по label
kubectl delete pods -l app=myapp

# Удалить namespace (и все ресурсы в нём)
kubectl delete namespace <namespace-name>

# Принудительное удаление пода
kubectl delete pod <pod-name> --force --grace-period=0

# Удалить все поды в namespace
kubectl delete pods --all -n <namespace>
```

## Масштабирование (scale)

```bash
# Масштабировать deployment до N реплик
kubectl scale deployment <deployment-name> --replicas=3

# Масштабировать replicaset
kubectl scale replicaset <replicaset-name> --replicas=5

# Масштабировать statefulset
kubectl scale statefulset <statefulset-name> --replicas=2

# Масштабировать в определённом namespace
kubectl scale deployment <deployment-name> --replicas=3 -n <namespace>

# Автомасштабирование (HPA - Horizontal Pod Autoscaler)
kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80

# Посмотреть статус автомасштабирования
kubectl get hpa
```

## Проброс портов (port-forward)

```bash
# Пробросить порт пода на локальную машину
kubectl port-forward <pod-name> 8080:80

# Пробросить порт сервиса
kubectl port-forward service/<service-name> 8080:80
kubectl port-forward svc/<service-name> 8080:80

# Пробросить несколько портов
kubectl port-forward <pod-name> 8080:80 8443:443

# Пробросить на все интерфейсы (не только localhost)
kubectl port-forward --address 0.0.0.0 <pod-name> 8080:80

# Пробросить в определённом namespace
kubectl port-forward <pod-name> 8080:80 -n <namespace>

# Пробросить порт deployment
kubectl port-forward deployment/<deployment-name> 8080:80
```

## Управление обновлениями (rollout)

```bash
# Статус обновления deployment
kubectl rollout status deployment/<deployment-name>

# История обновлений
kubectl rollout history deployment/<deployment-name>

# Откатить deployment на предыдущую версию
kubectl rollout undo deployment/<deployment-name>

# Откатить на конкретную ревизию
kubectl rollout undo deployment/<deployment-name> --to-revision=2

# Перезапустить все поды в deployment
kubectl rollout restart deployment/<deployment-name>

# Приостановить обновление
kubectl rollout pause deployment/<deployment-name>

# Возобновить обновление
kubectl rollout resume deployment/<deployment-name>

# Посмотреть детали конкретной ревизии
kubectl rollout history deployment/<deployment-name> --revision=3
```

## Копирование файлов (cp)

```bash
# Скопировать файл из пода на локальную машину
kubectl cp <pod-name>:/path/to/file ./local-file

# Скопировать файл в под
kubectl cp ./local-file <pod-name>:/path/to/file

# Копирование с указанием namespace
kubectl cp <namespace>/<pod-name>:/path/to/file ./local-file

# Скопировать директорию из пода
kubectl cp <pod-name>:/path/to/dir ./local-dir

# Копирование из конкретного контейнера
kubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>
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

## Редактирование ресурсов (edit)

```bash
# Редактировать deployment в редакторе по умолчанию
kubectl edit deployment <deployment-name>

# Редактировать service
kubectl edit service <service-name>

# Редактировать configmap
kubectl edit configmap <configmap-name>

# Редактировать в конкретном namespace
kubectl edit deployment <deployment-name> -n <namespace>

# Использовать конкретный редактор
KUBE_EDITOR="nano" kubectl edit deployment <deployment-name>
```

## Работа с метками (label/annotate)

```bash
# Добавить label к поду
kubectl label pod <pod-name> environment=production

# Добавить label к ноде
kubectl label node <node-name> disktype=ssd

# Удалить label (минус в конце)
kubectl label pod <pod-name> environment-

# Перезаписать существующий label
kubectl label pod <pod-name> environment=staging --overwrite

# Добавить аннотацию
kubectl annotate pod <pod-name> description="My pod"

# Удалить аннотацию
kubectl annotate pod <pod-name> description-

# Показать labels всех подов
kubectl get pods --show-labels

# Фильтрация по label
kubectl get pods -l environment=production
kubectl get pods -l 'environment in (production,staging)'
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

## Патчинг ресурсов (patch)

```bash
# Изменить количество реплик через patch
kubectl patch deployment <deployment-name> -p '{"spec":{"replicas":3}}'

# Изменить image контейнера
kubectl patch deployment <deployment-name> -p '{"spec":{"template":{"spec":{"containers":[{"name":"<container>","image":"nginx:1.21"}]}}}}'

# Patch в формате merge
kubectl patch deployment <deployment-name> --type=merge -p '{"spec":{"replicas":5}}'

# Patch в формате JSON
kubectl patch deployment <deployment-name> --type=json -p='[{"op":"replace","path":"/spec/replicas","value":2}]'

# Добавить переменную окружения
kubectl patch deployment <deployment-name> --type=json -p='[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"NEW_VAR","value":"value"}}]'

# Изменить service type
kubectl patch svc <service-name> -p '{"spec":{"type":"NodePort"}}'
```

## Ожидание состояния (wait)

```bash
# Ждать пока под будет готов
kubectl wait --for=condition=Ready pod/<pod-name>

# Ждать с таймаутом
kubectl wait --for=condition=Ready pod/<pod-name> --timeout=60s

# Ждать готовности всех подов по label
kubectl wait --for=condition=Ready pods -l app=myapp

# Ждать пока deployment завершит rollout
kubectl wait --for=condition=Available deployment/<deployment-name>

# Ждать удаления ресурса
kubectl wait --for=delete pod/<pod-name> --timeout=30s

# Ждать готовности job
kubectl wait --for=condition=Complete job/<job-name>

# Ждать в конкретном namespace
kubectl wait --for=condition=Ready pod/<pod-name> -n <namespace>
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

## Быстрое изменение ресурсов (set)

```bash
# Изменить image контейнера
kubectl set image deployment/<deployment-name> <container-name>=nginx:1.21

# Изменить image для всех контейнеров
kubectl set image deployment/<deployment-name> *=nginx:1.21

# Изменить image и записать в аннотацию
kubectl set image deployment/<deployment-name> nginx=nginx:1.21 --record

# Добавить переменную окружения
kubectl set env deployment/<deployment-name> ENV_VAR=value

# Добавить несколько переменных
kubectl set env deployment/<deployment-name> VAR1=value1 VAR2=value2

# Удалить переменную окружения
kubectl set env deployment/<deployment-name> ENV_VAR-

# Установить переменную из secret
kubectl set env deployment/<deployment-name> --from=secret/mysecret

# Установить переменную из configmap
kubectl set env deployment/<deployment-name> --from=configmap/myconfig

# Изменить resource limits
kubectl set resources deployment/<deployment-name> -c=nginx --limits=cpu=200m,memory=512Mi

# Изменить resource requests
kubectl set resources deployment/<deployment-name> -c=nginx --requests=cpu=100m,memory=256Mi

# Изменить service account
kubectl set serviceaccount deployment/<deployment-name> myserviceaccount

# Изменить selector для service
kubectl set selector service/<service-name> app=myapp,tier=frontend
```

## Запуск подов и задач (run)

```bash
# Запустить под с образом
kubectl run <pod-name> --image=nginx

# Запустить под и сразу открыть shell
kubectl run -it debug --image=busybox -- /bin/sh

# Запустить под с автоудалением после выхода
kubectl run tmp --rm -it --image=busybox -- /bin/sh

# Запустить под с переменными окружения
kubectl run <pod-name> --image=nginx --env="DB_HOST=db" --env="DB_PORT=5432"

# Запустить под с указанием порта
kubectl run <pod-name> --image=nginx --port=80

# Запустить под с labels
kubectl run <pod-name> --image=nginx --labels="app=web,tier=frontend"

# Запустить под в определённом namespace
kubectl run <pod-name> --image=nginx -n <namespace>

# Запустить под и сразу создать service
kubectl run <pod-name> --image=nginx --port=80 --expose

# Генерация YAML без создания (dry-run)
kubectl run <pod-name> --image=nginx --dry-run=client -o yaml

# Запустить одноразовую задачу (Job)
kubectl create job <job-name> --image=busybox -- echo "Hello"

# Запустить CronJob
kubectl create cronjob <name> --image=busybox --schedule="*/5 * * * *" -- echo "tick"
```

## Создание сервисов (expose)

```bash
# Создать service из deployment
kubectl expose deployment <deployment-name> --port=80 --target-port=8080

# Создать service типа NodePort
kubectl expose deployment <deployment-name> --type=NodePort --port=80

# Создать service типа LoadBalancer
kubectl expose deployment <deployment-name> --type=LoadBalancer --port=80

# Создать service из пода
kubectl expose pod <pod-name> --port=80 --target-port=8080

# Создать service с именем
kubectl expose deployment <deployment-name> --port=80 --name=my-service

# Создать service с указанием протокола
kubectl expose deployment <deployment-name> --port=80 --protocol=TCP

# Создать service для нескольких портов
kubectl expose deployment <deployment-name> --port=80,443 --target-port=8080

# Создать service в определённом namespace
kubectl expose deployment <deployment-name> --port=80 -n <namespace>

# Генерация YAML без создания
kubectl expose deployment <deployment-name> --port=80 --dry-run=client -o yaml

# Создать ExternalName service
kubectl create service externalname <name> --external-name=db.example.com
```

## Продвинутый вывод данных (jsonpath/custom-columns)

```bash
# Получить IP адреса всех подов
kubectl get pods -o jsonpath='{.items[*].status.podIP}'

# Получить имена всех подов
kubectl get pods -o jsonpath='{.items[*].metadata.name}'

# Получить image каждого пода (с переносом строки)
kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[0].image}{"\n"}{end}'

# Получить имена нод и их IP
kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.addresses[0].address}{"\n"}{end}'

# Получить External IP нод
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'

# Кастомные колонки
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName

# Кастомные колонки с IP
kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName

# Получить все image в кластере
kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{"\n"}{end}{end}' | sort -u

# Получить секрет в декодированном виде
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d

# Получить endpoint адреса сервиса
kubectl get endpoints <service-name> -o jsonpath='{.subsets[*].addresses[*].ip}'
```

## Сравнение конфигураций (diff)

```bash
# Сравнить локальный файл с текущим состоянием в кластере
kubectl diff -f deployment.yaml

# Сравнить все файлы из директории
kubectl diff -f ./configs/

# Сравнить конфигурацию из URL
kubectl diff -f https://example.com/config.yaml

# Сравнить с использованием kustomize
kubectl diff -k ./overlays/production/

# Показать diff перед apply (полезно в CI/CD)
kubectl diff -f deployment.yaml && kubectl apply -f deployment.yaml

# Diff с указанием server-side
kubectl diff -f deployment.yaml --server-side

# Проверить конфигурацию без применения (dry-run + diff)
kubectl apply -f deployment.yaml --dry-run=server
kubectl apply -f deployment.yaml --dry-run=client

# Валидация файла без применения
kubectl apply --validate=true --dry-run=client -f deployment.yaml

# Проверить что изменится при удалении
kubectl delete -f deployment.yaml --dry-run=client
```

## Прокси и доступ к API (proxy)

```bash
# Запустить прокси к API серверу (localhost:8001)
kubectl proxy

# Прокси на указанном порту
kubectl proxy --port=8080

# Прокси доступный со всех интерфейсов
kubectl proxy --address=0.0.0.0 --accept-hosts='.*'

# После запуска прокси — доступ к API через curl
# curl http://localhost:8001/api/v1/namespaces
# curl http://localhost:8001/api/v1/pods

# Прямой доступ к API без прокси (с токеном)
kubectl get --raw /api/v1/namespaces
kubectl get --raw /apis/apps/v1/deployments

# Проверить здоровье кластера через API
kubectl get --raw /healthz
kubectl get --raw /readyz
kubectl get --raw /livez

# Получить метрики (если metrics-server установлен)
kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes
kubectl get --raw /apis/metrics.k8s.io/v1beta1/pods

# Обращение к API конкретного сервиса через прокси
# curl http://localhost:8001/api/v1/namespaces/<ns>/services/<svc>/proxy/
```

## Замена и подключение к ресурсам (replace/attach)

```bash
# Полная замена ресурса из файла
kubectl replace -f deployment.yaml

# Принудительная замена (удалить и создать заново)
kubectl replace --force -f deployment.yaml

# Замена из stdin
cat deployment.yaml | kubectl replace -f -

# Подключиться к stdout/stderr запущенного контейнера
kubectl attach <pod-name>

# Интерактивное подключение к контейнеру (stdin + tty)
kubectl attach -it <pod-name>

# Подключение к конкретному контейнеру
kubectl attach <pod-name> -c <container-name>

# Подключение в определённом namespace
kubectl attach <pod-name> -n <namespace>

# Конвертировать конфигурацию между версиями API
kubectl convert -f deployment.yaml --output-version apps/v1

# Просмотреть completion для bash/zsh
kubectl completion bash
kubectl completion zsh

# Включить автодополнение (добавить в .bashrc/.zshrc)
# source <(kubectl completion bash)
# source <(kubectl completion zsh)

# Создать alias для kubectl
# alias k=kubectl
# complete -o default -F __start_kubectl k
```

## Работа с Kustomize (kustomize)

```bash
# Применить конфигурацию через kustomize
kubectl apply -k ./overlays/production/

# Просмотреть итоговый YAML без применения
kubectl kustomize ./overlays/production/

# Удалить ресурсы через kustomize
kubectl delete -k ./overlays/production/

# Diff с kustomize
kubectl diff -k ./overlays/production/

# Применить базовую конфигурацию
kubectl apply -k ./base/

# Структура kustomize проекта:
# ./base/
#   kustomization.yaml
#   deployment.yaml
#   service.yaml
# ./overlays/
#   production/
#     kustomization.yaml  (patches, images, replicas)
#   staging/
#     kustomization.yaml

# Пример kustomization.yaml:
# apiVersion: kustomize.config.k8s.io/v1beta1
# kind: Kustomization
# resources:
#   - ../../base
# images:
#   - name: nginx
#     newTag: "1.21"
# replicas:
#   - name: my-deployment
#     count: 3
```

## Постоянные тома (pv/pvc)

```bash
# Список всех PersistentVolume (уровень кластера)
kubectl get pv

# Список всех PersistentVolumeClaim
kubectl get pvc

# PVC во всех namespace
kubectl get pvc -A

# Детальная информация о PV
kubectl describe pv <pv-name>

# Детальная информация о PVC
kubectl describe pvc <pvc-name>

# Список StorageClass
kubectl get storageclass
kubectl get sc

# Описание StorageClass
kubectl describe sc <storageclass-name>

# Создать PVC из файла
kubectl apply -f pvc.yaml

# Удалить PVC
kubectl delete pvc <pvc-name>

# Удалить PV
kubectl delete pv <pv-name>

# Получить PV отсортированные по размеру
kubectl get pv --sort-by=.spec.capacity.storage

# Показать PVC с именем тома и storage class
kubectl get pvc -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,VOLUME:.spec.volumeName,CAPACITY:.status.capacity.storage,CLASS:.spec.storageClassName

# Проверить какой под использует PVC
kubectl get pods -o json | grep -i "claimName"

# Типы политики возврата PV: Retain, Recycle, Delete
kubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy,STATUS:.status.phase

# Изменить политику возврата PV
kubectl patch pv <pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'

# Принудительно удалить зависший PVC (убрать finalizers)
kubectl patch pvc <pvc-name> -p '{"metadata":{"finalizers":null}}'
```

## Управление secret (secret)

```bash
# Список secret в текущем namespace
kubectl get secrets

# Список secret во всех namespace
kubectl get secrets -A

# Показать метаданные secret (без декодированных значений)
kubectl describe secret <secret-name>

# Показать secret в формате YAML
kubectl get secret <secret-name> -o yaml

# Декодировать один ключ из secret
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d

# Создать generic secret из literal значений
kubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=changeme

# Создать secret из файла
kubectl create secret generic <secret-name> --from-file=./config.env

# Создать TLS secret
kubectl create secret tls <secret-name> --cert=tls.crt --key=tls.key

# Обновить secret из файла (декларативно через apply)
kubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -

# Удалить secret
kubectl delete secret <secret-name>
```

## RBAC — Роли и управление доступом

```bash
# Список ролей в namespace
kubectl get roles

# Список ClusterRole (уровень кластера)
kubectl get clusterroles

# Список RoleBinding
kubectl get rolebindings

# Список ClusterRoleBinding
kubectl get clusterrolebindings

# Описание роли
kubectl describe role <role-name>
kubectl describe clusterrole <clusterrole-name>

# Создать роль (доступ get/list к pods)
kubectl create role pod-reader --verb=get,list,watch --resource=pods

# Создать ClusterRole
kubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods

# Привязать роль к пользователю
kubectl create rolebinding <binding-name> --role=pod-reader --user=<username>

# Привязать роль к ServiceAccount
kubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>

# Привязать ClusterRole к пользователю (на весь кластер)
kubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>

# Создать ServiceAccount
kubectl create serviceaccount <sa-name>

# Список ServiceAccount
kubectl get serviceaccounts
kubectl get sa

# Описание ServiceAccount
kubectl describe sa <sa-name>

# Проверить свои права доступа
kubectl auth can-i --list

# Проверить конкретное право
kubectl auth can-i create pods
kubectl auth can-i delete deployments -n production

# Проверить права для другого пользователя
kubectl auth can-i create pods --as=<username>

# Проверить права для ServiceAccount
kubectl auth can-i create pods --as=system:serviceaccount:<namespace>:<sa-name>

# Получить токен ServiceAccount (k8s < 1.24)
kubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d

# Создать токен для ServiceAccount (k8s >= 1.24)
kubectl create token <sa-name>

# Создать токен с кастомным TTL
kubectl create token <sa-name> --duration=24h
```

## Jobs и CronJobs

```bash
# Список всех Jobs
kubectl get jobs

# Список всех CronJobs
kubectl get cronjobs
kubectl get cj

# Описание Job
kubectl describe job <job-name>

# Описание CronJob
kubectl describe cronjob <cronjob-name>

# Создать Job из образа
kubectl create job <job-name> --image=busybox -- echo "Hello"

# Создать Job из существующего CronJob (вручную запустить)
kubectl create job <job-name> --from=cronjob/<cronjob-name>

# Создать CronJob (каждые 5 минут)
kubectl create cronjob <name> --image=busybox --schedule="*/5 * * * *" -- echo "tick"

# Создать CronJob (каждый день в 02:00)
kubectl create cronjob <name> --image=busybox --schedule="0 2 * * *" -- /bin/sh -c "backup.sh"

# Посмотреть логи Job (через поды)
kubectl logs -l job-name=<job-name>

# Дождаться завершения Job
kubectl wait --for=condition=Complete job/<job-name> --timeout=120s

# Удалить завершённые Jobs
kubectl delete jobs --field-selector status.successful=1

# Приостановить CronJob
kubectl patch cronjob <cronjob-name> -p '{"spec":{"suspend":true}}'

# Возобновить CronJob
kubectl patch cronjob <cronjob-name> -p '{"spec":{"suspend":false}}'

# Удалить CronJob (и все связанные Jobs)
kubectl delete cronjob <cronjob-name>
```

## Сетевые политики (networkpolicy)

```bash
# Список NetworkPolicy
kubectl get networkpolicy
kubectl get netpol

# NetworkPolicy во всех namespace
kubectl get netpol -A

# Описание NetworkPolicy
kubectl describe netpol <policy-name>

# Просмотр NetworkPolicy в формате YAML
kubectl get netpol <policy-name> -o yaml

# Создать NetworkPolicy из файла
kubectl apply -f netpol.yaml

# Удалить NetworkPolicy
kubectl delete netpol <policy-name>

# Пример: запретить весь входящий трафик к подам с app=myapp
# apiVersion: networking.k8s.io/v1
# kind: NetworkPolicy
# metadata:
#   name: deny-all-ingress
# spec:
#   podSelector:
#     matchLabels:
#       app: myapp
#   policyTypes:
#   - Ingress

# Пример: разрешить ingress только от подов с app=frontend
# spec:
#   podSelector:
#     matchLabels:
#       app: backend
#   policyTypes:
#   - Ingress
#   ingress:
#   - from:
#     - podSelector:
#         matchLabels:
#           app: frontend
#     ports:
#     - protocol: TCP
#       port: 8080

# Пример: разрешить egress только на порт 5432 (postgres)
# spec:
#   podSelector:
#     matchLabels:
#       app: backend
#   policyTypes:
#   - Egress
#   egress:
#   - to:
#     - podSelector:
#         matchLabels:
#           app: database
#     ports:
#     - protocol: TCP
#       port: 5432

# Проверить какие поды попадают под NetworkPolicy
kubectl get pods -l <selector-from-policy>
```

## Ingress

```bash
# Список всех Ingress ресурсов
kubectl get ingress
kubectl get ing

# Ingress во всех namespace
kubectl get ing -A

# Описание Ingress
kubectl describe ing <ingress-name>

# Просмотр Ingress в формате YAML
kubectl get ing <ingress-name> -o yaml

# Создать Ingress из файла
kubectl apply -f ingress.yaml

# Удалить Ingress
kubectl delete ing <ingress-name>

# Показать Ingress с хостами и адресами
kubectl get ing -o custom-columns=NAME:.metadata.name,HOSTS:.spec.rules[*].host,ADDRESS:.status.loadBalancer.ingress[*].ip

# Пример: базовый Ingress с роутингом по хосту
# apiVersion: networking.k8s.io/v1
# kind: Ingress
# metadata:
#   name: my-ingress
#   annotations:
#     nginx.ingress.kubernetes.io/rewrite-target: /
# spec:
#   ingressClassName: nginx
#   rules:
#   - host: myapp.example.com
#     http:
#       paths:
#       - path: /
#         pathType: Prefix
#         backend:
#           service:
#             name: my-service
#             port:
#               number: 80

# Пример: Ingress с TLS
# spec:
#   tls:
#   - hosts:
#     - myapp.example.com
#     secretName: myapp-tls-secret
#   rules:
#   - host: myapp.example.com
#     http:
#       paths:
#       - path: /
#         pathType: Prefix
#         backend:
#           service:
#             name: my-service
#             port:
#               number: 80

# Список IngressClass
kubectl get ingressclass
```

## StatefulSets

```bash
# Список всех StatefulSet
kubectl get statefulsets
kubectl get sts

# Список во всех namespace
kubectl get sts -A

# Описание StatefulSet
kubectl describe sts <sts-name>

# StatefulSet в формате YAML
kubectl get sts <sts-name> -o yaml

# Масштабировать StatefulSet
kubectl scale sts <sts-name> --replicas=3

# Роллинг-рестарт StatefulSet
kubectl rollout restart sts/<sts-name>

# Статус обновления StatefulSet
kubectl rollout status sts/<sts-name>

# История обновлений StatefulSet
kubectl rollout history sts/<sts-name>

# Откатить StatefulSet на предыдущую ревизию
kubectl rollout undo sts/<sts-name>

# Откатить на конкретную ревизию
kubectl rollout undo sts/<sts-name> --to-revision=2

# Обновить image в StatefulSet
kubectl set image sts/<sts-name> <container-name>=<image>:<tag>

# Удалить StatefulSet (поды остаются по умолчанию)
kubectl delete sts <sts-name>

# Удалить StatefulSet вместе с подами (foreground)
kubectl delete sts <sts-name> --cascade=foreground

# Удалить StatefulSet без удаления подов (orphan)
kubectl delete sts <sts-name> --cascade=orphan

# Список подов StatefulSet (по label)
kubectl get pods -l app=<sts-name>

# Показать StatefulSet с количеством реплик
kubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas
```

## DaemonSets

```bash
# Список всех DaemonSet
kubectl get daemonsets
kubectl get ds

# Список во всех namespace
kubectl get ds -A

# Описание DaemonSet
kubectl describe ds <ds-name>

# DaemonSet в формате YAML
kubectl get ds <ds-name> -o yaml

# Роллинг-рестарт DaemonSet (на всех нодах)
kubectl rollout restart ds/<ds-name>

# Статус обновления DaemonSet
kubectl rollout status ds/<ds-name>

# История обновлений DaemonSet
kubectl rollout history ds/<ds-name>

# Откатить DaemonSet на предыдущую ревизию
kubectl rollout undo ds/<ds-name>

# Обновить image в DaemonSet
kubectl set image ds/<ds-name> <container-name>=<image>:<tag>

# Удалить DaemonSet (и его поды)
kubectl delete ds <ds-name>

# Удалить DaemonSet без удаления подов
kubectl delete ds <ds-name> --cascade=orphan

# Показать DaemonSet с покрытием нод
kubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable

# Список подов DaemonSet (по label)
kubectl get pods -l app=<ds-name> -o wide
```

## ConfigMaps

```bash
# Список всех ConfigMap в текущем namespace
kubectl get configmaps
kubectl get cm

# Список во всех namespace
kubectl get cm -A

# Описание ConfigMap
kubectl describe cm <configmap-name>

# ConfigMap в формате YAML
kubectl get cm <configmap-name> -o yaml

# Создать ConfigMap из literal значений
kubectl create configmap <name> --from-literal=key1=value1 --from-literal=key2=value2

# Создать ConfigMap из файла (имя файла становится ключом)
kubectl create configmap <name> --from-file=config.txt

# Создать ConfigMap из файла с кастомным ключом
kubectl create configmap <name> --from-file=mykey=config.txt

# Создать ConfigMap из директории (все файлы становятся ключами)
kubectl create configmap <name> --from-file=./configs/

# Создать ConfigMap из env-файла (формат .env)
kubectl create configmap <name> --from-env-file=.env

# Редактировать ConfigMap
kubectl edit cm <configmap-name>

# Удалить ConfigMap
kubectl delete cm <configmap-name>

# Получить значение конкретного ключа
kubectl get cm <configmap-name> -o jsonpath='{.data.key}'

# Список всех ключей ConfigMap
kubectl get cm <configmap-name> -o go-template='{{range $k,$v := .data}}{{$k}}{{"\n"}}{{end}}'

# Обновить ConfigMap идемпотентно (dry-run + apply)
kubectl create configmap <name> --from-file=config.txt --dry-run=client -o yaml | kubectl apply -f -

# Показать все ConfigMap с ключами
kubectl get cm -o custom-columns=NAME:.metadata.name,KEYS:.data
```
