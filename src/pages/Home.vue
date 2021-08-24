<template>
  <section class="min-h-screen text-gray-100" :style="bgImg">
	<h1 class="text-2xl">Home:</h1>
	<HelloWorld msg="Vite Template for Vue 3 + Typescript + TailwindCss" />
	<div>
		This is a quick start template configured with: test
		<ul>
			<li v-for="(tool, index) in state.list" :key="index">
				{{tool}}
			</li>
		</ul>
	</div>
  </section>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { defineComponent, reactive } from 'vue'
import backGroundImg from '../assets/monument-valley-night.jpg'

export default defineComponent ({
	name: 'Home',
	components: {
		HelloWorld,
	},
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

<style>

</style>

