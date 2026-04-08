# Resource Management

> Creating, editing, patching, and deleting Kubernetes resources.

---

**Quick links:**
[apply/create](#creating-and-applying-resources-applycreate) · [edit](#editing-resources-edit) · [patch](#patching-resources-patch) · [set](#quick-resource-modification-set) · [delete](#deleting-resources-delete) · [diff](#comparing-configurations-diff) · [replace/attach](#replace-and-attach-to-resources-replaceattach)

---

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

# Apply with prune (delete resources not in files)
kubectl apply -f ./configs/ --prune -l app=myapp
```

## Server-Side Apply (SSA)

```bash
# Apply using server-side apply (k8s >= 1.18)
kubectl apply -f deployment.yaml --server-side

# Force server-side apply (resolve field manager conflicts)
kubectl apply -f deployment.yaml --server-side --force-conflicts

# Apply with custom field manager name
kubectl apply -f deployment.yaml --server-side --field-manager=my-controller

# Generate YAML template without creating resource (dry-run)
kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml
kubectl run my-pod --image=nginx --dry-run=client -o yaml
```
