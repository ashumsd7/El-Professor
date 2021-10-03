<template>
  <div class="row form">
    <div class="loading-container text-center " v-if="isLoading">
      <img
        class="me-1"
        width="300"
        src="../../assets/loading2.gif"
        alt=""
        srcset=""
      />
      <h4 class="text-info fw-bolder">जानकारी भेजी जा रही है....</h4>
    </div>
    <div class="form-conatiner" v-else>
  

        <div class="col-lg-4">
        <div class="">
          <label for="exampleFormControlInput1" class="form-label mt-2">
             <span class="text-danger"> *</span>अपनी  ID डालें
              <span class="text-danger">(जरूरी है लिखना)</span>
          </label>
          <input
            type="number"
            class="form-control"
            v-model="adminID"
            id=""
            placeholder="अपनी  ID डालें  "
          />
          <span class="text-muted ms-2">ID नहीं है ?  <a class=" d-inline  text-primary" href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
              > सम्पर्क करें </a></span>
        </div>      
      </div>
      <div class="col-lg-4">
        <div class="">
          <label for="exampleFormControlInput1" class="form-label mt-2">
           जानकारी किस बारे में हैं ?
            
          </label>
          <input
            type="text"
            class="form-control"
            v-model="newsTitle"
            id=""
            placeholder="यहाँ शीर्षक टाइप करें  "
          />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="">
          <label for="exampleFormControlInput1" class="form-label mt-2">
           <span class="text-danger"> *</span> जानकारी को संक्षिप्त रूप में लिखें 
           <span class="text-danger">(जरूरी है लिखना)</span>
          </label>
          <textarea
            type="text"
            class="form-control"
            v-model="shortInfo"
            id=""
            placeholder="कब शब्दों में  जानकारी लिखें  "
            cols="35"
            rows='5'
          />
        </div>
      </div>

<!-- photo feild -->
<!-- img 1 -->
       <div class="col-lg-4 mt-3">
        <span class="fw-lighter text-secondary"> क्या आपके पास फोटो लिंक है ? तो अपलोड करें | अगर नहीं है तो 
         <a href="https://imgbb.com/">यहाँ क्लिक करके </a> फोटो अपलोड करें , अपलोड करने के बाद आपको एक लिंक मिलेगी ,
           लिंक कॉपी करके यहाँ डालें |
        
<span class="text-dark fw-light text-decoration-underline">आप चाहें तो खाली भी छोड़ सकते हैं |</span> </span>
        <div class="">
          
          <label for="exampleFormControlInput1" class="form-label mt-2">
          पहली   फोटो का लिंक यहाँ डालें 
            
          </label>
          <input
            type="text"
            class="form-control"
            v-model="img1"
            id=""
            placeholder="पहली फोटो का लिंक "
          />
        </div>
      </div>
<!-- img2 -->

       <div class="col-lg-4" >
        <div class="">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            दूसरी फोटो का लिंक यहाँ डालें 
                     
          </label>
          <input
            type="text"
            class="form-control"
            v-model="img2"
            id=""
            placeholder="दूसरी फोटो का लिंक  "
          />
        </div>
      </div>

       <div class="col-lg-4 invisible" >
        <div class="">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            दूसरी फोटो का लिंक यहाँ डालें 
                     
          </label>
          <input
            type="text"
            class="form-control"
            v-model="img2"
            id=""
            placeholder="दूसरी फोटो का लिंक  "
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row news-btn">
          <div class="col-lg-6 col-6">
            <input
              type="button"
              @click="goBack"
              :disabled="isDisabled"
              class="btn btn-danger my-5 w-100 w-lg-50"
              :value="isDisabled ? 'कृपया इंतज़ार करिये' : 'वापस जाएँ '"
            />
          </div>
          <div class="col-lg-6 col-6">
            <input
              type="button"
              @click="sumbitData"
              :disabled="isDisabled"
              class="btn btn-success my-5 w-100 w-lg-50"
              :value="isDisabled ? 'कृपया इंतज़ार करिये' : 'जानकरी सेव करें'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      reporterName: "",
      newsTitle: "",
      shortInfo: "",
      detailedInfo: "",
      timeStamp:'',
      isDisabled: false,
      isLoading: false,
      isAdmin:true,
      adminID:'',
    };
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    sumbitData() {

      if (this.shortInfo == "") {
        alert("कब शब्दों में जानकारी लिखें ");
        return;
      }

      if(this.shortInfo.length<15){
          alert('जानकारी कुछ ज्यादा ही संक्षिप्त है कृपया कुछ ज्यादा शब्दों में लिखें ')
          return;
      }
      if(this.isAdmin){
      
          if(this.adminID==''){
              alert('बिन ID डाले आप आगे नहीं बढ़ सकते')
              return;
          }
      }
      if (this.shortInfo != "" ) {
        let isValid=false;
          if(this.adminID=='101'){
              this.reporterName='एडमिन' 
              isValid=true         
          }
          if(this.adminID=='555'){
              this.reporterName='वालंटियर'  
               isValid=true         
          }

          if(!isValid ){
              alert('ID गलत है  अगर आप एडमिन नहीं है तो या तो एडमिन बनने के लिए सम्पर्क करें')
              return;
          }
          
          
        let newsData = {
          reporterName: this.reporterName,
          newsTitle: this.newsTitle,
          shortInfo: this.shortInfo,
          detailedInfo: this.detailedInfo,
          timeStamp:  new Date().getTime(),
          isAdmin:this.isAdmin,
          img1:this.img1,
          img2:this.img2
        };
        this.isLoading= true;
        this.isDisabled=true;
        axios.post("https://charawan-notification-default-rtdb.firebaseio.com/Notification.json",newsData)
          .then((res) => {
              this.isLoading= false;
               this.$emit("goBack");
            this.isDisabled=false;
          })
          .catch((err) => {
              this.isLoading= false;
            alert('सर्वर डाउन हो सकता हैं, कुछ समय बाद प्रयास करें  ')
          });
      }
    },
  },
};
</script>

<style  scoped>
.input-group {
  width: 300px;
}
label {
  font-weight: 600;
}
.form-label {
  color: rgb(0, 0, 0);
}
.news-btn {
  margin-top: -40px;
}
.loading-container {
  height: 400px;
}
.form{
    background: linear-gradient(230deg,rgb(219, 247, 231),rgb(250, 240, 194));
}
.adminColor{
        color: #08ed4f!important;
}
</style>