<template>
	<section class="min-h-screen flex flex-col justify-center text-gray-100" :style="bgImg">
		<div class="h-1/3">
			<span class="rounded-full flex self-start bg-gray-200 mx-auto w-12 h-12"></span>
		</div>
		<div class="rounded-lg flex flex-col justify-center h-1/3 w-3/4 mx-auto">
			<span class="text-2xl">
				Theron Joe
			</span>
			<span class="text-3xl">
				Web Developer
			</span>
		</div>	
		<div class="flex items-end justify-center h-1/3 pb-4">
			<button class="flex flex-col px-4">
				<span>Learn More</span>
				<span></span>
			</button>
		</div>
	</section>
</template>

<script lang="ts">
import backGroundImg from '../assets/monument-valley-night.jpg'
import { defineComponent, reactive } from 'vue'
/* import backGroundImg from '../assets/monument-valley-night.jpg' */

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

