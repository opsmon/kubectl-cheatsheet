# kubectl - Сеть

> Быстрая навигация: используйте `Ctrl/Cmd + F` для перехода к разделам. Ключевые слова: `port-forward`, `expose`, `ingress`, `networkpolicy`, `proxy`.

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

# Дать kubectl выбрать свободный локальный порт
kubectl port-forward <pod-name> :80

# Пробросить порт StatefulSet
kubectl port-forward statefulset/<statefulset-name> 8080:80
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

## Прокси и доступ к API (proxy)

```bash
# Запустить прокси к API серверу (localhost:8001)
kubectl proxy

# Прокси на указанном порту
kubectl proxy --port=8080

# Прокси доступный со всех интерфейсов
kubectl proxy --address=0.0.0.0 --accept-hosts='.*'

# После запуска прокси - доступ к API через curl
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


---

[← Назад к README](../README.md)
