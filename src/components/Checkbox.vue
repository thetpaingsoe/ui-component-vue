<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const emits = defineEmits(['update:check'])
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: 'cb-',
  },
  title: {
    type: String,
    default: 'Default',
  },
})

const checkboxValue = computed({
  get() {
    return props.value
  },
  set(newValue) {
    emits('update:check', newValue)
  },
})
</script>
<template>
  <input :id="id" type="checkbox" v-model="checkboxValue" />
  <label :for="id" class="ms-2">{{ title }}</label>
</template>
