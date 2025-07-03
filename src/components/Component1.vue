<script setup>
const props = defineProps({
  name: {
    type: String,
    defafult: '',
  },
})
</script>

<template>
  <div>Hello, {{ props.name }}</div>
</template>
