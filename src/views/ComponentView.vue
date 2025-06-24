<script setup>
import Button from '@/components/Button.vue'
import { ref } from 'vue'

var submitStatus = ref('')

function buttonPressed() {
  submitStatus.value = 'Submitted'

  setTimeout(() => {
    submitStatus.value = ''
  }, 1000)
}
</script>
<template>
  <main class="">
    <div class="font-bold mb-2">Buttons</div>

    <Button @click="buttonPressed">Submit</Button>

    <div class="text-sm text-green-700 ms-1 mt-4">
      {{ submitStatus }}
    </div>
  </main>
</template>
