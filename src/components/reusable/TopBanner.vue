<template>
<div class=" banner d-none d-md-block">
<img :src="img" class="img-resive" alt="" srcset="">
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
    height: 30rem;
    /* background: url('../../assets/img/history_vill.jpg') no-repeat center;
    background-size: cover; */
}
</style>