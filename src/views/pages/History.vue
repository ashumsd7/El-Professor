l<template>
  <section id="history">
    <top-banner :img="bannerData.img" :title="bannerData.title"></top-banner>
    <main-heading>चरावां का इतिहास </main-heading>
    
    <main-content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic eligendi deserunt fuga distinctio eius blanditiis sit ducimus. Reprehenderit quaerat placeat earum. Porro accusamus voluptatibus laborum. A illum et repellat dolores fuga natus aperiam repellendus omnis tenetur earum nihil consectetur voluptatem reiciendis minus aspernatur, alias vel dolorem labore ea. Vero eligendi enim illum accusantium consequuntur nam officiis assumenda libero beatae cum! Est corporis vitae quis perspiciatis aperiam saepe ex quod culpa pariatur consequatur soluta, mollitia nisi qui adipisci architecto maxime dolorem eum quas sequi ipsa, molestias harum rem. Expedita asperiores magnam in error perferendis. Inventore quod, voluptas veritatis illo debitis cumque aliquam nam illum animi reiciendis sequi omnis magni recusandae nulla, modi sunt excepturi dolore. Minima quos quisquam omnis vel fugiat! Quae sit vero dolores repellendus, quod ab impedit quisquam libero voluptatibus veritatis minima soluta molestias quo laboriosam accusamus alias rerum dolore. Error est aut optio repellat deserunt maxime vitae iusto facilis laborum provident delectus, consequatur odio voluptatibus itaque asperiores nemo dolorum incidunt? A distinctio placeat fugit pariatur laboriosam quae ex perspiciatis, quo unde optio numquam officiis soluta minus nemo amet repellat cupiditate quasi reiciendis. Minima odit quo incidunt sit eos, numquam necessitatibus harum minus, fugit, reprehenderit officia voluptate autem.</main-content>
    <youtube-embed></youtube-embed>
  </section>
</template>

<script>
import YoutubeEmbed from '../../components/reusable/YoutubeEmbed.vue'
export default {

components:{YoutubeEmbed},
    data() {
        return {
            bannerData:{
                img:'https://i.ibb.co/GMqk6Xh/history-vill.jpg',
                title:'History'
            }
        }
    },
};
</script>

TopBanner
<style lang="scss" scoped>
</style>