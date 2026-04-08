# Безопасность

> RBAC, права доступа, сертификаты, Pod Security Standards, security context, бюджеты прерываний и квоты ресурсов.

---

**Быстрые ссылки:**
[rbac](#rbac---роли-и-управление-доступом) · [auth](#проверка-прав-доступа-auth) · [csr](#запросы-на-подпись-сертификата-csr) · [pss](#pod-security-standards-pss) · [security-context](#security-context) · [pdb](#poddisruptionbudget-pdb) · [quota](#resourcequota-и-limitrange)

---

## RBAC - Роли и управление доступом

```bash
# Список ролей в namespace
kubectl get roles

# Список ClusterRole (уровень кластера)
kubectl get clusterroles

# Список RoleBinding
kubectl get rolebindings

# Список ClusterRoleBinding
kubectl get clusterrolebindings

# Описание роли
kubectl describe role <role-name>
kubectl describe clusterrole <clusterrole-name>

# Создать роль (доступ get/list к pods)
kubectl create role pod-reader --verb=get,list,watch --resource=pods

# Создать ClusterRole
kubectl create clusterrole pod-reader --verb=get,list,watch --resource=pods

# Привязать роль к пользователю
kubectl create rolebinding <binding-name> --role=pod-reader --user=<username>

# Привязать роль к ServiceAccount
kubectl create rolebinding <binding-name> --role=pod-reader --serviceaccount=<namespace>:<sa-name>

# Привязать ClusterRole к пользователю (на весь кластер)
kubectl create clusterrolebinding <binding-name> --clusterrole=pod-reader --user=<username>

# Создать ServiceAccount
kubectl create serviceaccount <sa-name>

# Список ServiceAccount
kubectl get serviceaccounts
kubectl get sa

# Описание ServiceAccount
kubectl describe sa <sa-name>

# Получить токен ServiceAccount (k8s < 1.24)
kubectl get secret $(kubectl get sa <sa-name> -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 -d

# Создать токен для ServiceAccount (k8s >= 1.24)
kubectl create token <sa-name>

# Создать токен с кастомным TTL
kubectl create token <sa-name> --duration=24h
```

## Проверка прав доступа (auth)

```bash
# Проверить, можно ли выполнить действие в текущем неймспейсе
kubectl auth can-i get pods
kubectl auth can-i create deployments
kubectl auth can-i delete secrets

# Проверить в конкретном неймспейсе
kubectl auth can-i get pods -n kube-system

# Проверить во всех неймспейсах
kubectl auth can-i get pods --all-namespaces

# Список всех разрешённых действий в текущем неймспейсе
kubectl auth can-i --list
kubectl auth can-i --list -n staging

# Проверить права от имени другого пользователя
kubectl auth can-i get pods --as dev-user
kubectl auth can-i get pods --as system:serviceaccount:default:mysa

# Проверить права от имени группы
kubectl auth can-i get pods --as-group system:masters --as fake-user

# Проверить права ServiceAccount (полезно при отладке рабочих нагрузок)
kubectl auth can-i list pods \
  --as system:serviceaccount:<namespace>:<serviceaccount-name>

# Показать текущую идентичность (пользователь, группы, extra)
kubectl auth whoami

# Применить RBAC-объекты из файла (добирает недостающие правила, не разрушает существующие)
kubectl auth reconcile -f rbac-manifest.yaml

# Пробный запуск reconcile — просмотр изменений без применения
kubectl auth reconcile -f rbac-manifest.yaml --dry-run=client
```

## Запросы на подпись сертификата (CSR)

```bash
# Список всех CSR в кластере
kubectl get csr
kubectl get certificatesigningrequests

# Показать CSR со статусом и подписантом
kubectl get csr -o custom-columns=NAME:.metadata.name,AGE:.metadata.creationTimestamp,SIGNERNAME:.spec.signerName,REQUESTOR:.spec.username,CONDITION:.status.conditions[0].type

# Детальная информация о CSR (subject, usages, events)
kubectl describe csr <csr-name>

# Одобрить CSR
kubectl certificate approve <csr-name>

# Отклонить CSR
kubectl certificate deny <csr-name>

# Удалить CSR
kubectl delete csr <csr-name>

# Создать объект CSR из PEM-файла (k8s >= 1.18)
cat <<EOF | kubectl apply -f -
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: my-user
spec:
  request: $(cat my-user.csr | base64 | tr -d '\n')
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 86400   # 1 день
  usages:
  - client auth
EOF

# Получить подписанный сертификат после одобрения
kubectl get csr <csr-name> -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt

# Полный воркфлоу: сгенерировать ключ + CSR, отправить, одобрить, забрать сертификат
# 1. Сгенерировать приватный ключ и CSR через openssl
openssl genrsa -out my-user.key 2048
openssl req -new -key my-user.key -out my-user.csr -subj "/CN=my-user/O=my-group"

# 2. Отправить CSR в Kubernetes (см. выше)

# 3. Одобрить
kubectl certificate approve my-user

# 4. Забрать подписанный сертификат
kubectl get csr my-user -o jsonpath='{.status.certificate}' | base64 -d > my-user.crt

# 5. Добавить пользователя в kubeconfig
kubectl config set-credentials my-user --client-key=my-user.key --client-certificate=my-user.crt --embed-certs=true
kubectl config set-context my-user-context --cluster=<cluster-name> --user=my-user
```

## Pod Security Standards (PSS)

```bash
# Проверить текущие Pod Security labels у namespace
kubectl get ns <namespace> --show-labels
kubectl get ns <namespace> -o jsonpath='{.metadata.labels.pod-security\.kubernetes\.io/enforce}'

# Включить режим enforce=baseline
kubectl label ns <namespace> pod-security.kubernetes.io/enforce=baseline --overwrite

# Включить режим enforce=restricted (более строгий)
kubectl label ns <namespace> pod-security.kubernetes.io/enforce=restricted --overwrite

# Добавить warn/audit режимы для мягкой проверки
kubectl label ns <namespace> pod-security.kubernetes.io/warn=restricted --overwrite
kubectl label ns <namespace> pod-security.kubernetes.io/audit=restricted --overwrite

# Зафиксировать версию политики (рекомендуется)
kubectl label ns <namespace> pod-security.kubernetes.io/enforce-version=v1.30 --overwrite
kubectl label ns <namespace> pod-security.kubernetes.io/warn-version=v1.30 --overwrite
kubectl label ns <namespace> pod-security.kubernetes.io/audit-version=v1.30 --overwrite

# Удалить PSS labels из namespace
kubectl label ns <namespace> pod-security.kubernetes.io/enforce-
kubectl label ns <namespace> pod-security.kubernetes.io/warn-
kubectl label ns <namespace> pod-security.kubernetes.io/audit-

# Проверить предупреждения при apply (если нарушены политики)
kubectl apply -f pod.yaml -n <namespace>

# Проверить securityContext у подов
kubectl get pod <pod-name> -n <namespace> -o yaml | grep -A 40 -E 'securityContext|runAsNonRoot|privileged|allowPrivilegeEscalation|capabilities'
```

## Security Context

```bash
# Просмотр securityContext запущенного пода
kubectl get pod <pod-name> -o yaml | grep -A 20 securityContext

# Проверить запущены ли поды от root во всех неймспейсах
kubectl get pods -A -o jsonpath='{range .items[*]}{.metadata.namespace}{" "}{.metadata.name}{" runAsUser:"}{.spec.securityContext.runAsUser}{"\n"}{end}'

# Показать UID и non-root флаг для подов
kubectl get pods -n <namespace> -o custom-columns=NAME:.metadata.name,UID:.spec.securityContext.runAsUser,NON_ROOT:.spec.securityContext.runAsNonRoot

# Найти привилегированные контейнеры в кластере
kubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | "\(.metadata.namespace)/\(.metadata.name)"'

# Проверить использование hostNetwork / hostPID
kubectl get pods -A -o custom-columns=NS:.metadata.namespace,NAME:.metadata.name,HOST_NET:.spec.hostNetwork,HOST_PID:.spec.hostPID | grep -v '<none>'

# Пример securityContext на уровне пода (применяется ко всем контейнерам):
# spec:
#   securityContext:
#     runAsNonRoot: true
#     runAsUser: 1000
#     runAsGroup: 3000
#     fsGroup: 2000
#     seccompProfile:
#       type: RuntimeDefault

# Пример securityContext на уровне контейнера (максимально ограниченный):
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
#         - NET_BIND_SERVICE   # только если нужен порт < 1024

# Проверить readOnlyRootFilesystem (попытка записи завершится ошибкой):
kubectl exec <pod-name> -- touch /test-write
```

## PodDisruptionBudget (PDB)

```bash
# Список всех PDB
kubectl get poddisruptionbudget
kubectl get pdb

# Список во всех неймспейсах
kubectl get pdb -A

# Подробная информация о PDB
kubectl describe pdb <pdb-name>

# Просмотр PDB в формате YAML
kubectl get pdb <pdb-name> -o yaml

# Создать PDB из файла
kubectl apply -f pdb.yaml

# Удалить PDB
kubectl delete pdb <pdb-name>

# Показать PDB со статусом допустимых прерываний
kubectl get pdb -o custom-columns=NAME:.metadata.name,MIN-AVAILABLE:.spec.minAvailable,MAX-UNAVAILABLE:.spec.maxUnavailable,ALLOWED:.status.disruptionsAllowed

# Пример PDB YAML (минимум 2 пода должны быть доступны):
# apiVersion: policy/v1
# kind: PodDisruptionBudget
# metadata:
#   name: my-pdb
# spec:
#   minAvailable: 2
#   selector:
#     matchLabels:
#       app: my-app

# Пример PDB YAML (максимум 1 под недоступен одновременно):
# spec:
#   maxUnavailable: 1
#   selector:
#     matchLabels:
#       app: my-app
```

## ResourceQuota и LimitRange

```bash
# Список ResourceQuota в неймспейсе
kubectl get resourcequota
kubectl get quota

# Список во всех неймспейсах
kubectl get quota -A

# Подробно о ResourceQuota (показывает использованное vs лимит)
kubectl describe quota <quota-name>

# Создать ResourceQuota из файла
kubectl apply -f quota.yaml

# Удалить ResourceQuota
kubectl delete quota <quota-name>

# Список LimitRange
kubectl get limitrange
kubectl get limits

# Подробно о LimitRange
kubectl describe limits <limitrange-name>

# Создать LimitRange из файла
kubectl apply -f limitrange.yaml

# Пример ResourceQuota YAML:
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

# Пример LimitRange YAML (лимиты по умолчанию для контейнеров):
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
