<script setup lang="ts">
import { StreamsChannelContent } from "#components";
import { directCards } from "@/mocks/directCards";
</script>
<template>
  <div>
    <StreamsStreamContainer :name="'Live Channels'" :height="'live'">
      <div class="channels">
        <StreamsChannelContent
          v-for="directCard in directCards"
          :key="directCard.id"
          v-bind="directCard"
        />
      </div>
    </StreamsStreamContainer>
  </div>
</template>

<style lang="scss" scoped>
.channels-container {
  width: 76.25em;
  height: 21.91em;

  &__text {
    @include text(600, 1.125em, var(--btn-text-color));

    &--blue {
      @include text(600, 1.125em, var(--button-color-blue));
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
