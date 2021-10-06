<template>
<div class="my-app">
  <div class="nav-bar">

  <the-navbar></the-navbar>
  <div class="fill-gap"></div>
  </div>
  <div class="routers mt-5">
    <router-view/>
  </div>
  <div class="footer">

  <the-footer></the-footer>
  </div>

</div>
</template>
<script>
import TheNavbar from './components/boss/TheNavbar.vue'
// import TheFooter from './components/boss/TheFooter.vue'
import TheFooter from './components/boss/NewFooter.vue'
export default {
  components:{
    TheNavbar,TheFooter
  },
   metaInfo: {
    title: 'HOME',
    titleTemplate: '%s |चरावा'
  },
  
 
}
</script>
<style>
/* @import '~bootstrap-icons/font/bootstrap-icons'; */
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');



.fill-gap{
  margin-top: 90px;
}
</style>
