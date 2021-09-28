<template>
    <section id="main-heading">

                    <h4 class="ms-lg-5 ms-md-3 ms-2 mt-4">
                        <slot></slot> :
                    </h4>

    </section>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
h4{
    color: rgb(16, 194, 0);
    font-family: 'Bree Serif', serif;
    text-shadow: 6px -1px 7px rgba(150, 150, 150, 1);
    position: relative;
}
h4::after{
    content: '';
    position: absolute;
    width: 5rem;
    top:35px;
    left:0;
    border-bottom: 4px solid rgb(0, 0, 0,.5);
    margin-bottom: 10px;

}
</style>