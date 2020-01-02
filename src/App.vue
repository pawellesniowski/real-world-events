<template>
  <div id="app">
    <nav>
      <ul>
        <router-link to="/list">
          <li>list</li>
        </router-link>
        <router-link to="/create">
          <li>create</li>
        </router-link>
      </ul>

    </nav>
    <router-view />
  </div>
</template>

<style>

</style>
