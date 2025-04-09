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
  first: 4,
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
  width: 100%;
  max-width: 76.25em;
  margin: 0 auto;
  overflow: visible;
  padding: 0 1rem; 
}

.channels {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Por defecto 4 columnas para pantallas grandes */
  gap: 0.75em; 
  width: 100%;
  transition: all 0.3s ease; 
}

/* Tablets grandes */
@media (max-width: 74em) { 
  .channels {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablets medianas */
@media (max-width: 64em) { 
  .channels {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Móviles grandes */
@media (max-width: 40em) { 
  .channels {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
  }
}

/* Móviles pequeños */
@media (max-width: 30em) { 
  .channels {
    grid-template-columns: 1fr;
  }
}
</style>
