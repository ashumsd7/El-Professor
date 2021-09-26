<template>
<div class="my-app">
  <the-navbar></the-navbar>
  <div class="routers">
    <router-view/>
  </div>
  <the-footer></the-footer>
  <!-- <audio controls autoplay>
  <source src="./assets/audio/nature.mp3" type="audio/mp3"> -->
<!-- Your browser does not support the audio element. -->
<!-- </audio> -->
</div>
</template>
<script>
import TheNavbar from './components/boss/TheNavbar.vue'
import TheFooter from './components/boss/TheFooter.vue'
export default {
  components:{
    TheNavbar,TheFooter
  },
  created() {
    
  },
}
</script>
<style>
/* @import '~bootstrap-icons/font/bootstrap-icons'; */
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.my-app{
  position: relative
}
.routers{
 position: absolute;
 top: 5rem;
 left: 0;
 width: 100%;
}
a{
  text-decoration: none;
}
</style>
