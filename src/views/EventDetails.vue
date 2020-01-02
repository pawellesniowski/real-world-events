<template>
  <div class="event-details">
    <p>@10:00 ...</p>
    <h1>Beach Cleanup</h1>
    <p>This is event id: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
