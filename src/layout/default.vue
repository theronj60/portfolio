<script lang="ts">
import NavBar from '../components/NavBar.vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Stack from '../pages/Stack.vue'

import { defineComponent } from 'vue'
export default defineComponent ({
	components: {
		NavBar,
		Home,
		About,
		Stack
	},
})
</script>


<template>
	<header>
		<NavBar />
	</header>
	<main class="flex flex-col justify-center">
		<Home />
		<About />
		<Stack />
	</main>
</template>
