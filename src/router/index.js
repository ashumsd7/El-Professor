import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/pages/History.vue'
import Gallery from '../views/pages/Gallery.vue'
import Elections from '../views/pages/Elections.vue'
import Cricket from '../views/pages/Cricket.vue'
import Donate from '../views/pages/Donate.vue'
import ShopsData from '../views/pages/ShopsData.vue'
import AddShop from '../views/pages/AddShop.vue'
import News from '../views/pages/News.vue'
import ReadNews from '../views/pages/ReadNews.vue'

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
  // {
  //   path: '/donate',
  //   name: 'Donate',
  //   component: Donate
  // },
  {
    path: '/find',
    name: 'Shops',
    component: ShopsData
  },
  {
    path: '/addshop',
    name: 'AddShop',
    component: AddShop
  },
  // {
  //   path: '/news',
  //   name: 'News',
  //   component: News
  // },
  // {
  //   path: '/readnews',
  //   name: 'ReadNews',
  //   component: ReadNews
  // },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
