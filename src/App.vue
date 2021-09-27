<template>
<div class="my-app">
  <div class="nav-bar">

  <the-navbar></the-navbar>
  </div>
  <div class="routers">
    <router-view/>
  </div>
  <div class="footer">

  <the-footer></the-footer>
  </div>
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
  /* position: relative */
}
.routers{
 /* position: absolute;
 top: 5rem; */
 /* left: 0;
 width: 100%; */
 /* margin-top: 100px; */
}
a{
  text-decoration: none;
}
.footer{
  /* position: absolute; */
}
.nav-bar{
  /* margin-top: -50px; */
}
</style>
