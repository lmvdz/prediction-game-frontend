import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes = [
    {
        path: '/v2',
        component: () => import('./components/HelloWorld.vue'),
        props: {
            v2: true
        }
    },
    {
        path: '/v2/:game',
        component: () => import('./components/HelloWorld.vue'),
        props: (route) => ({
            v2: true,
            gstring: route.params.game
        })
    },
    {
        path: '/',
        component: () => import('./components/HelloWorld.vue')
    },
    {
        path: '/:game',
        component: () => import('./components/HelloWorld.vue'),
        props: (route) => ({
            gstring: route.params.game
        })
    },
    

] as Array<RouteRecordRaw>

export default createRouter({
    history: createWebHistory(),
    routes
})