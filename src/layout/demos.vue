<template>
	<header>
		<NavBar />
	</header>
	<router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/demos/Nav.vue'
import Table from '../pages/demos/Table.vue'

export default defineComponent ({
	components: {
		NavBar,
		Table
	},
})
</script>


