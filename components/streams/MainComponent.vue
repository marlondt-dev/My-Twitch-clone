<script setup lang="ts">
import { StreamsDivisionLine } from "#components";
</script>
<template>
  <main class="main-container">
    <StreamsLiveChannels />
    <StreamsDivisionLine />
    <StreamsLiveChannels />
    <StreamsDivisionLine />
    <StreamsCategories />
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  width: 76.25em;
  height: 132.68em;
  gap: 1.25rem;
}
</style>
