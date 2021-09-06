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
		/* let home = ref(null) */
		/* onMounted(() => { */
		/* 	console.log(home.value) */
		/* }) */
		/* home.value.scroll({ */
		/* 	//	top: 20, */
		/* 	behavior: 'smooth', */
		/* })	 */
		return { state, bgImg }
	}
})
</script>

<template>
	<section ref="home" class="min-h-screen flex flex-col justify-center text-gray-100" :style="bgImg">
		<div class="h-1/3">
		</div>
		<div class="rounded-lg flex flex-col justify-center h-1/3 w-3/4 mx-auto">
			<span class="text-2xl font-semibold">
				Theron Joe
			</span>
			<span class="text-3xl font-black">
				Web Developer
			</span>
		</div>	
		<div class="flex items-end justify-center h-1/3 pb-4">
			<a href="#about" class="flex flex-col px-4">
				<span>Learn More</span>
				<span></span>
			</a>
		</div>
	</section>
</template>

