<script setup>
import { ref } from "vue";

const props = defineProps({
  todo: String,
  index: Number,
});

const emit = defineEmits(["save", "delete"]);

const isEditing = ref(0);
const editingTodo = ref("");

const handleEdit = () => {
  isEditing.value = true;
  editingTodo.value = props.todo;
};

const handleSave = (index) => {
  isEditing.value = false;
  emit("save", editingTodo.value, index);
};
</script>

<template>
  <input
    v-if="isEditing"
    type="text"
    id="newTodo"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
    v-model="editingTodo"
  />
  <p v-else class="text-lg truncate">
    {{ `${index + 1}. ${todo}` }}
  </p>
  <div class="w-fit flex">
    <button
      v-if="isEditing"
      type="button"
      @click="handleSave(index)"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-2"
      :class="!editingTodo ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'"
      :disabled="!editingTodo"
    >
      Save
    </button>
    <button
      v-else
      type="button"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mr-2"
      @click="handleEdit(index)"
    >
      Edit
    </button>

    <button
      type="button"
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      @click="$emit('delete', index)"
    >
      Delete
    </button>
  </div>
</template>
