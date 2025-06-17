<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="max-w-6xl bg-gray-50 mx-auto p-4 min-h-screen">
    <header>
      <div class="font-bold text-sky-800 text-lg">UI components</div>
      <hr class="text-gray-200 mt-4 mb-4" />
    </header>

    <RouterView />
  </div>
</template>
