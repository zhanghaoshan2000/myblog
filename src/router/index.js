import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: () => import('@/views/home/index.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/about/index.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/views/blog/index.vue')
	},
	{
		path: '/live',
		name: 'live',
		component: () => import('@/views/live/index.vue')
	},
	{
		path: '/future',
		name: 'future',
		component: () => import('@/views/future/index.vue')
	},
	{
		path: '/demo',
		name: 'demo',
		component: () => import('@/views/demo/index.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
