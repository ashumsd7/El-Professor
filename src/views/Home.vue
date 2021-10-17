<template>
  <div class="home">
    <!-- <celebration-wall></celebration-wall> -->

    <home-glance></home-glance>
    <marquee class="text-danger fw-bolder d-none d-lg-block fs-2 ">🙏चरावां गांव की ओर से आप सभी को नवरात्री  की ढेरों   शुभकामनाएं  
🙏</marquee>
   

    <important-links id="notify"></important-links>
    <about-glance></about-glance>
    <counter></counter>

    <cricket-cup></cricket-cup>


    <authority-glance></authority-glance>

    <div class="shop-footer fixed-bottom d-lg-none d-block">
      <div class="container-fluid position-relative">
        <div class="all-contacts">
          <div class="col-lg-2 col-4 new-footer">
            <div class="row">
              <a href="https://www.facebook.com/meracharawanfb"
                ><img
                  width="25"
                  height="25"
                  src="../assets/facebook.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>

            <div class="row mt-3">
              <a href="mailto:meracharawan@gmail.com"
                ><img
                  width="25"
                  height="25"
                  src="../assets/gmail.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>

            <div class="row mt-3">
              <a href="https://twitter.com/meracharawan"
                ><img
                  width="25"
                  height="25"
                  src="../assets/twitter.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>

            <!-- <div class="row mt-3">
              <a href="https://instagram.com/meracharawan"
                ><img
                  width="25"
                  height="25"
                  src="../assets/instagram.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div> -->

            <div class="row mt-3">
              <a href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
                ><img
                  width="25"
                  height="25"
                  src="../assets/whatsapp.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-4 footer-btns mt-2">
            <p class="btn-text">
              <router-link class="text-decoration-none text-white" to="/find">
                <img src="../assets/shopf.png" class="me-2" alt="" srcset="" />

                दुकानें
              </router-link>
            </p>
          </div>
          <div class="col-4 mt-2 footer-btns">
            <p class="btn-text">
              <img src="../assets/galleryf.png" alt="" srcset="" class="me-2" />
              <router-link
                class="text-decoration-none mt-3 text-white"
                to="/gallery"
              >
                गैलरी</router-link
              >
            </p>
          </div>

          <div class="col-4 mt-2 footer-btns">
            <p class="btn-text">
              <img src="../assets/blink.gif" alt="" width="30" height="30" srcset="" class="me-2" />
              <a
                class="text-decoration-none text-white"
                href="#notify"
                >चरावां 
              </a>
            </p>
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
import StaticLinks from "../components/HomeViews/StaticLinks.vue";
import ImportantLinks from "../components/HomeViews/ImportantLinks.vue";
// import CelebrationWall from "../components/HomeViews/CelebrationWall.vue";


import Counter from "../components/HomeViews/Counter.vue";
import  ChitChat from "../components/reusable/ChitChat.vue";
export default {
  name: "Home",
  components: {
    ChitChat,
    // CelebrationWall,
    
    HomeGlance,
    
    // QuickLinks,
    CricketCup,
    AboutGlance,
    AuthorityGlance,
    ImportantLinks,
    Counter,
  },

  data() {
    return {
      showData: [],
      hideAllcontact: true,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", function () {
      // alert(window.scrollY)
      if (window.scrollY > 300) {
        this.hideAllcontact = false;
      }
    });
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
.shop-footer {
  height: 50px;
  background: linear-gradient(360deg, #316add, #316add);
  width: 100%;
  /* border: 1px dashed black;
  border-top:  1px solid rgb(255, 255, 255); */
}
.footer-btns {
  font-weight: bolder;
  /* color: rgb(3, 1, 5); */
}
.all-contacts {
  position: absolute;
  top: -250px;
  right: 8px;
  /* background: seagreen; */
}
.row a img {
  /* box-shadow: 2px 4px 6px gray; */
  /* border-radius: 0%; */
}



</style>
