<template>
  <div class="event-listing">
    <h1>Events Listing</h1>
    <ul>
      <li>
        <EventCard v-for="event in events" :key="event.key" :event="event"/>
      </li>
    </ul>
  </div>
</template>

<script>
import eventService from '../services/EventService';
import EventCard from "../components/EventCard";
export default {
  components: {
    EventCard
  },
  data(){
    return {
      events: []
    };
  },
  created() {
    eventService.getEvents()
      .then(res => {
        console.log(res.data);
        this.events = res.data;
      })
      .catch(e => console.log("bang: ", e))
      .finally(() => console.log("axios call finished"));
  }
};
</script>
