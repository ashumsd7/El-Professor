<template>
<div class="my-app">
  <the-navbar></the-navbar>
  <div class="routers">
    <router-view/>
  </div>
</div>
</template>
<script>
import TheNavbar from './components/boss/TheNavbar.vue'
export default {
  components:{
    TheNavbar
  }
}
</script>
<style>
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
</style>
