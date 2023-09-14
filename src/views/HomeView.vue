<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
</script>

<template>
  <div
    class="max-w-screen-xl flex flex-col items-center justify-center mx-auto p-4 mt-10"
  >
    <p class="text-xl mb-3">This is home page</p>
    <p class="text-lg mb-5">Counter is {{ counterStore.count }}</p>
    <div class="flex">
      <button
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        @click="counterStore.increment()"
      >
        Increment +
      </button>
      <button
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        @click="counterStore.decrement()"
      >
        Decrement -
      </button>
    </div>
  </div>
</template>
