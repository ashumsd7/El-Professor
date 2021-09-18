<template>
  <section id="cricket">
    <top-banner
      img="https://i.ibb.co/yhBgbHn/cricket-banner.jpg"
      title="Cricket"
    ></top-banner>
    <main-heading>Cricket In Charawan</main-heading>
    <main-content
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sunt
      repellendus odio corporis tempora facere, cumque inventore ea
      exercitationem porro ex excepturi corrupti aliquam neque consequatur optio
      odit! Veniam, expedita. Explicabo exercitationem adipisci beatae et
      voluptas aperiam eligendi ipsam possimus consequuntur sapiente dolorum
      numquam reiciendis veritatis perferendis alias corrupti odio, eaque libero
      id nam laudantium nobis consequatur. Numquam, voluptas?
      Repellat!</main-content
    >
    <div class="container">
      <sub-heading>Criket Tournament 2021</sub-heading>
      <a href="#2018Cricket" class="text-center d-block">Take a look of 2018 Tournament</a>
      <div class="row">
        <div class="col-lg-6 mt-2">
          <!-- <img class="img-fluid m-auto"  src="https://i.ibb.co/ydLgGV3/2018banner-Cricket-new.jpg" alt="cricket banner 2018" srcset=""> -->
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="row mt-2">
        <sub-heading class="mb-4">Tournament Gallery</sub-heading>
        <div v-for="url in videos2021" :key="url" class="col-lg-3 col-md-6">
          <iframe
            width="100%"
            height="200"
            :src="url"
            title="YouTube video player"
            frameborder="2"
                   ></iframe>
        </div>
      </div>

      <sub-heading id="2018Cricket">Criket Tournament 2018</sub-heading>
      <div class="row mt-2">
        <sub-heading class="mb-4">Tournament Gallery</sub-heading>

         <div v-for="url in videos2018" :key="url" class="col-lg-3 col-md-6">
          <iframe
            width="100%"
            height="200"
            :src="url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainContent from "../../components/reusable/slots/MainContent.vue";
import SubHeading from "../../components/reusable/slots/SubHeading.vue";
export default {
  components: { MainContent, SubHeading },
  data() {
    return {
      videos2018: [
          'https://www.youtube.com/embed/kbl6677hT04',
          'https://www.youtube.com/embed/1zENI_EMIWc'

      ],
      videos2021: [
        "https://www.youtube.com/embed/tg4qNbF_KUA",
        "https://www.youtube.com/embed/ll9NOyqrWbA",
        "https://www.youtube.com/embed/1spkXqUybDo",
        "https://www.youtube.com/embed/Yspi4LlPnKs",
        "https://www.youtube.com/embed/zMgRDrfVv2U",
        "https://www.youtube.com/embed/Qxqw0qMxduo",
        "https://www.youtube.com/embed/IxmXJlOMgak",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>