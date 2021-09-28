<template>
    <section id="main-heading">
       
                    <p class="ms-lg-5 ms-md-2 ms-2 mt-2 p-1">
                        <slot></slot>
                    </p>
        
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');
p{
    color: rgb(53, 53, 53);
    font-family: 'Assistant', sans-serif;
    font-size: 1.2rem;
    line-height:1.7 ;
    text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
    }

</style>