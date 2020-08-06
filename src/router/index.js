import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/AssetByLocation',
        name: 'Asset by Location',
        component: () => import('../views/AssetByLocation.vue')
    },
    {
        path: '/SearchByCategory',
        name: 'Search By Category',
        component: () => import('../views/SearchByCategory.vue')
    },
    {
        path: '/AtRisk',
        name: 'At Risk',
        component: () => import('../views/AtRisk.vue')
    },
    {
        path: '/OSHE',
        name: 'OSHE',
        component: () => import('../views/OSHE.vue')
    },
    {
        path: '/Testing',
        name: 'Testing',
        component: () => import('../views/Testing.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router