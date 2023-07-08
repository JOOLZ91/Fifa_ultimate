import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../components/Cart.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
