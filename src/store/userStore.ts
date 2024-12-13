import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as any
    }),

    getters: {
        userName(): string {
            return this.user?.userName || '';
        }
    },

    actions: {
        setUser(user: any) {
            this.user = user;
        },
        clearUser() {
            this.user = null;
        },
        logout() {
            location.href = '/';
            this.user = null;
        }
    }
});
