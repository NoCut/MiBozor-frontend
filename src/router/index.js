import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import AdminAuthView from '../views/AdminAuthView.vue'
import ItemView from '../views/ItemView.vue'
import AboutView from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'default' },
    },
    {
      path: '/category/:type',
      name: 'category',
      component: CategoryView,
      meta: { layout: 'default' },
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemView,
      meta: { layout: 'default' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { layout: 'default' },
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        layout: 'default',
        requiresAuth: true
      },
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView,
      meta: {
        layout: 'admin',
        requiresAdmin: true,
      },
    },
    {
      path: '/admin/auth',
      name: 'admin-auth',
      component: AdminAuthView,
      meta: { layout: 'admin' },
    },
  ],
})

export default router
