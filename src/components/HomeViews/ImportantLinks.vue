<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">


 





        <div class="section-title text-center mb-3 mt-3 position-relative">
          <h4 class="fw-bolder">
            <img
              src="../../assets/notification.png"
              height="25"
              alt=""
              srcset=""
              class="me-1"
            />
            {{ openForm ? "जानकारी  जोड़ें " : "नोटिफिकेशन  " }}
            <img
              src="../../assets/live.png"
              width="80"
              alt=""
              srcset=""
              class="me-1"
            />
          </h4>
        </div>
       <button @click="callApi" class="text-dark btn "> {{showLoading ? 'रिफ्रेश हो रहा है ' : 'रिफ्रेश करें' }}   <img
              src="../../assets/refresh.png" v-if="!showLoading"
              width="24"
              alt=""
              srcset=""
              class="me-1"
            />

            <img v-if="showLoading"
              src="../../assets/refreshing.gif"
              width="24"
              alt=""
              srcset=""
              class="me-1"
            />
            
            
            </button>
        <hr />
        <div class="form-container" v-if="openForm">
          <link-form @goBack="fireGoBack"></link-form>
        </div>
        <div v-if="!openForm" class="notification_container">
          <button
            @click="openForm = !openForm"
            class="
              ms-auto
              d-block
              add-noti-btn
              btn btn-warning
              fw-bold
              p-2
              rounded-2
            "
          >
            <img
              src="../../assets/plusnoti.png"
              alt=""
              srcset=""
              class="me-1 "
            />जोड़ें
          </button>
          <!-- <marquee behavior="" direction="up" scrollamount="4" loop='true'> -->

               <img v-if="showLoading"
        class="me-1 mt-4"
        width="300"
        src="../../assets/loading2.gif"
        alt=""
        srcset=""
      />


          <div
            class="notifications mb-2 ms-lg-5 p-2"
            v-for="news in allNews"
            :key="news.timeStamp"
          >
            <div class="title-time">
              <span class="time-name">
                <small class=" badge text-light bg-dark text-white">
                  {{ news.timeStamp }}
                  <span :class="{adminColor:news.isAdmin}" class="text-warning">{{
                    news.reporterName
                  }}</span> द्वारा </small
                >
              </span>
              <small class="title fw-bold d-block text-muted ">{{ news.newsTitle }}</small>
            </div>

            <a href="" class="short-info">{{ news.shortInfo }}</a>
            <!-- <a @click="showDetail = !showDetail" v-if="news.detailedInfo"
              >show More</a
            > -->
            <!-- <a class="text-decoration-none full-info" v-if="showDetail" href=""
              >{{ news.detailedInfo }}
            </a> -->
            <!-- <a @click="showDetail=!showDetail" v-if="!news.detailedInfo" >show less</a> -->
          </div>
          <!-- </marquee> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkForm from "./LinkForm.vue";
import axios from "axios";
export default {
  components: { LinkForm },
  data() {
    return {
      //type:   notification / news/ vikas
      showLoading:true,
      showDetail: false,
      openForm: false,
      allNews: [],
    };
  },
  methods: {
    fireGoBack() {
      this.openForm = !this.openForm;
      this.callApi();
    },
    callApi(){
     this.allNews=[]
        this.showLoading=true
    axios
      .get(
        "https://charawan-notification-default-rtdb.firebaseio.com/Notification.json"
      )
      .then((res) => {
          
        //   console.log(res.data);
        for (let i in res.data) {
          this.allNews.push(res.data[i]);
        }
        this.allNews = this.allNews.reverse();
        this.showLoading=false
       
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  created() {
      this.callApi();
  },
};
</script>

<style  scoped>
.notification_container {
  /* width: 100vw; */

  height: 400px;
  overflow-y: scroll;

  border-left: 3px solid rgb(1, 161, 1);
}
.my-data{
    overflow-y: scroll;
    height: 200px;
}

.section-title {
  text-shadow: 6px -1px 4px rgba(150, 150, 150, 0.8);
}
.add-noti-btn {
  position: absolute;
  right: 30px;
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
.adminColor{
        color: #08ed4f!important;
}
</style>