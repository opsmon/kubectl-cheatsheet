export const runbooks = [
  {
    id: "crashloop", title: { ru: "Pod перезапускается", eng: "Pod keeps restarting" },
    symptom: { ru: "CrashLoopBackOff или растёт RESTARTS", eng: "CrashLoopBackOff or rising RESTARTS" },
    input: { ru: "Имя Pod, namespace и контекст; проверьте их локально.", eng: "Pod name, namespace and context; check them locally." },
    steps: ["pod-describe", "pod-previous-logs", "pod-logs"],
    observations: [
      { id: "app", label: { ru: "Ошибка приложения в логах", eng: "Application error in logs" }, next: { ru: "Сопоставьте ошибку с конфигурацией и последним релизом. Эскалируйте владельцу приложения; изменение ресурса требует отдельного решения.", eng: "Compare the error with configuration and the last release. Escalate to the application owner; decide on changes separately." } },
      { id: "probe", label: { ru: "Падает health probe", eng: "Health probe fails" }, next: { ru: "Проверьте адрес, порт, таймаут и путь probe в Deployment; зафиксируйте события.", eng: "Check probe address, port, timeout and path in the Deployment; record the events." } },
      { id: "unknown", label: { ru: "Данных недостаточно", eng: "Not enough evidence" }, next: { ru: "Соберите события, текущие и предыдущие логи всех нужных контейнеров; эскалируйте с временными метками.", eng: "Collect events and current and previous logs for relevant containers; escalate with timestamps." } }
    ],
    expected: { ru: "События покажут причины рестартов, а --previous даст вывод прошлого экземпляра контейнера, если он сохранён.", eng: "Events may show restart reasons; --previous returns the earlier container instance if retained." },
    limits: { ru: "Логи могут содержать секреты; при нескольких контейнерах укажите контейнер в карточке команды. Старые логи могут быть недоступны.", eng: "Logs may contain secrets; select the container in the recipe when there are several. Earlier logs may be unavailable." }
  },
  {
    id: "pending", title: { ru: "Pod остаётся Pending", eng: "Pod stays Pending" },
    symptom: { ru: "Pod не назначается на Node", eng: "Pod is not scheduled to a Node" },
    input: { ru: "Имя Pod, namespace, контекст и время начала проблемы.", eng: "Pod name, namespace, context and when the issue started." },
    steps: ["pod-describe", "nodes-list", "pvcs-list"],
    observations: [
      { id: "schedule", label: { ru: "FailedScheduling / недостаточно ресурсов", eng: "FailedScheduling / insufficient resources" }, next: { ru: "Сверьте requests, taints и доступную ёмкость Node. Перед изменениями согласуйте владельца нагрузки.", eng: "Compare requests, taints and Node capacity. Coordinate with the workload owner before making changes." } },
      { id: "volume", label: { ru: "PVC не привязан", eng: "PVC is unbound" }, next: { ru: "Проверьте PVC, StorageClass и события provisioning; эскалируйте команде хранения.", eng: "Check PVC, StorageClass and provisioning events; escalate to the storage team." } },
      { id: "unknown", label: { ru: "Данных недостаточно", eng: "Not enough evidence" }, next: { ru: "Сохраните describe Pod и события namespace; уточните ограничения affinity и quota.", eng: "Capture Pod describe and namespace events; inspect affinity and quota constraints." } }
    ],
    expected: { ru: "В Events обычно видна причина отказа scheduler или ожидания тома.", eng: "Events usually show scheduling rejection or volume wait reasons." },
    limits: { ru: "Pending бывает и при других причинах. Сценарий не меняет requests, taints или тома.", eng: "Pending has other causes too. This playbook does not change requests, taints or volumes." }
  },
  {
    id: "service", title: { ru: "Service недоступен", eng: "Service is unavailable" },
    symptom: { ru: "Клиент не получает ответ от Service", eng: "A client cannot reach a Service" },
    input: { ru: "Имя Service, namespace, контекст, порт и место, откуда идёт запрос.", eng: "Service name, namespace, context, port and source of the request." },
    steps: ["service-describe", "service-slices", "pods-list"],
    observations: [
      { id: "empty", label: { ru: "EndpointSlice пуст", eng: "EndpointSlice is empty" }, next: { ru: "Сверьте selector Service с labels и готовностью Pod. Не меняйте selector без владельца сервиса.", eng: "Compare Service selector with Pod labels and readiness. Do not alter selectors without the service owner." } },
      { id: "targets", label: { ru: "EndpointSlice содержит адреса", eng: "EndpointSlice has addresses" }, next: { ru: "Проверьте targetPort, readiness, DNS и NetworkPolicy из точки запроса; эскалируйте сетевой команде при необходимости.", eng: "Check targetPort, readiness, DNS and NetworkPolicy from the request source; escalate to networking if needed." } },
      { id: "unknown", label: { ru: "Данных недостаточно", eng: "Not enough evidence" }, next: { ru: "Соберите describe Service, EndpointSlice, адрес клиента и время сбоя; не делайте вывод о DNS без проверки.", eng: "Collect Service describe, EndpointSlices, client source and failure time; do not assume DNS without a check." } }
    ],
    expected: { ru: "Описание Service и EndpointSlice покажут selector, порты и готовые адреса.", eng: "Service description and EndpointSlices show selector, ports and ready addresses." },
    limits: { ru: "Headless и ExternalName Service отличаются. Доступность зависит от сети и прав; проверка из браузера не выполняется.", eng: "Headless and ExternalName Services differ. Availability depends on network and permissions; the browser performs no cluster check." }
  }
];
