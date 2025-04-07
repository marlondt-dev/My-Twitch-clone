<script setup lang="ts">
import { StreamsDivisionLine } from "#components";
</script>
<template>
  <main class="main-container">
    <StreamsLiveChannels />
    <StreamsDivisionLine />
 
    <StreamsLiveChannels 
      section-id="english" 
      title="English streams" 
      language="en" 
    />
    <StreamsLiveChannels 
      section-id="fortnite" 
      title="Fortnite streams" 
      game-id="33214" 
    />
    <StreamsCategories />
    <StreamsLiveChannels />
    <StreamsDivisionLine />
    <StreamsLiveChannels />
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  width: 76.25em;
  height: 132.68em;
  gap: 1.25rem;
}
</style>
