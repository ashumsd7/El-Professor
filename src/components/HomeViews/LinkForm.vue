<template>
  <div class="row">
    <div class="loading-container text-center" v-if="isLoading">
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
      <div class="col-lg-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            रिपोर्टर का नाम
          </label>
          <input
            type="text"
            class="form-control"
            v-model="reporterName"
            id=""
            placeholder="कृपया अपना नाम लिखे  "
          />
        </div>
      </div>

      <div class="col-lg-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            खबर किस बारे में हैं ?
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
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-2">
            खबर को संक्षिप्त रूप में लिखें
          </label>
          <input
            type="text"
            class="form-control"
            v-model="shortInfo"
            id=""
            placeholder="कब शब्दों में  खबर लिखें  "
          />
        </div>
      </div>

      <div class="col-lg-12">
        <label for="exampleFormControlInput1" class="form-label mt-2">
          विस्तृत खबर यहाँ लिखें
        </label>
        <div class="">
          <textarea
            name=""
            id=""
            cols="35"
            class="w-100"
            v-model="detailedInfo"
            rows="5"
            placeholder="अगर खबर विस्तृत रूप में लिखना चाहते हैं तो यहाँ टाइप करें "
          >
          </textarea>
        </div>
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
export default {
  data() {
    return {
      reporterName: "",
      newsTitle: "",
      shortInfo: "",
      detailedInfo: "",
      timeStamp: new Date(),

      isDisabled: false,
      isLoading: false,
    };
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    sumbitData() {
      this.isLoading = true;
      let newsData = {
        reporterName: this.reporterName,
        newsTitle: this.newsTitle,
        shortInfo: this.shortInfo,
        detailedInfo: this.detailedInfo,
        timeStamp: this.timeStamp,
      };
      console.log(newsData);
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
  color: rgb(69, 96, 252);
}
.news-btn {
  margin-top: -40px;
}
.loading-container {
  height: 400px;
}
</style>