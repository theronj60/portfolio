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
import Home from './pages/Home.vue'
// import About from './pages/About.vue'

const routes = [
	{ path: '/', component: Home },
	// { path: '/about', component: About },
]

const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount('#app')
