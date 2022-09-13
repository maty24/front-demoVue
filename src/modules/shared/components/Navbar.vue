<template>
  <div>
    <!--router-link para naevgar entre rutas-->
    <router-link to="/">Get</router-link>
    <router-link to="/about">Post</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
a.router-link-active {
  color: #42b983;
}
</style>
