<template>
  <div class="games-list">
    <div class="games-cards" v-if="gamesList.length">
      <div class="game-card" v-for="(game, i) in gamesList" :key="i">
        <router-link :to="{ name: 'gameinfo', params: { slug: (game.slug), id: (game.id) } }">

          <div class="game-info">
            <p class="game-name">{{ game.name }}</p>
          </div>
          <div class="games-img">
            <img :alt="`${game.name}`" :src="`${game.background_image}`" class="game-img" />
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h2>Please wait...</h2>
    </div>
    <div class="more-games" v-if="(gamesList.length)">
      <button @click="moreGames">MORE GAMES...</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState(['gamesList', 'currentGame'])
  },
  methods: {
    moreGames() {
      this.$store.commit('viewMoreGames');
      this.$store.dispatch('fetchGames', this.$store.getters.getMoreGames);
    }
  },
  mounted() {
    this.$store.dispatch('fetchGames', this.page);
  }
}

</script>

<style scoped>
.games-list {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

.games-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 50px 30px;
  margin: 10px;
  max-width: 150rem;
  text-align: center;
}

.game-card {
  width: 250px;
  height: 250px;
  background-color: #a53907;
  box-shadow: 5px 15px 10px #000000;
  border-radius: 0 0 20px 20px;
}

.game-card:hover {
  cursor: pointer;
  transform: rotate(2deg) scale(105%);
  transition-duration: 500ms;
}

.games-img {
  width: 100%;
  height: 200px;
}

.game-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}

.game-info {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 5px;
}

.game-card a {
  padding: 0;
}

.more-games button {
  padding: 10px;
  margin: 30px;
  background-color: #000000;
  color: #ffffff;
  border-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
}

.more-games button:hover {
  background-color: #a53907;
}
</style>
