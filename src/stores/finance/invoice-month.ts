import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface InvoiceMonth {
    name: string,
    month: string,
    count: number
}

interface InvoiceMonthStore {
    list: InvoiceMonth[]
}

export const useInvoiceMonthStore = defineStore('invoice-month', {
    state(): InvoiceMonthStore {
        return {
            list: []
        };
    },
    actions: {
        async fetch(): Promise<void> {
            try {
                const response = await api.finance.get();

                if (response === undefined) {
                    return ;
                }

                response.data.data.forEach((element: {name: string, month: string, count:number}): void => {
                    this.list.push({
                        name: element.name,
                        month: element.month,
                        count: element.count
                    })
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
});
