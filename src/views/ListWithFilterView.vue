<script setup>
import ListWithFilter from '@/components/ListWithFilter.vue'

const transactions = JSON.parse(
  '[{"id":"t_01","merchant":"RocketRides","amount":100},{"id":"t_02","merchant":"CookieShoppe","amount":120},{"id":"t_03","merchant":"CookieShoppe","amount":-7}]',
)
</script>
<template>
  <main>
    <ListWithFilter :transactions="transactions" />
  </main>
</template>
