import { createStore } from "vuex";

export default createStore({
  state: {
    electionData: [
      {
        year: "2021",
        data: [
          {
            type: "ग्राम पंचायत प्रधान ",
            winnerImg: "https://i.ibb.co/Vw20jjS/anil005018092021.jpg",
            img: "",
            doanloadLink: null,
            winner: "अनिल कुमार ",
            opponent: "",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          // {
          //   type: "JILA PANCHAYAT",
          //   winnerImg:
          //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU",
          //   img: "",
          //   doanloadLink: null,
          //   winner: "",
          //   opponent: "",
          //   about:
          //     "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          // },
          {
            type: "बी डी सी",
            winnerImg: "https://i.ibb.co/JQNw2XM/anil003918092021.jpg",
            img: "",
            doanloadLink: null,
            winner: "अनीस तिवारी ",
            opponent: "",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
        ],
      },
      {
        year: "2015",
        data: [
          {
            type: "ग्राम पंचायत प्रधान  ",
            img: "https://i.ibb.co/0qLLPsD/ele2015.jpg",
            winnerImg:
              "https://scontent.fknu1-2.fna.fbcdn.net/v/t1.18169-9/18557226_457101737962730_216037800412696253_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0ScarD4FlCsAX97Zp_g&tn=e7XmZYLoDUMmyV3u&_nc_ht=scontent.fknu1-2.fna&oh=b7b8e98ce43660111dd3a59d3b12bdd6&oe=616954BF",
            doanloadLink:
              "http://sec.up.nic.in/ElecLive/ResultSearchOnVacancy.aspx?VacancyId=CN9xsQK+u2E=&PostId=v/iigWwtI48=&DistId=I3JyRKadE8w=",
            winner: "रोशनलाल (436)",
            opponent: "vs संदीप तिवारी (303)",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          // {
          //   type: "JILA PANCHAYAT",
          //   winnerImg:
          //     "https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/c0.165.1000.1000a/s526x395/125541679_1512777735587705_2288638359030641200_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xSwVn-7LpagAX-PRP7A&_nc_ht=scontent.fknu1-1.fna&oh=e00f76f3ea227783093e3480cb9e92dd&oe=616A1A1D",
          //   img: "https://i.ibb.co/c87Xhrj/Jilapanchayat2015.jpg",
          //   doanloadLink:
          //     "http://sec.up.nic.in/ElecLive/ResultSearchOnVacancy.aspx?VacancyId=0YotdBgCG0M=&PostId=XT+BdO0wBBo=&DistId=I3JyRKadE8w=",
          //   winner: "कमला प्रसाद",
          //   opponent: "vs राम सुफल",
          //   about:
          //     "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          // },
          {
            type: "बी डी सी",
            winnerImg:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU",
            img: "",
            doanloadLink: null,
            winner: "",
            opponent: "",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
        ],
      },

      {
        year: "2010",
        data: [
          {
            type: "ग्राम पंचायत प्रधान ",
            winnerImg:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU",
            img: "https://i.ibb.co/ZmRW3RZ/2010-pradhan.jpg",
            doanloadLink: "http://sec.up.nic.in/site/fonts/gpp_1404.pdf",
            winner: "ऋषिकेश जायसवाल  ",
            opponent: "",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
         
          {
            type: "बी डी सी",
            winnerImg:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU",
            img: "https://i.ibb.co/cgMZ6fL/BDC-2010.jpg",
            doanloadLink: "http://sec.up.nic.in/site/fonts/kpm_1404.pdf",
            winner: "किरन",
            opponent: "",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
        ],
      },
    ],
 

    filterBy: [
      { title: "सभी  ", value: "all" },
      { title: "आपातकालीन सेवा ", value: "emergency" },
      { title: "चरावां ऑफिस", value: "charawanOffice" },
      { title: "जनरल/किराना ", value: "generalStore" },
      { title: "मेडिकल स्टोर ", value: "medicalStore" },
      { title: "डॉक्टर्स", value: "doctors " },
      { title: "पशु डॉक्टर ", value: "animalDoctors " },
      { title: "हॉस्पिटल  ", value: "hospital " },
      { title: "आयुर्वेदिक ", value: "aayurvedic   " },
      { title: "पतंजलि ", value: "patanjali " },
      { title: "होम्योपैथिक  ", value: "homeopathic   " },
      { title: "फास्टफूड", value: "fastfood" },
      { title: "होटल", value: "hotel" },
      { title: "कोल्डड्रिंक", value: "coldDrink " },
      { title: "बेकरी/केक ", value: "backery " },
      { title: "मोबाइल स्टोर   ", value: "mobileStore" },
      { title: "प्रिंटिंग/फोटोकॉपी", value: "prinitng" },
      { title: "स्टूडियो/वीडियोग्राफी      ", value: "photoStudio " },
      { title: "मोबाइल रिपेरिंग ", value: "mobileRepair " },
      { title: "जन सेवा केंद्र  ", value: "janSewaKendra" },
      { title: "मशीनरी स्टोर /हार्डवेयर   ", value: "machineryStore" },
      { title: "कस्टमर केयर ", value: "customerCare" },
      { title: "स्कूल /कॉलेज ", value: "school" },
      { title: "कोचिंग ", value: "coaching" },
      { title: "स्टेशनरी ", value: "stationery " },
      { title: "नाई/सैलून ", value: "barber " },
      { title: "ब्यूटी पार्लर ", value: "beautiParler " },
      { title: "कॉस्मेटिक", value: "cosmetic" },
      { title: "गिफ्ट्स ", value: "gifts" },
      { title: "चप्पल जूता       ", value: "chappal" },
      { title: "कपडा गारमेंट्स    ", value: "garments" }, 
      { title: "डीजे", value: "dj   " },
      { title: "साउंड सर्विस ", value: "soundServie  " },
      { title: "लाइट हॉउस   ", value: "lightHouse  " },
      { title: "टेंट हाउस  ", value: "tentHouse  " },
      { title: "कैटर्स ", value: "cetters  " },
      { title: "डेकोरेशन  ", value: "decoration   " },
      { title: "माली   ", value: "maali   " },
      { title: "साइकिल रिपेयर ", value: "cycleStore" },
      { title: "बाइक रिपेयर ", value: "bikeRepair" },
      { title: "गैस सर्विस  ", value: "gasService " },
      { title: "गैस चूल्हा रिपेयर ", value: "gasChulhaRepair " },
      { title: "घर की बिजली रिपेयर ", value: "homeElectronic" },
      { title: "इलेक्ट्रॉनिक ", value: "electronic" },
      { title: "वेल्डिंग वर्कशॉप ", value: "welding" },
      { title: "मिस्त्री घर बनाने वाले", value: "homeMistri" },
      { title: "बोलेरो/कार ", value: "rentCars " },
      { title: "पिक अप  ", value: "pickup " },
      { title: "सवारी गाड़ी/टेम्पो/बस ", value: "taxi " },
      { title: "बस सर्विस ", value: "busService  " },
      { title: "ठेला         ", value: "thela " },   
      { title: "बिल्डिंग मटेरियल ", value: "buildingMaterials" },
      { title: "बीज भंडार / पेस्टीसाइड  ", value: "beej" },
      { title: "बढ़ई      ", value: "carpenter" },
      { title: "लोहार       ", value: "blacksmith" },
      { title: "सुनार        ", value: "jeweller" },
      // { title: "शराब       ", value: "wine " },
      { title: "पान मसाला        ", value: "paanMasala " },
      { title: "टेलर /दर्जी    ", value: "tailor " },
      { title: "धोबी प्रेस    ", value: "press " },
      { title: "बैंक   ", value: "bank" },
      { title: "बर्तन    ", value: "bartan" },
      { title: "किराये का घर      ", value: "rentRoom " },
      { title: "किराये की दुकान     ", value: "rentShop " },
      { title: "सिलाई सेंटर कोचिंग      ", value: "silayi " },
      { title: "मोची     ", value: "mochi " },
      { title: "डीजल पेट्रोल     ", value: "dieselPetrol " },     
      { title: "पंडित        ", value: "pandit " },
      { title: "श्रमिक मजदूर     ", value: "helper " },
      { title: "प्लम्बर      ", value: "plumber " },
      { title: "पेंटर      ", value: "painter " },
      { title: "आटाचक्की       ", value: "chakki " },
      { title: "चश्मा        ", value: "chashma  " },
      { title: "डेरी         ", value: "dairy  " },
      { title: "लकड़हारा  ", value: "woodCutter   " },
      { title: "ट्रैक्टर/ट्रॉली           ", value: "tractors   " },
      { title: "अन्य               ", value: "others   " },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getElectionData(state) {
      return state.electionData;
    },
    getDonationData(state) {
      return state.donationData;
    },
    getCharawanShops(State) {
      return state.charawanShops;
    },
    getFilters(state) {
      return state.filterBy;
    },
  },
});
