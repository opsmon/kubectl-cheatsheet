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
