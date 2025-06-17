<script setup>
import { ref } from 'vue'

const props = defineProps({
  transactions: {
    type: String,
    required: true,
  },
})

var searchKeyword = ref()
var parsedTransactions = parseTransactions(props.transactions)
var filteredTransactions = ref(parsedTransactions)
var totalAmount = ref(0)

function parseTransactions() {
  return JSON.parse(props.transactions)
}

function filter() {
  filteredTransactions.value = parsedTransactions.filter((word) =>
    word.merchant.includes(searchKeyword.value),
  )
  calculateTotalAmount()
}

function calculateTotalAmount() {
  totalAmount.value = 0
  console.log(filteredTransactions)
  for (let i = 0; i < filteredTransactions.value.length; i++) {
    totalAmount.value += filteredTransactions.value[i].amount
  }
}

calculateTotalAmount()
</script>

<!--
const transactions = [
  { id: "t_01", merchant: "Rocket Rides", amount: 100 },
  { id: "t_02", merchant: "Cookie Shoppe", amount: 120 },
  { id: "t_03", merchant: "Cookie Shoppe", amount: -7 },
]
  Filter -> Input
  - List
  - List
  Sum : 
-->

<template>
  <div class="flex items-center">
    <div>Filter</div>
    <input
      name="filter"
      id="fiter"
      class="border rounded border-gray-400 h-8 mx-2 p-2 text-gray-600"
      v-model="searchKeyword"
      @input="filter"
    />
  </div>
  <div class="mt-4 ms-14">
    <li v-for="transaction in filteredTransactions">
      {{ transaction.id }} : {{ transaction.merchant }} =
      <span v-if="transaction.amount > 0" class="text-green-500">{{ transaction.amount }} </span>
      <span v-else class="text-red-500">{{ transaction.amount }} </span>
    </li>
  </div>
  <div class="mt-4 font-bold">Sum : {{ totalAmount }}</div>
</template>
