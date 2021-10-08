<template>
  <section id="shops-data">
    <top-banner
      img="https://i.ibb.co/ZSZ8WgG/IMG-20211001-012136.jpg"
      mobileImg="https://i.ibb.co/vLqp8tN/IMG-20211002-000232.jpg"
      title="Shops List"
    ></top-banner>
    <main-heading>चरावां और आस पास की सभी दुकानें</main-heading>

    <div class="container text-center position-relative">
      <div class="info-container bg-white text-center">
        <div
          v-if="!isLoading"
          class="row counter bg-lg-info bg-dark text-white"
        >
          <div class="col-12 w-100 mt-1 fw-bold">
            कुल {{ preservedData.length }} में से
            {{ allShopData.length }} दुकाने/सेवाएं दिख रही हैं
          </div>
        </div>
        <div class="row"></div>
      </div>

      <div class="row text-center m-auto d-block">
        <small class="text-muted"
          >आप सर्च कर सकते हैं: नंबर, दुकान का नाम ,पता लिखकर <br />
          <small class="text-danger">NOTE: </small> लगभग दुकानों के नाम हिंदी
          में हैं
        </small>
        <input
          type="search"
          placeholder="नंबर, नाम ,पता लिखिए  "
          v-model.trim="searchedKey"
          name=""
          class="form-control m-auto mt-2 d-block"
          id=""
        />
        <button
          class="form-control m-auto d-block btn btn-success mt-2"
          @click="filterShops()"
        >
          सर्च करें
        </button>
      </div>

      <div class=""></div>
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
        <div v-if="!isLoading" class="">
          <input
            type="radio"
            class="me-1"
            value="no"
            v-model="showOnlyCharawan"
            checked
            id=""
            @change="filterOnlyCharawan"
          />

          <label
            for="exampleFormControlInput1"
            class="form-label mt-2 fw-bold text-primary"
          >
            <small>सभी दुकानें /सर्विस </small>
          </label>

          <input
            type="radio"
            class="ms-3"
            value="yes"
            v-model="showOnlyCharawan"
            id=""
            @change="filterOnlyCharawan"
          />

          <label
            for="exampleFormControlInput1"
            class="form-label mt-2 ms-1 fw-bold text-primary"
          >
            <small>केवल चरावां की </small>
          </label>
        </div>

        <div class="row text-center m-auto mt-2 justify-content-center mt-3">
          <img
            v-if="isLoading"
            src="../../assets/loading.gif"
            class="me-1 d-block"
            alt=""
            width="200"
            srcset=""
          />
          <span v-if="isLoading" class="d-block text-muted mb-4"
            >कृपया इंतज़ार करिये दुकानें लोड हो रही हैं
          </span>
          <div
            class="col-lg-4 col-md-6 col-12 shop-card p-2 ms-2 mt-2 mt-lg-4"
            v-for="data in allShopData"
            :key="data.shopName"
          >
            <div  class="profile-img mb-1 position-relative">

              
              
              <input v-if="showInput "
               class="d-block popItup" type="file" @change="fileSelected"
               accept="image/x-png,image/jpeg"
                name="" id="">
              <img
            src="../../assets/refreshing.gif"
           v-if="isUploading"
            width="24"
            alt=""
            class="d-block"

            srcset=""
            
          />
              <button v-if="showSaveBtn" class="d-block btn btn-success popItup" @click="updateProfile(data)">सेव कर दीजिये </button>
              <img v-if="!data.ownerPhoto"
                src="../../assets/profile.png"
                alt=""
                width="70"
                height="70"
                class="border-1 dummy-profile"
                srcset=""
                @click="contact()"
              />
                <!-- @click="showInputFile()" -->

              <img v-if="data.ownerPhoto"
                :src="data.ownerPhoto"
                alt=""
                width="70"
                height="70"
                class="border-1 main-profile mb-2"
                srcset=""
                @click="contact()"

              />
                <!-- @click="showInputFile" -->

              <shop-sharing :data='data' class="shop-sharing"></shop-sharing>

   

              
              

              
            </div>
            <h5 class="fw-bolder">{{ data.shopName }}</h5>
            <small v-if="data.owenerName" class="d-block"
              ><span class="text-muted">मालिक:</span>
              {{ data.owenerName }}</small
            >
            <span class="d-block fw-bold text-primary">
              {{ data.villageName }} {{ data.shopAddress }}</span
            >
            <span class="badge rounded-pill bg-white d-block" v-if="data.closedOn"
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

            <small class="d-block text-muted fw-lighter mt-2"
              >फ़ोन न मिल रहा हो या किसी सुधार के लिए
              <a href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
                >सम्पर्क करें</a
              ></small
            >
          </div>
        </div>
      </div>
    </div>

    <div class="shop-footer fixed-bottom d-block">
      <div class="container-fluid">
        <div class="row justify-content-around">
          <div
            class="col-6 footer-btns mt-2"
            @click="searchClicked()"
            v-if="!showCategory"
          >
            <p class="btn-text">
              <img
                src="../../assets/searching.png"
                class="me-1"
                alt=""
                srcset=""
              />
              दुकान खोजें
            </p>
          </div>
          <div class="col-6 mt-2 footer-btns">
            <p class="btn-text">
              <img
                src="../../assets/plus.png"
                alt=""
                srcset=""
                class="me-2"
              /><router-link
                class="text-decoration-none text-white"
                to="/addshop"
                >दुकान /सर्विस जोड़ें</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ShopSharing from "../../components/shops/ShopSharing.vue";
import axios from "axios";

export default {
  components:{
    ShopSharing
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
      isLoading: false,
      showOnlyCharawan: "",
      //using for in charwan filter
      updated: true,
      preservedCurrentData: [],

      //searchbox
      searchedKey: "",
      serverImgURL:null,

      //img upload 
     isUploading:false,
     showInput:false,
     isUploaded:false,
     showSaveBtn:false,
     isPhotoChanged:false

    };
  },

  watch: {
    searchedKey(val) {
      if (val == "") {
        this.isLoading = true;
        this.callAPI();
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    contact(){
      alert('अगर आप फोटो बदलना चाहते हैं या फिर आपके द्वारा दी गयी जानकरी में कुछ बदलाव करना चाहते हैं तो निचे सम्पर्क करें पर क्लिक करके वेबसाइट मैनेजर से बात करके कुछ मिनट में बदलाव करवा सकते हैं वेबसाइट विजिट करने के लिए आपका बहुत बहुत धन्यवाद  ')
    },
    filterShops() {
      this.allShopData = [];
      // console.log(this.searchedKey);
      let tempArr = [];
      let filteredData = this.preservedData.filter((val, idx) => {
        tempArr = [];
        //  tempArr=[val.owenerName.split(" "),val.shopAddress.split(" "),val.shopInfo.split(" "),
        //  val.shopName.split(" "),val.villageName.split(" "),val.shopType,
        //  val.mobileNumber1.split(" "),val.mobileNumber2.split(" ")]
        let tempShopName = val.shopName.split(" ");
        let tempOwnerName = val.owenerName.split(" ");
        let tempVillageName = val.shopAddress.split(" ");
        let tempShopInfo = val.shopInfo.split(" ");
        //  console.log(val.mobileNumber1);
        let mobileNumber1 = val.mobileNumber.split("");
        let number1 = mobileNumber1.splice(7, 10).join("");

        let mobileNumber2 = val.mobileNumber2.split("");
        let number2 = mobileNumber2.splice(7, 10).join("");
        //  console.log(mobileNumber1);

        tempArr = [
          ...tempShopName,
          ...tempOwnerName,
          ...tempVillageName,
          ...tempShopInfo,
          number1,
          number2,
        ];

        console.log("preparedArray", tempArr);

        //  console.log('this is arr',tempArr);

        if (tempArr.includes(this.searchedKey)) {
          // console.log('matched',val);
          return val;
        }
      });

      if (!filteredData.length) {
        alert("कोई सर्विस या दुकान नहीं मिली ");
        //  this.allShopData= this.preservedData;
        this.isLoading = true;
        this.allShopData = [];
        this.callAPI();
        return;
      }

      this.showCategory = false;
      this.allShopData = filteredData;
      this.isLoading = false;
    },

    filterOnlyCharawan() {
      // console.log(this.allShopData.length);
      if (this.updated) {
        this.preservedCurrentData = this.allShopData;
        this.updated = !this.updated;
      }
      if (this.showOnlyCharawan == "yes") {
        let filteredCharawanData = this.allShopData.filter((val, idx) => {
          if (val.inCharawan == "charawan") {
            return val;
          }
        });
        this.allShopData = filteredCharawanData;
      }

      if (this.showOnlyCharawan == "no") {
        this.allShopData = this.preservedCurrentData;
      }
    },

    filterResult() {
      this.updated = true;
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
      this.allShopData = [];
      axios
        .get(
          "https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops.json"
        )
        .then((res) => {
          //  this.allShopData= res.data;
          for (let i in res.data) {
            res.data[i].key = i;
            this.allShopData.push(res.data[i]);
          }

          // console.log(  this.allShopData);

          for (let i in this.allShopData) {
          }

          this.preservedData = this.allShopData.reverse();
          this.isLoading = false;
        });
    },
    searchClicked() {
      this.showCategory = !this.showCategory;
      window.scrollTo(100, 120);
    },
    showInputFile(){
      
this.showInput=true;
    },

    fileSelected(e) {
      // this.showUploadBtn=true
      this.selectedFile = e.target.files[0];
      this.uploadImg();
    },
    uploadImg() {
      this.isUploading=true

   
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);

      axios
        .post(
          "https://api.imgbb.com/1/upload?expiration=0&key=45fdf5c62459de1d05f5467a287c5b44",
          fd
        )
        .then((res) => {
         this.isUploading=false
         this.isUploaded=true
         this.showSaveBtn=true
         this.showInput=false


          this.serverImgURL = res.data.data.display_url;
        });
    },

    updateProfile(shop){
       this.isUploading=true
      shop.ownerPhoto=this.serverImgURL
      let key= shop.key;
      axios.put(`https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops/${key}.json`,shop)
      .then(res=>{
        this.isUploading=false
        this.showSaveBtn=false
          alert('प्रोफाइल फोटो सफलता पूर्वक बदल दी गयी है  ,दोबारा बदलने के लिए फिर से फोटो पर फिर से क्लिक करें ')
          
      })
     .catch(err=>{
         alert('सर्वर डाउन हो सकता हैं, कुछ समय बाद प्रयास करें  ')
     })

    }
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
  background: linear-gradient(210deg,rgb(245, 242, 242),rgb(243, 243, 223));
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
.shop-footer {
  height: 50px;
  background: linear-gradient(360deg, rgb(103, 93, 252), rgb(39, 77, 248));
  width: 100%;
  /* border: 2px dashed black; */
  border-top: none;
}
.footer-btns {
  font-weight: 600;
  color: white;
}
.counter {
  /* background: black; */
  height: 30px;
}

.dummy-profile {
  border-radius: 50%;
  border: 1px dotted blue;
}
.main-profile{
   border-radius: 50%;
  /* border: 2px solid rgb(0, 0, 0); */
  box-shadow: 6px 7px 14px -1px rgba(0,0,0,0.56);
-webkit-box-shadow: 6px 7px 14px -1px rgba(0,0,0,0.56);
-moz-box-shadow: 6px 7px 14px -1px rgba(0,0,0,0.56);
}
.popItup{
  animation: popup 2s linear 0s infinite alternate;
}
.shop-sharing{
position: absolute;
top: 0;
right: 0;
}

@keyframes popup {
  0%{
    transform: scale(1);
  }
  0%{
    transform: scale(.8);
  }
  100%{
    transform: scale(1);
  }


}
</style>