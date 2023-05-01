import router from '@/router';
import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    users: [],
    logged: false,
    loggedUser: '',
    registerModal: false,
    loginModal: false,
    gamesList: [],
    gamesPage: 1,
    currentGame: {},
  },

  getters: {
    getMoreGames(state) {
      return state.gamesPage;
    },
  },

  mutations: {
    checkDataBase(state) {
      const dataBase = JSON.parse(localStorage.getItem('user'));
      if (dataBase === null) {
        state.users = [];
      } else {
        state.users = dataBase;
      }
      console.table(state.users)
    },
    createAccount(state, userData) {
      const checkEmail = state.users.map((user) => user.email.toLowerCase());
      if (!checkEmail.includes(userData.email.toLowerCase())) {
        state.users.push(userData);
        state.registerModal = false;
        state.loginModal = true;
        localStorage.setItem('user', JSON.stringify(state.users));
        console.table(this.state.users);
      } else {
        alert("This email address is not available. Choose a different address.");
      }
    },
    logIn(state, userData) {
      if (state.users.some((user) => userData.email === user.email)) {
        if (state.users.some((user) => userData.email === user.email && userData.password === user.password)) {
          state.loggedUser = userData.email;
          state.logged = true;
          state.loginModal = false;
          console.log("Log in: " + state.loggedUser);
        } else {
          state.logged = false;
          alert("Wrong password");
        }
      } else {
        state.logged = false;
        alert("There is no user registered with this email.");
      }
    },
    logOut(state) {
      alert("Log out: " + state.loggedUser)
      state.logged = false;
      state.loggedUser = '';
      router.push({ name: 'home' });
    },
    toggleLoginModal(state) {
      state.loginModal = !state.loginModal;
    },
    toggleRegisterModal(state) {
      state.registerModal = !state.registerModal;
    },
    setGames(state, gamesData) {
      state.gamesList = state.gamesList.concat(gamesData)
    },
    viewMoreGames(state) {
      state.gamesPage++
    },
    setCurrentGame(state, currentGameData) {
      state.currentGame = currentGameData;
    },
  },

  actions: {
    async fetchGames({ commit }, gamesPage) {
      const gamesData = await axios.get(`https://api.rawg.io/api/games?key=a0cb1871803e45e89fbf5d9513c3cb28&page=${gamesPage}`).then(response => response.data.results)
      commit('setGames', gamesData)
    },
    async fetchCurrentGame({ commit }, gameId) {
      const currentGameData = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=a0cb1871803e45e89fbf5d9513c3cb28`).then(response => response.data)
      commit('setCurrentGame', currentGameData)
    }

  }
})
