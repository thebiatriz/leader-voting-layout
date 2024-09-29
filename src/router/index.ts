import { Views } from '@/views/index';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Views.Home,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router