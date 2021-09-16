<template>
    <section id="main-heading">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 ">
                    <h2 class="ms-lg-4 ms-md-2 ms-1 mt-3">
                        <slot></slot> :
                    </h2>
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
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
h2{
    color: rgb(247, 76, 46);
    font-family: 'Bree Serif', serif;
    text-shadow: 6px -1px 7px rgba(150, 150, 150, 1);
    position: relative;
}
h2::after{
    content: '';
    position: absolute;
    width: 5rem;
    top:40px;
    left:0;
    border-bottom: 4px solid green;

}
</style>