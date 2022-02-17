import {createRouter, createWebHistory} from 'vue-router'

/* All views imports */
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
]

const router = createWebHistory({
    history: createWebHistory(),
    routes
})

export default router