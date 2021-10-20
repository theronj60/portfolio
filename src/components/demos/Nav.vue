<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
	setup() {
		const state = reactive({
			navItems: [
				{name: 'Table', link: '/demos/table', active: true},
			]
		})
		function setNav(index: any) {
			state.navItems.forEach((nav) => {
				nav.active = false
			})
				state.navItems[index].active = true
		}
		return { state, setNav }
	}
})
</script>

<template>
	<nav class="h-16 bg-gray-800 min-w-screen w-full text-gray-100 px-4 flex justify-between items-center">
		<img src="../../assets/mnts.png" class="h-12 w-12 ml-auto md:ml-12" alt="page-logo"/>
		<div class="md:hidden flex justify-self-end items-center">
			<font-awesome-icon :icon="['fas', 'bars']" class="text-2xl font-bold" />
		</div>
		<ul class="md:flex justify-self-end items-center hidden">
			<router-link v-for="(nav, index) in state.navItems" :key="nav.name" :to="nav.link" @click="setNav(index)">
				<li :class="['mx-2 font-black', {'border-b-4 border-indigo-500 px-2': nav.active}]">{{nav.name}}</li>
			</router-link>
		</ul>
	</nav>
</template>
