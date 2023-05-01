<template>
  <div class="game-container" v-if="(currentGame)">
    <div class="game-name">
      <h2>{{ currentGame.name }}</h2>
    </div>
    <div class="game-image">
      <img :alt="`${currentGame.name}`" :src="`${currentGame.background_image_additional}`" />
    </div>
    <div class="game-info">
      <div><span class="feature">Rating: </span>{{ currentGame.rating }}</div>
      <div><span class="feature">Metacritic: </span>{{ currentGame.metacritic }}</div>
      <div><span class="feature">Releasing date: </span>{{ currentGame.released }}</div>
      <div class="game-description">
        <p>{{ currentGame.description_raw }}</p>
      </div>
    </div>
    <div class="return">
      <router-link to="/games">CLOSE</router-link>
    </div>
  </div>
  <div v-else>
    <h2>Please wait...</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ["id"],
  computed: {
    ...mapState(["gamesList", "currentGame"])
  },
  mounted() {
    this.$store.dispatch('fetchCurrentGame', this.$route.params.id);
  },
}
</script>

<style scoped>
.game-container {
  background-color: #000000cc;
  max-width: 500px;
  margin: 10px auto;
  padding: 5px;
  color: #ffffff;
  border-radius: 20px;
  box-shadow: 10px 10px 10px #000000;
}

.feature {
  color: #AAAAAA;
  padding: 5px;
  line-height: 1.5rem;
}

.game-image img {
  max-width: 350px;
}

.game-info {
  margin-top: 10px;
}

.game-description {
  font-family: 'Roboto Condensed';
  font-weight: 300;
  color: #ffffff;
  max-width: 500px;
  padding: 10px;
}

.return {
  width: 80px;
  margin: auto;
  background-color: #000000;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 5px 0;
  margin-bottom: 10px;
}

.return:hover {
  background-color: #a53907;
}

.return a {
  color: #ffffff;
}
</style>