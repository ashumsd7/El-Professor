l<template>
  <section id="history">
    <top-banner :img="bannerData.img" :title="bannerData.title"></top-banner>
    <main-heading>Elections in Charawan</main-heading>
    <hr>
    <div class="container">
      <div class="row mt-lg-3 mt-2 ">
        <div class="col-lg-4 col-6">
            <h4 class="text-danger">        Select Year 👉</h4>
        </div>
        <div class="col-lg-4 col-6  ">
                
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
  
<hr>

<div v-for="item in showData[0].data"  :key="item.type" class="row">
    <div class="col-lg-12">
        <sub-heading>{{selectedYear}} | {{item.type}}</sub-heading>
             <div class="row mt-4">
            <div class="col-lg-4 col-12 mt-lg-2 img-conatiner text-center">
                 <img width="400" height="400" class="img-fluid" :src="item.winnerImg">
               <h4 class="name mt-2">{{item.winner}}</h4>
                 <p class="position ">{{item.type}}</p>
                 <p class="timings text-muted"> {{item.opponent}}</p>
               <p class="timings text-muted"> {{selectedYear}}</p>
            </div>
            <div class="col-lg-7 col-12 about">
               
                 <main-content> {{item.about}} </main-content>

            </div>
        </div>
          
          
            <div class="text-center">
               <a class="btn btn-primary mb-2" :disabled="!item.downloadLink" :href="item.doanloadLink">{{item.doanloadLink ? 'Download Data' : 'Image Data Not Found'}}</a>
            </div>
            <img  :src="item.img" alt="" class="img-fluid" srcset="">
    </div>
    <hr>
    <hr>
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
.img-conatiner img{

border-radius: 60% 40% 65% 35% / 53% 55% 45% 47% ;
}

.name{
color: rgb(255, 63, 15);
font-weight: bold;
margin-top: -10px;
font-family: 'Bitter', serif;
}
.position{
    color: cornflowerblue;
    font-weight: bold;
    font-family: 'Bitter', serif;
    

}
.timings{
    color: rgb(32, 32, 32);
    font-weight: bold;
    margin-top: -15px;
}
select{
    margin-left: -40px;
    
}

@media (max-width:800px){
    .img-conatiner img{
    width: 300px;
    height: 300px;
}
}
</style>