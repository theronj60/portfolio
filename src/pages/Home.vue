<script lang="ts">
import backGroundImg from '../assets/monument-valley-night.jpg'
import { defineComponent, reactive } from 'vue'

export default defineComponent ({
	name: 'Home',
	setup() {
		const bgImg = `background-image: url(${backGroundImg}); background-size: cover;`
		const state = reactive({
			list: [
				'vite',
				'Vue3',
				'Typescript',
				'Tailwindcss',
				'fontawesome',
				'router',
				'vuex',
				'jest'
			]
		})
		return { state, bgImg }
	}
})
</script>

<template>
	<section id="home" ref="home" class="min-h-screen min-w-screen flex flex-col justify-center text-gray-100" :style="bgImg">
		<div class="h-1/3">
		</div>
		<div class="rounded-lg flex flex-col items-center justify-center h-1/3 w-3/4 mx-auto">
			<span class="text-2xl md:text-4xl font-semibold">
				Theron Joe
			</span>
			<span class="text-3xl md:text-5xl font-black">
				Web Developer
			</span>
			<div class="my-8 text-2xl hover:border-b-2 hover:border-blue-300">
				<router-link to="/demos/table">Data Table Demo</router-link>
			</div>
		</div>	
		<div class="flex items-end justify-center h-1/3 pb-4">
			<a href="#about" class="flex flex-col items-center px-4">
				<span class="text-xl font-bold">Learn More</span>
				<font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xl font-bold" />
			</a>
		</div>
	</section>
</template>

