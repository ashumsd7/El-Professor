<template>
  <div class="container">
      <div class="row justify-content-center align-items-center ">
          <div class="col-lg-4 mt-2  mb-2 col-md-6 col-sm-6 p-1 text-center gallery-blocks" v-for="i in 8" :key="i">
              <div class="row">
                  <div class="col-3">
                       <img src="../../assets/cricket.png" alt="" class="img-fluid">
                       <p>232 Photos</p>
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <h4>चरावां क्रिकेट क्लब 2021</h4>
                        <p>दिन 1 </p>

                        <small class="text-muted">Lorem ipsum dolor sit amet \uam!</small>
                    </div>

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
                galleryData:[
                    {
                        title:'चरावां क्रिकेट क्लब 2021',
                        subTitle:'',
                        link:'',
                        info:'',
                        numberOfPhotos:''
                    }
                ]
            }
        },
    }
</script>

<style  scoped>
.gallery-blocks{
    min-width: 250px;
    min-height: 120px;
    border-radius: 7px;
border-radius: 7px;
background: linear-gradient(145deg, #dad6d6, #ffffff);
box-shadow:  8px 8px 16px #cecaca,
             -8px -8px 16px #ffffff;
}
img{}
</style>