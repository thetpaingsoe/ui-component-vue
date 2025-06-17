<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  transactions: {
    type: String,
    required: true,
  },
})

const filterKeyword = ref("");
const parsedTransactions = computed(() => {
    return JSON.parse(props.transactions)
});

const filteredTransactions = computed(() => {
    return parsedTransactions.value.filter((value) => {
        return value.merchant.includes(filterKeyword.value);        
    })
});

const totalAmount = computed(() => {
    return filteredTransactions.value.reduce((sum, transaction) => {
        return sum + (Number(transaction.amount) || 0);
    }, 0)
});

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
  <div>
    <div class="flex items-center">
        <div class="font-bold text-sky-800">Filter</div>
        <input 
            v-model = "filterKeyword"
            class="p-2 ms-4 border border-gray-300 rounded text-gray-500"></input>
    </div>

    <div class="mt-4">
        <li class="ms-14" v-for="transaction in filteredTransactions">
            {{ transaction.merchant }} = 
            <span v-if="transaction.amount < 0" class="text-red-500"> {{ transaction.amount }}</span>
            <span v-else class="text-green-500"> {{ transaction.amount }}</span>
        </li>
    </div>
    <hr class="text-gray-200 my-4"/>
    <div class="mt-4">
        <span class="font-bold text-sky-800">TotalAmount : </span> {{ totalAmount }}
    </div>

  </div>

</template>
