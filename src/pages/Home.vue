<template>
  <div>
	<h1 class="text-2xl">Home:</h1>
	<HelloWorld msg="Vite Template for Vue 3 + Typescript + TailwindCss" />
	<section>
		This is a quick start template configured with: 
		<ul>
			<li v-for="(tool, index) in state.list" :key="index">
				{{tool}}
			</li>
		</ul>
	</section>
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { defineComponent, reactive } from 'vue'

export default defineComponent ({
	name: 'Home',
	components: {
		HelloWorld,
	},
	setup() {
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
		return { state }
	}
})
</script>
