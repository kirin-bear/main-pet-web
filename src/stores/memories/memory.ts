import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface Memory {
    id: number,
    title: string,
}

interface MemoryStore {
    list: Memory[]
}

export const useMemoriesStore = defineStore('memories', {
    state(): MemoryStore {
        return {
            list: []
        };
    },
    actions: {
        async fetch(): Promise<void> {
            try {
                this.list = [];
                const response = await api.axios.get('/api/v1/memory');
                response.data.data.forEach((element: {id: number, title: string}): void => {
                    this.list.push({
                        id: element.id,
                        title: element.title
                    })
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
});
