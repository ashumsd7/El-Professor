<template>
  <div class="home">
   <home-glance></home-glance>
   <quick-links></quick-links>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from '../components/HomeViews/HomeGlance'
import QuickLinks from '../components/HomeViews/QuickLinks'




export default {
  name: 'Home',
  components: {
    HomeGlance,
    QuickLinks
   
    
  }
}
</script>
<style  scoped>


  
</style>
