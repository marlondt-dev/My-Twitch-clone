<script setup lang="ts">
import { StreamsChannelContent } from "#components";
import { useStreams } from "@/composables/useStreams";

const { stream, loading, error } = useStreams();



</script>
<template>
  <div>
    <StreamsStreamContainer :name="'Live Channels'" :height="'live'">
      <div class="channels">
        <div v-if="loading">Cargando streams...</div>
        <div v-else-if="error">Error al cargar los streams</div>
        <StreamsChannelContent
          v-for="streams in stream"
          :key="streams.id"
          v-bind="streams"
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
