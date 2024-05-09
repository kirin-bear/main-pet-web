import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface UserInformationState {
    email: string,
    name: string,
    id: number,
    notionCountDatabases: number,
    notionCountPages: number,
}

export const useUserInformationStore = defineStore('user-information', {
    state: (): UserInformationState => {
        return {
            email: '',
            name: '',
            id: 0,
            notionCountDatabases: 0,
            notionCountPages: 0
        }
    },
    actions: {
        async fetch(): Promise<void> {
            try {
                const response = await api.axios.get('/api/v1/user/me');
                this.email = response.data.data.email || '';
                this.id = response.data.data.id || 0;
                this.notionCountDatabases = response.data.data.notion_count_databases || 0;
                this.notionCountPages = response.data.data.notion_count_pages || 0;
            } catch (error) {
                console.log(error);
            }
        }
    }
})
