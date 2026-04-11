# kubectl - Security

> Quick navigation tip: use `Ctrl/Cmd + F` to jump to sections. Key terms: `rbac`, `auth`, `csr`, `pss`, `security-context`, `pdb`, `quota`.

## RBAC - Roles and Access Control

```bash
# List all roles in namespace
kubectl get roles

# List all ClusterRoles
kubectl get clusterroles

# List RoleBindings
kubectl get rolebindings

# List ClusterRoleBindings
kubectl get clusterrolebindings

# Describe role
kubectl describe role <role-name>
kubectl describe clusterrole <clusterrole-name>

# Create role (allows get/list pods)
kubectl create role pod-reader --verb=get,list,watch --resource=pods

# Create ClusterRole
kubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods

# Bind role to user
kubectl create rolebinding <binding-name> --role=pod-reader --user=<username>

# Bind role to ServiceAccount
kubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>

# Bind ClusterRole to user (cluster-wide)
kubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>

# Create ServiceAccount
kubectl create serviceaccount <sa-name>

# List ServiceAccounts
kubectl get serviceaccounts
kubectl get sa

# Describe ServiceAccount
kubectl describe sa <sa-name>

# Check own permissions
kubectl auth can-i --list

# Check specific permission
kubectl auth can-i create pods
kubectl auth can-i delete deployments -n production

# Check permissions for another user
kubectl auth can-i create pods --as=<username>

# Check permissions for ServiceAccount
kubectl auth can-i create pods --as=system:serviceaccount:<namespace>:<sa-name>

# Get token for ServiceAccount (k8s < 1.24)
kubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d

# Create token for ServiceAccount (k8s >= 1.24)
kubectl create token <sa-name>

# Create token with custom TTL
kubectl create token <sa-name> --duration=24h
```

## Checking permissions (auth)

```bash
# Check if you can perform an action in the current namespace
kubectl auth can-i get pods
kubectl auth can-i create deployments
kubectl auth can-i delete secrets

# Check in a specific namespace
kubectl auth can-i get pods -n kube-system

# Check in all namespaces
kubectl auth can-i get pods --all-namespaces

# List all actions you are allowed to perform in current namespace
kubectl auth can-i --list
kubectl auth can-i --list -n staging

# Impersonate another user to check their permissions
kubectl auth can-i get pods --as dev-user
kubectl auth can-i get pods --as system:serviceaccount:default:mysa

# Impersonate a group
kubectl auth can-i get pods --as-group system:masters --as fake-user

# Check if a ServiceAccount can do something (useful for debugging workloads)
kubectl auth can-i list pods \
  --as system:serviceaccount:<namespace>:<serviceaccount-name>

# Show current identity (user, groups, extra)
kubectl auth whoami

# Reconcile RBAC objects from a file (applies missing rules, non-destructive)
kubectl auth reconcile -f rbac-manifest.yaml

# Dry-run reconcile to preview changes
kubectl auth reconcile -f rbac-manifest.yaml --dry-run=client
```

## Certificate Signing Requests (CSR)

```bash
# List all CSRs in cluster
kubectl get csr
kubectl get certificatesigningrequests

# Show CSR with status and signer
kubectl get csr -o custom-columns=NAME:.metadata.name,AGE:.metadata.creationTimestamp,SIGNERNAME:.spec.signerName,REQUESTOR:.spec.username,CONDITION:.status.conditions[0].type

# Describe CSR (shows subject, usages, events)
kubectl describe csr <csr-name>

# Approve a CSR
kubectl certificate approve <csr-name>

# Deny a CSR
kubectl certificate deny <csr-name>

# Delete a CSR
kubectl delete csr <csr-name>

# Create a CSR object from a PEM file (k8s >= 1.18)
cat <<EOF | kubectl apply -f -
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: my-user
spec:
  request: $(cat my-user.csr | base64 | tr -d '\n')
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 86400   # 1 day
  usages:
  - client auth
EOF

# Retrieve the signed certificate after approval
kubectl get csr <csr-name> -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt

# Full workflow: generate key + CSR, submit, approve, fetch cert
# 1. Generate private key and CSR with openssl
openssl genrsa -out my-user.key 2048
openssl req -new -key my-user.key -out my-user.csr -subj "/CN=my-user/O=my-group"

# 2. Submit CSR to Kubernetes (see above)

# 3. Approve
kubectl certificate approve my-user

# 4. Fetch signed cert
kubectl get csr my-user -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt

# 5. Add user to kubeconfig
kubectl config set-credentials my-user --client-key=my-user.key --client-certificate=my-user.crt --embed-certs=true
kubectl config set-context my-user-context --cluster=<cluster-name> --user=my-user
```

## Pod Security Standards (PSS)

```bash
# Check current Pod Security labels on a namespace
kubectl get ns <namespace> --show-labels
kubectl get ns <namespace> -o jsonpath='{.metadata.labels.pod-security\.kubernetes\.io/enforce}'

# Enable enforce=baseline mode
kubectl label ns <namespace> pod-security.kubernetes.io/enforce=baseline --overwrite

# Enable enforce=restricted mode (stricter)
kubectl label ns <namespace> pod-security.kubernetes.io/enforce=restricted --overwrite

# Add warn/audit modes for soft validation
kubectl label ns <namespace> pod-security.kubernetes.io/warn=restricted --overwrite
kubectl label ns <namespace> pod-security.kubernetes.io/audit=restricted --overwrite

# Pin policy version (recommended)
kubectl label ns <namespace> pod-security.kubernetes.io/enforce-version=v1.30 --overwrite
kubectl label ns <namespace> pod-security.kubernetes.io/warn-version=v1.30 --overwrite
kubectl label ns <namespace> pod-security.kubernetes.io/audit-version=v1.30 --overwrite

# Remove PSS labels from namespace
kubectl label ns <namespace> pod-security.kubernetes.io/enforce-
kubectl label ns <namespace> pod-security.kubernetes.io/warn-
kubectl label ns <namespace> pod-security.kubernetes.io/audit-

# Check warnings on apply (if policy is violated)
kubectl apply -f pod.yaml -n <namespace>

# Inspect pod securityContext quickly
kubectl get pod <pod-name> -n <namespace> -o yaml | grep -A 40 -E 'securityContext|runAsNonRoot|privileged|allowPrivilegeEscalation|capabilities'
```

## Security Context

```bash
# View securityContext of a running pod
kubectl get pod <pod-name> -o yaml | grep -A 20 securityContext

# Check if pods run as root across all namespaces
kubectl get pods -A -o jsonpath='{range .items[*]}{.metadata.namespace}{" "}{.metadata.name}{" runAsUser:"}{.spec.securityContext.runAsUser}{"\n"}{end}'

# Show uid / non-root flag per pod
kubectl get pods -n <namespace> -o custom-columns=NAME:.metadata.name,UID:.spec.securityContext.runAsUser,NON_ROOT:.spec.securityContext.runAsNonRoot

# Find privileged containers in cluster
kubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | "\(.metadata.namespace)/\(.metadata.name)"'

# Check hostNetwork / hostPID usage
kubectl get pods -A -o custom-columns=NS:.metadata.namespace,NAME:.metadata.name,HOST_NET:.spec.hostNetwork,HOST_PID:.spec.hostPID | grep -v '<none>'

# Pod-level securityContext example (applied to all containers):
# spec:
#   securityContext:
#     runAsNonRoot: true
#     runAsUser: 1000
#     runAsGroup: 3000
#     fsGroup: 2000
#     seccompProfile:
#       type: RuntimeDefault

# Container-level securityContext example (most restrictive):
# spec:
#   containers:
#   - name: app
#     securityContext:
#       allowPrivilegeEscalation: false
#       readOnlyRootFilesystem: true
#       runAsNonRoot: true
#       runAsUser: 1000
#       capabilities:
#         drop:
#         - ALL
#         add:
#         - NET_BIND_SERVICE   # only if port < 1024 needed

# Verify readOnlyRootFilesystem is set (write attempt will fail):
kubectl exec <pod-name> -- touch /test-write
```

## PodDisruptionBudget (PDB)

```bash
# List all PDBs
kubectl get poddisruptionbudget
kubectl get pdb

# List in all namespaces
kubectl get pdb -A

# Describe PDB
kubectl describe pdb <pdb-name>

# View PDB as YAML
kubectl get pdb <pdb-name> -o yaml

# Create PDB from file
kubectl apply -f pdb.yaml

# Delete PDB
kubectl delete pdb <pdb-name>

# Show PDB with disruption allowed status
kubectl get pdb -o custom-columns=NAME:.metadata.name,MIN-AVAILABLE:.spec.minAvailable,MAX-UNAVAILABLE:.spec.maxUnavailable,ALLOWED:.status.disruptionsAllowed

# Example PDB YAML (at least 2 pods must be available):
# apiVersion: policy/v1
# kind: PodDisruptionBudget
# metadata:
#   name: my-pdb
# spec:
#   minAvailable: 2
#   selector:
#     matchLabels:
#       app: my-app

# Example PDB YAML (max 1 pod unavailable at a time):
# spec:
#   maxUnavailable: 1
#   selector:
#     matchLabels:
#       app: my-app
```

## ResourceQuota and LimitRange

```bash
# List ResourceQuotas in namespace
kubectl get resourcequota
kubectl get quota

# List in all namespaces
kubectl get quota -A

# Describe ResourceQuota (shows used vs limit)
kubectl describe quota <quota-name>

# Create ResourceQuota from file
kubectl apply -f quota.yaml

# Delete ResourceQuota
kubectl delete quota <quota-name>

# List LimitRanges
kubectl get limitrange
kubectl get limits

# Describe LimitRange
kubectl describe limits <limitrange-name>

# Create LimitRange from file
kubectl apply -f limitrange.yaml

# Example ResourceQuota YAML:
# apiVersion: v1
# kind: ResourceQuota
# metadata:
#   name: namespace-quota
# spec:
#   hard:
#     requests.cpu: "4"
#     requests.memory: 8Gi
#     limits.cpu: "8"
#     limits.memory: 16Gi
#     pods: "20"
#     services: "10"
#     persistentvolumeclaims: "5"

# Example LimitRange YAML (default limits for containers):
# apiVersion: v1
# kind: LimitRange
# metadata:
#   name: container-limits
# spec:
#   limits:
#   - type: Container
#     default:
#       cpu: 500m
#       memory: 256Mi
#     defaultRequest:
#       cpu: 100m
#       memory: 128Mi
#     max:
#       cpu: "2"
#       memory: 2Gi
```


---

[← Back to README](../README.md)
