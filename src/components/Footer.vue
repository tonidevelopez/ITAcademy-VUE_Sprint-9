<template>
  <div class="footer">
    <router-link to="/about">ABOUT</router-link>
    <a href="https://rawg.io/">RAWG</a>
    <a href="https://rawg.io/apidocs">API</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.footer {
  width: 100%;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
</style>