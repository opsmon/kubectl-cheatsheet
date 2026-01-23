# kubectl commands

## Getting information (get)

```bash
# Get list of all pods in current namespace
kubectl get pods

# Get list of pods in all namespaces
kubectl get pods --all-namespaces
kubectl get pods -A

# Get list of pods with extended info (IP, node)
kubectl get pods -o wide

# Get list of all services
kubectl get services
kubectl get svc

# Get list of all deployments
kubectl get deployments
kubectl get deploy

# Get all resources in namespace
kubectl get all

# Get resource info in YAML format
kubectl get pod <pod-name> -o yaml

# Get resource info in JSON format
kubectl get pod <pod-name> -o json

# Get list of cluster nodes
kubectl get nodes

# Get list of namespaces
kubectl get namespaces
kubectl get ns
```
