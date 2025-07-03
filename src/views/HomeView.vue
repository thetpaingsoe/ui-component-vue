<script setup>
// Some code Testing
console.log('hello')

const data = ['a', 'b', 'c']
const joinData = data.join()
console.log(data)
console.log(joinData)

const str1 = '1:3:5:6'
const splitData = str1.split(':')
console.log(splitData)

const dateString = '2024-07-03T10:30:00Z' // ISO 8601 format (recommended)
const dateObject = new Date(dateString)
console.log(dateObject)

const dateString2 = '2024-07-03T10:31:00Z' // ISO 8601 format (recommended)
const dateObject2 = new Date(dateString2)

if (dateObject2 > dateObject) {
  console.log('Date2 is greater')
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
  },
}
console.log(person.firstName)

const person2 = new Object()
person2.name = 'John'
console.log(person2.name)

const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}'
const javascriptObject = JSON.parse(jsonString)

console.log(javascriptObject.name) // Output: Alice
console.log(javascriptObject.age) // Output: 30

const jsonString2 = JSON.stringify(person)
console.log(jsonString2)

let myAssociativeArray = {
  name: 'Alice',
  age: 30,
  city: 'New York',
}
// Accessing values
console.log(myAssociativeArray.name) // Output: Alice
console.log(myAssociativeArray['age']) // Output: 30

// Deleting a property
delete myAssociativeArray.city

console.log(myAssociativeArray)
// Output: { name: 'Alice', age: 31, occupation: 'Engineer' }

const userData = {
  user1: {
    name: 'Alice',
    age: 30,
  },
  user2: {
    name: 'Bob',
    age: 25,
  },
}

for (const userId in userData) {
  console.log(userId)
  console.log(userData[userId].name)
}

const userData2 = [
  {
    name: 'Alice',
  },
  {
    name: 'Bob',
  },
]

console.log(userData2)

for (const user in userData2) {
  console.log(userData2[user])
}

// sorting
const numbers = [10, 5, 80]
const sortedNumbers = numbers.sort((a, b) => {
  return a - b
})
console.log(sortedNumbers)

const transactions = [
  {
    id: '2',
    date: '02-04-2025',
  },
  {
    id: '1',
    date: '01-04-2025',
  },
]

console.log(transactions)
const sortedTransasctions = transactions.sort((a, b) => {
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)
  return bDate - aDate
})
console.log(sortedTransasctions)

sortedTransasctions.splice(1, 1)
console.log('sortedTransasctions')
console.log(sortedTransasctions)

// string includes
const str3 = 'This is hello'
if (str3.includes('hello')) {
  console.log('Included hello')
}

// array includes
const array1 = ['apple', 'banana', 'kiwi']
if (array1.includes('apple')) {
  console.log('included apple')
}
</script>

<template>
  <main class="flex">
    <a href="/list-with-filters">
      <div
        class="hover:cursor-pointer border rounded border-gray-200 p-2 m-2 bg-white w-fit hover:bg-gray-100"
      >
        List With Filter
      </div>
    </a>
    <a href="/components">
      <div
        class="hover:cursor-pointer border rounded border-gray-200 p-2 m-2 bg-white w-fit hover:bg-gray-100"
      >
        Components
      </div>
    </a>
    <a href="/checkout">
      <div
        class="hover:cursor-pointer border rounded border-gray-200 p-2 m-2 bg-white w-fit hover:bg-gray-100"
      >
        Checkout Component
      </div>
    </a>
    <a href="/infinity-scroll">
      <div
        class="hover:cursor-pointer border rounded border-gray-200 p-2 m-2 bg-white w-fit hover:bg-gray-100"
      >
        Infinity Scroll
      </div>
    </a>
    <a href="/countdown">
      <div
        class="hover:cursor-pointer border rounded border-gray-200 p-2 m-2 bg-white w-fit hover:bg-gray-100"
      >
        Countdown
      </div>
    </a>
  </main>
</template>
