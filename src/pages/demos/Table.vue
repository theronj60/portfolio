<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue'
import axios from 'axios'
import _ from 'lodash'

	export default defineComponent({
		setup() {
			const state = reactive({
				employees: Array as PropType<Array<string | number>>,
			})

			const url = 'https://www.demo.joetwebdev.io/'
			const page = ref(1)
			const limit = ref(10)
			function getEmployees() { axios.get(url + `employees?page=${page.value}&limit=${limit.value}`).then((res) => {
					state.employees = res.data
			})}
			onMounted(() => {
				getEmployees()
			})

			watch(() => _.cloneDeep([page.value, limit.value]),(currentValue, oldValue) => {
				getEmployees()
			  }
			)
			
			return {  state, page, limit }
		}
	}) 		
</script>

<template>
	<div class="min-w-full flex flex-col justify-center">
		<h1 class="text-2xl mx-4 mt-8">
			<a href="https://www.demo.joetwebdev.io/" target="_blank" class="hover:text-blue-400">joetwebdev API</a>
			<p class="text-sm">The above link is to my node/express api that I built.</p>
		</h1>

		<table class="max-w-full border rounded-xl divide-y divide-gray-200 mx-4 my-8">
		  <thead>
			<tr>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
			</tr>
		  </thead>
		  <tbody class="bg-white divide-y divide-gray-200">
			<tr v-for="employee in state.employees" :key="employee.id" class="cursor-pointer">
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.id}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.user_name}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{`${employee.first_name} ${employee.last_name}`}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.email}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.department}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.city}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.state}}</td>
			</tr>
		  </tbody>
		</table>
		<div class="flex justify-between mx-4">
			<button :disabled="page < 2" @click="page--" class="px-3 py-2 hover:bg-gray-200 rounded-xl">Previous</button>
			<button @click="page++" class="px-3 py-2 hover:bg-gray-200 rounded-xl">Next</button>
		</div>
	</div>
</template>
