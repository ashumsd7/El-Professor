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
      <h4 class="text-warning fw-bolder">जानकारी भेजी जा रही है....</h4>
    </div>
    <div class="form-conatiner" v-else>
      <!-- <div class="col-lg-4" v-if="!isAdmin">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            रिपोर्टर का नाम <span class="text-danger">(जरूरी है लिखना)</span>
          </label>
          <input
            type="text"
            class="form-control"
            v-model.trim="reporterName"
            id=""
            placeholder="कृपया अपना नाम लिखे  "
          />
        </div>
      </div> -->

      <!-- <div class="col-lg-4">
        <div class="mb-3">
     
          <input
            type="checkbox"
            class="me-2"
            
            id=""
            v-model="isAdmin"
            value="isAdmin"
            
          />
               <label for="exampleFormControlInput1" class="form-label mt-2">
             <span class="text-danger">एडमिन के रूप में जारी करें  </span>
          </label>
        </div>
      </div> -->

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
          <!-- <span class="ms-2 text-primary">{{reporterName}}</span> -->
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

      <div class="col-lg-12">
        <!-- <label for="exampleFormControlInput1" class="form-label mt-2">
          विस्तृत जानकारी यहाँ लिखें (अगर लिखना चाहें  तो )
        </label>
        <div class="">
          <textarea
            name=""
            id=""
            cols="35"
            class="w-100"
            v-model="detailedInfo"
            rows="5"
            placeholder="अगर जानकारी विस्तृत रूप में लिखना चाहते हैं तो यहाँ टाइप करें "
          >
          </textarea>
        </div> -->
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
      timeStamp: new Date().getTime(),

      isDisabled: false,
      isLoading: false,
      isAdmin:true,
      adminID:'',
      isDisabled:false,

      
    };
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    sumbitData() {
    //   if (this.newsTitle == "") {
    //     alert("खबर किस बारे में हैं ? ");
    //     return;
    //   }
      if (this.shortInfo == "") {
        alert("कब शब्दों में जानकारी लिखें ");
        return;
      }
    //   if(this.newsTitle.length<10){
    //       alert('शीर्षक काफी छोटा है ')
    //       return;
    //   }
      if(this.shortInfo.length<15){
          alert('जानकारी कुछ ज्यादा ही संक्षिप्त है कृपया कुछ ज्यादा शब्दों में लिखें ')
          return;
      }
      if(this.isAdmin){
      
          if(this.adminID==''){
              alert('बिन ID डाले आप आगे नहीं बढ़ सकते या फिर  ID गलत है  अगर आप एडमिन नहीं है तो या तो एडमिन बनने के लिए सम्पर्क करें')
              return;
          }
      }
      if (this.shortInfo != "" ) {
          // if(this.reporterName==''){
          //     this.reporterName='अनाम'
          // }
          if(this.adminID=='101'){
              this.reporterName='एडमिन'          
          }
          if(this.adminID=='555'){
              this.reporterName='वालंटियर'          
          }
          
        let newsData = {
          reporterName: this.reporterName,
          newsTitle: this.newsTitle,
          shortInfo: this.shortInfo,
          detailedInfo: this.detailedInfo,
          timeStamp: this.timeStamp,
          isAdmin:this.isAdmin
        };
        this.isLoading= true;
        this.isDisabled=true;
        axios.post("https://charawan-notification-default-rtdb.firebaseio.com/Notification.json",newsData)
          .then((res) => {
              this.isLoading= false;
               this.$emit("goBack");
            // console.log(res);
            this.isDisabled=false;
          })
          .catch((err) => {
              this.isLoading= false;
            alert('सर्वर डाउन हो सकता हैं, कुछ समय बाद प्रयास करें  ')
          });
      }
      //   console.log(newsData);
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