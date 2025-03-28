<script setup lang="ts">
import { StreamsChannelContent } from "#components";

import { directCards } from "@/mocks/directCards";
</script>
<template>
  <div>
    <NuxtLayout name="channel">
      <div class="channels">
        <StreamsChannelContent
          v-for="directCard in directCards"
          :key="directCard.id"
          v-bind="directCard"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.channels-container {
  width: 76.25em;
  height: 21.91em;

  &__text {
    font-weight: 600;
    font-size: 1.125;
    color: var(--btn-text-color);
    margin-bottom: 0.5em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    &--blue {
      font-weight: 600;
      font-size: 1.125;
      color: var(--button-color-blue);
    }
  }
}

.channels {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.3125rem;
  width: 76.25em;
  height: 19.9em;
}
</style>
