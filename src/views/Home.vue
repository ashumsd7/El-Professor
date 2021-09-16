<template>
  <div class="home">
   <home-glance></home-glance>
  
  



  
   <counter></counter>
   <quick-links></quick-links>
   <about-glance></about-glance>
    <explain-banner :key="i" v-for="i in 2"></explain-banner>
   <!-- <authority-glance></authority-glance> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from '../components/HomeViews/HomeGlance'
import QuickLinks from '../components/HomeViews/QuickLinks'
import AboutGlance from '../components/HomeViews/AboutGlance'
import AuthorityGlance from '../components/HomeViews/AuthorityGlance.vue'
import Counter from '../components/HomeViews/Counter.vue'


import ExplainBanner from '../components/reusable/ExplainBanner.vue'





export default {
  name: 'Home',
  components: {
    HomeGlance,
    QuickLinks,
    AboutGlance,
    AuthorityGlance,
    ExplainBanner,
    Counter
  }
}
</script>
<style  scoped>


  
</style>
