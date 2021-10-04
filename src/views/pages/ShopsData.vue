<template>
  <section id="shops-data">
    <top-banner
      img="https://i.ibb.co/ZSZ8WgG/IMG-20211001-012136.jpg"
      mobileImg='https://i.ibb.co/vLqp8tN/IMG-20211002-000232.jpg'
      
      title="Shops List"
    ></top-banner>
    <main-heading>चरावां और आस पास की सभी दुकानें</main-heading>



    <div class="container text-center position-relative">
     

      <div class="info-container bg-white  text-center">
        <div class="row counter bg-lg-info bg-dark text-white">
          <div class="col-12 w-100 mt-1 fw-bold">

        कुल  {{ preservedData.length }}     में से {{ allShopData.length }} दुकाने/सेवाएं दिख रही हैं
          </div>
        </div>
        <div class="row">

        </div>
      </div>
      

      <div class="">
      

       
      </div>
      <div v-if="showCategory" class="row checkboxes">
        <br />
        <br />
        <label for="exampleFormControlInput1" class="form-label mt-2 fw-bold">
          किस तरह की दुकान/सर्विस के बारे में जानना चाहते हैं ?
        </label>
        <!-- आप किस तरह की दुकान या सर्विस के बारे में जानना चाहते हैं ? -->
        <div class="row">
          <div
            class="col-4 radio-btns"
            v-for="check in getFilters"
            :key="check.value"
          >
            <input
              type="radio"
              :id="check.value"
              :value="check.value"
              @change="filterResult"
              v-model="selectedFilter"
              class="radio-input"
            />
            <small for="jack" class="ms-2 input-title">{{ check.title }}</small>
            <!-- <button class=" input-title">{{ check.title }}</button> -->
          </div>
        </div>
      </div>

      <div class="shop-table">
      

        <div class=''>
            
            <input
              type="radio"
              class="me-1"
              value="no"
              v-model="showOnlyCharawan"
              checked
              id=""
              @change="filterOnlyCharawan"
              
            />

            <label for="exampleFormControlInput1" class="form-label mt-2  fw-bold text-primary">
             <small>सभी दुकानें /सर्विस </small>
            </label>


             <input
              type="radio"
              class=" ms-3"
              value="yes"
              v-model="showOnlyCharawan"
              id=""
              @change="filterOnlyCharawan"
           
            />

            <label for="exampleFormControlInput1" class="form-label mt-2 ms-1 fw-bold text-primary">
              <small>केवल चरावां की 
</small>
            </label>
          </div>

        <div class="row text-center m-auto mt-2 justify-content-center mt-3">
          <img
            v-if="isLoading"
            src="../../assets/loading.gif"
            class="me-1"
            alt=""
            width="200"
            srcset=""
          />
          <div
            class="col-lg-4 col-md-6 col-12 shop-card p-2 ms-2 mt-2 mt-lg-4"
            v-for="data in allShopData"
            :key="data.shopName"
          >
            <h3 class="fw-bolder">{{ data.shopName }}</h3>
            <small v-if="data.owenerName" class="d-block"
              ><span class="text-muted">मालिक:</span>
              {{ data.owenerName }}</small
            >
            <span class="d-block fw-bold text-primary">
              {{ data.villageName }} {{ data.shopAddress }}</span
            >
            <span class="badge rounded-pill bg-white d-block"
              ><span
                class="text-danger"
                v-for="day in data.closedOn"
                :key="day"
              >
                <small>{{ day }} को बंद रहती है </small></span
              ></span
            >

            <span
              v-if="data.openTime"
              class="badge rounded-pill bg-light text-dark d-block"
            >
              {{ data.openTime }}
              <small class="text-muted">बजे से </small> | {{ data.closeTime
              }}<small class="text-muted"> बजे तक </small></span
            >

            <p class="text-muted">
              <small>{{ data.shopInfo }}</small>
            </p>

            <span class="badge rounded-pill bg-dark call-btn me-3 mt-2"
              ><a
                class="text-decoration-none text-white"
                :href="data.mobileNumber"
              >
                <img src="../../assets/telephone.png" alt="" srcset="" />
                फ़ोन करें
              </a></span
            >

            <span
              v-if="data.mobileNumber2 != 'tel:+91'"
              class="badge rounded-pill bg-dark call-btn"
              ><a
                class="text-decoration-none text-white"
                :href="data.mobileNumber2"
              >
                <img src="../../assets/telephone.png" alt="" srcset="" />

                फ़ोन करें
              </a></span
            >
          </div>
        </div>
      </div>
    </div>


<div class="shop-footer fixed-bottom  d-block">
<div class="container-fluid">
<div class="row justify-content-around ">
  <div class="col-6 footer-btns mt-2 "  @click="searchClicked()"
          v-if="!showCategory">
   <p class="btn-text">  
     <img src="../../assets/searching.png"  class="me-1" alt="" srcset="" />
     दुकान खोजें</p>
  </div>
  <div class="col-6 mt-2 footer-btns ">
      <p class="btn-text">   <img src="../../assets/plus.png" alt="" srcset="" class="me-2" /><router-link class="text-decoration-none text-white" to="/addshop"
            >दुकान /सर्विस जोड़ें</router-link
          ></p>
  </div>
</div>
</div>
</div>
  </section>
</template>

<script>
// import ShopFilter from "../../components/filter/ShopFilter.vue";
import axios from "axios";

export default {

  computed: {
    getFilters() {
      return this.$store.getters.getFilters;
    },
  },
  data() {
    return {
      selectedFilter: "",
      allShopData: [],
      preservedData: [],
      showCategory: false,
      isLoading: false,
      showOnlyCharawan:'',
      //using for in charwan filter
      updated:true,
      preservedCurrentData:[]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {

    filterOnlyCharawan(){
        // console.log(this.allShopData.length);
        if(this.updated){
          this.preservedCurrentData=this.allShopData;
          this.updated=!this.updated
          
        }
       if(this.showOnlyCharawan=='yes'){
          let filteredCharawanData = this.preservedCurrentData.filter((val, idx) => {
        if (val.inCharawan=='charawan') {
          return val;
        }
        
      });
      this.allShopData =filteredCharawanData;
      
       }

       if(this.showOnlyCharawan=='no'){      
        this.allShopData =this.preservedCurrentData;
       }


      

    },

    filterResult() {
      this.updated=true;
      this.isLoading = true;
      this.showCategory = false;
      if (this.selectedFilter == "all") {
        this.allShopData = [];
        this.allShopData = this.preservedData;
        // this.callAPI();
        this.isLoading = false;
        return;
      }
      let filteredData = this.preservedData.filter((val, idx) => {
        if (val.shopType.includes(this.selectedFilter)) {
          return val;
        }
      });
      if (!filteredData.length) {
        alert("कोई सर्विस या दुकान नहीं मिली ");
        //  this.allShopData= this.preservedData;
        this.isLoading = true;
        this.callAPI();
      }

      this.allShopData = filteredData;
      this.isLoading = false;
    },
    callAPI() {
      this.isLoading = true;
      axios
        .get(
          "https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops.json"
        )
        .then((res) => {
          //  this.allShopData= res.data;
          for (let i in res.data) {
            this.allShopData.push(res.data[i]);
          }

          for (let i in this.allShopData) {

            // if(this.allShopData[i].openTime>12){
            //   this.allShopData[i].openTime-=12
            // }

            // if(this.allShopData[i].closeTime>12){
            //   this.allShopData[i].closeTime-=12
            // }


            // let currentStamp = new Date().getTime() - this.allNews[i].timeStamp;
            // let difference = this.calculateTimeago(Date.now() - currentStamp);
            // this.allNews[i].timeStamp = difference;
          }
          // console.log(this.allShopData);
          this.preservedData = this.allShopData.reverse();
          this.isLoading = false;
          
        });
    },
    searchClicked() {
      this.showCategory = !this.showCategory;
      window.scrollTo(100, 120);
    },
  },
  created() {
    this.callAPI();
  },
};
</script>

<style scoped>
.row > * {
  width: auto;
}
.form-check-label {
  font-size: 0.9rem;
}
.radio-input {
  font-size: 20px;
  /* position: relative;
  z-index: 100000;
  opacity: 0; */
}
small {
  font-weight: bold;
}



.call-btn {
  border-radius: 0px;
  background: #000000;
  box-shadow: inset 7px 7px 14px #000000, inset -7px -7px 14px #000000;
}
.shop-card {
  border-radius: 10px;
  background: #fcfbfb;
  border: 0.5px dotted rgb(88, 88, 88);

  box-shadow: 7px 7px 14px #bebebe, -7px -7px 14px #ffffff;
}
.shop-card h3 {
  text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
}
@media (max-width: 700px) {
  .shop-card {
    width: 100vw;
  }
}
@media (min-width: 700px) {
  .shop-card {
    max-width: 350px;
  }
}
.shop-footer{
  height: 50px;
  background: linear-gradient(360deg,rgb(103, 93, 252),rgb(39, 77, 248));
  width: 100%;
  /* border: 2px dashed black; */
  border-top: none;
}
.footer-btns{
  font-weight: 600;
  color: white;
}
.counter{
  /* background: black; */
  height: 30px;
}

</style>