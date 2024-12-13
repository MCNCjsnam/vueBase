import type { RouteRecordRaw } from 'vue-router';

export const CommunityRoutes: Array<RouteRecordRaw> = [
    {
        path: '/community',
        component: () => import(/* webpackChunkName: "community" */ '@/views/community/index.vue'),
        meta: {
            requiresLogin: false
        }
    },
    {
        path: '/community/detail/:id',
        component: () =>
            import(/* webpackChunkName: "community" */ '@/views/community/detail/index.vue'),
        meta: {
            requiresLogin: false
        }
    }
];
