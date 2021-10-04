<template>
  <div class="static-link-section">
    <div class="section-title text-center mb-2 mt-3 position-relative ">
      <h4 class="fw-bolder bg-primary rounded-3 p-2 text-white">
        <img
          src="../../assets/link.png"
          height="25"
          alt=""
          srcset=""
          class="me-1"
        />
        महत्वपूर्ण लिंक
      </h4>
    </div>
    <div class="links_container mt-5">
      <ul class="list-unstyled">
        <li class="ms-2 mb-4 mt-2 text-dark fw-bold" :key="data.link" v-for="data in staticLinksData">
          <img
            src="../../assets/new.jpg"
            height="25"
            alt=""
            srcset=""
            class="me-1"
          />
          <a :href="data.link" class="text-decoration-none">
           {{data.title}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            staticLinksData:[
                {title:'कोरोना की वैक्सीन 💉 के लिए रजिस्ट्रेशन करें  ', link:'https://www.cowin.gov.in/'},
                // {title:'बीकापुर हैडिल KLK फीडर लाइट 💡  की जानकरी के लिए टेलीग्राम ग्रुप से जुड़ें', link:''},
                {title:'वेबसाइट सम्ब्नधित जानकारी और फीडबैक के लिए के लिए वेबसाइट हेल्प डेस्क से जुड़ें  ', link:'https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt'},
                {title:'चरावां के ओफिसिअल व्हाट्सप्प ग्रुप से जुड़ें', link:'https://chat.whatsapp.com/EgAW295Pr2i6fQWPBlr98I'},
                {title:'सरकारी नौकरी की जानकरी के लिए वेबसाइट देखें ', link:'https://www.sarkariresult.com/'},
                {title:'जनसुनवाई-समाधानपोर्टल पर अपनी शिकयत दर्ज़ करें ', link:'http://jansunwai.up.nic.in/'},
            ]
        }
    },
};
</script>

<style  scoped>
.links_container {
  max-height: 450px;
  overflow-y: scroll;
  border: 2px solid black;
  margin-top: 10px;
  border-bottom: none;
  border-right: none;
  /* border-top-width: 200px; */
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(38, 2, 71);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>