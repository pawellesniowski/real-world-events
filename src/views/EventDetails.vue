<template>
  <div class="event-details">
    <h1>Event Details</h1>
    <h2>#{{ id }}</h2>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
