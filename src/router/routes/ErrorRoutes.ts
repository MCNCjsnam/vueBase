import type { RouteRecordRaw } from 'vue-router';

export const ErrorRoutes: Array<RouteRecordRaw> = [
    {
        path: '/error/404',
        component: () => import(/* webpackChunkName: "error" */ '@/views/error/index.vue'),
        meta: {
            requiresLogin: false
        }
    }
];
