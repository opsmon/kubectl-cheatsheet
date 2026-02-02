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
