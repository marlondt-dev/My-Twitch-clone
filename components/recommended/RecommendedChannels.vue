<script setup lang="ts">
import type { RecommendedChannel } from "~/types/recommendedChannels";

defineProps<RecommendedChannel>();
</script>
<template>
  <div class="channel-container">
    <img class="channel__img" src="../../public/profile.png" />
    <div class="channel-name">
      <p class="channel-name__text">{{ channelName }}</p>
      <p class="channel-name__description">{{ channelDescription }}</p>
    </div>
    <div class="channel-name__viewers"></div>
  </div>
</template>

<style scoped lang="scss">
.channel-container {
  width: 16.25rem;
  height: 2.5rem;
  padding: 0.3125rem 0.625rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.8;
}

.channel-name {
  width: 8.75rem;
  height: 1.875rem;

  &__img {
    max-width: 1.875rem;
    height: 1.875rem;
    border-radius: 62499.9375rem;
  }

  &__text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.875rem;
    line-height: 1.05rem;
    font-weight: 600;
    color: var(--text-color-white);
  }

  &__description {
    font-size: 0.8125rem;
    font-weight: 400;
    letter-spacing: 0%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    color: var(--text-color-gray);
  }

  &__viewers {
    width: 2.5rem;
    height: 1.875rem;
    background-color: gray;
  }
}
</style>
