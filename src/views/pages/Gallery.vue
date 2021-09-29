<template>
<main-heading>चरावां गैलरी </main-heading>
<main-content>आप अपने बनाये हुए वीडियो या फोटोज जो आपके गांव से या आस पास से सम्बंधित हो हमे भेज सकते हैं भेजने के लिए   <a
          class="text-decoration-none btn btn-success text-white"
          href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
          >सम्पर्क करें
        </a></main-content>
        <hr>
  <div class="container">

      <div class="row justify-content-center align-items-center ">
          <div class="col-lg-4 mt-2  mb-2 col-md-6 col-sm-6 p-1 text-center gallery-blocks" v-for="data in galleryData" :key="data.title">
              <div class="row">
                  <div class="col-3">
                       <img :src="data.icon" alt="" class="img-fluid">
                       <p></p>
                       <span class="badge bg-warning text-dark mb-2">{{data.numberOfPhotos}} </span>
                  </div>
                  <div class="col-8">
                    <div class="row mt-3">
                        <h4>{{data.title}}</h4>
                        <span class="badge subTitle w-50 m-auto rounded-pill bg-primary">{{data.subTitle}}</span>

                        <small class="text-muted info">{{data.info}}</small>
                    </div>

                  </div>
              </div>
              <div class="">
                  <buttton :disabled='!data.link' class="btn btn-dark form-control mb-1"><a class="text-decoration-none text-warning fw-bold" :href="data.link">
                      {{data.type=='photo' ? 'फोटो देखें 🖼️' : 'वीडियो  देखें 📹  '}} </a></buttton>
                  
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
                        title:'चरावां गांव ',
                        subTitle:'2013  से अब तक ',
                        link:'',
                        info:'',
                        numberOfPhotos:'7500+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/2210/2210000.png'
                    },
                     {
                        title:'चरावां Vlogs',
                        subTitle:'वीडियो लॉग्स देखें  ',
                        link:'https://www.youtube.com/watch?v=3ysh5vssdeg&list=PL4ehj0-yhmAJAo8YqqJeHPbWqIFtN2ExL',
                        info:'',
                        numberOfPhotos:'2 वीडियो',
                        type:'video',
                        icon:'https://cdn-icons-png.flaticon.com/512/1518/1518977.png'
                    },
                     {
                        title:'टूर्नामेंट तैयारी  2021',
                        subTitle:'टूर्नामेंट तैयारी 2021',
                        link:'https://photos.app.goo.gl/FNDNuQZ66qVkZtKR6',
                        info:'',
                        numberOfPhotos:'130+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/2405/2405308.png'
                    },
                     {
                        title:'चरावां स्टेटस वीडियो  ',
                        subTitle:'30 सेकण्ड्स स्टेटस वीडियो',
                        link:'https://www.youtube.com/playlist?list=PL4ehj0-yhmAJDqkaB5o-Q-Oi6v_T_1Y4o',
                        info:'',
                        numberOfPhotos:'1+ वीडियो',
                        type:'video',
                        icon:'https://cdn-icons-png.flaticon.com/512/1179/1179069.png'
                    },
                    {
                        title:'चरावां क्रिकेट क्लब 2021',
                        subTitle:'दिन 1',
                        link:'https://photos.app.goo.gl/u2CLyH1VJ6tctRaz7',
                        info:'',
                        numberOfPhotos:'20+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/1454/1454436.png'
                    },
                    {
                        title:'चरावां क्रिकेट क्लब 2021',
                        subTitle:'दिन 2',
                        link:'https://photos.app.goo.gl/wG5GyMbqLUGL3vXN7',
                        info:'',
                        numberOfPhotos:'40+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/1454/1454372.png'
                    },
                    {
                        title:'चरावां क्रिकेट क्लब 2021',
                        subTitle:'दिन 3',
                        link:'https://photos.app.goo.gl/84MbUeHTCKiiBNTY7',
                        info:'',
                        numberOfPhotos:'30+ फोटो',
                        type:'photo',
                        icon:'https://img-premium.flaticon.com/png/512/3007/premium/3007134.png?token=exp=1632908257~hmac=b6e2218c3cb5e706eefc7980c9ef3b88'
                    },
                    {
                        title:'चरावां क्रिकेट क्लब 2021',
                        subTitle:'दिन 4',
                        link:'https://photos.app.goo.gl/dwBtYRMJ1izpn6cp8',
                        info:'',
                        numberOfPhotos:'85+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/2160/2160064.png'
                    },
                    {
                        title:'चरावां क्रिकेट क्लब 2021',
                        subTitle:'फाइनल दिन ',
                        link:'https://photos.app.goo.gl/QJ44jiWAb6Qwvti3A',
                        info:'',
                        numberOfPhotos:'440+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/864/864763.png'
                    },
                    {
                        title:'शिवरामपुर क्रिकेट  2021',
                        subTitle:'फाइनल दिन',
                        link:'https://photos.app.goo.gl/uRW6w9j8UJiTCKRz6',
                        info:'',
                        numberOfPhotos:'40+ फोटो',
                        type:'photo',
                        icon:'https://cdn-icons-png.flaticon.com/512/3022/3022607.png'
                    },
                    {
                        title:' चरावां क्रिकेट  2018',
                        subTitle:'टूर्नामेंट और सामन्य क्लिप ',
                        link:'https://www.youtube.com/playlist?list=PL4ehj0-yhmAL034FJcQ0G_wufZSj15ARC',
                        info:'',
                        numberOfPhotos:'7+ वीडियो',
                        type:'video',
                        icon:'https://cdn-icons-png.flaticon.com/512/10/10552.png'
                    },
                    {
                        title:'होली 2021',
                        subTitle:'चरावां चौराहा होली',
                        link:'https://photos.app.goo.gl/eiiL5MQ2oCZReenH9',
                        info:'',
                        numberOfPhotos:'280+ फोटो',
                        type:'photo',

                        icon:'https://img-premium.flaticon.com/png/512/3755/premium/3755104.png?token=exp=1632908391~hmac=309b4cbb2be6a94a9a21c29b796aebbf'
                    },
                    {
                        title:'होली 2018',
                        subTitle:'चरावां चौराहा होली',
                        link:'https://www.youtube.com/playlist?list=PL4ehj0-yhmAIqe3jSpwYGDtuD7bZVuzEw',
                        info:'',
                        numberOfPhotos:'19+ वीडियो',
                        type:'video',

                        icon:'https://cdn-icons-png.flaticon.com/512/1532/1532582.png'
                    },
                    {
                        title:'होली 2017',
                        subTitle:'चरावां चौराहा होली',
                        link:'https://www.youtube.com/watch?v=awvKP0rpMrw',
                        info:'',
                        numberOfPhotos:'1+ वीडियो',
                        type:'video',

                        icon:'https://image.shutterstock.com/image-vector/happy-holi-logo-banner-icon-260nw-1662836647.jpg'
                    },

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
h4{
    font-weight: bolder;
    color: rgb(32, 32, 32);
}
.info{

}
.subTitle{
    
}
</style>