<script setup>
import { ref, watch } from 'vue'

const cardNumberRef = ref('')
const cardSecurityCode = ref('')
const cardExpiryDate = ref('')
const invalidExpiryDate = ref(false)

// Format
function formatCardNumber(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

function formatExpiryDate(value) {
  value = value.replace(/\D/g, '').slice(0, 4)
  let formatted = value
  let isInvalid = false

  if (value.length > 2) {
    const month = Number(value.slice(0, 2))
    const year = Number(value.slice(2))
    const now = new Date()
    const currentMonth = now.getMonth() + 1
    const currentYear = Number(now.getFullYear().toString().slice(2))

    // Validate month
    if (month < 1 || month > 12) {
      isInvalid = true
    } else if (
      value.length >= 4 &&
      (year < currentYear || (year === currentYear && month < currentMonth))
    ) {
      isInvalid = true
    }

    formatted = value.slice(0, 2) + '/' + value.slice(2)
  }

  invalidExpiryDate.value = isInvalid
  return formatted
}

function formatSecurityCode(value) {
  return value.replace(/\D/g, '').slice(0, 3).trim()
}

// Watch
watch(cardNumberRef, (value) => {
  cardNumberRef.value = formatCardNumber(value)
})

watch(cardExpiryDate, (value) => {
  cardExpiryDate.value = formatExpiryDate(value)
})

watch(cardSecurityCode, (value) => {
  cardSecurityCode.value = formatSecurityCode(value)
})

function submit() {
  alert('Submit')
}
</script>
<template>
  <div class="">
    <div class="flex">
      <div class="flex flex-col w-full p-2 border-2 rounded-lg border-gray-800">
        <span class="material-icons"> credit_card </span>
        <input placeholder="Card" name="card" id="card" class="select-none focus:outline-none" />
      </div>
      <div class="flex flex-col w-full p-2 border-2 ms-4 rounded-lg border-gray-200">
        <span class="material-icons text-gray-500">account_balance</span>
        <input placeholder="ACH bank debit" name="card2" id="card2" />
      </div>
      <div class="flex flex-col w-fit p-2 border-2 ms-4 rounded-lg border-gray-200">
        <span class="material-icons">more_horiz</span>
        <span />
      </div>
    </div>

    <div class="flex flex-col">
      <label for="card-no" class="mt-4">Card number</label>
      <input
        id="card-no"
        name="card-no"
        v-model="cardNumberRef"
        placeholder="1234 1234 1234 1234"
        class="mt-2 px-4 py-2 border border-gray-200 rounded bg-white text-gry-600 focus:outline-none"
        inputmode="numeric"
      />
    </div>

    <div class="flex">
      <div class="flex flex-col w-full">
        <label for="expiry-date" class="mt-4">Expiry Date</label>
        <input
          id="expiry-date"
          name="expiry-date"
          placeholder="MM/YY"
          inputmode="numeric"
          :class="invalidExpiryDate == true ? 'text-red-500' : 'text-gray-500'"
          v-model="cardExpiryDate"
          class="mt-2 px-4 py-2 border border-gray-200 rounded bg-white text-gry-600 focus:outline-none"
        />
      </div>

      <div class="ms-4 flex flex-col w-full">
        <label for="security-code" class="mt-4">Security Code</label>
        <input
          id="security-code"
          name="security-code"
          placeholder="CVV"
          v-model="cardSecurityCode"
          inputmode="numeric"
          class="mt-2 px-4 py-2 border border-gray-200 rounded bg-white text-gry-600 focus:outline-none"
        />
      </div>
    </div>
    <button
      @click="submit"
      class="bg-blue-900 text-white mt-4 w-full rounded px-4 py-2 me-4 cursor-pointer"
    >
      Submit
    </button>
  </div>
</template>
