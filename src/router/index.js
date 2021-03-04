import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routerHistory = createMemoryHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

export default router
