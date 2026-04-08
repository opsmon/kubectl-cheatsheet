# Управление ресурсами

> Создание, редактирование, патчинг и удаление ресурсов Kubernetes.

---

**Быстрые ссылки:**
[apply/create](#создание-и-применение-ресурсов-applycreate) · [edit](#редактирование-ресурсов-edit) · [patch](#патчинг-ресурсов-patch) · [set](#быстрое-изменение-ресурсов-set) · [delete](#удаление-ресурсов-delete) · [diff](#сравнение-конфигураций-diff) · [replace/attach](#замена-и-подключение-к-ресурсам-replaceattach)

---

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

# Apply с удалением ресурсов, которых нет в файлах (prune)
kubectl apply -f ./configs/ --prune -l app=myapp
```

## Server-side Apply (SSA)

```bash
# Применить манифест через server-side apply — рекомендуется для GitOps и мульти-акторных сред
kubectl apply -f deployment.yaml --server-side

# SSA с именованным field manager (фиксирует, кто владеет каждым полем)
kubectl apply -f deployment.yaml --server-side --field-manager=argocd

# Принудительно забрать ownership конфликтующих полей у другого менеджера
kubectl apply -f deployment.yaml --server-side --force-conflicts

# Dry-run с валидацией на стороне сервера
kubectl apply -f deployment.yaml --server-side --dry-run=server

# Diff текущего состояния в кластере vs локального файла (server-side логика)
kubectl diff -f deployment.yaml --server-side

# Сгенерировать YAML-шаблон без создания ресурса (dry-run)
kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml
kubectl run my-pod --image=nginx --dry-run=client -o yaml
```
