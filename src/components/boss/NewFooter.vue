<template>
  <div class="container-fluid">
    <div class="row">
     
      <div class="col-lg-2 col-4 new-footer ">
        <div class="row">
          <a href="https://www.facebook.com/meracharawanfb"
            ><img
              width="32"
              height="32"
              src="../../assets/facebook.png"
              alt=""
              srcset=""
            />
            फेसबुक
          </a>
        </div>

        <div class="row">
          <a href="mailto:meracharawan@gmail.com"
            ><img
              width="32"
              height="32"
              src="../../assets/gmail.png"
              alt=""
              srcset=""
            />मेल करें
          </a>
        </div>

        <div class="row">
          <a href="https://twitter.com/meracharawan"
            ><img
              width="32"
              height="32"
              src="../../assets/twitter.png"
              alt=""
              srcset=""
            />
            ट्विटर</a
          >
        </div>

        <!-- <div class="row">
          <a href="https://instagram.com/meracharawan"
            ><img
              width="32"
              height="32"
              src="../../assets/instagram.png"
              alt=""
              srcset=""
            />इंस्टाग्राम
          </a>
        </div> -->

        <div class="row">
          <a href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
            ><img
              width="32"
              height="32"
              src="../../assets/whatsapp.png"
              alt=""
              srcset=""
            />
            व्हाट्सप्प
          </a>
        </div>
      </div>

      <div class="col-lg-6  col-8 mt-2">
        <router-link class="navbar-brand" to="/"
          ><img
            width="200"
            height="60"
            src="https://i.ibb.co/Ht6hkb4/IMG-20210930-004544.jpg"
            alt=""
            srcset=""
        /></router-link>

        <p class="text-muted text-white mt-2">
          लगभग 2000 से ज्यादा आबादी वाला 5 पुरवा का ये गांव उत्तर प्रदेश के
          अयोध्या जिले के बीकापुर तहसील के 9 किलोमीटर दक्षिण पूर्व की ओर  बसा है
          चरावां के पडोसी गांव बेनीगद्दोपुर ,बरांव, कोदैला हैं चरावां में लगभग
          350 से ज्यादा घर है। चरावां के प्रधान जो अभी 2021 के आम चुनाव में चुने
          गए हैं <span class="text-white fw-bold">अनिल कुमार जी</span> है 
          बी डी सी का पद <span class="text-white fw-bold">अनीस तिवारी जी </span>  के पास है तो
          वहीँ कोटा सम्बंधित काम 
          <span class="text-white fw-bold">अमित मौर्या जी </span>सम्हाल रहे हैं चरावां एक चौराहा
          है जिसके चार रास्ते क्रमशः रामपुर भगन बीकापुर धर्मगंज और जानेबाज़ार को
          जोड़ते है |
        </p>
      </div>

      <div class="col-lg-4 col-12 text-center mt-lg-5 ">
         
                <a class="  d-inline   text-primary" href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
              ><img
           
            src="../../assets/help.png"
            alt=""
            srcset=""
          />
          <!-- गांव में सहयोग दें  -->
           </a>
          
       
    
                <a class=" d-inline  text-primary" 
                href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt"
              ><img
          
            src="../../assets/feedback.png"
            alt=""
            srcset=""
          />
          <!-- वेबसाइट कैसी लगी ? -->
          </a>
          
         
        

      
                <router-link class=" d-inline text-primary" to="/donate"
              ><img
            width="32"
            height="32"
            src="../../assets/helping.png"
            alt=""
            srcset=""
          /> 
          <!-- वेबसाइट बनाने वाले का सहयोग करें -->
            </router-link>
          
         <br>
         <a class="mt-3 d-block text-white" 
         href="https://drive.google.com/file/d/1jMZus9iSCuFFzbjBknGxFMchE-_4mQC1/view?usp=sharing"><img
           
            src="../../assets/android.png"
            alt=""
            srcset=""
          /> एंड्राइड ऐप  </a>
         <!-- <hr> -->
         <!-- <a href="https://drive.google.com/file/d/1jMZus9iSCuFFzbjBknGxFMchE-_4mQC1/view?usp=sharing" 
          >Download Link</a> -->
        
      </div>
    </div>

        <div
        class="
          col-12
       
          strip
          justify-content-center
          align-items-center
          fw-bold
          text-dark text-center
          bg-info
        "
      >
        © चरावां 2021 <a class="text-primary" href="https://charawan.in">charawan.in</a>
        <router-link class="text-dark" to="/termsAndConditions">नियम  और  शर्तें  </router-link>
      </div>

     
    
        <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps?q=Charawan%20Cricket%20Ground%2C%20Charawan%2C%20Uttar%20Pradesh%2C%20India&z=17&t=k&ie=UTF8&output=embed"
              ></iframe>
            </div>
          </div>

      
          
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.container-fluid {
  background: rgb(37, 37, 37);
}
a {
  margin-left: 0.5rem;
  margin-top: 1rem;
  color: wheat;
}
a img {
  margin-right: 10px;
}
.new-footer{
    margin-bottom: 40px;
}
.mapouter {
  /* position: relative; */
  /* text-align: right; */
  width: auto;
  height: 400px;
  /* overflow-x: hidden; */
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width:auto;
  height: 400px;
}
.gmap_iframe {
  height: 400px !important;
}
</style>