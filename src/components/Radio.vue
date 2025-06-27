<script setup>
import { defineProps, defineEmits, ref } from 'vue'

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
  <div>
    <input
      :id="`radio-${value}`"
      type="radio"
      class="cursor-pointer"
      :value="value"
      :name="name"
      :checked="modelValue === value"
      @change="onChange"
    />
    <label class="ms-2 cursor-pointer" :for="`radio-${value}`"> {{ value }}</label>
  </div>
</template>
