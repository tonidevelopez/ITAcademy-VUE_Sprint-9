<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import { mapMutations } from 'vuex';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header, Footer
  },
  methods: {
    ...mapMutations(['checkDataBase']),
  },
  mounted() {
    this.checkDataBase()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: #AAAAAA;
  text-align: center;
  background-color: #000000;
  background-image: url('./assets/background.jpg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 50px;
}

nav {
  background-color: #11111188;
  padding: 1rem 0;
}

a {
  color: #AAAAAA;
  text-decoration: none;
  padding: 1rem;
}

a:hover {
  color: #a53907;
}

a.router-link-exact-active {
  color: #ffffff;
}
</style>
