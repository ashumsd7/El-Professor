<template>
  <section id="shops-data">
    <top-banner
      img="https://i.ibb.co/n1QPfzm/shop-banner.jpg"
      title="Shops List"
    ></top-banner>
    <main-heading>All Shops in Charawan </main-heading>
    <hr />
    <div class="container">
      <div class="row checkboxes">
        <div
          class="form-check m-1"
          v-for="data in filterBy"
          :key="data.title"
        >
          <input
            class="form-check-input"
            type="radio"
            :value="data.value"
            v-model="selectedFilter"
            name="flexRadioDefault"
          />
          <label
            class="form-check-label fw-bold text-primary"
            for="flexRadioDefault1"
          >
            {{ data.title }}
          </label>
        </div>
        <br>
<h4> You have searched for {{selectedFilter}} </h4>
            <hr>
        <div class="row mt-3">
            
               <table class="table">
  <thead>
    <tr >
      <th scope="col">S.No</th>
      <th scope="col">Shop Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Timings</th>
      <th scope="col">Closed On</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="i in 20" :key="i">
      <th scope="row">1</th>
      <td>Sonu Kiran store</td>
      <td>+123456456</td>
      <td>1025-20145</td>
      <td>Wed. shukr</td>
    </tr>
    
  </tbody>
</table>
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
        { title: "स्टेशनरी        ", value: "stationery " },
        { title: "मोबाइल स्टोर   ", value: "mobileStore" },
        { title: "प्रिंटिंग     ", value: "prinitng" },
        { title: "मोबाइल रिपेरिंग         ", value: "mobileRepair " },
        { title: "जन सेवा केंद्र  ", value: "janSewaKendra" },
        { title: "बैंक   ", value: "bank" },
        { title: "बर्तन    ", value: "bartan" },

        { title: "साइकिल रिपेयर     ", value: "cycleStore" },
        { title: "इलेक्ट्रॉनिक     ", value: "electronic" },
        { title: "कॉस्मेटिक      ", value: "cosmetic" },
        { title: "चप्पल जूता       ", value: "chappal" },
        { title: "कपडा गारमेंट्स    ", value: "garments" },
        { title: "गिफ्ट्स   ", value: "gifts" },
        { title: "कोचिंग    ", value: "coaching" },
        { title: "फास्टफूड     ", value: "fastfood" },
        { title: "होटल      ", value: "hotel" },

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
        { title: "टेलर /दर्जी    ", value: "tailor " },
        { title: "धोबी प्रेस    ", value: "press " },
        { title: "किराये का घर      ", value: "rentRoom " },
        { title: "किराये की दुकान     ", value: "rentShop " },
        { title: "नाई    ", value: "barber " },
        { title: "ब्यूटी पार्लर     ", value: "beautiParler " },
        { title: "सिलाई     ", value: "silayi " },
        { title: "मोची     ", value: "mochi " },
        { title: "किराये की गाडी बोलेरो/कार    ", value: "rentCars " },
        { title: "बीज भण्डार     ", value: "beejBhandaar " },
        { title: "डीजल पेट्रोल     ", value: "dieselPetrol " },
        { title: "स्टूडियो     ", value: "photoStudio " },
        { title: "पतंजलि      ", value: "patanjali " },
        { title: "पंडित पूजा के लिए       ", value: "pandit " },
        { title: "श्रमिक मजदूर     ", value: "helper " },
        { title: "प्लम्बर      ", value: "plumber " },
        { title: "पेंटर      ", value: "painter " },
        { title: "आटाचक्की       ", value: "aataChakki " },
        { title: "चश्मा        ", value: "chashma  " },
        { title: "डेरी         ", value: "dairy  " },
        { title: "घर की बिजली          ", value: "homeElectronic  " },
        { title: "बस सर्विस            ", value: "busService  " },
        { title: "साउंड सर्विस            ", value: "soundServie  " },
        { title: "टेंट हाउस            ", value: "tentHouse  " },
        { title: "कैटर्स           ", value: "cetters  " },
        { title: "डेकोरेशन            ", value: "decoration   " },
        { title: "डीजे             ", value: "dj   " },
        { title: "लकड़हारा              ", value: "woodCutter   " },
        { title: "आयुर्वेदिक               ", value: "aayurvedic   " },
      ],
    };
  },
};
</script>

<style scoped>
.row > * {
  width: auto;
}
.form-check-label {
  font-size: 0.9rem;
}
</style>