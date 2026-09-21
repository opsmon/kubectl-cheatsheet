window.commandIndex = [
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": null,
    "command": "# Show current context\nkubectl config current-context\n\n# Show all contexts\nkubectl config get-contexts\n\n# Switch to another context\nkubectl config use-context <context-name>\n\n# Show full configuration\nkubectl config view\n\n# Set default namespace for context\nkubectl config set-context --current --namespace=<namespace>\n\n# Add new cluster\nkubectl config set-cluster <cluster-name> --server=https://k8s-api:6443\n\n# Add credentials\nkubectl config set-credentials <user-name> --token=<token>\n\n# Create new context\nkubectl config set-context <context-name> --cluster=<cluster> --user=<user>\n\n# Delete context\nkubectl config delete-context <context-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": null,
    "command": "# List all namespaces\nkubectl get namespaces\nkubectl get ns\n\n# Describe namespace (shows resource quotas, limits)\nkubectl describe ns <namespace>\n\n# Create namespace\nkubectl create namespace <namespace>\nkubectl create ns <namespace>\n\n# Delete namespace (removes all resources inside)\nkubectl delete ns <namespace>\n\n# Set default namespace for current context\nkubectl config set-context --current --namespace=<namespace>\n\n# Show current default namespace\nkubectl config view --minify | grep namespace\n\n# Get all resources in a namespace\nkubectl get all -n <namespace>\n\n# Get all resources across all namespaces\nkubectl get all -A\n\n# List namespaces with status and age\nkubectl get ns -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,AGE:.metadata.creationTimestamp\n\n# Add label to namespace\nkubectl label namespace <namespace> env=production\n\n# Show namespaces with labels\nkubectl get ns --show-labels\n\n# Get resource count per namespace\nkubectl get pods -A --no-headers | awk '{print $1}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": null,
    "command": "# Prevent scheduling new pods on node\nkubectl cordon <node-name>\n\n# Allow scheduling on node\nkubectl uncordon <node-name>\n\n# Evict pods from node (for maintenance)\nkubectl drain <node-name>\n\n# Drain ignoring DaemonSets\nkubectl drain <node-name> --ignore-daemonsets\n\n# Drain with local data deletion\nkubectl drain <node-name> --delete-emptydir-data\n\n# Add taint to node\nkubectl taint nodes <node-name> key=value:NoSchedule\n\n# Remove taint (minus at the end)\nkubectl taint nodes <node-name> key=value:NoSchedule-\n\n# Taint effect types: NoSchedule, PreferNoSchedule, NoExecute\nkubectl taint nodes <node-name> key=value:NoExecute"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": null,
    "command": "# List all CRDs in cluster\nkubectl get crds\nkubectl get customresourcedefinitions\n\n# Describe CRD\nkubectl describe crd <crd-name>\n\n# View CRD as YAML\nkubectl get crd <crd-name> -o yaml\n\n# Delete CRD (removes all instances of that resource too)\nkubectl delete crd <crd-name>\n\n# List instances of a custom resource\nkubectl get <custom-resource-kind>\nkubectl get <custom-resource-kind> -A\n\n# Describe a custom resource instance\nkubectl describe <custom-resource-kind> <name>\n\n# Filter CRDs by group\nkubectl get crds | grep <group-name>\n\n# Show CRD with group and scope\nkubectl get crds -o custom-columns=NAME:.metadata.name,GROUP:.spec.group,SCOPE:.spec.scope,VERSION:.spec.versions[0].name\n\n# Explain a custom resource fields\nkubectl explain <custom-resource-kind>\nkubectl explain <custom-resource-kind>.spec\n\n# Apply custom resource from file\nkubectl apply -f my-resource.yaml\n\n# Delete all instances of a custom resource\nkubectl delete <custom-resource-kind> --all -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": null,
    "command": "# Show all available API resources\nkubectl api-resources\n\n# Show only namespaced resources\nkubectl api-resources --namespaced=true\n\n# Show resources of specific API group\nkubectl api-resources --api-group=apps\n\n# Show API versions\nkubectl api-versions\n\n# Explain resource structure\nkubectl explain pod\nkubectl explain pod.spec\nkubectl explain pod.spec.containers\n\n# Recursive explanation\nkubectl explain pod --recursive"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": null,
    "command": "# Show allocatable resources per node\nkubectl get nodes -o custom-columns=\\\n'NAME:.metadata.name,CPU:.status.allocatable.cpu,MEMORY:.status.allocatable.memory,PODS:.status.allocatable.pods'\n\n# Allocated (requested) vs allocatable per node\nkubectl describe nodes | grep -A 6 \"Allocated resources\"\n\n# Real-time usage per node (requires metrics-server)\nkubectl top nodes --sort-by=cpu\nkubectl top nodes --sort-by=memory\n\n# Real-time usage per pod across all namespaces\nkubectl top pods -A --sort-by=cpu\nkubectl top pods -A --sort-by=memory\n\n# Top 20 most memory-hungry pods\nkubectl top pods -A --sort-by=memory --no-headers | head -20\n\n# Show resource requests/limits for all pods in a namespace\nkubectl get pods -o custom-columns=\\\n'NAME:.metadata.name,CPU_REQ:.spec.containers[0].resources.requests.cpu,MEM_REQ:.spec.containers[0].resources.requests.memory,CPU_LIM:.spec.containers[0].resources.limits.cpu,MEM_LIM:.spec.containers[0].resources.limits.memory'\n\n# Find pods with NO resource requests set (risk: can starve other workloads)\nkubectl get pods -A -o json | \\\n  jq -r '.items[] | select(.spec.containers[].resources.requests == null) | [.metadata.namespace, .metadata.name] | @tsv'\n\n# Count pods per node (scheduling spread check)\nkubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn\n\n# Check ResourceQuotas and current consumption\nkubectl describe resourcequota -A\n\n# Check LimitRanges in effect\nkubectl get limitrange -A\n\n# Per-node deep capacity summary (requested vs allocatable)\nkubectl describe node <node-name> | grep -E \"cpu|memory|Allocated|requests|limits\" | head -30"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": null,
    "command": "# kubectl client and Kubernetes API server version\nkubectl version\nkubectl version --output=yaml\n\n# Short API server version via raw endpoint\nkubectl get --raw /version\n\n# Supported API groups and versions\nkubectl api-versions\n\n# Check whether deprecated APIs appear in existing objects\nkubectl get all -A -o yaml | grep -E 'apiVersion: (extensions/v1beta1|apps/v1beta1|apps/v1beta2)'\n\n# Compatibility rule: kubectl should be within +/-1 minor version of kube-apiserver\n# Example: for an API server at v1.35, use kubectl v1.34, v1.35, or v1.36.\n\n# kuberc: kubectl user preferences and aliases (if enabled in your kubectl version)\nkubectl options | grep -i kuberc"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": null,
    "command": "# Get pods by status (Running, Pending, Failed)\nkubectl get pods --field-selector=status.phase=Running\nkubectl get pods --field-selector=status.phase=Failed -A\n\n# Get pods on a specific node\nkubectl get pods --field-selector=spec.nodeName=<node-name> -A\n\n# Get pods NOT in Running state\nkubectl get pods --field-selector='status.phase!=Running' -A\n\n# Combine multiple field selectors\nkubectl get pods --field-selector=status.phase=Running,spec.nodeName=<node-name>\n\n# Get services of specific type\nkubectl get services --field-selector=spec.type=LoadBalancer -A\n\n# Get events of specific type (Warning/Normal)\nkubectl get events --field-selector=type=Warning -A\n\n# Get events for specific object\nkubectl get events --field-selector=involvedObject.name=<pod-name>,involvedObject.kind=Pod\n\n# Watch resources in real-time (--watch)\nkubectl get pods --watch\nkubectl get pods -w\n\n# Watch with specific field selector\nkubectl get pods --field-selector=status.phase=Pending -w\n\n# Get with label selector (multiple labels)\nkubectl get pods -l 'app=myapp,tier=backend'\nkubectl get pods -l 'app in (frontend,backend)'\nkubectl get pods -l 'app notin (legacy)'\nkubectl get pods -l '!deprecated'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": null,
    "command": "# Apply configuration from file\nkubectl apply -f deployment.yaml\n\n# Apply all yaml files from directory\nkubectl apply -f ./configs/\n\n# Apply configuration from URL\nkubectl apply -f https://example.com/config.yaml\n\n# Create namespace\nkubectl create namespace <namespace-name>\nkubectl create ns <namespace-name>\n\n# Create deployment imperatively\nkubectl create deployment <name> --image=<image>\n\n# Create service\nkubectl create service clusterip <name> --tcp=80:8080\n\n# Create configmap from file\nkubectl create configmap <name> --from-file=config.txt\n\n# Create configmap from literal\nkubectl create configmap <name> --from-literal=key=value\n\n# Create secret from literal\nkubectl create secret generic <name> --from-literal=password=secret123\n\n# Create secret for docker registry\nkubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<pass>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "editing-resources-edit",
    "section": "Editing resources (edit)",
    "comment": null,
    "command": "# Edit deployment in default editor\nkubectl edit deployment <deployment-name>\n\n# Edit service\nkubectl edit service <service-name>\n\n# Edit configmap\nkubectl edit configmap <configmap-name>\n\n# Edit in specific namespace\nkubectl edit deployment <deployment-name> -n <namespace>\n\n# Use specific editor\nKUBE_EDITOR=\"nano\" kubectl edit deployment <deployment-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": null,
    "command": "# Change replica count via patch\nkubectl patch deployment <deployment-name> -p '{\"spec\":{\"replicas\":3}}'\n\n# Change container image\nkubectl patch deployment <deployment-name> -p '{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"<container>\",\"image\":\"nginx:1.21\"}]}}}}'\n\n# Merge patch format\nkubectl patch deployment <deployment-name> --type=merge -p '{\"spec\":{\"replicas\":5}}'\n\n# JSON patch format\nkubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"replace\",\"path\":\"/spec/replicas\",\"value\":2}]'\n\n# Add environment variable\nkubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"NEW_VAR\",\"value\":\"value\"}}]'\n\n# Change service type\nkubectl patch svc <service-name> -p '{\"spec\":{\"type\":\"NodePort\"}}'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": null,
    "command": "# Change container image\nkubectl set image deployment/<deployment-name> <container-name>=nginx:1.21\n\n# Change image for all containers\nkubectl set image deployment/<deployment-name> *=nginx:1.21\n\n# Change image and explicitly record the change reason in an annotation\nkubectl set image deployment/<deployment-name> nginx=nginx:1.21\nkubectl annotate deployment/<deployment-name> kubernetes.io/change-cause=\"nginx=nginx:1.21\" --overwrite\n\n# Add environment variable\nkubectl set env deployment/<deployment-name> ENV_VAR=value\n\n# Add multiple variables\nkubectl set env deployment/<deployment-name> VAR1=value1 VAR2=value2\n\n# Remove environment variable\nkubectl set env deployment/<deployment-name> ENV_VAR-\n\n# Set variable from secret\nkubectl set env deployment/<deployment-name> --from=secret/mysecret\n\n# Set variable from configmap\nkubectl set env deployment/<deployment-name> --from=configmap/myconfig\n\n# Change resource limits\nkubectl set resources deployment/<deployment-name> -c=nginx --limits=cpu=200m,memory=512Mi\n\n# Change resource requests\nkubectl set resources deployment/<deployment-name> -c=nginx --requests=cpu=100m,memory=256Mi\n\n# Change service account\nkubectl set serviceaccount deployment/<deployment-name> myserviceaccount\n\n# Change selector for service\nkubectl set selector service/<service-name> app=myapp,tier=frontend"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": null,
    "command": "# Delete pod\nkubectl delete pod <pod-name>\n\n# Delete deployment\nkubectl delete deployment <deployment-name>\n\n# Delete service\nkubectl delete service <service-name>\n\n# Delete resources from file\nkubectl delete -f deployment.yaml\n\n# Delete all resources by label\nkubectl delete pods -l app=myapp\n\n# Delete namespace (and all resources in it)\nkubectl delete namespace <namespace-name>\n\n# Force delete pod: use only when normal deletion is stuck\nkubectl delete pod <pod-name> --force --grace-period=0\n\n# Delete all pods in namespace\nkubectl delete pods --all -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": null,
    "command": "# Compare local file with current state in cluster\nkubectl diff -f deployment.yaml\n\n# Compare all files from directory\nkubectl diff -f ./configs/\n\n# Compare configuration from URL\nkubectl diff -f https://example.com/config.yaml\n\n# Compare using kustomize\nkubectl diff -k ./overlays/production/\n\n# Inspect the diff first (exit 0: no changes, 1: changes, >1: error)\nkubectl diff -f deployment.yaml\n\n# Apply the configuration separately after reviewing changes\nkubectl apply -f deployment.yaml\n\n# Diff with server-side\nkubectl diff -f deployment.yaml --server-side\n\n# Check configuration without applying (dry-run + diff)\nkubectl apply -f deployment.yaml --dry-run=server\nkubectl apply -f deployment.yaml --dry-run=client\n\n# Validate file without applying\nkubectl apply --validate=true --dry-run=client -f deployment.yaml\n\n# Check what will change on delete\nkubectl delete -f deployment.yaml --dry-run=client"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": null,
    "command": "if kubectl diff -f deployment.yaml; then\n  diff_status=0\nelse\n  diff_status=$?\nfi\ncase \"$diff_status\" in\n  0|1) kubectl apply -f deployment.yaml ;;\n  *) printf 'kubectl diff failed (%s)\\n' \"$diff_status\" >&2; exit \"$diff_status\" ;;\nesac"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": null,
    "command": "# Apply using server-side apply — preferred for GitOps and multi-actor environments\nkubectl apply -f deployment.yaml --server-side\n\n# SSA with a named field manager (label who owns each field)\nkubectl apply -f deployment.yaml --server-side --field-manager=argocd\n\n# Force-take ownership of conflicting fields from another field manager\nkubectl apply -f deployment.yaml --server-side --force-conflicts\n\n# Dry-run with server-side logic (validated by the API server)\nkubectl apply -f deployment.yaml --server-side --dry-run=server\n\n# Diff current cluster state vs local file using server-side logic\nkubectl diff -f deployment.yaml --server-side\n\n# Inspect field managers on a resource\nkubectl get deployment my-deploy -o json | jq '.metadata.managedFields'\n\n# Clean up managedFields from output for readability\nkubectl get deployment my-deploy -o json | jq 'del(.metadata.managedFields)'\n# or with the neat plugin:\nkubectl neat get deployment my-deploy -o yaml\n\n# Remove the legacy last-applied-configuration annotation after migrating to SSA\nkubectl annotate deployment my-deploy kubectl.kubernetes.io/last-applied-configuration-\n\n# Apply a whole directory with SSA\nkubectl apply -f ./manifests/ --server-side --field-manager=platform-team\n\n# SSA vs client-side apply:\n# Client-side: tracks changes via kubectl.kubernetes.io/last-applied-configuration annotation\n# Server-side: tracks ownership via .metadata.managedFields — safe for concurrent managers\n# SSA is recommended when multiple tools (ArgoCD, Helm, kubectl) touch the same object"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": null,
    "command": "# Full resource replacement from file\nkubectl replace -f deployment.yaml\n\n# Force replacement (delete and recreate)\nkubectl replace --force -f deployment.yaml\n\n# Replace from stdin\ncat deployment.yaml | kubectl replace -f -\n\n# Attach to stdout/stderr of running container\nkubectl attach <pod-name>\n\n# Interactive attach to container (stdin + tty)\nkubectl attach -it <pod-name>\n\n# Attach to specific container\nkubectl attach <pod-name> -c <container-name>\n\n# Attach in specific namespace\nkubectl attach <pod-name> -n <namespace>\n\n# Convert config between API versions (requires the separate kubectl-convert plugin)\nkubectl convert -f deployment.yaml --output-version apps/v1\n\n# View completion for bash/zsh\nkubectl completion bash\nkubectl completion zsh\n\n# Enable autocompletion (add to .bashrc/.zshrc)\n# source <(kubectl completion bash)\n# source <(kubectl completion zsh)\n\n# Create alias for kubectl\n# alias k=kubectl\n# complete -o default -F __start_kubectl k"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": null,
    "command": "# Wait for pod to become Ready\nkubectl wait pod/<pod-name> --for=condition=Ready\n\n# Wait for pod with timeout (default is 30s)\nkubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s\n\n# Wait for all pods with a label to be ready\nkubectl wait pods -l app=myapp --for=condition=Ready --timeout=60s\n\n# Wait for deployment to finish rollout (all replicas available)\nkubectl wait deployment/<deploy-name> --for=condition=Available --timeout=300s\n\n# Wait for job to complete\nkubectl wait job/<job-name> --for=condition=Complete --timeout=120s\n\n# Wait for job to fail\nkubectl wait job/<job-name> --for=condition=Failed --timeout=60s\n\n# Wait for resource deletion\nkubectl wait pod/<pod-name> --for=delete --timeout=60s\n\n# Wait for all pods with a label to be deleted\nkubectl wait pods -l app=myapp --for=delete --timeout=120s\n\n# Wait for node to become Ready\nkubectl wait node/<node-name> --for=condition=Ready --timeout=300s\n\n# Wait for all nodes to become Ready\nkubectl wait nodes --all --for=condition=Ready --timeout=300s\n\n# Wait for CRD to be established\nkubectl wait crd/<crd-name> --for=condition=Established --timeout=60s\n\n# Wait in a specific namespace\nkubectl wait pod/<pod-name> -n <namespace> --for=condition=Ready --timeout=60s\n\n# Wait for multiple resources of the same type (by label, all namespaces)\nkubectl wait pods -l tier=backend --for=condition=Ready --all-namespaces --timeout=120s\n\n# Wait for PVC to be Bound\nkubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s\n\n# Wait on arbitrary field via jsonpath (k8s >= 1.23)\nkubectl wait deployment/<deploy-name> \\\n  --for=jsonpath='{.status.readyReplicas}'=3 --timeout=120s\n\n# CI/CD usage example\nkubectl apply -f deployment.yaml\nkubectl wait deployment/myapp --for=condition=Available --timeout=300s\necho \"Deploy successful\"\n\n# Check multiple conditions sequentially\nkubectl wait pod/<pod-name> --for=condition=Initialized --timeout=30s\nkubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s\nkubectl wait pod/<pod-name> --for=condition=ContainersReady --timeout=120s\n\n# Available pod conditions:\n#   Initialized       — all init containers have completed\n#   Ready             — pod is ready to serve traffic\n#   ContainersReady   — all containers in the pod are ready\n#   PodScheduled      — pod has been scheduled to a node\n\n# Available node conditions:\n#   Ready             — node is healthy and ready\n#   MemoryPressure    — node is under memory pressure\n#   DiskPressure      — node is under disk pressure\n#   PIDPressure       — node is under PID pressure\n#   NetworkUnavailable — node network is not configured"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": null,
    "command": "# Forward pod port to local machine\nkubectl port-forward <pod-name> 8080:80\n\n# Forward service port\nkubectl port-forward service/<service-name> 8080:80\nkubectl port-forward svc/<service-name> 8080:80\n\n# Forward multiple ports\nkubectl port-forward <pod-name> 8080:80 8443:443\n\n# Forward to all interfaces (dangerous on workstations: exposes access to the network)\nkubectl port-forward --address 0.0.0.0 <pod-name> 8080:80\n\n# Forward in specific namespace\nkubectl port-forward <pod-name> 8080:80 -n <namespace>\n\n# Forward deployment port\nkubectl port-forward deployment/<deployment-name> 8080:80\n\n# Let kubectl choose free local port\nkubectl port-forward <pod-name> :80\n\n# Forward StatefulSet port\nkubectl port-forward statefulset/<statefulset-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": null,
    "command": "# Create service from deployment\nkubectl expose deployment <deployment-name> --port=80 --target-port=8080\n\n# Create NodePort service\nkubectl expose deployment <deployment-name> --type=NodePort --port=80\n\n# Create LoadBalancer service\nkubectl expose deployment <deployment-name> --type=LoadBalancer --port=80\n\n# Create service from pod\nkubectl expose pod <pod-name> --port=80 --target-port=8080\n\n# Create service with custom name\nkubectl expose deployment <deployment-name> --port=80 --name=my-service\n\n# Create service with protocol specified\nkubectl expose deployment <deployment-name> --port=80 --protocol=TCP\n\n# Create service for multiple ports\nkubectl expose deployment <deployment-name> --port=80,443 --target-port=8080\n\n# Create service in specific namespace\nkubectl expose deployment <deployment-name> --port=80 -n <namespace>\n\n# Generate YAML without creating\nkubectl expose deployment <deployment-name> --port=80 --dry-run=client -o yaml\n\n# Create ExternalName service\nkubectl create service externalname <name> --external-name=db.example.com"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": null,
    "command": "# List all Ingress resources\nkubectl get ingress\nkubectl get ing\n\n# List Ingress in all namespaces\nkubectl get ing -A\n\n# Describe Ingress\nkubectl describe ing <ingress-name>\n\n# View Ingress as YAML\nkubectl get ing <ingress-name> -o yaml\n\n# Create Ingress from file\nkubectl apply -f ingress.yaml\n\n# Delete Ingress\nkubectl delete ing <ingress-name>\n\n# Show Ingress with hosts and addresses\nkubectl get ing -o custom-columns=NAME:.metadata.name,HOSTS:.spec.rules[*].host,ADDRESS:.status.loadBalancer.ingress[*].ip\n\n# Example: basic Ingress with host routing\n# apiVersion: networking.k8s.io/v1\n# kind: Ingress\n# metadata:\n#   name: my-ingress\n#   annotations:\n#     nginx.ingress.kubernetes.io/rewrite-target: /\n# spec:\n#   ingressClassName: nginx\n#   rules:\n#   - host: myapp.example.com\n#     http:\n#       paths:\n#       - path: /\n#         pathType: Prefix\n#         backend:\n#           service:\n#             name: my-service\n#             port:\n#               number: 80\n\n# Example: Ingress with TLS\n# spec:\n#   tls:\n#   - hosts:\n#     - myapp.example.com\n#     secretName: myapp-tls-secret\n#   rules:\n#   - host: myapp.example.com\n#     http:\n#       paths:\n#       - path: /\n#         pathType: Prefix\n#         backend:\n#           service:\n#             name: my-service\n#             port:\n#               number: 80\n\n# List IngressClasses\nkubectl get ingressclass"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": null,
    "command": "# List all NetworkPolicies\nkubectl get networkpolicy\nkubectl get netpol\n\n# List NetworkPolicies in all namespaces\nkubectl get netpol -A\n\n# Describe NetworkPolicy\nkubectl describe netpol <policy-name>\n\n# View NetworkPolicy as YAML\nkubectl get netpol <policy-name> -o yaml\n\n# Create NetworkPolicy from file\nkubectl apply -f netpol.yaml\n\n# Delete NetworkPolicy\nkubectl delete netpol <policy-name>\n\n# Example: deny all ingress traffic to pods with app=myapp\n# apiVersion: networking.k8s.io/v1\n# kind: NetworkPolicy\n# metadata:\n#   name: deny-all-ingress\n# spec:\n#   podSelector:\n#     matchLabels:\n#       app: myapp\n#   policyTypes:\n#   - Ingress\n\n# Example: allow ingress only from pods with app=frontend\n# spec:\n#   podSelector:\n#     matchLabels:\n#       app: backend\n#   policyTypes:\n#   - Ingress\n#   ingress:\n#   - from:\n#     - podSelector:\n#         matchLabels:\n#           app: frontend\n#     ports:\n#     - protocol: TCP\n#       port: 8080\n\n# Example: allow egress only to port 5432 (postgres)\n# spec:\n#   podSelector:\n#     matchLabels:\n#       app: backend\n#   policyTypes:\n#   - Egress\n#   egress:\n#   - to:\n#     - podSelector:\n#         matchLabels:\n#           app: database\n#     ports:\n#     - protocol: TCP\n#       port: 5432\n\n# Check which pods are affected by NetworkPolicy\nkubectl get pods -l <selector-from-policy>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": null,
    "command": "# Start proxy to API server (localhost:8001)\nkubectl proxy\n\n# Proxy on specific port\nkubectl proxy --port=8080\n\n# Proxy accessible from all interfaces (dangerous: can expose the Kubernetes API to the network)\nkubectl proxy --address=0.0.0.0 --accept-hosts='.*'\n\n# After starting proxy - access API via curl\n# curl http://localhost:8001/api/v1/namespaces\n# curl http://localhost:8001/api/v1/pods\n\n# Direct API access without proxy (with token)\nkubectl get --raw /api/v1/namespaces\nkubectl get --raw /apis/apps/v1/deployments\n\n# Check cluster health via API\nkubectl get --raw /healthz\nkubectl get --raw /readyz\nkubectl get --raw /livez\nkubectl get --raw '/readyz?verbose'\nkubectl get --raw '/livez?verbose'\n\n# Diagnostic API server endpoints (availability depends on permissions and cluster version)\nkubectl get --raw /version\nkubectl get --raw /openapi/v2\n\n# Get metrics (if metrics-server installed)\nkubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes\nkubectl get --raw /apis/metrics.k8s.io/v1beta1/pods\n\n# Access specific service API via proxy\n# curl http://localhost:8001/api/v1/namespaces/<ns>/services/<svc>/proxy/"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": null,
    "command": "# List all roles in namespace\nkubectl get roles\n\n# List all ClusterRoles\nkubectl get clusterroles\n\n# List RoleBindings\nkubectl get rolebindings\n\n# List ClusterRoleBindings\nkubectl get clusterrolebindings\n\n# Describe role\nkubectl describe role <role-name>\nkubectl describe clusterrole <clusterrole-name>\n\n# Create role (allows get/list pods)\nkubectl create role pod-reader --verb=get,list,watch --resource=pods\n\n# Create ClusterRole\nkubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods\n\n# Bind role to user\nkubectl create rolebinding <binding-name> --role=pod-reader --user=<username>\n\n# Bind role to ServiceAccount\nkubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>\n\n# Bind ClusterRole to user (cluster-wide)\nkubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>\n\n# Create ServiceAccount\nkubectl create serviceaccount <sa-name>\n\n# List ServiceAccounts\nkubectl get serviceaccounts\nkubectl get sa\n\n# Describe ServiceAccount\nkubectl describe sa <sa-name>\n\n# Check own permissions\nkubectl auth can-i --list\n\n# Check specific permission\nkubectl auth can-i create pods\nkubectl auth can-i delete deployments -n production\n\n# Check permissions for another user\nkubectl auth can-i create pods --as=<username>\n\n# Check permissions for ServiceAccount\nkubectl auth can-i create pods --as=system:serviceaccount:<namespace>:<sa-name>\n\n# Legacy: get ServiceAccount token from Secret (only for k8s < 1.24 clusters)\nkubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d\n\n# Preferred: create a short-lived ServiceAccount token (k8s >= 1.24)\nkubectl create token <sa-name>\n\n# Create token with custom TTL\nkubectl create token <sa-name> --duration=24h"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": null,
    "command": "# Check if you can perform an action in the current namespace\nkubectl auth can-i get pods\nkubectl auth can-i create deployments\nkubectl auth can-i delete secrets\n\n# Check in a specific namespace\nkubectl auth can-i get pods -n kube-system\n\n# Check in all namespaces\nkubectl auth can-i get pods --all-namespaces\n\n# List all actions you are allowed to perform in current namespace\nkubectl auth can-i --list\nkubectl auth can-i --list -n staging\n\n# Impersonate another user to check their permissions\nkubectl auth can-i get pods --as dev-user\nkubectl auth can-i get pods --as system:serviceaccount:default:mysa\n\n# Impersonate a group\nkubectl auth can-i get pods --as-group system:masters --as fake-user\n\n# Check if a ServiceAccount can do something (useful for debugging workloads)\nkubectl auth can-i list pods \\\n  --as system:serviceaccount:<namespace>:<serviceaccount-name>\n\n# Show current identity (user, groups, extra)\nkubectl auth whoami\n\n# Reconcile RBAC objects from a file (applies missing rules, non-destructive)\nkubectl auth reconcile -f rbac-manifest.yaml\n\n# Dry-run reconcile to preview changes\nkubectl auth reconcile -f rbac-manifest.yaml --dry-run=client"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": null,
    "command": "# List all CSRs in cluster\nkubectl get csr\nkubectl get certificatesigningrequests\n\n# Show CSR with status and signer\nkubectl get csr -o custom-columns=NAME:.metadata.name,AGE:.metadata.creationTimestamp,SIGNERNAME:.spec.signerName,REQUESTOR:.spec.username,CONDITION:.status.conditions[0].type\n\n# Describe CSR (shows subject, usages, events)\nkubectl describe csr <csr-name>\n\n# Approve a CSR\nkubectl certificate approve <csr-name>\n\n# Deny a CSR\nkubectl certificate deny <csr-name>\n\n# Delete a CSR\nkubectl delete csr <csr-name>\n\n# Create a CSR object from a PEM file (k8s >= 1.18)\ncat <<EOF | kubectl apply -f -\napiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: my-user\nspec:\n  request: $(cat my-user.csr | base64 | tr -d '\\n')\n  signerName: kubernetes.io/kube-apiserver-client\n  expirationSeconds: 86400   # 1 day\n  usages:\n  - client auth\nEOF\n\n# Retrieve the signed certificate after approval\nkubectl get csr <csr-name> -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt\n\n# Full workflow: generate key + CSR, submit, approve, fetch cert\n# 1. Generate private key and CSR with openssl\nopenssl genrsa -out my-user.key 2048\nopenssl req -new -key my-user.key -out my-user.csr -subj \"/CN=my-user/O=my-group\"\n\n# 2. Submit CSR to Kubernetes (see above)\n\n# 3. Approve\nkubectl certificate approve my-user\n\n# 4. Fetch signed cert\nkubectl get csr my-user -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt\n\n# 5. Add user to kubeconfig\nkubectl config set-credentials my-user --client-key=my-user.key --client-certificate=my-user.crt --embed-certs=true\nkubectl config set-context my-user-context --cluster=<cluster-name> --user=my-user"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": null,
    "command": "# Check current Pod Security labels on a namespace\nkubectl get ns <namespace> --show-labels\nkubectl get ns <namespace> -o jsonpath='{.metadata.labels.pod-security\\.kubernetes\\.io/enforce}'\n\n# Enable enforce=baseline mode\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce=baseline --overwrite\n\n# Enable enforce=restricted mode (stricter)\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce=restricted --overwrite\n\n# Add warn/audit modes for soft validation\nkubectl label ns <namespace> pod-security.kubernetes.io/warn=restricted --overwrite\nkubectl label ns <namespace> pod-security.kubernetes.io/audit=restricted --overwrite\n\n# Pin policy version to your cluster minor version\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce-version=v<cluster-minor> --overwrite\nkubectl label ns <namespace> pod-security.kubernetes.io/warn-version=v<cluster-minor> --overwrite\nkubectl label ns <namespace> pod-security.kubernetes.io/audit-version=v<cluster-minor> --overwrite\n\n# Remove PSS labels from namespace\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce-\nkubectl label ns <namespace> pod-security.kubernetes.io/warn-\nkubectl label ns <namespace> pod-security.kubernetes.io/audit-\n\n# Check warnings on apply (if policy is violated)\nkubectl apply -f pod.yaml -n <namespace>\n\n# Inspect pod securityContext quickly\nkubectl get pod <pod-name> -n <namespace> -o yaml | grep -A 40 -E 'securityContext|runAsNonRoot|privileged|allowPrivilegeEscalation|capabilities'"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": null,
    "command": "# View securityContext of a running pod\nkubectl get pod <pod-name> -o yaml | grep -A 20 securityContext\n\n# Check if pods run as root across all namespaces\nkubectl get pods -A -o jsonpath='{range .items[*]}{.metadata.namespace}{\" \"}{.metadata.name}{\" runAsUser:\"}{.spec.securityContext.runAsUser}{\"\\n\"}{end}'\n\n# Show uid / non-root flag per pod\nkubectl get pods -n <namespace> -o custom-columns=NAME:.metadata.name,UID:.spec.securityContext.runAsUser,NON_ROOT:.spec.securityContext.runAsNonRoot\n\n# Find privileged containers in cluster\nkubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | \"\\(.metadata.namespace)/\\(.metadata.name)\"'\n\n# Check hostNetwork / hostPID usage\nkubectl get pods -A -o custom-columns=NS:.metadata.namespace,NAME:.metadata.name,HOST_NET:.spec.hostNetwork,HOST_PID:.spec.hostPID | grep -v '<none>'\n\n# Pod-level securityContext example (applied to all containers):\n# spec:\n#   securityContext:\n#     runAsNonRoot: true\n#     runAsUser: 1000\n#     runAsGroup: 3000\n#     fsGroup: 2000\n#     seccompProfile:\n#       type: RuntimeDefault\n\n# Container-level securityContext example (most restrictive):\n# spec:\n#   containers:\n#   - name: app\n#     securityContext:\n#       allowPrivilegeEscalation: false\n#       readOnlyRootFilesystem: true\n#       runAsNonRoot: true\n#       runAsUser: 1000\n#       capabilities:\n#         drop:\n#         - ALL\n#         add:\n#         - NET_BIND_SERVICE   # only if port < 1024 needed\n\n# Verify readOnlyRootFilesystem is set (write attempt will fail):\nkubectl exec <pod-name> -- touch /test-write"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": null,
    "command": "# List all PDBs\nkubectl get poddisruptionbudget\nkubectl get pdb\n\n# List in all namespaces\nkubectl get pdb -A\n\n# Describe PDB\nkubectl describe pdb <pdb-name>\n\n# View PDB as YAML\nkubectl get pdb <pdb-name> -o yaml\n\n# Create PDB from file\nkubectl apply -f pdb.yaml\n\n# Delete PDB\nkubectl delete pdb <pdb-name>\n\n# Show PDB with disruption allowed status\nkubectl get pdb -o custom-columns=NAME:.metadata.name,MIN-AVAILABLE:.spec.minAvailable,MAX-UNAVAILABLE:.spec.maxUnavailable,ALLOWED:.status.disruptionsAllowed\n\n# Example PDB YAML (at least 2 pods must be available):\n# apiVersion: policy/v1\n# kind: PodDisruptionBudget\n# metadata:\n#   name: my-pdb\n# spec:\n#   minAvailable: 2\n#   selector:\n#     matchLabels:\n#       app: my-app\n\n# Example PDB YAML (max 1 pod unavailable at a time):\n# spec:\n#   maxUnavailable: 1\n#   selector:\n#     matchLabels:\n#       app: my-app"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": null,
    "command": "# List ResourceQuotas in namespace\nkubectl get resourcequota\nkubectl get quota\n\n# List in all namespaces\nkubectl get quota -A\n\n# Describe ResourceQuota (shows used vs limit)\nkubectl describe quota <quota-name>\n\n# Create ResourceQuota from file\nkubectl apply -f quota.yaml\n\n# Delete ResourceQuota\nkubectl delete quota <quota-name>\n\n# List LimitRanges\nkubectl get limitrange\nkubectl get limits\n\n# Describe LimitRange\nkubectl describe limits <limitrange-name>\n\n# Create LimitRange from file\nkubectl apply -f limitrange.yaml\n\n# Example ResourceQuota YAML:\n# apiVersion: v1\n# kind: ResourceQuota\n# metadata:\n#   name: namespace-quota\n# spec:\n#   hard:\n#     requests.cpu: \"4\"\n#     requests.memory: 8Gi\n#     limits.cpu: \"8\"\n#     limits.memory: 16Gi\n#     pods: \"20\"\n#     services: \"10\"\n#     persistentvolumeclaims: \"5\"\n\n# Example LimitRange YAML (default limits for containers):\n# apiVersion: v1\n# kind: LimitRange\n# metadata:\n#   name: container-limits\n# spec:\n#   limits:\n#   - type: Container\n#     default:\n#       cpu: 500m\n#       memory: 256Mi\n#     defaultRequest:\n#       cpu: 100m\n#       memory: 128Mi\n#     max:\n#       cpu: \"2\"\n#       memory: 2Gi"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": null,
    "command": "# List all ConfigMaps in current namespace\nkubectl get configmaps\nkubectl get cm\n\n# List in all namespaces\nkubectl get cm -A\n\n# Describe ConfigMap\nkubectl describe cm <configmap-name>\n\n# View ConfigMap as YAML\nkubectl get cm <configmap-name> -o yaml\n\n# Create ConfigMap from literal values\nkubectl create configmap <name> --from-literal=key1=value1 --from-literal=key2=value2\n\n# Create ConfigMap from file (filename becomes the key)\nkubectl create configmap <name> --from-file=config.txt\n\n# Create ConfigMap from file with custom key\nkubectl create configmap <name> --from-file=mykey=config.txt\n\n# Create ConfigMap from directory (all files become keys)\nkubectl create configmap <name> --from-file=./configs/\n\n# Create ConfigMap from env file (.env format)\nkubectl create configmap <name> --from-env-file=.env\n\n# Edit ConfigMap\nkubectl edit cm <configmap-name>\n\n# Delete ConfigMap\nkubectl delete cm <configmap-name>\n\n# Get value of a specific key\nkubectl get cm <configmap-name> -o jsonpath='{.data.key}'\n\n# List all keys in ConfigMap\nkubectl get cm <configmap-name> -o go-template='{{range $k,$v := .data}}{{$k}}{{\"\\n\"}}{{end}}'\n\n# Update ConfigMap idempotently (dry-run + apply)\nkubectl create configmap <name> --from-file=config.txt --dry-run=client -o yaml | kubectl apply -f -\n\n# Show all ConfigMaps with key count\nkubectl get cm -o custom-columns=NAME:.metadata.name,KEYS:.data"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": null,
    "command": "# List secrets in current namespace\nkubectl get secrets\n\n# List secrets in all namespaces\nkubectl get secrets -A\n\n# Describe secret metadata (without decoded values)\nkubectl describe secret <secret-name>\n\n# View secret as YAML\nkubectl get secret <secret-name> -o yaml\n\n# Decode one key from secret\nkubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d\n\n# Create generic secret from literal values\nkubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=changeme\n\n# Create secret from file\nkubectl create secret generic <secret-name> --from-file=./config.env\n\n# Create TLS secret\nkubectl create secret tls <secret-name> --cert=tls.crt --key=tls.key\n\n# Update secret from file (apply declaratively)\nkubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -\n\n# Delete secret\nkubectl delete secret <secret-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": null,
    "command": "# List all PersistentVolumes (cluster-wide)\nkubectl get pv\n\n# List all PersistentVolumeClaims\nkubectl get pvc\n\n# List PVCs in all namespaces\nkubectl get pvc -A\n\n# Detailed info about PV\nkubectl describe pv <pv-name>\n\n# Detailed info about PVC\nkubectl describe pvc <pvc-name>\n\n# List StorageClasses\nkubectl get storageclass\nkubectl get sc\n\n# Describe StorageClass\nkubectl describe sc <storageclass-name>\n\n# Create PVC from file\nkubectl apply -f pvc.yaml\n\n# Delete PVC\nkubectl delete pvc <pvc-name>\n\n# Delete PV\nkubectl delete pv <pv-name>\n\n# Get PV sorted by capacity\nkubectl get pv --sort-by=.spec.capacity.storage\n\n# Show PVC with volume name and storage class\nkubectl get pvc -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,VOLUME:.spec.volumeName,CAPACITY:.status.capacity.storage,CLASS:.spec.storageClassName\n\n# Check which pod is using PVC\nkubectl get pods -o json | grep -i \"claimName\"\n\n# PV reclaim policy types: Retain, Recycle, Delete\nkubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy,STATUS:.status.phase\n\n# Change PV reclaim policy\nkubectl patch pv <pv-name> -p '{\"spec\":{\"persistentVolumeReclaimPolicy\":\"Retain\"}}'\n\n# Force delete stuck PVC (remove finalizers)\nkubectl patch pvc <pvc-name> -p '{\"metadata\":{\"finalizers\":null}}'"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "working-with-kustomize-kustomize",
    "section": "Working with Kustomize (kustomize)",
    "comment": null,
    "command": "# Apply configuration via kustomize\nkubectl apply -k ./overlays/production/\n\n# Preview final YAML without applying\nkubectl kustomize ./overlays/production/\n\n# Delete resources via kustomize\nkubectl delete -k ./overlays/production/\n\n# Diff with kustomize\nkubectl diff -k ./overlays/production/\n\n# Apply base configuration\nkubectl apply -k ./base/\n\n# Kustomize project structure:\n# ./base/\n#   kustomization.yaml\n#   deployment.yaml\n#   service.yaml\n# ./overlays/\n#   production/\n#     kustomization.yaml  (patches, images, replicas)\n#   staging/\n#     kustomization.yaml\n\n# Example kustomization.yaml:\n# apiVersion: kustomize.config.k8s.io/v1beta1\n# kind: Kustomization\n# resources:\n#   - ../../base\n# images:\n#   - name: nginx\n#     newTag: \"1.21\"\n# replicas:\n#   - name: my-deployment\n#     count: 3"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": null,
    "command": "# Execute command in pod\nkubectl exec <pod-name> -- <command>\n\n# Example: list files\nkubectl exec <pod-name> -- ls -la\n\n# Interactive shell in pod\nkubectl exec -it <pod-name> -- /bin/bash\nkubectl exec -it <pod-name> -- /bin/sh\n\n# Exec into specific container (if multiple)\nkubectl exec -it <pod-name> -c <container-name> -- /bin/bash\n\n# Exec in specific namespace\nkubectl exec -it <pod-name> -n <namespace> -- /bin/bash\n\n# View environment variables\nkubectl exec <pod-name> -- env\n\n# Check network connectivity from inside pod\nkubectl exec <pod-name> -- curl -s http://service-name:port\n\n# View file contents\nkubectl exec <pod-name> -- cat /path/to/file"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "copying-files-cp",
    "section": "Copying files (cp)",
    "comment": null,
    "command": "# Copy file from pod to local machine\nkubectl cp <pod-name>:/path/to/file ./local-file\n\n# Copy file to pod\nkubectl cp ./local-file <pod-name>:/path/to/file\n\n# Copy with namespace specified\nkubectl cp <namespace>/<pod-name>:/path/to/file ./local-file\n\n# Copy directory from pod\nkubectl cp <pod-name>:/path/to/dir ./local-dir\n\n# Copy from specific container\nkubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": null,
    "command": "# Add label to pod\nkubectl label pod <pod-name> environment=production\n\n# Add label to node\nkubectl label node <node-name> disktype=ssd\n\n# Remove label (minus at the end)\nkubectl label pod <pod-name> environment-\n\n# Overwrite existing label\nkubectl label pod <pod-name> environment=staging --overwrite\n\n# Add annotation\nkubectl annotate pod <pod-name> description=\"My pod\"\n\n# Remove annotation\nkubectl annotate pod <pod-name> description-\n\n# Show labels for all pods\nkubectl get pods --show-labels\n\n# Filter by label\nkubectl get pods -l environment=production\nkubectl get pods -l 'environment in (production,staging)'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": null,
    "command": "# Get IP addresses of all pods\nkubectl get pods -o jsonpath='{.items[*].status.podIP}'\n\n# Get names of all pods\nkubectl get pods -o jsonpath='{.items[*].metadata.name}'\n\n# Get image of each pod (with newline)\nkubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.spec.containers[0].image}{\"\\n\"}{end}'\n\n# Get node names and their IPs\nkubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.status.addresses[0].address}{\"\\n\"}{end}'\n\n# Get External IP of nodes\nkubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'\n\n# Custom columns\nkubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName\n\n# Custom columns with IP\nkubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName\n\n# Get all images in cluster\nkubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u\n\n# Get decoded secret value\nkubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d\n\n# Get Service EndpointSlice addresses (requires jq)\nkubectl get endpointslices -l kubernetes.io/service-name=<service-name> -o json | jq -r '.items[].endpoints[].addresses[]'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "pod-scheduling-affinity--tolerations--nodeselector",
    "section": "Pod Scheduling (affinity / tolerations / nodeSelector)",
    "comment": null,
    "command": "# List nodes with their labels (to find scheduling targets)\nkubectl get nodes --show-labels\nkubectl get nodes -l disktype=ssd\n\n# Add label to node for scheduling\nkubectl label node <node-name> disktype=ssd\n\n# Show taints on all nodes\nkubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints\n\n# Check why pod is Pending / not scheduled\nkubectl describe pod <pod-name> | grep -A 20 Events\n\n# nodeSelector - schedule pod only on nodes with matching label:\n# spec:\n#   nodeSelector:\n#     disktype: ssd\n\n# Node affinity - require node with label (hard rule):\n# spec:\n#   affinity:\n#     nodeAffinity:\n#       requiredDuringSchedulingIgnoredDuringExecution:\n#         nodeSelectorTerms:\n#         - matchExpressions:\n#           - key: disktype\n#             operator: In\n#             values:\n#             - ssd\n\n# Node affinity - prefer node with label (soft rule):\n# spec:\n#   affinity:\n#     nodeAffinity:\n#       preferredDuringSchedulingIgnoredDuringExecution:\n#       - weight: 1\n#         preference:\n#           matchExpressions:\n#           - key: disktype\n#             operator: In\n#             values:\n#             - ssd\n\n# Pod anti-affinity - never schedule 2 pods on same node (hard):\n# spec:\n#   affinity:\n#     podAntiAffinity:\n#       requiredDuringSchedulingIgnoredDuringExecution:\n#       - labelSelector:\n#           matchLabels:\n#             app: my-app\n#         topologyKey: kubernetes.io/hostname\n\n# Pod anti-affinity - prefer spreading pods across nodes (soft):\n# spec:\n#   affinity:\n#     podAntiAffinity:\n#       preferredDuringSchedulingIgnoredDuringExecution:\n#       - weight: 100\n#         podAffinityTerm:\n#           labelSelector:\n#             matchLabels:\n#               app: my-app\n#           topologyKey: kubernetes.io/hostname\n\n# Toleration - allow pod to run on tainted node:\n# spec:\n#   tolerations:\n#   - key: \"key\"\n#     operator: \"Equal\"\n#     value: \"value\"\n#     effect: \"NoSchedule\"\n\n# Tolerate all taints (run on any node including master):\n# spec:\n#   tolerations:\n#   - operator: \"Exists\"\n\n# topologySpreadConstraints - evenly spread pods across zones:\n# spec:\n#   topologySpreadConstraints:\n#   - maxSkew: 1\n#     topologyKey: topology.kubernetes.io/zone\n#     whenUnsatisfiable: DoNotSchedule\n#     labelSelector:\n#       matchLabels:\n#         app: my-app"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": null,
    "command": "# Generate YAML template without creating resource (dry-run)\nkubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml\nkubectl run my-pod --image=nginx --dry-run=client -o yaml\n\n# Apply with prune (delete resources not in files)\nkubectl apply -f ./configs/ --prune -l app=myapp\n\n# Force re-pull of image by restarting deployment\nkubectl rollout restart deployment/<deployment-name>\n\n# Quick namespace switch (alias pattern)\n# alias kns='kubectl config set-context --current --namespace'\n# kns production\n\n# Watch rollout progress\nkubectl rollout status deployment/<deployment-name> --watch\n\n# Get resource version (useful for optimistic locking)\nkubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'\n\n# Get all container images running in cluster\nkubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u\n\n# Find pods without Ready=True (including multi-container pods; requires jq)\nkubectl get pods -A -o json | jq -r '.items[] | select(any(.status.conditions[]?; .type == \"Ready\" and .status == \"True\") | not) | [.metadata.namespace, .metadata.name] | @tsv'\n\n# Delete all failed pods across all namespaces\nkubectl delete pods --field-selector=status.phase=Failed -A\n\n# Get pods restarted more than N times\nkubectl get pods -A --no-headers | awk '$5 > 5'\n\n# Copy kubeconfig context to another file\nKUBECONFIG=~/.kube/config:~/.kube/other-config kubectl config view --flatten > ~/.kube/merged-config\n\n# Exec one-liner into first pod matching a label\nkubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh\n\n# Get logs from all pods of a deployment\nkubectl logs -l app=<label-value> --all-containers=true --prefix=true\n\n# Sort pods by restart count\nkubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'\n\n# Sort pods by age (newest first)\nkubectl get pods --sort-by=.metadata.creationTimestamp\n\n# Check which nodes have the most pods\nkubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn\n\n# Apply multiple files at once using stdin\ncat deployment.yaml service.yaml | kubectl apply -f -"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": null,
    "command": "# Add a chart repository\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add stable https://charts.helm.sh/stable\n\n# Update all repositories\nhelm repo update\n\n# List added repositories\nhelm repo list\n\n# Search for a chart in repos\nhelm search repo nginx\nhelm search repo nginx --versions\n\n# Search in Artifact Hub\nhelm search hub nginx\n\n# Show default values for a chart\nhelm show values bitnami/nginx\n\n# Install a release\nhelm install <release-name> bitnami/nginx\n\n# Install with custom values file\nhelm install <release-name> bitnami/nginx -f values.yaml\n\n# Install with inline value overrides\nhelm install <release-name> bitnami/nginx --set replicaCount=2 --set service.type=NodePort\n\n# Install in specific namespace (create if missing)\nhelm install <release-name> bitnami/nginx -n <namespace> --create-namespace\n\n# Preview manifests without installing (dry-run)\nhelm install <release-name> bitnami/nginx --dry-run --debug\n\n# List all releases\nhelm list\nhelm list -A\nhelm list -n <namespace>\n\n# Show status of a release\nhelm status <release-name>\n\n# Get current values of a deployed release\nhelm get values <release-name>\n\n# Get all rendered manifests of a release\nhelm get manifest <release-name>\n\n# Upgrade a release\nhelm upgrade <release-name> bitnami/nginx\nhelm upgrade <release-name> bitnami/nginx -f values.yaml\n\n# Install if not exists, upgrade if exists\nhelm upgrade --install <release-name> bitnami/nginx -f values.yaml\n\n# View release history\nhelm history <release-name>\n\n# Rollback to previous revision\nhelm rollback <release-name>\n\n# Rollback to specific revision\nhelm rollback <release-name> 2\n\n# Uninstall a release\nhelm uninstall <release-name>\nhelm uninstall <release-name> -n <namespace>\n\n# Keep history after uninstall\nhelm uninstall <release-name> --keep-history\n\n# Render templates locally without a cluster\nhelm template <release-name> bitnami/nginx -f values.yaml\n\n# Render and save to file\nhelm template <release-name> bitnami/nginx -f values.yaml > rendered.yaml\n\n# Lint a chart for errors\nhelm lint ./my-chart\n\n# Create a new chart scaffold\nhelm create my-chart\n\n# Package a chart into .tgz\nhelm package ./my-chart\n\n# Download chart source to local directory\nhelm pull bitnami/nginx --untar\n\n# Run chart tests (test hooks)\nhelm test <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": null,
    "command": "# Install krew (kubectl plugin manager)\n# https://krew.sigs.k8s.io/docs/user-guide/setup/install/\n\n# List installed plugins\nkubectl krew list\n\n# Search for plugins\nkubectl krew search <keyword>\n\n# Install a plugin\nkubectl krew install <plugin-name>\n\n# Update all installed plugins\nkubectl krew upgrade\n\n# Uninstall a plugin\nkubectl krew uninstall <plugin-name>\n\n# Useful community plugins:\n# kubectl ctx      - fast context switching (kubectx)\nkubectl ctx\nkubectl ctx <context-name>\n\n# kubectl ns       - fast namespace switching (kubens)\nkubectl ns\nkubectl ns <namespace>\n\n# kubectl neat     - clean up verbose YAML output\nkubectl neat get pod <pod-name> -o yaml\n\n# kubectl tree     - show resource owner hierarchy\nkubectl tree deployment <deployment-name>\n\n# kubectl stern    - multi-pod log tailing\nkubectl stern <pod-pattern>\nkubectl stern -l app=myapp\n\n# kubectl df-pv    - show disk usage for PersistentVolumes\nkubectl df-pv\n\n# kubectl whoami   - show current user/service account identity\nkubectl whoami"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": null,
    "command": "# Enable kubectl autocompletion — bash\nsource <(kubectl completion bash)\necho 'source <(kubectl completion bash)' >> ~/.bashrc\n\n# Enable kubectl autocompletion — zsh\nsource <(kubectl completion zsh)\necho '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc\n\n# Alias k=kubectl and keep completion working\nalias k=kubectl\ncomplete -o default -F __start_kubectl k   # bash\ncompdef k=kubectl                           # zsh\n\n# Common daily-use aliases\nalias kgp='kubectl get pods'\nalias kgpa='kubectl get pods -A'\nalias kgpw='kubectl get pods -w'\nalias kgs='kubectl get svc'\nalias kgn='kubectl get nodes'\nalias kgd='kubectl get deploy'\nalias kge='kubectl get events --sort-by=.lastTimestamp'\nalias kdp='kubectl describe pod'\nalias kdd='kubectl describe deployment'\nalias kl='kubectl logs'\nalias klf='kubectl logs -f'\nalias kex='kubectl exec -it'\nalias kaf='kubectl apply -f'\nalias kdf='kubectl delete -f'\n\n# Switch namespace without kubens\nalias kns='kubectl config set-context --current --namespace'\n\n# Switch context without kubectx\nalias kctx='kubectl config use-context'\n\n# Show current context + namespace at a glance\nalias kwhere='echo \"context: $(kubectl config current-context)\" && echo \"namespace: $(kubectl config view --minify -o jsonpath={.contexts[0].context.namespace})\"'\n\n# Prompt integration — show current context/namespace in shell prompt\n# kube-ps1: https://github.com/jonmosco/kube-ps1\n# starship prompt has built-in kubernetes module: https://starship.rs/config/#kubernetes"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": null,
    "command": "# Get list of all pods in current namespace\nkubectl get pods\n\n# Get list of pods in all namespaces\nkubectl get pods --all-namespaces\nkubectl get pods -A\n\n# Get list of pods with extended info (IP, node)\nkubectl get pods -o wide\n\n# Get list of all services\nkubectl get services\nkubectl get svc\n\n# Get list of all deployments\nkubectl get deployments\nkubectl get deploy\n\n# Get all resources in namespace\nkubectl get all\n\n# Get resource info in YAML format\nkubectl get pod <pod-name> -o yaml\n\n# Get resource info in JSON format\nkubectl get pod <pod-name> -o json\n\n# Get list of cluster nodes\nkubectl get nodes\n\n# Get list of namespaces\nkubectl get namespaces\nkubectl get ns"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": null,
    "command": "# Detailed info about a pod\nkubectl describe pod <pod-name>\n\n# Detailed info about a node\nkubectl describe node <node-name>\n\n# Detailed info about a service\nkubectl describe service <service-name>\nkubectl describe svc <service-name>\n\n# Detailed info about a deployment\nkubectl describe deployment <deployment-name>\n\n# Detailed info about a configmap\nkubectl describe configmap <configmap-name>\nkubectl describe cm <configmap-name>\n\n# Detailed info about a secret\nkubectl describe secret <secret-name>\n\n# Detailed info about an ingress\nkubectl describe ingress <ingress-name>\n\n# Describe in specific namespace\nkubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": null,
    "command": "# Pod logs\nkubectl logs <pod-name>\n\n# Logs of specific container in pod (if multiple containers)\nkubectl logs <pod-name> -c <container-name>\n\n# Real-time logs (follow)\nkubectl logs -f <pod-name>\n\n# Last N lines of logs\nkubectl logs --tail=100 <pod-name>\n\n# Logs from last hour\nkubectl logs --since=1h <pod-name>\n\n# Logs from last 30 minutes\nkubectl logs --since=30m <pod-name>\n\n# Logs of previous container (after restart)\nkubectl logs <pod-name> --previous\nkubectl logs <pod-name> -p\n\n# Logs of all pods by label\nkubectl logs -l app=myapp\n\n# Logs in specific namespace\nkubectl logs <pod-name> -n <namespace>\n\n# Combination: follow + tail + namespace\nkubectl logs -f --tail=50 <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": null,
    "command": "# Node resource usage\nkubectl top nodes\n\n# Pod resource usage\nkubectl top pods\n\n# Top pods in all namespaces\nkubectl top pods -A\n\n# Top pods in specific namespace\nkubectl top pods -n <namespace>\n\n# Top sorted by CPU\nkubectl top pods --sort-by=cpu\n\n# Top sorted by memory\nkubectl top pods --sort-by=memory\n\n# Top for containers inside pods\nkubectl top pods --containers"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": null,
    "command": "# Create debug container in existing pod\nkubectl debug <pod-name> -it --image=busybox\n\n# Create pod copy for debugging\nkubectl debug <pod-name> -it --image=busybox --copy-to=debug-pod\n\n# Debug node (creates a debug pod; privileges depend on the profile)\nkubectl debug node/<node-name> -it --image=ubuntu\n\n# View events in namespace\nkubectl get events\n\n# Events sorted by time\nkubectl get events --sort-by='.lastTimestamp'\n\n# Events for specific pod\nkubectl get events --field-selector involvedObject.name=<pod-name>\n\n# Check API server status\nkubectl cluster-info\n\n# Detailed cluster information\nkubectl cluster-info dump\n\n# Check API access\nkubectl auth can-i create pods\nkubectl auth can-i delete deployments --namespace=production\n\n# Check access for another user\nkubectl auth can-i create pods --as=<user>\n\n# List all permissions\nkubectl auth can-i --list\n\n# Check why pod is not starting\nkubectl describe pod <pod-name> | grep -A 10 Events\n\n# Check API server health endpoints\nkubectl get --raw='/readyz?verbose'\nkubectl get --raw='/livez?verbose'\nkubectl get --raw='/healthz'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": null,
    "command": "# Show all events in the current namespace\nkubectl events\n\n# Events across all namespaces\nkubectl events -A\nkubectl events --all-namespaces\n\n# Events for a specific resource\nkubectl events --for pod/<pod-name>\nkubectl events --for deployment/<deploy-name>\nkubectl events --for node/<node-name>\n\n# Filter by event type (Normal, Warning)\nkubectl events --types=Warning\nkubectl events --types=Normal\nkubectl events --types=Warning,Normal\n\n# Watch events in real time\nkubectl events --watch\nkubectl events -w\n\n# Watch events for a specific resource in real time\nkubectl events --for pod/<pod-name> --watch\n\n# Output as JSON / YAML\nkubectl events -o json\nkubectl events -o yaml\n\n# Get Warning events across the cluster and analyze with jq\nkubectl events -A -o json | \\\n  jq '.items[] | select(.type==\"Warning\") | {reason: .reason, message: .message, object: .involvedObject.name}'\n\n# Diagnose a pod in CrashLoopBackOff\nkubectl events --for pod/<pod-name> --types=Warning\n\n# Comparing approaches:\n# Classic (deprecated):\nkubectl get events --field-selector involvedObject.name=<pod-name>\n# New (preferred):\nkubectl events --for pod/<pod-name>\n\n# All Warning events in a namespace sorted by time\nkubectl events --types=Warning -o json | \\\n  jq -r '.items | sort_by(.lastTimestamp) | .[] | \"\\(.lastTimestamp) \\(.reason) \\(.involvedObject.name): \\(.message)\"'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": null,
    "command": "# Find non-running pods in all namespaces\nkubectl get pods -A --field-selector='status.phase!=Running'\n\n# Show restarts and current state quickly\nkubectl get pods -A -o custom-columns=NS:.metadata.namespace,POD:.metadata.name,PHASE:.status.phase,RESTARTS:.status.containerStatuses[0].restartCount,STATE:.status.containerStatuses[0].state.waiting.reason\n\n# Inspect events for a specific pod (image pulls, scheduling, probes)\nkubectl describe pod <pod-name> -n <namespace>\nkubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by=.lastTimestamp\n\n# CrashLoopBackOff: read previous container logs\nkubectl logs <pod-name> -n <namespace> --previous\nkubectl logs <pod-name> -n <namespace> -c <container-name> --previous\n\n# Pending pod: check scheduling errors and requested resources\nkubectl describe pod <pod-name> -n <namespace> | grep -A 20 -E 'Events|Requests|Limits|node(s)'\n\n# ImagePullBackOff / ErrImagePull: verify image and pull secret\nkubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Failed|ErrImagePull|ImagePullBackOff|pull'\nkubectl get secret -n <namespace>\n\n# Probe failures (liveness/readiness/startup)\nkubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Liveness|Readiness|Startup|probe'\n\n# Check effective environment and mounted config/secret inside container\nkubectl exec -it <pod-name> -n <namespace> -- env\nkubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/config /etc/secrets\n\n# Temporary debug container in target pod network namespace\nkubectl debug <pod-name> -n <namespace> -it --image=busybox"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": null,
    "command": "# Quick namespace snapshot: pods, services, events\nkubectl get pods,svc,ingress,pvc -n <namespace> -o wide\nkubectl events -n <namespace> --types=Warning\n\n# CrashLoopBackOff: what is restarting and why\nkubectl get pods -n <namespace> --sort-by='.status.containerStatuses[0].restartCount'\nkubectl describe pod <pod-name> -n <namespace>\nkubectl logs <pod-name> -n <namespace> --previous --all-containers=true\n\n# Rollout stuck: Deployment and ReplicaSet state\nkubectl rollout status deployment/<deploy-name> -n <namespace> --timeout=60s\nkubectl describe deployment/<deploy-name> -n <namespace>\nkubectl get rs -n <namespace> -l app=<app-label> -o wide\n\n# Pending pod: resources, PVC, taints, or node selector\nkubectl describe pod <pod-name> -n <namespace> | grep -A 40 Events\nkubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints,CPU:.status.allocatable.cpu,MEM:.status.allocatable.memory\nkubectl get pvc -n <namespace>\n\n# Service is not responding: check EndpointSlices and selector\nkubectl get svc <service-name> -n <namespace> -o wide\nkubectl get endpointslices -n <namespace> -l kubernetes.io/service-name=<service-name> -o yaml\nkubectl describe svc <service-name> -n <namespace>\n\n# Cluster DNS: quick pod to test resolution\nkubectl run dnscheck --rm -it --restart=Never --image=busybox:1.36 -- nslookup <service-name>.<namespace>.svc.cluster.local\n\n# PVC will not mount: pod, PVC, and storage class events\nkubectl describe pod <pod-name> -n <namespace> | grep -A 40 -E 'Mount|Volume|Events'\nkubectl describe pvc <pvc-name> -n <namespace>\nkubectl get storageclass\n\n# Node pressure: find nodes and pods with high usage\nkubectl describe nodes | grep -E 'Name:|Pressure|Allocated resources' -A 8\nkubectl top nodes\nkubectl top pods -A --sort-by=memory | head -20"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": null,
    "command": "# Add an ephemeral debug container to a running pod (kubectl >= 1.23)\nkubectl debug -it <pod-name> --image=busybox --target=<container-name>\n\n# Use a richer debug image\nkubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>\n\n# Inspect ephemeral containers already attached to a pod\nkubectl get pod <pod-name> -o jsonpath='{.spec.ephemeralContainers}' | jq .\n\n# Create a debug copy of a pod (original is untouched)\nkubectl debug <pod-name> -it --copy-to=<pod-name>-debug --image=busybox\n\n# Replace the entrypoint of a crashing container in the copy\nkubectl debug <pod-name> -it --copy-to=<pod-name>-debug --container=<container-name> -- sh\n\n# Share the process namespace with the target container (see its processes)\nkubectl debug -it <pod-name> --image=busybox --target=<container-name> --share-processes\n\n# Debug a node by creating a debug pod (privileges depend on the profile)\nkubectl debug node/<node-name> -it --image=busybox\n\n# List all pods that have ephemeral containers attached\nkubectl get pods -A -o json | jq '.items[] | select(.spec.ephemeralContainers != null) | .metadata.name'\n\n# Remove a debug copy pod when done\nkubectl delete pod <pod-name>-debug"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": null,
    "command": "# Run pod with image\nkubectl run <pod-name> --image=nginx\n\n# Run pod and open shell immediately\nkubectl run -it debug --image=busybox -- /bin/sh\n\n# Run pod with auto-delete on exit\nkubectl run tmp --rm -it --image=busybox -- /bin/sh\n\n# Run pod with environment variables\nkubectl run <pod-name> --image=nginx --env=\"DB_HOST=db\" --env=\"DB_PORT=5432\"\n\n# Run pod with port specified\nkubectl run <pod-name> --image=nginx --port=80\n\n# Run pod with labels\nkubectl run <pod-name> --image=nginx --labels=\"app=web,tier=frontend\"\n\n# Run pod in specific namespace\nkubectl run <pod-name> --image=nginx -n <namespace>\n\n# Run pod and create service immediately\nkubectl run <pod-name> --image=nginx --port=80 --expose\n\n# Generate YAML without creating (dry-run)\nkubectl run <pod-name> --image=nginx --dry-run=client -o yaml\n\n# Run one-time task (Job)\nkubectl create job <job-name> --image=busybox -- echo \"Hello\"\n\n# Run CronJob\nkubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": null,
    "command": "# Deployment rollout status\nkubectl rollout status deployment/<deployment-name>\n\n# Rollout history\nkubectl rollout history deployment/<deployment-name>\n\n# Rollback deployment to previous version\nkubectl rollout undo deployment/<deployment-name>\n\n# Rollback to specific revision\nkubectl rollout undo deployment/<deployment-name> --to-revision=2\n\n# Restart all pods in deployment\nkubectl rollout restart deployment/<deployment-name>\n\n# Pause rollout\nkubectl rollout pause deployment/<deployment-name>\n\n# Resume rollout\nkubectl rollout resume deployment/<deployment-name>\n\n# View specific revision details\nkubectl rollout history deployment/<deployment-name> --revision=3"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": null,
    "command": "# Scale deployment to N replicas\nkubectl scale deployment <deployment-name> --replicas=3\n\n# Scale replicaset\nkubectl scale replicaset <replicaset-name> --replicas=5\n\n# Scale statefulset\nkubectl scale statefulset <statefulset-name> --replicas=2\n\n# Scale in specific namespace\nkubectl scale deployment <deployment-name> --replicas=3 -n <namespace>\n\n# Auto-scaling (HPA - Horizontal Pod Autoscaler)\nkubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80\n\n# View auto-scaling status\nkubectl get hpa"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": null,
    "command": "# List all HPAs\nkubectl get hpa\nkubectl get hpa -A\n\n# Describe HPA\nkubectl describe hpa <hpa-name>\n\n# View HPA as YAML\nkubectl get hpa <hpa-name> -o yaml\n\n# Create HPA for a deployment (CPU-based)\nkubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=70\n\n# Create HPA from file\nkubectl apply -f hpa.yaml\n\n# Delete HPA\nkubectl delete hpa <hpa-name>\n\n# Show HPA with current/target replicas and metrics\nkubectl get hpa -o custom-columns=NAME:.metadata.name,MINPODS:.spec.minReplicas,MAXPODS:.spec.maxReplicas,REPLICAS:.status.currentReplicas\n\n# Edit HPA (change thresholds or replicas)\nkubectl edit hpa <hpa-name>\n\n# Example HPA YAML (CPU + Memory):\n# apiVersion: autoscaling/v2\n# kind: HorizontalPodAutoscaler\n# metadata:\n#   name: my-hpa\n# spec:\n#   scaleTargetRef:\n#     apiVersion: apps/v1\n#     kind: Deployment\n#     name: my-deployment\n#   minReplicas: 2\n#   maxReplicas: 10\n#   metrics:\n#   - type: Resource\n#     resource:\n#       name: cpu\n#       target:\n#         type: Utilization\n#         averageUtilization: 70\n#   - type: Resource\n#     resource:\n#       name: memory\n#       target:\n#         type: Utilization\n#         averageUtilization: 80"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": null,
    "command": "# VPA is not built into Kubernetes — install the component first:\n# https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler\n\n# List all VPAs\nkubectl get vpa\nkubectl get vpa -A\n\n# Describe VPA (shows recommended resources)\nkubectl describe vpa <vpa-name>\n\n# View VPA as YAML\nkubectl get vpa <vpa-name> -o yaml\n\n# Create VPA from file\nkubectl apply -f vpa.yaml\n\n# Delete VPA\nkubectl delete vpa <vpa-name>\n\n# Show VPA recommendations for all VPAs\nkubectl get vpa -o custom-columns=NAME:.metadata.name,MODE:.spec.updatePolicy.updateMode,CPU_REQ:.status.recommendation.containerRecommendations[0].target.cpu,MEM_REQ:.status.recommendation.containerRecommendations[0].target.memory\n\n# Example VPA YAML — Off mode (only shows recommendations, no auto-update):\n# apiVersion: autoscaling.k8s.io/v1\n# kind: VerticalPodAutoscaler\n# metadata:\n#   name: my-vpa\n# spec:\n#   targetRef:\n#     apiVersion: apps/v1\n#     kind: Deployment\n#     name: my-deployment\n#   updatePolicy:\n#     updateMode: \"Off\"\n\n# Example VPA YAML — Auto mode (restarts pods with new resource values):\n# spec:\n#   targetRef:\n#     apiVersion: apps/v1\n#     kind: Deployment\n#     name: my-deployment\n#   updatePolicy:\n#     updateMode: \"Auto\"\n#   resourcePolicy:\n#     containerPolicies:\n#     - containerName: app\n#       minAllowed:\n#         cpu: 50m\n#         memory: 64Mi\n#       maxAllowed:\n#         cpu: \"2\"\n#         memory: 2Gi\n\n# updateMode options:\n#   Off        — only compute recommendations, no changes applied\n#   Initial    — set resources only at pod creation\n#   Recreate   — evict and recreate pods when recommendations change\n#   Auto       — same as Recreate (default behaviour)\n\n# Check VPA admission controller is running\nkubectl get pods -n kube-system | grep vpa"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": null,
    "command": "# List all StatefulSets\nkubectl get statefulsets\nkubectl get sts\n\n# List in all namespaces\nkubectl get sts -A\n\n# Describe StatefulSet\nkubectl describe sts <sts-name>\n\n# View StatefulSet as YAML\nkubectl get sts <sts-name> -o yaml\n\n# Scale StatefulSet\nkubectl scale sts <sts-name> --replicas=3\n\n# Rollout restart StatefulSet (rolling restart of all pods)\nkubectl rollout restart sts/<sts-name>\n\n# Rollout status of StatefulSet\nkubectl rollout status sts/<sts-name>\n\n# Rollout history of StatefulSet\nkubectl rollout history sts/<sts-name>\n\n# Rollback StatefulSet to previous revision\nkubectl rollout undo sts/<sts-name>\n\n# Rollback to specific revision\nkubectl rollout undo sts/<sts-name> --to-revision=2\n\n# Update image in StatefulSet\nkubectl set image sts/<sts-name> <container-name>=<image>:<tag>\n\n# Delete StatefulSet (keeps pods by default)\nkubectl delete sts <sts-name>\n\n# Delete StatefulSet and all its pods (foreground)\nkubectl delete sts <sts-name> --cascade=foreground\n\n# Delete StatefulSet without deleting pods (orphan)\nkubectl delete sts <sts-name> --cascade=orphan\n\n# List pods belonging to StatefulSet (by label)\nkubectl get pods -l app=<sts-name>\n\n# Show StatefulSet with replica count\nkubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": null,
    "command": "# List all DaemonSets\nkubectl get daemonsets\nkubectl get ds\n\n# List in all namespaces\nkubectl get ds -A\n\n# Describe DaemonSet\nkubectl describe ds <ds-name>\n\n# View DaemonSet as YAML\nkubectl get ds <ds-name> -o yaml\n\n# Rollout restart DaemonSet (rolling restart on all nodes)\nkubectl rollout restart ds/<ds-name>\n\n# Rollout status of DaemonSet\nkubectl rollout status ds/<ds-name>\n\n# Rollout history of DaemonSet\nkubectl rollout history ds/<ds-name>\n\n# Rollback DaemonSet to previous revision\nkubectl rollout undo ds/<ds-name>\n\n# Update image in DaemonSet\nkubectl set image ds/<ds-name> <container-name>=<image>:<tag>\n\n# Delete DaemonSet (and its pods)\nkubectl delete ds <ds-name>\n\n# Delete DaemonSet without deleting pods (orphan)\nkubectl delete ds <ds-name> --cascade=orphan\n\n# Show DaemonSet with node coverage\nkubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable\n\n# List pods belonging to DaemonSet (by label)\nkubectl get pods -l app=<ds-name> -o wide"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": null,
    "command": "# List all Jobs\nkubectl get jobs\n\n# List all CronJobs\nkubectl get cronjobs\nkubectl get cj\n\n# Describe Job\nkubectl describe job <job-name>\n\n# Describe CronJob\nkubectl describe cronjob <cronjob-name>\n\n# Create Job from image\nkubectl create job <job-name> --image=busybox -- echo \"Hello\"\n\n# Create Job from existing CronJob (trigger manually)\nkubectl create job <job-name> --from=cronjob/<cronjob-name>\n\n# Create CronJob (every 5 minutes)\nkubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\"\n\n# Create CronJob (every day at 02:00)\nkubectl create cronjob <name> --image=busybox --schedule=\"0 2 * * *\" -- /bin/sh -c \"backup.sh\"\n\n# View Job logs (via pods)\nkubectl logs -l job-name=<job-name>\n\n# Wait for Job completion\nkubectl wait --for=condition=Complete job/<job-name> --timeout=120s\n\n# Delete completed Jobs\nkubectl delete jobs --field-selector status.successful=1\n\n# Suspend CronJob\nkubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":true}}'\n\n# Resume CronJob\nkubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":false}}'\n\n# Delete CronJob (and all related Jobs)\nkubectl delete cronjob <cronjob-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": null,
    "command": "# Показать текущий контекст\nkubectl config current-context\n\n# Показать все контексты\nkubectl config get-contexts\n\n# Переключиться на другой контекст\nkubectl config use-context <context-name>\n\n# Показать всю конфигурацию\nkubectl config view\n\n# Установить namespace по умолчанию для контекста\nkubectl config set-context --current --namespace=<namespace>\n\n# Добавить новый кластер\nkubectl config set-cluster <cluster-name> --server=https://k8s-api:6443\n\n# Добавить credentials\nkubectl config set-credentials <user-name> --token=<token>\n\n# Создать новый контекст\nkubectl config set-context <context-name> --cluster=<cluster> --user=<user>\n\n# Удалить контекст\nkubectl config delete-context <context-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": null,
    "command": "# Список всех неймспейсов\nkubectl get namespaces\nkubectl get ns\n\n# Подробная информация о неймспейсе (квоты, лимиты)\nkubectl describe ns <namespace>\n\n# Создать неймспейс\nkubectl create namespace <namespace>\nkubectl create ns <namespace>\n\n# Удалить неймспейс (удаляет все ресурсы внутри)\nkubectl delete ns <namespace>\n\n# Установить дефолтный неймспейс для текущего контекста\nkubectl config set-context --current --namespace=<namespace>\n\n# Показать текущий дефолтный неймспейс\nkubectl config view --minify | grep namespace\n\n# Получить все ресурсы в неймспейсе\nkubectl get all -n <namespace>\n\n# Получить все ресурсы во всех неймспейсах\nkubectl get all -A\n\n# Список неймспейсов со статусом и датой создания\nkubectl get ns -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,AGE:.metadata.creationTimestamp\n\n# Добавить метку к неймспейсу\nkubectl label namespace <namespace> env=production\n\n# Показать неймспейсы с метками\nkubectl get ns --show-labels\n\n# Подсчёт подов по неймспейсам\nkubectl get pods -A --no-headers | awk '{print $1}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": null,
    "command": "# Запретить планирование новых подов на ноду\nkubectl cordon <node-name>\n\n# Разрешить планирование на ноду\nkubectl uncordon <node-name>\n\n# Эвакуировать поды с ноды (для обслуживания)\nkubectl drain <node-name>\n\n# Drain с игнорированием DaemonSet\nkubectl drain <node-name> --ignore-daemonsets\n\n# Drain с удалением локальных данных\nkubectl drain <node-name> --delete-emptydir-data\n\n# Добавить taint на ноду\nkubectl taint nodes <node-name> key=value:NoSchedule\n\n# Удалить taint (минус в конце)\nkubectl taint nodes <node-name> key=value:NoSchedule-\n\n# Типы taint эффектов: NoSchedule, PreferNoSchedule, NoExecute\nkubectl taint nodes <node-name> key=value:NoExecute"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": null,
    "command": "# Список всех CRD в кластере\nkubectl get crds\nkubectl get customresourcedefinitions\n\n# Подробная информация о CRD\nkubectl describe crd <crd-name>\n\n# Просмотр CRD в формате YAML\nkubectl get crd <crd-name> -o yaml\n\n# Удалить CRD (удаляет все экземпляры этого ресурса тоже)\nkubectl delete crd <crd-name>\n\n# Список экземпляров кастомного ресурса\nkubectl get <custom-resource-kind>\nkubectl get <custom-resource-kind> -A\n\n# Подробная информация об экземпляре кастомного ресурса\nkubectl describe <custom-resource-kind> <name>\n\n# Фильтр CRD по группе\nkubectl get crds | grep <group-name>\n\n# Показать CRD с группой и областью видимости\nkubectl get crds -o custom-columns=NAME:.metadata.name,GROUP:.spec.group,SCOPE:.spec.scope,VERSION:.spec.versions[0].name\n\n# Объяснение полей кастомного ресурса\nkubectl explain <custom-resource-kind>\nkubectl explain <custom-resource-kind>.spec\n\n# Применить кастомный ресурс из файла\nkubectl apply -f my-resource.yaml\n\n# Удалить все экземпляры кастомного ресурса\nkubectl delete <custom-resource-kind> --all -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": null,
    "command": "# Показать все доступные API ресурсы\nkubectl api-resources\n\n# Показать только namespaced ресурсы\nkubectl api-resources --namespaced=true\n\n# Показать ресурсы конкретной API группы\nkubectl api-resources --api-group=apps\n\n# Показать версии API\nkubectl api-versions\n\n# Объяснить структуру ресурса\nkubectl explain pod\nkubectl explain pod.spec\nkubectl explain pod.spec.containers\n\n# Рекурсивное объяснение\nkubectl explain pod --recursive"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": null,
    "command": "# Показать выделяемые ресурсы по каждой ноде\nkubectl get nodes -o custom-columns=\\\n'NAME:.metadata.name,CPU:.status.allocatable.cpu,MEMORY:.status.allocatable.memory,PODS:.status.allocatable.pods'\n\n# Запрошенные (requests) ресурсы vs выделяемые по нодам\nkubectl describe nodes | grep -A 6 \"Allocated resources\"\n\n# Реальное потребление ресурсов по нодам (требует metrics-server)\nkubectl top nodes --sort-by=cpu\nkubectl top nodes --sort-by=memory\n\n# Реальное потребление по подам во всех неймспейсах\nkubectl top pods -A --sort-by=cpu\nkubectl top pods -A --sort-by=memory\n\n# 20 самых «прожорливых» по памяти подов\nkubectl top pods -A --sort-by=memory --no-headers | head -20\n\n# Запросы и лимиты ресурсов для всех подов в неймспейсе\nkubectl get pods -o custom-columns=\\\n'NAME:.metadata.name,CPU_REQ:.spec.containers[0].resources.requests.cpu,MEM_REQ:.spec.containers[0].resources.requests.memory,CPU_LIM:.spec.containers[0].resources.limits.cpu,MEM_LIM:.spec.containers[0].resources.limits.memory'\n\n# Найти поды без resource requests (риск: могут вытеснять другие workload-ы)\nkubectl get pods -A -o json | \\\n  jq -r '.items[] | select(.spec.containers[].resources.requests == null) | [.metadata.namespace, .metadata.name] | @tsv'\n\n# Количество подов на каждой ноде (проверка равномерности распределения)\nkubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn\n\n# Проверить ResourceQuota и текущее потребление\nkubectl describe resourcequota -A\n\n# Проверить LimitRange в неймспейсе\nkubectl get limitrange -A\n\n# Детальная сводка по ноде: запрошено vs доступно\nkubectl describe node <node-name> | grep -E \"cpu|memory|Allocated|requests|limits\" | head -30"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": null,
    "command": "# Версия kubectl client и Kubernetes API server\nkubectl version\nkubectl version --output=yaml\n\n# Короткая версия API server через raw endpoint\nkubectl get --raw /version\n\n# Поддерживаемые API группы и версии\nkubectl api-versions\n\n# Проверить, какие deprecated API реально используются объектами\nkubectl get all -A -o yaml | grep -E 'apiVersion: (extensions/v1beta1|apps/v1beta1|apps/v1beta2)'\n\n# Правило совместимости: kubectl должен быть в пределах +/-1 minor версии от kube-apiserver\n# Пример: для API server v1.35 используйте kubectl v1.34, v1.35 или v1.36.\n\n# kuberc: пользовательские preferences и aliases kubectl (если включено в вашей версии kubectl)\nkubectl options | grep -i kuberc"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": null,
    "command": "# Получить поды по статусу (Running, Pending, Failed)\nkubectl get pods --field-selector=status.phase=Running\nkubectl get pods --field-selector=status.phase=Failed -A\n\n# Получить поды на конкретной ноде\nkubectl get pods --field-selector=spec.nodeName=<node-name> -A\n\n# Получить поды НЕ в статусе Running\nkubectl get pods --field-selector='status.phase!=Running' -A\n\n# Объединить несколько селекторов полей\nkubectl get pods --field-selector=status.phase=Running,spec.nodeName=<node-name>\n\n# Получить сервисы определённого типа\nkubectl get services --field-selector=spec.type=LoadBalancer -A\n\n# Получить события определённого типа (Warning/Normal)\nkubectl get events --field-selector=type=Warning -A\n\n# Получить события для конкретного объекта\nkubectl get events --field-selector=involvedObject.name=<pod-name>,involvedObject.kind=Pod\n\n# Следить за ресурсами в реальном времени (--watch)\nkubectl get pods --watch\nkubectl get pods -w\n\n# Следить с конкретным селектором полей\nkubectl get pods --field-selector=status.phase=Pending -w\n\n# Фильтрация по меткам (несколько вариантов)\nkubectl get pods -l 'app=myapp,tier=backend'\nkubectl get pods -l 'app in (frontend,backend)'\nkubectl get pods -l 'app notin (legacy)'\nkubectl get pods -l '!deprecated'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": null,
    "command": "# Применить конфигурацию из файла\nkubectl apply -f deployment.yaml\n\n# Применить все yaml файлы из директории\nkubectl apply -f ./configs/\n\n# Применить конфигурацию из URL\nkubectl apply -f https://example.com/config.yaml\n\n# Создать namespace\nkubectl create namespace <namespace-name>\nkubectl create ns <namespace-name>\n\n# Создать deployment императивно\nkubectl create deployment <name> --image=<image>\n\n# Создать service\nkubectl create service clusterip <name> --tcp=80:8080\n\n# Создать configmap из файла\nkubectl create configmap <name> --from-file=config.txt\n\n# Создать configmap из literal\nkubectl create configmap <name> --from-literal=key=value\n\n# Создать secret из literal\nkubectl create secret generic <name> --from-literal=password=secret123\n\n# Создать secret для docker registry\nkubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<pass>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "редактирование-ресурсов-edit",
    "section": "Редактирование ресурсов (edit)",
    "comment": null,
    "command": "# Редактировать deployment в редакторе по умолчанию\nkubectl edit deployment <deployment-name>\n\n# Редактировать service\nkubectl edit service <service-name>\n\n# Редактировать configmap\nkubectl edit configmap <configmap-name>\n\n# Редактировать в конкретном namespace\nkubectl edit deployment <deployment-name> -n <namespace>\n\n# Использовать конкретный редактор\nKUBE_EDITOR=\"nano\" kubectl edit deployment <deployment-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": null,
    "command": "# Изменить количество реплик через patch\nkubectl patch deployment <deployment-name> -p '{\"spec\":{\"replicas\":3}}'\n\n# Изменить image контейнера\nkubectl patch deployment <deployment-name> -p '{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"<container>\",\"image\":\"nginx:1.21\"}]}}}}'\n\n# Patch в формате merge\nkubectl patch deployment <deployment-name> --type=merge -p '{\"spec\":{\"replicas\":5}}'\n\n# Patch в формате JSON\nkubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"replace\",\"path\":\"/spec/replicas\",\"value\":2}]'\n\n# Добавить переменную окружения\nkubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"NEW_VAR\",\"value\":\"value\"}}]'\n\n# Изменить service type\nkubectl patch svc <service-name> -p '{\"spec\":{\"type\":\"NodePort\"}}'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": null,
    "command": "# Изменить image контейнера\nkubectl set image deployment/<deployment-name> <container-name>=nginx:1.21\n\n# Изменить image для всех контейнеров\nkubectl set image deployment/<deployment-name> *=nginx:1.21\n\n# Изменить image и явно записать причину изменения в аннотацию\nkubectl set image deployment/<deployment-name> nginx=nginx:1.21\nkubectl annotate deployment/<deployment-name> kubernetes.io/change-cause=\"nginx=nginx:1.21\" --overwrite\n\n# Добавить переменную окружения\nkubectl set env deployment/<deployment-name> ENV_VAR=value\n\n# Добавить несколько переменных\nkubectl set env deployment/<deployment-name> VAR1=value1 VAR2=value2\n\n# Удалить переменную окружения\nkubectl set env deployment/<deployment-name> ENV_VAR-\n\n# Установить переменную из secret\nkubectl set env deployment/<deployment-name> --from=secret/mysecret\n\n# Установить переменную из configmap\nkubectl set env deployment/<deployment-name> --from=configmap/myconfig\n\n# Изменить resource limits\nkubectl set resources deployment/<deployment-name> -c=nginx --limits=cpu=200m,memory=512Mi\n\n# Изменить resource requests\nkubectl set resources deployment/<deployment-name> -c=nginx --requests=cpu=100m,memory=256Mi\n\n# Изменить service account\nkubectl set serviceaccount deployment/<deployment-name> myserviceaccount\n\n# Изменить selector для service\nkubectl set selector service/<service-name> app=myapp,tier=frontend"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": null,
    "command": "# Удалить pod\nkubectl delete pod <pod-name>\n\n# Удалить deployment\nkubectl delete deployment <deployment-name>\n\n# Удалить service\nkubectl delete service <service-name>\n\n# Удалить ресурсы из файла\nkubectl delete -f deployment.yaml\n\n# Удалить все ресурсы по label\nkubectl delete pods -l app=myapp\n\n# Удалить namespace (и все ресурсы в нём)\nkubectl delete namespace <namespace-name>\n\n# Принудительное удаление пода: используйте только если обычное удаление зависло\nkubectl delete pod <pod-name> --force --grace-period=0\n\n# Удалить все поды в namespace\nkubectl delete pods --all -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": null,
    "command": "# Сравнить локальный файл с текущим состоянием в кластере\nkubectl diff -f deployment.yaml\n\n# Сравнить все файлы из директории\nkubectl diff -f ./configs/\n\n# Сравнить конфигурацию из URL\nkubectl diff -f https://example.com/config.yaml\n\n# Сравнить с использованием kustomize\nkubectl diff -k ./overlays/production/\n\n# Сначала просмотреть diff (код 0: различий нет, 1: есть различия, >1: ошибка)\nkubectl diff -f deployment.yaml\n\n# После проверки изменений отдельно применить конфигурацию\nkubectl apply -f deployment.yaml\n\n# Diff с указанием server-side\nkubectl diff -f deployment.yaml --server-side\n\n# Проверить конфигурацию без применения (dry-run + diff)\nkubectl apply -f deployment.yaml --dry-run=server\nkubectl apply -f deployment.yaml --dry-run=client\n\n# Валидация файла без применения\nkubectl apply --validate=true --dry-run=client -f deployment.yaml\n\n# Проверить что изменится при удалении\nkubectl delete -f deployment.yaml --dry-run=client"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": null,
    "command": "if kubectl diff -f deployment.yaml; then\n  diff_status=0\nelse\n  diff_status=$?\nfi\ncase \"$diff_status\" in\n  0|1) kubectl apply -f deployment.yaml ;;\n  *) printf 'kubectl diff failed (%s)\\n' \"$diff_status\" >&2; exit \"$diff_status\" ;;\nesac"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": null,
    "command": "# Применить манифест через server-side apply — рекомендуется для GitOps и мульти-акторных сред\nkubectl apply -f deployment.yaml --server-side\n\n# SSA с именованным field manager (фиксирует, кто владеет каждым полем)\nkubectl apply -f deployment.yaml --server-side --field-manager=argocd\n\n# Принудительно забрать ownership конфликтующих полей у другого менеджера\nkubectl apply -f deployment.yaml --server-side --force-conflicts\n\n# Dry-run с валидацией на стороне сервера\nkubectl apply -f deployment.yaml --server-side --dry-run=server\n\n# Diff текущего состояния в кластере vs локального файла (server-side логика)\nkubectl diff -f deployment.yaml --server-side\n\n# Посмотреть field manager-ы ресурса\nkubectl get deployment my-deploy -o json | jq '.metadata.managedFields'\n\n# Убрать managedFields из вывода для читаемости\nkubectl get deployment my-deploy -o json | jq 'del(.metadata.managedFields)'\n# или через плагин neat:\nkubectl neat get deployment my-deploy -o yaml\n\n# Удалить устаревшую аннотацию last-applied-configuration после перехода на SSA\nkubectl annotate deployment my-deploy kubectl.kubernetes.io/last-applied-configuration-\n\n# Применить целую директорию через SSA\nkubectl apply -f ./manifests/ --server-side --field-manager=platform-team\n\n# SSA vs client-side apply:\n# Client-side: отслеживает изменения через аннотацию kubectl.kubernetes.io/last-applied-configuration\n# Server-side: отслеживает ownership через .metadata.managedFields — безопасно при нескольких менеджерах\n# SSA рекомендуется, когда несколько инструментов (ArgoCD, Helm, kubectl) работают с одним объектом"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": null,
    "command": "# Полная замена ресурса из файла\nkubectl replace -f deployment.yaml\n\n# Принудительная замена (удалить и создать заново)\nkubectl replace --force -f deployment.yaml\n\n# Замена из stdin\ncat deployment.yaml | kubectl replace -f -\n\n# Подключиться к stdout/stderr запущенного контейнера\nkubectl attach <pod-name>\n\n# Интерактивное подключение к контейнеру (stdin + tty)\nkubectl attach -it <pod-name>\n\n# Подключение к конкретному контейнеру\nkubectl attach <pod-name> -c <container-name>\n\n# Подключение в определённом namespace\nkubectl attach <pod-name> -n <namespace>\n\n# Конвертировать конфигурацию между версиями API (требует отдельного kubectl-convert plugin)\nkubectl convert -f deployment.yaml --output-version apps/v1\n\n# Просмотреть completion для bash/zsh\nkubectl completion bash\nkubectl completion zsh\n\n# Включить автодополнение (добавить в .bashrc/.zshrc)\n# source <(kubectl completion bash)\n# source <(kubectl completion zsh)\n\n# Создать alias для kubectl\n# alias k=kubectl\n# complete -o default -F __start_kubectl k"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": null,
    "command": "# Дождаться, пока под перейдёт в состояние Ready\nkubectl wait pod/<pod-name> --for=condition=Ready\n\n# Дождаться готовности пода с таймаутом (по умолчанию 30s)\nkubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s\n\n# Дождаться готовности всех подов с меткой\nkubectl wait pods -l app=myapp --for=condition=Ready --timeout=60s\n\n# Дождаться завершения деплоймента (все реплики готовы)\nkubectl wait deployment/<deploy-name> --for=condition=Available --timeout=300s\n\n# Дождаться завершения Job (условие Complete)\nkubectl wait job/<job-name> --for=condition=Complete --timeout=120s\n\n# Дождаться, пока Job не провалится (условие Failed)\nkubectl wait job/<job-name> --for=condition=Failed --timeout=60s\n\n# Дождаться удаления ресурса\nkubectl wait pod/<pod-name> --for=delete --timeout=60s\n\n# Дождаться удаления всех подов с меткой\nkubectl wait pods -l app=myapp --for=delete --timeout=120s\n\n# Дождаться готовности ноды\nkubectl wait node/<node-name> --for=condition=Ready --timeout=300s\n\n# Дождаться готовности всех нод\nkubectl wait nodes --all --for=condition=Ready --timeout=300s\n\n# Дождаться установки CRD (Custom Resource Definition)\nkubectl wait crd/<crd-name> --for=condition=Established --timeout=60s\n\n# Дождаться в конкретном неймспейсе\nkubectl wait pod/<pod-name> -n <namespace> --for=condition=Ready --timeout=60s\n\n# Дождаться готовности нескольких ресурсов одного типа\nkubectl wait pods -l tier=backend --for=condition=Ready --all-namespaces --timeout=120s\n\n# Дождаться PVC в состоянии Bound\nkubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s\n\n# Дождаться произвольного поля через jsonpath (k8s >= 1.23)\nkubectl wait deployment/<deploy-name> \\\n  --for=jsonpath='{.status.readyReplicas}'=3 --timeout=120s\n\n# Пример использования в CI/CD пайплайне\nkubectl apply -f deployment.yaml\nkubectl wait deployment/myapp --for=condition=Available --timeout=300s\necho \"Деплой завершён успешно\"\n\n# Проверить сразу несколько условий (через несколько вызовов)\nkubectl wait pod/<pod-name> --for=condition=Initialized --timeout=30s\nkubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s\nkubectl wait pod/<pod-name> --for=condition=ContainersReady --timeout=120s\n\n# Доступные условия для подов:\n#   Initialized       — все init-контейнеры завершились\n#   Ready             — под готов принимать трафик\n#   ContainersReady   — все контейнеры пода готовы\n#   PodScheduled      — под назначен на ноду\n\n# Доступные условия для нод:\n#   Ready             — нода в рабочем состоянии\n#   MemoryPressure    — нехватка памяти\n#   DiskPressure      — нехватка дискового пространства\n#   PIDPressure       — нехватка PID\n#   NetworkUnavailable — сеть не настроена"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": null,
    "command": "# Пробросить порт пода на локальную машину\nkubectl port-forward <pod-name> 8080:80\n\n# Пробросить порт сервиса\nkubectl port-forward service/<service-name> 8080:80\nkubectl port-forward svc/<service-name> 8080:80\n\n# Пробросить несколько портов\nkubectl port-forward <pod-name> 8080:80 8443:443\n\n# Пробросить на все интерфейсы (опасно на рабочей машине: открывает доступ из сети)\nkubectl port-forward --address 0.0.0.0 <pod-name> 8080:80\n\n# Пробросить в определённом namespace\nkubectl port-forward <pod-name> 8080:80 -n <namespace>\n\n# Пробросить порт deployment\nkubectl port-forward deployment/<deployment-name> 8080:80\n\n# Дать kubectl выбрать свободный локальный порт\nkubectl port-forward <pod-name> :80\n\n# Пробросить порт StatefulSet\nkubectl port-forward statefulset/<statefulset-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": null,
    "command": "# Создать service из deployment\nkubectl expose deployment <deployment-name> --port=80 --target-port=8080\n\n# Создать service типа NodePort\nkubectl expose deployment <deployment-name> --type=NodePort --port=80\n\n# Создать service типа LoadBalancer\nkubectl expose deployment <deployment-name> --type=LoadBalancer --port=80\n\n# Создать service из пода\nkubectl expose pod <pod-name> --port=80 --target-port=8080\n\n# Создать service с именем\nkubectl expose deployment <deployment-name> --port=80 --name=my-service\n\n# Создать service с указанием протокола\nkubectl expose deployment <deployment-name> --port=80 --protocol=TCP\n\n# Создать service для нескольких портов\nkubectl expose deployment <deployment-name> --port=80,443 --target-port=8080\n\n# Создать service в определённом namespace\nkubectl expose deployment <deployment-name> --port=80 -n <namespace>\n\n# Генерация YAML без создания\nkubectl expose deployment <deployment-name> --port=80 --dry-run=client -o yaml\n\n# Создать ExternalName service\nkubectl create service externalname <name> --external-name=db.example.com"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": null,
    "command": "# Список всех Ingress ресурсов\nkubectl get ingress\nkubectl get ing\n\n# Ingress во всех namespace\nkubectl get ing -A\n\n# Описание Ingress\nkubectl describe ing <ingress-name>\n\n# Просмотр Ingress в формате YAML\nkubectl get ing <ingress-name> -o yaml\n\n# Создать Ingress из файла\nkubectl apply -f ingress.yaml\n\n# Удалить Ingress\nkubectl delete ing <ingress-name>\n\n# Показать Ingress с хостами и адресами\nkubectl get ing -o custom-columns=NAME:.metadata.name,HOSTS:.spec.rules[*].host,ADDRESS:.status.loadBalancer.ingress[*].ip\n\n# Пример: базовый Ingress с роутингом по хосту\n# apiVersion: networking.k8s.io/v1\n# kind: Ingress\n# metadata:\n#   name: my-ingress\n#   annotations:\n#     nginx.ingress.kubernetes.io/rewrite-target: /\n# spec:\n#   ingressClassName: nginx\n#   rules:\n#   - host: myapp.example.com\n#     http:\n#       paths:\n#       - path: /\n#         pathType: Prefix\n#         backend:\n#           service:\n#             name: my-service\n#             port:\n#               number: 80\n\n# Пример: Ingress с TLS\n# spec:\n#   tls:\n#   - hosts:\n#     - myapp.example.com\n#     secretName: myapp-tls-secret\n#   rules:\n#   - host: myapp.example.com\n#     http:\n#       paths:\n#       - path: /\n#         pathType: Prefix\n#         backend:\n#           service:\n#             name: my-service\n#             port:\n#               number: 80\n\n# Список IngressClass\nkubectl get ingressclass"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": null,
    "command": "# Список NetworkPolicy\nkubectl get networkpolicy\nkubectl get netpol\n\n# NetworkPolicy во всех namespace\nkubectl get netpol -A\n\n# Описание NetworkPolicy\nkubectl describe netpol <policy-name>\n\n# Просмотр NetworkPolicy в формате YAML\nkubectl get netpol <policy-name> -o yaml\n\n# Создать NetworkPolicy из файла\nkubectl apply -f netpol.yaml\n\n# Удалить NetworkPolicy\nkubectl delete netpol <policy-name>\n\n# Пример: запретить весь входящий трафик к подам с app=myapp\n# apiVersion: networking.k8s.io/v1\n# kind: NetworkPolicy\n# metadata:\n#   name: deny-all-ingress\n# spec:\n#   podSelector:\n#     matchLabels:\n#       app: myapp\n#   policyTypes:\n#   - Ingress\n\n# Пример: разрешить ingress только от подов с app=frontend\n# spec:\n#   podSelector:\n#     matchLabels:\n#       app: backend\n#   policyTypes:\n#   - Ingress\n#   ingress:\n#   - from:\n#     - podSelector:\n#         matchLabels:\n#           app: frontend\n#     ports:\n#     - protocol: TCP\n#       port: 8080\n\n# Пример: разрешить egress только на порт 5432 (postgres)\n# spec:\n#   podSelector:\n#     matchLabels:\n#       app: backend\n#   policyTypes:\n#   - Egress\n#   egress:\n#   - to:\n#     - podSelector:\n#         matchLabels:\n#           app: database\n#     ports:\n#     - protocol: TCP\n#       port: 5432\n\n# Проверить какие поды попадают под NetworkPolicy\nkubectl get pods -l <selector-from-policy>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": null,
    "command": "# Запустить прокси к API серверу (localhost:8001)\nkubectl proxy\n\n# Прокси на указанном порту\nkubectl proxy --port=8080\n\n# Прокси доступный со всех интерфейсов (опасно: может открыть Kubernetes API в сеть)\nkubectl proxy --address=0.0.0.0 --accept-hosts='.*'\n\n# После запуска прокси - доступ к API через curl\n# curl http://localhost:8001/api/v1/namespaces\n# curl http://localhost:8001/api/v1/pods\n\n# Прямой доступ к API без прокси (с токеном)\nkubectl get --raw /api/v1/namespaces\nkubectl get --raw /apis/apps/v1/deployments\n\n# Проверить здоровье кластера через API\nkubectl get --raw /healthz\nkubectl get --raw /readyz\nkubectl get --raw /livez\nkubectl get --raw '/readyz?verbose'\nkubectl get --raw '/livez?verbose'\n\n# Диагностические endpoints API server (доступность зависит от прав и версии кластера)\nkubectl get --raw /version\nkubectl get --raw /openapi/v2\n\n# Получить метрики (если metrics-server установлен)\nkubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes\nkubectl get --raw /apis/metrics.k8s.io/v1beta1/pods\n\n# Обращение к API конкретного сервиса через прокси\n# curl http://localhost:8001/api/v1/namespaces/<ns>/services/<svc>/proxy/"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": null,
    "command": "# Список ролей в namespace\nkubectl get roles\n\n# Список ClusterRole (уровень кластера)\nkubectl get clusterroles\n\n# Список RoleBinding\nkubectl get rolebindings\n\n# Список ClusterRoleBinding\nkubectl get clusterrolebindings\n\n# Описание роли\nkubectl describe role <role-name>\nkubectl describe clusterrole <clusterrole-name>\n\n# Создать роль (доступ get/list к pods)\nkubectl create role pod-reader --verb=get,list,watch --resource=pods\n\n# Создать ClusterRole\nkubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods\n\n# Привязать роль к пользователю\nkubectl create rolebinding <binding-name> --role=pod-reader --user=<username>\n\n# Привязать роль к ServiceAccount\nkubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>\n\n# Привязать ClusterRole к пользователю (на весь кластер)\nkubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>\n\n# Создать ServiceAccount\nkubectl create serviceaccount <sa-name>\n\n# Список ServiceAccount\nkubectl get serviceaccounts\nkubectl get sa\n\n# Описание ServiceAccount\nkubectl describe sa <sa-name>\n\n# Проверить свои права доступа\nkubectl auth can-i --list\n\n# Проверить конкретное право\nkubectl auth can-i create pods\nkubectl auth can-i delete deployments -n production\n\n# Проверить права для другого пользователя\nkubectl auth can-i create pods --as=<username>\n\n# Проверить права для ServiceAccount\nkubectl auth can-i create pods --as=system:serviceaccount:<namespace>:<sa-name>\n\n# Legacy: получить токен ServiceAccount из Secret (только для кластеров k8s < 1.24)\nkubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d\n\n# Предпочтительно: создать короткоживущий токен для ServiceAccount (k8s >= 1.24)\nkubectl create token <sa-name>\n\n# Создать токен с кастомным TTL\nkubectl create token <sa-name> --duration=24h"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": null,
    "command": "# Проверить, можно ли выполнить действие в текущем неймспейсе\nkubectl auth can-i get pods\nkubectl auth can-i create deployments\nkubectl auth can-i delete secrets\n\n# Проверить в конкретном неймспейсе\nkubectl auth can-i get pods -n kube-system\n\n# Проверить во всех неймспейсах\nkubectl auth can-i get pods --all-namespaces\n\n# Список всех разрешённых действий в текущем неймспейсе\nkubectl auth can-i --list\nkubectl auth can-i --list -n staging\n\n# Проверить права от имени другого пользователя\nkubectl auth can-i get pods --as dev-user\nkubectl auth can-i get pods --as system:serviceaccount:default:mysa\n\n# Проверить права от имени группы\nkubectl auth can-i get pods --as-group system:masters --as fake-user\n\n# Проверить права ServiceAccount (полезно при отладке рабочих нагрузок)\nkubectl auth can-i list pods \\\n  --as system:serviceaccount:<namespace>:<serviceaccount-name>\n\n# Показать текущую идентичность (пользователь, группы, extra)\nkubectl auth whoami\n\n# Применить RBAC-объекты из файла (добирает недостающие правила, не разрушает существующие)\nkubectl auth reconcile -f rbac-manifest.yaml\n\n# Пробный запуск reconcile — просмотр изменений без применения\nkubectl auth reconcile -f rbac-manifest.yaml --dry-run=client"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": null,
    "command": "# Список всех CSR в кластере\nkubectl get csr\nkubectl get certificatesigningrequests\n\n# Показать CSR со статусом и подписантом\nkubectl get csr -o custom-columns=NAME:.metadata.name,AGE:.metadata.creationTimestamp,SIGNERNAME:.spec.signerName,REQUESTOR:.spec.username,CONDITION:.status.conditions[0].type\n\n# Детальная информация о CSR (subject, usages, events)\nkubectl describe csr <csr-name>\n\n# Одобрить CSR\nkubectl certificate approve <csr-name>\n\n# Отклонить CSR\nkubectl certificate deny <csr-name>\n\n# Удалить CSR\nkubectl delete csr <csr-name>\n\n# Создать объект CSR из PEM-файла (k8s >= 1.18)\ncat <<EOF | kubectl apply -f -\napiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: my-user\nspec:\n  request: $(cat my-user.csr | base64 | tr -d '\\n')\n  signerName: kubernetes.io/kube-apiserver-client\n  expirationSeconds: 86400   # 1 день\n  usages:\n  - client auth\nEOF\n\n# Получить подписанный сертификат после одобрения\nkubectl get csr <csr-name> -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt\n\n# Полный воркфлоу: сгенерировать ключ + CSR, отправить, одобрить, забрать сертификат\n# 1. Сгенерировать приватный ключ и CSR через openssl\nopenssl genrsa -out my-user.key 2048\nopenssl req -new -key my-user.key -out my-user.csr -subj \"/CN=my-user/O=my-group\"\n\n# 2. Отправить CSR в Kubernetes (см. выше)\n\n# 3. Одобрить\nkubectl certificate approve my-user\n\n# 4. Забрать подписанный сертификат\nkubectl get csr my-user -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt\n\n# 5. Добавить пользователя в kubeconfig\nkubectl config set-credentials my-user --client-key=my-user.key --client-certificate=my-user.crt --embed-certs=true\nkubectl config set-context my-user-context --cluster=<cluster-name> --user=my-user"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": null,
    "command": "# Проверить текущие Pod Security labels у namespace\nkubectl get ns <namespace> --show-labels\nkubectl get ns <namespace> -o jsonpath='{.metadata.labels.pod-security\\.kubernetes\\.io/enforce}'\n\n# Включить режим enforce=baseline\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce=baseline --overwrite\n\n# Включить режим enforce=restricted (более строгий)\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce=restricted --overwrite\n\n# Добавить warn/audit режимы для мягкой проверки\nkubectl label ns <namespace> pod-security.kubernetes.io/warn=restricted --overwrite\nkubectl label ns <namespace> pod-security.kubernetes.io/audit=restricted --overwrite\n\n# Зафиксировать версию политики под minor-версию вашего кластера\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce-version=v<cluster-minor> --overwrite\nkubectl label ns <namespace> pod-security.kubernetes.io/warn-version=v<cluster-minor> --overwrite\nkubectl label ns <namespace> pod-security.kubernetes.io/audit-version=v<cluster-minor> --overwrite\n\n# Удалить PSS labels из namespace\nkubectl label ns <namespace> pod-security.kubernetes.io/enforce-\nkubectl label ns <namespace> pod-security.kubernetes.io/warn-\nkubectl label ns <namespace> pod-security.kubernetes.io/audit-\n\n# Проверить предупреждения при apply (если нарушены политики)\nkubectl apply -f pod.yaml -n <namespace>\n\n# Проверить securityContext у подов\nkubectl get pod <pod-name> -n <namespace> -o yaml | grep -A 40 -E 'securityContext|runAsNonRoot|privileged|allowPrivilegeEscalation|capabilities'"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": null,
    "command": "# Просмотр securityContext запущенного пода\nkubectl get pod <pod-name> -o yaml | grep -A 20 securityContext\n\n# Проверить запущены ли поды от root во всех неймспейсах\nkubectl get pods -A -o jsonpath='{range .items[*]}{.metadata.namespace}{\" \"}{.metadata.name}{\" runAsUser:\"}{.spec.securityContext.runAsUser}{\"\\n\"}{end}'\n\n# Показать UID и non-root флаг для подов\nkubectl get pods -n <namespace> -o custom-columns=NAME:.metadata.name,UID:.spec.securityContext.runAsUser,NON_ROOT:.spec.securityContext.runAsNonRoot\n\n# Найти привилегированные контейнеры в кластере\nkubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | \"\\(.metadata.namespace)/\\(.metadata.name)\"'\n\n# Проверить использование hostNetwork / hostPID\nkubectl get pods -A -o custom-columns=NS:.metadata.namespace,NAME:.metadata.name,HOST_NET:.spec.hostNetwork,HOST_PID:.spec.hostPID | grep -v '<none>'\n\n# Пример securityContext на уровне пода (применяется ко всем контейнерам):\n# spec:\n#   securityContext:\n#     runAsNonRoot: true\n#     runAsUser: 1000\n#     runAsGroup: 3000\n#     fsGroup: 2000\n#     seccompProfile:\n#       type: RuntimeDefault\n\n# Пример securityContext на уровне контейнера (максимально ограниченный):\n# spec:\n#   containers:\n#   - name: app\n#     securityContext:\n#       allowPrivilegeEscalation: false\n#       readOnlyRootFilesystem: true\n#       runAsNonRoot: true\n#       runAsUser: 1000\n#       capabilities:\n#         drop:\n#         - ALL\n#         add:\n#         - NET_BIND_SERVICE   # только если нужен порт < 1024\n\n# Проверить readOnlyRootFilesystem (попытка записи завершится ошибкой):\nkubectl exec <pod-name> -- touch /test-write"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": null,
    "command": "# Список всех PDB\nkubectl get poddisruptionbudget\nkubectl get pdb\n\n# Список во всех неймспейсах\nkubectl get pdb -A\n\n# Подробная информация о PDB\nkubectl describe pdb <pdb-name>\n\n# Просмотр PDB в формате YAML\nkubectl get pdb <pdb-name> -o yaml\n\n# Создать PDB из файла\nkubectl apply -f pdb.yaml\n\n# Удалить PDB\nkubectl delete pdb <pdb-name>\n\n# Показать PDB со статусом допустимых прерываний\nkubectl get pdb -o custom-columns=NAME:.metadata.name,MIN-AVAILABLE:.spec.minAvailable,MAX-UNAVAILABLE:.spec.maxUnavailable,ALLOWED:.status.disruptionsAllowed\n\n# Пример PDB YAML (минимум 2 пода должны быть доступны):\n# apiVersion: policy/v1\n# kind: PodDisruptionBudget\n# metadata:\n#   name: my-pdb\n# spec:\n#   minAvailable: 2\n#   selector:\n#     matchLabels:\n#       app: my-app\n\n# Пример PDB YAML (максимум 1 под недоступен одновременно):\n# spec:\n#   maxUnavailable: 1\n#   selector:\n#     matchLabels:\n#       app: my-app"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": null,
    "command": "# Список ResourceQuota в неймспейсе\nkubectl get resourcequota\nkubectl get quota\n\n# Список во всех неймспейсах\nkubectl get quota -A\n\n# Подробно о ResourceQuota (показывает использованное vs лимит)\nkubectl describe quota <quota-name>\n\n# Создать ResourceQuota из файла\nkubectl apply -f quota.yaml\n\n# Удалить ResourceQuota\nkubectl delete quota <quota-name>\n\n# Список LimitRange\nkubectl get limitrange\nkubectl get limits\n\n# Подробно о LimitRange\nkubectl describe limits <limitrange-name>\n\n# Создать LimitRange из файла\nkubectl apply -f limitrange.yaml\n\n# Пример ResourceQuota YAML:\n# apiVersion: v1\n# kind: ResourceQuota\n# metadata:\n#   name: namespace-quota\n# spec:\n#   hard:\n#     requests.cpu: \"4\"\n#     requests.memory: 8Gi\n#     limits.cpu: \"8\"\n#     limits.memory: 16Gi\n#     pods: \"20\"\n#     services: \"10\"\n#     persistentvolumeclaims: \"5\"\n\n# Пример LimitRange YAML (лимиты по умолчанию для контейнеров):\n# apiVersion: v1\n# kind: LimitRange\n# metadata:\n#   name: container-limits\n# spec:\n#   limits:\n#   - type: Container\n#     default:\n#       cpu: 500m\n#       memory: 256Mi\n#     defaultRequest:\n#       cpu: 100m\n#       memory: 128Mi\n#     max:\n#       cpu: \"2\"\n#       memory: 2Gi"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": null,
    "command": "# Список всех ConfigMap в текущем namespace\nkubectl get configmaps\nkubectl get cm\n\n# Список во всех namespace\nkubectl get cm -A\n\n# Описание ConfigMap\nkubectl describe cm <configmap-name>\n\n# ConfigMap в формате YAML\nkubectl get cm <configmap-name> -o yaml\n\n# Создать ConfigMap из literal значений\nkubectl create configmap <name> --from-literal=key1=value1 --from-literal=key2=value2\n\n# Создать ConfigMap из файла (имя файла становится ключом)\nkubectl create configmap <name> --from-file=config.txt\n\n# Создать ConfigMap из файла с кастомным ключом\nkubectl create configmap <name> --from-file=mykey=config.txt\n\n# Создать ConfigMap из директории (все файлы становятся ключами)\nkubectl create configmap <name> --from-file=./configs/\n\n# Создать ConfigMap из env-файла (формат .env)\nkubectl create configmap <name> --from-env-file=.env\n\n# Редактировать ConfigMap\nkubectl edit cm <configmap-name>\n\n# Удалить ConfigMap\nkubectl delete cm <configmap-name>\n\n# Получить значение конкретного ключа\nkubectl get cm <configmap-name> -o jsonpath='{.data.key}'\n\n# Список всех ключей ConfigMap\nkubectl get cm <configmap-name> -o go-template='{{range $k,$v := .data}}{{$k}}{{\"\\n\"}}{{end}}'\n\n# Обновить ConfigMap идемпотентно (dry-run + apply)\nkubectl create configmap <name> --from-file=config.txt --dry-run=client -o yaml | kubectl apply -f -\n\n# Показать все ConfigMap с ключами\nkubectl get cm -o custom-columns=NAME:.metadata.name,KEYS:.data"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": null,
    "command": "# Список secret в текущем namespace\nkubectl get secrets\n\n# Список secret во всех namespace\nkubectl get secrets -A\n\n# Показать метаданные secret (без декодированных значений)\nkubectl describe secret <secret-name>\n\n# Показать secret в формате YAML\nkubectl get secret <secret-name> -o yaml\n\n# Декодировать один ключ из secret\nkubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d\n\n# Создать generic secret из literal значений\nkubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=changeme\n\n# Создать secret из файла\nkubectl create secret generic <secret-name> --from-file=./config.env\n\n# Создать TLS secret\nkubectl create secret tls <secret-name> --cert=tls.crt --key=tls.key\n\n# Обновить secret из файла (декларативно через apply)\nkubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -\n\n# Удалить secret\nkubectl delete secret <secret-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": null,
    "command": "# Список всех PersistentVolume (уровень кластера)\nkubectl get pv\n\n# Список всех PersistentVolumeClaim\nkubectl get pvc\n\n# PVC во всех namespace\nkubectl get pvc -A\n\n# Детальная информация о PV\nkubectl describe pv <pv-name>\n\n# Детальная информация о PVC\nkubectl describe pvc <pvc-name>\n\n# Список StorageClass\nkubectl get storageclass\nkubectl get sc\n\n# Описание StorageClass\nkubectl describe sc <storageclass-name>\n\n# Создать PVC из файла\nkubectl apply -f pvc.yaml\n\n# Удалить PVC\nkubectl delete pvc <pvc-name>\n\n# Удалить PV\nkubectl delete pv <pv-name>\n\n# Получить PV отсортированные по размеру\nkubectl get pv --sort-by=.spec.capacity.storage\n\n# Показать PVC с именем тома и storage class\nkubectl get pvc -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,VOLUME:.spec.volumeName,CAPACITY:.status.capacity.storage,CLASS:.spec.storageClassName\n\n# Проверить какой под использует PVC\nkubectl get pods -o json | grep -i \"claimName\"\n\n# Типы политики возврата PV: Retain, Recycle, Delete\nkubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy,STATUS:.status.phase\n\n# Изменить политику возврата PV\nkubectl patch pv <pv-name> -p '{\"spec\":{\"persistentVolumeReclaimPolicy\":\"Retain\"}}'\n\n# Принудительно удалить зависший PVC (убрать finalizers)\nkubectl patch pvc <pvc-name> -p '{\"metadata\":{\"finalizers\":null}}'"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "работа-с-kustomize-kustomize",
    "section": "Работа с Kustomize (kustomize)",
    "comment": null,
    "command": "# Применить конфигурацию через kustomize\nkubectl apply -k ./overlays/production/\n\n# Просмотреть итоговый YAML без применения\nkubectl kustomize ./overlays/production/\n\n# Удалить ресурсы через kustomize\nkubectl delete -k ./overlays/production/\n\n# Diff с kustomize\nkubectl diff -k ./overlays/production/\n\n# Применить базовую конфигурацию\nkubectl apply -k ./base/\n\n# Структура kustomize проекта:\n# ./base/\n#   kustomization.yaml\n#   deployment.yaml\n#   service.yaml\n# ./overlays/\n#   production/\n#     kustomization.yaml  (patches, images, replicas)\n#   staging/\n#     kustomization.yaml\n\n# Пример kustomization.yaml:\n# apiVersion: kustomize.config.k8s.io/v1beta1\n# kind: Kustomization\n# resources:\n#   - ../../base\n# images:\n#   - name: nginx\n#     newTag: \"1.21\"\n# replicas:\n#   - name: my-deployment\n#     count: 3"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": null,
    "command": "# Выполнить команду в поде\nkubectl exec <pod-name> -- <command>\n\n# Пример: посмотреть список файлов\nkubectl exec <pod-name> -- ls -la\n\n# Интерактивный shell в поде\nkubectl exec -it <pod-name> -- /bin/bash\nkubectl exec -it <pod-name> -- /bin/sh\n\n# Exec в конкретный контейнер (если несколько)\nkubectl exec -it <pod-name> -c <container-name> -- /bin/bash\n\n# Exec в определённом namespace\nkubectl exec -it <pod-name> -n <namespace> -- /bin/bash\n\n# Посмотреть переменные окружения\nkubectl exec <pod-name> -- env\n\n# Проверить сетевую доступность изнутри пода\nkubectl exec <pod-name> -- curl -s http://service-name:port\n\n# Посмотреть содержимое файла\nkubectl exec <pod-name> -- cat /path/to/file"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "копирование-файлов-cp",
    "section": "Копирование файлов (cp)",
    "comment": null,
    "command": "# Скопировать файл из пода на локальную машину\nkubectl cp <pod-name>:/path/to/file ./local-file\n\n# Скопировать файл в под\nkubectl cp ./local-file <pod-name>:/path/to/file\n\n# Копирование с указанием namespace\nkubectl cp <namespace>/<pod-name>:/path/to/file ./local-file\n\n# Скопировать директорию из пода\nkubectl cp <pod-name>:/path/to/dir ./local-dir\n\n# Копирование из конкретного контейнера\nkubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": null,
    "command": "# Добавить label к поду\nkubectl label pod <pod-name> environment=production\n\n# Добавить label к ноде\nkubectl label node <node-name> disktype=ssd\n\n# Удалить label (минус в конце)\nkubectl label pod <pod-name> environment-\n\n# Перезаписать существующий label\nkubectl label pod <pod-name> environment=staging --overwrite\n\n# Добавить аннотацию\nkubectl annotate pod <pod-name> description=\"My pod\"\n\n# Удалить аннотацию\nkubectl annotate pod <pod-name> description-\n\n# Показать labels всех подов\nkubectl get pods --show-labels\n\n# Фильтрация по label\nkubectl get pods -l environment=production\nkubectl get pods -l 'environment in (production,staging)'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": null,
    "command": "# Получить IP адреса всех подов\nkubectl get pods -o jsonpath='{.items[*].status.podIP}'\n\n# Получить имена всех подов\nkubectl get pods -o jsonpath='{.items[*].metadata.name}'\n\n# Получить image каждого пода (с переносом строки)\nkubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.spec.containers[0].image}{\"\\n\"}{end}'\n\n# Получить имена нод и их IP\nkubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.status.addresses[0].address}{\"\\n\"}{end}'\n\n# Получить External IP нод\nkubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'\n\n# Кастомные колонки\nkubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName\n\n# Кастомные колонки с IP\nkubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName\n\n# Получить все image в кластере\nkubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u\n\n# Получить секрет в декодированном виде\nkubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d\n\n# Получить адреса EndpointSlice сервиса (нужен jq)\nkubectl get endpointslices -l kubernetes.io/service-name=<service-name> -o json | jq -r '.items[].endpoints[].addresses[]'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "планирование-подов-affinity--tolerations--nodeselector",
    "section": "Планирование подов (affinity / tolerations / nodeSelector)",
    "comment": null,
    "command": "# Список нод с метками (для выбора целевых нод)\nkubectl get nodes --show-labels\nkubectl get nodes -l disktype=ssd\n\n# Добавить метку на ноду для управления планированием\nkubectl label node <node-name> disktype=ssd\n\n# Показать taint'ы всех нод\nkubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints\n\n# Проверить почему под в статусе Pending / не планируется\nkubectl describe pod <pod-name> | grep -A 20 Events\n\n# nodeSelector - запускать под только на нодах с меткой:\n# spec:\n#   nodeSelector:\n#     disktype: ssd\n\n# Node affinity - требовать ноду с меткой (жёсткое правило):\n# spec:\n#   affinity:\n#     nodeAffinity:\n#       requiredDuringSchedulingIgnoredDuringExecution:\n#         nodeSelectorTerms:\n#         - matchExpressions:\n#           - key: disktype\n#             operator: In\n#             values:\n#             - ssd\n\n# Node affinity - предпочитать ноду с меткой (мягкое правило):\n# spec:\n#   affinity:\n#     nodeAffinity:\n#       preferredDuringSchedulingIgnoredDuringExecution:\n#       - weight: 1\n#         preference:\n#           matchExpressions:\n#           - key: disktype\n#             operator: In\n#             values:\n#             - ssd\n\n# Pod anti-affinity - запретить 2 пода на одной ноде (жёстко):\n# spec:\n#   affinity:\n#     podAntiAffinity:\n#       requiredDuringSchedulingIgnoredDuringExecution:\n#       - labelSelector:\n#           matchLabels:\n#             app: my-app\n#         topologyKey: kubernetes.io/hostname\n\n# Pod anti-affinity - предпочитать разные ноды (мягко):\n# spec:\n#   affinity:\n#     podAntiAffinity:\n#       preferredDuringSchedulingIgnoredDuringExecution:\n#       - weight: 100\n#         podAffinityTerm:\n#           labelSelector:\n#             matchLabels:\n#               app: my-app\n#           topologyKey: kubernetes.io/hostname\n\n# Toleration - разрешить поду запускаться на ноде с taint:\n# spec:\n#   tolerations:\n#   - key: \"key\"\n#     operator: \"Equal\"\n#     value: \"value\"\n#     effect: \"NoSchedule\"\n\n# Допустить все taint'ы (запускаться на любой ноде, включая master):\n# spec:\n#   tolerations:\n#   - operator: \"Exists\"\n\n# topologySpreadConstraints - равномерно распределить поды по зонам:\n# spec:\n#   topologySpreadConstraints:\n#   - maxSkew: 1\n#     topologyKey: topology.kubernetes.io/zone\n#     whenUnsatisfiable: DoNotSchedule\n#     labelSelector:\n#       matchLabels:\n#         app: my-app"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": null,
    "command": "# Сгенерировать YAML-шаблон без создания ресурса (dry-run)\nkubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml\nkubectl run my-pod --image=nginx --dry-run=client -o yaml\n\n# Apply с удалением ресурсов, которых нет в файлах (prune)\nkubectl apply -f ./configs/ --prune -l app=myapp\n\n# Принудительно перетянуть образ - перезапустить деплой\nkubectl rollout restart deployment/<deployment-name>\n\n# Быстрое переключение неймспейса (паттерн с алиасом)\n# alias kns='kubectl config set-context --current --namespace'\n# kns production\n\n# Следить за прогрессом rollout\nkubectl rollout status deployment/<deployment-name> --watch\n\n# Получить resourceVersion (нужен для оптимистичной блокировки)\nkubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'\n\n# Получить все образы контейнеров, запущенных в кластере\nkubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u\n\n# Найти поды без условия Ready=True (включая поды с несколькими контейнерами; нужен jq)\nkubectl get pods -A -o json | jq -r '.items[] | select(any(.status.conditions[]?; .type == \"Ready\" and .status == \"True\") | not) | [.metadata.namespace, .metadata.name] | @tsv'\n\n# Удалить все упавшие поды во всех неймспейсах\nkubectl delete pods --field-selector=status.phase=Failed -A\n\n# Получить поды с кол-вом рестартов больше N\nkubectl get pods -A --no-headers | awk '$5 > 5'\n\n# Объединить несколько kubeconfig в один файл\nKUBECONFIG=~/.kube/config:~/.kube/other-config kubectl config view --flatten > ~/.kube/merged-config\n\n# Войти в первый под, найденный по метке\nkubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh\n\n# Логи со всех подов деплоя\nkubectl logs -l app=<label-value> --all-containers=true --prefix=true\n\n# Сортировка подов по кол-ву рестартов\nkubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'\n\n# Сортировка подов по времени создания (новые первые)\nkubectl get pods --sort-by=.metadata.creationTimestamp\n\n# Проверить, на каких нодах больше всего подов\nkubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn\n\n# Применить несколько файлов через stdin\ncat deployment.yaml service.yaml | kubectl apply -f -"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": null,
    "command": "# Добавить репозиторий чартов\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add stable https://charts.helm.sh/stable\n\n# Обновить все репозитории\nhelm repo update\n\n# Список добавленных репозиториев\nhelm repo list\n\n# Поиск чарта в репозиториях\nhelm search repo nginx\nhelm search repo nginx --versions\n\n# Поиск в Artifact Hub\nhelm search hub nginx\n\n# Показать дефолтные values чарта\nhelm show values bitnami/nginx\n\n# Установить релиз\nhelm install <release-name> bitnami/nginx\n\n# Установить с файлом values\nhelm install <release-name> bitnami/nginx -f values.yaml\n\n# Установить с переопределением значений\nhelm install <release-name> bitnami/nginx --set replicaCount=2 --set service.type=NodePort\n\n# Установить в конкретный неймспейс (создать если не существует)\nhelm install <release-name> bitnami/nginx -n <namespace> --create-namespace\n\n# Предварительный просмотр манифестов без установки (dry-run)\nhelm install <release-name> bitnami/nginx --dry-run --debug\n\n# Список всех релизов\nhelm list\nhelm list -A\nhelm list -n <namespace>\n\n# Статус релиза\nhelm status <release-name>\n\n# Получить текущие values развёрнутого релиза\nhelm get values <release-name>\n\n# Получить все манифесты релиза\nhelm get manifest <release-name>\n\n# Обновить релиз\nhelm upgrade <release-name> bitnami/nginx\nhelm upgrade <release-name> bitnami/nginx -f values.yaml\n\n# Установить если нет, обновить если есть\nhelm upgrade --install <release-name> bitnami/nginx -f values.yaml\n\n# История ревизий релиза\nhelm history <release-name>\n\n# Откатить к предыдущей ревизии\nhelm rollback <release-name>\n\n# Откатить к конкретной ревизии\nhelm rollback <release-name> 2\n\n# Удалить релиз\nhelm uninstall <release-name>\nhelm uninstall <release-name> -n <namespace>\n\n# Удалить релиз, сохранив историю\nhelm uninstall <release-name> --keep-history\n\n# Отрендерить шаблоны локально без кластера\nhelm template <release-name> bitnami/nginx -f values.yaml\n\n# Отрендерить и сохранить в файл\nhelm template <release-name> bitnami/nginx -f values.yaml > rendered.yaml\n\n# Проверить чарт на ошибки (lint)\nhelm lint ./my-chart\n\n# Создать scaffold нового чарта\nhelm create my-chart\n\n# Упаковать чарт в .tgz\nhelm package ./my-chart\n\n# Скачать исходник чарта локально\nhelm pull bitnami/nginx --untar\n\n# Запустить тесты чарта (test hooks)\nhelm test <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": null,
    "command": "# Установить krew (менеджер плагинов kubectl)\n# https://krew.sigs.k8s.io/docs/user-guide/setup/install/\n\n# Список установленных плагинов\nkubectl krew list\n\n# Поиск плагинов\nkubectl krew search <keyword>\n\n# Установить плагин\nkubectl krew install <plugin-name>\n\n# Обновить все установленные плагины\nkubectl krew upgrade\n\n# Удалить плагин\nkubectl krew uninstall <plugin-name>\n\n# Полезные плагины сообщества:\n# kubectl ctx      - быстрое переключение контекстов (kubectx)\nkubectl ctx\nkubectl ctx <context-name>\n\n# kubectl ns       - быстрое переключение неймспейсов (kubens)\nkubectl ns\nkubectl ns <namespace>\n\n# kubectl neat     - очищает вывод YAML от служебных полей\nkubectl neat get pod <pod-name> -o yaml\n\n# kubectl tree     - показывает иерархию владельцев ресурса\nkubectl tree deployment <deployment-name>\n\n# kubectl stern    - просмотр логов нескольких подов одновременно\nkubectl stern <pod-pattern>\nkubectl stern -l app=myapp\n\n# kubectl df-pv    - показывает использование диска для PersistentVolumes\nkubectl df-pv\n\n# kubectl whoami   - текущий пользователь / сервис-аккаунт\nkubectl whoami"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": null,
    "command": "# Включить автодополнение kubectl — bash\nsource <(kubectl completion bash)\necho 'source <(kubectl completion bash)' >> ~/.bashrc\n\n# Включить автодополнение kubectl — zsh\nsource <(kubectl completion zsh)\necho '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc\n\n# Алиас k=kubectl с сохранением автодополнения\nalias k=kubectl\ncomplete -o default -F __start_kubectl k   # bash\ncompdef k=kubectl                           # zsh\n\n# Часто используемые алиасы\nalias kgp='kubectl get pods'\nalias kgpa='kubectl get pods -A'\nalias kgpw='kubectl get pods -w'\nalias kgs='kubectl get svc'\nalias kgn='kubectl get nodes'\nalias kgd='kubectl get deploy'\nalias kge='kubectl get events --sort-by=.lastTimestamp'\nalias kdp='kubectl describe pod'\nalias kdd='kubectl describe deployment'\nalias kl='kubectl logs'\nalias klf='kubectl logs -f'\nalias kex='kubectl exec -it'\nalias kaf='kubectl apply -f'\nalias kdf='kubectl delete -f'\n\n# Быстрая смена namespace без kubens\nalias kns='kubectl config set-context --current --namespace'\n\n# Быстрая смена контекста без kubectx\nalias kctx='kubectl config use-context'\n\n# Показать текущий контекст и namespace\nalias kwhere='echo \"context: $(kubectl config current-context)\" && echo \"namespace: $(kubectl config view --minify -o jsonpath={.contexts[0].context.namespace})\"'\n\n# Интеграция с prompt — показывать контекст/namespace в строке приглашения\n# kube-ps1: https://github.com/jonmosco/kube-ps1\n# starship имеет встроенный модуль kubernetes: https://starship.rs/config/#kubernetes"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": null,
    "command": "# Получить список всех подов в текущем namespace\nkubectl get pods\n\n# Получить список подов во всех namespace\nkubectl get pods --all-namespaces\nkubectl get pods -A\n\n# Получить список подов с расширенной информацией (IP, нода)\nkubectl get pods -o wide\n\n# Получить список всех сервисов\nkubectl get services\nkubectl get svc\n\n# Получить список всех деплойментов\nkubectl get deployments\nkubectl get deploy\n\n# Получить список всех ресурсов в namespace\nkubectl get all\n\n# Получить информацию в формате YAML\nkubectl get pod <pod-name> -o yaml\n\n# Получить информацию в формате JSON\nkubectl get pod <pod-name> -o json\n\n# Получить список нод кластера\nkubectl get nodes\n\n# Получить список namespace\nkubectl get namespaces\nkubectl get ns"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": null,
    "command": "# Детальная информация о поде\nkubectl describe pod <pod-name>\n\n# Детальная информация о ноде\nkubectl describe node <node-name>\n\n# Детальная информация о сервисе\nkubectl describe service <service-name>\nkubectl describe svc <service-name>\n\n# Детальная информация о деплойменте\nkubectl describe deployment <deployment-name>\n\n# Детальная информация о configmap\nkubectl describe configmap <configmap-name>\nkubectl describe cm <configmap-name>\n\n# Детальная информация о secret\nkubectl describe secret <secret-name>\n\n# Детальная информация об ingress\nkubectl describe ingress <ingress-name>\n\n# Describe в определённом namespace\nkubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": null,
    "command": "# Логи пода\nkubectl logs <pod-name>\n\n# Логи конкретного контейнера в поде (если несколько контейнеров)\nkubectl logs <pod-name> -c <container-name>\n\n# Логи в реальном времени (follow)\nkubectl logs -f <pod-name>\n\n# Последние N строк логов\nkubectl logs --tail=100 <pod-name>\n\n# Логи за последний час\nkubectl logs --since=1h <pod-name>\n\n# Логи за последние 30 минут\nkubectl logs --since=30m <pod-name>\n\n# Логи предыдущего контейнера (после рестарта)\nkubectl logs <pod-name> --previous\nkubectl logs <pod-name> -p\n\n# Логи всех подов по label\nkubectl logs -l app=myapp\n\n# Логи в определённом namespace\nkubectl logs <pod-name> -n <namespace>\n\n# Комбинация: follow + tail + namespace\nkubectl logs -f --tail=50 <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": null,
    "command": "# Использование ресурсов нодами\nkubectl top nodes\n\n# Использование ресурсов подами\nkubectl top pods\n\n# Top поды во всех namespace\nkubectl top pods -A\n\n# Top поды в конкретном namespace\nkubectl top pods -n <namespace>\n\n# Top с сортировкой по CPU\nkubectl top pods --sort-by=cpu\n\n# Top с сортировкой по памяти\nkubectl top pods --sort-by=memory\n\n# Top для контейнеров внутри подов\nkubectl top pods --containers"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": null,
    "command": "# Создать отладочный контейнер в существующем поде\nkubectl debug <pod-name> -it --image=busybox\n\n# Создать копию пода для отладки\nkubectl debug <pod-name> -it --image=busybox --copy-to=debug-pod\n\n# Отладка ноды (создаёт отладочный под; права зависят от профиля)\nkubectl debug node/<node-name> -it --image=ubuntu\n\n# Посмотреть события в namespace\nkubectl get events\n\n# События с сортировкой по времени\nkubectl get events --sort-by='.lastTimestamp'\n\n# События для конкретного пода\nkubectl get events --field-selector involvedObject.name=<pod-name>\n\n# Проверить статус API сервера\nkubectl cluster-info\n\n# Детальная информация о кластере\nkubectl cluster-info dump\n\n# Проверить доступ к API\nkubectl auth can-i create pods\nkubectl auth can-i delete deployments --namespace=production\n\n# Проверить доступ для другого пользователя\nkubectl auth can-i create pods --as=<user>\n\n# Список всех разрешений\nkubectl auth can-i --list\n\n# Проверить почему под не запускается\nkubectl describe pod <pod-name> | grep -A 10 Events\n\n# Проверить health endpoints API server\nkubectl get --raw='/readyz?verbose'\nkubectl get --raw='/livez?verbose'\nkubectl get --raw='/healthz'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": null,
    "command": "# Показать все события в текущем неймспейсе\nkubectl events\n\n# События во всех неймспейсах\nkubectl events -A\nkubectl events --all-namespaces\n\n# События для конкретного ресурса\nkubectl events --for pod/<pod-name>\nkubectl events --for deployment/<deploy-name>\nkubectl events --for node/<node-name>\n\n# Фильтрация по типу события (Normal, Warning)\nkubectl events --types=Warning\nkubectl events --types=Normal\nkubectl events --types=Warning,Normal\n\n# Следить за событиями в реальном времени\nkubectl events --watch\nkubectl events -w\n\n# Мониторинг событий конкретного ресурса в реальном времени\nkubectl events --for pod/<pod-name> --watch\n\n# Вывод в JSON / YAML\nkubectl events -o json\nkubectl events -o yaml\n\n# Получить только Warning-события по всему кластеру с анализом через jq\nkubectl events -A -o json | \\\n  jq '.items[] | select(.type==\"Warning\") | {reason: .reason, message: .message, object: .involvedObject.name}'\n\n# Диагностика пода в CrashLoopBackOff\nkubectl events --for pod/<pod-name> --types=Warning\n\n# Сравнение подходов:\n# Классический (устаревший):\nkubectl get events --field-selector involvedObject.name=<pod-name>\n# Новый (предпочтительный):\nkubectl events --for pod/<pod-name>\n\n# Все Warning-события в неймспейсе, отсортированные по времени\nkubectl events --types=Warning -o json | \\\n  jq -r '.items | sort_by(.lastTimestamp) | .[] | \"\\(.lastTimestamp) \\(.reason) \\(.involvedObject.name): \\(.message)\"'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": null,
    "command": "# Найти все не-running поды во всех неймспейсах\nkubectl get pods -A --field-selector='status.phase!=Running'\n\n# Быстро показать рестарты и текущее состояние контейнера\nkubectl get pods -A -o custom-columns=NS:.metadata.namespace,POD:.metadata.name,PHASE:.status.phase,RESTARTS:.status.containerStatuses[0].restartCount,STATE:.status.containerStatuses[0].state.waiting.reason\n\n# Проверить события конкретного пода (image pull, scheduling, probes)\nkubectl describe pod <pod-name> -n <namespace>\nkubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by=.lastTimestamp\n\n# CrashLoopBackOff: посмотреть логи предыдущего запуска контейнера\nkubectl logs <pod-name> -n <namespace> --previous\nkubectl logs <pod-name> -n <namespace> -c <container-name> --previous\n\n# Pending: проверить ошибки scheduler и запрошенные ресурсы\nkubectl describe pod <pod-name> -n <namespace> | grep -A 20 -E 'Events|Requests|Limits|node(s)'\n\n# ImagePullBackOff / ErrImagePull: проверить image и pull secret\nkubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Failed|ErrImagePull|ImagePullBackOff|pull'\nkubectl get secret -n <namespace>\n\n# Ошибки liveness/readiness/startup probes\nkubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Liveness|Readiness|Startup|probe'\n\n# Проверить env и смонтированные config/secret внутри контейнера\nkubectl exec -it <pod-name> -n <namespace> -- env\nkubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/config /etc/secrets\n\n# Временный debug-контейнер в сетевом namespace целевого пода\nkubectl debug <pod-name> -n <namespace> -it --image=busybox"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": null,
    "command": "# Быстрый снимок namespace: поды, сервисы, события\nkubectl get pods,svc,ingress,pvc -n <namespace> -o wide\nkubectl events -n <namespace> --types=Warning\n\n# CrashLoopBackOff: что рестартует и почему\nkubectl get pods -n <namespace> --sort-by='.status.containerStatuses[0].restartCount'\nkubectl describe pod <pod-name> -n <namespace>\nkubectl logs <pod-name> -n <namespace> --previous --all-containers=true\n\n# Rollout stuck: состояние Deployment и ReplicaSet\nkubectl rollout status deployment/<deploy-name> -n <namespace> --timeout=60s\nkubectl describe deployment/<deploy-name> -n <namespace>\nkubectl get rs -n <namespace> -l app=<app-label> -o wide\n\n# Pending: не хватает ресурсов, PVC, taints или node selector\nkubectl describe pod <pod-name> -n <namespace> | grep -A 40 Events\nkubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints,CPU:.status.allocatable.cpu,MEM:.status.allocatable.memory\nkubectl get pvc -n <namespace>\n\n# Service не отвечает: проверить EndpointSlice и selector\nkubectl get svc <service-name> -n <namespace> -o wide\nkubectl get endpointslices -n <namespace> -l kubernetes.io/service-name=<service-name> -o yaml\nkubectl describe svc <service-name> -n <namespace>\n\n# DNS внутри кластера: быстрый pod для проверки резолва\nkubectl run dnscheck --rm -it --restart=Never --image=busybox:1.36 -- nslookup <service-name>.<namespace>.svc.cluster.local\n\n# PVC не монтируется: события pod, PVC и storage class\nkubectl describe pod <pod-name> -n <namespace> | grep -A 40 -E 'Mount|Volume|Events'\nkubectl describe pvc <pvc-name> -n <namespace>\nkubectl get storageclass\n\n# Node pressure: найти ноды и поды с высоким потреблением\nkubectl describe nodes | grep -E 'Name:|Pressure|Allocated resources' -A 8\nkubectl top nodes\nkubectl top pods -A --sort-by=memory | head -20"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": null,
    "command": "# Добавить временный отладочный контейнер в работающий под (kubectl >= 1.23)\nkubectl debug -it <pod-name> --image=busybox --target=<container-name>\n\n# Использовать расширенный образ для отладки сети\nkubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>\n\n# Посмотреть временные контейнеры, уже прикреплённые к поду\nkubectl get pod <pod-name> -o jsonpath='{.spec.ephemeralContainers}' | jq .\n\n# Создать отладочную копию пода (оригинал не затрагивается)\nkubectl debug <pod-name> -it --copy-to=<pod-name>-debug --image=busybox\n\n# Заменить точку входа падающего контейнера в копии\nkubectl debug <pod-name> -it --copy-to=<pod-name>-debug --container=<container-name> -- sh\n\n# Разделить пространство процессов с целевым контейнером (видеть его процессы)\nkubectl debug -it <pod-name> --image=busybox --target=<container-name> --share-processes\n\n# Отладка узла — создать отладочный под (права зависят от профиля)\nkubectl debug node/<node-name> -it --image=busybox\n\n# Найти все поды с прикреплёнными временными контейнерами\nkubectl get pods -A -o json | jq '.items[] | select(.spec.ephemeralContainers != null) | .metadata.name'\n\n# Удалить отладочную копию пода после работы\nkubectl delete pod <pod-name>-debug"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": null,
    "command": "# Запустить под с образом\nkubectl run <pod-name> --image=nginx\n\n# Запустить под и сразу открыть shell\nkubectl run -it debug --image=busybox -- /bin/sh\n\n# Запустить под с автоудалением после выхода\nkubectl run tmp --rm -it --image=busybox -- /bin/sh\n\n# Запустить под с переменными окружения\nkubectl run <pod-name> --image=nginx --env=\"DB_HOST=db\" --env=\"DB_PORT=5432\"\n\n# Запустить под с указанием порта\nkubectl run <pod-name> --image=nginx --port=80\n\n# Запустить под с labels\nkubectl run <pod-name> --image=nginx --labels=\"app=web,tier=frontend\"\n\n# Запустить под в определённом namespace\nkubectl run <pod-name> --image=nginx -n <namespace>\n\n# Запустить под и сразу создать service\nkubectl run <pod-name> --image=nginx --port=80 --expose\n\n# Генерация YAML без создания (dry-run)\nkubectl run <pod-name> --image=nginx --dry-run=client -o yaml\n\n# Запустить одноразовую задачу (Job)\nkubectl create job <job-name> --image=busybox -- echo \"Hello\"\n\n# Запустить CronJob\nkubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": null,
    "command": "# Статус обновления deployment\nkubectl rollout status deployment/<deployment-name>\n\n# История обновлений\nkubectl rollout history deployment/<deployment-name>\n\n# Откатить deployment на предыдущую версию\nkubectl rollout undo deployment/<deployment-name>\n\n# Откатить на конкретную ревизию\nkubectl rollout undo deployment/<deployment-name> --to-revision=2\n\n# Перезапустить все поды в deployment\nkubectl rollout restart deployment/<deployment-name>\n\n# Приостановить обновление\nkubectl rollout pause deployment/<deployment-name>\n\n# Возобновить обновление\nkubectl rollout resume deployment/<deployment-name>\n\n# Посмотреть детали конкретной ревизии\nkubectl rollout history deployment/<deployment-name> --revision=3"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": null,
    "command": "# Масштабировать deployment до N реплик\nkubectl scale deployment <deployment-name> --replicas=3\n\n# Масштабировать replicaset\nkubectl scale replicaset <replicaset-name> --replicas=5\n\n# Масштабировать statefulset\nkubectl scale statefulset <statefulset-name> --replicas=2\n\n# Масштабировать в определённом namespace\nkubectl scale deployment <deployment-name> --replicas=3 -n <namespace>\n\n# Автомасштабирование (HPA - Horizontal Pod Autoscaler)\nkubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80\n\n# Посмотреть статус автомасштабирования\nkubectl get hpa"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": null,
    "command": "# Список всех HPA\nkubectl get hpa\nkubectl get hpa -A\n\n# Подробная информация об HPA\nkubectl describe hpa <hpa-name>\n\n# Просмотр HPA в формате YAML\nkubectl get hpa <hpa-name> -o yaml\n\n# Создать HPA для деплоя (по CPU)\nkubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=70\n\n# Создать HPA из файла\nkubectl apply -f hpa.yaml\n\n# Удалить HPA\nkubectl delete hpa <hpa-name>\n\n# Показать HPA с текущим/целевым кол-вом реплик и метриками\nkubectl get hpa -o custom-columns=NAME:.metadata.name,MINPODS:.spec.minReplicas,MAXPODS:.spec.maxReplicas,REPLICAS:.status.currentReplicas\n\n# Редактировать HPA (изменить пороги или кол-во реплик)\nkubectl edit hpa <hpa-name>\n\n# Пример HPA YAML (по CPU + Memory):\n# apiVersion: autoscaling/v2\n# kind: HorizontalPodAutoscaler\n# metadata:\n#   name: my-hpa\n# spec:\n#   scaleTargetRef:\n#     apiVersion: apps/v1\n#     kind: Deployment\n#     name: my-deployment\n#   minReplicas: 2\n#   maxReplicas: 10\n#   metrics:\n#   - type: Resource\n#     resource:\n#       name: cpu\n#       target:\n#         type: Utilization\n#         averageUtilization: 70\n#   - type: Resource\n#     resource:\n#       name: memory\n#       target:\n#         type: Utilization\n#         averageUtilization: 80"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": null,
    "command": "# VPA не входит в стандартный Kubernetes — устанавливается отдельно:\n# https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler\n\n# Список всех VPA\nkubectl get vpa\nkubectl get vpa -A\n\n# Детальная информация о VPA (включая рекомендации)\nkubectl describe vpa <vpa-name>\n\n# Просмотр VPA в формате YAML\nkubectl get vpa <vpa-name> -o yaml\n\n# Создать VPA из файла\nkubectl apply -f vpa.yaml\n\n# Удалить VPA\nkubectl delete vpa <vpa-name>\n\n# Показать рекомендации для всех VPA\nkubectl get vpa -o custom-columns=NAME:.metadata.name,MODE:.spec.updatePolicy.updateMode,CPU_REQ:.status.recommendation.containerRecommendations[0].target.cpu,MEM_REQ:.status.recommendation.containerRecommendations[0].target.memory\n\n# Пример VPA YAML — режим Off (только рекомендации, без автоизменений):\n# apiVersion: autoscaling.k8s.io/v1\n# kind: VerticalPodAutoscaler\n# metadata:\n#   name: my-vpa\n# spec:\n#   targetRef:\n#     apiVersion: apps/v1\n#     kind: Deployment\n#     name: my-deployment\n#   updatePolicy:\n#     updateMode: \"Off\"\n\n# Пример VPA YAML — режим Auto (рестарт подов с новыми лимитами):\n# spec:\n#   targetRef:\n#     apiVersion: apps/v1\n#     kind: Deployment\n#     name: my-deployment\n#   updatePolicy:\n#     updateMode: \"Auto\"\n#   resourcePolicy:\n#     containerPolicies:\n#     - containerName: app\n#       minAllowed:\n#         cpu: 50m\n#         memory: 64Mi\n#       maxAllowed:\n#         cpu: \"2\"\n#         memory: 2Gi\n\n# Режимы updateMode:\n#   Off        — только вычисляет рекомендации, ничего не меняет\n#   Initial    — устанавливает ресурсы только при создании пода\n#   Recreate   — вытесняет и пересоздаёт поды при изменении рекомендаций\n#   Auto       — аналогично Recreate (поведение по умолчанию)\n\n# Проверить, запущен ли admission controller VPA\nkubectl get pods -n kube-system | grep vpa"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": null,
    "command": "# Список всех StatefulSet\nkubectl get statefulsets\nkubectl get sts\n\n# Список во всех namespace\nkubectl get sts -A\n\n# Описание StatefulSet\nkubectl describe sts <sts-name>\n\n# StatefulSet в формате YAML\nkubectl get sts <sts-name> -o yaml\n\n# Масштабировать StatefulSet\nkubectl scale sts <sts-name> --replicas=3\n\n# Роллинг-рестарт StatefulSet\nkubectl rollout restart sts/<sts-name>\n\n# Статус обновления StatefulSet\nkubectl rollout status sts/<sts-name>\n\n# История обновлений StatefulSet\nkubectl rollout history sts/<sts-name>\n\n# Откатить StatefulSet на предыдущую ревизию\nkubectl rollout undo sts/<sts-name>\n\n# Откатить на конкретную ревизию\nkubectl rollout undo sts/<sts-name> --to-revision=2\n\n# Обновить image в StatefulSet\nkubectl set image sts/<sts-name> <container-name>=<image>:<tag>\n\n# Удалить StatefulSet (поды остаются по умолчанию)\nkubectl delete sts <sts-name>\n\n# Удалить StatefulSet вместе с подами (foreground)\nkubectl delete sts <sts-name> --cascade=foreground\n\n# Удалить StatefulSet без удаления подов (orphan)\nkubectl delete sts <sts-name> --cascade=orphan\n\n# Список подов StatefulSet (по label)\nkubectl get pods -l app=<sts-name>\n\n# Показать StatefulSet с количеством реплик\nkubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": null,
    "command": "# Список всех DaemonSet\nkubectl get daemonsets\nkubectl get ds\n\n# Список во всех namespace\nkubectl get ds -A\n\n# Описание DaemonSet\nkubectl describe ds <ds-name>\n\n# DaemonSet в формате YAML\nkubectl get ds <ds-name> -o yaml\n\n# Роллинг-рестарт DaemonSet (на всех нодах)\nkubectl rollout restart ds/<ds-name>\n\n# Статус обновления DaemonSet\nkubectl rollout status ds/<ds-name>\n\n# История обновлений DaemonSet\nkubectl rollout history ds/<ds-name>\n\n# Откатить DaemonSet на предыдущую ревизию\nkubectl rollout undo ds/<ds-name>\n\n# Обновить image в DaemonSet\nkubectl set image ds/<ds-name> <container-name>=<image>:<tag>\n\n# Удалить DaemonSet (и его поды)\nkubectl delete ds <ds-name>\n\n# Удалить DaemonSet без удаления подов\nkubectl delete ds <ds-name> --cascade=orphan\n\n# Показать DaemonSet с покрытием нод\nkubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable\n\n# Список подов DaemonSet (по label)\nkubectl get pods -l app=<ds-name> -o wide"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": null,
    "command": "# Список всех Jobs\nkubectl get jobs\n\n# Список всех CronJobs\nkubectl get cronjobs\nkubectl get cj\n\n# Описание Job\nkubectl describe job <job-name>\n\n# Описание CronJob\nkubectl describe cronjob <cronjob-name>\n\n# Создать Job из образа\nkubectl create job <job-name> --image=busybox -- echo \"Hello\"\n\n# Создать Job из существующего CronJob (вручную запустить)\nkubectl create job <job-name> --from=cronjob/<cronjob-name>\n\n# Создать CronJob (каждые 5 минут)\nkubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\"\n\n# Создать CronJob (каждый день в 02:00)\nkubectl create cronjob <name> --image=busybox --schedule=\"0 2 * * *\" -- /bin/sh -c \"backup.sh\"\n\n# Посмотреть логи Job (через поды)\nkubectl logs -l job-name=<job-name>\n\n# Дождаться завершения Job\nkubectl wait --for=condition=Complete job/<job-name> --timeout=120s\n\n# Удалить завершённые Jobs\nkubectl delete jobs --field-selector status.successful=1\n\n# Приостановить CronJob\nkubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":true}}'\n\n# Возобновить CronJob\nkubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":false}}'\n\n# Удалить CronJob (и все связанные Jobs)\nkubectl delete cronjob <cronjob-name>"
  }
];
