<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const radioRef = ref(null)
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
})

function onChange() {
  emits('update:modelValue', props.value)
}
</script>

<template>
  <div class="cursor-pointer">
    <input
      ref="radioRef"
      type="radio"
      :value="value"
      :name="name"
      :checked="modelValue === value"
      @change="onChange"
    />
    <span class="ms-2" @click="radioRef.click()"> {{ value }} </span>
  </div>
</template>
