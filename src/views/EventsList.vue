<template>
  <div class="event-listing">
    <h1>Events Listing</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'event-details', params: { id: '1' } }">
          @10:00 ...
        </router-link>
      </li>
    </ul>
  </div>
</template>
