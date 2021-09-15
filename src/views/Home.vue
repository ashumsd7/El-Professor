<template>
  <div class="home">
   <home-glance></home-glance>
   <quick-links></quick-links>
   <about-glance></about-glance>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from '../components/HomeViews/HomeGlance'
import QuickLinks from '../components/HomeViews/QuickLinks'
import AboutGlance from '../components/HomeViews/AboutGlance'





export default {
  name: 'Home',
  components: {
    HomeGlance,
    QuickLinks,
    AboutGlance
   
   
    
  }
}
</script>
<style  scoped>


  
</style>
