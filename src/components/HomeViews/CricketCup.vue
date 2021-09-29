<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <div class="col-lg-4 col-md-6 col-12">
        <img
          class="img-fluid"
          src="https://i.ibb.co/Fggft1c/cricket-cup.jpg"
          alt=""
          srcset=""
        />
      </div> -->
      <div class="col-lg-12 col-md-12 col-12 text-center mt-4 mt-lg-0">
        <h2 class="mb-lg-5">|| चरावां क्रिकेट क्लब || </h2>
        <p  class="mt-lg-0 mt-4 mb-lg-5">चरावां गांव में क्रिकेट के दो क्लब है एक 
     <span class="text-danger">       चरावां क्रिकेट क्लब</span> और दूसरा <span class="text-danger"> चमक क्रिकेट क्लब</span> ये क्लब क्रिकेट टूर्नामेंट का 
            आयोजन हर वर्ष कराते हैं जिसमे दूर दूर से आयी हुई क्रिकेट टीमें हिस्सा लेती है
             जहाँ चरावां क्रिकेट क्लब क्रिकेट टूर्नामेंट का आयोजन दो बार करा चुका है तो वही
              चमक क्रिकेट क्लब के द्वारा क्रिकेट टूर्ना मेन्ट  का आयोजन विगत कई वर्षो से होता रहा है 
             अगले सत्र का टूर्नामेंट आने वाले नववर्ष के पहले या दूसरे महीने में होता है</p>
        <image-slider
          :img1="sliderData[0]"
          :img2="sliderData[1]"
          :img3="sliderData[2]"
          :img4="sliderData[3]"
          :img5="sliderData[4]"
          :img6="sliderData[5]"
          :img7="sliderData[6]"
          :img8="sliderData[7]"
          :img9="sliderData[8]"
          :img10="sliderData[9]"
          :img11="sliderData[10]"

        ></image-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderData: [
        "https://i.ibb.co/DMXLKrX/cri-khabbu.jpg",
        "https://i.ibb.co/KqgnqFL/cric-img1.jpg",
        "https://i.ibb.co/rx8gvP6/cric-img2.jpg",
        "https://i.ibb.co/4NsMMSZ/cric-img4.jpg",
        'https://i.ibb.co/92NgYs1/cric-img5.jpg',
        'https://i.ibb.co/ZBN7qYR/cric-img6.jpg',
        'https://i.ibb.co/svX6vq0/cric-img7.jpg',
        'https://i.ibb.co/GH9D2Zp/cric-img8.jpg',
        'https://i.ibb.co/j6nhXnr/cric-img9.jpg',
        'https://i.ibb.co/VLdGjnq/cric-img11.jpg'



      ],
    };
  },
};
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
img{
    box-shadow: 6px 9px 17px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 9px 17px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 9px 17px -3px rgba(0,0,0,0.75);
border-radius: 25% 32% 32% 32% / 48% 51% 25% 25% ;
/* border-radius: 20px; */
}
h2{
    font-family: 'Aclonica', sans-serif;
    position: relative;
    font-weight: bold;
    color: rgb(0, 100, 8);
}
p{
    font-family: 'Aclonica', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
}
h2::after{
    content: '';
    position: absolute;
    width: 100%;
    top:40px;
    left:0;
    border-bottom: 4px solid rgb(0, 0, 0);
    text-align: center;

margin-bottom: 15px;
}
</style>