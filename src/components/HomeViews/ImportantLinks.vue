<template>
  <div class="container-fluid mt-5">
    <div class="row">
        
      <div class=" col-12 " >
          <div class="section-title text-center mb-3 mt-3 position-relative">
              <h4 class="fw-bolder text-decoration-underline">नोटिफिकेशन 📢 
                  </h4>
             
              
          </div>
          <div class="notification_container   ">
 <button  class="ms-auto d-block  add-noti-btn btn btn-warning fw-bold p-1 rounded-2">
     <img src="../../assets/plusnoti.png" alt="" srcset="" class="me-1" />जोड़ें </button>
          <!-- <marquee behavior="" direction="up" scrollamount="4" loop='true'> -->
       <div class="notifications mb-2 ms-lg-5 p-2 " v-for="i in 10" :key="i">
            <div class="title-time">
          <spam class="time-name">   <span class="badge text-light bg-dark">12 सामन्य <span class="text-warning">Admin</span></span> </spam>
          <small class="title fw-bold d-block">टूर्नामेंट और सामन्य क्लिप</small>
            </div>

        <a href='' class="short-info">आज गैलरी पेज जोड़ा गया टूर्नामेंट और सामन्य क्लिप</a>
        <!-- <a href="" class="full-info">आप अपने बनाये हुए वीडियो या फोटोज जो अआप्के गांव से या आस पास से सम्बंधित हो हमे भेज सकते हैं भेजने के लिए क्लिक करें</a> -->

       </div>
       <!-- </marquee> -->
      </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //type:   notification / news/ vikas
      linksData: [
        {
          type: "",
          title: "टूर्नामेंट और सामन्य क्लिप",
          time: " ",
          shortInfo: "आज गैलरी पेज जोड़ा गया",
          place: "चरावां ",
          details:
            "आप अपने बनाये हुए वीडियो या फोटोज जो अआप्के गांव से या आस पास से सम्बंधित हो हमे भेज सकते हैं भेजने के लिए क्लिक करें ",
          name: "admin",
        },
      ],
    };
  },
};
</script>

<style  scoped>
.notification_container {
  height: 400px;
  overflow-y: scroll;
  box-shadow: 9px 9px 10px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 9px 9px 10px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 9px 9px 10px -2px rgba(0,0,0,0.75);
}

.section-title {
  text-shadow: 6px -1px 4px rgba(150, 150, 150, 0.8);
}
.add-noti-btn{
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
</style>