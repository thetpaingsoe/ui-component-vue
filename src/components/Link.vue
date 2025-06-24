<script setup>
defineProps({
  url: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <main>
    <a class="cursor-pointer text-blue-600" :href="url" target="_blank"> <slot /> </a>
  </main>
</template>
