<template>
  <div class="home">
   <home-glance></home-glance>
   <counter></counter>
   <quick-links></quick-links>
   <about-glance></about-glance>
   <authority-glance></authority-glance>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from '../components/HomeViews/HomeGlance'
import QuickLinks from '../components/HomeViews/QuickLinks'
import AboutGlance from '../components/HomeViews/AboutGlance'
import AuthorityGlance from '../components/HomeViews/AuthorityGlance.vue'
import Counter from '../components/HomeViews/Counter.vue'





export default {
  name: 'Home',
  components: {
    HomeGlance,
    QuickLinks,
    AboutGlance,
    AuthorityGlance,
   
   
    
    Counter
  }
}
</script>
<style  scoped>


  
</style>
