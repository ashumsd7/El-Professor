l<template>
  <section id="history">
    <top-banner :img="bannerData.img" mobileImg='https://i.ibb.co/F56P31N/IMG-20211002-000632.jpg' :title="bannerData.title"></top-banner>
    <main-heading>चरावां का इतिहास </main-heading>

    <main-content
      >हम आपके लिए चरावां के इतिहास को लेकर एक छोटा सा वीडियो प्रस्तुत कर रहे
      हैं, अगर आपके पास इस गांव से सम्बंधित कोई भी जानकारी है तो हमें ज़रूर भेंजे
      आप चाहें वीडियो भेज सकते हैं या लिख कर भी भेज सकते हैं आपके द्वारा दी गयी
      जानकरी हम वेबसाइट पर प्रकाशित करेंगे जानकारी देने के लिए <a href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt">सम्पर्क करें</a>
      
    </main-content>
    <youtube-embed></youtube-embed>
  </section>
</template>

<script>
import YoutubeEmbed from "../../components/reusable/YoutubeEmbed.vue";
export default {
   mounted() {
    window.scrollTo(0, 0);
  },
  components: { YoutubeEmbed },
  data() {
    return {
      bannerData: {
        img: "https://i.ibb.co/3fh2g7S/history-banner.png",
        title: "History",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>