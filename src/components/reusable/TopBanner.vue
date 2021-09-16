<template>
<div class="container-fluid banner">
<img :src="img" class="img-fluid" alt="" srcset="">
</div>
</template>

<script>
    export default {
        props:['img','title']
    }
</script>

<style scoped>
.banner img{
    width: 100%;
    height: 20rem;
    /* background: url('../../assets/img/history_vill.jpg') no-repeat center;
    background-size: cover; */
}
</style>