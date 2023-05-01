<template>
  <div class="home">
    <h1>Welcome Gamers!</h1>
    <h2>Here you can find any game that is in our database</h2>
    <img src="../assets/home.png" alt="">
    <h3>I hope you find it useful...</h3>
    <p>(only for registered users)</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  margin: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'Press Start 2P', 'Roboto', Arial, Helvetica, sans-serif;
}

img {
  max-width: 300px;
  margin: -10px;
}

p,
h3 {
  margin: 5px;
}
</style>
