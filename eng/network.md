# Network

> Port forwarding, services, ingress, network policies, and API proxy.

---

**Quick links:**
[port-forward](#port-forwarding-port-forward) · [expose](#creating-services-expose) · [ingress](#ingress) · [networkpolicy](#network-policies-networkpolicy) · [proxy](#proxy-and-api-access-proxy)

---

## Port forwarding (port-forward)

```bash
# Forward pod port to local machine
kubectl port-forward <pod-name> 8080:80

# Forward service port
kubectl port-forward service/<service-name> 8080:80
kubectl port-forward svc/<service-name> 8080:80

# Forward multiple ports
kubectl port-forward <pod-name> 8080:80 8443:443

# Forward to all interfaces (not just localhost)
kubectl port-forward --address 0.0.0.0 <pod-name> 8080:80

# Forward in specific namespace
kubectl port-forward <pod-name> 8080:80 -n <namespace>

# Forward deployment port
kubectl port-forward deployment/<deployment-name> 8080:80

# Let kubectl choose free local port
kubectl port-forward <pod-name> :80

# Forward StatefulSet port
kubectl port-forward statefulset/<statefulset-name> 8080:80
```

## Creating services (expose)

```bash
# Create service from deployment
kubectl expose deployment <deployment-name> --port=80 --target-port=8080

# Create NodePort service
kubectl expose deployment <deployment-name> --type=NodePort --port=80

# Create LoadBalancer service
kubectl expose deployment <deployment-name> --type=LoadBalancer --port=80

# Create service from pod
kubectl expose pod <pod-name> --port=80 --target-port=8080

# Create service with custom name
kubectl expose deployment <deployment-name> --port=80 --name=my-service

# Create service with protocol specified
kubectl expose deployment <deployment-name> --port=80 --protocol=TCP

# Create service for multiple ports
kubectl expose deployment <deployment-name> --port=80,443 --target-port=8080

# Create service in specific namespace
kubectl expose deployment <deployment-name> --port=80 -n <namespace>

# Generate YAML without creating
kubectl expose deployment <deployment-name> --port=80 --dry-run=client -o yaml

# Create ExternalName service
kubectl create service externalname <name> --external-name=db.example.com
```

## Ingress

```bash
# List all Ingress resources
kubectl get ingress
kubectl get ing

# List Ingress in all namespaces
kubectl get ing -A

# Describe Ingress
kubectl describe ing <ingress-name>

# View Ingress as YAML
kubectl get ing <ingress-name> -o yaml

# Create Ingress from file
kubectl apply -f ingress.yaml

# Delete Ingress
kubectl delete ing <ingress-name>

# Show Ingress with hosts and addresses
kubectl get ing -o custom-columns=NAME:.metadata.name,HOSTS:.spec.rules[*].host,ADDRESS:.status.loadBalancer.ingress[*].ip

# List IngressClasses
kubectl get ingressclass

# Example: basic Ingress with host routing
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

# Example: Ingress with TLS
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
```

## Network Policies (networkpolicy)

```bash
# List all NetworkPolicies
kubectl get networkpolicy
kubectl get netpol

# List NetworkPolicies in all namespaces
kubectl get netpol -A

# Describe NetworkPolicy
kubectl describe netpol <policy-name>

# View NetworkPolicy as YAML
kubectl get netpol <policy-name> -o yaml

# Create NetworkPolicy from file
kubectl apply -f netpol.yaml

# Delete NetworkPolicy
kubectl delete netpol <policy-name>

# Check which pods are affected by NetworkPolicy
kubectl get pods -l <selector-from-policy>

# Example: deny all ingress traffic to pods with app=myapp
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

# Example: allow ingress only from pods with app=frontend
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

# Example: allow egress only to port 5432 (postgres)
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
```

## Proxy and API access (proxy)

```bash
# Start proxy to API server (localhost:8001)
kubectl proxy

# Proxy on specific port
kubectl proxy --port=8080

# Proxy accessible from all interfaces
kubectl proxy --address=0.0.0.0 --accept-hosts='.*'

# After starting proxy - access API via curl
# curl http://localhost:8001/api/v1/namespaces
# curl http://localhost:8001/api/v1/pods

# Direct API access without proxy (with token)
kubectl get --raw /api/v1/namespaces
kubectl get --raw /apis/apps/v1/deployments

# Check cluster health via API
kubectl get --raw /healthz
kubectl get --raw /readyz
kubectl get --raw /livez

# Get metrics (if metrics-server installed)
kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes
kubectl get --raw /apis/metrics.k8s.io/v1beta1/pods

# Access specific service API via proxy
# curl http://localhost:8001/api/v1/namespaces/<ns>/services/<svc>/proxy/
```
