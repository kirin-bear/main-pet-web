import {defineStore} from "pinia";

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
            this.email = 'kz123213';
            this.name = 'tr';
        }
    }
})