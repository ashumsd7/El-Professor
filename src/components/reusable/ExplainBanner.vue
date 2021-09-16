<template>
<section id="explainer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-12 mb-lg-2 img-conatiner text-center">
                 <img class="img-fluid" src="https://images.financialexpress.com/2020/09/kartik-kala-1.jpg" alt="">
                 <h4 class="position mt-2">Gram Pradhan</h4>
               <p class="name">Mr. Anil Kumar</p>
               <p class="timings text-muted">2012-2013</p>
            </div>
            <div class="col-lg-7 col-12 about">
               
               <p class="about-text p-2">Lorem ipsum dolor sit amet consectetur, 
                   adipisicing elit. Expedita, alias. Laboriosam quasi rem
                    aliquam quod dicta quisquam, quos pariatur illo dolore
                     repudiandae, placeat assumenda saepe officiis voluptatibus
                      animi! Id voluptatum eius beatae nostrum, et fugiat ratione 
                      deleniti provident minus omnis ipsam molestias odio minima cum
                       maiores veritatis! Aperiam amet, exercitationem quia tempore 
                       debitis obcaecati nulla magni consequuntur quas error illum 
                       voluptates excepturi recusandae! Sit voluptatum vitae ut illum!
                        Necessitatibus nihil porro iure. Accusantium architecto aliquam 
                        nam voluptatem, qui pariatur odit accusamus expedita quae cum atque 
                        ea ut molestias. Atque harum ipsum consequatur illum cupiditate?
                    Nemo magni incidunt necessitatibus nostrum molestiae?</p>

            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap');
.img-conatiner img{
    border-radius: 30% 70% 67% 33% / 46% 41% 59% 54% ;
 box-shadow: 9px 14px 20px -6px rgba(87,92,86,0.75);
-webkit-box-shadow: 9px 14px 20px -6px rgba(87,92,86,0.75);
-moz-box-shadow: 9px 14px 20px -6px rgba(87,92,86,0.75);
}
.about-text{
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    text-shadow: 3px 3px 6px rgb(187, 186, 186);
    
 
}
.name{
color: rgb(255, 63, 15);
font-weight: bold;
margin-top: -10px;
font-family: 'Bitter', serif;
}
.position{
    color: cornflowerblue;
    font-weight: bold;
    font-family: 'Bitter', serif;
    

}
.timings{
    color: rgb(32, 32, 32);
    font-weight: bold;
    margin-top: -15px;
}
</style>