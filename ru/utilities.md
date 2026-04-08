# Утилиты и инструменты

> exec, копирование файлов, метки, ожидание, форматирование вывода, планирование, советы, Helm, плагины и настройка shell.

---

**Быстрые ссылки:**
[exec](#выполнение-команд-в-контейнере-exec) · [cp](#копирование-файлов-cp) · [labels](#работа-с-метками-labelannotate) · [wait](#ожидание-готовности-ресурсов-wait) · [jsonpath](#продвинутый-вывод-данных-jsonpathcustom-columns) · [scheduling](#планирование-подов-affinity--tolerations--nodeselector) · [tips](#советы-и-полезные-паттерны) · [helm](#helm) · [krew](#плагины-kubectl-krew) · [aliases](#алиасы-и-автодополнение-в-shell)

---

## Выполнение команд в контейнере (exec)

```bash
# Выполнить команду в поде
kubectl exec <pod-name> -- <command>

# Пример: посмотреть список файлов
kubectl exec <pod-name> -- ls -la

# Интерактивный shell в поде
kubectl exec -it <pod-name> -- /bin/bash
kubectl exec -it <pod-name> -- /bin/sh

# Exec в конкретный контейнер (если несколько)
kubectl exec -it <pod-name> -c <container-name> -- /bin/bash

# Exec в определённом namespace
kubectl exec -it <pod-name> -n <namespace> -- /bin/bash

# Посмотреть переменные окружения
kubectl exec <pod-name> -- env

# Проверить сетевую доступность изнутри пода
kubectl exec <pod-name> -- curl -s http://service-name:port

# Посмотреть содержимое файла
kubectl exec <pod-name> -- cat /path/to/file

# Войти в первый под, найденный по метке
kubectl exec -it $(kubectl get pod -l app=myapp -o jsonpath='{.items[0].metadata.name}') -- /bin/sh
```

## Копирование файлов (cp)

```bash
# Скопировать файл из пода на локальную машину
kubectl cp <pod-name>:/path/to/file ./local-file

# Скопировать файл в под
kubectl cp ./local-file <pod-name>:/path/to/file

# Копирование с указанием namespace
kubectl cp <namespace>/<pod-name>:/path/to/file ./local-file

# Скопировать директорию из пода
kubectl cp <pod-name>:/path/to/dir ./local-dir

# Копирование из конкретного контейнера
kubectl cp <pod-name>:/path/to/file ./local-file -c <container-name>
```

## Работа с метками (label/annotate)

```bash
# Добавить label к поду
kubectl label pod <pod-name> environment=production

# Добавить label к ноде
kubectl label node <node-name> disktype=ssd

# Удалить label (минус в конце)
kubectl label pod <pod-name> environment-

# Перезаписать существующий label
kubectl label pod <pod-name> environment=staging --overwrite

# Добавить аннотацию
kubectl annotate pod <pod-name> description="My pod"

# Удалить аннотацию
kubectl annotate pod <pod-name> description-

# Показать labels всех подов
kubectl get pods --show-labels

# Фильтрация по label
kubectl get pods -l environment=production
kubectl get pods -l 'environment in (production,staging)'
```

## Ожидание готовности ресурсов (wait)

```bash
# Дождаться, пока под перейдёт в состояние Ready
kubectl wait pod/<pod-name> --for=condition=Ready

# Дождаться готовности пода с таймаутом (по умолчанию 30s)
kubectl wait pod/<pod-name> --for=condition=Ready --timeout=120s

# Дождаться готовности всех подов с меткой
kubectl wait pods -l app=myapp --for=condition=Ready --timeout=60s

# Дождаться завершения деплоймента (все реплики готовы)
kubectl wait deployment/<deploy-name> --for=condition=Available --timeout=300s

# Дождаться завершения Job (условие Complete)
kubectl wait job/<job-name> --for=condition=Complete --timeout=120s

# Дождаться, пока Job не провалится (условие Failed)
kubectl wait job/<job-name> --for=condition=Failed --timeout=60s

# Дождаться удаления ресурса
kubectl wait pod/<pod-name> --for=delete --timeout=60s

# Дождаться удаления всех подов с меткой
kubectl wait pods -l app=myapp --for=delete --timeout=120s

# Дождаться готовности ноды
kubectl wait node/<node-name> --for=condition=Ready --timeout=300s

# Дождаться готовности всех нод
kubectl wait nodes --all --for=condition=Ready --timeout=300s

# Дождаться PVC в состоянии Bound
kubectl wait pvc/<pvc-name> --for=jsonpath='{.status.phase}'=Bound --timeout=60s

# Дождаться произвольного поля через jsonpath (k8s >= 1.23)
kubectl wait deployment/<deploy-name> \
  --for=jsonpath='{.status.readyReplicas}'=3 --timeout=120s

# Пример использования в CI/CD пайплайне
kubectl apply -f deployment.yaml
kubectl wait deployment/myapp --for=condition=Available --timeout=300s
echo "Деплой завершён успешно"

# Доступные условия для подов:
#   Initialized       — все init-контейнеры завершились
#   Ready             — под готов принимать трафик
#   ContainersReady   — все контейнеры пода готовы
#   PodScheduled      — под назначен на ноду
```

## Продвинутый вывод данных (jsonpath/custom-columns)

```bash
# Получить IP адреса всех подов
kubectl get pods -o jsonpath='{.items[*].status.podIP}'

# Получить имена всех подов
kubectl get pods -o jsonpath='{.items[*].metadata.name}'

# Получить image каждого пода (с переносом строки)
kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[0].image}{"\n"}{end}'

# Получить имена нод и их IP
kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.addresses[0].address}{"\n"}{end}'

# Получить External IP нод
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'

# Кастомные колонки
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName

# Кастомные колонки с IP
kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP,NODE:.spec.nodeName

# Получить все image в кластере
kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{"\n"}{end}{end}' | sort -u

# Получить секрет в декодированном виде
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 -d

# Получить endpoint адреса сервиса
kubectl get endpoints <service-name> -o jsonpath='{.subsets[*].addresses[*].ip}'

# Получить resourceVersion (нужен для оптимистичной блокировки)
kubectl get pod <pod-name> -o jsonpath='{.metadata.resourceVersion}'
```

## Планирование подов (affinity / tolerations / nodeSelector)

```bash
# Список нод с метками (для выбора целевых нод)
kubectl get nodes --show-labels
kubectl get nodes -l disktype=ssd

# Добавить метку на ноду для управления планированием
kubectl label node <node-name> disktype=ssd

# Показать taint'ы всех нод
kubectl get nodes -o custom-columns=NAME:.metadata.name,TAINTS:.spec.taints

# Проверить почему под в статусе Pending / не планируется
kubectl describe pod <pod-name> | grep -A 20 Events

# nodeSelector - запускать под только на нодах с меткой:
# spec:
#   nodeSelector:
#     disktype: ssd

# Node affinity - требовать ноду с меткой (жёсткое правило):
# spec:
#   affinity:
#     nodeAffinity:
#       requiredDuringSchedulingIgnoredDuringExecution:
#         nodeSelectorTerms:
#         - matchExpressions:
#           - key: disktype
#             operator: In
#             values:
#             - ssd

# Node affinity - предпочитать ноду с меткой (мягкое правило):
# spec:
#   affinity:
#     nodeAffinity:
#       preferredDuringSchedulingIgnoredDuringExecution:
#       - weight: 1
#         preference:
#           matchExpressions:
#           - key: disktype
#             operator: In
#             values:
#             - ssd

# Pod anti-affinity - запретить 2 пода на одной ноде (жёстко):
# spec:
#   affinity:
#     podAntiAffinity:
#       requiredDuringSchedulingIgnoredDuringExecution:
#       - labelSelector:
#           matchLabels:
#             app: my-app
#         topologyKey: kubernetes.io/hostname

# Pod anti-affinity - предпочитать разные ноды (мягко):
# spec:
#   affinity:
#     podAntiAffinity:
#       preferredDuringSchedulingIgnoredDuringExecution:
#       - weight: 100
#         podAffinityTerm:
#           labelSelector:
#             matchLabels:
#               app: my-app
#           topologyKey: kubernetes.io/hostname

# Toleration - разрешить поду запускаться на ноде с taint:
# spec:
#   tolerations:
#   - key: "key"
#     operator: "Equal"
#     value: "value"
#     effect: "NoSchedule"

# Допустить все taint'ы (запускаться на любой ноде, включая master):
# spec:
#   tolerations:
#   - operator: "Exists"

# topologySpreadConstraints - равномерно распределить поды по зонам:
# spec:
#   topologySpreadConstraints:
#   - maxSkew: 1
#     topologyKey: topology.kubernetes.io/zone
#     whenUnsatisfiable: DoNotSchedule
#     labelSelector:
#       matchLabels:
#         app: my-app
```

## Советы и полезные паттерны

```bash
# Сгенерировать YAML-шаблон без создания ресурса (dry-run)
kubectl create deployment my-deploy --image=nginx --dry-run=client -o yaml
kubectl run my-pod --image=nginx --dry-run=client -o yaml

# Принудительно перетянуть образ - перезапустить деплой
kubectl rollout restart deployment/<deployment-name>

# Следить за прогрессом rollout
kubectl rollout status deployment/<deployment-name> --watch

# Получить все образы контейнеров, запущенных в кластере
kubectl get pods -A -o jsonpath='{range .items[*]}{range .spec.containers[*]}{.image}{"\n"}{end}{end}' | sort -u

# Найти поды, которые не готовы (NOT ready)
kubectl get pods -A --no-headers | awk '$3 != $4 || $5 != "Running"'

# Удалить все упавшие поды во всех неймспейсах
kubectl delete pods --field-selector=status.phase=Failed -A

# Получить поды с кол-вом рестартов больше N
kubectl get pods -A --no-headers | awk '$5 > 5'

# Логи со всех подов деплоя
kubectl logs -l app=<label-value> --all-containers=true --prefix=true

# Сортировка подов по кол-ву рестартов
kubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'

# Сортировка подов по времени создания (новые первые)
kubectl get pods --sort-by=.metadata.creationTimestamp

# Проверить, на каких нодах больше всего подов
kubectl get pods -A -o wide --no-headers | awk '{print $8}' | sort | uniq -c | sort -rn

# Применить несколько файлов через stdin
cat deployment.yaml service.yaml | kubectl apply -f -
```

## Helm

```bash
# Добавить репозиторий чартов
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add stable https://charts.helm.sh/stable

# Обновить все репозитории
helm repo update

# Список добавленных репозиториев
helm repo list

# Поиск чарта в репозиториях
helm search repo nginx
helm search repo nginx --versions

# Поиск в Artifact Hub
helm search hub nginx

# Показать дефолтные values чарта
helm show values bitnami/nginx

# Установить релиз
helm install <release-name> bitnami/nginx

# Установить с файлом values
helm install <release-name> bitnami/nginx -f values.yaml

# Установить с переопределением значений
helm install <release-name> bitnami/nginx --set replicaCount=2 --set service.type=NodePort

# Установить в конкретный неймспейс (создать если не существует)
helm install <release-name> bitnami/nginx -n <namespace> --create-namespace

# Предварительный просмотр манифестов без установки (dry-run)
helm install <release-name> bitnami/nginx --dry-run --debug

# Список всех релизов
helm list
helm list -A
helm list -n <namespace>

# Статус релиза
helm status <release-name>

# Получить текущие values развёрнутого релиза
helm get values <release-name>

# Получить все манифесты релиза
helm get manifest <release-name>

# Обновить релиз
helm upgrade <release-name> bitnami/nginx
helm upgrade <release-name> bitnami/nginx -f values.yaml

# Установить если нет, обновить если есть
helm upgrade --install <release-name> bitnami/nginx -f values.yaml

# История ревизий релиза
helm history <release-name>

# Откатить к предыдущей ревизии
helm rollback <release-name>

# Откатить к конкретной ревизии
helm rollback <release-name> 2

# Удалить релиз
helm uninstall <release-name>
helm uninstall <release-name> -n <namespace>

# Удалить релиз, сохранив историю
helm uninstall <release-name> --keep-history

# Отрендерить шаблоны локально без кластера
helm template <release-name> bitnami/nginx -f values.yaml

# Отрендерить и сохранить в файл
helm template <release-name> bitnami/nginx -f values.yaml > rendered.yaml

# Проверить чарт на ошибки (lint)
helm lint ./my-chart

# Создать scaffold нового чарта
helm create my-chart

# Упаковать чарт в .tgz
helm package ./my-chart

# Скачать исходник чарта локально
helm pull bitnami/nginx --untar

# Запустить тесты чарта (test hooks)
helm test <release-name>
```

## Плагины kubectl (krew)

```bash
# Установить krew (менеджер плагинов kubectl)
# https://krew.sigs.k8s.io/docs/user-guide/setup/install/

# Список установленных плагинов
kubectl krew list

# Поиск плагинов
kubectl krew search <keyword>

# Установить плагин
kubectl krew install <plugin-name>

# Обновить все установленные плагины
kubectl krew upgrade

# Удалить плагин
kubectl krew uninstall <plugin-name>

# Полезные плагины сообщества:

# kubectl ctx      - быстрое переключение контекстов (kubectx)
kubectl ctx
kubectl ctx <context-name>

# kubectl ns       - быстрое переключение неймспейсов (kubens)
kubectl ns
kubectl ns <namespace>

# kubectl neat     - очищает вывод YAML от служебных полей
kubectl neat get pod <pod-name> -o yaml

# kubectl tree     - показывает иерархию владельцев ресурса
kubectl tree deployment <deployment-name>

# kubectl stern    - просмотр логов нескольких подов одновременно
kubectl stern <pod-pattern>
kubectl stern -l app=myapp

# kubectl df-pv    - показывает использование диска для PersistentVolumes
kubectl df-pv

# kubectl whoami   - текущий пользователь / сервис-аккаунт
kubectl whoami
```

## Алиасы и автодополнение в shell

```bash
# Включить автодополнение kubectl — bash
source <(kubectl completion bash)
echo 'source <(kubectl completion bash)' >> ~/.bashrc

# Включить автодополнение kubectl — zsh
source <(kubectl completion zsh)
echo '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc

# Алиас k=kubectl с сохранением автодополнения
alias k=kubectl
complete -o default -F __start_kubectl k   # bash
compdef k=kubectl                           # zsh

# Часто используемые алиасы
alias kgp='kubectl get pods'
alias kgpa='kubectl get pods -A'
alias kgpw='kubectl get pods -w'
alias kgs='kubectl get svc'
alias kgn='kubectl get nodes'
alias kgd='kubectl get deploy'
alias kge='kubectl get events --sort-by=.lastTimestamp'
alias kdp='kubectl describe pod'
alias kdd='kubectl describe deployment'
alias kl='kubectl logs'
alias klf='kubectl logs -f'
alias kex='kubectl exec -it'
alias kaf='kubectl apply -f'
alias kdf='kubectl delete -f'

# Быстрая смена namespace без kubens
alias kns='kubectl config set-context --current --namespace'

# Быстрая смена контекста без kubectx
alias kctx='kubectl config use-context'

# Показать текущий контекст и namespace
alias kwhere='echo "context: $(kubectl config current-context)" && echo "namespace: $(kubectl config view --minify -o jsonpath={.contexts[0].context.namespace})"'

# Интеграция с prompt — показывать контекст/namespace в строке приглашения
# kube-ps1: https://github.com/jonmosco/kube-ps1
# starship имеет встроенный модуль kubernetes: https://starship.rs/config/#kubernetes
```
