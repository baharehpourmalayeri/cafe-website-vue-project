<script>

import Navbar from './components/common/Navbar.vue'
import Banner from './components/common/Banner.vue'
import Footer from './components/common/Footer.vue'

export default {
  components: {
    Navbar,
    Banner,
    Footer,
  }
}
</script>

<template>
  <Navbar />
  <main>
    <Banner />
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style>
@font-face {
  font-family: heading-font;
  src: url(/assets/fonts/Satisfy-Regular.ttf) format('truetype');
}

@font-face {
  font-family: content-font;
  src: url(/assets/fonts/Mukta-Light.ttf) format(truetype);
}

* {
  font-family: content-font, Arial, sans-serif;
}

html,
ul {
  padding: 0;
  margin: 0;
}

body {
  background-color: gray;
  background-image: url(/assets/images/background11.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #000000;
}
</style>
