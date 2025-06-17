<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings mt-20">
    <h1 class="green text-green-500 mt-2">{{ msg }}</h1>
    <div class="font-bold text-blue-500 mt-20 text-4xl">{{ description }}</div>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>
