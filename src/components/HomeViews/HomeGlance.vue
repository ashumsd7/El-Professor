<template>
  <div class="glance-container m-auto">
    <div class="container mt-5 text-center">
      <p class="heading display-3">Welcome to 
          <span class="display-1"> C</span>
          <span class="display-1"> H</span>
          <span class="display-1"> A</span>
          <span class="display-1"> R</span>
          <span class="display-1"> A</span>
          <span class="display-1"> W</span>
          <span class="display-1"> A</span>
          <span class="display-1"> N</span>
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
}
.heading{
    color: gray;
    
}
.heading span {
  font-family: "Maven Pro", sans-serif;
  color: black;
  transition: all .3s;
  margin-left: -25px;
}
.heading span:first-child{
    margin-left: 0px;
}
.heading span:hover{
     color: rgb(255, 62, 62);
     cursor: pointer;
}
.heading-declaration{
font-size: 1.5rem;
font-family: 'Dancing Script', cursive;

}
.heading .heading-declaration span{
      font-family: "Maven Pro", sans-serif;
}
</style>