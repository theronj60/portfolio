<script lang="ts">
import { defineComponent, reactive } from 'vue'
import axios from 'axios'

	export default defineComponent({
		setup() {
			const url = 'http://www.demo.joetwebdev.io/'
			const employees = axios.get(url + 'employees?page=1&limit=10').then((res: { data: any }) => {
				console.log(res.data)
			})
			const state = reactive({
				foo: false
			})
			
			const alert = function () {
				state.foo = !state.foo
			}

			return { state, alert, employees }
		}
	}) 		
</script>

<template>
	<div class="text-2xl">
		Table view
		<a href="https://www.demo.joetwebdev.io/" target="_blank">api link</a>
	</div>
</template>
