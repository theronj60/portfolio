<template>
  <div>
	<h1 class="text-2xl">Home:</h1>
	<HelloWorld msg="Hello Vue 3 + TypeScripts + Vite: Hello World" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

export default ({
	name: 'Home',
	components: {
		HelloWorld,
	},
})
</script>
