<script setup lang="ts">
// import { useStreams } from "@/composables/useStreams";
import {useTwitchData} from '@/composables/useTwitchData'
import { recommendedChannels } from "@/assets/data/texts.json";
import type {Stream} from '@/types/stream'

const {data: streams, error, startPeriodicRefresh} = useTwitchData<Stream>('streams', {
  first: 8,
  language: 'es'
}, {
  includeUserProfiles: true,
  componentId: 'aside-channels'
});

onMounted(() => {
  startPeriodicRefresh(1000);
});
</script>
<template>
  <aside class="chat">
    <div class="chat__text-container">
      <p>{{ recommendedChannels.recommended }}</p>
      <img src="../../public/reccommended-icon.png">
    </div>
    <div v-if="error"><h2>Error while loading...</h2></div>
    <RecommendedChannels
      v-for="stream in streams"
      :key="stream.id"
      v-bind="stream"
    />
  </aside>
</template>

<style lang="scss" scoped>
.chat {
  width: 16.25em;
  height: 22.81em;
  

  &__text-container {
    width: 16.25rem;
    height: 2.25rem;
    padding: 0.625rem 0.3125rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--btn-text-color);
    text-transform: uppercase;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.8125rem;
    font-weight: 600;
  }
}
</style>
