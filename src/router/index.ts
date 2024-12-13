import { createRouter, createWebHistory, useRoute } from 'vue-router';
import { LoginRoutes } from './routes/LoginRoutes';
import { HomeRoutes } from './routes/HomeRoutes';
import { ErrorRoutes } from './routes/ErrorRoutes';
import { CommunityRoutes } from './routes/Community';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/error/404'
        },
        ...LoginRoutes,
        ...HomeRoutes,
        ...CommunityRoutes,
        ...ErrorRoutes
    ]
});

router.beforeEach(async (to, from) => {
    if (to.path === '/login') {
        // authStore.clearToken();
    } else {
        if (to.meta.requiresLogin) {
            return '/login';
        }
    }
});

router.afterEach(async (toString, from) => {});

export default router;
