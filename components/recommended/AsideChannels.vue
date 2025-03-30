<script setup lang="ts">
import { recommendedChannels } from "@/mocks/recommendedChannels";
</script>
<template>
  <aside class="chat">
    <div class="chat__text-container">
      <p>Recommended Channels</p>
      <img src="../../public/reccommended-icon.png" >
    </div>
    <RecommendedChannels
      v-for="recommendedChannel in recommendedChannels"
      :key="recommendedChannel.id"
      v-bind="recommendedChannel"
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
