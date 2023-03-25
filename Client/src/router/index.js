import { createRouter, createWebHistory } from 'vue-router'
import TimbderVue from '../views/TimbderVue.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/timbder',
      name: 'timbder',
      component: () => import('../views/TimbderVue.vue')
    },
    {
      path: '/LoupePlante',
      name: 'LoupePlante',
      component: () => import('../views/LoupePlanteView.vue')

    },
    {
      path: '/Inventory',
      name: 'Inventory',
      component: () => import('../views/InventaireView.vue')
    },
    {
      path: '/journal',
      name: 'Journal',
      component: () => import('../views/JournalView.vue')
    }
  ]
})

export default router
