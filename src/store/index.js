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
          // {
          //   type: "JILA PANCHAYAT (1404 code )",
          //   winnerImg:
          //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU",
          //   img: "",
          //   doanloadLink:
          //     "http://sec.up.nic.in/site/fonts/zpm_result_2010.pdf ",
          //   winner: "",
          //   opponent: "",
          //   about:
          //     "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          // },
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
    donationData: [
      {
        id: 1,
        name: "Gycel-Herbicide",
        hindiName: "ग्लाईसेल कीटनाशी ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/v1yZCV9/gly.png",
        approxPrice: "400-500",
        price: 490,
        orderLinks: [
          // "https://www.amazon.in/Gycel-Herbicide-Extra-Grass-LTR/dp/B09C3SRPPC/ref=asc_df_B09C3SRPPC/?tag=googleshopdes-21&linkCode=df0&hvadid=396988867122&hvpos=&hvnetw=g&hvrand=9226357731409434198&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9298373&hvtargid=pla-1406344035309&psc=1&ext_vrnc=hi",
          "https://www.flipkart.com/sumitomo-glycel-glyphosate-41-sl-systemic-broad-spectrum-non-selective-post-emergent-herbicide-1-liter-pesticide/p/itm1bdd9a09f3030?pid=SMNG3USFGZV6WYGH&lid=LSTSMNG3USFGZV6WYGH637QQG&marketplace=FLIPKART&cmpid=content_soil-manure_12825718239_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,516793455547,,,,c,,,,,,,&ef_id=Cj0KCQjwnJaKBhDgARIsAHmvz6cAPoLeZNr_uCgUyB3x9M0t8vVjAfza-xVOcVQ4f56Tq-j3yT8gLqwaArT-EALw_wcB:G:s&s_kwcid=AL!739!3!516793455547!!!u!293946777986!&gclid=Cj0KCQjwnJaKBhDgARIsAHmvz6cAPoLeZNr_uCgUyB3x9M0t8vVjAfza-xVOcVQ4f56Tq-j3yT8gLqwaArT-EALw_wcB",
        ],
      },
      {
        id: 2,
        name: "Street Light",
        hindiName: "स्ट्रीट लाइट ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/cx1HcpK/light-street.png",
        price: 500,
        approxPrice: "500-700",
        orderLinks: [
          "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj5mY3ih4jzAhXJfysKHY08CaMYABAFGgJzZg&ae=2&ohost=www.google.com&cid=CAESQeD2cG8WI5flKKxCgg7agAaaMpzVM9BOJRTM6-RSyWTJRYCueYkcdPsE7o6egadWDb8eJUH_h46MrRUzaEl8L9bg&sig=AOD64_3FtVEM-Ihk8hZXq1Hi2qYaBtLXxQ&ctype=5&q=&ved=2ahUKEwiRq4Tih4jzAhVTyjgGHYDUAhcQ9aACegQIAhBR&adurl=",
        ],
      },
      {
        id: 3,
        name: "Blankets",
        hindiName: "कम्बल ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/b3fg4Z7/blanket.jpg",
        price: 150,
        approxPrice: "100-150 /piece",
        orderLinks: [
          // "https://www.amazon.in/Shivaan-Home-Furnishing-Multipurpose-Multicolor/dp/B08CBWFT15?ref_=Oct_d_orecs_d_1380450031&pd_rd_w=IWOaC&pf_rd_p=b03e4d5d-30a1-4b98-9fee-e5c8fa7446f9&pf_rd_r=6FYJZ1SWJ7DRKAFG6WZD&pd_rd_r=6fa1713b-303b-4c47-a8ea-1a3ff88f01c1&pd_rd_wg=ms8TS&pd_rd_i=B08CBWFT15",
          "https://www.flipkart.com/palsaai-floral-single-fleece-blanket/p/itmcfb871b2c3b32?pid=BLAFVGFGGGSZ6STC&lid=LSTBLAFVGFGGGSZ6STCRESYNF&marketplace=FLIPKART&cmpid=content_blanket_12825718239_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,516793455547,,,,c,,,,,,,&ef_id=Cj0KCQjwnJaKBhDgARIsAHmvz6frrjJfaVH4xiUUtKDOLiOTVFHBIEKS3V0CfQTk4KGy2SFrluqBEHUaAv9dEALw_wcB:G:s&s_kwcid=AL!739!3!516793455547!!!u!293946777986!&gclid=Cj0KCQjwnJaKBhDgARIsAHmvz6frrjJfaVH4xiUUtKDOLiOTVFHBIEKS3V0CfQTk4KGy2SFrluqBEHUaAv9dEALw_wcB",
        ],
      },
      {
        id: 4,
        name: "Blankets",
        hindiName: "शॉल",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/VvMxK9R/shawl.jpg",
        approxPrice: "150-200 /piece",
        price: 199,
        orderLinks: [
          "https://www.flipkart.com/jars-collections-pure-wool-solid-women-shawl/p/itmfyzwd6pptjzme?pid=SWLFYZU3FYHSGZR9&lid=LSTSWLFYZU3FYHSGZR9BVSKCX&marketplace=FLIPKART&cmpid=content_shawl_12477118216_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,502923855084,,,,c,,,,,,,&ef_id=Cj0KCQjwnJaKBhDgARIsAHmvz6db_WrcK1FwJLzmKh8n4jQXMEQuCiImiXu9RkF5d0o6F8eRZkx7I_IaAguDEALw_wcB:G:s&s_kwcid=AL!739!3!502923855084!!!u!302763144225!&gclid=Cj0KCQjwnJaKBhDgARIsAHmvz6db_WrcK1FwJLzmKh8n4jQXMEQuCiImiXu9RkF5d0o6F8eRZkx7I_IaAguDEALw_wcB",
        ],
      },
      {
        id: 5,
        name: "Keypad Phone",
        hindiName: "कीपैड फ़ोन ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/pWgs6fR/phone.jpg",
        approxPrice: "500-1200 /piece",
        price: 700,
        orderLinks: [
          "https://www.flipkart.com/blackzone-everest/p/itmd798b58400d42?pid=MOBFPFNT8RJTZPPU&lid=LSTMOBFPFNT8RJTZPPULNEEIU&marketplace=FLIPKART&q=keypadphone&store=tyy%2F4io&srno=s_1_7&otracker=search&otracker1=search&fm=SEARCH&iid=b05669fe-aa4c-4d4c-acaf-07bdc73045a8.MOBFPFNT8RJTZPPU.SEARCH&ppt=hp&ppn=homepage&ssid=zqchcheahc0000001631977485051&qH=e8d80e07d2006c0b",
          // "https://www.amazon.in/Nokia-105-2019-Single-Black/dp/B07YYNX5X6/ref=sr_1_1?crid=WG2UIZS5UQ4A&dchild=1&keywords=keypad+phones&qid=1631977588&qsid=260-1887878-7361719&sprefix=keypad%2Caps%2C471&sr=8-1&sres=B07YYNX5X6%2CB07WXW8V4X%2CB008OPT50Y%2CB082FCV9ZL%2CB07JWYTTN3%2CB07YYNLCD2%2CB013UTLMNG%2CB091T2CNM3%2CB07ZG58Q48%2CB07WX2R5R8%2CB07RV3KH3Q%2CB07RV34N42%2CB09CD5JTYM%2CB08H21B6V7%2CB089QP8Y81%2CB072BSSDX5&srpt=CELLULAR_PHONE",
        ],
      },
      {
        id: 6,
        name: "Stationery Items",
        hindiName: "स्टेशनरी सामान  ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/XFpQPcL/stationery.png",
        approxPrice: "5-100",
        price: 5,
        orderLinks: [
          "https://www.google.com/search?q=buy+stationery+items+online.",
        ],
      },
      {
        id: 7,
        name: "Sleepers or Shoes",
        hindiName: "चप्पल / जूता  ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/zXkJG6J/sleeprs.jpg",
        approxPrice: "100-400",
        price: 150,
        orderLinks: [
          "https://www.google.com/search?q=sleepers+shoes+buy+online.",
        ],
      },
      {
        id: 8,
        name: "Medicines",
        hindiName: "प्राथमिक दवाएं  ",
        about: " maxime in. Pariatur similique ab",
        img: "https://i.ibb.co/q5mFvx7/medicines.jpg",
        approxPrice: "10-200",
        price: 50,
        orderLinks: [
          "https://www.google.com/search?q=buy+first+aid+medicine+online+&sxsrf=AOaemvLCduVaiJJQ1HUDdNCFZ2jGei6jWw%3A1631977992427&ei=CAJGYeW8GbiO4-EPqKW4wA0&oq=buy+first+aid+medicine+online+&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHRAeMggIIRAWEB0QHjIICCEQFhAdEB46BwgAEEcQsAM6BQgAEJECOgQIABBDOgoIABCxAxDJAxBDOgUIABCSAzoKCAAQgAQQhwIQFDoHCAAQsQMQQzoFCAAQgAQ6CQgAEMkDEBYQHkoECEEYAFCS1BtYrvwbYPP9G2gBcAJ4AIABmwKIAY0kkgEHMC4xMC4xMpgBAKABAcgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwjl4JPk54jzAhU4xzgGHagSDtgQ4dUDCA4&uact=5.",
        ],
      },
    ],
   
    filterBy: [
      { title: "सभी  ", value: "all" },
      { title: "आपातकालीन सेवा   ", value: "emergency" },
      { title: "जनरल/किराना ", value: "generalStore" },
      { title: "मेडिकल स्टोर ", value: "medicalStore" },
      { title: "डॉक्टर्स      ", value: "doctors " },
      { title: "आयुर्वेदिक               ", value: "aayurvedic   " },
      { title: "पतंजलि      ", value: "patanjali " },
      { title: "होम्योपैथिक                ", value: "homeopathic   " },
      { title: "पशु डॉक्टर       ", value: "animalDoctors " },
      { title: "मशीनरी स्टोर  ", value: "machineryStore" },
      { title: "कस्टमर केयर  ", value: "customerCare" },
      { title: "स्कूल    ", value: "school" },
      { title: "स्टेशनरी        ", value: "stationery " },
      { title: "मोबाइल स्टोर   ", value: "mobileStore" },
      { title: "प्रिंटिंग     ", value: "prinitng" },
      { title: "मोबाइल रिपेरिंग         ", value: "mobileRepair " },
      { title: "जन सेवा केंद्र  ", value: "janSewaKendra" },
      { title: "फास्टफूड     ", value: "fastfood" },
      { title: "होटल      ", value: "hotel" },
      { title: "कोल्डड्रिंक     ", value: "coldDrink " },
{ title: "बेकरी/केक     ", value: "backery " },
     
      { title: "डीजे             ", value: "dj   " },
      { title: "साउंड सर्विस            ", value: "soundServie  " },
      { title: "लाइट हॉउस             ", value: "lightHouse  " },
      { title: "टेंट हाउस            ", value: "tentHouse  " },
      { title: "कैटर्स ", value: "cetters  " },
      { title: "डेकोरेशन  ", value: "decoration   " },
      { title: "माली   ", value: "maali   " },
      { title: "गैस सर्विस      ", value: "gasService " },
      { title: "साइकिल रिपेयर     ", value: "cycleStore" },
      { title: "बाइक रिपेयर       ", value: "bikeRepair" },
      { title: "इलेक्ट्रॉनिक     ", value: "electronic" },
      { title: "कॉस्मेटिक      ", value: "cosmetic" },
      { title: "बोलेरो/कार    ", value: "rentCars " },
      { title: "पिक अप         ", value: "pickup " },
    { title: "सवारी गाड़ी/टेम्पो/बस       ", value: "taxi " },
{ title: "बस सर्विस            ", value: "busService  " },
      { title: "चप्पल जूता       ", value: "chappal" },
      { title: "कपडा गारमेंट्स    ", value: "garments" },
      { title: "गिफ्ट्स   ", value: "gifts" },
      { title: "कोचिंग    ", value: "coaching" },
      
      { title: "बिल्डिंग मटेरियल       ", value: "buildingMaterials" },
      { title: "बढ़ई      ", value: "carpenter" },
      { title: "लोहार       ", value: "blacksmith" },
      { title: "सुनार        ", value: "jeweller" },
      { title: "गैस चूल्हा रिपेयर         ", value: "gasChulhaRepair " },
      { title: "ठेला         ", value: "thela " },

      { title: "शराब       ", value: "wine " },
      { title: "पान मसाला        ", value: "paanMasala " },
      { title: "टेलर /दर्जी    ", value: "tailor " },
      { title: "धोबी प्रेस    ", value: "press " },
      { title: "बैंक   ", value: "bank" },
      { title: "बर्तन    ", value: "bartan" },
      { title: "किराये का घर      ", value: "rentRoom " },
      { title: "किराये की दुकान     ", value: "rentShop " },
     
      { title: "नाई    ", value: "barber " },
      { title: "ब्यूटी पार्लर     ", value: "beautiParler " },
      { title: "सिलाई     ", value: "silayi " },
      { title: "मोची     ", value: "mochi " },
      
      { title: "डीजल पेट्रोल     ", value: "dieselPetrol " },
      { title: "स्टूडियो     ", value: "photoStudio " },
      { title: "पंडित        ", value: "pandit " },
      { title: "श्रमिक मजदूर     ", value: "helper " },
      { title: "प्लम्बर      ", value: "plumber " },
      { title: "पेंटर      ", value: "painter " },
      { title: "आटाचक्की       ", value: "chakki " },
      { title: "चश्मा        ", value: "chashma  " },
      { title: "डेरी         ", value: "dairy  " },
      { title: "घर की बिजली          ", value: "homeElectronic" },
      
    
    
      { title: "लकड़हारा  ", value: "woodCutter   " },
{ title: "  ट्रैक्टर-ट्रॉली           ", value: "tractors   " },
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
