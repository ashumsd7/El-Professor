<template>
<section id="story">
    <div class="story-section text-center mt-2 mt-lg-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text-content">
                         <h1>चरावां  गाँव भारत के उत्तर प्रदेश में अयोध्या जिले की बीकापुर तहसील में स्थित है। यह उप-जिला मुख्यालय बीकापुर से 9 किमी दूर स्थित है।</h1>
                       <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum possimus nesciunt adipisci dicta eos. Temporibus, doloremque? Natus tempore sint magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, similique.</p> -->
                       <button class="btn btn-info mt-4 ">
                          <router-link to='/itihas'> ...और जाने </router-link>
                       </button>
                    </div>
                </div>
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
.story-section{
    width: 100%;
    height: 28.1rem;
    background: url('https://i.ibb.co/T2xCBD8/ch1.png') no-repeat center;
    background-size: cover;
    /* -webkit-filter: grayscale(100%); 
  filter: grayscale(100%); */
  
   text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
  

    padding-top: 100px;


}
.story-section h1{
    color:#fff;
    font-weight: bolder;
}
.main-btn{
    border-radius: 9px;
background: #e0e0e0;
box-shadow: inset 5px 5px 10px #acacac,
            inset -5px -5px 10px #ffffff;
}
@media (max-width:768px){
    .story-section{
        height: auto;
       padding: 3rem 0;
    }
}
</style>