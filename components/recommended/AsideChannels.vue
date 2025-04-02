<script setup lang="ts">
import { useStreams } from "@/composables/useStreams";

const { stream, loading, error } = useStreams();
</script>
<template>
  <aside class="chat">
    <div class="chat__text-container">
      <div v-if="loading">Loading content...</div>
      <div v-if="error">Error while loading...</div>
      <p>Recommended Channels</p>
      <img src="../../public/reccommended-icon.png" />
    </div>
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
