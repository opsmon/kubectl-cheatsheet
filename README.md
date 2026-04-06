# kubectl Cheatsheet

> Practical `kubectl` cheatsheet for day-to-day Kubernetes work.

---

## Topics

| # | Topic | Description |
|---|-------|-------------|
| 1 | [Viewing & Diagnostics](eng/viewing.md) | get, describe, logs, top, events, debug, troubleshooting |
| 2 | [Resource Management](eng/management.md) | apply, create, edit, patch, set, delete, diff, replace |
| 3 | [Workloads](eng/workloads.md) | run, rollout, scale, HPA, VPA, StatefulSets, DaemonSets, Jobs |
| 4 | [Network](eng/network.md) | port-forward, expose, ingress, networkpolicy, proxy |
| 5 | [Storage & Config](eng/storage.md) | configmaps, secrets, pv/pvc, kustomize |
| 6 | [Security](eng/security.md) | rbac, auth, csr, pss, security-context, pdb, quota |
| 7 | [Cluster & Infrastructure](eng/cluster.md) | config, namespaces, nodes, crd, api-resources, field-selectors |
| 8 | [Utilities & Tools](eng/utilities.md) | exec, cp, labels, wait, jsonpath, scheduling, tips, helm, krew, aliases |

---

## Quick Navigation

### Viewing & Diagnostics
[get](eng/viewing.md#getting-information-get) · [describe](eng/viewing.md#detailed-information-describe) · [logs](eng/viewing.md#viewing-logs-logs) · [top](eng/viewing.md#resource-monitoring-top) · [events](eng/viewing.md#events-events) · [debug](eng/viewing.md#debugging-and-diagnostics-debug) · [troubleshooting](eng/viewing.md#troubleshooting-common-pod-issues-troubleshooting)

### Resource Management
[apply/create](eng/management.md#creating-and-applying-resources-applycreate) · [edit](eng/management.md#editing-resources-edit) · [patch](eng/management.md#patching-resources-patch) · [set](eng/management.md#quick-resource-modification-set) · [delete](eng/management.md#deleting-resources-delete) · [diff](eng/management.md#comparing-configurations-diff) · [replace](eng/management.md#replace-and-attach-to-resources-replaceattach) · [ssa](eng/management.md#server-side-apply-ssa)

### Workloads
[run](eng/workloads.md#running-pods-and-jobs-run) · [rollout](eng/workloads.md#managing-updates-rollout) · [scale](eng/workloads.md#scaling-scale) · [hpa](eng/workloads.md#horizontalpodautoscaler-hpa) · [vpa](eng/workloads.md#verticalpodautoscaler-vpa) · [statefulsets](eng/workloads.md#statefulsets) · [daemonsets](eng/workloads.md#daemonsets) · [jobs](eng/workloads.md#jobs-and-cronjobs)

### Network
[port-forward](eng/network.md#port-forwarding-port-forward) · [expose](eng/network.md#creating-services-expose) · [ingress](eng/network.md#ingress) · [networkpolicy](eng/network.md#network-policies-networkpolicy) · [proxy](eng/network.md#proxy-and-api-access-proxy)

### Storage & Config
[configmaps](eng/storage.md#configmaps) · [secrets](eng/storage.md#secrets-management-secret) · [pv/pvc](eng/storage.md#persistent-volumes-pvpvc) · [kustomize](eng/storage.md#working-with-kustomize-kustomize)

### Security
[rbac](eng/security.md#rbac---roles-and-access-control) · [auth](eng/security.md#checking-permissions-auth) · [csr](eng/security.md#certificate-signing-requests-csr) · [pss](eng/security.md#pod-security-standards-pss) · [security-context](eng/security.md#security-context) · [pdb](eng/security.md#poddisruptionbudget-pdb) · [quota](eng/security.md#resourcequota-and-limitrange)

### Cluster & Infrastructure
[config](eng/cluster.md#contexts-and-configuration-config) · [namespaces](eng/cluster.md#namespace-management) · [nodes](eng/cluster.md#node-management-taintcordondrain) · [crd](eng/cluster.md#custom-resource-definitions-crd) · [api-resources](eng/cluster.md#working-with-api-resources-api-resources) · [field-selectors](eng/cluster.md#field-selectors-and-filtering)

### Utilities & Tools
[exec](eng/utilities.md#execute-commands-in-container-exec) · [cp](eng/utilities.md#copying-files-cp) · [labels](eng/utilities.md#working-with-labels-labelannotate) · [wait](eng/utilities.md#waiting-for-conditions-wait) · [jsonpath](eng/utilities.md#advanced-output-jsonpathcustom-columns) · [scheduling](eng/utilities.md#pod-scheduling-affinity--tolerations--nodeselector) · [tips](eng/utilities.md#tips-and-useful-patterns) · [helm](eng/utilities.md#helm) · [krew](eng/utilities.md#kubectl-plugins-krew) · [aliases](eng/utilities.md#shell-aliases--autocompletion)

---

## Structure

```
.
├── README.md
└── eng/
    ├── viewing.md       — get, describe, logs, top, events, debug, troubleshooting
    ├── management.md    — apply, edit, patch, set, delete, diff, replace, SSA
    ├── workloads.md     — run, rollout, scale, HPA, VPA, StatefulSets, DaemonSets, Jobs
    ├── network.md       — port-forward, expose, ingress, networkpolicy, proxy
    ├── storage.md       — configmaps, secrets, pv/pvc, kustomize
    ├── security.md      — rbac, auth, csr, pss, security-context, pdb, quota
    ├── cluster.md       — config, namespaces, nodes, crd, api-resources, field-selectors
    └── utilities.md     — exec, cp, labels, wait, jsonpath, scheduling, tips, helm, krew, aliases
```

## Contributing

1. Fork the repository.
2. Add or update commands in the relevant topic file under `eng/`.
3. Open a Pull Request with a short description of what was changed.
