l<template>
  <section id="history">
    <top-banner :img="bannerData.img" :title="bannerData.title"></top-banner>
    <main-heading>Elections in Charawan</main-heading>
    <div class="container">
      <div class="row mt-lg-3 mt-2 ">
        <div class="col-lg-4 col-6">
            <h4>        Select Year</h4>
        </div>
        <div class="col-lg-4 col-6">
                
          <select
            class="form-select"
            bg-dark
            aria-label="Default select example"
          >
            <option selected>Select Year</option>
            <option value="1">2021</option>
            <option value="2">2015</option>
            <option value="3">2010</option>
          </select>
        </div>
      </div>
    </div>

    <main-content
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic
      eligendi deserunt fuga distinctio eius blanditiis sit ducimus.
      Reprehenderit quaerat placeat earum. Porro accusamus voluptatibus laborum.
      A illum et repellat dolores fuga natus aperiam repellendus omnis tenetur
      earum nihil consectetur voluptatem reiciendis minus aspernatur, alias vel
      dolorem labore ea. Vero eligendi enim illum accusantium consequuntur nam
      officiis assumenda libero beatae cum! Est corporis vitae quis perspiciatis
      aperiam saepe ex quod culpa pariatur consequatur soluta, mollitia nisi qui
      adipisci architecto maxime dolorem eum quas sequi ipsa, molestias harum
      rem. Expedita asperiores magnam in error perferendis. Inventore quod,
      voluptas veritatis illo debitis cumque aliquam nam illum animi reiciendis
      sequi omnis magni recusandae nulla, modi sunt excepturi dolore. Minima
      quos quisquam omnis vel fugiat! Quae sit vero dolores repellendus, quod ab
      impedit quisquam libero voluptatibus veritatis minima soluta molestias quo
      laboriosam accusamus alias rerum dolore. Error est aut optio repellat
      deserunt maxime vitae iusto facilis laborum provident delectus,
      consequatur odio voluptatibus itaque asperiores nemo dolorum incidunt? A
      distinctio placeat fugit pariatur laboriosam quae ex perspiciatis, quo
      unde optio numquam officiis soluta minus nemo amet repellat cupiditate
      quasi reiciendis. Minima odit quo incidunt sit eos, numquam necessitatibus
    </main-content>
    <sub-heading>Year 2015</sub-heading>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bannerData: {
        img: "https://images.livemint.com/img/2021/04/04/600x338/764754817dad452eadd18e908443f3ac-764754817dad452eadd18e908443f3ac-1_1617281784094_1617553913337.jpg",
        title: "History",
      },
    };
  },
  computed: {
    getElectionData() {
      return this.$store.getters.getElectionData;
    },
  },
};
</script>

TopBanner
<style lang="scss" scoped>
</style>