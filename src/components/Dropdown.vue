<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const emit = defineEmits(['update:selected-option'])

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: [],
  },
  selectedVal: {
    type: String,
    default: '',
  },
})

const selected = ref(props.selectedVal)

function select() {
  emit('update:selected-option', selected.value)
}
</script>
<template>
  <select
    :id="props.id"
    class="px-6 py-2 border border-gray-300 rounded"
    :onchange="select"
    v-model="selected"
  >
    <option v-for="option in props.options" :name="option">{{ option }}</option>
  </select>
</template>
