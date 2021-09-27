<template>
  <div>
    <top-banner
      img="https://media.gettyimages.com/videos/coronavirus-plight-of-rural-communities-india-uttarakhand-sigri-ext-video-id1315164988?s=640x640"
      title="Donate"
    ></top-banner>
    <main-heading>आपके आसपास की खबरें </main-heading>

    <div class="container">
        <div class="row">
            
             <button @click="showWriteNews=!showWriteNews" class="btn btn-info w-50 mb-2 m-auto" >समाचार लिखें</button>
        </div>
      <div class="row write-news " v-if="showWriteNews">
   
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            <small class="text-danger">*</small> अपना नाम या नंबर लिखें
          </label>
          <input
            type="text"
            class="form-control"
            v-model="reporterName"
            required=""
            id="exampleFormControlInput1"
            maxlength="40"
            placeholder="अपना नाम या नंबर लिखें "
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            <small class="text-danger">*</small> समाचार किस बारे में है?
          </label>
          <input
            type="text"
            class="form-control"
            v-model="newsTitle"
            required=""
            id="exampleFormControlInput1"
            maxlength="40"
            placeholder="समाचार का शीर्षक लिखिए "
          />
        </div>

        <div class="col-lg-4">
          <label for="exampleFormControlInput1" class="form-label">
            <span class="text-danger">*</span>समाचार किस पुरवा से है ?
          </label>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="charawanChauraha"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
              चरावां चौराहा
            </label>
          </div>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="charwanVillage"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
              चरावां गांव
            </label>
          </div>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="khushiyal"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
              खुशियाल का पुरवा 

            </label>
          </div>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="bagiya"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
              बगिया 

            </label>
          </div>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="pandeKaPurwa"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
             पांडे का पुरवा 

            </label>
          </div>

          <div class="form-check m-1">
            <input
              class="form-check-input"
              type="radio"
              value="dihwa"
              v-model="inCharawan"
              name="flexRadioDefault"
            />
            <label
              class="form-check-label fw-bold text-primary"
              for="flexRadioDefault1"
            >
             डिहवा

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
             चरावां से बाहर के बारे में है 

            </label>
          </div>



        </div>
        <div v-if="inCharawan == 'outOfCharawan'" class="col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label mt-2">
              <span class="text-danger">*</span> अपने गांव का नाम लिखिए
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

        <label for="exampleFormControlInput1" class="form-label mt-2">
          <span class="text-danger">*</span> समाचार को कुछ विस्तार में बताएं 
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          v-model="newsDesciption"
          rows="5"
          class="form-control"
          placeholder="आप क्या समाचार भेजना या लिखना चाहते हैं यहाँ विस्तार से लिखें "
        ></textarea>
        <button class="btn btn-info  mt-2 mb-2 m-auto">समाचार को भेजें  </button>
        <button @click="showWriteNews=!showWriteNews" class="btn btn-danger  mt-2 mb-2 m-auto">रहने दें </button>
      </div>

      
    </div>
  </div>
</template>

<script>
import SubHeading from '../../components/reusable/slots/SubHeading.vue';
export default {
  components: { SubHeading },
    data() {
        return {
            inCharawan:'',
            villageName:'',
            newsTitle:'',
            newsDesciption:'',
            reporterName:'',


            showWriteNews:false


        }
    },
};
</script>

<style  scoped>

</style>