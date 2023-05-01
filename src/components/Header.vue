<template>
  <div class="nav-login">
    <div class="logged">
      <a><span v-if="!logged" @click="toggleLoginModal">LOG IN</span><span v-else @click="logOut">LOG OUT</span></a>
      <a v-if="!logged" @click="toggleRegisterModal">SIGN UP</a>
    </div>
    <div class="logo">
      <router-link to="/"><img src="@/assets/VideoGamesLogo.png" alt="VideoGames Logo"></router-link>
    </div>
  </div>
  <nav>
    <router-link to="/">HOME</router-link>
    <router-link to="/games">GAMES</router-link>
    <!-- <router-link to="/about">ABOUT</router-link> -->
  </nav>
  <div v-if="loginModal">
    <LogIn />
  </div>
  <div v-if="registerModal">
    <SignUp />
  </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: { LogIn, SignUp },

  computed: {
    ...mapState(["loginModal", "registerModal", "logged", "loggedUser"])
  },
  methods: {
    ...mapMutations(["toggleLoginModal", "toggleRegisterModal", "logOut"])
  }
}
</script>

<style scoped>
/* .nav-login {
  margin: 1rem;
  margin-top: 0;
} */

.logo img {
  max-width: 350px;
  margin-top: -30px;
}

.logged {
  display: flex;
  justify-content: flex-end;
}

.logged a:hover {
  cursor: pointer;
  color: #FFFFFF;
}
</style>