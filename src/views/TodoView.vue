<script setup>
import { ref, computed } from "vue";
import TodoItem from "../components/TodoItem.vue";
import SearchBar from "../components/SearchBar.vue";
import AddComponent from "../components/AddComponent.vue";
import AppTitle from "../components/AppTitle.vue";
import SortSelect from "../components/SortSelect.vue";

const todos = ref(["Do homework", "Play game", "Watch movie", "Read book"]);
const newTodo = ref("");
const keyword = ref("");

const handleAdd = () => {
  todos.value.push(newTodo.value);
  newTodo.value = "";
};

const handleDelete = (index) => {
  todos.value.splice(index, 1);
};

const handleSave = (value, index) => {
  todos.value[index] = value;
};

const handleSort = (e) => {
  const sortType = e.target.value;
  if (sortType === "A-Z") {
    todos.value.sort();
  } else if (sortType === "Z-A") {
    todos.value.sort().reverse();
  }
};

const searchResult = computed(() => {
  if (keyword.value) return todos.value.filter((todo) => todo.toLowerCase().includes(keyword.value.toLowerCase()));
  else return todos.value;
});
</script>

<template>
  <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
    <div class="flex justify-between my-4 w-96">
      <AppTitle />
      <SortSelect @sort="handleSort" />
    </div>
    <SearchBar v-model="keyword" />
    <div class="rounded-lg border-2 p-5 w-96">
      <AddComponent v-model="newTodo" @add="handleAdd" />
      <div class="flex flex-col">
        <div v-for="(todo, index) in searchResult" class="flex justify-between my-2 items-center" :key="index">
          <TodoItem :todo="todo" :index="index" @save="handleSave" @delete="handleDelete" />
        </div>
      </div>
    </div>
  </div>
</template>
