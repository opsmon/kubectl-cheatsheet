# kubectl - Workloads

> Quick navigation tip: use `Ctrl/Cmd + F` to jump to sections. Key terms: `run`, `rollout`, `scale`, `hpa`, `vpa`, `statefulsets`, `daemonsets`, `jobs`.

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

## VerticalPodAutoscaler (VPA)

```bash
# VPA is not built into Kubernetes — install the component first:
# https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler

# List all VPAs
kubectl get vpa
kubectl get vpa -A

# Describe VPA (shows recommended resources)
kubectl describe vpa <vpa-name>

# View VPA as YAML
kubectl get vpa <vpa-name> -o yaml

# Create VPA from file
kubectl apply -f vpa.yaml

# Delete VPA
kubectl delete vpa <vpa-name>

# Show VPA recommendations for all VPAs
kubectl get vpa -o custom-columns=NAME:.metadata.name,MODE:.spec.updatePolicy.updateMode,CPU_REQ:.status.recommendation.containerRecommendations[0].target.cpu,MEM_REQ:.status.recommendation.containerRecommendations[0].target.memory

# Example VPA YAML — Off mode (only shows recommendations, no auto-update):
# apiVersion: autoscaling.k8s.io/v1
# kind: VerticalPodAutoscaler
# metadata:
#   name: my-vpa
# spec:
#   targetRef:
#     apiVersion: apps/v1
#     kind: Deployment
#     name: my-deployment
#   updatePolicy:
#     updateMode: "Off"

# Example VPA YAML — Auto mode (restarts pods with new resource values):
# spec:
#   targetRef:
#     apiVersion: apps/v1
#     kind: Deployment
#     name: my-deployment
#   updatePolicy:
#     updateMode: "Auto"
#   resourcePolicy:
#     containerPolicies:
#     - containerName: app
#       minAllowed:
#         cpu: 50m
#         memory: 64Mi
#       maxAllowed:
#         cpu: "2"
#         memory: 2Gi

# updateMode options:
#   Off        — only compute recommendations, no changes applied
#   Initial    — set resources only at pod creation
#   Recreate   — evict and recreate pods when recommendations change
#   Auto       — same as Recreate (default behaviour)

# Check VPA admission controller is running
kubectl get pods -n kube-system | grep vpa
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


---

[← Back to README](../README.md)
