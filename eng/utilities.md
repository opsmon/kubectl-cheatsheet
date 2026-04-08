# Utilities & Tools

> exec, file copying, labels, waiting, output formatting, scheduling, tips, Helm, plugins, and shell setup.

---

**Quick links:**
[exec](#execute-commands-in-container-exec) · [cp](#copying-files-cp) · [labels](#working-with-labels-labelannotate) · [wait](#waiting-for-conditions-wait) · [jsonpath](#advanced-output-jsonpathcustom-columns) · [scheduling](#pod-scheduling-affinity--tolerations--nodeselector) · [tips](#tips-and-useful-patterns) · [helm](#helm) · [krew](#kubectl-plugins-krew) · [aliases](#shell-aliases--autocompletion)

---

## Execute commands in container (exec)

```bash
# Execute command in pod
kubectl exec <pod-name> -- <command>

# Example: list files
kubectl exec <pod-name> -- ls -la

# Interactive shell in pod
kubectl exec -it <pod-name> -- /bin/bash
kubectl exec -it <pod-name> -- /bin/sh

# Exec into specific container (if multiple)
kubectl exec -it <pod-name> -c <container-name> -- /bin/bash

# Exec in specific namespace
kubectl exec -it <pod-name> -n <namespace> -- /bin/bash

# View environment variables
kubectl exec <pod-name> -- env

# Check network connectivity from inside pod
kubectl exec <pod-name> -- curl -s http://service-name:port

# View file contents
kubectl exec <pod-name> -- cat /path/to/file

# Exec one-liner into first pod matching a label
kubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh
```

## Copying files (cp)

```bash
# Copy file from pod to local machine
kubectl cp <pod-name>:/path/to/file ./local-file

# Copy file to pod
kubectl cp ./local-file <pod-name>:/path/to/file

# Copy with namespace specified
kubectl cp <namespace>/<pod-name>:/path/to/file ./local-file

# Copy directory from pod
kubectl cp <pod-name>:/path/to/dir ./local-dir

# Copy from specific container
kubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>
```

## Working with labels (label/annotate)

```bash
# Add label to pod
kubectl label pod <pod-name> environment=production

# Add label to node
kubectl label node <node-name> disktype=ssd

# Remove label (minus at the end)
kubectl label pod <pod-name> environment-

# Overwrite existing label
kubectl label pod <pod-name> environment=staging --overwrite

# Add annotation
kubectl annotate pod <pod-name> description="My pod"

# Remove annotation
kubectl annotate pod <pod-name> description-

# Show labels for all pods
kubectl get pods --show-labels

# Filter by label
kubectl get pods -l environment=production
kubectl get pods -l 'environment in (production,staging)'
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

# Wait for PVC to be Bound
kubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s

# Wait on arbitrary field via jsonpath (k8s >= 1.23)
kubectl wait deployment/<deploy-name> \
  --for=jsonpath='{.status.readyReplicas}'=3 --timeout=120s

# CI/CD usage example
kubectl apply -f deployment.yaml
kubectl wait deployment/myapp --for=condition=Available --timeout=300s
echo "Deploy successful"

# Available pod conditions:
#   Initialized       — all init containers have completed
#   Ready             — pod is ready to serve traffic
#   ContainersReady   — all containers in the pod are ready
#   PodScheduled      — pod has been scheduled to a node
```

## Advanced output (jsonpath/custom-columns)

```bash
# Get IP addresses of all pods
kubectl get pods -o jsonpath='{.items[*].status.podIP}'

# Get names of all pods
kubectl get pods -o jsonpath='{.items[*].metadata.name}'

# Get image of each pod (with newline)
kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[0].image}{"\n"}{end}'

# Get node names and their IPs
kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.addresses[0].address}{"\n"}{end}'

# Get External IP of nodes
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'

# Custom columns
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName

# Custom columns with IP
kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName

# Get all images in cluster
kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{"\n"}{end}{end}' | sort -u

# Get decoded secret value
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d

# Get service endpoint addresses
kubectl get endpoints <service-name> -o jsonpath='{.subsets[*].addresses[*].ip}'

# Get resource version (useful for optimistic locking)
kubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'
```

## Pod Scheduling (affinity / tolerations / nodeSelector)

```bash
# List nodes with their labels (to find scheduling targets)
kubectl get nodes --show-labels
kubectl get nodes -l disktype=ssd

# Add label to node for scheduling
kubectl label node <node-name> disktype=ssd

# Show taints on all nodes
kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints

# Check why pod is Pending / not scheduled
kubectl describe pod <pod-name> | grep -A 20 Events

# nodeSelector - schedule pod only on nodes with matching label:
# spec:
#   nodeSelector:
#     disktype: ssd

# Node affinity - require node with label (hard rule):
# spec:
#   affinity:
#     nodeAffinity:
#       requiredDuringSchedulingIgnoredDuringExecution:
#         nodeSelectorTerms:
#         - matchExpressions:
#           - key: disktype
#             operator: In
#             values:
#             - ssd

# Node affinity - prefer node with label (soft rule):
# spec:
#   affinity:
#     nodeAffinity:
#       preferredDuringSchedulingIgnoredDuringExecution:
#       - weight: 1
#         preference:
#           matchExpressions:
#           - key: disktype
#             operator: In
#             values:
#             - ssd

# Pod anti-affinity - never schedule 2 pods on same node (hard):
# spec:
#   affinity:
#     podAntiAffinity:
#       requiredDuringSchedulingIgnoredDuringExecution:
#       - labelSelector:
#           matchLabels:
#             app: my-app
#         topologyKey: kubernetes.io/hostname

# Pod anti-affinity - prefer spreading pods across nodes (soft):
# spec:
#   affinity:
#     podAntiAffinity:
#       preferredDuringSchedulingIgnoredDuringExecution:
#       - weight: 100
#         podAffinityTerm:
#           labelSelector:
#             matchLabels:
#               app: my-app
#           topologyKey: kubernetes.io/hostname

# Toleration - allow pod to run on tainted node:
# spec:
#   tolerations:
#   - key: "key"
#     operator: "Equal"
#     value: "value"
#     effect: "NoSchedule"

# Tolerate all taints (run on any node including master):
# spec:
#   tolerations:
#   - operator: "Exists"

# topologySpreadConstraints - evenly spread pods across zones:
# spec:
#   topologySpreadConstraints:
#   - maxSkew: 1
#     topologyKey: topology.kubernetes.io/zone
#     whenUnsatisfiable: DoNotSchedule
#     labelSelector:
#       matchLabels:
#         app: my-app
```

## Tips and useful patterns

```bash
# Generate YAML template without creating resource (dry-run)
kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml
kubectl run my-pod --image=nginx --dry-run=client -o yaml

# Force re-pull of image by restarting deployment
kubectl rollout restart deployment/<deployment-name>

# Watch rollout progress
kubectl rollout status deployment/<deployment-name> --watch

# Get all container images running in cluster
kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{"\n"}{end}{end}' | sort -u

# Find pods that are NOT ready
kubectl get pods -A --no-headers | awk '$3 != $4 || $5 != "Running"'

# Delete all failed pods across all namespaces
kubectl delete pods --field-selector=status.phase=Failed -A

# Get pods restarted more than N times
kubectl get pods -A --no-headers | awk '$5 > 5'

# Get logs from all pods of a deployment
kubectl logs -l app=<label-value> --all-containers=true --prefix=true

# Sort pods by restart count
kubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'

# Sort pods by age (newest first)
kubectl get pods --sort-by=.metadata.creationTimestamp

# Check which nodes have the most pods
kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn

# Apply multiple files at once using stdin
cat deployment.yaml service.yaml | kubectl apply -f -
```

## Helm

```bash
# Add a chart repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add stable https://charts.helm.sh/stable

# Update all repositories
helm repo update

# List added repositories
helm repo list

# Search for a chart in repos
helm search repo nginx
helm search repo nginx --versions

# Search in Artifact Hub
helm search hub nginx

# Show default values for a chart
helm show values bitnami/nginx

# Install a release
helm install <release-name> bitnami/nginx

# Install with custom values file
helm install <release-name> bitnami/nginx -f values.yaml

# Install with inline value overrides
helm install <release-name> bitnami/nginx --set replicaCount=2 --set service.type=NodePort

# Install in specific namespace (create if missing)
helm install <release-name> bitnami/nginx -n <namespace> --create-namespace

# Preview manifests without installing (dry-run)
helm install <release-name> bitnami/nginx --dry-run --debug

# List all releases
helm list
helm list -A
helm list -n <namespace>

# Show status of a release
helm status <release-name>

# Get current values of a deployed release
helm get values <release-name>

# Get all rendered manifests of a release
helm get manifest <release-name>

# Upgrade a release
helm upgrade <release-name> bitnami/nginx
helm upgrade <release-name> bitnami/nginx -f values.yaml

# Install if not exists, upgrade if exists
helm upgrade --install <release-name> bitnami/nginx -f values.yaml

# View release history
helm history <release-name>

# Rollback to previous revision
helm rollback <release-name>

# Rollback to specific revision
helm rollback <release-name> 2

# Uninstall a release
helm uninstall <release-name>
helm uninstall <release-name> -n <namespace>

# Keep history after uninstall
helm uninstall <release-name> --keep-history

# Render templates locally without a cluster
helm template <release-name> bitnami/nginx -f values.yaml

# Render and save to file
helm template <release-name> bitnami/nginx -f values.yaml > rendered.yaml

# Lint a chart for errors
helm lint ./my-chart

# Create a new chart scaffold
helm create my-chart

# Package a chart into .tgz
helm package ./my-chart

# Download chart source to local directory
helm pull bitnami/nginx --untar

# Run chart tests (test hooks)
helm test <release-name>
```

## kubectl plugins (krew)

```bash
# Install krew (kubectl plugin manager)
# https://krew.sigs.k8s.io/docs/user-guide/setup/install/

# List installed plugins
kubectl krew list

# Search for plugins
kubectl krew search <keyword>

# Install a plugin
kubectl krew install <plugin-name>

# Update all installed plugins
kubectl krew upgrade

# Uninstall a plugin
kubectl krew uninstall <plugin-name>

# Useful community plugins:

# kubectl ctx      - fast context switching (kubectx)
kubectl ctx
kubectl ctx <context-name>

# kubectl ns       - fast namespace switching (kubens)
kubectl ns
kubectl ns <namespace>

# kubectl neat     - clean up verbose YAML output
kubectl neat get pod <pod-name> -o yaml

# kubectl tree     - show resource owner hierarchy
kubectl tree deployment <deployment-name>

# kubectl stern    - multi-pod log tailing
kubectl stern <pod-pattern>
kubectl stern -l app=myapp

# kubectl df-pv    - show disk usage for PersistentVolumes
kubectl df-pv

# kubectl whoami   - show current user/service account identity
kubectl whoami
```

## Shell aliases & autocompletion

```bash
# Enable kubectl autocompletion — bash
source <(kubectl completion bash)
echo 'source <(kubectl completion bash)' >> ~/.bashrc

# Enable kubectl autocompletion — zsh
source <(kubectl completion zsh)
echo '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc

# Alias k=kubectl and keep completion working
alias k=kubectl
complete -o default -F __start_kubectl k   # bash
compdef k=kubectl                           # zsh

# Common daily-use aliases
alias kgp='kubectl get pods'
alias kgpa='kubectl get pods -A'
alias kgpw='kubectl get pods -w'
alias kgs='kubectl get svc'
alias kgn='kubectl get nodes'
alias kgd='kubectl get deploy'
alias kge='kubectl get events --sort-by=.lastTimestamp'
alias kdp='kubectl describe pod'
alias kdd='kubectl describe deployment'
alias kl='kubectl logs'
alias klf='kubectl logs -f'
alias kex='kubectl exec -it'
alias kaf='kubectl apply -f'
alias kdf='kubectl delete -f'

# Switch namespace without kubens
alias kns='kubectl config set-context --current --namespace'

# Switch context without kubectx
alias kctx='kubectl config use-context'

# Show current context + namespace at a glance
alias kwhere='echo "context: $(kubectl config current-context)" && echo "namespace: $(kubectl config view --minify -o jsonpath={.contexts[0].context.namespace})"'

# Prompt integration — show current context/namespace in shell prompt
# kube-ps1: https://github.com/jonmosco/kube-ps1
# starship prompt has built-in kubernetes module: https://starship.rs/config/#kubernetes
```
