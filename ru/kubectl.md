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
