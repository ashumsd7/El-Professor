l<template>
  <section id="history">
    <top-banner :img="bannerData.img" :title="bannerData.title"></top-banner>
    <main-heading>Elections in Charawan</main-heading>
    <div class="container">
      <div class="row mt-lg-3 mt-2 ">
        <div class="col-lg-4 col-6">
            <h4>        Select Year</h4>
        </div>
        <div class="col-lg-4 col-6">
                
          <select
            class="form-select"
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
    </div>


<div v-for="item in showData[0].data" :key="item.type" class="row">
    <div class="col-lg-12">
        <sub-heading>{{selectedYear}} | {{item.type}}</sub-heading>

            <main-content> {{item.about}} </main-content>

            <img  :src="item.img" alt="" class="img-fluid" srcset="">
    </div>
</div>
    
   
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bannerData: {
        img: "https://images.livemint.com/img/2021/04/04/600x338/764754817dad452eadd18e908443f3ac-764754817dad452eadd18e908443f3ac-1_1617281784094_1617553913337.jpg",
        title: "History",
      },

     selectedYear:2021,
     showData:[]
    };
  },
  methods: {
      changeData(year){
      let filteredData=    this.getElectionData.filter((val,idx)=>{
              return year== val.year
          })
          this.showData= filteredData
          console.log(this.showData);
      }
  },
  computed: {
    getElectionData() {
      return this.$store.getters.getElectionData;
    },
  },
  created() {
      this.changeData(2021)
  },
};
</script>

TopBanner
<style scoped>
img{width: 100%;}
</style>