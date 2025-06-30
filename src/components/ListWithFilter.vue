<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
    default : () => []
  },
})

const filterKeyword = ref("");
const filteredTransactions = computed(() => {
    return props.transactions.filter((value) => {
        return String(value.merchant || "").toLowerCase().includes(filterKeyword.value.toLowerCase());        
    })
});

const totalAmount = computed(() => {
    return filteredTransactions.value.reduce((sum, transaction) => {
        return sum + (Number(transaction.amount) || 0);
    }, 0)
});

const warningMessage = computed(() => {
    return totalAmount.value > 100 ? "Too much amount!" : ""
})

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
  <div class="">
    <div>
        <label for="filter" class="font-bold text-gary-800">Filter</label>
        <input 
            v-model = "filterKeyword"
            id="filter"
            class="p-2 ms-4 border border-gray-300 rounded text-gray-700"></input>
    </div>
    
    <ul class="mt-6">
        <li class="ms-14 mt-2" v-for="transaction in filteredTransactions" :key="transaction.id">
            {{ transaction.merchant }} : 
            <span v-if="transaction.amount < 0" class="text-red-700"> {{ (Number(transaction.amount) | 0).toFixed(2) }}</span>
            <span v-else class="text-green-700"> {{ (Number(transaction.amount) | 0).toFixed(2) }}</span>
        </li>
    </ul>
    <div class=" border-t border-dashed mt-4 border-gray-300"/>
    <div class="mt-4">
        <span class="font-bold text-gary-800">TotalAmount : </span> {{ (Number(totalAmount) | 0).toFixed(2) }}
        <div class="text-sm text-yellow-500" >{{ warningMessage }}</div>
    </div>

  </div>

</template>
