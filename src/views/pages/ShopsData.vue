<template>
  <section id="shops-data">
    <top-banner
      img="https://i.ibb.co/n1QPfzm/shop-banner.jpg"
      title="Shops List"
    ></top-banner>
    <main-heading>All Shops in Charawan</main-heading>
    <hr />
    <div class="container">
      <div class="row">
        <div class="form-check d-inline m-1 " v-for="data in filterBy" :key="data.title">
          <input
            class="form-check-input"
            type="radio"
            v:alue='data.value'
            v-model="selectedFilter"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fw-bold text-primary" for="flexRadioDefault1">
            {{data.title}}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedFilter: "",
      filterBy: [
        { title: "सभी  ", value: "all" },
        { title: "जनरल व किराना स्टोर ", value: "generalStore" },
        { title: "मेडिकल स्टोर ", value: "medicalStore" },
        { title: "डॉक्टर्स      ", value: "doctors " },
        { title: "पशु डॉक्टर       ", value: "animalDoctors " },
        { title: "मशीनरी स्टोर  ", value: "machineryStore" },
         { title: "स्कूल    ", value: "school" },
        { title: "मोबाइल स्टोर   ", value: "mobileStore" },
        { title: "प्रिंटिंग     ", value: "prinitng" },
        { title: "मोबाइल रिपेरिंग         ", value: "mobileRepair " },
        { title: "जन सेवा केंद्र  ", value: "janSewaKendra" },
        { title: "बैंक   ", value: "bank" },
       
        { title: "साइकिल रिपेयर     ", value: "cycleStore" },
        { title: "इलेक्ट्रॉनिक     ", value: "electronic" },
        { title: "कॉस्मेटिक      ", value: "cosmetic" },
        { title: "चप्पल जूता       ", value: "chappal" },
        { title: "कपडा गारमेंट्स    ", value: "garments" },
        { title: "गिफ्ट्स   ", value: "gifts" },
        { title: "कोचिंग    ", value: "coaching" },
        
        { title: "ट्रेडर्स      ", value: "traders" },
        { title: "बाइक रिपेयर       ", value: "bikeRepair" },
        { title: "बढ़ई      ", value: "carpenter" },
        { title: "लोहार       ", value: "blacksmith" },
        { title: "सुनार        ", value: "jeweller" },
        
        { title: "गैस चूल्हा रिपेयर         ", value: "gasChulhaRepair " },
        { title: "ठेला         ", value: "thela " },
        { title: "पिक अप         ", value: "pickup " },
        { title: "शराब       ", value: "wine " },
        { title: "गिमटी पान मसाला        ", value: "paanMasala " },
        { title: "कोल्डड्रिंक     ", value: "coldDrink " },
        { title: "टेलर     ", value: "tailor " },
        { title: "किराये का घर      ", value: "rentRooms " },
        { title: "किराये की दुकान     ", value: "rentShops " },
        { title: "किराये की दुकान     ", value: "rentShops " },
        { title: "श्रमिक मजदूर     ", value: "helpers " },
        { title: "प्लम्बर      ", value: "plumbers " },
        
      ],
    };
  },
};
</script>

<style scoped>
.row>* {
    width: auto;
}
</style>