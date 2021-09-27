<template>
  <div
    class="
      success-dialog
      position-relative
      justify-content-center
      align-items-center
    "
  >
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <img
            class="mb-4"
            width="300"
            height="250"
            src="../../../assets/tick.gif"
            alt=""
            srcset=""
          />
          <h3 class="text-center">
            <slot></slot>
          </h3>
          <div class="text-center mb-2">
            <a
              class="text-dark"
              href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
              ><img
                width="32"
                height="32"
                src="../../../assets/whatsapp.png"
                alt=""
                srcset=""
              />
              व्हाट्सप्प पर जुड़ें
            </a>
          </div>
          <button @click="hideDialog" class="btn btn-success w-50">
            ठीक है
          </button>
          <button @click="addMore" class="btn btn-info ms-2 mt-2 w-50">
            दूसरी दुकान जोड़ें
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideDialog() {
      this.$router.push("/find");
      
    },
    addMore() {
      this.$router.push("/addshop");
      // this.$emit('hideIt')
      this.$emit("addMore");
    },
  },
};
</script>

<style  scoped>
.success-dialog {
  z-index: 111;
  width: 100vw;
  height: 80vh;
  /* width: 50%; */
  background: rgb(255, 255, 255);
}
img {
  /* margin-top: 50%; */
}
h3,
button {
  /* margin-left: -70px; */
}
</style>