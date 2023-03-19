import {useAuthStore} from "@/stores/auth";

export function authMiddleware(): boolean {
    const authStore = useAuthStore();
    return authStore.isAuthenticated;
}