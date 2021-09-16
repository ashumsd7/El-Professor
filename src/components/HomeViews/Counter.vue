<template>
  <div id="counter">
      <section class="counter-section">
          <div class="container">
              <div class="row text-center">
                  

                  
                  <div v-for="item in counterData" :key="item.title" class="col-md-2 col-6 mb-lg-0 mb-md-0 mb-5">
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