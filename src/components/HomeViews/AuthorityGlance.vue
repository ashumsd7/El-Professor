<template>
    <div class="container">
        <div class="row justify-content-center text-center mb-3">
       


          
             <div class="col-lg-4  col-md-6 col-12 mt-3 authority-container" :key="data.name" v-for="data in authorityData">
                 <div class="row">
                     <div class="col-7">
                          <img  class="img-fluid mb-3  authority-img mt-3" :src="data.img" alt="" srcset="">
                     </div>
                     <div class="col-5 info">
                         <p class="name">{{data.name}}
</p>
               <p class="position">{{data.post}}</p>
               <p class="timings">{{data.year}} </p>
                <span class="badge bg-dark call-badge">
                  <a class="text-decoration-none text-white" href="tel:+">   
                      <img class="me-1" src="../../assets/telephone.png" alt="" srcset="" />
                      फोन करें </a></span>
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
              authorityData:  [{
                    name:'अनिल कुमार',
                    post:'ग्राम प्रधान चरावां ',
                    year:'2021- अब तक ',
                    number:'',
                    img:'https://i.ibb.co/Vw20jjS/anil005018092021.jpg'

                },
                {
                    name:'अनीस तिवारी',
                    post:'बी डी सी चरावां ',
                    year:'2021- अब तक ',
                    number:'',
                    img:'https://i.ibb.co/JQNw2XM/anil003918092021.jpg'

                },
                {
                    name:'अमित मौर्या ',
                    post:'कोटेदार चरावां ',
                    year:'2021- अब तक ',
                    number:'',
                    img:'https://i.ibb.co/5FGTrtc/mauryaamit.jpg'

                }
              ]
            }
        },
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap');
.authority-container{
    background: rgb(233, 232, 232);
    border-right: 1px dotted black;
    
     box-shadow: 7px 7px 14px #bebebe, -7px -7px 14px #ffffff;
     /* border-radius: 20px; */
}
.authority-img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
        /* border-radius: 30% 70% 67% 33% / 46% 41% 59% 54% ;
 box-shadow: 9px 14px 20px -6px rgba(87,92,86,0.75);
-webkit-box-shadow: 9px 14px 20px -6px rgba(87,92,86,0.75);
-moz-box-shadow: 9px 14px 20px -6px rgba(87,92,86,0.75); */
}

img{

}
.info{
    margin-top: 50px;
}

.name{
color: rgb(255, 63, 15);
font-weight: bold;
/* margin-top: -10px; */
font-family: 'Bitter', serif;
font-size: 1.4rem;
text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
}
.position{
    color: cornflowerblue;
    font-weight: bold;
    font-family: 'Bitter', serif;
    /* margin-top: -10px; */
    

}
.timings{
    color: rgb(32, 32, 32);
    font-weight: bold;
    /* margin-top: -15px; */
}
.call-badge{
margin-top: -40px;
}
</style>