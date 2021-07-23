import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/index.css'

//font-awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faSignOutAlt)

// Route Imports
import Home from './pages/home.vue'

const routes = [
	{ path: '/', component: Home },
  ]

const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
  })

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount('#app')
