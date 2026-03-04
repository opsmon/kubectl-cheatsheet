# kubectl commands

> Quick navigation tip: use `Ctrl/Cmd + F` with section keys in parentheses (`get`, `logs`, `exec`, `rollout`, `debug`, `kustomize`).

## Quick Links

- [get](#getting-information-get)
- [describe](#detailed-information-describe)
- [logs](#viewing-logs-logs)
- [exec](#execute-commands-in-container-exec)
- [apply/create](#creating-and-applying-resources-applycreate)
- [delete](#deleting-resources-delete)
- [scale](#scaling-scale)
- [rollout](#managing-updates-rollout)
- [config](#contexts-and-configuration-config)
- [debug](#debugging-and-diagnostics-debug)
- [kustomize](#working-with-kustomize-kustomize)
- [troubleshooting](#troubleshooting-common-pod-issues-troubleshooting)
- [krew](#kubectl-plugins-krew)

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

## Detailed information (describe)

```bash
# Detailed info about a pod
kubectl describe pod <pod-name>

# Detailed info about a node
kubectl describe node <node-name>

# Detailed info about a service
kubectl describe service <service-name>
kubectl describe svc <service-name>

# Detailed info about a deployment
kubectl describe deployment <deployment-name>

# Detailed info about a configmap
kubectl describe configmap <configmap-name>
kubectl describe cm <configmap-name>

# Detailed info about a secret
kubectl describe secret <secret-name>

# Detailed info about an ingress
kubectl describe ingress <ingress-name>

# Describe in specific namespace
kubectl describe pod <pod-name> -n <namespace>
```

## Viewing logs (logs)

```bash
# Pod logs
kubectl logs <pod-name>

# Logs of specific container in pod (if multiple containers)
kubectl logs <pod-name> -c <container-name>

# Real-time logs (follow)
kubectl logs -f <pod-name>

# Last N lines of logs
kubectl logs --tail=100 <pod-name>

# Logs from last hour
kubectl logs --since=1h <pod-name>

# Logs from last 30 minutes
kubectl logs --since=30m <pod-name>

# Logs of previous container (after restart)
kubectl logs <pod-name> --previous
kubectl logs <pod-name> -p

# Logs of all pods by label
kubectl logs -l app=myapp

# Logs in specific namespace
kubectl logs <pod-name> -n <namespace>

# Combination: follow + tail + namespace
kubectl logs -f --tail=50 <pod-name> -n <namespace>
```

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
```

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

## Scaling (scale)

```bash
# Scale deployment to N replicas
kubectl scale deployment <deployment-name> --replicas=3

# Scale replicaset
kubectl scale replicaset <replicaset-name> --replicas=5

# Scale statefulset
kubectl scale statefulset <statefulset-name> --replicas=2

# Scale in specific namespace
kubectl scale deployment <deployment-name> --replicas=3 -n <namespace>

# Auto-scaling (HPA - Horizontal Pod Autoscaler)
kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80

# View auto-scaling status
kubectl get hpa
```

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
```

## Managing updates (rollout)

```bash
# Deployment rollout status
kubectl rollout status deployment/<deployment-name>

# Rollout history
kubectl rollout history deployment/<deployment-name>

# Rollback deployment to previous version
kubectl rollout undo deployment/<deployment-name>

# Rollback to specific revision
kubectl rollout undo deployment/<deployment-name> --to-revision=2

# Restart all pods in deployment
kubectl rollout restart deployment/<deployment-name>

# Pause rollout
kubectl rollout pause deployment/<deployment-name>

# Resume rollout
kubectl rollout resume deployment/<deployment-name>

# View specific revision details
kubectl rollout history deployment/<deployment-name> --revision=3
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

## Resource monitoring (top)

```bash
# Node resource usage
kubectl top nodes

# Pod resource usage
kubectl top pods

# Top pods in all namespaces
kubectl top pods -A

# Top pods in specific namespace
kubectl top pods -n <namespace>

# Top sorted by CPU
kubectl top pods --sort-by=cpu

# Top sorted by memory
kubectl top pods --sort-by=memory

# Top for containers inside pods
kubectl top pods --containers
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

## Debugging and diagnostics (debug)

```bash
# Create debug container in existing pod
kubectl debug <pod-name> -it --image=busybox

# Create pod copy for debugging
kubectl debug <pod-name> -it --image=busybox --copy-to=debug-pod

# Debug node (creates privileged pod on node)
kubectl debug node/<node-name> -it --image=ubuntu

# View events in namespace
kubectl get events

# Events sorted by time
kubectl get events --sort-by='.lastTimestamp'

# Events for specific pod
kubectl get events --field-selector involvedObject.name=<pod-name>

# Check API server status
kubectl cluster-info

# Detailed cluster information
kubectl cluster-info dump

# Check API access
kubectl auth can-i create pods
kubectl auth can-i delete deployments --namespace=production

# Check access for another user
kubectl auth can-i create pods --as=<user>

# List all permissions
kubectl auth can-i --list

# Check why pod is not starting
kubectl describe pod <pod-name> | grep -A 10 Events

# Check cluster components status
kubectl get componentstatuses
kubectl get cs
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

## Waiting for conditions (wait)

```bash
# Wait for pod to be ready
kubectl wait --for=condition=Ready pod/<pod-name>

# Wait with timeout
kubectl wait --for=condition=Ready pod/<pod-name> --timeout=60s

# Wait for all pods by label
kubectl wait --for=condition=Ready pods -l app=myapp

# Wait for deployment rollout
kubectl wait --for=condition=Available deployment/<deployment-name>

# Wait for resource deletion
kubectl wait --for=delete pod/<pod-name> --timeout=30s

# Wait for job completion
kubectl wait --for=condition=Complete job/<job-name>

# Wait in specific namespace
kubectl wait --for=condition=Ready pod/<pod-name> -n <namespace>
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

## Running pods and jobs (run)

```bash
# Run pod with image
kubectl run <pod-name> --image=nginx

# Run pod and open shell immediately
kubectl run -it debug --image=busybox -- /bin/sh

# Run pod with auto-delete on exit
kubectl run tmp --rm -it --image=busybox -- /bin/sh

# Run pod with environment variables
kubectl run <pod-name> --image=nginx --env="DB_HOST=db" --env="DB_PORT=5432"

# Run pod with port specified
kubectl run <pod-name> --image=nginx --port=80

# Run pod with labels
kubectl run <pod-name> --image=nginx --labels="app=web,tier=frontend"

# Run pod in specific namespace
kubectl run <pod-name> --image=nginx -n <namespace>

# Run pod and create service immediately
kubectl run <pod-name> --image=nginx --port=80 --expose

# Generate YAML without creating (dry-run)
kubectl run <pod-name> --image=nginx --dry-run=client -o yaml

# Run one-time task (Job)
kubectl create job <job-name> --image=busybox -- echo "Hello"

# Run CronJob
kubectl create cronjob <name> --image=busybox --schedule="*/5 * * * *" -- echo "tick"
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

## Working with Kustomize (kustomize)

```bash
# Apply configuration via kustomize
kubectl apply -k ./overlays/production/

# Preview final YAML without applying
kubectl kustomize ./overlays/production/

# Delete resources via kustomize
kubectl delete -k ./overlays/production/

# Diff with kustomize
kubectl diff -k ./overlays/production/

# Apply base configuration
kubectl apply -k ./base/

# Kustomize project structure:
# ./base/
#   kustomization.yaml
#   deployment.yaml
#   service.yaml
# ./overlays/
#   production/
#     kustomization.yaml  (patches, images, replicas)
#   staging/
#     kustomization.yaml

# Example kustomization.yaml:
# apiVersion: kustomize.config.k8s.io/v1beta1
# kind: Kustomization
# resources:
#   - ../../base
# images:
#   - name: nginx
#     newTag: "1.21"
# replicas:
#   - name: my-deployment
#     count: 3
```

## Persistent Volumes (pv/pvc)

```bash
# List all PersistentVolumes (cluster-wide)
kubectl get pv

# List all PersistentVolumeClaims
kubectl get pvc

# List PVCs in all namespaces
kubectl get pvc -A

# Detailed info about PV
kubectl describe pv <pv-name>

# Detailed info about PVC
kubectl describe pvc <pvc-name>

# List StorageClasses
kubectl get storageclass
kubectl get sc

# Describe StorageClass
kubectl describe sc <storageclass-name>

# Create PVC from file
kubectl apply -f pvc.yaml

# Delete PVC
kubectl delete pvc <pvc-name>

# Delete PV
kubectl delete pv <pv-name>

# Get PV sorted by capacity
kubectl get pv --sort-by=.spec.capacity.storage

# Show PVC with volume name and storage class
kubectl get pvc -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,VOLUME:.spec.volumeName,CAPACITY:.status.capacity.storage,CLASS:.spec.storageClassName

# Check which pod is using PVC
kubectl get pods -o json | grep -i "claimName"

# PV reclaim policy types: Retain, Recycle, Delete
kubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy,STATUS:.status.phase

# Change PV reclaim policy
kubectl patch pv <pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'

# Force delete stuck PVC (remove finalizers)
kubectl patch pvc <pvc-name> -p '{"metadata":{"finalizers":null}}'
```

## Secrets management (secret)

```bash
# List secrets in current namespace
kubectl get secrets

# List secrets in all namespaces
kubectl get secrets -A

# Describe secret metadata (without decoded values)
kubectl describe secret <secret-name>

# View secret as YAML
kubectl get secret <secret-name> -o yaml

# Decode one key from secret
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d

# Create generic secret from literal values
kubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=changeme

# Create secret from file
kubectl create secret generic <secret-name> --from-file=./config.env

# Create TLS secret
kubectl create secret tls <secret-name> --cert=tls.crt --key=tls.key

# Update secret from file (apply declaratively)
kubectl create secret generic <secret-name> --from-file=./config.env --dry-run=client -o yaml | kubectl apply -f -

# Delete secret
kubectl delete secret <secret-name>
```

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

## Jobs and CronJobs

```bash
# List all Jobs
kubectl get jobs

# List all CronJobs
kubectl get cronjobs
kubectl get cj

# Describe Job
kubectl describe job <job-name>

# Describe CronJob
kubectl describe cronjob <cronjob-name>

# Create Job from image
kubectl create job <job-name> --image=busybox -- echo "Hello"

# Create Job from existing CronJob (trigger manually)
kubectl create job <job-name> --from=cronjob/<cronjob-name>

# Create CronJob (every 5 minutes)
kubectl create cronjob <name> --image=busybox --schedule="*/5 * * * *" -- echo "tick"

# Create CronJob (every day at 02:00)
kubectl create cronjob <name> --image=busybox --schedule="0 2 * * *" -- /bin/sh -c "backup.sh"

# View Job logs (via pods)
kubectl logs -l job-name=<job-name>

# Wait for Job completion
kubectl wait --for=condition=Complete job/<job-name> --timeout=120s

# Delete completed Jobs
kubectl delete jobs --field-selector status.successful=1

# Suspend CronJob
kubectl patch cronjob <cronjob-name> -p '{"spec":{"suspend":true}}'

# Resume CronJob
kubectl patch cronjob <cronjob-name> -p '{"spec":{"suspend":false}}'

# Delete CronJob (and all related Jobs)
kubectl delete cronjob <cronjob-name>
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

# Check which pods are affected by NetworkPolicy
kubectl get pods -l <selector-from-policy>
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

# List IngressClasses
kubectl get ingressclass
```

## StatefulSets

```bash
# List all StatefulSets
kubectl get statefulsets
kubectl get sts

# List in all namespaces
kubectl get sts -A

# Describe StatefulSet
kubectl describe sts <sts-name>

# View StatefulSet as YAML
kubectl get sts <sts-name> -o yaml

# Scale StatefulSet
kubectl scale sts <sts-name> --replicas=3

# Rollout restart StatefulSet (rolling restart of all pods)
kubectl rollout restart sts/<sts-name>

# Rollout status of StatefulSet
kubectl rollout status sts/<sts-name>

# Rollout history of StatefulSet
kubectl rollout history sts/<sts-name>

# Rollback StatefulSet to previous revision
kubectl rollout undo sts/<sts-name>

# Rollback to specific revision
kubectl rollout undo sts/<sts-name> --to-revision=2

# Update image in StatefulSet
kubectl set image sts/<sts-name> <container-name>=<image>:<tag>

# Delete StatefulSet (keeps pods by default)
kubectl delete sts <sts-name>

# Delete StatefulSet and all its pods (foreground)
kubectl delete sts <sts-name> --cascade=foreground

# Delete StatefulSet without deleting pods (orphan)
kubectl delete sts <sts-name> --cascade=orphan

# List pods belonging to StatefulSet (by label)
kubectl get pods -l app=<sts-name>

# Show StatefulSet with replica count
kubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas
```

## DaemonSets

```bash
# List all DaemonSets
kubectl get daemonsets
kubectl get ds

# List in all namespaces
kubectl get ds -A

# Describe DaemonSet
kubectl describe ds <ds-name>

# View DaemonSet as YAML
kubectl get ds <ds-name> -o yaml

# Rollout restart DaemonSet (rolling restart on all nodes)
kubectl rollout restart ds/<ds-name>

# Rollout status of DaemonSet
kubectl rollout status ds/<ds-name>

# Rollout history of DaemonSet
kubectl rollout history ds/<ds-name>

# Rollback DaemonSet to previous revision
kubectl rollout undo ds/<ds-name>

# Update image in DaemonSet
kubectl set image ds/<ds-name> <container-name>=<image>:<tag>

# Delete DaemonSet (and its pods)
kubectl delete ds <ds-name>

# Delete DaemonSet without deleting pods (orphan)
kubectl delete ds <ds-name> --cascade=orphan

# Show DaemonSet with node coverage
kubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable

# List pods belonging to DaemonSet (by label)
kubectl get pods -l app=<ds-name> -o wide
```

## ConfigMaps

```bash
# List all ConfigMaps in current namespace
kubectl get configmaps
kubectl get cm

# List in all namespaces
kubectl get cm -A

# Describe ConfigMap
kubectl describe cm <configmap-name>

# View ConfigMap as YAML
kubectl get cm <configmap-name> -o yaml

# Create ConfigMap from literal values
kubectl create configmap <name> --from-literal=key1=value1 --from-literal=key2=value2

# Create ConfigMap from file (filename becomes the key)
kubectl create configmap <name> --from-file=config.txt

# Create ConfigMap from file with custom key
kubectl create configmap <name> --from-file=mykey=config.txt

# Create ConfigMap from directory (all files become keys)
kubectl create configmap <name> --from-file=./configs/

# Create ConfigMap from env file (.env format)
kubectl create configmap <name> --from-env-file=.env

# Edit ConfigMap
kubectl edit cm <configmap-name>

# Delete ConfigMap
kubectl delete cm <configmap-name>

# Get value of a specific key
kubectl get cm <configmap-name> -o jsonpath='{.data.key}'

# List all keys in ConfigMap
kubectl get cm <configmap-name> -o go-template='{{range $k,$v := .data}}{{$k}}{{"\n"}}{{end}}'

# Update ConfigMap idempotently (dry-run + apply)
kubectl create configmap <name> --from-file=config.txt --dry-run=client -o yaml | kubectl apply -f -

# Show all ConfigMaps with key count
kubectl get cm -o custom-columns=NAME:.metadata.name,KEYS:.data
```

## HorizontalPodAutoscaler (HPA)

```bash
# List all HPAs
kubectl get hpa
kubectl get hpa -A

# Describe HPA
kubectl describe hpa <hpa-name>

# View HPA as YAML
kubectl get hpa <hpa-name> -o yaml

# Create HPA for a deployment (CPU-based)
kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=70

# Create HPA from file
kubectl apply -f hpa.yaml

# Delete HPA
kubectl delete hpa <hpa-name>

# Show HPA with current/target replicas and metrics
kubectl get hpa -o custom-columns=NAME:.metadata.name,MINPODS:.spec.minReplicas,MAXPODS:.spec.maxReplicas,REPLICAS:.status.currentReplicas

# Edit HPA (change thresholds or replicas)
kubectl edit hpa <hpa-name>

# Example HPA YAML (CPU + Memory):
# apiVersion: autoscaling/v2
# kind: HorizontalPodAutoscaler
# metadata:
#   name: my-hpa
# spec:
#   scaleTargetRef:
#     apiVersion: apps/v1
#     kind: Deployment
#     name: my-deployment
#   minReplicas: 2
#   maxReplicas: 10
#   metrics:
#   - type: Resource
#     resource:
#       name: cpu
#       target:
#         type: Utilization
#         averageUtilization: 70
#   - type: Resource
#     resource:
#       name: memory
#       target:
#         type: Utilization
#         averageUtilization: 80
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

## Troubleshooting common pod issues (troubleshooting)

```bash
# Find non-running pods in all namespaces
kubectl get pods -A --field-selector='status.phase!=Running'

# Show restarts and current state quickly
kubectl get pods -A -o custom-columns=NS:.metadata.namespace,POD:.metadata.name,PHASE:.status.phase,RESTARTS:.status.containerStatuses[0].restartCount,STATE:.status.containerStatuses[0].state.waiting.reason

# Inspect events for a specific pod (image pulls, scheduling, probes)
kubectl describe pod <pod-name> -n <namespace>
kubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by=.lastTimestamp

# CrashLoopBackOff: read previous container logs
kubectl logs <pod-name> -n <namespace> --previous
kubectl logs <pod-name> -n <namespace> -c <container-name> --previous

# Pending pod: check scheduling errors and requested resources
kubectl describe pod <pod-name> -n <namespace> | grep -A 20 -E 'Events|Requests|Limits|node(s)'

# ImagePullBackOff / ErrImagePull: verify image and pull secret
kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Failed|ErrImagePull|ImagePullBackOff|pull'
kubectl get secret -n <namespace>

# Probe failures (liveness/readiness/startup)
kubectl describe pod <pod-name> -n <namespace> | grep -A 30 -E 'Liveness|Readiness|Startup|probe'

# Check effective environment and mounted config/secret inside container
kubectl exec -it <pod-name> -n <namespace> -- env
kubectl exec -it <pod-name> -n <namespace> -- ls -la /etc/config /etc/secrets

# Temporary debug container in target pod network namespace
kubectl debug <pod-name> -n <namespace> -it --image=busybox
```

## Tips and useful patterns

```bash
# Generate YAML template without creating resource (dry-run)
kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml
kubectl run my-pod --image=nginx --dry-run=client -o yaml

# Apply with prune (delete resources not in files)
kubectl apply -f ./configs/ --prune -l app=myapp

# Force re-pull of image by restarting deployment
kubectl rollout restart deployment/<deployment-name>

# Quick namespace switch (alias pattern)
# alias kns='kubectl config set-context --current --namespace'
# kns production

# Watch rollout progress
kubectl rollout status deployment/<deployment-name> --watch

# Get resource version (useful for optimistic locking)
kubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'

# Get all container images running in cluster
kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{"\n"}{end}{end}' | sort -u

# Find pods that are NOT ready
kubectl get pods -A --no-headers | awk '$3 != $4 || $5 != "Running"'

# Delete all failed pods across all namespaces
kubectl delete pods --field-selector=status.phase=Failed -A

# Get pods restarted more than N times
kubectl get pods -A --no-headers | awk '$5 > 5'

# Copy kubeconfig context to another file
KUBECONFIG=~/.kube/config:~/.kube/other-config kubectl config view --flatten > ~/.kube/merged-config

# Exec one-liner into first pod matching a label
kubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh

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
