import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/index.css'

//font-awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faChevronDown, faBars)

// Route Imports
import Default from './layout/default.vue'
import Demos from './layout/demos.vue'
import Index from './pages/demos/Index.vue'
import Table from './pages/demos/Table.vue'

const routes = [
	{ path: '/', component: Default },
	{ 
		path: '/demos',
		component: Demos,
		children: [
			{
				path: '',
				component: Index,
			},
			{
				path: 'table',
				component: Table,
			},
		]
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount('#app')
