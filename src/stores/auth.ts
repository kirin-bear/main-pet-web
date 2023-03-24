import {defineStore} from "pinia";
import api from "@/plugins/kirin-bear-api/api";

interface AuthState {
    token: string,
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => {
        return {
            token: api.getToken() as string,
        }
    },
    getters: {
        isAuthenticated: (state: AuthState): boolean => state.token !== '',
    },
});