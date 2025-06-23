<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="max-w-6xl border border-gray-200 border-dashed mx-auto p-4 min-h-screen">
    <header class="mb-4">
      <div class="font-bold text-gray-800 text-lg">UI components</div>
      <div class="border-t border-dashed mt-4 border-gray-500" />
    </header>

    <RouterView />
  </div>
</template>
