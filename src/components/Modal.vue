<script setup>
import { Modal } from 'vue-neat-modal'

const isOpen = ref(true)

function openModal() {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}
</script>

<template>
  <Modal v-model="isOpen" max-width="500px " class="bg-white">
    <div class="bg-white p-4 rounded">
      Modal Content

      <button @click="isOpen = false">Close</button>
    </div>
  </Modal>

  {{ isOpen }}
  <button @click="openModal">Open Modal</button>
</template>
