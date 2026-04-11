# kubectl - Cluster & Infrastructure

> Quick navigation tip: use `Ctrl/Cmd + F` to jump to sections. Key terms: `config`, `namespaces`, `nodes`, `crd`, `api-resources`, `capacity`, `field-selectors`.

## Contexts and configuration (config)

```bash
# Show current context
kubectl config current-context

# Show all contexts
kubectl config get-contexts

# Switch to another context
kubectl config use-context <context-name>

# Show full configuration
kubectl config view

# Set default namespace for context
kubectl config set-context --current --namespace=<namespace>

# Add new cluster
kubectl config set-cluster <cluster-name> --server=https://k8s-api:6443

# Add credentials
kubectl config set-credentials <user-name> --token=<token>

# Create new context
kubectl config set-context <context-name> --cluster=<cluster> --user=<user>

# Delete context
kubectl config delete-context <context-name>
```

## Namespace management

```bash
# List all namespaces
kubectl get namespaces
kubectl get ns

# Describe namespace (shows resource quotas, limits)
kubectl describe ns <namespace>

# Create namespace
kubectl create namespace <namespace>
kubectl create ns <namespace>

# Delete namespace (removes all resources inside)
kubectl delete ns <namespace>

# Set default namespace for current context
kubectl config set-context --current --namespace=<namespace>

# Show current default namespace
kubectl config view --minify | grep namespace

# Get all resources in a namespace
kubectl get all -n <namespace>

# Get all resources across all namespaces
kubectl get all -A

# List namespaces with status and age
kubectl get ns -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,AGE:.metadata.creationTimestamp

# Add label to namespace
kubectl label namespace <namespace> env=production

# Show namespaces with labels
kubectl get ns --show-labels

# Get resource count per namespace
kubectl get pods -A --no-headers | awk '{print $1}' | sort | uniq -c | sort -rn
```

## Node management (taint/cordon/drain)

```bash
# Prevent scheduling new pods on node
kubectl cordon <node-name>

# Allow scheduling on node
kubectl uncordon <node-name>

# Evict pods from node (for maintenance)
kubectl drain <node-name>

# Drain ignoring DaemonSets
kubectl drain <node-name> --ignore-daemonsets

# Drain with local data deletion
kubectl drain <node-name> --delete-emptydir-data

# Add taint to node
kubectl taint nodes <node-name> key=value:NoSchedule

# Remove taint (minus at the end)
kubectl taint nodes <node-name> key=value:NoSchedule-

# Taint effect types: NoSchedule, PreferNoSchedule, NoExecute
kubectl taint nodes <node-name> key=value:NoExecute
```

## Custom Resource Definitions (CRD)

```bash
# List all CRDs in cluster
kubectl get crds
kubectl get customresourcedefinitions

# Describe CRD
kubectl describe crd <crd-name>

# View CRD as YAML
kubectl get crd <crd-name> -o yaml

# Delete CRD (removes all instances of that resource too)
kubectl delete crd <crd-name>

# List instances of a custom resource
kubectl get <custom-resource-kind>
kubectl get <custom-resource-kind> -A

# Describe a custom resource instance
kubectl describe <custom-resource-kind> <name>

# Filter CRDs by group
kubectl get crds | grep <group-name>

# Show CRD with group and scope
kubectl get crds -o custom-columns=NAME:.metadata.name,GROUP:.spec.group,SCOPE:.spec.scope,VERSION:.spec.versions[0].name

# Explain a custom resource fields
kubectl explain <custom-resource-kind>
kubectl explain <custom-resource-kind>.spec

# Apply custom resource from file
kubectl apply -f my-resource.yaml

# Delete all instances of a custom resource
kubectl delete <custom-resource-kind> --all -n <namespace>
```

## Working with API resources (api-resources)

```bash
# Show all available API resources
kubectl api-resources

# Show only namespaced resources
kubectl api-resources --namespaced=true

# Show resources of specific API group
kubectl api-resources --api-group=apps

# Show API versions
kubectl api-versions

# Explain resource structure
kubectl explain pod
kubectl explain pod.spec
kubectl explain pod.spec.containers

# Recursive explanation
kubectl explain pod --recursive
```

## Cluster capacity & resource planning

```bash
# Show allocatable resources per node
kubectl get nodes -o custom-columns=\
'NAME:.metadata.name,CPU:.status.allocatable.cpu,MEMORY:.status.allocatable.memory,PODS:.status.allocatable.pods'

# Allocated (requested) vs allocatable per node
kubectl describe nodes | grep -A 6 "Allocated resources"

# Real-time usage per node (requires metrics-server)
kubectl top nodes --sort-by=cpu
kubectl top nodes --sort-by=memory

# Real-time usage per pod across all namespaces
kubectl top pods -A --sort-by=cpu
kubectl top pods -A --sort-by=memory

# Top 20 most memory-hungry pods
kubectl top pods -A --sort-by=memory --no-headers | head -20

# Show resource requests/limits for all pods in a namespace
kubectl get pods -o custom-columns=\
'NAME:.metadata.name,CPU_REQ:.spec.containers[0].resources.requests.cpu,MEM_REQ:.spec.containers[0].resources.requests.memory,CPU_LIM:.spec.containers[0].resources.limits.cpu,MEM_LIM:.spec.containers[0].resources.limits.memory'

# Find pods with NO resource requests set (risk: can starve other workloads)
kubectl get pods -A -o json | \
  jq -r '.items[] | select(.spec.containers[].resources.requests == null) | [.metadata.namespace, .metadata.name] | @tsv'

# Count pods per node (scheduling spread check)
kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn

# Check ResourceQuotas and current consumption
kubectl describe resourcequota -A

# Check LimitRanges in effect
kubectl get limitrange -A

# Per-node deep capacity summary (requested vs allocatable)
kubectl describe node <node-name> | grep -E "cpu|memory|Allocated|requests|limits" | head -30
```

## Field selectors and filtering

```bash
# Get pods by status (Running, Pending, Failed)
kubectl get pods --field-selector=status.phase=Running
kubectl get pods --field-selector=status.phase=Failed -A

# Get pods on a specific node
kubectl get pods --field-selector=spec.nodeName=<node-name> -A

# Get pods NOT in Running state
kubectl get pods --field-selector='status.phase!=Running' -A

# Combine multiple field selectors
kubectl get pods --field-selector=status.phase=Running,spec.nodeName=<node-name>

# Get services of specific type
kubectl get services --field-selector=spec.type=LoadBalancer -A

# Get events of specific type (Warning/Normal)
kubectl get events --field-selector=type=Warning -A

# Get events for specific object
kubectl get events --field-selector=involvedObject.name=<pod-name>,involvedObject.kind=Pod

# Watch resources in real-time (--watch)
kubectl get pods --watch
kubectl get pods -w

# Watch with specific field selector
kubectl get pods --field-selector=status.phase=Pending -w

# Get with label selector (multiple labels)
kubectl get pods -l 'app=myapp,tier=backend'
kubectl get pods -l 'app in (frontend,backend)'
kubectl get pods -l 'app notin (legacy)'
kubectl get pods -l '!deprecated'
```


---

[← Back to README](../README.md)
