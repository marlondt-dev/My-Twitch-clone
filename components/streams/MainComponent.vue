<script setup lang="ts">
import { StreamsDivisionLine } from "#components";
</script>
<template>
  <main class="main-container">
    <StreamsLiveChannels  :first="3" :after="cursor"/>
    <StreamsDivisionLine  />
    <StreamsLiveChannels :first="3" :offset="6"/>
    <StreamsDivisionLine />
    <StreamsCategories />
    <StreamsLiveChannels :first="3" :offset="9"/>
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
