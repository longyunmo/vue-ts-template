import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BaseView from "../views/Base.vue"
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/Login.vue'
import AdoutView from '../views/AdoutView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: BaseView
      },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/adout',
        name: 'adout',
        component: AdoutView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
