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
