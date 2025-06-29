<script setup>
const props = defineProps({
  value: {
    type: Array,
    default: {},
  },
})
</script>
<template>
  <table class="mt-4 min-w-full border border-gray-300">
    <thead class="bg-gray-200 border border-gray-300">
      <tr>
        <th v-for="header in value.title" class="border border-gray-300 p-2 text-left">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="data in value.data">
        <td class="border border-gray-300 p-2">{{ data.data1 }}</td>
        <td class="border border-gray-300 p-2">{{ data.data2 }}</td>
        <td class="border border-gray-300 p-2">{{ data.data3 }}</td>
      </tr>
    </tbody>
  </table>

  <!-- <table class="min-w-full border border-gray-300">
    <thead>
      <tr class="bg-gray-100">
        <th class="px-4 py-2 border-b border-gray-300 text-left">Title 1</th>
        <th class="px-4 py-2 border-b border-gray-300 text-left">Title 2</th>
        <th class="px-4 py-2 border-b border-gray-300 text-left">Title 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2 border-b border-gray-200">Data</td>
        <td class="px-4 py-2 border-b border-gray-200">Data</td>
        <td class="px-4 py-2 border-b border-gray-200">Data</td>
      </tr>
      <tr>
        <td class="px-4 py-2 border-b border-gray-200">Data</td>
        <td class="px-4 py-2 border-b border-gray-200">Data</td>
        <td class="px-4 py-2 border-b border-gray-200">Data</td>
      </tr>
    </tbody>
  </table> -->
</template>
