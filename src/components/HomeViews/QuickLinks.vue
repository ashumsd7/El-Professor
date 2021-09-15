<template>
    <section id="quick-links">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-4 col-4 quick-links m-lg-2 m-2 " v-for="i in 12" :key="i">
                    <p class="display-6 text-center">History</p>
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
                {title:'', to:'',}
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
             transition: .3s;
}
.quick-links:hover{
border-radius: 14px;
background: #e0e0e0;
box-shadow: inset 10px 10px 8px #969696,
            inset -10px -10px 8px #ffffff;
            font-weight: bolder;
}
</style>