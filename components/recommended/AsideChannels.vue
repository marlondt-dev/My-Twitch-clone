<script setup lang="ts">
import { useStreams } from "@/composables/useStreams";
import { recommendedChannels } from "@/assets/data/texts.json";

const { stream, loading, error } = useStreams("?first=12&language=es");
</script>
<template>
  <aside class="chat">
    <div class="chat__text-container">
      <p>{{ recommendedChannels.recommended }}</p>
      <img src="../../public/reccommended-icon.png" />
    </div>
    <div v-if="loading"><h3>Loading content...</h3></div>
    <div v-if="error"><h2>Error while loading...</h2></div>
    <RecommendedChannels
      v-for="streams in stream"
      :key="streams.id"
      v-bind="streams"
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
    justify-content: space-between;
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
