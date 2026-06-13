---
layout: docs
---

# kubectl - Viewing & Diagnostics

> Quick navigation tip: use `Ctrl/Cmd + F` to jump to sections. Key terms: `get`, `describe`, `logs`, `top`, `debug`, `events`, `troubleshooting`, `incidents`, `ephemeral`.

## Getting information (get)

{% include official-docs.html url="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_get/" title="kubectl get" %}

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

{% include official-docs.html url="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_describe/" title="kubectl describe" %}

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

{% include official-docs.html url="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/" title="kubectl logs" %}

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

## Resource monitoring (top)

{% include official-docs.html url="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/" title="kubectl top" %}

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

## Debugging and diagnostics (debug)

{% include official-docs.html url="https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/" title="Debugging a running Pod" %}

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

# Check API server health endpoints
kubectl get --raw='/readyz?verbose'
kubectl get --raw='/livez?verbose'
kubectl get --raw='/healthz'
```

## Events (events)

{% include official-docs.html url="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_events/" title="kubectl events" %}

> `kubectl events` is a dedicated subcommand available since kubectl 1.26. More convenient and flexible than `kubectl get events`.

```bash
# Show all events in the current namespace
kubectl events

# Events across all namespaces
kubectl events -A
kubectl events --all-namespaces

# Events for a specific resource
kubectl events --for pod/<pod-name>
kubectl events --for deployment/<deploy-name>
kubectl events --for node/<node-name>

# Filter by event type (Normal, Warning)
kubectl events --types=Warning
kubectl events --types=Normal
kubectl events --types=Warning,Normal

# Watch events in real time
kubectl events --watch
kubectl events -w

# Watch events for a specific resource in real time
kubectl events --for pod/<pod-name> --watch

# Output as JSON / YAML
kubectl events -o json
kubectl events -o yaml

# Get Warning events across the cluster and analyze with jq
kubectl events -A -o json | \
  jq '.items[] | select(.type=="Warning") | {reason: .reason, message: .message, object: .involvedObject.name}'

# Diagnose a pod in CrashLoopBackOff
kubectl events --for pod/<pod-name> --types=Warning

# Comparing approaches:
# Classic (deprecated):
kubectl get events --field-selector involvedObject.name=<pod-name>
# New (preferred):
kubectl events --for pod/<pod-name>

# All Warning events in a namespace sorted by time
kubectl events --types=Warning -o json | \
  jq -r '.items | sort_by(.lastTimestamp) | .[] | "\(.lastTimestamp) \(.reason) \(.involvedObject.name): \(.message)"'
```

## Troubleshooting common pod issues (troubleshooting)

{% include official-docs.html url="https://kubernetes.io/docs/tasks/debug/debug-application/" title="Troubleshooting applications" %}

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

## Fast incident playbooks (incidents)

```bash
# Quick namespace snapshot: pods, services, events
kubectl get pods,svc,ingress,pvc -n <namespace> -o wide
kubectl events -n <namespace> --types=Warning

# CrashLoopBackOff: what is restarting and why
kubectl get pods -n <namespace> --sort-by='.status.containerStatuses[0].restartCount'
kubectl describe pod <pod-name> -n <namespace>
kubectl logs <pod-name> -n <namespace> --previous --all-containers=true

# Rollout stuck: Deployment and ReplicaSet state
kubectl rollout status deployment/<deploy-name> -n <namespace> --timeout=60s
kubectl describe deployment/<deploy-name> -n <namespace>
kubectl get rs -n <namespace> -l app=<app-label> -o wide

# Pending pod: resources, PVC, taints, or node selector
kubectl describe pod <pod-name> -n <namespace> | grep -A 40 Events
kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints,CPU:.status.allocatable.cpu,MEM:.status.allocatable.memory
kubectl get pvc -n <namespace>

# Service is not responding: check endpoints and selector
kubectl get svc <service-name> -n <namespace> -o wide
kubectl get endpoints <service-name> -n <namespace> -o yaml
kubectl describe svc <service-name> -n <namespace>

# Cluster DNS: quick pod to test resolution
kubectl run dnscheck --rm -it --restart=Never --image=busybox:1.36 -- nslookup <service-name>.<namespace>.svc.cluster.local

# PVC will not mount: pod, PVC, and storage class events
kubectl describe pod <pod-name> -n <namespace> | grep -A 40 -E 'Mount|Volume|Events'
kubectl describe pvc <pvc-name> -n <namespace>
kubectl get storageclass

# Node pressure: find nodes and pods with high usage
kubectl describe nodes | grep -E 'Name:|Pressure|Allocated resources' -A 8
kubectl top nodes
kubectl top pods -A --sort-by=memory | head -20
```

## Ephemeral Containers

{% include official-docs.html url="https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/" title="Ephemeral Containers" %}

```bash
# Add an ephemeral debug container to a running pod (kubectl >= 1.23)
kubectl debug -it <pod-name> --image=busybox --target=<container-name>

# Use a richer debug image
kubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>

# Inspect ephemeral containers already attached to a pod
kubectl get pod <pod-name> -o jsonpath='{.spec.ephemeralContainers}' | jq .

# Create a debug copy of a pod (original is untouched)
kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --image=busybox

# Replace the entrypoint of a crashing container in the copy
kubectl debug <pod-name> -it --copy-to=<pod-name>-debug --container=<container-name> -- sh

# Share the process namespace with the target container (see its processes)
kubectl debug -it <pod-name> --image=busybox --target=<container-name> --share-processes

# Debug a node by spawning a privileged pod on it
kubectl debug node/<node-name> -it --image=busybox

# List all pods that have ephemeral containers attached
kubectl get pods -A -o json | jq '.items[] | select(.spec.ephemeralContainers != null) | .metadata.name'

# Remove a debug copy pod when done
kubectl delete pod <pod-name>-debug
```


---

[← Back to cheatsheet]({{ site.baseurl }}/)
