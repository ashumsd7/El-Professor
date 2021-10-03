<template>
<div class=" banner ">
<img :src="img" class="img-resive d-none d-md-block" alt="" srcset="">
<img :src="mobileImg" class="img-resive d-block d-md-none" alt="" srcset="">
</div>
</template>

<script>
    export default {
        props:['img','title','mobileImg']
    }
</script>

<style scoped>
.banner img{
    width: 100%;
    height: 25rem;

}
</style>