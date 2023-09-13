<script setup>
import { ref, computed } from 'vue';
import DocumentIcon from './components/icons/IconDocument.vue';

const todos = ref(['Do homework', 'Play game', 'Watch movie', 'Read book']);
const newTodo = ref('');
const editingTodo = ref('');
const editingIndex = ref(null);
const isEditing = ref(false);
const keyword = ref('');

const handleAdd = () => {
  todos.value.push(newTodo.value);
  newTodo.value = '';
};
const handleDelete = (index) => {
  todos.value.splice(index, 1);
};
const handleEdit = (index) => {
  isEditing.value = true;
  editingIndex.value = index;
  editingTodo.value = todos.value[index];
};
const handleSave = (index) => {
  todos.value[index] = editingTodo.value;
  isEditing.value = false;
  editingIndex.value = null;
  editingTodo.value = '';
};
const handleSort = (e) => {
  const sortType = e.target.value;
  if (sortType === 'A-Z') {
    todos.value.sort();
  } else if (sortType === 'Z-A') {
    todos.value.sort().reverse();
  }
};

const searchResult = computed(() => {
  if (keyword.value)
    return todos.value.filter((todo) =>
      todo.toLowerCase().includes(keyword.value.toLowerCase())
    );
  else return todos.value;
});
</script>

<template>
  <div class="flex justify-between mb-4 w-96">
    <div class="flex items-center">
      <DocumentIcon class="mr-2" />
      <h1 class="text-3xl">Todos App</h1>
    </div>
    <select
      id="sort"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @change="handleSort"
    >
      <option value="default" hidden disable>Sort</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
  </div>

  <form class="mb-5 w-96">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        v-model="keyword"
        required
      />
    </div>
  </form>

  <div class="rounded-lg border-2 p-5 w-96">
    <div class="flex items-center justify-center mb-3">
      <input
        type="text"
        id="newTodo"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
        placeholder="Enter your plan..."
        v-model="newTodo"
        @keyup.enter="handleAdd"
        required
      />
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="handleAdd"
      >
        Add
      </button>
    </div>
    <div class="flex flex-col">
      <div
        v-for="(todo, index) in searchResult"
        class="flex justify-between my-2 items-center"
        :key="index"
      >
        <input
          v-if="isEditing && index === editingIndex"
          type="text"
          id="newTodo"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
          v-model="editingTodo"
        />
        <p v-else class="text-lg">{{ `${index + 1}. ${todo}` }}</p>
        <div>
          <button
            v-if="isEditing && index === editingIndex"
            type="button"
            @click="handleSave(index)"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-2"
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
            @click="handleDelete(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
