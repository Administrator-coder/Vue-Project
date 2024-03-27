import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1-1-1',
      name: '1-1-1',
      component: () => import('../views/StageView1-1-1.vue')
    },
    {
      path: '/1-1-2',
      name: '1-1-2',
      component: () => import('../views/StageView1-1-2.vue')
    },
    {
      path: '/1-1-3',
      name: '1-1-3',
      component: () => import('../views/StageView1-1-3.vue')
    },
    {
      path: '/1-2-1',
      name: '1-2-1',
      component: () => import('../views/StageView1-2-1.vue')
    },
    {
      path: '/1-2-2',
      name: '1-2-2',
      component: () => import('../views/StageView1-2-2.vue')
    },
    {
      path: '/1-2-3',
      name: '1-2-3',
      component: () => import('../views/StageView1-2-3.vue')
    },
    {
      path: '/1-2-4',
      name: '1-2-4',
      component: () => import('../views/StageView1-2-4.vue')
    },
    {
      path: '/1-3-1',
      name: '1-3-1',
      component: () => import('../views/StageView1-3-1.vue')
    },
    {
      path: '/1-4-3',
      name: '1-4-3',
      component: () => import('../views/StageView1-4-3.vue')
    },
    {
      path: '/1-4-1',
      name: '1-4-1',
      component: () => import('../views/StageView1-4-1.vue')
    },
    {
      path: '/1-4-2',
      name: '1-4-2',
      component: () => import('../views/StageView1-4-2.vue')
    },
    {
      path: '/1-5-1',
      name: '1-5-1',
      component: () => import('../views/StageView1-5-1.vue')
    }
  ]
})

export default router
