<template>
  <div id="app">
    <AppHeader />
    <router-view class="app-views" />
    <footer class="app-footer">#Your Events List</footer>
  </div>
</template>

<script>
import Vue from "vue";
import AppHeader from "./components/AppHeader";

export default Vue.extend({
  components: {
    AppHeader
  }
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* custom styles*/
li {
  list-style: none;
}

#app {
  height: 100vh;
  display: grid;
  grid: 20% auto 10% / repeat(12, 1fr);
}

.app-views {
  grid-column: 2 / 12;
  background-color: aqua;
}

.app-footer {
  grid-column: 2 / 12;
  background-color: gray;
}
</style>
