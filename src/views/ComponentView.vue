<script setup>
import Button from '@/components/Button.vue'
import Divider from '@/components/Divider.vue'
import Dropdown from '@/components/Dropdown.vue'
import Link from '@/components/Link.vue'
import Radio from '@/components/Radio.vue'
import { ref } from 'vue'

var submitStatus = ref('')

function buttonPressed() {
  submitStatus.value = 'Submitted'

  setTimeout(() => {
    submitStatus.value = ''
  }, 1000)
}

const selectedOption = ref('Audi')
function getOptions() {
  return ['BMW', 'Audi']
}

const selectedRadio = ref('Three')
</script>

<template>
  <main class="">
    <!-- Buttons -->
    <div class="font-bold mb-2">Buttons</div>
    <Button @click="buttonPressed">Submit</Button>

    <div class="text-sm text-green-700 ms-1 mt-4">
      {{ submitStatus }}
    </div>

    <Divider />

    <!-- Links -->
    <div class="font-bold mt-4">Links</div>
    <Link class="mt-2" url="https://www.google.com"> Read Me ... </Link>
    <Divider class="mt-4" />

    <!-- Radio -->
    <div class="font-bold mt-4">Radio</div>
    <Radio
      id="one"
      name="test"
      value="One"
      :model-value="selectedRadio"
      @update:modelValue="selectedRadio = $event"
    >
      One
    </Radio>
    <Radio
      id="two"
      name="test"
      value="Two"
      :model-value="selectedRadio"
      @update:modelValue="selectedRadio = $event"
    >
      Two
    </Radio>
    <Radio
      id="three"
      name="test"
      value="Three"
      :model-value="selectedRadio"
      @update:modelValue="selectedRadio = $event"
    >
      Three
    </Radio>
    <Divider class="mt-4" />

    <!-- Dropdown -->
    <div class="font-bold mt-4">Dropdown</div>

    <Dropdown
      id="cars"
      :selectedVal="selectedOption"
      :options="getOptions()"
      @update:selected-option="selectedOption = $event"
    />
  </main>
</template>
