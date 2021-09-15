<template>
    <section id="quick-links ">
        <div class="container-fluid">
            <div class="row justify-content-center mt-lg-5">
                <div class="col-lg-3 col-md-4 col-4 quick-links m-lg-2 m-1 " v-for="link in links" :key="link.title">
                    <p class="fs-2 text-center w-auto">{{link.title}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    data() {
        return {
            links:[
                {title:'History', to:'',},
                {title:'Festivels', to:'',},
                {title:'About', to:'',},
                {title:'Cricket', to:'',},
                {title:'Schools', to:'',},
                {title:'Authority', to:'',},
            ]
        }
    },
    }
</script>

<style  scoped>
.quick-links{
border-radius: 14px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  10px 10px 8px #969696,
             -10px -10px 8px #ffffff;
             cursor: pointer;
             transition: .4s ease-in;
}
.quick-links:hover{
border-radius: 14px;
background: #e0e0e0;
box-shadow: inset 10px 10px 8px #969696,
            inset -10px -10px 8px #ffffff;
            font-weight: 500;
}
</style>