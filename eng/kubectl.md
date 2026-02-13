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

# After starting proxy — access API via curl
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
