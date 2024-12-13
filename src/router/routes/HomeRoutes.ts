import type { RouteRecordRaw } from 'vue-router';

export const HomeRoutes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: {
            requiresLogin: false
        }
    }
];
