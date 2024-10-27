import {defineStore} from "pinia";

export enum Customer {
    SMARTIS = 'Smartis',
    KIRIN = 'Kirin',
    COMAGIC = 'Comagic'
}

export enum Type {
    PROJECT = 'Проект',
    TOOL = 'Инструмент'
}

interface Work {
    title: string,
    customer: Customer,
    type: Type
}

interface WorkStore {
    list: Work[]
}

export const useWorksStore = defineStore('works', {
    state(): WorkStore {
        return {
            list: [
                {
                    title: 'Минусация в рекламных кабинетах',
                    customer: Customer.SMARTIS,
                    type: Type.PROJECT
                },
                {
                    title: 'Анализ обращений на фрод',
                    customer: Customer.SMARTIS,
                    type: Type.PROJECT
                },
                {
                    title: 'Автоматизация биллинга',
                    customer: Customer.SMARTIS,
                    type: Type.PROJECT
                },
                {
                    title: 'REST API для личного кабинета омниканальной системы',
                    customer: Customer.COMAGIC,
                    type: Type.PROJECT
                },
                {
                    title: 'Микроконверсии',
                    customer: Customer.SMARTIS,
                    type: Type.PROJECT
                },
                {
                    title: 'Pet-проект',
                    customer: Customer.KIRIN,
                    type: Type.PROJECT
                },
                {
                    title: 'Синхронизация личных финансов из Notion через Яндекс.Алису',
                    customer: Customer.KIRIN,
                    type: Type.PROJECT
                },
                {
                    title: 'D3',
                    customer: Customer.KIRIN,
                    type: Type.TOOL
                },
                {
                    title: 'Highcharts',
                    customer: Customer.KIRIN,
                    type: Type.TOOL
                },
                {
                    title: 'Приложение Wiki',
                    customer: Customer.SMARTIS,
                    type: Type.PROJECT
                },
            ]
        };
    },
});
