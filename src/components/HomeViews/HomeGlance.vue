<template>
  <div class="glance-container m-auto">
    <div class="container mt-5 text-center">
      <p class="heading display-3"><span class="welcome-text">Welcome to</span>
          <span class="d-block village-name ">
          <span class="display-1 "> C</span>
          <span class="display-1 "> H</span>
          <span class="display-1 "> A</span>
          <span class="display-1 "> R</span>
          <span class="display-1 "> A</span>
          <span class="display-1 "> W</span>
          <span class="display-1 "> A</span>
          <span class="display-1 "> N</span>

          </span> 
      </p>
      <small class="heading-declaration">| चरावां में आपका स्वागत है | </small>
     <div class="row">
        <form action="" @submit.prevent="searchItems">

          

        <!-- <input  v-model="searhedKey" class="form-control form-control-md d-inline" type="text" placeholder="Search in Charawan" aria-label=".form-control-md example"> -->
        <!-- <button type="submit"  class="btn btn-success search-btn d-block m-auto mt-2">दुकानों के नंबर खोजें</button> -->
        <button class="btn btn-success d-block  m-auto mt-2">
        <img src="../../assets/searching.png" alt="" srcset="" class="me-1" /> <router-link class="text-decoration-none text-white"  to="/find">दुकानों के नंबर खोजें</router-link>
      </button>
        </form>
          </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.glance-container {
  /* background: url('https://www.ynotpics.com/wp-content/uploads/2017/07/clouds-fromhill-view.jpg') no-repeat center;
    background-size: cover;
    width: 100%;
    height: 25rem; */
    /* height: 50vh; */
}
.village-name{
     /* background-color: rgb(0, 185, 15); */
     /* width: 50%; */
     /* margin: auto; */
     /* border-radius: 47% 53% 48% 52% / 35% 31% 69% 65% ; */
     /* animation: chnageBorder 8s linear 1s infinite alternate; */
}
.form-control,.search-btn{
  width:250px;
  display: block;
}
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

@keyframes chnageBorder {
    0%{
       border-radius: 47% 53% 48% 52% / 35% 31% 69% 65% ;
    }
    20%{
        border-radius: 47% 53% 48% 52% / 70% 29% 71% 30% ;
    }
    40%{
        border-radius: 69% 31% 26% 74% / 39% 29% 71% 61% ;
    }
    60%{
        border-radius: 82% 18% 86% 14% / 39% 72% 28% 61% ;
    }
    80%{
        border-radius: 88% 12% 29% 71% / 22% 72% 28% 78% ;
    }
    100%{
        border-radius: 47% 53% 48% 52% / 70% 66% 34% 30% ;
    }
}
.heading {
  color: gray;
}
.heading span span {
  font-family: "Maven Pro", sans-serif;
  color: rgb(44, 43, 43);
  transition: all 0.3s;
  margin-left: -25px;
}
@media (max-width: 991px){
 .heading span span {
  margin-left: -10px;
}  
}
span.welcome-text{
    color: rgb(255, 71, 71);
}
.heading span:first-child {
  margin-left: 0px;
}
.heading span:hover {
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.heading-declaration {
  font-size: .8rem;
  font-family: "Dancing Script", cursive;
  color: rgb(0, 185, 15);
}

.heading .heading-declaration  {
  font-family: "Maven Pro", sans-serif;
  color: rgb(1, 131, 23);
}
</style>