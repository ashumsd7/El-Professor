<template>
  <div class="glance-container m-auto">
    <div class="container mt-5 text-center">
      <p class="heading display-3"><span class="welcome-text">Welcome to</span>
          <span class="d-block ">
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
      <p class="heading-declaration">This is the official website of village Charawan.</p>
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
.heading {
  color: gray;
}
.heading span span {
  font-family: "Maven Pro", sans-serif;
  color: black;
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
  color: rgb(255, 62, 62);
  cursor: pointer;
}
.heading-declaration {
  font-size: 1.5rem;
  font-family: "Dancing Script", cursive;
  color: rgb(0, 185, 15);
}

.heading .heading-declaration  {
  font-family: "Maven Pro", sans-serif;
  color: rgb(1, 131, 23);
}
</style>