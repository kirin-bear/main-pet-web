import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface UserInformationState {
    email: string,
    name: string,
    id: number,
}

export const useUserInformationStore = defineStore('user-information', {
    state: (): UserInformationState => {
        return {
            email: '',
            name: '',
            id: 0,
        }
    },
    actions: {
        async fetch(): Promise<void> {
            try {
                const response = await api.axios.get('/api/v1/user/me');
                this.email = response.data.data.email || '';
                this.id = response.data.data.id || 0;
            } catch (error) {
                console.log(error);
            }
        }
    }
})