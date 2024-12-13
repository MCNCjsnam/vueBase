import type { RouteRecordRaw } from 'vue-router';

export const LoginRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta: {
            requiresLogin: false
        }
    }
];
