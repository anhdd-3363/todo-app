<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue", "add"]);
</script>

<template>
  <div class="flex items-center justify-center mb-3">
    <input
      type="text"
      id="newTodo"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
      placeholder="Enter your plan..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('add')"
      required
    />
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      :class="!modelValue ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'"
      @click="$emit('add')"
      :disabled="!modelValue"
    >
      Add
    </button>
  </div>
</template>
