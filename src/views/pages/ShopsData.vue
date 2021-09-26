<template>
  <section id="shops-data">
    <top-banner
      img="https://i.ibb.co/n1QPfzm/shop-banner.jpg"
      title="Shops List"
    ></top-banner>
    <main-heading>चरावां  और आस पास की सभी दुकानें</main-heading>
    <hr />

    
    <div class="container">
      <div class="row checkboxes">
        <label for="exampleFormControlInput1" class="form-label mt-2 fw-bold">
          आप किस तरह की दुकान या सर्विस के बारे में जानना चाहते हैं ?      <small class="fw-200">(आप एक से ज्यादा तरह की सर्विस पे क्लिक कर सकते हैं) </small> </label
        >  
   
        <br>
        <div class="col-4" v-for="check in getFilters" :key="check.value">
          <input
            type="checkbox"
            :id="check.value"
            :value="check.value"
            v-model="selectedFilter"
          />
          <small for="jack" class="ms-1">{{ check.title }}</small>
        </div>

        <!-- <div class="form-check m-1" v-for="data in filterBy" :key="data.title">
          <input
            class="form-check-input"
            type="radio"
            :value="data.value"
            v-model="selectedFilter"
            name="flexRadioDefault"
          />
          <label
            class="form-check-label fw-bold text-primary"
            for="flexRadioDefault1"
          >
            {{ data.title }}
          </label>
        </div>
        <br /> -->

        <hr />
      </div>

      <div class="shop-table">
       <div class="col-lg-12"> <h4 v-if="selectedFilter.length">आपने सर्च किया है   </h4>
        <span v-for="item in selectedFilter" :key="item" class="badge rounded-pill bg-dark ms-1">{{item}}</span></div>

        <table class="table">
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
            <tr v-for="(data,idx) in allShopData" :key="data.shopName">
              <th scope="row">{{++idx}}</th>
              <td><small>{{data.shopName}}</small></td>
              <td>
                <small class="me-2"><a :href="data.mobileNumber"><img src="../../assets/telephone.png" alt="" srcset="" ></a></small>
                <small v-if="data.mobileNumber2"><a :href="data.mobileNumber2"><img src="../../assets/telephone.png" alt="" srcset=""></a></small>
              </td>
              <td><small>{{data.openTime}} - {{data.closeTime}}</small></td>
              <td><small>{{data.inCharwan}}, {{data.villageName}} ,{{data.shopAddress}}</small></td>
            </tr>
          </tbody>
        </table>
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
      selectedFilter: [],
      allShopData: [],
    };
    
  },
  created() {
     axios.get('https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops.json')
     .then(res=>{
       console.log("here is the data");
       console.log(res.data);
      //  this.allShopData= res.data;
       for(let i in res.data){
        this.allShopData.push(res.data[i])
       }
       console.log(this.allShopData);
     })
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
</style>