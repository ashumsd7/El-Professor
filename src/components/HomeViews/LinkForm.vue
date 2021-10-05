<template>
  <div class="row form">
    <div class="loading-container text-center " v-if="isLoading">
      <img
        class="me-1"
        width="60"
        src="../../assets/loading2.gif"
        alt=""
        srcset=""
      />
      <h4 class="text-info fw-bolder">जानकारी भेजी जा रही है....</h4>
    </div>
    <div class="form-conatiner" v-else>
  

        <div class="">
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
    




      <div class="">
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
      <div class="">
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

       <div class=" mt-1">
       
       
      </div>

       <div class="" >
        <div class="">
          <label for="exampleFormControlInput1" class="form-label mt-2" v-if="!isImgUploaded">
             फोटो  अपलोड करें
           <span class="text-info">(जरूरी नहीं )</span>
                     
          </label>
           <img v-if="isImgUploaded" :src="serverImgURL" height="100" width="100" alt="news_photo1" class="d-block" srcset="">
          <input v-if="!isImgUploaded"
            type="file"
            class="d-block"
            @change="fileSelected"
            id=""
            placeholder="दूसरी फोटो का लिंक  "
          />

          <span class="text-success d-block mt-2" v-else>
              <img
           
            src="../../assets/check.png"
            width="24"
            height="24"
            alt=""
            srcset=""
            class="me-1"
          />अपलोड हो गयी </span>
  
          <a v-if="isImgUploaded"  class=" d-block mt-2 btn text-muted" @click='uploadAgain'>
              <img
          
            src="../../assets/replay.png"
            width="24"
            height="24"
            alt=""
            srcset=""
            class="me-1"
          />
दोबारा अपलोड करें</a>
          <span class="text-info d-block mt-2" v-if="isImgUploading">
            <img
     
            src="../../assets/uploading.gif"
           width="150"
           height="100"
           
            alt=""
            srcset=""
            class="me-1 d-block"
          />
अपलोड हो रही है...
</span>

        </div>
      </div>

       <div class="" >
        <div class="invisible">
         
          <input
            type="text"
            class="form-control "
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
    

      selectedFile:null,
      serverImgURL:null,
      isImgUploading:false,
      isImgUploaded:false,
      // showUploadBtn:false
    };
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    fileSelected(e){
      // this.showUploadBtn=true
      this.selectedFile=e.target.files[0]
      this.uploadImg();

    },
    uploadImg(){
      this.isImgUploading= true;
      this.isDisabled=true;
      // this.showUploadBtn= false
// alert('dd')
const fd= new FormData();
                fd.append('image',this.selectedFile, this.selectedFile.name)
             
                axios.post('https://api.imgbb.com/1/upload?expiration=0&key=45fdf5c62459de1d05f5467a287c5b44',fd)
                .then(res=>{
                    this.isImgUploading=false
                    this.isDisabled=false;
                    this.isImgUploaded=true
                   
                    this.serverImgURL= res.data.data.display_url
                    
                })
    },

    uploadAgain(){
  
                    // this.showUploadBtn=true
                    this.isImgUploaded=false
                    // this.showUploadBtn=true
                    this.serverImgURL= null
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
      // if(this.pincode!=224203){
      //     alert('कृपया चरावां का सही पिनकोड डालें ')
      //     return;
      // }
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
          if(this.adminID=='1818'){
              this.reporterName='सचिन तिवारी (वालंटियर)'  
               isValid=true         
          }
          if(this.adminID=='0100'){
              this.reporterName='सूरज पाठक'  
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
          img1:this.serverImgURL,
          // img2:this.img2
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
  /* width: 300px; */
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