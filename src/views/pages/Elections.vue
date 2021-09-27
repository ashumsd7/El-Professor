l<template>
  <section id="history">
    <top-banner :img="bannerData.img" :title="bannerData.title"></top-banner>
    <main-heading>चुनाव चरावां में </main-heading>
    <main-content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique ut ducimus placeat ipsa corrupti molestiae perferendis delectus laudantium officia sint, fuga beatae architecto rem incidunt? Sit consequatur, reprehenderit repellendus rerum vero ab iusto pariatur quae excepturi, porro obcaecati voluptates?</main-content>
    <hr />
    <div class="container">
      <div class="row mt-lg-3 mt-2">
        <div class="col-lg-4 col-6">
          <h4 class="text-danger">साल चुनें  👉</h4>
        </div>
        <div class="col-lg-4 col-6">
          <select
            class="form-select border-2 outline-none"
            bg-dark
            v-model="selectedYear"
            @change="changeData(selectedYear)"
            aria-label="Default select example"
          >
            <option selected value="2021">2021</option>
            <option value="2015">2015</option>
            <option value="2010">2010</option>
          </select>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-6 text-center align-items-center justify-content-center m-auto" v-for="item in showData[0].data" :key="item.type">
         <img
                width="200"
                height="200"
                class="img-fluid img-conatiner "
                :src="item.winnerImg"
              />
              <h4 class="name mt-2">{{ item.winner }}</h4>
              <p class="position">{{ item.type }}</p>
              <p class="timings text-muted">{{ item.opponent }}</p>
              <p class="timings text-muted">{{ selectedYear }}</p>


 <a
                  class="mb-2"
                  :disabled="!item.downloadLink"
                  :href="item.doanloadLink"
                  :class="{danger:!item.doanloadLink}"
                  >{{
                    item.doanloadLink ? "सरकारी डेटा डाउनलोड करें " : "डेटा उपलब्ध नहीं "
                  }} <i class="bi ms-1 bi-download"></i></a
                >
              <hr>
               <img :src="item.img" alt="" class="img-fluid" srcset="" />
        </div>
       
      </div>

      <!-- <hr /> -->


      <!-- <div v-for="item in showData[0].data" :key="item.type" class="row">
    
          <sub-heading>{{ selectedYear }} | {{ item.type }}</sub-heading> -->



          <!-- <div class="row">
            
          </div>
          <div class="row mt-4"> -->
            <!-- <div class="col-lg-4 col-6 mt-lg-2 img-conatiner text-center">
              <img
                width="400"
                height="400"
                class="img-fluid"
                :src="item.winnerImg"
              />
              <h4 class="name mt-2">{{ item.winner }}</h4>
              <p class="position">{{ item.type }}</p>
              <p class="timings text-muted">{{ item.opponent }}</p>
              <p class="timings text-muted">{{ selectedYear }}</p>
            </div> -->
            <!-- <div class="col-lg-7 col-12 about">
              <main-content>
                {{ item.about }}
                <a
                  class="mb-2"
                  :disabled="!item.downloadLink"
                  :href="item.doanloadLink"
                  :class="{danger:!item.doanloadLink}"
                  >{{
                    item.doanloadLink ? "Download Data" : "Image Data Not Found"
                  }} <i class="bi ms-1 bi-download"></i></a
                >
              </main-content>
            </div> -->
          </div>

          <!-- <img :src="item.img" alt="" class="img-fluid" srcset="" /> -->
       
        <!-- <hr />
        <hr />
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bannerData: {
        img: "https://i.ibb.co/gvB5tcX/IMG-20210415-142008.jpg",
        title: "Election",
      },

      selectedYear: 2021,
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

TopBanner
<style scoped>
img {
  /* width: 100%; */
}
.img-conatiner {
  border-radius: 60% 40% 65% 35% / 53% 55% 45% 47%;
}
.danger{
    color:gray;
    opacity: 0;
}
.name {
  color: rgb(255, 63, 15);
  font-weight: bold;
  margin-top: -10px;
  font-family: "Bitter", serif;
}
.position {
  color: cornflowerblue;
  font-weight: bold;
  font-family: "Bitter", serif;
}
.timings {
  color: rgb(32, 32, 32);
  font-weight: bold;
  margin-top: -15px;
}
select {
  margin-left: -40px;
}

@media (max-width: 800px) {
  .img-conatiner img {
    width: 300px;
    height: 300px;
  }
}
</style>