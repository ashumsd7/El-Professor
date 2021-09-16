<template>
   <section id="authority">
       <div class="container">
           <div class="row">
               <div class="col-lg-3 col-6" v-for="i in 6" :key="i">
                   <div class="authority-conatiner text-center m-2">
                       <div class="authority-img">
                           <img class="img-fluid" src="https://images.financialexpress.com/2020/09/kartik-kala-1.jpg" alt="">
                       </div>
                       <div class="authority-about ">
                           <p class="authority-name mt-lg-3 mt-3">Dr. Ab j Abdul Kalam</p>
                           <p class="authority-position">Gram Pradhan (2012-2013)</p>
                           <p class="authority-contact"><a class="text-decoration-none" href="tel:++91 123465697">Call Now</a></p>
                       </div>

                   </div>
               </div>
           </div>
       </div>
   </section>
</template>

<script>
    export default {
        authorityData:[
            {name:'', position:'', timings:'', img:'', contact:''}
        ]
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yantramanav:wght@500&display=swap');
.authority-img img{
    width: 190px;
    height: 180px;
  border-radius: 30% 70% 67% 33% / 46% 41% 59% 54% ;
    
   

}
.authority-about p{
    margin-top: -15px;
}
.authority-about .authority-name{
 font-family: 'Yantramanav', sans-serif;
 font-weight: 600;
 font-size: 1rem;
}
.authority-position{
    color: chocolate;
    font-weight: 500;
    font-size: .8rem;
}
.authority-contact{
    font-weight: bold;
    color: rgb(156, 104, 252);
    font-weight: 400;
}

</style>