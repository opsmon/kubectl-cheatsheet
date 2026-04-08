# Хранилище и конфигурация

> ConfigMap, Secret, Persistent Volumes и Kustomize.

---

**Быстрые ссылки:**
[configmaps](#configmaps) · [secrets](#управление-secret-secret) · [pv/pvc](#постоянные-тома-pvpvc) · [kustomize](#работа-с-kustomize-kustomize)

---

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

# Создать secret для docker registry
kubectl create secret docker-registry <name> \
  --docker-server=<server> \
  --docker-username=<user> \
  --docker-password=<pass>

# Обновить secret из файла (декларативно через apply)
kubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -

# Удалить secret
kubectl delete secret <secret-name>
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
