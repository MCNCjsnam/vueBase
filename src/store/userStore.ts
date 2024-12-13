import { defineStore } from 'pinia';
import { StoreState, UserInfo } from '@/types/store';

export const useUserStore = defineStore('user', {
    state: (): StoreState => ({
        userInfo: { userId: '' }
    }),

    getters: {
        userId(): string {
            return this.userInfo?.userId || '';
        }
    },

    actions: {
        setUser(user: UserInfo) {
            this.userInfo = user;
        },
        clearUser() {
            this.userInfo = { userId: '' };
        },
        logout() {
            this.userInfo = { userId: '' };
            location.href = '/';
        }
    }
});
