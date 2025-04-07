<script setup lang="ts">
import { StreamsChannelContent } from "#components";
import { useTwitchData } from "@/composables/useTwitchData";
import type { Stream } from "@/types/stream";

const props = defineProps({
  sectionId: {
    type: String,
    default: "main",
  },
  title: {
    type: String,
    default: "Live channels",
  },
  language: {
    type: String,
    default: "es",
  },
  gameId: {
    type: String,
    default: "",
  },
});

const streamParams = {
  first: 3,
  language: props.language,
};

if (props.gameId) {
  streamParams.game_id = props.gameId;
}
const {
  data: streams,
  error,
  pending,
  startPeriodicRefresh,
} = useTwitchData<Stream>("streams", streamParams, {
  includeUserProfiles: true,
  componentId: `live-channels-${props.sectionId}`,
});

onMounted(() => {
  startPeriodicRefresh(60000);
});
</script>

<template>
  <div class="channels-container">
    <StreamsStreamContainer :name="title" height="live">
      <div v-if="pending && streams.length === 0">
        <h3>Loading content...</h3>
      </div>
      <div v-else-if="error"><h2>Error while loading...</h2></div>
      <div v-else-if="streams.length === 0"><h3>No streams available</h3></div>
      <div v-else class="channels">
        <StreamsChannelContent
          v-for="stream in streams"
          :key="stream.id"
          :stream="stream"
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
