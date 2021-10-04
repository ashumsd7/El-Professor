<template>
  <div class="container-fluid mt-5">
    <div class="row">
   <div class="col-lg-6 col-12">
<static-links></static-links>
      </div>
      <div class="col-lg-6 col-12">
        <div class="section-title text-center mb-3 mt-3 position-relative">
          <h4 class="fw-bolder bg-primary p-2 text-white rounded-3">
            <img
              src="../../assets/notification.png"
              height="25"
              alt=""
              srcset=""
              class="me-1"
            />
            चरावां : {{ openForm ? "जानकारी  जोड़ें " : "नोटिफिकेशन  " }}
            <img
              src="../../assets/live.png"
              width="80"
              alt=""
              srcset=""
              class="me-1"
            />
          </h4>
        </div>
        <p
          @click="openForm = !openForm"
          v-if="!openForm"
          class="ms-auto d-block add-noti-btn text-dark fw-bold p-2 rounded-2"
        >
          <img src="../../assets/plusnoti.png" alt="" srcset="" class="me-2" />
          जोड़ें
        </p>
        <p
          @click="callApi"
          class="btn fw-bolder text-primary"
          v-if="!openForm"
        >
          {{ showLoading ? "रिफ्रेश हो रहा है " : "रिफ्रेश करें" }}
          <img
            src="../../assets/refresh.png"
            v-if="!showLoading"
            width="24"
            alt=""
            srcset=""
            class="me-1"
          />

          <img
            v-if="showLoading"
            src="../../assets/refreshing.gif"
            width="24"
            alt=""
            srcset=""
            class="me-1"
          />
        </p>
        <small v-if="!openForm" class="text-muted d-block ms-2"> <span class="text-danger fw-bold">
          ⌚{{currentTime}}
          </span> रिफ्रेश हुआ था |</small>
        <hr />
        <div class="form-container" v-if="openForm">
          <link-form @goBack="fireGoBack"></link-form>
        </div>
        <div v-if="!openForm" class="notification_container">
          <!-- <marquee behavior="" direction="up" scrollamount="4" loop='true'> -->

          <div class="loading text-center" v-if="showLoading">
            <img
              class="me-1 mt-4"
              width="300"
              src="../../assets/loading2.gif"
              alt=""
              srcset=""
            />
            <div class="text-muted">जानकारी लोड हो रही हैं ...</div>
          </div>

          <div
            class="notifications ms-lg-2 p-2"
            v-for="news in allNews"
            :key="news.timeStamp"
          >
            <div class="title-time">
              <small class="title mt-1 fw-bold d-block text-muted">{{
                news.newsTitle
              }}</small>
            </div>

            <p
              
              class="short-info text-dark fw-bold text-decoration-none mb-2"
            >
              ✉️{{ news.shortInfo }}</p
            >
            <span class="time-name d-block">
              <small
                class="badge rounded-pill text-light bg-dark text-white"
                :class="{ adminColor: news.isAdmin }"
              >
                <span class="">
                  <span v-if="news.isAdmin">🛡️</span>
                  {{ news.reporterName }}</span
                >
                द्वारा
                <small class="text-gray ms-1"> ⏳ {{ news.timeStamp }}</small>
              </small>
            </span>
              <div class="img-container">
                <div v-if="news.img1" class="row">
                  <div class="col-lg-3 col-6">
                    <img :src="news.img1" alt="news_photo1" class="img-fluid" srcset="">
                  </div>
                  <div v-if="news.img2" class="col-lg-3 col-6">
                    <img :src="news.img2" class="img-fluid" srcset="">
                  </div>
                </div>
                 
              </div>
          </div>

        </div>
      </div>
   
    </div>
  </div>
</template>

<script>
import LinkForm from "./LinkForm.vue";
import StaticLinks from './StaticLinks'

import axios from "axios";
export default {
  components: { LinkForm,StaticLinks },

  data() {
    return {
      //type:   notification / news/ vikas
      showLoading: true,
      showDetail: false,
      openForm: false,
      allNews: [],
      lastRefreshAt:null,

      //for refresh btn
      currentTime:'अभी अभी',
      
      // new Date().getTime()
    };
  },
  watch:{

  },
  methods: {
    fireGoBack() {
      this.openForm = !this.openForm;
      this.callApi();
    },
    callApi() {
      this.lastRefreshAt=new Date().getTime()
      this.allNews = [];
      this.showLoading = true;
      axios
        .get(
          "https://charawan-notification-default-rtdb.firebaseio.com/Notification.json"
        )
        .then((res) => {
          //   console.log(res.data);
          for (let i in res.data) {
            this.allNews.push(res.data[i]);
          }
          for (let i in this.allNews) {
            let currentStamp = new Date().getTime() - this.allNews[i].timeStamp;
            let difference = this.calculateTimeago(Date.now() - currentStamp);
            this.allNews[i].timeStamp = difference;
          }
          this.allNews = this.allNews.reverse();
          this.allNews= this.allNews.splice(0,10)
          this.showLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    calculateTimeago(date) {
      let seconds = Math.floor((Date.now() - date) / 1000);
      let unit = " सेकंड ";
      let direction = "पहले ";
      if (seconds < 0) {
        seconds = -seconds;
        direction = "from now";
      }
      let value = seconds;
      if (seconds >= 31536000) {
        value = Math.floor(seconds / 31536000);
        unit = "  साल";
      } else if (seconds >= 86400) {
        value = Math.floor(seconds / 86400);
        unit = "दिन";
      } else if (seconds >= 3600) {
        value = Math.floor(seconds / 3600);
        unit = " घण्टे ";
      } else if (seconds >= 60) {
        value = Math.floor(seconds / 60);
        unit = "मिनट";
      }
      if (value != 1) unit = unit + "";
      return value + " " + unit + " " + direction;

      //   console.log(getTimeInterval(Date.now() - 25650));
    },
  },
  created() {
    this.callApi();
    setInterval(() => {
      let currentStamp = new Date().getTime()- this.lastRefreshAt
      this.currentTime=this.calculateTimeago(Date.now() - currentStamp);
    }, 1000);
  },
};
</script>

<style  scoped>
.notification_container {
  min-height: 350px;
  max-height: 450px;
  overflow-y: scroll;
background: rgb(255, 252, 246);
  border-left: 3px solid rgb(1, 161, 1);
}
.notifications {
  transition: all 0.5s ease-in;
  border: 2px solid rgb(110, 110, 110);
  margin: .5rem;
  /* border-radius: 10% 10% 1% 21% / 0% 9% 0% 31%  ; */
  background: rgb(255, 255, 255);
  position: relative;
  margin-bottom: 50px;
  border-right: none;
  border-bottom: none;
  border-top-left-radius: 10px;
  padding: 1rem;
  
  box-shadow: 6px 5px 17px -3px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 6px 10px 17px -3px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 6px 10px 17px -3px rgba(0, 0, 0, 0.6);
}
.time-name {
  position: absolute;
  top: -15px;
  left: 3px;
}
.my-data {
  overflow-y: scroll;
  height: 200px;
}

.section-title {
  text-shadow: 6px -1px 4px rgba(150, 150, 150, 0.8);
}
.add-noti-btn {
  position: absolute;
  right: 30px;
  cursor: pointer;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(38, 2, 71);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
.adminColor {
  color: #ffffff !important;
}
</style>