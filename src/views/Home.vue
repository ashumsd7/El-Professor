<template>
  <div class="home">
    <home-glance></home-glance>

    <counter></counter>
    <!-- <quick-links></quick-links> -->
    <about-glance></about-glance>
    <explain-banner
      :winner="data.winner"
      :winnerImg="data.winnerImg"
      :position="data.type"
      :about="data.about"
      :key="data.winner"
      v-for="data in showData[0].data"
    ></explain-banner>
    <!-- <authority-glance></authority-glance> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGlance from "../components/HomeViews/HomeGlance";
// import QuickLinks from "../components/HomeViews/QuickLinks";
import AboutGlance from "../components/HomeViews/AboutGlance";
import AuthorityGlance from "../components/HomeViews/AuthorityGlance.vue";
import Counter from "../components/HomeViews/Counter.vue";

import ExplainBanner from "../components/reusable/ExplainBanner.vue";

export default {
  name: "Home",
  components: {
    HomeGlance,
    // QuickLinks,
    AboutGlance,
    AuthorityGlance,
    ExplainBanner,
    Counter,
  },
  data() {
    return {
      showData: [],
    };
  },
  methods: {
    changeData(year) {
      let filteredData = this.getElectionData.filter((val, idx) => {
        return year == val.year;
      });
      this.showData = filteredData;
      console.log(this.showData);
    },
  },
  computed: {
    getElectionData() {
      return this.$store.getters.getElectionData;
    },
  },
  created() {
    this.changeData(2021);
  },
};
</script>
<style  scoped>
</style>
