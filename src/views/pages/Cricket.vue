<template>
  <section id="cricket">
    <top-banner
      img="https://i.ibb.co/K6jby1w/rampur-Cricket-Winner.jpg"
      title="Cricket"
    ></top-banner>
    <main-heading>चरावां क्रिकेट क्लब </main-heading>
    <main-content>
      जैसा की हम सब जानते हैं कि हमारे प्यारे भारत देश में क्रिकेट को लेकर कितनी
      उत्सुकता है अगर आप किसी गांव में जाए तो लगभग हर दुसरे या तीसरे गड्ढे में
      या किसी खाली जगह को साफ़ करके कुछ बच्चे क्रिकेट खेलते नज़र आ जायेंगे कोई
      डंडे का बैट बना कर खेल रहा होगा तो कोई चंदा इकट्ठा करके नया बल्ला खरीद कर
      लाया होगा लेकिन क्रिकेट खेलता आपको मिलेगा ज़रूर इसी उत्सुकता के साथ जी रहा
      है हमारा गांव चरावां वैसे तो क्रिकेट के छोटे छोटे मैदान जो कि खेलने लायक
      बहुत हैं लेकिन पूरे गांव में दो तीन जगह ऐसी हैं जहाँ एक बेहतरीन अंडरआर्म
      क्रिकेट जिसे हम रूल आउट क्रिकेट के नाम से जानते है इसका आयोजन कर चुके हैं
      और ये क्रिकेट टूर्नामेंट हर वर्ष आयोजित होते हैं उन्ही आयोजनों में कुछ
      क्लिप्स आपको हम अभी दिखने वाले है जिन्हे आप नीचे स्क्रॉल कर के देख सकते है
      ये चौराहे पर आयाजित 2018 और 2021 टूर्नामेंट कि कुछ झलकियां है इसके अलावा
      <span class="text-danger fw-bold">चमक क्रिकेट क्लब </span> जो क्रिकेट टूर्नामेंट का आयोजन काफी वर्षो से कराते आ रहे
      हैं उनकी कुछ फोटोज या क्लिप्स जैसे हमे प्राप्त होंगी हम यहाँ प्रकाशित कर
      देंगे फ़िलहाल नीचे वीडियो का आनंद लीजिये और आपके पास चरावां या इसके आस पास
      गांव कि कोई भी क्लिप या फोटोज हो तो हमे भेजना न भूले इन सबको हम वेबसाइट पर
      प्रकाशित ज़रूर करेंगे धन्यवाद किसी भी प्रकार कि फोटो या वीडियो भेजने के लिए
     <a href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt">सम्पर्क करें</a> क्लिक करें !</main-content
    >
    <div class="container">
      <sub-heading>क्रिकेट टूर्नामेंट 2021</sub-heading>
      <a href="#2018Cricket" class="text-center d-block mt-3"
        > 2018 की क्लिप्स देखने के लिए क्लिक करें </a
      >
      <main-content>
       
      </main-content>
      <div class="row">
        <div class="col-lg-6 mt-2">
          <!-- <img class="img-fluid m-auto"  src="https://i.ibb.co/ydLgGV3/2018banner-Cricket-new.jpg" alt="cricket banner 2018" srcset=""> -->
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="row mt-2">
        <sub-heading class="mb-4">क्रिकेट टूर्नामेंट 2021 Gallery</sub-heading>
        <div
          v-for="url in videos2021"
          :key="url"
          class="col-lg-3 col-md-6 my-2 p-2"
        >
          <iframe
            width="100%"
            height="200"
            :src="url"
            title="YouTube video player"
            frameborder="2"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <sub-heading id="2018Cricket">क्रिकेट टूर्नामेंट 2018</sub-heading>
      <main-content>
       
      </main-content>
      <div class="row mt-2">
        <sub-heading class="mb-4">क्रिकेट टूर्नामेंट Gallery</sub-heading>

        <div
          v-for="url in videos2018"
          :key="url"
          class="col-lg-3 col-md-6 my-2 p-2"
        >
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
  mounted() {
    window.scrollTo(0, 0);
  },
  components: { MainContent, SubHeading },
  data() {
    return {
      // time:'March 21, 2012',
      videos2018: [
        "https://www.youtube.com/embed/kbl6677hT04",
        "https://www.youtube.com/embed/1zENI_EMIWc",
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

<style scoped>
iframe {
  border-radius: 10px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.75);
}
</style>