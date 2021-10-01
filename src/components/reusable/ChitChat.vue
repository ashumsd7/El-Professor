<template>
 
    <div class="row chat-container">
      <div class="col-3 mt-2 ms-1">
        <img src="../../assets/icons/girl.png" class=" profile-img" alt="" srcset="" />
        
      </div>
      <div class=" col-8">
        <div class="">
          <small class="d-inline-block  text-dark fw-bold"> 
              <span class="badge bg-dark">{{name}}</span> </small
          ><small class="d-inline-block text-muted ms-5"> {{timeago}} </small>
        </div>
        <div class="row info">
            <p class="fw-bolder mt-2">{{title}}</p>
            
          <p class="detail">
           {{info}}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['name', 'title', 'info', 'detail','timeago']
};
</script>

<style  scoped>
row{
    box-sizing: border-box;
    
}
.chat-container{
    border: 1px dotted rgb(78, 77, 77);
}
.info .detail{
    margin-top: -15px;
}
.profile-img{
    border: 1px solid wheat;
    border-radius: 50%;
    box-shadow: 2px 4px 3px rgb(161, 160, 160);
}
</style>