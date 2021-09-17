<template>
  <header>
    <nav
      class="
        navbar navbar-expand-lg bg-white
        position-fixed
        w-100
        mt-0
        start-0
        navigation-wrap
      "
      :class="{onScroll:addNavShadow}"

    >
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><img width="250" height="80" src="../../assets/ch-logo1.png" alt="" srcset=""
        /></router-link>
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
            <li class="nav-item">
              <p class="main-btn">Donate</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links:[{title:'Home',to:'/'},
       {title:'History',to:'/itihas'},
       {title:'Gallery',to:'/gallery'},
       {title:'Cricket',to:'/cricket'},
       {title:'Elections',to:'/election'}
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
  }
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
    padding: .32rem 1.4rem;
    box-shadow: none;
    margin-left: .625rem;
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
background: linear-gradient(145deg, #ffffff, #f83a00);
box-shadow:  6px 6px 12px #a6a6a6,
             -6px -6px 12px #ffffff;
             cursor: pointer;
}
</style>