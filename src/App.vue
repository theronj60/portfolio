<template>
  <main class="flex flex-col justify-center">
  	<Home />
	<About />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default defineComponent ({
	components: {
		Home,
		About
	},
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
