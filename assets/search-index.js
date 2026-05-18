window.commandIndex = [
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Show current context",
    "command": "kubectl config current-context"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Show all contexts",
    "command": "kubectl config get-contexts"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Switch to another context",
    "command": "kubectl config use-context <context-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Show full configuration",
    "command": "kubectl config view"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Set default namespace for context",
    "command": "kubectl config set-context --current --namespace=<namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Add new cluster",
    "command": "kubectl config set-cluster <cluster-name> --server=https://k8s-api:6443"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Add credentials",
    "command": "kubectl config set-credentials <user-name> --token=<token>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Create new context",
    "command": "kubectl config set-context <context-name> --cluster=<cluster> --user=<user>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "contexts-and-configuration-config",
    "section": "Contexts and configuration (config)",
    "comment": "Delete context",
    "command": "kubectl config delete-context <context-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "List all namespaces",
    "command": "kubectl get namespaces"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "List all namespaces",
    "command": "kubectl get ns"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Describe namespace (shows resource quotas, limits)",
    "command": "kubectl describe ns <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Create namespace",
    "command": "kubectl create namespace <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Create namespace",
    "command": "kubectl create ns <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Delete namespace (removes all resources inside)",
    "command": "kubectl delete ns <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Set default namespace for current context",
    "command": "kubectl config set-context --current --namespace=<namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Show current default namespace",
    "command": "kubectl config view --minify | grep namespace"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Get all resources in a namespace",
    "command": "kubectl get all -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Get all resources across all namespaces",
    "command": "kubectl get all -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "List namespaces with status and age",
    "command": "kubectl get ns -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,AGE:.metadata.creationTimestamp"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Add label to namespace",
    "command": "kubectl label namespace <namespace> env=production"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Show namespaces with labels",
    "command": "kubectl get ns --show-labels"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "namespace-management",
    "section": "Namespace management",
    "comment": "Get resource count per namespace",
    "command": "kubectl get pods -A --no-headers | awk '{print $1}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Prevent scheduling new pods on node",
    "command": "kubectl cordon <node-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Allow scheduling on node",
    "command": "kubectl uncordon <node-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Evict pods from node (for maintenance)",
    "command": "kubectl drain <node-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Drain ignoring DaemonSets",
    "command": "kubectl drain <node-name> --ignore-daemonsets"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Drain with local data deletion",
    "command": "kubectl drain <node-name> --delete-emptydir-data"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Add taint to node",
    "command": "kubectl taint nodes <node-name> key=value:NoSchedule"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Remove taint (minus at the end)",
    "command": "kubectl taint nodes <node-name> key=value:NoSchedule-"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "node-management-taintcordondrain",
    "section": "Node management (taint/cordon/drain)",
    "comment": "Taint effect types: NoSchedule, PreferNoSchedule, NoExecute",
    "command": "kubectl taint nodes <node-name> key=value:NoExecute"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "List all CRDs in cluster",
    "command": "kubectl get crds"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "List all CRDs in cluster",
    "command": "kubectl get customresourcedefinitions"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Describe CRD",
    "command": "kubectl describe crd <crd-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "View CRD as YAML",
    "command": "kubectl get crd <crd-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Delete CRD (removes all instances of that resource too)",
    "command": "kubectl delete crd <crd-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "List instances of a custom resource",
    "command": "kubectl get <custom-resource-kind>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "List instances of a custom resource",
    "command": "kubectl get <custom-resource-kind> -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Describe a custom resource instance",
    "command": "kubectl describe <custom-resource-kind> <name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Filter CRDs by group",
    "command": "kubectl get crds | grep <group-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Show CRD with group and scope",
    "command": "kubectl get crds -o custom-columns=NAME:.metadata.name,GROUP:.spec.group,SCOPE:.spec.scope,VERSION:.spec.versions[0].name"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Explain a custom resource fields",
    "command": "kubectl explain <custom-resource-kind>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Explain a custom resource fields",
    "command": "kubectl explain <custom-resource-kind>.spec"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Apply custom resource from file",
    "command": "kubectl apply -f my-resource.yaml"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Delete all instances of a custom resource",
    "command": "kubectl delete <custom-resource-kind> --all -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Show all available API resources",
    "command": "kubectl api-resources"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Show only namespaced resources",
    "command": "kubectl api-resources --namespaced=true"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Show resources of specific API group",
    "command": "kubectl api-resources --api-group=apps"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Show API versions",
    "command": "kubectl api-versions"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Explain resource structure",
    "command": "kubectl explain pod"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Explain resource structure",
    "command": "kubectl explain pod.spec"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Explain resource structure",
    "command": "kubectl explain pod.spec.containers"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "working-with-api-resources-api-resources",
    "section": "Working with API resources (api-resources)",
    "comment": "Recursive explanation",
    "command": "kubectl explain pod --recursive"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Show allocatable resources per node",
    "command": "kubectl get nodes -o custom-columns=\\"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Allocated (requested) vs allocatable per node",
    "command": "kubectl describe nodes | grep -A 6 \"Allocated resources\""
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Real-time usage per node (requires metrics-server)",
    "command": "kubectl top nodes --sort-by=cpu"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Real-time usage per node (requires metrics-server)",
    "command": "kubectl top nodes --sort-by=memory"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Real-time usage per pod across all namespaces",
    "command": "kubectl top pods -A --sort-by=cpu"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Real-time usage per pod across all namespaces",
    "command": "kubectl top pods -A --sort-by=memory"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Top 20 most memory-hungry pods",
    "command": "kubectl top pods -A --sort-by=memory --no-headers | head -20"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Show resource requests/limits for all pods in a namespace",
    "command": "kubectl get pods -o custom-columns=\\"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Find pods with NO resource requests set (risk: can starve other workloads)",
    "command": "kubectl get pods -A -o json | \\"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Count pods per node (scheduling spread check)",
    "command": "kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Check ResourceQuotas and current consumption",
    "command": "kubectl describe resourcequota -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Check LimitRanges in effect",
    "command": "kubectl get limitrange -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "cluster-capacity--resource-planning",
    "section": "Cluster capacity & resource planning",
    "comment": "Per-node deep capacity summary (requested vs allocatable)",
    "command": "kubectl describe node <node-name> | grep -E \"cpu|memory|Allocated|requests|limits\" | head -30"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": "kubectl client and Kubernetes API server version",
    "command": "kubectl version"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": "kubectl client and Kubernetes API server version",
    "command": "kubectl version --output=yaml"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": "Short API server version via raw endpoint",
    "command": "kubectl get --raw /version"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": "Supported API groups and versions",
    "command": "kubectl api-versions"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": "Check whether deprecated APIs appear in existing objects",
    "command": "kubectl get all -A -o yaml | grep -E 'apiVersion: (extensions/v1beta1|apps/v1beta1|apps/v1beta2)'"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "versions-and-compatibility-version-skew",
    "section": "Versions and compatibility (version skew)",
    "comment": "kuberc: kubectl user preferences and aliases (if enabled in your kubectl version)",
    "command": "kubectl options | grep -i kuberc"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get pods by status (Running, Pending, Failed)",
    "command": "kubectl get pods --field-selector=status.phase=Running"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get pods by status (Running, Pending, Failed)",
    "command": "kubectl get pods --field-selector=status.phase=Failed -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get pods on a specific node",
    "command": "kubectl get pods --field-selector=spec.nodeName=<node-name> -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get pods NOT in Running state",
    "command": "kubectl get pods --field-selector='status.phase!=Running' -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Combine multiple field selectors",
    "command": "kubectl get pods --field-selector=status.phase=Running,spec.nodeName=<node-name>"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get services of specific type",
    "command": "kubectl get services --field-selector=spec.type=LoadBalancer -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get events of specific type (Warning/Normal)",
    "command": "kubectl get events --field-selector=type=Warning -A"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get events for specific object",
    "command": "kubectl get events --field-selector=involvedObject.name=<pod-name>,involvedObject.kind=Pod"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Watch resources in real-time (--watch)",
    "command": "kubectl get pods --watch"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Watch resources in real-time (--watch)",
    "command": "kubectl get pods -w"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Watch with specific field selector",
    "command": "kubectl get pods --field-selector=status.phase=Pending -w"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get with label selector (multiple labels)",
    "command": "kubectl get pods -l 'app=myapp,tier=backend'"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get with label selector (multiple labels)",
    "command": "kubectl get pods -l 'app in (frontend,backend)'"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get with label selector (multiple labels)",
    "command": "kubectl get pods -l 'app notin (legacy)'"
  },
  {
    "lang": "eng",
    "category": "cluster",
    "file": "eng/cluster.md",
    "hash": "field-selectors-and-filtering",
    "section": "Field selectors and filtering",
    "comment": "Get with label selector (multiple labels)",
    "command": "kubectl get pods -l '!deprecated'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Apply configuration from file",
    "command": "kubectl apply -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Apply all yaml files from directory",
    "command": "kubectl apply -f ./configs/"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Apply configuration from URL",
    "command": "kubectl apply -f https://example.com/config.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create namespace",
    "command": "kubectl create namespace <namespace-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create namespace",
    "command": "kubectl create ns <namespace-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create deployment imperatively",
    "command": "kubectl create deployment <name> --image=<image>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create service",
    "command": "kubectl create service clusterip <name> --tcp=80:8080"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create configmap from file",
    "command": "kubectl create configmap <name> --from-file=config.txt"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create configmap from literal",
    "command": "kubectl create configmap <name> --from-literal=key=value"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create secret from literal",
    "command": "kubectl create secret generic <name> --from-literal=password=secret123"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "creating-and-applying-resources-applycreate",
    "section": "Creating and applying resources (apply/create)",
    "comment": "Create secret for docker registry",
    "command": "kubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<pass>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "editing-resources-edit",
    "section": "Editing resources (edit)",
    "comment": "Edit deployment in default editor",
    "command": "kubectl edit deployment <deployment-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "editing-resources-edit",
    "section": "Editing resources (edit)",
    "comment": "Edit service",
    "command": "kubectl edit service <service-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "editing-resources-edit",
    "section": "Editing resources (edit)",
    "comment": "Edit configmap",
    "command": "kubectl edit configmap <configmap-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "editing-resources-edit",
    "section": "Editing resources (edit)",
    "comment": "Edit in specific namespace",
    "command": "kubectl edit deployment <deployment-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "editing-resources-edit",
    "section": "Editing resources (edit)",
    "comment": "Use specific editor",
    "command": "KUBE_EDITOR=\"nano\" kubectl edit deployment <deployment-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": "Change replica count via patch",
    "command": "kubectl patch deployment <deployment-name> -p '{\"spec\":{\"replicas\":3}}'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": "Change container image",
    "command": "kubectl patch deployment <deployment-name> -p '{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"<container>\",\"image\":\"nginx:1.21\"}]}}}}'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": "Merge patch format",
    "command": "kubectl patch deployment <deployment-name> --type=merge -p '{\"spec\":{\"replicas\":5}}'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": "JSON patch format",
    "command": "kubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"replace\",\"path\":\"/spec/replicas\",\"value\":2}]'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": "Add environment variable",
    "command": "kubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"NEW_VAR\",\"value\":\"value\"}}]'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "patching-resources-patch",
    "section": "Patching resources (patch)",
    "comment": "Change service type",
    "command": "kubectl patch svc <service-name> -p '{\"spec\":{\"type\":\"NodePort\"}}'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change container image",
    "command": "kubectl set image deployment/<deployment-name> <container-name>=nginx:1.21"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change image for all containers",
    "command": "kubectl set image deployment/<deployment-name> *=nginx:1.21"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change image and explicitly record the change reason in an annotation",
    "command": "kubectl set image deployment/<deployment-name> nginx=nginx:1.21"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change image and explicitly record the change reason in an annotation",
    "command": "kubectl annotate deployment/<deployment-name> kubernetes.io/change-cause=\"nginx=nginx:1.21\" --overwrite"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Add environment variable",
    "command": "kubectl set env deployment/<deployment-name> ENV_VAR=value"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Add multiple variables",
    "command": "kubectl set env deployment/<deployment-name> VAR1=value1 VAR2=value2"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Remove environment variable",
    "command": "kubectl set env deployment/<deployment-name> ENV_VAR-"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Set variable from secret",
    "command": "kubectl set env deployment/<deployment-name> --from=secret/mysecret"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Set variable from configmap",
    "command": "kubectl set env deployment/<deployment-name> --from=configmap/myconfig"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change resource limits",
    "command": "kubectl set resources deployment/<deployment-name> -c=nginx --limits=cpu=200m,memory=512Mi"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change resource requests",
    "command": "kubectl set resources deployment/<deployment-name> -c=nginx --requests=cpu=100m,memory=256Mi"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change service account",
    "command": "kubectl set serviceaccount deployment/<deployment-name> myserviceaccount"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "quick-resource-modification-set",
    "section": "Quick resource modification (set)",
    "comment": "Change selector for service",
    "command": "kubectl set selector service/<service-name> app=myapp,tier=frontend"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete pod",
    "command": "kubectl delete pod <pod-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete deployment",
    "command": "kubectl delete deployment <deployment-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete service",
    "command": "kubectl delete service <service-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete resources from file",
    "command": "kubectl delete -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete all resources by label",
    "command": "kubectl delete pods -l app=myapp"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete namespace (and all resources in it)",
    "command": "kubectl delete namespace <namespace-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Force delete pod: use only when normal deletion is stuck",
    "command": "kubectl delete pod <pod-name> --force --grace-period=0"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "deleting-resources-delete",
    "section": "Deleting resources (delete)",
    "comment": "Delete all pods in namespace",
    "command": "kubectl delete pods --all -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Compare local file with current state in cluster",
    "command": "kubectl diff -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Compare all files from directory",
    "command": "kubectl diff -f ./configs/"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Compare configuration from URL",
    "command": "kubectl diff -f https://example.com/config.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Compare using kustomize",
    "command": "kubectl diff -k ./overlays/production/"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Show diff before apply (useful in CI/CD)",
    "command": "kubectl diff -f deployment.yaml && kubectl apply -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Diff with server-side",
    "command": "kubectl diff -f deployment.yaml --server-side"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Check configuration without applying (dry-run + diff)",
    "command": "kubectl apply -f deployment.yaml --dry-run=server"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Check configuration without applying (dry-run + diff)",
    "command": "kubectl apply -f deployment.yaml --dry-run=client"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Validate file without applying",
    "command": "kubectl apply --validate=true --dry-run=client -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "comparing-configurations-diff",
    "section": "Comparing configurations (diff)",
    "comment": "Check what will change on delete",
    "command": "kubectl delete -f deployment.yaml --dry-run=client"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Apply using server-side apply — preferred for GitOps and multi-actor environments",
    "command": "kubectl apply -f deployment.yaml --server-side"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "SSA with a named field manager (label who owns each field)",
    "command": "kubectl apply -f deployment.yaml --server-side --field-manager=argocd"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Force-take ownership of conflicting fields from another field manager",
    "command": "kubectl apply -f deployment.yaml --server-side --force-conflicts"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Dry-run with server-side logic (validated by the API server)",
    "command": "kubectl apply -f deployment.yaml --server-side --dry-run=server"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Diff current cluster state vs local file using server-side logic",
    "command": "kubectl diff -f deployment.yaml --server-side"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Inspect field managers on a resource",
    "command": "kubectl get deployment my-deploy -o json | jq '.metadata.managedFields'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Clean up managedFields from output for readability",
    "command": "kubectl get deployment my-deploy -o json | jq 'del(.metadata.managedFields)'"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "or with the neat plugin:",
    "command": "kubectl neat get deployment my-deploy -o yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Remove the legacy last-applied-configuration annotation after migrating to SSA",
    "command": "kubectl annotate deployment my-deploy kubectl.kubernetes.io/last-applied-configuration-"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Apply a whole directory with SSA",
    "command": "kubectl apply -f ./manifests/ --server-side --field-manager=platform-team"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Full resource replacement from file",
    "command": "kubectl replace -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Force replacement (delete and recreate)",
    "command": "kubectl replace --force -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Replace from stdin",
    "command": "cat deployment.yaml | kubectl replace -f -"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Attach to stdout/stderr of running container",
    "command": "kubectl attach <pod-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Interactive attach to container (stdin + tty)",
    "command": "kubectl attach -it <pod-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Attach to specific container",
    "command": "kubectl attach <pod-name> -c <container-name>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Attach in specific namespace",
    "command": "kubectl attach <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "Convert config between API versions (requires the separate kubectl-convert plugin)",
    "command": "kubectl convert -f deployment.yaml --output-version apps/v1"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "View completion for bash/zsh",
    "command": "kubectl completion bash"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "replace-and-attach-to-resources-replaceattach",
    "section": "Replace and attach to resources (replace/attach)",
    "comment": "View completion for bash/zsh",
    "command": "kubectl completion zsh"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for pod to become Ready",
    "command": "kubectl wait pod/<pod-name> --for=condition=Ready"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for pod with timeout (default is 30s)",
    "command": "kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for all pods with a label to be ready",
    "command": "kubectl wait pods -l app=myapp --for=condition=Ready --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for deployment to finish rollout (all replicas available)",
    "command": "kubectl wait deployment/<deploy-name> --for=condition=Available --timeout=300s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for job to complete",
    "command": "kubectl wait job/<job-name> --for=condition=Complete --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for job to fail",
    "command": "kubectl wait job/<job-name> --for=condition=Failed --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for resource deletion",
    "command": "kubectl wait pod/<pod-name> --for=delete --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for all pods with a label to be deleted",
    "command": "kubectl wait pods -l app=myapp --for=delete --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for node to become Ready",
    "command": "kubectl wait node/<node-name> --for=condition=Ready --timeout=300s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for all nodes to become Ready",
    "command": "kubectl wait nodes --all --for=condition=Ready --timeout=300s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for CRD to be established",
    "command": "kubectl wait crd/<crd-name> --for=condition=Established --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait in a specific namespace",
    "command": "kubectl wait pod/<pod-name> -n <namespace> --for=condition=Ready --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for multiple resources of the same type (by label, all namespaces)",
    "command": "kubectl wait pods -l tier=backend --for=condition=Ready --all-namespaces --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait for PVC to be Bound",
    "command": "kubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Wait on arbitrary field via jsonpath (k8s >= 1.23)",
    "command": "kubectl wait deployment/<deploy-name> \\"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "CI/CD usage example",
    "command": "kubectl apply -f deployment.yaml"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "CI/CD usage example",
    "command": "kubectl wait deployment/myapp --for=condition=Available --timeout=300s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Check multiple conditions sequentially",
    "command": "kubectl wait pod/<pod-name> --for=condition=Initialized --timeout=30s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Check multiple conditions sequentially",
    "command": "kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "management",
    "file": "eng/management.md",
    "hash": "waiting-for-conditions-wait",
    "section": "Waiting for conditions (wait)",
    "comment": "Check multiple conditions sequentially",
    "command": "kubectl wait pod/<pod-name> --for=condition=ContainersReady --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward pod port to local machine",
    "command": "kubectl port-forward <pod-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward service port",
    "command": "kubectl port-forward service/<service-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward service port",
    "command": "kubectl port-forward svc/<service-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward multiple ports",
    "command": "kubectl port-forward <pod-name> 8080:80 8443:443"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward to all interfaces (dangerous on workstations: exposes access to the network)",
    "command": "kubectl port-forward --address 0.0.0.0 <pod-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward in specific namespace",
    "command": "kubectl port-forward <pod-name> 8080:80 -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward deployment port",
    "command": "kubectl port-forward deployment/<deployment-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Let kubectl choose free local port",
    "command": "kubectl port-forward <pod-name> :80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "port-forwarding-port-forward",
    "section": "Port forwarding (port-forward)",
    "comment": "Forward StatefulSet port",
    "command": "kubectl port-forward statefulset/<statefulset-name> 8080:80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create service from deployment",
    "command": "kubectl expose deployment <deployment-name> --port=80 --target-port=8080"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create NodePort service",
    "command": "kubectl expose deployment <deployment-name> --type=NodePort --port=80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create LoadBalancer service",
    "command": "kubectl expose deployment <deployment-name> --type=LoadBalancer --port=80"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create service from pod",
    "command": "kubectl expose pod <pod-name> --port=80 --target-port=8080"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create service with custom name",
    "command": "kubectl expose deployment <deployment-name> --port=80 --name=my-service"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create service with protocol specified",
    "command": "kubectl expose deployment <deployment-name> --port=80 --protocol=TCP"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create service for multiple ports",
    "command": "kubectl expose deployment <deployment-name> --port=80,443 --target-port=8080"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create service in specific namespace",
    "command": "kubectl expose deployment <deployment-name> --port=80 -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Generate YAML without creating",
    "command": "kubectl expose deployment <deployment-name> --port=80 --dry-run=client -o yaml"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "creating-services-expose",
    "section": "Creating services (expose)",
    "comment": "Create ExternalName service",
    "command": "kubectl create service externalname <name> --external-name=db.example.com"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "List all Ingress resources",
    "command": "kubectl get ingress"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "List all Ingress resources",
    "command": "kubectl get ing"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "List Ingress in all namespaces",
    "command": "kubectl get ing -A"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Describe Ingress",
    "command": "kubectl describe ing <ingress-name>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "View Ingress as YAML",
    "command": "kubectl get ing <ingress-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Create Ingress from file",
    "command": "kubectl apply -f ingress.yaml"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Delete Ingress",
    "command": "kubectl delete ing <ingress-name>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Show Ingress with hosts and addresses",
    "command": "kubectl get ing -o custom-columns=NAME:.metadata.name,HOSTS:.spec.rules[*].host,ADDRESS:.status.loadBalancer.ingress[*].ip"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "List IngressClasses",
    "command": "kubectl get ingressclass"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "List all NetworkPolicies",
    "command": "kubectl get networkpolicy"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "List all NetworkPolicies",
    "command": "kubectl get netpol"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "List NetworkPolicies in all namespaces",
    "command": "kubectl get netpol -A"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "Describe NetworkPolicy",
    "command": "kubectl describe netpol <policy-name>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "View NetworkPolicy as YAML",
    "command": "kubectl get netpol <policy-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "Create NetworkPolicy from file",
    "command": "kubectl apply -f netpol.yaml"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "Delete NetworkPolicy",
    "command": "kubectl delete netpol <policy-name>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "network-policies-networkpolicy",
    "section": "Network Policies (networkpolicy)",
    "comment": "Check which pods are affected by NetworkPolicy",
    "command": "kubectl get pods -l <selector-from-policy>"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Start proxy to API server (localhost:8001)",
    "command": "kubectl proxy"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Proxy on specific port",
    "command": "kubectl proxy --port=8080"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Proxy accessible from all interfaces (dangerous: can expose the Kubernetes API to the network)",
    "command": "kubectl proxy --address=0.0.0.0 --accept-hosts='.*'"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Direct API access without proxy (with token)",
    "command": "kubectl get --raw /api/v1/namespaces"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Direct API access without proxy (with token)",
    "command": "kubectl get --raw /apis/apps/v1/deployments"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Check cluster health via API",
    "command": "kubectl get --raw /healthz"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Check cluster health via API",
    "command": "kubectl get --raw /readyz"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Check cluster health via API",
    "command": "kubectl get --raw /livez"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Check cluster health via API",
    "command": "kubectl get --raw '/readyz?verbose'"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Check cluster health via API",
    "command": "kubectl get --raw '/livez?verbose'"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Diagnostic API server endpoints (availability depends on permissions and cluster version)",
    "command": "kubectl get --raw /version"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Diagnostic API server endpoints (availability depends on permissions and cluster version)",
    "command": "kubectl get --raw /openapi/v2"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Get metrics (if metrics-server installed)",
    "command": "kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes"
  },
  {
    "lang": "eng",
    "category": "network",
    "file": "eng/network.md",
    "hash": "proxy-and-api-access-proxy",
    "section": "Proxy and API access (proxy)",
    "comment": "Get metrics (if metrics-server installed)",
    "command": "kubectl get --raw /apis/metrics.k8s.io/v1beta1/pods"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "List all roles in namespace",
    "command": "kubectl get roles"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "List all ClusterRoles",
    "command": "kubectl get clusterroles"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "List RoleBindings",
    "command": "kubectl get rolebindings"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "List ClusterRoleBindings",
    "command": "kubectl get clusterrolebindings"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Describe role",
    "command": "kubectl describe role <role-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Describe role",
    "command": "kubectl describe clusterrole <clusterrole-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Create role (allows get/list pods)",
    "command": "kubectl create role pod-reader --verb=get,list,watch --resource=pods"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Create ClusterRole",
    "command": "kubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Bind role to user",
    "command": "kubectl create rolebinding <binding-name> --role=pod-reader --user=<username>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Bind role to ServiceAccount",
    "command": "kubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Bind ClusterRole to user (cluster-wide)",
    "command": "kubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Create ServiceAccount",
    "command": "kubectl create serviceaccount <sa-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "List ServiceAccounts",
    "command": "kubectl get serviceaccounts"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "List ServiceAccounts",
    "command": "kubectl get sa"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Describe ServiceAccount",
    "command": "kubectl describe sa <sa-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Check own permissions",
    "command": "kubectl auth can-i --list"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Check specific permission",
    "command": "kubectl auth can-i create pods"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Check specific permission",
    "command": "kubectl auth can-i delete deployments -n production"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Check permissions for another user",
    "command": "kubectl auth can-i create pods --as=<username>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Check permissions for ServiceAccount",
    "command": "kubectl auth can-i create pods --as=system:serviceaccount:<namespace>:<sa-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Legacy: get ServiceAccount token from Secret (only for k8s < 1.24 clusters)",
    "command": "kubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Preferred: create a short-lived ServiceAccount token (k8s >= 1.24)",
    "command": "kubectl create token <sa-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "rbac---roles-and-access-control",
    "section": "RBAC - Roles and Access Control",
    "comment": "Create token with custom TTL",
    "command": "kubectl create token <sa-name> --duration=24h"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Check if you can perform an action in the current namespace",
    "command": "kubectl auth can-i get pods"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Check if you can perform an action in the current namespace",
    "command": "kubectl auth can-i create deployments"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Check if you can perform an action in the current namespace",
    "command": "kubectl auth can-i delete secrets"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Check in a specific namespace",
    "command": "kubectl auth can-i get pods -n kube-system"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Check in all namespaces",
    "command": "kubectl auth can-i get pods --all-namespaces"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "List all actions you are allowed to perform in current namespace",
    "command": "kubectl auth can-i --list"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "List all actions you are allowed to perform in current namespace",
    "command": "kubectl auth can-i --list -n staging"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Impersonate another user to check their permissions",
    "command": "kubectl auth can-i get pods --as dev-user"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Impersonate another user to check their permissions",
    "command": "kubectl auth can-i get pods --as system:serviceaccount:default:mysa"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Impersonate a group",
    "command": "kubectl auth can-i get pods --as-group system:masters --as fake-user"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Check if a ServiceAccount can do something (useful for debugging workloads)",
    "command": "kubectl auth can-i list pods \\"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Show current identity (user, groups, extra)",
    "command": "kubectl auth whoami"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Reconcile RBAC objects from a file (applies missing rules, non-destructive)",
    "command": "kubectl auth reconcile -f rbac-manifest.yaml"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "checking-permissions-auth",
    "section": "Checking permissions (auth)",
    "comment": "Dry-run reconcile to preview changes",
    "command": "kubectl auth reconcile -f rbac-manifest.yaml --dry-run=client"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "List all CSRs in cluster",
    "command": "kubectl get csr"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "List all CSRs in cluster",
    "command": "kubectl get certificatesigningrequests"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Show CSR with status and signer",
    "command": "kubectl get csr -o custom-columns=NAME:.metadata.name,AGE:.metadata.creationTimestamp,SIGNERNAME:.spec.signerName,REQUESTOR:.spec.username,CONDITION:.status.conditions[0].type"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Describe CSR (shows subject, usages, events)",
    "command": "kubectl describe csr <csr-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Approve a CSR",
    "command": "kubectl certificate approve <csr-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Deny a CSR",
    "command": "kubectl certificate deny <csr-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Delete a CSR",
    "command": "kubectl delete csr <csr-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Create a CSR object from a PEM file (k8s >= 1.18)",
    "command": "cat <<EOF | kubectl apply -f -"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "Retrieve the signed certificate after approval",
    "command": "kubectl get csr <csr-name> -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "1. Generate private key and CSR with openssl",
    "command": "openssl genrsa -out my-user.key 2048"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "1. Generate private key and CSR with openssl",
    "command": "openssl req -new -key my-user.key -out my-user.csr -subj \"/CN=my-user/O=my-group\""
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "3. Approve",
    "command": "kubectl certificate approve my-user"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "4. Fetch signed cert",
    "command": "kubectl get csr my-user -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "5. Add user to kubeconfig",
    "command": "kubectl config set-credentials my-user --client-key=my-user.key --client-certificate=my-user.crt --embed-certs=true"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "certificate-signing-requests-csr",
    "section": "Certificate Signing Requests (CSR)",
    "comment": "5. Add user to kubeconfig",
    "command": "kubectl config set-context my-user-context --cluster=<cluster-name> --user=my-user"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Check current Pod Security labels on a namespace",
    "command": "kubectl get ns <namespace> --show-labels"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Check current Pod Security labels on a namespace",
    "command": "kubectl get ns <namespace> -o jsonpath='{.metadata.labels.pod-security\\.kubernetes\\.io/enforce}'"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Enable enforce=baseline mode",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce=baseline --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Enable enforce=restricted mode (stricter)",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce=restricted --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Add warn/audit modes for soft validation",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/warn=restricted --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Add warn/audit modes for soft validation",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/audit=restricted --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Pin policy version to your cluster minor version",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce-version=v<cluster-minor> --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Pin policy version to your cluster minor version",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/warn-version=v<cluster-minor> --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Pin policy version to your cluster minor version",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/audit-version=v<cluster-minor> --overwrite"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Remove PSS labels from namespace",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce-"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Remove PSS labels from namespace",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/warn-"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Remove PSS labels from namespace",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/audit-"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Check warnings on apply (if policy is violated)",
    "command": "kubectl apply -f pod.yaml -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Inspect pod securityContext quickly",
    "command": "kubectl get pod <pod-name> -n <namespace> -o yaml | grep -A 40 -E 'securityContext|runAsNonRoot|privileged|allowPrivilegeEscalation|capabilities'"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "View securityContext of a running pod",
    "command": "kubectl get pod <pod-name> -o yaml | grep -A 20 securityContext"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Check if pods run as root across all namespaces",
    "command": "kubectl get pods -A -o jsonpath='{range .items[*]}{.metadata.namespace}{\" \"}{.metadata.name}{\" runAsUser:\"}{.spec.securityContext.runAsUser}{\"\\n\"}{end}'"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Show uid / non-root flag per pod",
    "command": "kubectl get pods -n <namespace> -o custom-columns=NAME:.metadata.name,UID:.spec.securityContext.runAsUser,NON_ROOT:.spec.securityContext.runAsNonRoot"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Find privileged containers in cluster",
    "command": "kubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | \"\\(.metadata.namespace)/\\(.metadata.name)\"'"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Check hostNetwork / hostPID usage",
    "command": "kubectl get pods -A -o custom-columns=NS:.metadata.namespace,NAME:.metadata.name,HOST_NET:.spec.hostNetwork,HOST_PID:.spec.hostPID | grep -v '<none>'"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Verify readOnlyRootFilesystem is set (write attempt will fail):",
    "command": "kubectl exec <pod-name> -- touch /test-write"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "List all PDBs",
    "command": "kubectl get poddisruptionbudget"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "List all PDBs",
    "command": "kubectl get pdb"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "List in all namespaces",
    "command": "kubectl get pdb -A"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Describe PDB",
    "command": "kubectl describe pdb <pdb-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "View PDB as YAML",
    "command": "kubectl get pdb <pdb-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Create PDB from file",
    "command": "kubectl apply -f pdb.yaml"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Delete PDB",
    "command": "kubectl delete pdb <pdb-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Show PDB with disruption allowed status",
    "command": "kubectl get pdb -o custom-columns=NAME:.metadata.name,MIN-AVAILABLE:.spec.minAvailable,MAX-UNAVAILABLE:.spec.maxUnavailable,ALLOWED:.status.disruptionsAllowed"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "List ResourceQuotas in namespace",
    "command": "kubectl get resourcequota"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "List ResourceQuotas in namespace",
    "command": "kubectl get quota"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "List in all namespaces",
    "command": "kubectl get quota -A"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "Describe ResourceQuota (shows used vs limit)",
    "command": "kubectl describe quota <quota-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "Create ResourceQuota from file",
    "command": "kubectl apply -f quota.yaml"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "Delete ResourceQuota",
    "command": "kubectl delete quota <quota-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "List LimitRanges",
    "command": "kubectl get limitrange"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "List LimitRanges",
    "command": "kubectl get limits"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "Describe LimitRange",
    "command": "kubectl describe limits <limitrange-name>"
  },
  {
    "lang": "eng",
    "category": "security",
    "file": "eng/security.md",
    "hash": "resourcequota-and-limitrange",
    "section": "ResourceQuota and LimitRange",
    "comment": "Create LimitRange from file",
    "command": "kubectl apply -f limitrange.yaml"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "List all ConfigMaps in current namespace",
    "command": "kubectl get configmaps"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "List all ConfigMaps in current namespace",
    "command": "kubectl get cm"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "List in all namespaces",
    "command": "kubectl get cm -A"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Describe ConfigMap",
    "command": "kubectl describe cm <configmap-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "View ConfigMap as YAML",
    "command": "kubectl get cm <configmap-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Create ConfigMap from literal values",
    "command": "kubectl create configmap <name> --from-literal=key1=value1 --from-literal=key2=value2"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Create ConfigMap from file (filename becomes the key)",
    "command": "kubectl create configmap <name> --from-file=config.txt"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Create ConfigMap from file with custom key",
    "command": "kubectl create configmap <name> --from-file=mykey=config.txt"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Create ConfigMap from directory (all files become keys)",
    "command": "kubectl create configmap <name> --from-file=./configs/"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Create ConfigMap from env file (.env format)",
    "command": "kubectl create configmap <name> --from-env-file=.env"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Edit ConfigMap",
    "command": "kubectl edit cm <configmap-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Delete ConfigMap",
    "command": "kubectl delete cm <configmap-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Get value of a specific key",
    "command": "kubectl get cm <configmap-name> -o jsonpath='{.data.key}'"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "List all keys in ConfigMap",
    "command": "kubectl get cm <configmap-name> -o go-template='{{range $k,$v := .data}}{{$k}}{{\"\\n\"}}{{end}}'"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Update ConfigMap idempotently (dry-run + apply)",
    "command": "kubectl create configmap <name> --from-file=config.txt --dry-run=client -o yaml | kubectl apply -f -"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Show all ConfigMaps with key count",
    "command": "kubectl get cm -o custom-columns=NAME:.metadata.name,KEYS:.data"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "List secrets in current namespace",
    "command": "kubectl get secrets"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "List secrets in all namespaces",
    "command": "kubectl get secrets -A"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Describe secret metadata (without decoded values)",
    "command": "kubectl describe secret <secret-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "View secret as YAML",
    "command": "kubectl get secret <secret-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Decode one key from secret",
    "command": "kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Create generic secret from literal values",
    "command": "kubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=changeme"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Create secret from file",
    "command": "kubectl create secret generic <secret-name> --from-file=./config.env"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Create TLS secret",
    "command": "kubectl create secret tls <secret-name> --cert=tls.crt --key=tls.key"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Update secret from file (apply declaratively)",
    "command": "kubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "secrets-management-secret",
    "section": "Secrets management (secret)",
    "comment": "Delete secret",
    "command": "kubectl delete secret <secret-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "List all PersistentVolumes (cluster-wide)",
    "command": "kubectl get pv"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "List all PersistentVolumeClaims",
    "command": "kubectl get pvc"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "List PVCs in all namespaces",
    "command": "kubectl get pvc -A"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Detailed info about PV",
    "command": "kubectl describe pv <pv-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Detailed info about PVC",
    "command": "kubectl describe pvc <pvc-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "List StorageClasses",
    "command": "kubectl get storageclass"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "List StorageClasses",
    "command": "kubectl get sc"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Describe StorageClass",
    "command": "kubectl describe sc <storageclass-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Create PVC from file",
    "command": "kubectl apply -f pvc.yaml"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Delete PVC",
    "command": "kubectl delete pvc <pvc-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Delete PV",
    "command": "kubectl delete pv <pv-name>"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Get PV sorted by capacity",
    "command": "kubectl get pv --sort-by=.spec.capacity.storage"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Show PVC with volume name and storage class",
    "command": "kubectl get pvc -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,VOLUME:.spec.volumeName,CAPACITY:.status.capacity.storage,CLASS:.spec.storageClassName"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Check which pod is using PVC",
    "command": "kubectl get pods -o json | grep -i \"claimName\""
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "PV reclaim policy types: Retain, Recycle, Delete",
    "command": "kubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy,STATUS:.status.phase"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Change PV reclaim policy",
    "command": "kubectl patch pv <pv-name> -p '{\"spec\":{\"persistentVolumeReclaimPolicy\":\"Retain\"}}'"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "persistent-volumes-pvpvc",
    "section": "Persistent Volumes (pv/pvc)",
    "comment": "Force delete stuck PVC (remove finalizers)",
    "command": "kubectl patch pvc <pvc-name> -p '{\"metadata\":{\"finalizers\":null}}'"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "working-with-kustomize-kustomize",
    "section": "Working with Kustomize (kustomize)",
    "comment": "Apply configuration via kustomize",
    "command": "kubectl apply -k ./overlays/production/"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "working-with-kustomize-kustomize",
    "section": "Working with Kustomize (kustomize)",
    "comment": "Preview final YAML without applying",
    "command": "kubectl kustomize ./overlays/production/"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "working-with-kustomize-kustomize",
    "section": "Working with Kustomize (kustomize)",
    "comment": "Delete resources via kustomize",
    "command": "kubectl delete -k ./overlays/production/"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "working-with-kustomize-kustomize",
    "section": "Working with Kustomize (kustomize)",
    "comment": "Diff with kustomize",
    "command": "kubectl diff -k ./overlays/production/"
  },
  {
    "lang": "eng",
    "category": "storage",
    "file": "eng/storage.md",
    "hash": "working-with-kustomize-kustomize",
    "section": "Working with Kustomize (kustomize)",
    "comment": "Apply base configuration",
    "command": "kubectl apply -k ./base/"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Execute command in pod",
    "command": "kubectl exec <pod-name> -- <command>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Example: list files",
    "command": "kubectl exec <pod-name> -- ls -la"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Interactive shell in pod",
    "command": "kubectl exec -it <pod-name> -- /bin/bash"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Interactive shell in pod",
    "command": "kubectl exec -it <pod-name> -- /bin/sh"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Exec into specific container (if multiple)",
    "command": "kubectl exec -it <pod-name> -c <container-name> -- /bin/bash"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Exec in specific namespace",
    "command": "kubectl exec -it <pod-name> -n <namespace> -- /bin/bash"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "View environment variables",
    "command": "kubectl exec <pod-name> -- env"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "Check network connectivity from inside pod",
    "command": "kubectl exec <pod-name> -- curl -s http://service-name:port"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "execute-commands-in-container-exec",
    "section": "Execute commands in container (exec)",
    "comment": "View file contents",
    "command": "kubectl exec <pod-name> -- cat /path/to/file"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "copying-files-cp",
    "section": "Copying files (cp)",
    "comment": "Copy file from pod to local machine",
    "command": "kubectl cp <pod-name>:/path/to/file ./local-file"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "copying-files-cp",
    "section": "Copying files (cp)",
    "comment": "Copy file to pod",
    "command": "kubectl cp ./local-file <pod-name>:/path/to/file"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "copying-files-cp",
    "section": "Copying files (cp)",
    "comment": "Copy with namespace specified",
    "command": "kubectl cp <namespace>/<pod-name>:/path/to/file ./local-file"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "copying-files-cp",
    "section": "Copying files (cp)",
    "comment": "Copy directory from pod",
    "command": "kubectl cp <pod-name>:/path/to/dir ./local-dir"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "copying-files-cp",
    "section": "Copying files (cp)",
    "comment": "Copy from specific container",
    "command": "kubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Add label to pod",
    "command": "kubectl label pod <pod-name> environment=production"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Add label to node",
    "command": "kubectl label node <node-name> disktype=ssd"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Remove label (minus at the end)",
    "command": "kubectl label pod <pod-name> environment-"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Overwrite existing label",
    "command": "kubectl label pod <pod-name> environment=staging --overwrite"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Add annotation",
    "command": "kubectl annotate pod <pod-name> description=\"My pod\""
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Remove annotation",
    "command": "kubectl annotate pod <pod-name> description-"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Show labels for all pods",
    "command": "kubectl get pods --show-labels"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Filter by label",
    "command": "kubectl get pods -l environment=production"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "working-with-labels-labelannotate",
    "section": "Working with labels (label/annotate)",
    "comment": "Filter by label",
    "command": "kubectl get pods -l 'environment in (production,staging)'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get IP addresses of all pods",
    "command": "kubectl get pods -o jsonpath='{.items[*].status.podIP}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get names of all pods",
    "command": "kubectl get pods -o jsonpath='{.items[*].metadata.name}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get image of each pod (with newline)",
    "command": "kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.spec.containers[0].image}{\"\\n\"}{end}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get node names and their IPs",
    "command": "kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.status.addresses[0].address}{\"\\n\"}{end}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get External IP of nodes",
    "command": "kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Custom columns",
    "command": "kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Custom columns with IP",
    "command": "kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get all images in cluster",
    "command": "kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get decoded secret value",
    "command": "kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "advanced-output-jsonpathcustom-columns",
    "section": "Advanced output (jsonpath/custom-columns)",
    "comment": "Get service endpoint addresses",
    "command": "kubectl get endpoints <service-name> -o jsonpath='{.subsets[*].addresses[*].ip}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "pod-scheduling-affinity--tolerations--nodeselector",
    "section": "Pod Scheduling (affinity / tolerations / nodeSelector)",
    "comment": "List nodes with their labels (to find scheduling targets)",
    "command": "kubectl get nodes --show-labels"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "pod-scheduling-affinity--tolerations--nodeselector",
    "section": "Pod Scheduling (affinity / tolerations / nodeSelector)",
    "comment": "List nodes with their labels (to find scheduling targets)",
    "command": "kubectl get nodes -l disktype=ssd"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "pod-scheduling-affinity--tolerations--nodeselector",
    "section": "Pod Scheduling (affinity / tolerations / nodeSelector)",
    "comment": "Add label to node for scheduling",
    "command": "kubectl label node <node-name> disktype=ssd"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "pod-scheduling-affinity--tolerations--nodeselector",
    "section": "Pod Scheduling (affinity / tolerations / nodeSelector)",
    "comment": "Show taints on all nodes",
    "command": "kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "pod-scheduling-affinity--tolerations--nodeselector",
    "section": "Pod Scheduling (affinity / tolerations / nodeSelector)",
    "comment": "Check why pod is Pending / not scheduled",
    "command": "kubectl describe pod <pod-name> | grep -A 20 Events"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Generate YAML template without creating resource (dry-run)",
    "command": "kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Generate YAML template without creating resource (dry-run)",
    "command": "kubectl run my-pod --image=nginx --dry-run=client -o yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Apply with prune (delete resources not in files)",
    "command": "kubectl apply -f ./configs/ --prune -l app=myapp"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Force re-pull of image by restarting deployment",
    "command": "kubectl rollout restart deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Watch rollout progress",
    "command": "kubectl rollout status deployment/<deployment-name> --watch"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Get resource version (useful for optimistic locking)",
    "command": "kubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Get all container images running in cluster",
    "command": "kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Find pods that are NOT ready",
    "command": "kubectl get pods -A --no-headers | awk '$3 != $4 || $5 != \"Running\"'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Delete all failed pods across all namespaces",
    "command": "kubectl delete pods --field-selector=status.phase=Failed -A"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Get pods restarted more than N times",
    "command": "kubectl get pods -A --no-headers | awk '$5 > 5'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Copy kubeconfig context to another file",
    "command": "KUBECONFIG=~/.kube/config:~/.kube/other-config kubectl config view --flatten > ~/.kube/merged-config"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Exec one-liner into first pod matching a label",
    "command": "kubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Get logs from all pods of a deployment",
    "command": "kubectl logs -l app=<label-value> --all-containers=true --prefix=true"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Sort pods by restart count",
    "command": "kubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Sort pods by age (newest first)",
    "command": "kubectl get pods --sort-by=.metadata.creationTimestamp"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Check which nodes have the most pods",
    "command": "kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "tips-and-useful-patterns",
    "section": "Tips and useful patterns",
    "comment": "Apply multiple files at once using stdin",
    "command": "cat deployment.yaml service.yaml | kubectl apply -f -"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Add a chart repository",
    "command": "helm repo add bitnami https://charts.bitnami.com/bitnami"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Add a chart repository",
    "command": "helm repo add stable https://charts.helm.sh/stable"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Update all repositories",
    "command": "helm repo update"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "List added repositories",
    "command": "helm repo list"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Search for a chart in repos",
    "command": "helm search repo nginx"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Search for a chart in repos",
    "command": "helm search repo nginx --versions"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Search in Artifact Hub",
    "command": "helm search hub nginx"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Show default values for a chart",
    "command": "helm show values bitnami/nginx"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Install a release",
    "command": "helm install <release-name> bitnami/nginx"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Install with custom values file",
    "command": "helm install <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Install with inline value overrides",
    "command": "helm install <release-name> bitnami/nginx --set replicaCount=2 --set service.type=NodePort"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Install in specific namespace (create if missing)",
    "command": "helm install <release-name> bitnami/nginx -n <namespace> --create-namespace"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Preview manifests without installing (dry-run)",
    "command": "helm install <release-name> bitnami/nginx --dry-run --debug"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "List all releases",
    "command": "helm list"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "List all releases",
    "command": "helm list -A"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "List all releases",
    "command": "helm list -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Show status of a release",
    "command": "helm status <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Get current values of a deployed release",
    "command": "helm get values <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Get all rendered manifests of a release",
    "command": "helm get manifest <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Upgrade a release",
    "command": "helm upgrade <release-name> bitnami/nginx"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Upgrade a release",
    "command": "helm upgrade <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Install if not exists, upgrade if exists",
    "command": "helm upgrade --install <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "View release history",
    "command": "helm history <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Rollback to previous revision",
    "command": "helm rollback <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Rollback to specific revision",
    "command": "helm rollback <release-name> 2"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Uninstall a release",
    "command": "helm uninstall <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Uninstall a release",
    "command": "helm uninstall <release-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Keep history after uninstall",
    "command": "helm uninstall <release-name> --keep-history"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Render templates locally without a cluster",
    "command": "helm template <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Render and save to file",
    "command": "helm template <release-name> bitnami/nginx -f values.yaml > rendered.yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Lint a chart for errors",
    "command": "helm lint ./my-chart"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Create a new chart scaffold",
    "command": "helm create my-chart"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Package a chart into .tgz",
    "command": "helm package ./my-chart"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Download chart source to local directory",
    "command": "helm pull bitnami/nginx --untar"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Run chart tests (test hooks)",
    "command": "helm test <release-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "List installed plugins",
    "command": "kubectl krew list"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "Search for plugins",
    "command": "kubectl krew search <keyword>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "Install a plugin",
    "command": "kubectl krew install <plugin-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "Update all installed plugins",
    "command": "kubectl krew upgrade"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "Uninstall a plugin",
    "command": "kubectl krew uninstall <plugin-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl ctx      - fast context switching (kubectx)",
    "command": "kubectl ctx"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl ctx      - fast context switching (kubectx)",
    "command": "kubectl ctx <context-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl ns       - fast namespace switching (kubens)",
    "command": "kubectl ns"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl ns       - fast namespace switching (kubens)",
    "command": "kubectl ns <namespace>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl neat     - clean up verbose YAML output",
    "command": "kubectl neat get pod <pod-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl tree     - show resource owner hierarchy",
    "command": "kubectl tree deployment <deployment-name>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl stern    - multi-pod log tailing",
    "command": "kubectl stern <pod-pattern>"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl stern    - multi-pod log tailing",
    "command": "kubectl stern -l app=myapp"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl df-pv    - show disk usage for PersistentVolumes",
    "command": "kubectl df-pv"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "kubectl-plugins-krew",
    "section": "kubectl plugins (krew)",
    "comment": "kubectl whoami   - show current user/service account identity",
    "command": "kubectl whoami"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Enable kubectl autocompletion — bash",
    "command": "source <(kubectl completion bash)"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Enable kubectl autocompletion — bash",
    "command": "echo 'source <(kubectl completion bash)' >> ~/.bashrc"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Enable kubectl autocompletion — zsh",
    "command": "source <(kubectl completion zsh)"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Enable kubectl autocompletion — zsh",
    "command": "echo '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Alias k=kubectl and keep completion working",
    "command": "alias k=kubectl"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Alias k=kubectl and keep completion working",
    "command": "complete -o default -F __start_kubectl k   # bash"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Alias k=kubectl and keep completion working",
    "command": "compdef k=kubectl                           # zsh"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kgp='kubectl get pods'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kgpa='kubectl get pods -A'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kgpw='kubectl get pods -w'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kgs='kubectl get svc'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kgn='kubectl get nodes'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kgd='kubectl get deploy'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kge='kubectl get events --sort-by=.lastTimestamp'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kdp='kubectl describe pod'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kdd='kubectl describe deployment'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kl='kubectl logs'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias klf='kubectl logs -f'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kex='kubectl exec -it'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kaf='kubectl apply -f'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Common daily-use aliases",
    "command": "alias kdf='kubectl delete -f'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Switch namespace without kubens",
    "command": "alias kns='kubectl config set-context --current --namespace'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Switch context without kubectx",
    "command": "alias kctx='kubectl config use-context'"
  },
  {
    "lang": "eng",
    "category": "utilities",
    "file": "eng/utilities.md",
    "hash": "shell-aliases--autocompletion",
    "section": "Shell aliases & autocompletion",
    "comment": "Show current context + namespace at a glance",
    "command": "alias kwhere='echo \"context: $(kubectl config current-context)\" && echo \"namespace: $(kubectl config view --minify -o jsonpath={.contexts[0].context.namespace})\"'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of all pods in current namespace",
    "command": "kubectl get pods"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of pods in all namespaces",
    "command": "kubectl get pods --all-namespaces"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of pods in all namespaces",
    "command": "kubectl get pods -A"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of pods with extended info (IP, node)",
    "command": "kubectl get pods -o wide"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of all services",
    "command": "kubectl get services"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of all services",
    "command": "kubectl get svc"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of all deployments",
    "command": "kubectl get deployments"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of all deployments",
    "command": "kubectl get deploy"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get all resources in namespace",
    "command": "kubectl get all"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get resource info in YAML format",
    "command": "kubectl get pod <pod-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get resource info in JSON format",
    "command": "kubectl get pod <pod-name> -o json"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of cluster nodes",
    "command": "kubectl get nodes"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of namespaces",
    "command": "kubectl get namespaces"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "getting-information-get",
    "section": "Getting information (get)",
    "comment": "Get list of namespaces",
    "command": "kubectl get ns"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a pod",
    "command": "kubectl describe pod <pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a node",
    "command": "kubectl describe node <node-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a service",
    "command": "kubectl describe service <service-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a service",
    "command": "kubectl describe svc <service-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a deployment",
    "command": "kubectl describe deployment <deployment-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a configmap",
    "command": "kubectl describe configmap <configmap-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a configmap",
    "command": "kubectl describe cm <configmap-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about a secret",
    "command": "kubectl describe secret <secret-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Detailed info about an ingress",
    "command": "kubectl describe ingress <ingress-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "detailed-information-describe",
    "section": "Detailed information (describe)",
    "comment": "Describe in specific namespace",
    "command": "kubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Pod logs",
    "command": "kubectl logs <pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs of specific container in pod (if multiple containers)",
    "command": "kubectl logs <pod-name> -c <container-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Real-time logs (follow)",
    "command": "kubectl logs -f <pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Last N lines of logs",
    "command": "kubectl logs --tail=100 <pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs from last hour",
    "command": "kubectl logs --since=1h <pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs from last 30 minutes",
    "command": "kubectl logs --since=30m <pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs of previous container (after restart)",
    "command": "kubectl logs <pod-name> --previous"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs of previous container (after restart)",
    "command": "kubectl logs <pod-name> -p"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs of all pods by label",
    "command": "kubectl logs -l app=myapp"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Logs in specific namespace",
    "command": "kubectl logs <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "viewing-logs-logs",
    "section": "Viewing logs (logs)",
    "comment": "Combination: follow + tail + namespace",
    "command": "kubectl logs -f --tail=50 <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Node resource usage",
    "command": "kubectl top nodes"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Pod resource usage",
    "command": "kubectl top pods"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Top pods in all namespaces",
    "command": "kubectl top pods -A"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Top pods in specific namespace",
    "command": "kubectl top pods -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Top sorted by CPU",
    "command": "kubectl top pods --sort-by=cpu"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Top sorted by memory",
    "command": "kubectl top pods --sort-by=memory"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "resource-monitoring-top",
    "section": "Resource monitoring (top)",
    "comment": "Top for containers inside pods",
    "command": "kubectl top pods --containers"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Create debug container in existing pod",
    "command": "kubectl debug <pod-name> -it --image=busybox"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Create pod copy for debugging",
    "command": "kubectl debug <pod-name> -it --image=busybox --copy-to=debug-pod"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Debug node (creates privileged pod on node)",
    "command": "kubectl debug node/<node-name> -it --image=ubuntu"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "View events in namespace",
    "command": "kubectl get events"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Events sorted by time",
    "command": "kubectl get events --sort-by='.lastTimestamp'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Events for specific pod",
    "command": "kubectl get events --field-selector involvedObject.name=<pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check API server status",
    "command": "kubectl cluster-info"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Detailed cluster information",
    "command": "kubectl cluster-info dump"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check API access",
    "command": "kubectl auth can-i create pods"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check API access",
    "command": "kubectl auth can-i delete deployments --namespace=production"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check access for another user",
    "command": "kubectl auth can-i create pods --as=<user>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "List all permissions",
    "command": "kubectl auth can-i --list"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check why pod is not starting",
    "command": "kubectl describe pod <pod-name> | grep -A 10 Events"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check API server health endpoints",
    "command": "kubectl get --raw='/readyz?verbose'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check API server health endpoints",
    "command": "kubectl get --raw='/livez?verbose'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "debugging-and-diagnostics-debug",
    "section": "Debugging and diagnostics (debug)",
    "comment": "Check API server health endpoints",
    "command": "kubectl get --raw='/healthz'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Show all events in the current namespace",
    "command": "kubectl events"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Events across all namespaces",
    "command": "kubectl events -A"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Events across all namespaces",
    "command": "kubectl events --all-namespaces"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Events for a specific resource",
    "command": "kubectl events --for pod/<pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Events for a specific resource",
    "command": "kubectl events --for deployment/<deploy-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Events for a specific resource",
    "command": "kubectl events --for node/<node-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Filter by event type (Normal, Warning)",
    "command": "kubectl events --types=Warning"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Filter by event type (Normal, Warning)",
    "command": "kubectl events --types=Normal"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Filter by event type (Normal, Warning)",
    "command": "kubectl events --types=Warning,Normal"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Watch events in real time",
    "command": "kubectl events --watch"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Watch events in real time",
    "command": "kubectl events -w"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Watch events for a specific resource in real time",
    "command": "kubectl events --for pod/<pod-name> --watch"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Output as JSON / YAML",
    "command": "kubectl events -o json"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Output as JSON / YAML",
    "command": "kubectl events -o yaml"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Get Warning events across the cluster and analyze with jq",
    "command": "kubectl events -A -o json | \\"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Diagnose a pod in CrashLoopBackOff",
    "command": "kubectl events --for pod/<pod-name> --types=Warning"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "Classic (deprecated):",
    "command": "kubectl get events --field-selector involvedObject.name=<pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "New (preferred):",
    "command": "kubectl events --for pod/<pod-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "events-events",
    "section": "Events (events)",
    "comment": "All Warning events in a namespace sorted by time",
    "command": "kubectl events --types=Warning -o json | \\"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Find non-running pods in all namespaces",
    "command": "kubectl get pods -A --field-selector='status.phase!=Running'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Show restarts and current state quickly",
    "command": "kubectl get pods -A -o custom-columns=NS:.metadata.namespace,POD:.metadata.name,PHASE:.status.phase,RESTARTS:.status.containerStatuses[0].restartCount,STATE:.status.containerStatuses[0].state.waiting.reason"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Inspect events for a specific pod (image pulls, scheduling, probes)",
    "command": "kubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Inspect events for a specific pod (image pulls, scheduling, probes)",
    "command": "kubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by=.lastTimestamp"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "CrashLoopBackOff: read previous container logs",
    "command": "kubectl logs <pod-name> -n <namespace> --previous"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "CrashLoopBackOff: read previous container logs",
    "command": "kubectl logs <pod-name> -n <namespace> -c <container-name> --previous"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Pending pod: check scheduling errors and requested resources",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 20 -E 'Events|Requests|Limits|node(s)'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "ImagePullBackOff / ErrImagePull: verify image and pull secret",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Failed|ErrImagePull|ImagePullBackOff|pull'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "ImagePullBackOff / ErrImagePull: verify image and pull secret",
    "command": "kubectl get secret -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Probe failures (liveness/readiness/startup)",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Liveness|Readiness|Startup|probe'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Check effective environment and mounted config/secret inside container",
    "command": "kubectl exec -it <pod-name> -n <namespace> -- env"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Check effective environment and mounted config/secret inside container",
    "command": "kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/config /etc/secrets"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "troubleshooting-common-pod-issues-troubleshooting",
    "section": "Troubleshooting common pod issues (troubleshooting)",
    "comment": "Temporary debug container in target pod network namespace",
    "command": "kubectl debug <pod-name> -n <namespace> -it --image=busybox"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Quick namespace snapshot: pods, services, events",
    "command": "kubectl get pods,svc,ingress,pvc -n <namespace> -o wide"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Quick namespace snapshot: pods, services, events",
    "command": "kubectl events -n <namespace> --types=Warning"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "CrashLoopBackOff: what is restarting and why",
    "command": "kubectl get pods -n <namespace> --sort-by='.status.containerStatuses[0].restartCount'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "CrashLoopBackOff: what is restarting and why",
    "command": "kubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "CrashLoopBackOff: what is restarting and why",
    "command": "kubectl logs <pod-name> -n <namespace> --previous --all-containers=true"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Rollout stuck: Deployment and ReplicaSet state",
    "command": "kubectl rollout status deployment/<deploy-name> -n <namespace> --timeout=60s"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Rollout stuck: Deployment and ReplicaSet state",
    "command": "kubectl describe deployment/<deploy-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Rollout stuck: Deployment and ReplicaSet state",
    "command": "kubectl get rs -n <namespace> -l app=<app-label> -o wide"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Pending pod: resources, PVC, taints, or node selector",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 40 Events"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Pending pod: resources, PVC, taints, or node selector",
    "command": "kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints,CPU:.status.allocatable.cpu,MEM:.status.allocatable.memory"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Pending pod: resources, PVC, taints, or node selector",
    "command": "kubectl get pvc -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Service is not responding: check endpoints and selector",
    "command": "kubectl get svc <service-name> -n <namespace> -o wide"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Service is not responding: check endpoints and selector",
    "command": "kubectl get endpoints <service-name> -n <namespace> -o yaml"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Service is not responding: check endpoints and selector",
    "command": "kubectl describe svc <service-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Cluster DNS: quick pod to test resolution",
    "command": "kubectl run dnscheck --rm -it --restart=Never --image=busybox:1.36 -- nslookup <service-name>.<namespace>.svc.cluster.local"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "PVC will not mount: pod, PVC, and storage class events",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 40 -E 'Mount|Volume|Events'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "PVC will not mount: pod, PVC, and storage class events",
    "command": "kubectl describe pvc <pvc-name> -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "PVC will not mount: pod, PVC, and storage class events",
    "command": "kubectl get storageclass"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Node pressure: find nodes and pods with high usage",
    "command": "kubectl describe nodes | grep -E 'Name:|Pressure|Allocated resources' -A 8"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Node pressure: find nodes and pods with high usage",
    "command": "kubectl top nodes"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "fast-incident-playbooks-incidents",
    "section": "Fast incident playbooks (incidents)",
    "comment": "Node pressure: find nodes and pods with high usage",
    "command": "kubectl top pods -A --sort-by=memory | head -20"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Add an ephemeral debug container to a running pod (kubectl >= 1.23)",
    "command": "kubectl debug -it <pod-name> --image=busybox --target=<container-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Use a richer debug image",
    "command": "kubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Inspect ephemeral containers already attached to a pod",
    "command": "kubectl get pod <pod-name> -o jsonpath='{.spec.ephemeralContainers}' | jq ."
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Create a debug copy of a pod (original is untouched)",
    "command": "kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --image=busybox"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Replace the entrypoint of a crashing container in the copy",
    "command": "kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --container=<container-name> -- sh"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Share the process namespace with the target container (see its processes)",
    "command": "kubectl debug -it <pod-name> --image=busybox --target=<container-name> --share-processes"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Debug a node by spawning a privileged pod on it",
    "command": "kubectl debug node/<node-name> -it --image=busybox"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "List all pods that have ephemeral containers attached",
    "command": "kubectl get pods -A -o json | jq '.items[] | select(.spec.ephemeralContainers != null) | .metadata.name'"
  },
  {
    "lang": "eng",
    "category": "viewing",
    "file": "eng/viewing.md",
    "hash": "ephemeral-containers",
    "section": "Ephemeral Containers",
    "comment": "Remove a debug copy pod when done",
    "command": "kubectl delete pod <pod-name>-debug"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod with image",
    "command": "kubectl run <pod-name> --image=nginx"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod and open shell immediately",
    "command": "kubectl run -it debug --image=busybox -- /bin/sh"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod with auto-delete on exit",
    "command": "kubectl run tmp --rm -it --image=busybox -- /bin/sh"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod with environment variables",
    "command": "kubectl run <pod-name> --image=nginx --env=\"DB_HOST=db\" --env=\"DB_PORT=5432\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod with port specified",
    "command": "kubectl run <pod-name> --image=nginx --port=80"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod with labels",
    "command": "kubectl run <pod-name> --image=nginx --labels=\"app=web,tier=frontend\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod in specific namespace",
    "command": "kubectl run <pod-name> --image=nginx -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run pod and create service immediately",
    "command": "kubectl run <pod-name> --image=nginx --port=80 --expose"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Generate YAML without creating (dry-run)",
    "command": "kubectl run <pod-name> --image=nginx --dry-run=client -o yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run one-time task (Job)",
    "command": "kubectl create job <job-name> --image=busybox -- echo \"Hello\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "running-pods-and-jobs-run",
    "section": "Running pods and jobs (run)",
    "comment": "Run CronJob",
    "command": "kubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Deployment rollout status",
    "command": "kubectl rollout status deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Rollout history",
    "command": "kubectl rollout history deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Rollback deployment to previous version",
    "command": "kubectl rollout undo deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Rollback to specific revision",
    "command": "kubectl rollout undo deployment/<deployment-name> --to-revision=2"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Restart all pods in deployment",
    "command": "kubectl rollout restart deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Pause rollout",
    "command": "kubectl rollout pause deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "Resume rollout",
    "command": "kubectl rollout resume deployment/<deployment-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "managing-updates-rollout",
    "section": "Managing updates (rollout)",
    "comment": "View specific revision details",
    "command": "kubectl rollout history deployment/<deployment-name> --revision=3"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": "Scale deployment to N replicas",
    "command": "kubectl scale deployment <deployment-name> --replicas=3"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": "Scale replicaset",
    "command": "kubectl scale replicaset <replicaset-name> --replicas=5"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": "Scale statefulset",
    "command": "kubectl scale statefulset <statefulset-name> --replicas=2"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": "Scale in specific namespace",
    "command": "kubectl scale deployment <deployment-name> --replicas=3 -n <namespace>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": "Auto-scaling (HPA - Horizontal Pod Autoscaler)",
    "command": "kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "scaling-scale",
    "section": "Scaling (scale)",
    "comment": "View auto-scaling status",
    "command": "kubectl get hpa"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "List all HPAs",
    "command": "kubectl get hpa"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "List all HPAs",
    "command": "kubectl get hpa -A"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Describe HPA",
    "command": "kubectl describe hpa <hpa-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "View HPA as YAML",
    "command": "kubectl get hpa <hpa-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Create HPA for a deployment (CPU-based)",
    "command": "kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=70"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Create HPA from file",
    "command": "kubectl apply -f hpa.yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Delete HPA",
    "command": "kubectl delete hpa <hpa-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Show HPA with current/target replicas and metrics",
    "command": "kubectl get hpa -o custom-columns=NAME:.metadata.name,MINPODS:.spec.minReplicas,MAXPODS:.spec.maxReplicas,REPLICAS:.status.currentReplicas"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Edit HPA (change thresholds or replicas)",
    "command": "kubectl edit hpa <hpa-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "List all VPAs",
    "command": "kubectl get vpa"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "List all VPAs",
    "command": "kubectl get vpa -A"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Describe VPA (shows recommended resources)",
    "command": "kubectl describe vpa <vpa-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "View VPA as YAML",
    "command": "kubectl get vpa <vpa-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Create VPA from file",
    "command": "kubectl apply -f vpa.yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Delete VPA",
    "command": "kubectl delete vpa <vpa-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Show VPA recommendations for all VPAs",
    "command": "kubectl get vpa -o custom-columns=NAME:.metadata.name,MODE:.spec.updatePolicy.updateMode,CPU_REQ:.status.recommendation.containerRecommendations[0].target.cpu,MEM_REQ:.status.recommendation.containerRecommendations[0].target.memory"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Check VPA admission controller is running",
    "command": "kubectl get pods -n kube-system | grep vpa"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "List all StatefulSets",
    "command": "kubectl get statefulsets"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "List all StatefulSets",
    "command": "kubectl get sts"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "List in all namespaces",
    "command": "kubectl get sts -A"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Describe StatefulSet",
    "command": "kubectl describe sts <sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "View StatefulSet as YAML",
    "command": "kubectl get sts <sts-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Scale StatefulSet",
    "command": "kubectl scale sts <sts-name> --replicas=3"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Rollout restart StatefulSet (rolling restart of all pods)",
    "command": "kubectl rollout restart sts/<sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Rollout status of StatefulSet",
    "command": "kubectl rollout status sts/<sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Rollout history of StatefulSet",
    "command": "kubectl rollout history sts/<sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Rollback StatefulSet to previous revision",
    "command": "kubectl rollout undo sts/<sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Rollback to specific revision",
    "command": "kubectl rollout undo sts/<sts-name> --to-revision=2"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Update image in StatefulSet",
    "command": "kubectl set image sts/<sts-name> <container-name>=<image>:<tag>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Delete StatefulSet (keeps pods by default)",
    "command": "kubectl delete sts <sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Delete StatefulSet and all its pods (foreground)",
    "command": "kubectl delete sts <sts-name> --cascade=foreground"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Delete StatefulSet without deleting pods (orphan)",
    "command": "kubectl delete sts <sts-name> --cascade=orphan"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "List pods belonging to StatefulSet (by label)",
    "command": "kubectl get pods -l app=<sts-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Show StatefulSet with replica count",
    "command": "kubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "List all DaemonSets",
    "command": "kubectl get daemonsets"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "List all DaemonSets",
    "command": "kubectl get ds"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "List in all namespaces",
    "command": "kubectl get ds -A"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Describe DaemonSet",
    "command": "kubectl describe ds <ds-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "View DaemonSet as YAML",
    "command": "kubectl get ds <ds-name> -o yaml"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Rollout restart DaemonSet (rolling restart on all nodes)",
    "command": "kubectl rollout restart ds/<ds-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Rollout status of DaemonSet",
    "command": "kubectl rollout status ds/<ds-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Rollout history of DaemonSet",
    "command": "kubectl rollout history ds/<ds-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Rollback DaemonSet to previous revision",
    "command": "kubectl rollout undo ds/<ds-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Update image in DaemonSet",
    "command": "kubectl set image ds/<ds-name> <container-name>=<image>:<tag>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Delete DaemonSet (and its pods)",
    "command": "kubectl delete ds <ds-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Delete DaemonSet without deleting pods (orphan)",
    "command": "kubectl delete ds <ds-name> --cascade=orphan"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Show DaemonSet with node coverage",
    "command": "kubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "List pods belonging to DaemonSet (by label)",
    "command": "kubectl get pods -l app=<ds-name> -o wide"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "List all Jobs",
    "command": "kubectl get jobs"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "List all CronJobs",
    "command": "kubectl get cronjobs"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "List all CronJobs",
    "command": "kubectl get cj"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Describe Job",
    "command": "kubectl describe job <job-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Describe CronJob",
    "command": "kubectl describe cronjob <cronjob-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Create Job from image",
    "command": "kubectl create job <job-name> --image=busybox -- echo \"Hello\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Create Job from existing CronJob (trigger manually)",
    "command": "kubectl create job <job-name> --from=cronjob/<cronjob-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Create CronJob (every 5 minutes)",
    "command": "kubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Create CronJob (every day at 02:00)",
    "command": "kubectl create cronjob <name> --image=busybox --schedule=\"0 2 * * *\" -- /bin/sh -c \"backup.sh\""
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "View Job logs (via pods)",
    "command": "kubectl logs -l job-name=<job-name>"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Wait for Job completion",
    "command": "kubectl wait --for=condition=Complete job/<job-name> --timeout=120s"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Delete completed Jobs",
    "command": "kubectl delete jobs --field-selector status.successful=1"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Suspend CronJob",
    "command": "kubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":true}}'"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Resume CronJob",
    "command": "kubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":false}}'"
  },
  {
    "lang": "eng",
    "category": "workloads",
    "file": "eng/workloads.md",
    "hash": "jobs-and-cronjobs",
    "section": "Jobs and CronJobs",
    "comment": "Delete CronJob (and all related Jobs)",
    "command": "kubectl delete cronjob <cronjob-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Показать текущий контекст",
    "command": "kubectl config current-context"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Показать все контексты",
    "command": "kubectl config get-contexts"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Переключиться на другой контекст",
    "command": "kubectl config use-context <context-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Показать всю конфигурацию",
    "command": "kubectl config view"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Установить namespace по умолчанию для контекста",
    "command": "kubectl config set-context --current --namespace=<namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Добавить новый кластер",
    "command": "kubectl config set-cluster <cluster-name> --server=https://k8s-api:6443"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Добавить credentials",
    "command": "kubectl config set-credentials <user-name> --token=<token>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Создать новый контекст",
    "command": "kubectl config set-context <context-name> --cluster=<cluster> --user=<user>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "контексты-и-конфигурация-config",
    "section": "Контексты и конфигурация (config)",
    "comment": "Удалить контекст",
    "command": "kubectl config delete-context <context-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Список всех неймспейсов",
    "command": "kubectl get namespaces"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Список всех неймспейсов",
    "command": "kubectl get ns"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Подробная информация о неймспейсе (квоты, лимиты)",
    "command": "kubectl describe ns <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Создать неймспейс",
    "command": "kubectl create namespace <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Создать неймспейс",
    "command": "kubectl create ns <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Удалить неймспейс (удаляет все ресурсы внутри)",
    "command": "kubectl delete ns <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Установить дефолтный неймспейс для текущего контекста",
    "command": "kubectl config set-context --current --namespace=<namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Показать текущий дефолтный неймспейс",
    "command": "kubectl config view --minify | grep namespace"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Получить все ресурсы в неймспейсе",
    "command": "kubectl get all -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Получить все ресурсы во всех неймспейсах",
    "command": "kubectl get all -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Список неймспейсов со статусом и датой создания",
    "command": "kubectl get ns -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,AGE:.metadata.creationTimestamp"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Добавить метку к неймспейсу",
    "command": "kubectl label namespace <namespace> env=production"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Показать неймспейсы с метками",
    "command": "kubectl get ns --show-labels"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-неймспейсами",
    "section": "Управление неймспейсами",
    "comment": "Подсчёт подов по неймспейсам",
    "command": "kubectl get pods -A --no-headers | awk '{print $1}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Запретить планирование новых подов на ноду",
    "command": "kubectl cordon <node-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Разрешить планирование на ноду",
    "command": "kubectl uncordon <node-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Эвакуировать поды с ноды (для обслуживания)",
    "command": "kubectl drain <node-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Drain с игнорированием DaemonSet",
    "command": "kubectl drain <node-name> --ignore-daemonsets"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Drain с удалением локальных данных",
    "command": "kubectl drain <node-name> --delete-emptydir-data"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Добавить taint на ноду",
    "command": "kubectl taint nodes <node-name> key=value:NoSchedule"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Удалить taint (минус в конце)",
    "command": "kubectl taint nodes <node-name> key=value:NoSchedule-"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "управление-нодами-taintcordondrain",
    "section": "Управление нодами (taint/cordon/drain)",
    "comment": "Типы taint эффектов: NoSchedule, PreferNoSchedule, NoExecute",
    "command": "kubectl taint nodes <node-name> key=value:NoExecute"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Список всех CRD в кластере",
    "command": "kubectl get crds"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Список всех CRD в кластере",
    "command": "kubectl get customresourcedefinitions"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Подробная информация о CRD",
    "command": "kubectl describe crd <crd-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Просмотр CRD в формате YAML",
    "command": "kubectl get crd <crd-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Удалить CRD (удаляет все экземпляры этого ресурса тоже)",
    "command": "kubectl delete crd <crd-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Список экземпляров кастомного ресурса",
    "command": "kubectl get <custom-resource-kind>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Список экземпляров кастомного ресурса",
    "command": "kubectl get <custom-resource-kind> -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Подробная информация об экземпляре кастомного ресурса",
    "command": "kubectl describe <custom-resource-kind> <name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Фильтр CRD по группе",
    "command": "kubectl get crds | grep <group-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Показать CRD с группой и областью видимости",
    "command": "kubectl get crds -o custom-columns=NAME:.metadata.name,GROUP:.spec.group,SCOPE:.spec.scope,VERSION:.spec.versions[0].name"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Объяснение полей кастомного ресурса",
    "command": "kubectl explain <custom-resource-kind>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Объяснение полей кастомного ресурса",
    "command": "kubectl explain <custom-resource-kind>.spec"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Применить кастомный ресурс из файла",
    "command": "kubectl apply -f my-resource.yaml"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "custom-resource-definitions-crd",
    "section": "Custom Resource Definitions (CRD)",
    "comment": "Удалить все экземпляры кастомного ресурса",
    "command": "kubectl delete <custom-resource-kind> --all -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Показать все доступные API ресурсы",
    "command": "kubectl api-resources"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Показать только namespaced ресурсы",
    "command": "kubectl api-resources --namespaced=true"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Показать ресурсы конкретной API группы",
    "command": "kubectl api-resources --api-group=apps"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Показать версии API",
    "command": "kubectl api-versions"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Объяснить структуру ресурса",
    "command": "kubectl explain pod"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Объяснить структуру ресурса",
    "command": "kubectl explain pod.spec"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Объяснить структуру ресурса",
    "command": "kubectl explain pod.spec.containers"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "работа-с-api-ресурсами-api-resources",
    "section": "Работа с API ресурсами (api-resources)",
    "comment": "Рекурсивное объяснение",
    "command": "kubectl explain pod --recursive"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Показать выделяемые ресурсы по каждой ноде",
    "command": "kubectl get nodes -o custom-columns=\\"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Запрошенные (requests) ресурсы vs выделяемые по нодам",
    "command": "kubectl describe nodes | grep -A 6 \"Allocated resources\""
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Реальное потребление ресурсов по нодам (требует metrics-server)",
    "command": "kubectl top nodes --sort-by=cpu"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Реальное потребление ресурсов по нодам (требует metrics-server)",
    "command": "kubectl top nodes --sort-by=memory"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Реальное потребление по подам во всех неймспейсах",
    "command": "kubectl top pods -A --sort-by=cpu"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Реальное потребление по подам во всех неймспейсах",
    "command": "kubectl top pods -A --sort-by=memory"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "20 самых «прожорливых» по памяти подов",
    "command": "kubectl top pods -A --sort-by=memory --no-headers | head -20"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Запросы и лимиты ресурсов для всех подов в неймспейсе",
    "command": "kubectl get pods -o custom-columns=\\"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Найти поды без resource requests (риск: могут вытеснять другие workload-ы)",
    "command": "kubectl get pods -A -o json | \\"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Количество подов на каждой ноде (проверка равномерности распределения)",
    "command": "kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Проверить ResourceQuota и текущее потребление",
    "command": "kubectl describe resourcequota -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Проверить LimitRange в неймспейсе",
    "command": "kubectl get limitrange -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "планирование-ёмкости-кластера-capacity-planning",
    "section": "Планирование ёмкости кластера (capacity planning)",
    "comment": "Детальная сводка по ноде: запрошено vs доступно",
    "command": "kubectl describe node <node-name> | grep -E \"cpu|memory|Allocated|requests|limits\" | head -30"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": "Версия kubectl client и Kubernetes API server",
    "command": "kubectl version"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": "Версия kubectl client и Kubernetes API server",
    "command": "kubectl version --output=yaml"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": "Короткая версия API server через raw endpoint",
    "command": "kubectl get --raw /version"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": "Поддерживаемые API группы и версии",
    "command": "kubectl api-versions"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": "Проверить, какие deprecated API реально используются объектами",
    "command": "kubectl get all -A -o yaml | grep -E 'apiVersion: (extensions/v1beta1|apps/v1beta1|apps/v1beta2)'"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "версии-и-совместимость-version-skew",
    "section": "Версии и совместимость (version skew)",
    "comment": "kuberc: пользовательские preferences и aliases kubectl (если включено в вашей версии kubectl)",
    "command": "kubectl options | grep -i kuberc"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить поды по статусу (Running, Pending, Failed)",
    "command": "kubectl get pods --field-selector=status.phase=Running"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить поды по статусу (Running, Pending, Failed)",
    "command": "kubectl get pods --field-selector=status.phase=Failed -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить поды на конкретной ноде",
    "command": "kubectl get pods --field-selector=spec.nodeName=<node-name> -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить поды НЕ в статусе Running",
    "command": "kubectl get pods --field-selector='status.phase!=Running' -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Объединить несколько селекторов полей",
    "command": "kubectl get pods --field-selector=status.phase=Running,spec.nodeName=<node-name>"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить сервисы определённого типа",
    "command": "kubectl get services --field-selector=spec.type=LoadBalancer -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить события определённого типа (Warning/Normal)",
    "command": "kubectl get events --field-selector=type=Warning -A"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Получить события для конкретного объекта",
    "command": "kubectl get events --field-selector=involvedObject.name=<pod-name>,involvedObject.kind=Pod"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Следить за ресурсами в реальном времени (--watch)",
    "command": "kubectl get pods --watch"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Следить за ресурсами в реальном времени (--watch)",
    "command": "kubectl get pods -w"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Следить с конкретным селектором полей",
    "command": "kubectl get pods --field-selector=status.phase=Pending -w"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Фильтрация по меткам (несколько вариантов)",
    "command": "kubectl get pods -l 'app=myapp,tier=backend'"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Фильтрация по меткам (несколько вариантов)",
    "command": "kubectl get pods -l 'app in (frontend,backend)'"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Фильтрация по меткам (несколько вариантов)",
    "command": "kubectl get pods -l 'app notin (legacy)'"
  },
  {
    "lang": "ru",
    "category": "cluster",
    "file": "ru/cluster.md",
    "hash": "селекторы-полей-и-фильтрация",
    "section": "Селекторы полей и фильтрация",
    "comment": "Фильтрация по меткам (несколько вариантов)",
    "command": "kubectl get pods -l '!deprecated'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Применить конфигурацию из файла",
    "command": "kubectl apply -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Применить все yaml файлы из директории",
    "command": "kubectl apply -f ./configs/"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Применить конфигурацию из URL",
    "command": "kubectl apply -f https://example.com/config.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать namespace",
    "command": "kubectl create namespace <namespace-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать namespace",
    "command": "kubectl create ns <namespace-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать deployment императивно",
    "command": "kubectl create deployment <name> --image=<image>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать service",
    "command": "kubectl create service clusterip <name> --tcp=80:8080"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать configmap из файла",
    "command": "kubectl create configmap <name> --from-file=config.txt"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать configmap из literal",
    "command": "kubectl create configmap <name> --from-literal=key=value"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать secret из literal",
    "command": "kubectl create secret generic <name> --from-literal=password=secret123"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "создание-и-применение-ресурсов-applycreate",
    "section": "Создание и применение ресурсов (apply/create)",
    "comment": "Создать secret для docker registry",
    "command": "kubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<pass>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "редактирование-ресурсов-edit",
    "section": "Редактирование ресурсов (edit)",
    "comment": "Редактировать deployment в редакторе по умолчанию",
    "command": "kubectl edit deployment <deployment-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "редактирование-ресурсов-edit",
    "section": "Редактирование ресурсов (edit)",
    "comment": "Редактировать service",
    "command": "kubectl edit service <service-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "редактирование-ресурсов-edit",
    "section": "Редактирование ресурсов (edit)",
    "comment": "Редактировать configmap",
    "command": "kubectl edit configmap <configmap-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "редактирование-ресурсов-edit",
    "section": "Редактирование ресурсов (edit)",
    "comment": "Редактировать в конкретном namespace",
    "command": "kubectl edit deployment <deployment-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "редактирование-ресурсов-edit",
    "section": "Редактирование ресурсов (edit)",
    "comment": "Использовать конкретный редактор",
    "command": "KUBE_EDITOR=\"nano\" kubectl edit deployment <deployment-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": "Изменить количество реплик через patch",
    "command": "kubectl patch deployment <deployment-name> -p '{\"spec\":{\"replicas\":3}}'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": "Изменить image контейнера",
    "command": "kubectl patch deployment <deployment-name> -p '{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"<container>\",\"image\":\"nginx:1.21\"}]}}}}'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": "Patch в формате merge",
    "command": "kubectl patch deployment <deployment-name> --type=merge -p '{\"spec\":{\"replicas\":5}}'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": "Patch в формате JSON",
    "command": "kubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"replace\",\"path\":\"/spec/replicas\",\"value\":2}]'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": "Добавить переменную окружения",
    "command": "kubectl patch deployment <deployment-name> --type=json -p='[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"NEW_VAR\",\"value\":\"value\"}}]'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "патчинг-ресурсов-patch",
    "section": "Патчинг ресурсов (patch)",
    "comment": "Изменить service type",
    "command": "kubectl patch svc <service-name> -p '{\"spec\":{\"type\":\"NodePort\"}}'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить image контейнера",
    "command": "kubectl set image deployment/<deployment-name> <container-name>=nginx:1.21"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить image для всех контейнеров",
    "command": "kubectl set image deployment/<deployment-name> *=nginx:1.21"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить image и явно записать причину изменения в аннотацию",
    "command": "kubectl set image deployment/<deployment-name> nginx=nginx:1.21"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить image и явно записать причину изменения в аннотацию",
    "command": "kubectl annotate deployment/<deployment-name> kubernetes.io/change-cause=\"nginx=nginx:1.21\" --overwrite"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Добавить переменную окружения",
    "command": "kubectl set env deployment/<deployment-name> ENV_VAR=value"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Добавить несколько переменных",
    "command": "kubectl set env deployment/<deployment-name> VAR1=value1 VAR2=value2"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Удалить переменную окружения",
    "command": "kubectl set env deployment/<deployment-name> ENV_VAR-"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Установить переменную из secret",
    "command": "kubectl set env deployment/<deployment-name> --from=secret/mysecret"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Установить переменную из configmap",
    "command": "kubectl set env deployment/<deployment-name> --from=configmap/myconfig"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить resource limits",
    "command": "kubectl set resources deployment/<deployment-name> -c=nginx --limits=cpu=200m,memory=512Mi"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить resource requests",
    "command": "kubectl set resources deployment/<deployment-name> -c=nginx --requests=cpu=100m,memory=256Mi"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить service account",
    "command": "kubectl set serviceaccount deployment/<deployment-name> myserviceaccount"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "быстрое-изменение-ресурсов-set",
    "section": "Быстрое изменение ресурсов (set)",
    "comment": "Изменить selector для service",
    "command": "kubectl set selector service/<service-name> app=myapp,tier=frontend"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить pod",
    "command": "kubectl delete pod <pod-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить deployment",
    "command": "kubectl delete deployment <deployment-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить service",
    "command": "kubectl delete service <service-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить ресурсы из файла",
    "command": "kubectl delete -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить все ресурсы по label",
    "command": "kubectl delete pods -l app=myapp"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить namespace (и все ресурсы в нём)",
    "command": "kubectl delete namespace <namespace-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Принудительное удаление пода: используйте только если обычное удаление зависло",
    "command": "kubectl delete pod <pod-name> --force --grace-period=0"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "удаление-ресурсов-delete",
    "section": "Удаление ресурсов (delete)",
    "comment": "Удалить все поды в namespace",
    "command": "kubectl delete pods --all -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Сравнить локальный файл с текущим состоянием в кластере",
    "command": "kubectl diff -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Сравнить все файлы из директории",
    "command": "kubectl diff -f ./configs/"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Сравнить конфигурацию из URL",
    "command": "kubectl diff -f https://example.com/config.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Сравнить с использованием kustomize",
    "command": "kubectl diff -k ./overlays/production/"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Показать diff перед apply (полезно в CI/CD)",
    "command": "kubectl diff -f deployment.yaml && kubectl apply -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Diff с указанием server-side",
    "command": "kubectl diff -f deployment.yaml --server-side"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Проверить конфигурацию без применения (dry-run + diff)",
    "command": "kubectl apply -f deployment.yaml --dry-run=server"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Проверить конфигурацию без применения (dry-run + diff)",
    "command": "kubectl apply -f deployment.yaml --dry-run=client"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Валидация файла без применения",
    "command": "kubectl apply --validate=true --dry-run=client -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "сравнение-конфигураций-diff",
    "section": "Сравнение конфигураций (diff)",
    "comment": "Проверить что изменится при удалении",
    "command": "kubectl delete -f deployment.yaml --dry-run=client"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Применить манифест через server-side apply — рекомендуется для GitOps и мульти-акторных сред",
    "command": "kubectl apply -f deployment.yaml --server-side"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "SSA с именованным field manager (фиксирует, кто владеет каждым полем)",
    "command": "kubectl apply -f deployment.yaml --server-side --field-manager=argocd"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Принудительно забрать ownership конфликтующих полей у другого менеджера",
    "command": "kubectl apply -f deployment.yaml --server-side --force-conflicts"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Dry-run с валидацией на стороне сервера",
    "command": "kubectl apply -f deployment.yaml --server-side --dry-run=server"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Diff текущего состояния в кластере vs локального файла (server-side логика)",
    "command": "kubectl diff -f deployment.yaml --server-side"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Посмотреть field manager-ы ресурса",
    "command": "kubectl get deployment my-deploy -o json | jq '.metadata.managedFields'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Убрать managedFields из вывода для читаемости",
    "command": "kubectl get deployment my-deploy -o json | jq 'del(.metadata.managedFields)'"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "или через плагин neat:",
    "command": "kubectl neat get deployment my-deploy -o yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Удалить устаревшую аннотацию last-applied-configuration после перехода на SSA",
    "command": "kubectl annotate deployment my-deploy kubectl.kubernetes.io/last-applied-configuration-"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "server-side-apply-ssa",
    "section": "Server-side apply (SSA)",
    "comment": "Применить целую директорию через SSA",
    "command": "kubectl apply -f ./manifests/ --server-side --field-manager=platform-team"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Полная замена ресурса из файла",
    "command": "kubectl replace -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Принудительная замена (удалить и создать заново)",
    "command": "kubectl replace --force -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Замена из stdin",
    "command": "cat deployment.yaml | kubectl replace -f -"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Подключиться к stdout/stderr запущенного контейнера",
    "command": "kubectl attach <pod-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Интерактивное подключение к контейнеру (stdin + tty)",
    "command": "kubectl attach -it <pod-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Подключение к конкретному контейнеру",
    "command": "kubectl attach <pod-name> -c <container-name>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Подключение в определённом namespace",
    "command": "kubectl attach <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Конвертировать конфигурацию между версиями API (требует отдельного kubectl-convert plugin)",
    "command": "kubectl convert -f deployment.yaml --output-version apps/v1"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Просмотреть completion для bash/zsh",
    "command": "kubectl completion bash"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "замена-и-подключение-к-ресурсам-replaceattach",
    "section": "Замена и подключение к ресурсам (replace/attach)",
    "comment": "Просмотреть completion для bash/zsh",
    "command": "kubectl completion zsh"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться, пока под перейдёт в состояние Ready",
    "command": "kubectl wait pod/<pod-name> --for=condition=Ready"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться готовности пода с таймаутом (по умолчанию 30s)",
    "command": "kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться готовности всех подов с меткой",
    "command": "kubectl wait pods -l app=myapp --for=condition=Ready --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться завершения деплоймента (все реплики готовы)",
    "command": "kubectl wait deployment/<deploy-name> --for=condition=Available --timeout=300s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться завершения Job (условие Complete)",
    "command": "kubectl wait job/<job-name> --for=condition=Complete --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться, пока Job не провалится (условие Failed)",
    "command": "kubectl wait job/<job-name> --for=condition=Failed --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться удаления ресурса",
    "command": "kubectl wait pod/<pod-name> --for=delete --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться удаления всех подов с меткой",
    "command": "kubectl wait pods -l app=myapp --for=delete --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться готовности ноды",
    "command": "kubectl wait node/<node-name> --for=condition=Ready --timeout=300s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться готовности всех нод",
    "command": "kubectl wait nodes --all --for=condition=Ready --timeout=300s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться установки CRD (Custom Resource Definition)",
    "command": "kubectl wait crd/<crd-name> --for=condition=Established --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться в конкретном неймспейсе",
    "command": "kubectl wait pod/<pod-name> -n <namespace> --for=condition=Ready --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться готовности нескольких ресурсов одного типа",
    "command": "kubectl wait pods -l tier=backend --for=condition=Ready --all-namespaces --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться PVC в состоянии Bound",
    "command": "kubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Дождаться произвольного поля через jsonpath (k8s >= 1.23)",
    "command": "kubectl wait deployment/<deploy-name> \\"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Пример использования в CI/CD пайплайне",
    "command": "kubectl apply -f deployment.yaml"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Пример использования в CI/CD пайплайне",
    "command": "kubectl wait deployment/myapp --for=condition=Available --timeout=300s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Проверить сразу несколько условий (через несколько вызовов)",
    "command": "kubectl wait pod/<pod-name> --for=condition=Initialized --timeout=30s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Проверить сразу несколько условий (через несколько вызовов)",
    "command": "kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "management",
    "file": "ru/management.md",
    "hash": "ожидание-готовности-ресурсов-wait",
    "section": "Ожидание готовности ресурсов (wait)",
    "comment": "Проверить сразу несколько условий (через несколько вызовов)",
    "command": "kubectl wait pod/<pod-name> --for=condition=ContainersReady --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить порт пода на локальную машину",
    "command": "kubectl port-forward <pod-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить порт сервиса",
    "command": "kubectl port-forward service/<service-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить порт сервиса",
    "command": "kubectl port-forward svc/<service-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить несколько портов",
    "command": "kubectl port-forward <pod-name> 8080:80 8443:443"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить на все интерфейсы (опасно на рабочей машине: открывает доступ из сети)",
    "command": "kubectl port-forward --address 0.0.0.0 <pod-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить в определённом namespace",
    "command": "kubectl port-forward <pod-name> 8080:80 -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить порт deployment",
    "command": "kubectl port-forward deployment/<deployment-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Дать kubectl выбрать свободный локальный порт",
    "command": "kubectl port-forward <pod-name> :80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "проброс-портов-port-forward",
    "section": "Проброс портов (port-forward)",
    "comment": "Пробросить порт StatefulSet",
    "command": "kubectl port-forward statefulset/<statefulset-name> 8080:80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service из deployment",
    "command": "kubectl expose deployment <deployment-name> --port=80 --target-port=8080"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service типа NodePort",
    "command": "kubectl expose deployment <deployment-name> --type=NodePort --port=80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service типа LoadBalancer",
    "command": "kubectl expose deployment <deployment-name> --type=LoadBalancer --port=80"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service из пода",
    "command": "kubectl expose pod <pod-name> --port=80 --target-port=8080"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service с именем",
    "command": "kubectl expose deployment <deployment-name> --port=80 --name=my-service"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service с указанием протокола",
    "command": "kubectl expose deployment <deployment-name> --port=80 --protocol=TCP"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service для нескольких портов",
    "command": "kubectl expose deployment <deployment-name> --port=80,443 --target-port=8080"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать service в определённом namespace",
    "command": "kubectl expose deployment <deployment-name> --port=80 -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Генерация YAML без создания",
    "command": "kubectl expose deployment <deployment-name> --port=80 --dry-run=client -o yaml"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "создание-сервисов-expose",
    "section": "Создание сервисов (expose)",
    "comment": "Создать ExternalName service",
    "command": "kubectl create service externalname <name> --external-name=db.example.com"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Список всех Ingress ресурсов",
    "command": "kubectl get ingress"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Список всех Ingress ресурсов",
    "command": "kubectl get ing"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Ingress во всех namespace",
    "command": "kubectl get ing -A"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Описание Ingress",
    "command": "kubectl describe ing <ingress-name>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Просмотр Ingress в формате YAML",
    "command": "kubectl get ing <ingress-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Создать Ingress из файла",
    "command": "kubectl apply -f ingress.yaml"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Удалить Ingress",
    "command": "kubectl delete ing <ingress-name>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Показать Ingress с хостами и адресами",
    "command": "kubectl get ing -o custom-columns=NAME:.metadata.name,HOSTS:.spec.rules[*].host,ADDRESS:.status.loadBalancer.ingress[*].ip"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "ingress",
    "section": "Ingress",
    "comment": "Список IngressClass",
    "command": "kubectl get ingressclass"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Список NetworkPolicy",
    "command": "kubectl get networkpolicy"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Список NetworkPolicy",
    "command": "kubectl get netpol"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "NetworkPolicy во всех namespace",
    "command": "kubectl get netpol -A"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Описание NetworkPolicy",
    "command": "kubectl describe netpol <policy-name>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Просмотр NetworkPolicy в формате YAML",
    "command": "kubectl get netpol <policy-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Создать NetworkPolicy из файла",
    "command": "kubectl apply -f netpol.yaml"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Удалить NetworkPolicy",
    "command": "kubectl delete netpol <policy-name>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "сетевые-политики-networkpolicy",
    "section": "Сетевые политики (networkpolicy)",
    "comment": "Проверить какие поды попадают под NetworkPolicy",
    "command": "kubectl get pods -l <selector-from-policy>"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Запустить прокси к API серверу (localhost:8001)",
    "command": "kubectl proxy"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Прокси на указанном порту",
    "command": "kubectl proxy --port=8080"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Прокси доступный со всех интерфейсов (опасно: может открыть Kubernetes API в сеть)",
    "command": "kubectl proxy --address=0.0.0.0 --accept-hosts='.*'"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Прямой доступ к API без прокси (с токеном)",
    "command": "kubectl get --raw /api/v1/namespaces"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Прямой доступ к API без прокси (с токеном)",
    "command": "kubectl get --raw /apis/apps/v1/deployments"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Проверить здоровье кластера через API",
    "command": "kubectl get --raw /healthz"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Проверить здоровье кластера через API",
    "command": "kubectl get --raw /readyz"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Проверить здоровье кластера через API",
    "command": "kubectl get --raw /livez"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Проверить здоровье кластера через API",
    "command": "kubectl get --raw '/readyz?verbose'"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Проверить здоровье кластера через API",
    "command": "kubectl get --raw '/livez?verbose'"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Диагностические endpoints API server (доступность зависит от прав и версии кластера)",
    "command": "kubectl get --raw /version"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Диагностические endpoints API server (доступность зависит от прав и версии кластера)",
    "command": "kubectl get --raw /openapi/v2"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Получить метрики (если metrics-server установлен)",
    "command": "kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes"
  },
  {
    "lang": "ru",
    "category": "network",
    "file": "ru/network.md",
    "hash": "прокси-и-доступ-к-api-proxy",
    "section": "Прокси и доступ к API (proxy)",
    "comment": "Получить метрики (если metrics-server установлен)",
    "command": "kubectl get --raw /apis/metrics.k8s.io/v1beta1/pods"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Список ролей в namespace",
    "command": "kubectl get roles"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Список ClusterRole (уровень кластера)",
    "command": "kubectl get clusterroles"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Список RoleBinding",
    "command": "kubectl get rolebindings"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Список ClusterRoleBinding",
    "command": "kubectl get clusterrolebindings"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Описание роли",
    "command": "kubectl describe role <role-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Описание роли",
    "command": "kubectl describe clusterrole <clusterrole-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Создать роль (доступ get/list к pods)",
    "command": "kubectl create role pod-reader --verb=get,list,watch --resource=pods"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Создать ClusterRole",
    "command": "kubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Привязать роль к пользователю",
    "command": "kubectl create rolebinding <binding-name> --role=pod-reader --user=<username>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Привязать роль к ServiceAccount",
    "command": "kubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Привязать ClusterRole к пользователю (на весь кластер)",
    "command": "kubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Создать ServiceAccount",
    "command": "kubectl create serviceaccount <sa-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Список ServiceAccount",
    "command": "kubectl get serviceaccounts"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Список ServiceAccount",
    "command": "kubectl get sa"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Описание ServiceAccount",
    "command": "kubectl describe sa <sa-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Проверить свои права доступа",
    "command": "kubectl auth can-i --list"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Проверить конкретное право",
    "command": "kubectl auth can-i create pods"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Проверить конкретное право",
    "command": "kubectl auth can-i delete deployments -n production"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Проверить права для другого пользователя",
    "command": "kubectl auth can-i create pods --as=<username>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Проверить права для ServiceAccount",
    "command": "kubectl auth can-i create pods --as=system:serviceaccount:<namespace>:<sa-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Legacy: получить токен ServiceAccount из Secret (только для кластеров k8s < 1.24)",
    "command": "kubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Предпочтительно: создать короткоживущий токен для ServiceAccount (k8s >= 1.24)",
    "command": "kubectl create token <sa-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "rbac---роли-и-управление-доступом",
    "section": "RBAC - Роли и управление доступом",
    "comment": "Создать токен с кастомным TTL",
    "command": "kubectl create token <sa-name> --duration=24h"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить, можно ли выполнить действие в текущем неймспейсе",
    "command": "kubectl auth can-i get pods"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить, можно ли выполнить действие в текущем неймспейсе",
    "command": "kubectl auth can-i create deployments"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить, можно ли выполнить действие в текущем неймспейсе",
    "command": "kubectl auth can-i delete secrets"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить в конкретном неймспейсе",
    "command": "kubectl auth can-i get pods -n kube-system"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить во всех неймспейсах",
    "command": "kubectl auth can-i get pods --all-namespaces"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Список всех разрешённых действий в текущем неймспейсе",
    "command": "kubectl auth can-i --list"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Список всех разрешённых действий в текущем неймспейсе",
    "command": "kubectl auth can-i --list -n staging"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить права от имени другого пользователя",
    "command": "kubectl auth can-i get pods --as dev-user"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить права от имени другого пользователя",
    "command": "kubectl auth can-i get pods --as system:serviceaccount:default:mysa"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить права от имени группы",
    "command": "kubectl auth can-i get pods --as-group system:masters --as fake-user"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Проверить права ServiceAccount (полезно при отладке рабочих нагрузок)",
    "command": "kubectl auth can-i list pods \\"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Показать текущую идентичность (пользователь, группы, extra)",
    "command": "kubectl auth whoami"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Применить RBAC-объекты из файла (добирает недостающие правила, не разрушает существующие)",
    "command": "kubectl auth reconcile -f rbac-manifest.yaml"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "проверка-прав-доступа-auth",
    "section": "Проверка прав доступа (auth)",
    "comment": "Пробный запуск reconcile — просмотр изменений без применения",
    "command": "kubectl auth reconcile -f rbac-manifest.yaml --dry-run=client"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Список всех CSR в кластере",
    "command": "kubectl get csr"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Список всех CSR в кластере",
    "command": "kubectl get certificatesigningrequests"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Показать CSR со статусом и подписантом",
    "command": "kubectl get csr -o custom-columns=NAME:.metadata.name,AGE:.metadata.creationTimestamp,SIGNERNAME:.spec.signerName,REQUESTOR:.spec.username,CONDITION:.status.conditions[0].type"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Детальная информация о CSR (subject, usages, events)",
    "command": "kubectl describe csr <csr-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Одобрить CSR",
    "command": "kubectl certificate approve <csr-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Отклонить CSR",
    "command": "kubectl certificate deny <csr-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Удалить CSR",
    "command": "kubectl delete csr <csr-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Создать объект CSR из PEM-файла (k8s >= 1.18)",
    "command": "cat <<EOF | kubectl apply -f -"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "Получить подписанный сертификат после одобрения",
    "command": "kubectl get csr <csr-name> -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "1. Сгенерировать приватный ключ и CSR через openssl",
    "command": "openssl genrsa -out my-user.key 2048"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "1. Сгенерировать приватный ключ и CSR через openssl",
    "command": "openssl req -new -key my-user.key -out my-user.csr -subj \"/CN=my-user/O=my-group\""
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "3. Одобрить",
    "command": "kubectl certificate approve my-user"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "4. Забрать подписанный сертификат",
    "command": "kubectl get csr my-user -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "5. Добавить пользователя в kubeconfig",
    "command": "kubectl config set-credentials my-user --client-key=my-user.key --client-certificate=my-user.crt --embed-certs=true"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "запросы-на-подпись-сертификата-csr",
    "section": "Запросы на подпись сертификата (CSR)",
    "comment": "5. Добавить пользователя в kubeconfig",
    "command": "kubectl config set-context my-user-context --cluster=<cluster-name> --user=my-user"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Проверить текущие Pod Security labels у namespace",
    "command": "kubectl get ns <namespace> --show-labels"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Проверить текущие Pod Security labels у namespace",
    "command": "kubectl get ns <namespace> -o jsonpath='{.metadata.labels.pod-security\\.kubernetes\\.io/enforce}'"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Включить режим enforce=baseline",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce=baseline --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Включить режим enforce=restricted (более строгий)",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce=restricted --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Добавить warn/audit режимы для мягкой проверки",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/warn=restricted --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Добавить warn/audit режимы для мягкой проверки",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/audit=restricted --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Зафиксировать версию политики под minor-версию вашего кластера",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce-version=v<cluster-minor> --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Зафиксировать версию политики под minor-версию вашего кластера",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/warn-version=v<cluster-minor> --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Зафиксировать версию политики под minor-версию вашего кластера",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/audit-version=v<cluster-minor> --overwrite"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Удалить PSS labels из namespace",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/enforce-"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Удалить PSS labels из namespace",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/warn-"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Удалить PSS labels из namespace",
    "command": "kubectl label ns <namespace> pod-security.kubernetes.io/audit-"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Проверить предупреждения при apply (если нарушены политики)",
    "command": "kubectl apply -f pod.yaml -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "pod-security-standards-pss",
    "section": "Pod Security Standards (PSS)",
    "comment": "Проверить securityContext у подов",
    "command": "kubectl get pod <pod-name> -n <namespace> -o yaml | grep -A 40 -E 'securityContext|runAsNonRoot|privileged|allowPrivilegeEscalation|capabilities'"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Просмотр securityContext запущенного пода",
    "command": "kubectl get pod <pod-name> -o yaml | grep -A 20 securityContext"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Проверить запущены ли поды от root во всех неймспейсах",
    "command": "kubectl get pods -A -o jsonpath='{range .items[*]}{.metadata.namespace}{\" \"}{.metadata.name}{\" runAsUser:\"}{.spec.securityContext.runAsUser}{\"\\n\"}{end}'"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Показать UID и non-root флаг для подов",
    "command": "kubectl get pods -n <namespace> -o custom-columns=NAME:.metadata.name,UID:.spec.securityContext.runAsUser,NON_ROOT:.spec.securityContext.runAsNonRoot"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Найти привилегированные контейнеры в кластере",
    "command": "kubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | \"\\(.metadata.namespace)/\\(.metadata.name)\"'"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Проверить использование hostNetwork / hostPID",
    "command": "kubectl get pods -A -o custom-columns=NS:.metadata.namespace,NAME:.metadata.name,HOST_NET:.spec.hostNetwork,HOST_PID:.spec.hostPID | grep -v '<none>'"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "security-context",
    "section": "Security Context",
    "comment": "Проверить readOnlyRootFilesystem (попытка записи завершится ошибкой):",
    "command": "kubectl exec <pod-name> -- touch /test-write"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Список всех PDB",
    "command": "kubectl get poddisruptionbudget"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Список всех PDB",
    "command": "kubectl get pdb"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Список во всех неймспейсах",
    "command": "kubectl get pdb -A"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Подробная информация о PDB",
    "command": "kubectl describe pdb <pdb-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Просмотр PDB в формате YAML",
    "command": "kubectl get pdb <pdb-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Создать PDB из файла",
    "command": "kubectl apply -f pdb.yaml"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Удалить PDB",
    "command": "kubectl delete pdb <pdb-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "poddisruptionbudget-pdb",
    "section": "PodDisruptionBudget (PDB)",
    "comment": "Показать PDB со статусом допустимых прерываний",
    "command": "kubectl get pdb -o custom-columns=NAME:.metadata.name,MIN-AVAILABLE:.spec.minAvailable,MAX-UNAVAILABLE:.spec.maxUnavailable,ALLOWED:.status.disruptionsAllowed"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Список ResourceQuota в неймспейсе",
    "command": "kubectl get resourcequota"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Список ResourceQuota в неймспейсе",
    "command": "kubectl get quota"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Список во всех неймспейсах",
    "command": "kubectl get quota -A"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Подробно о ResourceQuota (показывает использованное vs лимит)",
    "command": "kubectl describe quota <quota-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Создать ResourceQuota из файла",
    "command": "kubectl apply -f quota.yaml"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Удалить ResourceQuota",
    "command": "kubectl delete quota <quota-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Список LimitRange",
    "command": "kubectl get limitrange"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Список LimitRange",
    "command": "kubectl get limits"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Подробно о LimitRange",
    "command": "kubectl describe limits <limitrange-name>"
  },
  {
    "lang": "ru",
    "category": "security",
    "file": "ru/security.md",
    "hash": "resourcequota-и-limitrange",
    "section": "ResourceQuota и LimitRange",
    "comment": "Создать LimitRange из файла",
    "command": "kubectl apply -f limitrange.yaml"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Список всех ConfigMap в текущем namespace",
    "command": "kubectl get configmaps"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Список всех ConfigMap в текущем namespace",
    "command": "kubectl get cm"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Список во всех namespace",
    "command": "kubectl get cm -A"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Описание ConfigMap",
    "command": "kubectl describe cm <configmap-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "ConfigMap в формате YAML",
    "command": "kubectl get cm <configmap-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Создать ConfigMap из literal значений",
    "command": "kubectl create configmap <name> --from-literal=key1=value1 --from-literal=key2=value2"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Создать ConfigMap из файла (имя файла становится ключом)",
    "command": "kubectl create configmap <name> --from-file=config.txt"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Создать ConfigMap из файла с кастомным ключом",
    "command": "kubectl create configmap <name> --from-file=mykey=config.txt"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Создать ConfigMap из директории (все файлы становятся ключами)",
    "command": "kubectl create configmap <name> --from-file=./configs/"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Создать ConfigMap из env-файла (формат .env)",
    "command": "kubectl create configmap <name> --from-env-file=.env"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Редактировать ConfigMap",
    "command": "kubectl edit cm <configmap-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Удалить ConfigMap",
    "command": "kubectl delete cm <configmap-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Получить значение конкретного ключа",
    "command": "kubectl get cm <configmap-name> -o jsonpath='{.data.key}'"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Список всех ключей ConfigMap",
    "command": "kubectl get cm <configmap-name> -o go-template='{{range $k,$v := .data}}{{$k}}{{\"\\n\"}}{{end}}'"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Обновить ConfigMap идемпотентно (dry-run + apply)",
    "command": "kubectl create configmap <name> --from-file=config.txt --dry-run=client -o yaml | kubectl apply -f -"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "configmaps",
    "section": "ConfigMaps",
    "comment": "Показать все ConfigMap с ключами",
    "command": "kubectl get cm -o custom-columns=NAME:.metadata.name,KEYS:.data"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Список secret в текущем namespace",
    "command": "kubectl get secrets"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Список secret во всех namespace",
    "command": "kubectl get secrets -A"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Показать метаданные secret (без декодированных значений)",
    "command": "kubectl describe secret <secret-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Показать secret в формате YAML",
    "command": "kubectl get secret <secret-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Декодировать один ключ из secret",
    "command": "kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Создать generic secret из literal значений",
    "command": "kubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=changeme"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Создать secret из файла",
    "command": "kubectl create secret generic <secret-name> --from-file=./config.env"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Создать TLS secret",
    "command": "kubectl create secret tls <secret-name> --cert=tls.crt --key=tls.key"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Обновить secret из файла (декларативно через apply)",
    "command": "kubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "управление-secret-secret",
    "section": "Управление secret (secret)",
    "comment": "Удалить secret",
    "command": "kubectl delete secret <secret-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Список всех PersistentVolume (уровень кластера)",
    "command": "kubectl get pv"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Список всех PersistentVolumeClaim",
    "command": "kubectl get pvc"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "PVC во всех namespace",
    "command": "kubectl get pvc -A"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Детальная информация о PV",
    "command": "kubectl describe pv <pv-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Детальная информация о PVC",
    "command": "kubectl describe pvc <pvc-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Список StorageClass",
    "command": "kubectl get storageclass"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Список StorageClass",
    "command": "kubectl get sc"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Описание StorageClass",
    "command": "kubectl describe sc <storageclass-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Создать PVC из файла",
    "command": "kubectl apply -f pvc.yaml"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Удалить PVC",
    "command": "kubectl delete pvc <pvc-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Удалить PV",
    "command": "kubectl delete pv <pv-name>"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Получить PV отсортированные по размеру",
    "command": "kubectl get pv --sort-by=.spec.capacity.storage"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Показать PVC с именем тома и storage class",
    "command": "kubectl get pvc -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,VOLUME:.spec.volumeName,CAPACITY:.status.capacity.storage,CLASS:.spec.storageClassName"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Проверить какой под использует PVC",
    "command": "kubectl get pods -o json | grep -i \"claimName\""
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Типы политики возврата PV: Retain, Recycle, Delete",
    "command": "kubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy,STATUS:.status.phase"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Изменить политику возврата PV",
    "command": "kubectl patch pv <pv-name> -p '{\"spec\":{\"persistentVolumeReclaimPolicy\":\"Retain\"}}'"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "постоянные-тома-pvpvc",
    "section": "Постоянные тома (pv/pvc)",
    "comment": "Принудительно удалить зависший PVC (убрать finalizers)",
    "command": "kubectl patch pvc <pvc-name> -p '{\"metadata\":{\"finalizers\":null}}'"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "работа-с-kustomize-kustomize",
    "section": "Работа с Kustomize (kustomize)",
    "comment": "Применить конфигурацию через kustomize",
    "command": "kubectl apply -k ./overlays/production/"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "работа-с-kustomize-kustomize",
    "section": "Работа с Kustomize (kustomize)",
    "comment": "Просмотреть итоговый YAML без применения",
    "command": "kubectl kustomize ./overlays/production/"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "работа-с-kustomize-kustomize",
    "section": "Работа с Kustomize (kustomize)",
    "comment": "Удалить ресурсы через kustomize",
    "command": "kubectl delete -k ./overlays/production/"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "работа-с-kustomize-kustomize",
    "section": "Работа с Kustomize (kustomize)",
    "comment": "Diff с kustomize",
    "command": "kubectl diff -k ./overlays/production/"
  },
  {
    "lang": "ru",
    "category": "storage",
    "file": "ru/storage.md",
    "hash": "работа-с-kustomize-kustomize",
    "section": "Работа с Kustomize (kustomize)",
    "comment": "Применить базовую конфигурацию",
    "command": "kubectl apply -k ./base/"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Выполнить команду в поде",
    "command": "kubectl exec <pod-name> -- <command>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Пример: посмотреть список файлов",
    "command": "kubectl exec <pod-name> -- ls -la"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Интерактивный shell в поде",
    "command": "kubectl exec -it <pod-name> -- /bin/bash"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Интерактивный shell в поде",
    "command": "kubectl exec -it <pod-name> -- /bin/sh"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Exec в конкретный контейнер (если несколько)",
    "command": "kubectl exec -it <pod-name> -c <container-name> -- /bin/bash"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Exec в определённом namespace",
    "command": "kubectl exec -it <pod-name> -n <namespace> -- /bin/bash"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Посмотреть переменные окружения",
    "command": "kubectl exec <pod-name> -- env"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Проверить сетевую доступность изнутри пода",
    "command": "kubectl exec <pod-name> -- curl -s http://service-name:port"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "выполнение-команд-в-контейнере-exec",
    "section": "Выполнение команд в контейнере (exec)",
    "comment": "Посмотреть содержимое файла",
    "command": "kubectl exec <pod-name> -- cat /path/to/file"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "копирование-файлов-cp",
    "section": "Копирование файлов (cp)",
    "comment": "Скопировать файл из пода на локальную машину",
    "command": "kubectl cp <pod-name>:/path/to/file ./local-file"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "копирование-файлов-cp",
    "section": "Копирование файлов (cp)",
    "comment": "Скопировать файл в под",
    "command": "kubectl cp ./local-file <pod-name>:/path/to/file"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "копирование-файлов-cp",
    "section": "Копирование файлов (cp)",
    "comment": "Копирование с указанием namespace",
    "command": "kubectl cp <namespace>/<pod-name>:/path/to/file ./local-file"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "копирование-файлов-cp",
    "section": "Копирование файлов (cp)",
    "comment": "Скопировать директорию из пода",
    "command": "kubectl cp <pod-name>:/path/to/dir ./local-dir"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "копирование-файлов-cp",
    "section": "Копирование файлов (cp)",
    "comment": "Копирование из конкретного контейнера",
    "command": "kubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Добавить label к поду",
    "command": "kubectl label pod <pod-name> environment=production"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Добавить label к ноде",
    "command": "kubectl label node <node-name> disktype=ssd"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Удалить label (минус в конце)",
    "command": "kubectl label pod <pod-name> environment-"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Перезаписать существующий label",
    "command": "kubectl label pod <pod-name> environment=staging --overwrite"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Добавить аннотацию",
    "command": "kubectl annotate pod <pod-name> description=\"My pod\""
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Удалить аннотацию",
    "command": "kubectl annotate pod <pod-name> description-"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Показать labels всех подов",
    "command": "kubectl get pods --show-labels"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Фильтрация по label",
    "command": "kubectl get pods -l environment=production"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "работа-с-метками-labelannotate",
    "section": "Работа с метками (label/annotate)",
    "comment": "Фильтрация по label",
    "command": "kubectl get pods -l 'environment in (production,staging)'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить IP адреса всех подов",
    "command": "kubectl get pods -o jsonpath='{.items[*].status.podIP}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить имена всех подов",
    "command": "kubectl get pods -o jsonpath='{.items[*].metadata.name}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить image каждого пода (с переносом строки)",
    "command": "kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.spec.containers[0].image}{\"\\n\"}{end}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить имена нод и их IP",
    "command": "kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.status.addresses[0].address}{\"\\n\"}{end}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить External IP нод",
    "command": "kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Кастомные колонки",
    "command": "kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Кастомные колонки с IP",
    "command": "kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить все image в кластере",
    "command": "kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить секрет в декодированном виде",
    "command": "kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "продвинутый-вывод-данных-jsonpathcustom-columns",
    "section": "Продвинутый вывод данных (jsonpath/custom-columns)",
    "comment": "Получить endpoint адреса сервиса",
    "command": "kubectl get endpoints <service-name> -o jsonpath='{.subsets[*].addresses[*].ip}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "планирование-подов-affinity--tolerations--nodeselector",
    "section": "Планирование подов (affinity / tolerations / nodeSelector)",
    "comment": "Список нод с метками (для выбора целевых нод)",
    "command": "kubectl get nodes --show-labels"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "планирование-подов-affinity--tolerations--nodeselector",
    "section": "Планирование подов (affinity / tolerations / nodeSelector)",
    "comment": "Список нод с метками (для выбора целевых нод)",
    "command": "kubectl get nodes -l disktype=ssd"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "планирование-подов-affinity--tolerations--nodeselector",
    "section": "Планирование подов (affinity / tolerations / nodeSelector)",
    "comment": "Добавить метку на ноду для управления планированием",
    "command": "kubectl label node <node-name> disktype=ssd"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "планирование-подов-affinity--tolerations--nodeselector",
    "section": "Планирование подов (affinity / tolerations / nodeSelector)",
    "comment": "Показать taint'ы всех нод",
    "command": "kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "планирование-подов-affinity--tolerations--nodeselector",
    "section": "Планирование подов (affinity / tolerations / nodeSelector)",
    "comment": "Проверить почему под в статусе Pending / не планируется",
    "command": "kubectl describe pod <pod-name> | grep -A 20 Events"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Сгенерировать YAML-шаблон без создания ресурса (dry-run)",
    "command": "kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Сгенерировать YAML-шаблон без создания ресурса (dry-run)",
    "command": "kubectl run my-pod --image=nginx --dry-run=client -o yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Apply с удалением ресурсов, которых нет в файлах (prune)",
    "command": "kubectl apply -f ./configs/ --prune -l app=myapp"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Принудительно перетянуть образ - перезапустить деплой",
    "command": "kubectl rollout restart deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Следить за прогрессом rollout",
    "command": "kubectl rollout status deployment/<deployment-name> --watch"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Получить resourceVersion (нужен для оптимистичной блокировки)",
    "command": "kubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Получить все образы контейнеров, запущенных в кластере",
    "command": "kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{\"\\n\"}{end}{end}' | sort -u"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Найти поды, которые не готовы (NOT ready)",
    "command": "kubectl get pods -A --no-headers | awk '$3 != $4 || $5 != \"Running\"'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Удалить все упавшие поды во всех неймспейсах",
    "command": "kubectl delete pods --field-selector=status.phase=Failed -A"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Получить поды с кол-вом рестартов больше N",
    "command": "kubectl get pods -A --no-headers | awk '$5 > 5'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Объединить несколько kubeconfig в один файл",
    "command": "KUBECONFIG=~/.kube/config:~/.kube/other-config kubectl config view --flatten > ~/.kube/merged-config"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Войти в первый под, найденный по метке",
    "command": "kubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Логи со всех подов деплоя",
    "command": "kubectl logs -l app=<label-value> --all-containers=true --prefix=true"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Сортировка подов по кол-ву рестартов",
    "command": "kubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Сортировка подов по времени создания (новые первые)",
    "command": "kubectl get pods --sort-by=.metadata.creationTimestamp"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Проверить, на каких нодах больше всего подов",
    "command": "kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "советы-и-полезные-паттерны",
    "section": "Советы и полезные паттерны",
    "comment": "Применить несколько файлов через stdin",
    "command": "cat deployment.yaml service.yaml | kubectl apply -f -"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Добавить репозиторий чартов",
    "command": "helm repo add bitnami https://charts.bitnami.com/bitnami"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Добавить репозиторий чартов",
    "command": "helm repo add stable https://charts.helm.sh/stable"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Обновить все репозитории",
    "command": "helm repo update"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Список добавленных репозиториев",
    "command": "helm repo list"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Поиск чарта в репозиториях",
    "command": "helm search repo nginx"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Поиск чарта в репозиториях",
    "command": "helm search repo nginx --versions"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Поиск в Artifact Hub",
    "command": "helm search hub nginx"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Показать дефолтные values чарта",
    "command": "helm show values bitnami/nginx"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Установить релиз",
    "command": "helm install <release-name> bitnami/nginx"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Установить с файлом values",
    "command": "helm install <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Установить с переопределением значений",
    "command": "helm install <release-name> bitnami/nginx --set replicaCount=2 --set service.type=NodePort"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Установить в конкретный неймспейс (создать если не существует)",
    "command": "helm install <release-name> bitnami/nginx -n <namespace> --create-namespace"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Предварительный просмотр манифестов без установки (dry-run)",
    "command": "helm install <release-name> bitnami/nginx --dry-run --debug"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Список всех релизов",
    "command": "helm list"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Список всех релизов",
    "command": "helm list -A"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Список всех релизов",
    "command": "helm list -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Статус релиза",
    "command": "helm status <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Получить текущие values развёрнутого релиза",
    "command": "helm get values <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Получить все манифесты релиза",
    "command": "helm get manifest <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Обновить релиз",
    "command": "helm upgrade <release-name> bitnami/nginx"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Обновить релиз",
    "command": "helm upgrade <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Установить если нет, обновить если есть",
    "command": "helm upgrade --install <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "История ревизий релиза",
    "command": "helm history <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Откатить к предыдущей ревизии",
    "command": "helm rollback <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Откатить к конкретной ревизии",
    "command": "helm rollback <release-name> 2"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Удалить релиз",
    "command": "helm uninstall <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Удалить релиз",
    "command": "helm uninstall <release-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Удалить релиз, сохранив историю",
    "command": "helm uninstall <release-name> --keep-history"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Отрендерить шаблоны локально без кластера",
    "command": "helm template <release-name> bitnami/nginx -f values.yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Отрендерить и сохранить в файл",
    "command": "helm template <release-name> bitnami/nginx -f values.yaml > rendered.yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Проверить чарт на ошибки (lint)",
    "command": "helm lint ./my-chart"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Создать scaffold нового чарта",
    "command": "helm create my-chart"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Упаковать чарт в .tgz",
    "command": "helm package ./my-chart"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Скачать исходник чарта локально",
    "command": "helm pull bitnami/nginx --untar"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "helm",
    "section": "Helm",
    "comment": "Запустить тесты чарта (test hooks)",
    "command": "helm test <release-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "Список установленных плагинов",
    "command": "kubectl krew list"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "Поиск плагинов",
    "command": "kubectl krew search <keyword>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "Установить плагин",
    "command": "kubectl krew install <plugin-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "Обновить все установленные плагины",
    "command": "kubectl krew upgrade"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "Удалить плагин",
    "command": "kubectl krew uninstall <plugin-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl ctx      - быстрое переключение контекстов (kubectx)",
    "command": "kubectl ctx"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl ctx      - быстрое переключение контекстов (kubectx)",
    "command": "kubectl ctx <context-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl ns       - быстрое переключение неймспейсов (kubens)",
    "command": "kubectl ns"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl ns       - быстрое переключение неймспейсов (kubens)",
    "command": "kubectl ns <namespace>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl neat     - очищает вывод YAML от служебных полей",
    "command": "kubectl neat get pod <pod-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl tree     - показывает иерархию владельцев ресурса",
    "command": "kubectl tree deployment <deployment-name>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl stern    - просмотр логов нескольких подов одновременно",
    "command": "kubectl stern <pod-pattern>"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl stern    - просмотр логов нескольких подов одновременно",
    "command": "kubectl stern -l app=myapp"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl df-pv    - показывает использование диска для PersistentVolumes",
    "command": "kubectl df-pv"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "плагины-kubectl-krew",
    "section": "Плагины kubectl (krew)",
    "comment": "kubectl whoami   - текущий пользователь / сервис-аккаунт",
    "command": "kubectl whoami"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Включить автодополнение kubectl — bash",
    "command": "source <(kubectl completion bash)"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Включить автодополнение kubectl — bash",
    "command": "echo 'source <(kubectl completion bash)' >> ~/.bashrc"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Включить автодополнение kubectl — zsh",
    "command": "source <(kubectl completion zsh)"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Включить автодополнение kubectl — zsh",
    "command": "echo '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Алиас k=kubectl с сохранением автодополнения",
    "command": "alias k=kubectl"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Алиас k=kubectl с сохранением автодополнения",
    "command": "complete -o default -F __start_kubectl k   # bash"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Алиас k=kubectl с сохранением автодополнения",
    "command": "compdef k=kubectl                           # zsh"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kgp='kubectl get pods'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kgpa='kubectl get pods -A'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kgpw='kubectl get pods -w'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kgs='kubectl get svc'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kgn='kubectl get nodes'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kgd='kubectl get deploy'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kge='kubectl get events --sort-by=.lastTimestamp'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kdp='kubectl describe pod'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kdd='kubectl describe deployment'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kl='kubectl logs'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias klf='kubectl logs -f'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kex='kubectl exec -it'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kaf='kubectl apply -f'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Часто используемые алиасы",
    "command": "alias kdf='kubectl delete -f'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Быстрая смена namespace без kubens",
    "command": "alias kns='kubectl config set-context --current --namespace'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Быстрая смена контекста без kubectx",
    "command": "alias kctx='kubectl config use-context'"
  },
  {
    "lang": "ru",
    "category": "utilities",
    "file": "ru/utilities.md",
    "hash": "алиасы-и-автодополнение-в-shell",
    "section": "Алиасы и автодополнение в shell",
    "comment": "Показать текущий контекст и namespace",
    "command": "alias kwhere='echo \"context: $(kubectl config current-context)\" && echo \"namespace: $(kubectl config view --minify -o jsonpath={.contexts[0].context.namespace})\"'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список всех подов в текущем namespace",
    "command": "kubectl get pods"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список подов во всех namespace",
    "command": "kubectl get pods --all-namespaces"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список подов во всех namespace",
    "command": "kubectl get pods -A"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список подов с расширенной информацией (IP, нода)",
    "command": "kubectl get pods -o wide"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список всех сервисов",
    "command": "kubectl get services"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список всех сервисов",
    "command": "kubectl get svc"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список всех деплойментов",
    "command": "kubectl get deployments"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список всех деплойментов",
    "command": "kubectl get deploy"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список всех ресурсов в namespace",
    "command": "kubectl get all"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить информацию в формате YAML",
    "command": "kubectl get pod <pod-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить информацию в формате JSON",
    "command": "kubectl get pod <pod-name> -o json"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список нод кластера",
    "command": "kubectl get nodes"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список namespace",
    "command": "kubectl get namespaces"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "получение-информации-get",
    "section": "Получение информации (get)",
    "comment": "Получить список namespace",
    "command": "kubectl get ns"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о поде",
    "command": "kubectl describe pod <pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о ноде",
    "command": "kubectl describe node <node-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о сервисе",
    "command": "kubectl describe service <service-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о сервисе",
    "command": "kubectl describe svc <service-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о деплойменте",
    "command": "kubectl describe deployment <deployment-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о configmap",
    "command": "kubectl describe configmap <configmap-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о configmap",
    "command": "kubectl describe cm <configmap-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация о secret",
    "command": "kubectl describe secret <secret-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Детальная информация об ingress",
    "command": "kubectl describe ingress <ingress-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "детальная-информация-describe",
    "section": "Детальная информация (describe)",
    "comment": "Describe в определённом namespace",
    "command": "kubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи пода",
    "command": "kubectl logs <pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи конкретного контейнера в поде (если несколько контейнеров)",
    "command": "kubectl logs <pod-name> -c <container-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи в реальном времени (follow)",
    "command": "kubectl logs -f <pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Последние N строк логов",
    "command": "kubectl logs --tail=100 <pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи за последний час",
    "command": "kubectl logs --since=1h <pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи за последние 30 минут",
    "command": "kubectl logs --since=30m <pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи предыдущего контейнера (после рестарта)",
    "command": "kubectl logs <pod-name> --previous"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи предыдущего контейнера (после рестарта)",
    "command": "kubectl logs <pod-name> -p"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи всех подов по label",
    "command": "kubectl logs -l app=myapp"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Логи в определённом namespace",
    "command": "kubectl logs <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "просмотр-логов-logs",
    "section": "Просмотр логов (logs)",
    "comment": "Комбинация: follow + tail + namespace",
    "command": "kubectl logs -f --tail=50 <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Использование ресурсов нодами",
    "command": "kubectl top nodes"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Использование ресурсов подами",
    "command": "kubectl top pods"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Top поды во всех namespace",
    "command": "kubectl top pods -A"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Top поды в конкретном namespace",
    "command": "kubectl top pods -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Top с сортировкой по CPU",
    "command": "kubectl top pods --sort-by=cpu"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Top с сортировкой по памяти",
    "command": "kubectl top pods --sort-by=memory"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "мониторинг-ресурсов-top",
    "section": "Мониторинг ресурсов (top)",
    "comment": "Top для контейнеров внутри подов",
    "command": "kubectl top pods --containers"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Создать отладочный контейнер в существующем поде",
    "command": "kubectl debug <pod-name> -it --image=busybox"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Создать копию пода для отладки",
    "command": "kubectl debug <pod-name> -it --image=busybox --copy-to=debug-pod"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Отладка ноды (создаёт привилегированный под на ноде)",
    "command": "kubectl debug node/<node-name> -it --image=ubuntu"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Посмотреть события в namespace",
    "command": "kubectl get events"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "События с сортировкой по времени",
    "command": "kubectl get events --sort-by='.lastTimestamp'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "События для конкретного пода",
    "command": "kubectl get events --field-selector involvedObject.name=<pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить статус API сервера",
    "command": "kubectl cluster-info"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Детальная информация о кластере",
    "command": "kubectl cluster-info dump"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить доступ к API",
    "command": "kubectl auth can-i create pods"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить доступ к API",
    "command": "kubectl auth can-i delete deployments --namespace=production"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить доступ для другого пользователя",
    "command": "kubectl auth can-i create pods --as=<user>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Список всех разрешений",
    "command": "kubectl auth can-i --list"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить почему под не запускается",
    "command": "kubectl describe pod <pod-name> | grep -A 10 Events"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить health endpoints API server",
    "command": "kubectl get --raw='/readyz?verbose'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить health endpoints API server",
    "command": "kubectl get --raw='/livez?verbose'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "отладка-и-диагностика-debug",
    "section": "Отладка и диагностика (debug)",
    "comment": "Проверить health endpoints API server",
    "command": "kubectl get --raw='/healthz'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Показать все события в текущем неймспейсе",
    "command": "kubectl events"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "События во всех неймспейсах",
    "command": "kubectl events -A"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "События во всех неймспейсах",
    "command": "kubectl events --all-namespaces"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "События для конкретного ресурса",
    "command": "kubectl events --for pod/<pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "События для конкретного ресурса",
    "command": "kubectl events --for deployment/<deploy-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "События для конкретного ресурса",
    "command": "kubectl events --for node/<node-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Фильтрация по типу события (Normal, Warning)",
    "command": "kubectl events --types=Warning"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Фильтрация по типу события (Normal, Warning)",
    "command": "kubectl events --types=Normal"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Фильтрация по типу события (Normal, Warning)",
    "command": "kubectl events --types=Warning,Normal"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Следить за событиями в реальном времени",
    "command": "kubectl events --watch"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Следить за событиями в реальном времени",
    "command": "kubectl events -w"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Мониторинг событий конкретного ресурса в реальном времени",
    "command": "kubectl events --for pod/<pod-name> --watch"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Вывод в JSON / YAML",
    "command": "kubectl events -o json"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Вывод в JSON / YAML",
    "command": "kubectl events -o yaml"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Получить только Warning-события по всему кластеру с анализом через jq",
    "command": "kubectl events -A -o json | \\"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Диагностика пода в CrashLoopBackOff",
    "command": "kubectl events --for pod/<pod-name> --types=Warning"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Классический (устаревший):",
    "command": "kubectl get events --field-selector involvedObject.name=<pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Новый (предпочтительный):",
    "command": "kubectl events --for pod/<pod-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "события-events",
    "section": "События (events)",
    "comment": "Все Warning-события в неймспейсе, отсортированные по времени",
    "command": "kubectl events --types=Warning -o json | \\"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Найти все не-running поды во всех неймспейсах",
    "command": "kubectl get pods -A --field-selector='status.phase!=Running'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Быстро показать рестарты и текущее состояние контейнера",
    "command": "kubectl get pods -A -o custom-columns=NS:.metadata.namespace,POD:.metadata.name,PHASE:.status.phase,RESTARTS:.status.containerStatuses[0].restartCount,STATE:.status.containerStatuses[0].state.waiting.reason"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Проверить события конкретного пода (image pull, scheduling, probes)",
    "command": "kubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Проверить события конкретного пода (image pull, scheduling, probes)",
    "command": "kubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by=.lastTimestamp"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "CrashLoopBackOff: посмотреть логи предыдущего запуска контейнера",
    "command": "kubectl logs <pod-name> -n <namespace> --previous"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "CrashLoopBackOff: посмотреть логи предыдущего запуска контейнера",
    "command": "kubectl logs <pod-name> -n <namespace> -c <container-name> --previous"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Pending: проверить ошибки scheduler и запрошенные ресурсы",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 20 -E 'Events|Requests|Limits|node(s)'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "ImagePullBackOff / ErrImagePull: проверить image и pull secret",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Failed|ErrImagePull|ImagePullBackOff|pull'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "ImagePullBackOff / ErrImagePull: проверить image и pull secret",
    "command": "kubectl get secret -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Ошибки liveness/readiness/startup probes",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Liveness|Readiness|Startup|probe'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Проверить env и смонтированные config/secret внутри контейнера",
    "command": "kubectl exec -it <pod-name> -n <namespace> -- env"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Проверить env и смонтированные config/secret внутри контейнера",
    "command": "kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/config /etc/secrets"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "диагностика-типичных-проблем-подов-troubleshooting",
    "section": "Диагностика типичных проблем подов (troubleshooting)",
    "comment": "Временный debug-контейнер в сетевом namespace целевого пода",
    "command": "kubectl debug <pod-name> -n <namespace> -it --image=busybox"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Быстрый снимок namespace: поды, сервисы, события",
    "command": "kubectl get pods,svc,ingress,pvc -n <namespace> -o wide"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Быстрый снимок namespace: поды, сервисы, события",
    "command": "kubectl events -n <namespace> --types=Warning"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "CrashLoopBackOff: что рестартует и почему",
    "command": "kubectl get pods -n <namespace> --sort-by='.status.containerStatuses[0].restartCount'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "CrashLoopBackOff: что рестартует и почему",
    "command": "kubectl describe pod <pod-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "CrashLoopBackOff: что рестартует и почему",
    "command": "kubectl logs <pod-name> -n <namespace> --previous --all-containers=true"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Rollout stuck: состояние Deployment и ReplicaSet",
    "command": "kubectl rollout status deployment/<deploy-name> -n <namespace> --timeout=60s"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Rollout stuck: состояние Deployment и ReplicaSet",
    "command": "kubectl describe deployment/<deploy-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Rollout stuck: состояние Deployment и ReplicaSet",
    "command": "kubectl get rs -n <namespace> -l app=<app-label> -o wide"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Pending: не хватает ресурсов, PVC, taints или node selector",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 40 Events"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Pending: не хватает ресурсов, PVC, taints или node selector",
    "command": "kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints,CPU:.status.allocatable.cpu,MEM:.status.allocatable.memory"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Pending: не хватает ресурсов, PVC, taints или node selector",
    "command": "kubectl get pvc -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Service не отвечает: проверить endpoints и selector",
    "command": "kubectl get svc <service-name> -n <namespace> -o wide"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Service не отвечает: проверить endpoints и selector",
    "command": "kubectl get endpoints <service-name> -n <namespace> -o yaml"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Service не отвечает: проверить endpoints и selector",
    "command": "kubectl describe svc <service-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "DNS внутри кластера: быстрый pod для проверки резолва",
    "command": "kubectl run dnscheck --rm -it --restart=Never --image=busybox:1.36 -- nslookup <service-name>.<namespace>.svc.cluster.local"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "PVC не монтируется: события pod, PVC и storage class",
    "command": "kubectl describe pod <pod-name> -n <namespace> | grep -A 40 -E 'Mount|Volume|Events'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "PVC не монтируется: события pod, PVC и storage class",
    "command": "kubectl describe pvc <pvc-name> -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "PVC не монтируется: события pod, PVC и storage class",
    "command": "kubectl get storageclass"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Node pressure: найти ноды и поды с высоким потреблением",
    "command": "kubectl describe nodes | grep -E 'Name:|Pressure|Allocated resources' -A 8"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Node pressure: найти ноды и поды с высоким потреблением",
    "command": "kubectl top nodes"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "быстрые-сценарии-инцидентов-incidents",
    "section": "Быстрые сценарии инцидентов (incidents)",
    "comment": "Node pressure: найти ноды и поды с высоким потреблением",
    "command": "kubectl top pods -A --sort-by=memory | head -20"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Добавить временный отладочный контейнер в работающий под (kubectl >= 1.23)",
    "command": "kubectl debug -it <pod-name> --image=busybox --target=<container-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Использовать расширенный образ для отладки сети",
    "command": "kubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Посмотреть временные контейнеры, уже прикреплённые к поду",
    "command": "kubectl get pod <pod-name> -o jsonpath='{.spec.ephemeralContainers}' | jq ."
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Создать отладочную копию пода (оригинал не затрагивается)",
    "command": "kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --image=busybox"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Заменить точку входа падающего контейнера в копии",
    "command": "kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --container=<container-name> -- sh"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Разделить пространство процессов с целевым контейнером (видеть его процессы)",
    "command": "kubectl debug -it <pod-name> --image=busybox --target=<container-name> --share-processes"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Отладка узла — запустить привилегированный под на ноде",
    "command": "kubectl debug node/<node-name> -it --image=busybox"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Найти все поды с прикреплёнными временными контейнерами",
    "command": "kubectl get pods -A -o json | jq '.items[] | select(.spec.ephemeralContainers != null) | .metadata.name'"
  },
  {
    "lang": "ru",
    "category": "viewing",
    "file": "ru/viewing.md",
    "hash": "ephemeral-containers-временные-контейнеры",
    "section": "Ephemeral Containers (временные контейнеры)",
    "comment": "Удалить отладочную копию пода после работы",
    "command": "kubectl delete pod <pod-name>-debug"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под с образом",
    "command": "kubectl run <pod-name> --image=nginx"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под и сразу открыть shell",
    "command": "kubectl run -it debug --image=busybox -- /bin/sh"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под с автоудалением после выхода",
    "command": "kubectl run tmp --rm -it --image=busybox -- /bin/sh"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под с переменными окружения",
    "command": "kubectl run <pod-name> --image=nginx --env=\"DB_HOST=db\" --env=\"DB_PORT=5432\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под с указанием порта",
    "command": "kubectl run <pod-name> --image=nginx --port=80"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под с labels",
    "command": "kubectl run <pod-name> --image=nginx --labels=\"app=web,tier=frontend\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под в определённом namespace",
    "command": "kubectl run <pod-name> --image=nginx -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить под и сразу создать service",
    "command": "kubectl run <pod-name> --image=nginx --port=80 --expose"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Генерация YAML без создания (dry-run)",
    "command": "kubectl run <pod-name> --image=nginx --dry-run=client -o yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить одноразовую задачу (Job)",
    "command": "kubectl create job <job-name> --image=busybox -- echo \"Hello\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "запуск-подов-и-задач-run",
    "section": "Запуск подов и задач (run)",
    "comment": "Запустить CronJob",
    "command": "kubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Статус обновления deployment",
    "command": "kubectl rollout status deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "История обновлений",
    "command": "kubectl rollout history deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Откатить deployment на предыдущую версию",
    "command": "kubectl rollout undo deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Откатить на конкретную ревизию",
    "command": "kubectl rollout undo deployment/<deployment-name> --to-revision=2"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Перезапустить все поды в deployment",
    "command": "kubectl rollout restart deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Приостановить обновление",
    "command": "kubectl rollout pause deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Возобновить обновление",
    "command": "kubectl rollout resume deployment/<deployment-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "управление-обновлениями-rollout",
    "section": "Управление обновлениями (rollout)",
    "comment": "Посмотреть детали конкретной ревизии",
    "command": "kubectl rollout history deployment/<deployment-name> --revision=3"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": "Масштабировать deployment до N реплик",
    "command": "kubectl scale deployment <deployment-name> --replicas=3"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": "Масштабировать replicaset",
    "command": "kubectl scale replicaset <replicaset-name> --replicas=5"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": "Масштабировать statefulset",
    "command": "kubectl scale statefulset <statefulset-name> --replicas=2"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": "Масштабировать в определённом namespace",
    "command": "kubectl scale deployment <deployment-name> --replicas=3 -n <namespace>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": "Автомасштабирование (HPA - Horizontal Pod Autoscaler)",
    "command": "kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "масштабирование-scale",
    "section": "Масштабирование (scale)",
    "comment": "Посмотреть статус автомасштабирования",
    "command": "kubectl get hpa"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Список всех HPA",
    "command": "kubectl get hpa"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Список всех HPA",
    "command": "kubectl get hpa -A"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Подробная информация об HPA",
    "command": "kubectl describe hpa <hpa-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Просмотр HPA в формате YAML",
    "command": "kubectl get hpa <hpa-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Создать HPA для деплоя (по CPU)",
    "command": "kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=70"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Создать HPA из файла",
    "command": "kubectl apply -f hpa.yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Удалить HPA",
    "command": "kubectl delete hpa <hpa-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Показать HPA с текущим/целевым кол-вом реплик и метриками",
    "command": "kubectl get hpa -o custom-columns=NAME:.metadata.name,MINPODS:.spec.minReplicas,MAXPODS:.spec.maxReplicas,REPLICAS:.status.currentReplicas"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "horizontalpodautoscaler-hpa",
    "section": "HorizontalPodAutoscaler (HPA)",
    "comment": "Редактировать HPA (изменить пороги или кол-во реплик)",
    "command": "kubectl edit hpa <hpa-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Список всех VPA",
    "command": "kubectl get vpa"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Список всех VPA",
    "command": "kubectl get vpa -A"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Детальная информация о VPA (включая рекомендации)",
    "command": "kubectl describe vpa <vpa-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Просмотр VPA в формате YAML",
    "command": "kubectl get vpa <vpa-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Создать VPA из файла",
    "command": "kubectl apply -f vpa.yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Удалить VPA",
    "command": "kubectl delete vpa <vpa-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Показать рекомендации для всех VPA",
    "command": "kubectl get vpa -o custom-columns=NAME:.metadata.name,MODE:.spec.updatePolicy.updateMode,CPU_REQ:.status.recommendation.containerRecommendations[0].target.cpu,MEM_REQ:.status.recommendation.containerRecommendations[0].target.memory"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "verticalpodautoscaler-vpa",
    "section": "VerticalPodAutoscaler (VPA)",
    "comment": "Проверить, запущен ли admission controller VPA",
    "command": "kubectl get pods -n kube-system | grep vpa"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Список всех StatefulSet",
    "command": "kubectl get statefulsets"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Список всех StatefulSet",
    "command": "kubectl get sts"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Список во всех namespace",
    "command": "kubectl get sts -A"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Описание StatefulSet",
    "command": "kubectl describe sts <sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "StatefulSet в формате YAML",
    "command": "kubectl get sts <sts-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Масштабировать StatefulSet",
    "command": "kubectl scale sts <sts-name> --replicas=3"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Роллинг-рестарт StatefulSet",
    "command": "kubectl rollout restart sts/<sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Статус обновления StatefulSet",
    "command": "kubectl rollout status sts/<sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "История обновлений StatefulSet",
    "command": "kubectl rollout history sts/<sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Откатить StatefulSet на предыдущую ревизию",
    "command": "kubectl rollout undo sts/<sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Откатить на конкретную ревизию",
    "command": "kubectl rollout undo sts/<sts-name> --to-revision=2"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Обновить image в StatefulSet",
    "command": "kubectl set image sts/<sts-name> <container-name>=<image>:<tag>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Удалить StatefulSet (поды остаются по умолчанию)",
    "command": "kubectl delete sts <sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Удалить StatefulSet вместе с подами (foreground)",
    "command": "kubectl delete sts <sts-name> --cascade=foreground"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Удалить StatefulSet без удаления подов (orphan)",
    "command": "kubectl delete sts <sts-name> --cascade=orphan"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Список подов StatefulSet (по label)",
    "command": "kubectl get pods -l app=<sts-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "statefulsets",
    "section": "StatefulSets",
    "comment": "Показать StatefulSet с количеством реплик",
    "command": "kubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Список всех DaemonSet",
    "command": "kubectl get daemonsets"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Список всех DaemonSet",
    "command": "kubectl get ds"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Список во всех namespace",
    "command": "kubectl get ds -A"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Описание DaemonSet",
    "command": "kubectl describe ds <ds-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "DaemonSet в формате YAML",
    "command": "kubectl get ds <ds-name> -o yaml"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Роллинг-рестарт DaemonSet (на всех нодах)",
    "command": "kubectl rollout restart ds/<ds-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Статус обновления DaemonSet",
    "command": "kubectl rollout status ds/<ds-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "История обновлений DaemonSet",
    "command": "kubectl rollout history ds/<ds-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Откатить DaemonSet на предыдущую ревизию",
    "command": "kubectl rollout undo ds/<ds-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Обновить image в DaemonSet",
    "command": "kubectl set image ds/<ds-name> <container-name>=<image>:<tag>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Удалить DaemonSet (и его поды)",
    "command": "kubectl delete ds <ds-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Удалить DaemonSet без удаления подов",
    "command": "kubectl delete ds <ds-name> --cascade=orphan"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Показать DaemonSet с покрытием нод",
    "command": "kubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "daemonsets",
    "section": "DaemonSets",
    "comment": "Список подов DaemonSet (по label)",
    "command": "kubectl get pods -l app=<ds-name> -o wide"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Список всех Jobs",
    "command": "kubectl get jobs"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Список всех CronJobs",
    "command": "kubectl get cronjobs"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Список всех CronJobs",
    "command": "kubectl get cj"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Описание Job",
    "command": "kubectl describe job <job-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Описание CronJob",
    "command": "kubectl describe cronjob <cronjob-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Создать Job из образа",
    "command": "kubectl create job <job-name> --image=busybox -- echo \"Hello\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Создать Job из существующего CronJob (вручную запустить)",
    "command": "kubectl create job <job-name> --from=cronjob/<cronjob-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Создать CronJob (каждые 5 минут)",
    "command": "kubectl create cronjob <name> --image=busybox --schedule=\"*/5 * * * *\" -- echo \"tick\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Создать CronJob (каждый день в 02:00)",
    "command": "kubectl create cronjob <name> --image=busybox --schedule=\"0 2 * * *\" -- /bin/sh -c \"backup.sh\""
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Посмотреть логи Job (через поды)",
    "command": "kubectl logs -l job-name=<job-name>"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Дождаться завершения Job",
    "command": "kubectl wait --for=condition=Complete job/<job-name> --timeout=120s"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Удалить завершённые Jobs",
    "command": "kubectl delete jobs --field-selector status.successful=1"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Приостановить CronJob",
    "command": "kubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":true}}'"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Возобновить CronJob",
    "command": "kubectl patch cronjob <cronjob-name> -p '{\"spec\":{\"suspend\":false}}'"
  },
  {
    "lang": "ru",
    "category": "workloads",
    "file": "ru/workloads.md",
    "hash": "jobs-и-cronjobs",
    "section": "Jobs и CronJobs",
    "comment": "Удалить CronJob (и все связанные Jobs)",
    "command": "kubectl delete cronjob <cronjob-name>"
  }
];
