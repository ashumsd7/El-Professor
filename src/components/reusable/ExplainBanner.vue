<template>
<section id="explainer">
    <div class="container mt-lg-5">
        <div class="row">
            <div class="col-lg-4 col-12 mt-lg-2 img-conatiner text-center">
                 <img class="img-fluid" :src="winnerImg">
               <h4 class="name mt-2">{{winner}}</h4>
                 <p class="position ">{{position}}</p>
               <p class="timings text-muted">2021</p>
            </div>
            <div class="col-lg-7 col-12 about">
               
               <p class="about-text p-2">{{about}}</p>

            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        props:['winnerImg', 'about', 'position', 'winner']
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
@media (max-width:800px){
    .img-conatiner img{
    width: 300px;
    height: 300px;
}
}
</style>