<template>
  <div id="counter">
      <section class="counter-section">
          <div class="container">
              <div class="row text-center">
                  

                  
                  <div v-for="item in counterData" :id="item.title" :key="item.title" class="col-md-2 col-6 mb-lg-0 mb-md-0 mb-5">
                      <h2>
                          <span id="count1">
                              <img :src="require(`../../assets/icons/${item.img}.png`)" alt="" srcset="">
                              <VueJsCounter thousand="," :end="item.count"></VueJsCounter>
                          </span>
                      </h2>
                     <p><strong>{{item.title}}</strong></p> 
                  </div>
                  <small class="text-center text-danger fw-bold mb-3 d-block text-muted">*Data as per 2011 census and expcted in 2021.</small>





                  
              </div>
          </div>
      </section>
      <div class="text-center">

       <button class="donate-btn"><router-link class="text-white text-decoration-none" to="/donate">Donate to Support</router-link></button>
      </div>
  </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter'
    export default {
         components: {
            VueJsCounter 
        },
        data() {
            return {
                 counterData:[
                     {title:'Homes', count:313,img:'home'},
                     {title:'Population', count:2000,img:'population'},
                     {title:'Male', count:854,img:'man'},
                     {title:'Female', count:807,img:'girl'},
                     {title:'Children', count:211,img:'child'},
                     {title:'Area (hc)', count:161.72,img:'area'},
                 ]
            }
        },
        methods: {
            startCounter(id,start,end,duration){

            }
        },
        created() {

            
        },
        
    }
</script>

<style  scoped>
.donate-btn{
    /* border-radius: 47% 53% 48% 52% / 35% 31% 69% 65% ; */
    border-radius: 20px;
    font-size: 1.1rem;
    background-color: rgb(255, 71, 71);
    color: white;
    font-weight: bold;
    padding: .4rem;
    outline: none;
    border: none;
    /* animation: chnageBorder 8s linear 1s infinite alternate; */

}
.counter-section{
    background-color: var(--primary-color);
    padding: 2.5rem 0;
    text-shadow: 4px 4px 6px rgba(150, 150, 150, 1);
}
.counter-section p{
    color: var(--white-color);
    text-transform: uppercase;
}
h2{
    color: rgb(247, 84, 63);
    
}
</style>