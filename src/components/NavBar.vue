<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
	setup() {
		const state = reactive({
			navItems: [
				{name: 'Home', link: '#home', active: true},
				{name: 'About', link: '#about', active: false},
				{name: 'Stack', link: '#stack', active: false},
				{name: 'Projects', link: '#projects', active: false},
				{name: 'Contact', link: '#contact', active: false},
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
	// @TODO set up active nav styles
})
</script>

<template>
	<nav class="test fixed h-16 bg-gray-800 opacity-75 min-w-screen w-full text-gray-100 px-4 flex justify-between items-center">
	    <img src="../assets/mnts.png" class="h-12 w-12 ml-auto md:ml-12" alt="page-logo"/>
		<!--<span class="rounded-full bg-gray-200 mx-auto w-12 h-12 md:ml-12"></span>-->
		<div class="md:hidden flex justify-self-end items-center">
			<font-awesome-icon :icon="['fas', 'bars']" class="text-2xl font-bold" />
		</div>
		<ul class="md:flex justify-self-end items-center hidden">
			<a v-for="(nav, index) in state.navItems" :key="nav.name" :href="nav.link" @click="setNav(index)">
				<li :class="['mx-2 font-black', {'border-b-4': nav.active}]">{{ nav.name }}</li>
			</a>
		</ul>	
	</nav>	
</template>

<style>
/* nav > .active > a{ */
/* 	border-bottom: 2px; */
/* 	background-color: red; */
/* } */
</style>
