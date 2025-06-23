<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-auto container border border-gray-200 border-dashed p-4 min-h-screen">
    <header class="mb-4">
      <a href="/"><div class="font-bold text-gray-800 text-lg">UI components</div></a>
      <div class="border-t border-dashed mt-4 border-gray-500" />
    </header>

    <RouterView />
  </div>
</template>
