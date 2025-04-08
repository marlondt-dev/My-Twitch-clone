<script setup lang="ts">

import ShowMore from "../ui/ShowMore.vue";
</script>
<template>
  <main class="main-container">
    <StreamsLiveChannels />
    <ShowMore />

    <StreamsLiveChannels
      section-id="english"
      title="English streams"
      language="en"
    />
    <ShowMore />
    <StreamsLiveChannels
      section-id="fortnite"
      title="Fortnite streams"
      game-id="33214"
    />
    <ShowMore />
    <StreamsCategories />
    <ShowMore />

    <StreamsLiveChannels
      section-id="league"
      title="League of Legends"
      game-id="21779"
    />
    <ShowMore />
    <StreamsLiveChannels
      section-id="Warzone"
      title="Warzone"
      game-id="512710"
    />
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  width: 76.25em;
  height: 132.68em;
  gap: 1.25rem;
}
</style>
