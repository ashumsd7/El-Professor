<template>
  <section id="donate">
    <top-banner
      img="https://i.ibb.co/tBt88YP/ch2.jpg"
      title="Donate"
    ></top-banner>
    <main-heading>Support Your Village</main-heading>
    <main-content
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex minus
      saepe facilis eaque voluptatibus, maxime in. Pariatur similique ab totam?
      Ea sit quod ratione quos, illo ullam unde rem!</main-content
    >

    <sub-heading>You can support your village many ways.</sub-heading>
    <sub-heading>Scan this QR code to donate flexible amount</sub-heading>
        <button @click="showQR=!showQR" class="btn btn-outline-primary mt-3">{{ showQR ? 'Hide QR Code': 'Show QR Code'}}</button>
        <img v-if="showQR" width="200" height="200" src="https://i.ibb.co/FX26MG0/qrrr.jpg" alt="" class="img-fluid">
    <hr />
    <sub-heading>Order these items and support your village.</sub-heading>
    <div class="container mt-3">
      <div class="row">
        <div
          v-for="item in donationData"
          :key="item.name"
          class="col-lg-3 mt-2 col-6 donation-item text-center "
        >
          <img
            
            :src="item.img"
            alt=""
            class="img-fluid mb-2 "
          />
          <p class="name fw-bold text-red">
            {{ item.hindiName }} | <span class="price">रु  {{ item.approxPrice }}</span>
          </p>

          <p class="about text-muted">{{ item.about }}</p>
          <p class="order-links ">
         <i class="bi mx-2  bi-bag-check-fill"></i>   <small v-for="link in item.orderLinks" :key="link" class="my-2"
              ><a :href="link" class="mx-1 btn btn-success">आर्डर करें  </a></small
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    computed:{
        donationData(){
            return this.$store.getters.getDonationData;
        }
    },
  data() {
    return {
      showQR:false
    };
  },

  filters:{
      addRupee(val){
          return ''+ val;
      }
  }
};
</script>

<style  scoped>
img{
    box-shadow: 3px 4px 10px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 4px 10px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 4px 10px -1px rgba(0,0,0,0.75);
border-radius: 10px;
}
.about,.order-links{
    margin-top: -15px;
}
.price{
    color: rgb(247, 120, 120);
}
a{
    text-decoration: none;
}
.btn-success{
    height: 30px;
}
</style>