import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/pages/History.vue'
import Elections from '../views/pages/Elections.vue'
import Cricket from '../views/pages/Cricket.vue'
import Donate from '../views/pages/Donate.vue'
import ShopsData from '../views/pages/ShopsData.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/itihas',
    name: 'History',
    component: History
  },
  {
    path: '/election',
    name: 'Elections',
    component: Elections
  },
  {
    path: '/cricket',
    name: 'Cricket',
    component: Cricket
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/find',
    name: 'Shops',
    component: ShopsData
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
