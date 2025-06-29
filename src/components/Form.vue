<script setup>
function submit() {
  console.log('Submitted')
}
</script>
<template>
  <div class="flex flex-col w-fit">
    <input
      id="name"
      placeholder="User Name"
      class="mt-2 px-4 py-2 border border-gray-300 rounded"
    />

    <textarea
      id="description"
      placeholder="Description"
      class="mt-2 px-4 py-2 border border-gray-300 rounded"
    ></textarea>

    <div class="mt-4">
      <input type="radio" id="radio" />
      <label for="radio" class="ms-2">Radio </label>
    </div>

    <div class="mt-4">
      <input type="checkbox" id="checkbox" />
      <label for="radio" class="ms-2">Checkbox </label>
    </div>

    <button
      @click="submit"
      class="px-4 py-2 border border-gray-300 bg-blue-500 text-white rounded mt-4 cursor-pointer"
    >
      Submit
    </button>
  </div>
</template>
