# kubectl - Storage & Configuration

> Quick navigation tip: use `Ctrl/Cmd + F` to jump to sections. Key terms: `configmaps`, `secrets`, `pv`, `pvc`, `kustomize`.

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


---

[← Back to README](../README.md)
