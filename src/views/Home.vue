<template>
  <div class="home">
    <home-glance></home-glance>

    <counter></counter>
   
    <about-glance></about-glance>
    <authority-glance></authority-glance>
  <cricket-cup></cricket-cup>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from "../components/HomeViews/HomeGlance";
import CricketCup from "../components/HomeViews/CricketCup";

import AboutGlance from "../components/HomeViews/AboutGlance";
import AuthorityGlance from "../components/HomeViews/AuthorityGlance.vue";


import Counter from "../components/HomeViews/Counter.vue";



export default {
  name: "Home",
  components: {
    HomeGlance,
    // QuickLinks,
    CricketCup,
    AboutGlance,
    AuthorityGlance,
 
    

    Counter,
  },
  data() {
    return {
      showData: [],
    };
  },
  methods: {
    changeData(year) {
      let filteredData = this.getElectionData.filter((val, idx) => {
        return year == val.year;
      });
      this.showData = filteredData;
      console.log(this.showData);
    },
  },
  computed: {
    getElectionData() {
      return this.$store.getters.getElectionData;
    },
  },
  created() {
    this.changeData(2021);
  },
};
</script>
<style  scoped>
</style>
