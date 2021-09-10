<script lang="ts">
	import { defineComponent, reactive } from 'vue'
	import aboutBackImg from '../assets/narrows.jpeg'
	export default defineComponent({
		setup() {
			const bgImg = `background-image: url(${aboutBackImg}); background-size: cover;`
			const state = reactive({
				foo: false
			})
			
			const alert = function () {
				state.foo = !state.foo
			}

			return { state, alert, bgImg }
		}
	}) 		
</script>

<template>
	<section id="about" class="min-h-screen text-gray-100 flex items-center justify-center" :style="bgImg">
		<h1 class="text-2xl font-black">About</h1>
	</section>
</template>

