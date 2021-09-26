<template>
  <section id="shops-data">
    <top-banner
      img="https://i.ibb.co/n1QPfzm/shop-banner.jpg"
      title="Shops List"
    ></top-banner>
    <main-heading>चरावां और आस पास की सभी दुकानें</main-heading>
    <hr />

    <div class="container">
      <label for="exampleFormControlInput1" class="form-label mt-2 fw-bold">
        आप किस तरह की दुकान या सर्विस के बारे में जानना चाहते हैं ?
        <small class="fw-200 d-block">
          <!-- (आप एक से ज्यादा तरह की सर्विस पे क्लिक कर सकते हैं) -->
        </small>
      </label>

      <button class="btn btn-secondary d-block mb-2">
        <img src="../../assets/plus.png" alt="" srcset="" class="me-1" /> <router-link class="text-decoration-none text-white"  to="/add-shop">दुकान
        /सर्विस जोड़ें</router-link>
      </button>
      <button
        @click="showCategory = !showCategory"
        v-if="!showCategory"
        class="btn btn-primary"
      >
        <img src="../../assets/eyes.png" class="me-1" alt="" srcset="" />कोई और
        दुकान देखें
      </button>
      <div v-else class="row checkboxes">
        <br />
        <br />

        <div class="col-4" v-for="check in getFilters" :key="check.value">
          <input
            type="radio"
            :id="check.value"
            :value="check.value"
            @change="filterResult"
            v-model="selectedFilter"
          />
          <small for="jack" class="ms-1">{{ check.title }}</small>
        </div>
      </div>

      <div class="shop-table">
        <hr />
        <!-- <div class="col-lg-12">
          <h4 v-if="selectedFilter.length">आपने सर्च किया है</h4>

          <span
            v-for="item in selectedFilter"
            :key="item"
            class="badge rounded-pill bg-dark ms-1"
            >{{ item }}</span
          >
        </div> -->

        <div class="row text-center m-auto mt-2 justify-content-center">
          
          <img v-if="isLoading" src="../../assets/loading.gif" class="me-1" alt="" srcset="" />
          <div
            class="col-lg-4 col-md-6 col-12 shop-card p-2 ms-2 mt-2 mt-lg-4"
            v-for="data in allShopData"
            :key="data.shopName"
          >
            <h4 class="fw-bold">{{ data.shopName }}</h4>
            <small class="d-block">मालिक :{{ data.owenerName }}</small>
            <span class="d-block mb-2 fw-bold text-primary">
              {{ data.villageName }} ,{{ data.shopAddress }}</span
            >
               <span class="badge rounded-pill bg-white d-block"><span class="text-danger" v-for="day in data.closedOn" :key="day"> <small>{{day}}को बंद रहती है </small></span></span>

            <span class="badge rounded-pill bg-light text-dark d-block">
              {{ data.openTime }}
              <small class="text-muted">बजे खुलती है </small> | 
              {{ data.closeTime
              }}<small class="text-muted"> बजे बंद होती है </small></span
            >
         
            <span class="badge rounded-pill bg-danger call-btn me-3 mt-2"
              ><a
                class="text-decoration-none text-white"
                :href="data.mobileNumber"
              >
                <img src="../../assets/telephone.png" alt="" srcset="" />Call
                Now</a
              ></span
            >

            <span
              v-if="data.mobileNumber2 != 'tel:+91'"
              class="badge rounded-pill bg-success call-btn"
              ><a
                class="text-decoration-none text-white"
                :href="data.mobileNumber2"
              >
                <img src="../../assets/telephone.png" alt="" srcset="" />Call
                Now</a
              ></span
            >
          </div>
        </div>

        <!-- <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col"><small class="">दुकान का नाम</small></th>
              <th scope="col"><small>मोबाइल नंबर</small></th>
              <th scope="col"><small>समय</small></th>
              <th scope="col"><small>जगह</small></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, idx) in allShopData" :key="data.shopName">
              <th scope="row">{{ ++idx }}</th>
              <td>
                <small>{{ data.shopName }}</small>
              </td>
              <td>
                <small class="me-2"
                  ><a :href="data.mobileNumber"
                    ><img
                      src="../../assets/telephone.png"
                      alt=""
                      srcset="" /></a
                ></small>
                <small v-if="data.mobileNumber2"
                  ><a :href="data.mobileNumber2"
                    ><img
                      src="../../assets/telephone.png"
                      alt=""
                      srcset="" /></a
                ></small>
              </td>
              <td>
                <small>{{ data.openTime }} - {{ data.closeTime }}</small>
              </td>
              <td>
                <small
                  >{{ data.inCharwan }}, {{ data.villageName }} ,{{
                    data.shopAddress
                  }}</small
                >
              </td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
  </section>
</template>

<script>
// import ShopFilter from "../../components/filter/ShopFilter.vue";
import axios from "axios";
export default {
  // components: { ShopFilter },
  created() {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/1h8kWqfMzlc-thnPUHb0K2OxPc2Xb07nZ4JkXPoRngBU/gviz/tq?tqx=out:json"
      )
      .then((res) => {
        let shopData = res;
        console.log(shopData);
        // for(let item in shopData ){
        //   console.log(item);
        // }
      });
  },
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
      isLoading:false
    };
  },
  methods: {
    filterResult() {
      this.isLoading=true
      this.showCategory = false;
      if (this.selectedFilter == "all") {
        this.allShopData = [];
        this.callAPI();
        return;
      }
      let filteredData = this.preservedData.filter((val, idx) => {
        if (val.shopType.includes(this.selectedFilter)) {
          return val;
        }
      });
      if (!filteredData.length) {
        alert("कोई सर्विस या दुकान नहीं मिली ");
        this.callAPI();
      }

      this.allShopData = filteredData;
      this.isLoading=false;
    },
    callAPI() {
      this.isLoading=true
      axios
        .get(
          "https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops.json"
        )
        .then((res) => {
          //  this.allShopData= res.data;
          for (let i in res.data) {
            this.allShopData.push(res.data[i]);
          }
          // console.log(this.allShopData);
          this.preservedData = this.allShopData;
          this.isLoading=false
        });
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
table {
  /* width:auto; */
}
.call-btn {
  border-radius: 0px;
  background: #ff0c0c;
  box-shadow: inset 7px 7px 14px #5a5a5a, inset -7px -7px 14px #ffffff;
}
.shop-card {
  border-radius: 10px;
  background: #ebe2e2;
  /* min-width: 300px; */

  box-shadow: 7px 7px 14px #bebebe, -7px -7px 14px #ffffff;
}
@media (max-width:700px){
  .shop-card {
    width: 100vw;
  }
}
</style>