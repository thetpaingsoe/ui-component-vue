<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const count = ref(100)
const container = ref(null)

function onScroll() {
  if (!container.value) return
  const { scrollTop, scrollHeight, clientHeight } = container.value
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    count.value += 100
  }
}

onMounted(() => {
  container.value.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  container.value.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div ref="container" class="h-96 overflow-y-auto p-2 min-h-screen" id="container">
    <div v-for="i in count" :key="i" class="p-2 border border-gray-200">Testing {{ i }}</div>
  </div>
</template>
