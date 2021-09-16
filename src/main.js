import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import TopBanner from './components/reusable/TopBanner'
import MainHeading from './components/reusable/slots/MainHeading.vue'
import MainContent from './components/reusable/slots/MainContent.vue'



const vm= createApp(App).use(store).use(router)
vm.component('top-banner', TopBanner)
vm.component('main-heading', MainHeading)
vm.component('main-content', MainContent)
vm.mount('#app')




