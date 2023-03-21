import {defineStore} from "pinia";

interface AuthState {
    token: string,
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => {
        return {
            token: localStorage.getItem('token') || '' as string,
        }
    },
    getters: {
        isAuthenticated: (state: AuthState): boolean => state.token !== '',
    },
    actions: {
        setToken(token: string): void {
            this.token = token;
        },
    }
});