import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface UserInformationState {
    email: string,
    name: string,
}

export const useUserInformationStore = defineStore('user-information', {
    state: (): UserInformationState => {
        return {
            email: '',
            name: '',
        }
    },
    actions: {
        fetch(): void {

            api.axios.get('/api/v1/user/me')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.warn(error);
                });

            this.email = 'kz123213';
            this.name = 'tr';
        }
    }
})