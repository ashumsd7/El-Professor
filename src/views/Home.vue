<template>
  <div class="home">
    <home-glance></home-glance>

    <counter></counter>
   
    <about-glance></about-glance>
    <authority-glance></authority-glance>
    <important-links></important-links>
  <cricket-cup></cricket-cup>

    <div class="shop-footer fixed-bottom d-lg-none d-block">
<div class="container-fluid">
<div class="row justify-content-center ">
  <div class="col-4 footer-btns mt-2 "
          >
   <p class="btn-text">  
      <router-link class="text-decoration-none text-white" to="/find">
      
     <img src="../assets/shopf.png"  class="me-2" alt="" srcset="" />
      
        दुकानें 
</router-link
          >
     
      </p>
  </div>
  <div class="col-4 mt-2 footer-btns ">
      <p class="btn-text">   
        <img src="../assets/galleryf.png" alt="" srcset="" class="me-2" />
        <router-link class="text-decoration-none mt-3 text-white " to="/gallery"
            > गैलरी</router-link
          ></p>
  </div>

  <div class="col-4 mt-2 footer-btns ">
      <p class="btn-text">   
        <img src="../assets/phonef.png" alt="" srcset="" class="me-2" />
        <a class="text-decoration-none text-white" href='https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt'
            >सम्पर्क करें </a
          ></p>
  </div>
</div>
</div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from "../components/HomeViews/HomeGlance";
import CricketCup from "../components/HomeViews/CricketCup";

import AboutGlance from "../components/HomeViews/AboutGlance";
import AuthorityGlance from "../components/HomeViews/AuthorityGlance.vue";
import ImportantLinks from "../components/HomeViews/ImportantLinks.vue";


import Counter from "../components/HomeViews/Counter.vue";



export default {
  name: "Home",
  components: {
    HomeGlance,
    // QuickLinks,
    CricketCup,
    AboutGlance,
    AuthorityGlance,
    ImportantLinks
 ,
    

    Counter,
  },
  data() {
    return {
      showData: [],
    };
  },
   mounted() {
    window.scrollTo(0, 0);
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
.shop-footer{
  height: 50px;
  background: linear-gradient(360deg,#316add,#316add);
  width: 100%;
  /* border: 1px dashed black;
  border-top:  1px solid rgb(255, 255, 255); */
}
.footer-btns{
  font-weight: bolder;
  /* color: rgb(3, 1, 5); */
}
</style>
