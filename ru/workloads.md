# Рабочие нагрузки

> Деплойменты, StatefulSet, DaemonSet, Jobs, масштабирование и обновления.

---

**Быстрые ссылки:**
[run](#запуск-подов-и-задач-run) · [rollout](#управление-обновлениями-rollout) · [scale](#масштабирование-scale) · [hpa](#horizontalpodautoscaler-hpa) · [vpa](#verticalpodautoscaler-vpa) · [statefulsets](#statefulsets) · [daemonsets](#daemonsets) · [jobs](#jobs-и-cronjobs)

---

## Запуск подов и задач (run)

```bash
# Запустить под с образом
kubectl run <pod-name> --image=nginx

# Запустить под и сразу открыть shell
kubectl run -it debug --image=busybox -- /bin/sh

# Запустить под с автоудалением после выхода
kubectl run tmp --rm -it --image=busybox -- /bin/sh

# Запустить под с переменными окружения
kubectl run <pod-name> --image=nginx --env="DB_HOST=db" --env="DB_PORT=5432"

# Запустить под с указанием порта
kubectl run <pod-name> --image=nginx --port=80

# Запустить под с labels
kubectl run <pod-name> --image=nginx --labels="app=web,tier=frontend"

# Запустить под в определённом namespace
kubectl run <pod-name> --image=nginx -n <namespace>

# Запустить под и сразу создать service
kubectl run <pod-name> --image=nginx --port=80 --expose

# Генерация YAML без создания (dry-run)
kubectl run <pod-name> --image=nginx --dry-run=client -o yaml

# Запустить одноразовую задачу (Job)
kubectl create job <job-name> --image=busybox -- echo "Hello"

# Запустить CronJob
kubectl create cronjob <name> --image=busybox --schedule="*/5 * * * *" -- echo "tick"
```

## Управление обновлениями (rollout)

```bash
# Статус обновления deployment
kubectl rollout status deployment/<deployment-name>

# История обновлений
kubectl rollout history deployment/<deployment-name>

# Откатить deployment на предыдущую версию
kubectl rollout undo deployment/<deployment-name>

# Откатить на конкретную ревизию
kubectl rollout undo deployment/<deployment-name> --to-revision=2

# Перезапустить все поды в deployment
kubectl rollout restart deployment/<deployment-name>

# Приостановить обновление
kubectl rollout pause deployment/<deployment-name>

# Возобновить обновление
kubectl rollout resume deployment/<deployment-name>

# Посмотреть детали конкретной ревизии
kubectl rollout history deployment/<deployment-name> --revision=3

# Следить за прогрессом rollout
kubectl rollout status deployment/<deployment-name> --watch
```

## Масштабирование (scale)

```bash
# Масштабировать deployment до N реплик
kubectl scale deployment <deployment-name> --replicas=3

# Масштабировать replicaset
kubectl scale replicaset <replicaset-name> --replicas=5

# Масштабировать statefulset
kubectl scale statefulset <statefulset-name> --replicas=2

# Масштабировать в определённом namespace
kubectl scale deployment <deployment-name> --replicas=3 -n <namespace>

# Автомасштабирование (HPA - Horizontal Pod Autoscaler)
kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=80

# Посмотреть статус автомасштабирования
kubectl get hpa
```

## HorizontalPodAutoscaler (HPA)

```bash
# Список всех HPA
kubectl get hpa
kubectl get hpa -A

# Подробная информация об HPA
kubectl describe hpa <hpa-name>

# Просмотр HPA в формате YAML
kubectl get hpa <hpa-name> -o yaml

# Создать HPA для деплоя (по CPU)
kubectl autoscale deployment <deployment-name> --min=2 --max=10 --cpu-percent=70

# Создать HPA из файла
kubectl apply -f hpa.yaml

# Удалить HPA
kubectl delete hpa <hpa-name>

# Показать HPA с текущим/целевым кол-вом реплик и метриками
kubectl get hpa -o custom-columns=NAME:.metadata.name,MINPODS:.spec.minReplicas,MAXPODS:.spec.maxReplicas,REPLICAS:.status.currentReplicas

# Редактировать HPA (изменить пороги или кол-во реплик)
kubectl edit hpa <hpa-name>

# Пример HPA YAML (по CPU + Memory):
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
# VPA не входит в стандартный Kubernetes — устанавливается отдельно:
# https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler

# Список всех VPA
kubectl get vpa
kubectl get vpa -A

# Детальная информация о VPA (включая рекомендации)
kubectl describe vpa <vpa-name>

# Просмотр VPA в формате YAML
kubectl get vpa <vpa-name> -o yaml

# Создать VPA из файла
kubectl apply -f vpa.yaml

# Удалить VPA
kubectl delete vpa <vpa-name>

# Показать рекомендации для всех VPA
kubectl get vpa -o custom-columns=NAME:.metadata.name,MODE:.spec.updatePolicy.updateMode,CPU_REQ:.status.recommendation.containerRecommendations[0].target.cpu,MEM_REQ:.status.recommendation.containerRecommendations[0].target.memory

# Пример VPA YAML — режим Off (только рекомендации, без автоизменений):
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

# Пример VPA YAML — режим Auto (рестарт подов с новыми лимитами):
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

# Режимы updateMode:
#   Off        — только вычисляет рекомендации, ничего не меняет
#   Initial    — устанавливает ресурсы только при создании пода
#   Recreate   — вытесняет и пересоздаёт поды при изменении рекомендаций
#   Auto       — аналогично Recreate (поведение по умолчанию)

# Проверить, запущен ли admission controller VPA
kubectl get pods -n kube-system | grep vpa
```

## StatefulSets

```bash
# Список всех StatefulSet
kubectl get statefulsets
kubectl get sts

# Список во всех namespace
kubectl get sts -A

# Описание StatefulSet
kubectl describe sts <sts-name>

# StatefulSet в формате YAML
kubectl get sts <sts-name> -o yaml

# Масштабировать StatefulSet
kubectl scale sts <sts-name> --replicas=3

# Роллинг-рестарт StatefulSet
kubectl rollout restart sts/<sts-name>

# Статус обновления StatefulSet
kubectl rollout status sts/<sts-name>

# История обновлений StatefulSet
kubectl rollout history sts/<sts-name>

# Откатить StatefulSet на предыдущую ревизию
kubectl rollout undo sts/<sts-name>

# Откатить на конкретную ревизию
kubectl rollout undo sts/<sts-name> --to-revision=2

# Обновить image в StatefulSet
kubectl set image sts/<sts-name> <container-name>=<image>:<tag>

# Удалить StatefulSet (поды остаются по умолчанию)
kubectl delete sts <sts-name>

# Удалить StatefulSet вместе с подами (foreground)
kubectl delete sts <sts-name> --cascade=foreground

# Удалить StatefulSet без удаления подов (orphan)
kubectl delete sts <sts-name> --cascade=orphan

# Список подов StatefulSet (по label)
kubectl get pods -l app=<sts-name>

# Показать StatefulSet с количеством реплик
kubectl get sts -o custom-columns=NAME:.metadata.name,READY:.status.readyReplicas,REPLICAS:.status.replicas
```

## DaemonSets

```bash
# Список всех DaemonSet
kubectl get daemonsets
kubectl get ds

# Список во всех namespace
kubectl get ds -A

# Описание DaemonSet
kubectl describe ds <ds-name>

# DaemonSet в формате YAML
kubectl get ds <ds-name> -o yaml

# Роллинг-рестарт DaemonSet (на всех нодах)
kubectl rollout restart ds/<ds-name>

# Статус обновления DaemonSet
kubectl rollout status ds/<ds-name>

# История обновлений DaemonSet
kubectl rollout history ds/<ds-name>

# Откатить DaemonSet на предыдущую ревизию
kubectl rollout undo ds/<ds-name>

# Обновить image в DaemonSet
kubectl set image ds/<ds-name> <container-name>=<image>:<tag>

# Удалить DaemonSet (и его поды)
kubectl delete ds <ds-name>

# Удалить DaemonSet без удаления подов
kubectl delete ds <ds-name> --cascade=orphan

# Показать DaemonSet с покрытием нод
kubectl get ds -o custom-columns=NAME:.metadata.name,DESIRED:.status.desiredNumberScheduled,READY:.status.numberReady,AVAILABLE:.status.numberAvailable

# Список подов DaemonSet (по label)
kubectl get pods -l app=<ds-name> -o wide
```

## Jobs и CronJobs

```bash
# Список всех Jobs
kubectl get jobs

# Список всех CronJobs
kubectl get cronjobs
kubectl get cj

# Описание Job
kubectl describe job <job-name>

# Описание CronJob
kubectl describe cronjob <cronjob-name>

# Создать Job из образа
kubectl create job <job-name> --image=busybox -- echo "Hello"

# Создать Job из существующего CronJob (вручную запустить)
kubectl create job <job-name> --from=cronjob/<cronjob-name>

# Создать CronJob (каждые 5 минут)
kubectl create cronjob <name> --image=busybox --schedule="*/5 * * * *" -- echo "tick"

# Создать CronJob (каждый день в 02:00)
kubectl create cronjob <name> --image=busybox --schedule="0 2 * * *" -- /bin/sh -c "backup.sh"

# Посмотреть логи Job (через поды)
kubectl logs -l job-name=<job-name>

# Дождаться завершения Job
kubectl wait --for=condition=Complete job/<job-name> --timeout=120s

# Удалить завершённые Jobs
kubectl delete jobs --field-selector status.successful=1

# Приостановить CronJob
kubectl patch cronjob <cronjob-name> -p '{"spec":{"suspend":true}}'

# Возобновить CronJob
kubectl patch cronjob <cronjob-name> -p '{"spec":{"suspend":false}}'

# Удалить CronJob (и все связанные Jobs)
kubectl delete cronjob <cronjob-name>
```
