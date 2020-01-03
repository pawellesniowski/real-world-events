<template>
  <router-link :to="{name: 'event-details', params: {id: event.id}}">
    <div class="event-card">
      <span>@{{event.time}} on {{event.date}}</span>
      <h4>{{ event.title }}</h4>
      <span><BaseIcon />{{event.attendees.length}} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object
  }
};
</script>

<style scoped>
.event-card {
  border: 1px solid gray;
}

h4 {
  color: green;
}
</style>
