# kubectl - Resource Management

> Quick navigation tip: use `Ctrl/Cmd + F` to jump to sections. Key terms: `apply`, `create`, `edit`, `patch`, `set`, `delete`, `diff`, `ssa`, `replace`, `wait`.

## Creating and applying resources (apply/create)

```bash
# Apply configuration from file
kubectl apply -f deployment.yaml

# Apply all yaml files from directory
kubectl apply -f ./configs/

# Apply configuration from URL
kubectl apply -f https://example.com/config.yaml

# Create namespace
kubectl create namespace <namespace-name>
kubectl create ns <namespace-name>

# Create deployment imperatively
kubectl create deployment <name> --image=<image>

# Create service
kubectl create service clusterip <name> --tcp=80:8080

# Create configmap from file
kubectl create configmap <name> --from-file=config.txt

# Create configmap from literal
kubectl create configmap <name> --from-literal=key=value

# Create secret from literal
kubectl create secret generic <name> --from-literal=password=secret123

# Create secret for docker registry
kubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<pass>
```

## Editing resources (edit)

```bash
# Edit deployment in default editor
kubectl edit deployment <deployment-name>

# Edit service
kubectl edit service <service-name>

# Edit configmap
kubectl edit configmap <configmap-name>

# Edit in specific namespace
kubectl edit deployment <deployment-name> -n <namespace>

# Use specific editor
KUBE_EDITOR="nano" kubectl edit deployment <deployment-name>
```

## Patching resources (patch)

```bash
# Change replica count via patch
kubectl patch deployment <deployment-name> -p '{"spec":{"replicas":3}}'

# Change container image
kubectl patch deployment <deployment-name> -p '{"spec":{"template":{"spec":{"containers":[{"name":"<container>","image":"nginx:1.21"}]}}}}'

# Merge patch format
kubectl patch deployment <deployment-name> --type=merge -p '{"spec":{"replicas":5}}'

# JSON patch format
kubectl patch deployment <deployment-name> --type=json -p='[{"op":"replace","path":"/spec/replicas","value":2}]'

# Add environment variable
kubectl patch deployment <deployment-name> --type=json -p='[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"NEW_VAR","value":"value"}}]'

# Change service type
kubectl patch svc <service-name> -p '{"spec":{"type":"NodePort"}}'
```

## Quick resource modification (set)

```bash
# Change container image
kubectl set image deployment/<deployment-name> <container-name>=nginx:1.21

# Change image for all containers
kubectl set image deployment/<deployment-name> *=nginx:1.21

# Change image and record in annotation
kubectl set image deployment/<deployment-name> nginx=nginx:1.21 --record

# Add environment variable
kubectl set env deployment/<deployment-name> ENV_VAR=value

# Add multiple variables
kubectl set env deployment/<deployment-name> VAR1=value1 VAR2=value2

# Remove environment variable
kubectl set env deployment/<deployment-name> ENV_VAR-

# Set variable from secret
kubectl set env deployment/<deployment-name> --from=secret/mysecret

# Set variable from configmap
kubectl set env deployment/<deployment-name> --from=configmap/myconfig

# Change resource limits
kubectl set resources deployment/<deployment-name> -c=nginx --limits=cpu=200m,memory=512Mi

# Change resource requests
kubectl set resources deployment/<deployment-name> -c=nginx --requests=cpu=100m,memory=256Mi

# Change service account
kubectl set serviceaccount deployment/<deployment-name> myserviceaccount

# Change selector for service
kubectl set selector service/<service-name> app=myapp,tier=frontend
```

## Deleting resources (delete)

```bash
# Delete pod
kubectl delete pod <pod-name>

# Delete deployment
kubectl delete deployment <deployment-name>

# Delete service
kubectl delete service <service-name>

# Delete resources from file
kubectl delete -f deployment.yaml

# Delete all resources by label
kubectl delete pods -l app=myapp

# Delete namespace (and all resources in it)
kubectl delete namespace <namespace-name>

# Force delete pod
kubectl delete pod <pod-name> --force --grace-period=0

# Delete all pods in namespace
kubectl delete pods --all -n <namespace>
```

## Comparing configurations (diff)

```bash
# Compare local file with current state in cluster
kubectl diff -f deployment.yaml

# Compare all files from directory
kubectl diff -f ./configs/

# Compare configuration from URL
kubectl diff -f https://example.com/config.yaml

# Compare using kustomize
kubectl diff -k ./overlays/production/

# Show diff before apply (useful in CI/CD)
kubectl diff -f deployment.yaml && kubectl apply -f deployment.yaml

# Diff with server-side
kubectl diff -f deployment.yaml --server-side

# Check configuration without applying (dry-run + diff)
kubectl apply -f deployment.yaml --dry-run=server
kubectl apply -f deployment.yaml --dry-run=client

# Validate file without applying
kubectl apply --validate=true --dry-run=client -f deployment.yaml

# Check what will change on delete
kubectl delete -f deployment.yaml --dry-run=client
```

## Server-side apply (SSA)

```bash
# Apply using server-side apply — preferred for GitOps and multi-actor environments
kubectl apply -f deployment.yaml --server-side

# SSA with a named field manager (label who owns each field)
kubectl apply -f deployment.yaml --server-side --field-manager=argocd

# Force-take ownership of conflicting fields from another field manager
kubectl apply -f deployment.yaml --server-side --force-conflicts

# Dry-run with server-side logic (validated by the API server)
kubectl apply -f deployment.yaml --server-side --dry-run=server

# Diff current cluster state vs local file using server-side logic
kubectl diff -f deployment.yaml --server-side

# Inspect field managers on a resource
kubectl get deployment my-deploy -o json | jq '.metadata.managedFields'

# Clean up managedFields from output for readability
kubectl get deployment my-deploy -o json | jq 'del(.metadata.managedFields)'
# or with the neat plugin:
kubectl neat get deployment my-deploy -o yaml

# Remove the legacy last-applied-configuration annotation after migrating to SSA
kubectl annotate deployment my-deploy kubectl.kubernetes.io/last-applied-configuration-

# Apply a whole directory with SSA
kubectl apply -f ./manifests/ --server-side --field-manager=platform-team

# SSA vs client-side apply:
# Client-side: tracks changes via kubectl.kubernetes.io/last-applied-configuration annotation
# Server-side: tracks ownership via .metadata.managedFields — safe for concurrent managers
# SSA is recommended when multiple tools (ArgoCD, Helm, kubectl) touch the same object
```

## Replace and attach to resources (replace/attach)

```bash
# Full resource replacement from file
kubectl replace -f deployment.yaml

# Force replacement (delete and recreate)
kubectl replace --force -f deployment.yaml

# Replace from stdin
cat deployment.yaml | kubectl replace -f -

# Attach to stdout/stderr of running container
kubectl attach <pod-name>

# Interactive attach to container (stdin + tty)
kubectl attach -it <pod-name>

# Attach to specific container
kubectl attach <pod-name> -c <container-name>

# Attach in specific namespace
kubectl attach <pod-name> -n <namespace>

# Convert config between API versions
kubectl convert -f deployment.yaml --output-version apps/v1

# View completion for bash/zsh
kubectl completion bash
kubectl completion zsh

# Enable autocompletion (add to .bashrc/.zshrc)
# source <(kubectl completion bash)
# source <(kubectl completion zsh)

# Create alias for kubectl
# alias k=kubectl
# complete -o default -F __start_kubectl k
```

## Waiting for conditions (wait)

```bash
# Wait for pod to become Ready
kubectl wait pod/<pod-name> --for=condition=Ready

# Wait for pod with timeout (default is 30s)
kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s

# Wait for all pods with a label to be ready
kubectl wait pods -l app=myapp --for=condition=Ready --timeout=60s

# Wait for deployment to finish rollout (all replicas available)
kubectl wait deployment/<deploy-name> --for=condition=Available --timeout=300s

# Wait for job to complete
kubectl wait job/<job-name> --for=condition=Complete --timeout=120s

# Wait for job to fail
kubectl wait job/<job-name> --for=condition=Failed --timeout=60s

# Wait for resource deletion
kubectl wait pod/<pod-name> --for=delete --timeout=60s

# Wait for all pods with a label to be deleted
kubectl wait pods -l app=myapp --for=delete --timeout=120s

# Wait for node to become Ready
kubectl wait node/<node-name> --for=condition=Ready --timeout=300s

# Wait for all nodes to become Ready
kubectl wait nodes --all --for=condition=Ready --timeout=300s

# Wait for CRD to be established
kubectl wait crd/<crd-name> --for=condition=Established --timeout=60s

# Wait in a specific namespace
kubectl wait pod/<pod-name> -n <namespace> --for=condition=Ready --timeout=60s

# Wait for multiple resources of the same type (by label, all namespaces)
kubectl wait pods -l tier=backend --for=condition=Ready --all-namespaces --timeout=120s

# Wait for PVC to be Bound
kubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s

# Wait on arbitrary field via jsonpath (k8s >= 1.23)
kubectl wait deployment/<deploy-name> \
  --for=jsonpath='{.status.readyReplicas}'=3 --timeout=120s

# CI/CD usage example
kubectl apply -f deployment.yaml
kubectl wait deployment/myapp --for=condition=Available --timeout=300s
echo "Deploy successful"

# Check multiple conditions sequentially
kubectl wait pod/<pod-name> --for=condition=Initialized --timeout=30s
kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s
kubectl wait pod/<pod-name> --for=condition=ContainersReady --timeout=120s

# Available pod conditions:
#   Initialized       — all init containers have completed
#   Ready             — pod is ready to serve traffic
#   ContainersReady   — all containers in the pod are ready
#   PodScheduled      — pod has been scheduled to a node

# Available node conditions:
#   Ready             — node is healthy and ready
#   MemoryPressure    — node is under memory pressure
#   DiskPressure      — node is under disk pressure
#   PIDPressure       — node is under PID pressure
#   NetworkUnavailable — node network is not configured
```


---

[← Back to README](../README.md)
