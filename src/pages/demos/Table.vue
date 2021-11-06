<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import axios from 'axios'

	export default defineComponent({
		setup() {
			const state = reactive({
				employees: []
			})
			function getEmployees(url: any) {axios.get(url + 'employees?page=1&limit=10').then((res) => {
				 state.employees = res.data
			})}
			onMounted(() => {
				/* const url = 'http://localhost:8080/' */
				const url = 'https://www.demo.joetwebdev.io/'
				getEmployees(url)
			});
			
			return {  state }
		}
	}) 		
</script>

<template>
	<div class="min-w-full flex flex-col justify-center">
		<h1 class="text-2xl mx-4 mt-8">
			<a href="https://www.demo.joetwebdev.io/" target="_blank" class="hover:text-blue-400">joetwebdev API</a>
		</h1>

		<table class="max-w-full border rounded-xl divide-y divide-gray-200 mx-4 my-8">
		  <thead>
			<tr>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
			  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
			</tr>
		  </thead>
		  <tbody class="bg-white divide-y divide-gray-200">
			<tr v-for="employee in state.employees" :key="employee.id" class="cursor-pointer hover:bg-gray-200 even:bg-gray-800">
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.id}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.user_name}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.first_name}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.last_name}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.email}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.department}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.city}}</td>
			  <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{{employee.state}}</td>
			</tr>
		  </tbody>
		</table>
	</div>
</template>
