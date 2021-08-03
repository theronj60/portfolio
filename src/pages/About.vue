<template>
<div>
	<h1 class="text-2xl">About</h1>
	<div>{{state.foo}}</div>
	<button class="px-4 py-2 bg-green-400 rounded font-semibold text-gray-100" @click="alert()">Alert</button>
</div>
</template>

<script lang="ts">
	import { defineComponent, reactive } from 'vue'
	export default defineComponent({
		setup() {
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
