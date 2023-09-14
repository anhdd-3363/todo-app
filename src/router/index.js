import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Todo from '../views/TodoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
  ],
});

export default router;
