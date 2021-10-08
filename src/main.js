import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import TopBanner from './components/reusable/TopBanner'
import ImageSlider from './components/reusable/ImageSlider'
import MainHeading from './components/reusable/slots/MainHeading.vue'
import SubHeading from './components/reusable/slots/SubHeading.vue'
import MainContent from './components/reusable/slots/MainContent.vue'
import SuccessDialog from './components/reusable/slots/SuccessDialog.vue'
import VueSocialSharing from 'vue-social-sharing'





// Vue.use(VueMeta)



const vm= createApp(App).use(store).use(router).use(VueSocialSharing)
vm.component('top-banner', TopBanner)
vm.component('main-heading', MainHeading)
vm.component('sub-heading', SubHeading)
vm.component('main-content', MainContent)
vm.component('success-dialog', SuccessDialog)
vm.component('image-slider', ImageSlider)
vm.mount('#app')





