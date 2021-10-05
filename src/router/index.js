import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/pages/History.vue'
import Gallery from '../views/pages/Gallery.vue'
import Elections from '../views/pages/Elections.vue'
import Cricket from '../views/pages/Cricket.vue'
import Donate from '../views/pages/SimpleDonate.vue'
import ShopsData from '../views/pages/ShopsData.vue'
import AddShop from '../views/pages/AddShop.vue'
import TermsConditions from '../views/pages/TermsConditions.vue'
import Notification from '../views/pages/Notification.vue'
import Test from '../views/pages/test.vue'


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
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
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
  {
    path: '/termsAndConditions',
    name: 'TermsConditions',
    component: TermsConditions
  },
  {
    path: '/addshop',
    name: 'AddShop',
    component: AddShop
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
