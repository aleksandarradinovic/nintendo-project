import { createRouter, createWebHistory } from 'vue-router'

/* All views imports */
import Home from '../views/Home.vue'
import Gallery from '../views/gallery.vue'
import Forum from '../views/forum.vue'
import News from '../views/news.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/gallery',
		name: 'Gallery',
		component: Gallery,
	},
	{
		path: '/forum',
		name: 'Forum',
		component: Forum,
	},
	{
		path: '/news',
		name: 'News',
		component: News,
	},
]

// Router instance
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
