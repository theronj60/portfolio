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
	<section id="about" class="min-h-screen px-8 grid grid-cols-2 gap-8 text-gray-100 items-center justify-center" :style="bgImg">
		<!-- <h1 class="text-2xl font-black">About</h1> -->
		<div @click="alert()" class="flex h-3/5 border-2 bg-gray-700 bg-opacity-50 rounded-xl shadow">
			test
		</div>
		<div class="flex h-3/5 border-2 bg-gray-700 bg-opacity-50 rounded-xl shadow">
			test 2
		</div>
	</section>
</template>

