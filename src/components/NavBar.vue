<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	setup() {
		const navItems = [
			{name: 'Home', link: '#home'},
			{name: 'About', link: '#about'},
			{name: 'Stack', link: '#stack'},
			{name: 'Projects', link: '#projects'},
			{name: 'Contact', link: '#contact'},
		]
		return { navItems }
	}
})
	
</script>

<template>
	<nav class="absolute h-16 bg-gray-800 opacity-75 w-full text-gray-100 px-4 flex items-center content-center">
		<span class="justify-center rounded-full bg-gray-200 w-12 h-12"></span>
		<ul class="flex justify-self-end items-center">
			<a v-for="nav in navItems" :key="nav.name" :href="nav.link">
				<li class="mx-2">{{ nav.name }}</li>
			</a>
		</ul>	
	</nav>
</template>
