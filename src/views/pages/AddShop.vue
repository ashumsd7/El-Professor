<template>
  <section class="addShop position-relative">
    <top-banner 
      img="https://i.ibb.co/tBt88YP/ch2.jpg"
      mobileImg='https://i.ibb.co/TvJmyj2/IMG-20211002-000201.jpg'
      title="Cricket"
    ></top-banner>
    <main-heading v-if="!showDialog">अपने आस पास की दुकानें जोड़े </main-heading>
    <div class="container add-shop-data">
      <div class="row">
        <label v-if="!showDialog" for="exampleFormControlInput1" class="form-label mt-2">
          <span class="text-danger">*</span> #1. दुकान / सर्विस का प्रकार पर टिक
          करिये
        </label>
        <success-dialog @addMore='showDialog=!showDialog'  v-if="showDialog" > 
          <span class="badge bg-danger">{{shopName}}</span>   अब वेबसाइट पर दिखेगी   | </success-dialog>
        <small class="text-muted mb-3 " v-if="!showDialog"
          >**अगर आप एक से ज्यादा सर्विस देते हैं तो एक से ज्यादा सर्विस पर टिक
          करिये |</small
        >
        <div v-if="!showDialog"
          class="col-lg-2 col-4"
          v-for="check in getFilters"
          :key="check.value"
        >
          <input
            type="checkbox"
            :id="check.value"
            :value="check.value"
            v-model="checkedTypes"
          />
          <small for="jack" class="text-muted ms-1">{{ check.title }}</small>
        </div>
        <br />

        <div v-if="!showDialog" class="">
        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
              <small class="text-danger">*</small> #2.दुकान / सर्विस का नाम
            </label>
            <input
              type="text"
              class="form-control"
              v-model="shopName"
              required=""
              id="exampleFormControlInput1"
              maxlength="40"
              placeholder="अपने सर्विस या दुकान का नाम लिखिए"
            />
            <small v-if="isShopNameError" class="text-danger ms-3"
              >दुकान का नाम लिखिए</small
            >
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
             #3. मालिक का नाम
            </label>
            <input
              type="text"
              class="form-control"
              v-model="owenerName"
              required
              id=""
              maxlength="40"
              placeholder="अपने सर्विस या दुकान मालिक का नाम लिखिए"
            />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
              <small class="text-danger">*</small>#4. मोबाइल नंबर
            </label>
            <input
              type="number"
              class="form-control"
              id=""
              v-model="mobileNumber"
              maxlength="10"
              required
              placeholder="मोबाइल नंबर  लिखिए"
            />
            <small v-if="isMobileError" class="text-danger ms-3"
              >मोबाइल नंबर सही नहीं है</small
            >
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
             #5. मोबाइल नंबर ( यदि दूसरा भी देना चाहें )
            </label>
            <input
              type="number"
              class="form-control"
              id=""
              v-model="mobileNumber2"
              maxlength="10"
              placeholder="दूसरा मोबाइल नंबर लिखिए"
            />
            <!-- <small v-if="isMobileError" class="text-danger ms-3"
              >मोबाइल नंबर सही नहीं है</small
            > -->
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
            #6.  दुकान / सर्विस खुलने का समय
            </label>
            <input
              type="time"
              class="form-control"
              id=""
              v-model="shopOpenAt"
              placeholder=""
            />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1"  class="form-label mt-2">
            #7.  दुकान / सर्विस बंद होने का समय
            </label>
            <input
              type="time"
              class="form-control"
              id=""
              v-model="shopClosedAt"
              placeholder=""
            />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
             #8. क्या दुकान / सर्विस किसी दिन बंद रहती है ? यदि हाँ दिन लिखें
            </label>

            <input
              type="text"
              v-model="closedOn"
              class="form-control"
              id=""
              maxlength="40"
              readonly
              placeholder="जिस दिन बंद रहती है नीचे दिन पर टिक करें "
            />
             <div class="" v-for="day in days" :key="day">
          <input type="checkbox" :id="day" :value="day" v-model="closedOn" />
          <small for="jack" class="text-muted ms-2">{{ day }}</small>
        </div>
          </div>
        </div>

       

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
           #9.   दुकान / सर्विस के बारे में कुछ विशेष बताना चाहते हैं तो लिखें
            </label>
            <textarea
              type="text"
              cols="30"
              rows="7"
              class="form-control"
              v-model="shopDetails"
              placeholder="यहाँ आप लिख सकते हैं की आप किस तरीके की सर्विस देते हैं, आप की उपलब्धिया, आपकी विशेताएं आदि... "
            />
          </div>
        </div>

        
        <div class="col-lg-4">
          <label for="exampleFormControlInput1" class="form-label" >
            <span class="text-danger">*</span>#10.क्या आपकी दुकान/सर्विस किस गांव
            में है ?
          </label>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="charawan"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
              चरावा में है
            </label>
          </div>
          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="outOfCharawan"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
              चरावा से बाहर है
            </label>
          </div>
        </div>
        <div v-if="inCharawan == 'outOfCharawan'" class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
              <span class="text-danger">*</span>#10.1 अपने गांव का नाम लिखिए
            </label>
            <input
              type="text"
              class="form-control"
              required
              maxlength="20"
              placeholder="गांव का नाम"
              v-model="villageName"
            />
            <small class="text-danger ms-3" v-if="isVillageError"
              >गांव का नाम लिखे |
            </small>
          </div>
        </div>
        <div class="col-lg-4">
          <label for="floatingTextarea">#11.दुकान / सर्विस का पूरा पता</label>
          <div class="form-floating">
            <textarea
              class="form-control"
              v-model="shopAddress"
              placeholder="अपने दुकान या सर्विस का पूरा पता लैंडमार्क सही दें जिससे आपके ग्राहकों को ढूढ़ने में आसानी हो "
              id="floatingTextarea"
              cols="30"
              rows="7"
            ></textarea>
          </div>
        </div>

        <small class="text-info p-3"
          >अगर आप के पास आके दुकान की फोटो की लिंक और आपके फोटो की लिंक है तो
          नीचे दिए गए बॉक्स में लिखे नहीं तो इसे छोड़ दें और निचे
          <span class="text-danger">'जानकारी सेव करे'</span> वाली बटन पर क्लिक
          कर के व्हाट्सप्प के माध्यम से फोटो भेजें
        </small>
        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
             #12. अगर चाहें अपने दुकान / सर्विस की फोटो का link डालें
            </label>
            <input
              type="text"
              class="form-control"
              v-model="shopPhotos"
              id=""
              placeholder="दुकान/सर्विस की फोटो का link डालें"
            />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
             #13. अगर चाहें दुकान / सर्विस के मालिक की फोटो का link डालें
            </label>
            <input
              type="text"
              class="form-control"
              v-model="owenerPhoto"
              id=""
              placeholder="मालिक की फोटो का link डालें "
            />
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-if="!showDialog">
        <input
          type="button"
          @click="validateData"
          :disabled='isDisabled'
          class="btn btn-success form-control my-5"
          :value="isDisabled? 'कृपया इंतज़ार करिये' : 'जानकरी सेव करें' "
        />
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {

  computed: {
    getFilters() {
      return this.$store.getters.getFilters;
    },
  },
  data() {
    return {
      checkedTypes: [],
      shopName: "",
      isShopNameError: false,
      owenerName: "",
      mobileNumber: "",
      mobileNumber2: "",
      isMobileError: false,
      shopClosedAt: "",
      shopOpenAt: "",
      closedOn: [],
      shopDetails: "",
      isVillageError: false,

      showDialog:false,

      days: [
        "सोमवार",
        "मंगलवार",
        "बुधवार",
        "वृहस्पतिवार",
        "शुक्रवार",
        "शनिवार",
        "रविवार",
      ],
      //   inputData: [
      //     {
      //       label: "*दुकान / सर्विस का नाम",
      //       placeholder: "अपने सर्विस या दुकान का नाम लिखिए",
      //       type: "text",
      //       errorMsg: "सर्विस या दुकान का नाम सही नहीं है ",
      //       maxLength: "20",
      //       isRequired: true,
      //       model: "shopName",
      //     },
      //     {
      //       label: "मालिक का नाम ",
      //       placeholder: "अपने सर्विस या दुकान मालिक का नाम लिखिए",
      //       type: "text",
      //       errorMsg: "मालिक का नाम सही नहीं है ",
      //       maxLength: "20",
      //       isRequired: false,
      //     },

      //     {
      //       label: "*मोबाइल नंबर ",
      //       placeholder: "मोबाइल नंबर  लिखिए",
      //       type: "number",
      //       errorMsg: "मोबाइल नंबर सही नहीं है ",
      //       maxLength: "10",
      //       isRequired: true,
      //     },
      //     {
      //       label: " मोबाइल नंबर ( यदि दूसरा भी देना चाहें ) ",
      //       placeholder: "दूसरा मोबाइल नंबर  लिखिए",
      //       type: "number",
      //       errorMsg: "मोबाइल नंबर सही नहीं है ",
      //       maxLength: "10",
      //       isRequired: false,
      //     },
      //     {
      //       label: " दुकान / सर्विस खुलने  का समय",
      //       placeholder: "समय लिखिए",
      //       type: "time",
      //       errorMsg: "समय सही नहीं है ",
      //       maxLength: "2",
      //       isRequired: false,
      //     },
      //     {
      //       label: " दुकान / सर्विस बंद होने का समय",
      //       placeholder: "समय लिखिए",
      //       type: "time",
      //       errorMsg: "समय सही नहीं है ",
      //       maxLength: "2",
      //       isRequired: false,
      //     },
      //     {
      //       label:
      //         " क्या दुकान / सर्विस किसी दिन बंद रहती है ? यदि हाँ दिन लिखें",
      //       placeholder: "दिन लिखिए",
      //       type: "text",
      //       errorMsg: "दिन सही नहीं है ",
      //       maxLength: "20",
      //       isRequired: false,
      //     },
      //     {
      //       label:
      //         " दुकान / सर्विस के बारे में कुछ विशेष बताना चाहते हैं तो लिखें",
      //       placeholder: "दुकान के बारे में लिखिए ",
      //       type: "text",
      //       errorMsg: " सही नहीं है ",
      //       maxLength: "100",
      //       isRequired: false,
      //     },
      //     {
      //       label: " अगर चाहें अपने दुकान / सर्विस की फोटो का link डालें ",
      //       placeholder: "फोटो का link डालें",
      //       type: "text",
      //       errorMsg: "link सही नहीं है ",
      //       maxLength: "1000",
      //       isRequired: false,
      //     },
      //     {
      //       label: " अगर चाहें दुकान / सर्विस के मालिक की फोटो का link डालें ",
      //       placeholder: "फोटो का link डालें",
      //       type: "text",
      //       errorMsg: "link सही नहीं है ",
      //       maxLength: "1000",
      //       isRequired: false,
      //     },
      //   ],
      inCharawan: '',
      submitData: {},
      shopAddress:'',
      owenerPhoto:'',
      shopPhotos:'',
      isDisabled:false
    };
  },
  

  methods: {
    saveData(shopdata) {
      this.isDisabled= true;
      // console.log(shopdata);
      axios.post('https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops.json',shopdata)
      .then(res=>{
        //   alert('डेटा सुरक्षित कर लिया  गया है')
        this.showDialog=true;
        window.scrollTo(0, 0);
        this.isDisabled= false;
          
      })
     .catch(err=>{
         alert('सर्वर डाउन हो सकता हैं, कुछ समय बाद प्रयास करें  ')
     })
    },
    validateData() {
        // this.showDialog=true;
        this.isVillageError=false,
        this.isMobileError=false,
        this.isShopNameError=false

        if(!this.checkedTypes.length){
                 alert('एंट्री नंबर #1, दुकान / सर्विस का प्रकार पर टिक करिये')
                 return;
        }

        if(!this.shopName){
            alert('एंट्री नंबर #2, दुकान का नाम लिखिए')
            this.isShopNameError= true;
            return;
        }
        if(!this.mobileNumber ){
            alert(' एंट्री नंबर #4 : कम से कम एक मोबाइल नंबर लिखना जरूरी है ')
            this.isMobileError= true;
            return;
        }
        
       


        // if(this.inCharawan==''){
        //     alert(' एंट्री नंबर #10 :आपकी दुकान किस गांव में है आपने ये नहीं चुना है ')
        //     return;
        // }
        // if(this.inCharawan!='charawan' && !this.villageName){
            
        //     alert('एंट्री नंबर #10.1 :अपने कहा है की आपकी दुकान चरावा के बाहर की है तो कृपया अपने गांव का नाम लिखें ')
        //     this.isVillageError= true;
        //     return
        // }
        if(this.inCharawan=='charawan'){
            this.villageName='चरावां'
        }


        
      let captureData = {
          shopName:this.shopName,
          owenerName:this.owenerName,
          shopType:this.checkedTypes,
          mobileNumber:'tel:+91'+this.mobileNumber,
          mobileNumber2:'tel:+91'+this.mobileNumber2,
          openTime:this.shopOpenAt,
          closeTime:this.shopClosedAt,
          closedOn:this.closedOn,
          shopInfo:this.shopDetails,
          shopAddress:this.shopAddress,
          shopPhotos:this.shopPhotos,
          ownerPhoto:this.owenerPhoto,
          inCharawan:this.inCharawan,
          villageName:this.villageName




      };
      this.saveData(captureData)
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
.form-label{
    color: rgb(69, 96, 252);

}
</style>