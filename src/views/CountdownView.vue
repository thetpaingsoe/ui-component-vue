<script setup>
import { ref } from 'vue'

const countDown = ref('')
const actualCountDownValue = ref(0)
const timer = ref(null)

function startCountDown() {
  clearTimeout(timer.value)
  const value = parseInt(countDown.value, 10)
  if (isNaN(value) || value <= 0) {
    actualCountDownValue.value = 0
    return
  }
  actualCountDownValue.value = value
  processCountDown()
}

function processCountDown() {
  if (actualCountDownValue.value > 0) {
    timer.value = setTimeout(() => {
      actualCountDownValue.value -= 1
      processCountDown()
    }, 1000)
  }
}
</script>

<template>
  <div class="flex flex-col w-full">
    <label for="countdownvalue">Enter your countdown value.</label>
    <input
      id="countdownvalue"
      class="px-4 py-2 border border-gray-200 rounded text-gray-800 w-fit"
      v-model="countDown"
      type="number"
      min="1"
      placeholder="Enter a number"
    />

    <button
      class="mt-4 px-4 py-2 border border-gray-300 bg-blue-800 text-white w-fit cursor-pointer"
      @click="startCountDown"
    >
      Start
    </button>
  </div>

  <div class="mt-12 ms-12 text-8xl mx-auto w-auto">
    <div class="w-full text-center" id="counter">
      {{ actualCountDownValue }}
    </div>
  </div>
</template>
