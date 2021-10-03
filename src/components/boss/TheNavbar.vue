<template>
  <header>
    <nav
      class="
        navbar navbar-expand-lg bg-white fixed-top
        
        w-100
        mt-0
        start-0
        navigation-wrap
      "
      :class="{onScroll:addNavShadow}"

    >
      <div class="container">
        <router-link class="navbar-brand" to="/"
          >
          <!-- <img width="90" height="40" class="tiranga" src="../../assets/tiranga.gif" alt="" srcset=""> -->
          <img width="200" height="60"  src="https://i.ibb.co/JCkn2x6/IMG-20210930-144311.jpg" alt="" class="logo-img" srcset=""
        /></router-link>
        <!-- <img width="90" height="40" src="../../assets/tiranga.gif" alt="" srcset=""> -->
        <button
          class="navbar-toggler"
          type="button"
          
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
          <img src="../../assets/tree.png" alt="" srcset="" />
          <!-- //Your ICON -->
        </button>
        <div class="collapse navbar-collapse"   id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li @click="handleLink"  class="nav-item" v-for="link in links" :key="link">
              <router-link class="nav-link " aria-current="page" :to='link.to'>{{link.title}}</router-link>
            </li>
            <li class="nav-item" >
              <router-link class="btn btn-light border-1 fw-bolder" to="/donate" >    <img src="../../assets/donation.png" alt="" srcset="" />
              डोनेट
                <!-- <router-link class="text-decoration-none text-white"  to="/donate"></router-link> -->
              </router-link>
              
            </li>
            <li class="nav-item" >
              <p class="main-btn">
                <a class="text-decoration-none text-white fw-bolder" href="https://chat.whatsapp.com/LgCz9l1tWQKKJe6OQ5n8Zt">
                   <img src="../../assets/telephone.png" alt="" class="me-1" srcset="" />सम्पर्क करें </a>
                <!-- <router-link class="text-decoration-none text-white"  to="/donate"></router-link> -->
              </p>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import MainContent from '../reusable/slots/MainContent.vue';
export default {
  components: { MainContent },
  data() {
    return {
      links:[{title:'मुख्य पेज  ',to:'/'},
      {title:' दुकान खोजें ',to:'/find'},
       {title:'इतिहास',to:'/itihas'},
       {title:' गैलरी',to:'/gallery'},
      //  {title:' समाचार ',to:'/readnews'},
       {title:' क्रिकेट ',to:'/cricket'},
       {title:'इलेक्शन ',to:'/election'}
      
     ],
      addNavShadow:false,
      
    }
  },
  mounted() {
    window.onscroll= ()=>{
      window.scrollY>50 ? this.addNavShadow= true : this.addNavShadow= false
     
    }
  },
  methods: {
    //on click closing list nav on mobile
    handleLink(e){
   e.path[3].classList.remove('show')
  },
  // donate(){
  //   alert('डोनेशन लिंक जल्द ही उपलब्ध होगी  अधिक जानकारी के लिए आप व्हाट्सप्प ग्रुप पर जुड़ सकते हैं ')
  // },
 
  },
};
</script>

<style  scoped>
:root{
  --primary-font:  'Roboto', sans-serif;
  --secondary-font: 'Quicksand', sans-serif;

  --primary-color:#1a922e;
  --secondary-color:#43121d;
  --third-color:#f98169;
  --white-color:#fff;
  --text-color:#555;
  --text-gray:#999;
  --black-color:#000;

}
.navigation-wrap {
  z-index: 1000;
  transition: all 0.3s ease-out;
}
.nav-item {
  padding: 0 0.625rem;
  transition: all 0.2s linear;
}
/* //FIX IT  */
.navbar-toggle:focus{
    outline: unset;
    border: unset;
    box-shadow: none;
}
.nav-link{
    font-size: .93rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--primary-color);
    letter-spacing: 1px
}
.navigation-wrap .main-btn{
    padding: .12rem 1rem;
    box-shadow: none;
    margin-left: .15rem;
}
/* //USED IN SCROLL : CHNAGE NAV BAR STYLE ON SCROLL */
.navigation-wrap.onScroll{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background:var(--white-color);
    box-shadow:  0 0.125rem  1.7rem 0 rgba(0, 0, 0, .5);
    transition: all .5s ease-in-out 0s;

}
.main-btn{
border-radius: 12px;
background: linear-gradient(145deg, #ee5e5e, #f50000);
box-shadow:  6px 6px 12px #a6a6a6,
             -6px -6px 12px #ffffff;
             cursor: pointer;
             color: white;
}
.router-link-exact-active{
  color: red;
}
</style>