<script setup>
defineEmits(["sort"]);
</script>

<template>
  <select
    id="sort"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @change="$emit('sort', $event)"
  >
    <option value="default" hidden disable>Sort</option>
    <option value="A-Z">A-Z</option>
    <option value="Z-A">Z-A</option>
  </select>
</template>
