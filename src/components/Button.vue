<script setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['buttonPressed'])
</script>
<template>
  <div
    class="px-4 py-2 border rounded w-fit border-gray-300 hover:bg-gray-100 cursor-pointer select-none"
    @click="emits('buttonPressed')"
  >
    <slot />
  </div>
</template>
