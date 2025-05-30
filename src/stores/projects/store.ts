import {defineStore} from "pinia";
import type Project from "@/stores/projects/types/project";
import {Customer, Responsibility, Role, Technology} from "@/stores/projects/enums";

interface ProjectStore {
    list: Project[]
}

export const useProjectStore = defineStore('projects', {
    state(): ProjectStore {
        return {
            list: [
                {
                    title: 'Микроконверсии',
                    customer: Customer.SMARTIS,
                    goal: 'Отслеживать поведение пользователей, которые ещё не совершили ключевых целевых действий на сайте клиента (звонок или заявка) и просмотр этих данных в интерфейсе.',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION,
                        Responsibility.PRESENTATION,
                    ],
                    team: [
                        { role: Role.PRODUCT_OWNER, count: 1},
                        { role: Role.PRODUCT_MANAGER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                        { role: Role.CTO, count: 1},
                    ],
                    estimatedDays: 30,
                    technologies: [
                        Technology.JAVA_SCRIPT,
                        Technology.MYSQL_5_7,
                        Technology.CLICKHOUSE,
                        Technology.PHP_7_4,
                        Technology.NGINX,
                        Technology.VUE_JS_2,
                        Technology.REDIS,
                    ],
                    description: 'Клиент в личном кабинете настраивает микроконверсии: "посещение страницы", "клик на элемент" и "скролл до элемента". Данные настройки должны подтянуться на сайт клиента и при срабатывании события во время посещения пользователя, складировать в базу данных для дальнейшей аналитики.',
                    solutions: [
                        'Скрипт прослушки событий подгружается на сайте клиента, соответствено он не должен тормозить загрузку сайта и не должен мешать работе сайта. Для этого использовался чистый JavaScript, и перед отрузкой использовался минификатор.',
                        'При первой загрузке скрипта, он забирает настроенные события из сервера, так как посетителей на сайте очень много, чтобы не мучать сервер запросами кэшируем запросы на стороне nginx (fastcgi cache) и возвращали заголовок cache-control для браузера',
                        'Clickhouse не предназначен для регулярной вставки данных. Реализовано вначале сохранение в MySQL, и затем кроном осуществуляется перегон значений в Clickhouse',
                        'Донасыщение данных микроконверсий из таблицы сессий (содержит около 500 млн строк). Прямой JOIN занимал слишком много времени и потреблял значительные ресурсы. Для оптимизации производительности был изучен алгоритм выполнения запросов. На основе анализа прямой JOIN был заменён на JOIN двух подзапросов, что позволило значительно сократить время выполнения запроса и снизить нагрузку на ресурсы.'
                    ],
                },
                {
                    title: 'Анализ обращений на антифрод',
                    customer: Customer.SMARTIS,
                    goal: 'Объективно клиенту оценивать рекламные инструменты – какие из них приводят реальных покупателей, а какие лишь имитируют поведение целевых клиентов',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.CODE_REVIEW,
                        Responsibility.TESTING,
                    ],
                    team: [
                        { role: Role.PRODUCT_MANAGER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 2},
                    ],
                    estimatedDays: 90,
                    technologies: [
                        Technology.MYSQL_5_7,
                        Technology.PHP_7_4,
                        Technology.VUE_JS_2,
                        Technology.REDIS,
                        Technology.LARAVEL_5_7,
                    ],
                    description: 'Автоматизированный алгоритм, который оценивает процент вероятности фрода у обращений клиента, на основе поведения клиента',
                    solutions: [
                        'Реализация ежедневного фонового процесса для анализа фрода по методикам описанных заказчиками (пример: у клиента имеется N сессий - 10% фрода или, у клиента 25 звонков, все они меньше 30 сек - 100% фрод.)',
                        'Реализация методик через очереди (Jobs by Laravel)'
                    ],
                },
                {
                    title: 'Автоматизация биллинга',
                    customer: Customer.SMARTIS,
                    goal: 'Автоматизировать процессы выставления счетов клиентам за использование продукта',
                    role: Role.MIDDLE_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION,
                        Responsibility.PRESENTATION,
                    ],
                    team: [
                        { role: Role.CEO, count: 2},
                        { role: Role.MIDDLE_WEB_DEVELOPER, count: 1},
                        { role: Role.SENIOR_DATABASE_DEVELOPER, count: 1},
                        { role: Role.ACCOUNT_MANAGER, count: 1},
                        { role: Role.HEAD_OF_BILLING, count: 1},
                    ],
                    estimatedDays: 90,
                    technologies: [
                        Technology.MYSQL_5_7,
                        Technology.PHP_7_4,
                        Technology.LARAVEL_5_7,
                        Technology.VUE_JS_2,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'REST API для личного кабинета омниканальной системы',
                    customer: Customer.COMAGIC,
                    goal: '',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION,
                        Responsibility.PRESENTATION,
                    ],
                    team: [
                        { role: Role.PRODUCT_MANAGER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 2},
                        { role: Role.MIDDLE_FRONT_DEVELOPER, count: 1},
                        { role: Role.DESIGNER, count: 1},
                    ],
                    estimatedDays: 210,
                    technologies: [
                        Technology.POSTGRESQL_12,
                        Technology.PHP_7_4,
                        Technology.LARAVEL_8,
                        Technology.REACT_JS,
                        Technology.PYTHON_3,
                        Technology.GRAFANA,
                        Technology.MINIO,
                        Technology.REDIS,
                        Technology.TYPE_SCRIPT,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'Минусация в рекламных кабинетах',
                    customer: Customer.SMARTIS,
                    goal: '--',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                    ],
                    team: [
                        { role: Role.PRODUCT_MANAGER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                    ],
                    estimatedDays: 90,
                    technologies: [
                        Technology.PHP_7_4,
                        Technology.LARAVEL_5_7,
                        Technology.VUE_JS_2,
                        Technology.MYSQL_5_7
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'Pet-проект',
                    customer: Customer.KIRIN,
                    goal: '',
                    role: Role.PRODUCT_OWNER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION
                    ],
                    team: [
                        { role: Role.PRODUCT_OWNER, count: 1},
                    ],
                    estimatedDays: 0,
                    technologies: [
                        Technology.PHP_8_1,
                        Technology.LARAVEL_9,
                        Technology.VUE_JS_3,
                        Technology.MYSQL_8,
                        Technology.MINIO,
                        Technology.RABBITMQ,
                        Technology.GRAFANA,
                        Technology.TYPE_SCRIPT,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'Синхронизация личных финансов из Notion через Яндекс.Алису',
                    customer: Customer.KIRIN,
                    goal: '',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION
                    ],
                    team: [
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                    ],
                    estimatedDays: 30,
                    technologies: [
                        Technology.PHP_8_1,
                        Technology.LARAVEL_9,
                        Technology.MYSQL_8,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'D3',
                    customer: Customer.KIRIN,
                    goal: '',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.CODING,
                        Responsibility.TESTING,
                    ],
                    team: [
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                    ],
                    estimatedDays: 5,
                    technologies: [
                        Technology.VUE_JS_3,
                        Technology.TYPE_SCRIPT,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'Highcharts',
                    customer: Customer.KIRIN,
                    goal: '',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.CODING,
                        Responsibility.TESTING,
                    ],
                    team: [
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                    ],
                    estimatedDays: 5,
                    technologies: [
                        Technology.VUE_JS_3,
                        Technology.TYPE_SCRIPT,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'Приложение для продуктовой документации',
                    customer: Customer.SMARTIS,
                    goal: '',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION,
                        Responsibility.PRESENTATION,
                    ],
                    team: [
                        { role: Role.PRODUCT_OWNER, count: 1},
                        { role: Role.PRODUCT_MANAGER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                        { role: Role.CTO, count: 1},
                    ],
                    estimatedDays: 45,
                    technologies: [
                        Technology.PHP_8_3,
                        Technology.MYSQL_5_7,
                        Technology.LARAVEL_10,
                        Technology.BOOKSTACK,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'Переезд системы автоматизации звонков на нового поставщика услуг',
                    customer: Customer.SMARTIS,
                    goal: 'Снизить расходы на поддержку звонков',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION,
                        Responsibility.PRESENTATION,
                    ],
                    team: [
                        { role: Role.PRODUCT_OWNER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                    ],
                    estimatedDays: 60,
                    technologies: [
                        Technology.PHP_7_4,
                        Technology.MYSQL_5_7,
                        Technology.LARAVEL_5_7,
                    ],
                    description: '',
                    solutions: [],
                },
                {
                    title: 'API для управления выдачи топлива на заправках',
                    customer: Customer.KONDOR_OIL,
                    goal: '',
                    role: Role.SENIOR_WEB_DEVELOPER,
                    responsibilities: [
                        Responsibility.DESIGN_ARCHITECTURE,
                        Responsibility.CODING,
                        Responsibility.TESTING,
                        Responsibility.DOCUMENTATION,
                    ],
                    team: [
                        { role: Role.PRODUCT_OWNER, count: 1},
                        { role: Role.SENIOR_WEB_DEVELOPER, count: 1},
                        { role: Role.MIDDLE_WEB_DEVELOPER, count: 1},
                        { role: Role.MOBILE_DEVELOPER, count: 1},
                    ],
                    estimatedDays: 60,
                    technologies: [
                        Technology.PHP_8_2,
                        Technology.MARIADB,
                        Technology.LARAVEL_11,
                        Technology.FLUTTER,
                    ],
                    description: '',
                    solutions: [],
                }
            ]
        };
    },
});
