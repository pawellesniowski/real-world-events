<template>
  <header class="app-header">
    <router-link to="/" class="logo">Your Events List</router-link>
    <NavBar />
  </header>
</template>

<script>
import NavBar from './NavBar';
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.app-header {
  grid-column: 2 / 12;
  background-color: gray;
}
</style>
