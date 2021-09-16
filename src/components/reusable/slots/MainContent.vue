<template>
    <section id="main-heading">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <p class="ms-5 mt-1">
                        <slot></slot>
                    </p>
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
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap');
p{
    color: rgb(53, 53, 53);
    font-family: 'Assistant', sans-serif;
    font-size: 1.2rem;
    line-height:1.7 ;}

</style>