//import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
//import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView,
  //   },
  //   {
  //     path: '/projects',
  //     name: 'projects',
  //     component: () => import('@/views/ProjectView.vue'),
  //   },
  //   {
  //     path: '/projects/:id',
  //     name: 'single-project',
  //     component: () => import('@/views/SingleProjectView.vue'),
  //   },
  //   {
  //     path: '/:catchall(.*)*',
  //     name: 'NotFound',
  //     component: h('p', { style: 'color: red;' }, '404 Not Found'),
  //   },
  //   {
  //     path: '/projects:catchall(.*)*',
  //     name: 'ProjectNotFound',
  //     component: h('p', { style: 'color: red;' }, '404 Project Not Found'),
  //   },
  // ],
})

export default router
