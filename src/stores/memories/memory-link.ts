import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface MemoryLink {
    sourceId: number,
    targetId: number
}

interface MemoryLinkStore {
    list: MemoryLink[]
}

export const useMemoriesLinksStore = defineStore('memories-links', {
    state(): MemoryLinkStore {
        return {
            list: []
        };
    },
    actions: {
        async fetch(): Promise<void> {
            try {
                this.list = [];
                const response = await api.axios.get('/api/v1/memory/link');
                response.data.data.forEach((element: {target_id: number, source_id: number}): void => {
                    this.list.push({
                        sourceId: element.target_id,
                        targetId: element.source_id
                    })
                });
            } catch (error) {

            }
        }
    }
});