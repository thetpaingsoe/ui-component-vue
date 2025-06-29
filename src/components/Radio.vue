<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue'

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

const pValue = computed({
  get() {
    return props.modelValue
  },
  set() {
    emits('update:modelValue', props.value)
  },
})
</script>

<template>
  <div>
    <input
      :id="`radio-${value}`"
      type="radio"
      class="cursor-pointer"
      :value="value"
      :name="name"
      v-model="pValue"
    />
    <label class="ms-2 cursor-pointer" :for="`radio-${value}`"> {{ value }}</label>
  </div>
</template>
