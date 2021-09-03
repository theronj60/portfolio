<template>
	<section class="min-h-screen">
		<h1 :class="[state.foo ? 'bg-green-400' : 'bg-yellow-400', 'text-2xl']">About</h1>
		<div>{{state.foo}}</div>
		<button class="px-4 py-2 bg-green-400 rounded font-semibold text-gray-100" @click="alert()">Alert</button>
	</section>
</template>

<script lang="ts">
	import { defineComponent, reactive } from 'vue'
	/* import aboutBackImg from '.' */
	export default defineComponent({
		setup() {
			/* const bgImg = `background-image: url(${aboutBackImg}); background-size: cover;` */
			const state = reactive({
				foo: false
			})
			
			const alert = function () {
				state.foo = !state.foo
			}

			return { state, alert }
		}
	}) 		
</script>

<style>

</style>
