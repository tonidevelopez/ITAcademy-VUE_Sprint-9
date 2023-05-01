import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesList.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.logged) {
        store.commit('toggleLoginModal')
      } else {
        next()
      }
    }
  },
  {
    path: '/games:slug/:id/',
    name: 'gameinfo',
    component: () => import('../views/GameInfo.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
