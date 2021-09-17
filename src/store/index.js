import { createStore } from "vuex";

export default createStore({
  state: {
    electionData: [
      {
        year: "2021",
        data: [
          {
            type: "ग्राम पंचायत प्रधान (PRADHAN)",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "",
            doanloadLink: null,
            winner: "",
            opponent: "",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          {
            type: "JILA PANCHAYAT",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "",
            doanloadLink:null,
            winner: "",
            opponent: "",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          { type: "BDC",winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU', img: "", doanloadLink: null, winner: "", opponent: "",  about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!", },
        ],
      },
      {
        year: "2015",
        data: [
          {
            type: "ग्राम पंचायत प्रधान (PRADHAN) ",
            img: "https://i.ibb.co/0qLLPsD/ele2015.jpg",
            winnerImg:'https://scontent.fknu1-2.fna.fbcdn.net/v/t1.18169-9/18557226_457101737962730_216037800412696253_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0ScarD4FlCsAX97Zp_g&tn=e7XmZYLoDUMmyV3u&_nc_ht=scontent.fknu1-2.fna&oh=b7b8e98ce43660111dd3a59d3b12bdd6&oe=616954BF',
            doanloadLink: "http://sec.up.nic.in/ElecLive/ResultSearchOnVacancy.aspx?VacancyId=CN9xsQK+u2E=&PostId=v/iigWwtI48=&DistId=I3JyRKadE8w=",
            winner: "रोशनलाल (436)",
            opponent: "vs संदीप तिवारी (303)",
            about:
              "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          {
            type: "JILA PANCHAYAT",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "https://i.ibb.co/c87Xhrj/Jilapanchayat2015.jpg",
            doanloadLink: "http://sec.up.nic.in/ElecLive/ResultSearchOnVacancy.aspx?VacancyId=0YotdBgCG0M=&PostId=XT+BdO0wBBo=&DistId=I3JyRKadE8w=",
            winner: "कमला प्रसाद",
            opponent: "vs राम सुफल",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          {
            type: "BDC",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "",
            doanloadLink: null,
            winner: "",
            opponent: "",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
        ],
      },

      {
        year: "2010",
        data: [
          {
            type: "ग्राम पंचायत प्रधान (PRADHAN) ",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "",
            doanloadLink: "http://sec.up.nic.in/site/fonts/gpp_1404.pdf",
            winner: "Rishikesh",
            opponent: "",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          {
            type: "JILA PANCHAYAT (1404 code )",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "",
            doanloadLink: "http://sec.up.nic.in/site/fonts/zpm_result_2010.pdf ",
            winner: "",
            opponent: "",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
          {
            type: "BDC",
            winnerImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZPryW2FN8JQZ1y8I0BaGzVJTi6evpNrkdZ17uaWiOjIsBLYnuUHv2KIt0eBeqgzHICQ&usqp=CAU',
            img: "https://i.ibb.co/cgMZ6fL/BDC-2010.jpg",
            doanloadLink: "http://sec.up.nic.in/site/fonts/kpm_1404.pdf",
            winner: "Kiran",
            opponent: "",
            about: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat iusto mollitia illum reprehenderit at, voluptate totam voluptas molestiae ipsum ullam harum, nulla aliquid earum maiores? Excepturi quam, dolorum ab atque velit facere architecto accusamus, expedita molestiae eveniet error repudiandae in cupiditate repellat reiciendis tenetur. Rem molestias illum quod nobis atque corporis magnam? Expedita enim vero praesentium id fugiat eius natus odit, deserunt earum ipsa sint maxime et a alias ratione esse nihil deleniti repellat aut porro obcaecati odio. Quos, corrupti quidem consequatur, iure accusantium quae ratione quas ea ex excepturi consectetur molestias vero enim ipsam. Recusandae voluptate error ex!",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getElectionData(state) {
      return state.electionData;
    },
  },
});
