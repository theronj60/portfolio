<template>
  <div class="bg-red-300">
	test
	<HelloWorld msg="Hello Vue 3 + TypeScripts + Vite" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
	},
})
</script>
