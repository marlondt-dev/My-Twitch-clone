<script setup lang="ts">
import type { DirectCard } from "@/types/directCard";
import { useStreams } from "@/composables/useStreams";

const { stream, loading, error } = useStreams();

defineProps<DirectCard>();
</script>
<template>
  <div class="details-container">
    <NuxtLink to="/streamer">
      <img :src="headerImg" class="details-container__img"
    /></NuxtLink>

    <div class="live-details">
      <img class="live-details__img" :src="icon" />
      <div class="live-details__container">
        <p class="live-details__title">{{ title }}</p>
        <p class="live-details__user">{{ userName }}</p>
        <p class="live-details__category">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details-container {
  max-width: 23.87em;
  height: 19.901em;
  background-color: black;
  color: white;

  &__img {
    width: 23.875em;
    height: 13.1512em;
  }
}

.live-details {
  width: 23.875em;
  height: 6.125em;
  display: flex;
  justify-content: space-between;

  &__container {
    width: 20.4375em;
    height: 6.125em;
    @include flex(column, left, space-evenly);
  }

  &__img {
    width: 2.6875em;
    height: 2.6875em;
    border-radius: 62499.9375em;
  }

  &__title {
    @include text(600, 0.875em, var(--text-color-white));
  }

  &__user {
    @include text(400, 0.8125em, var(--text-color-gray));
  }

  &__category {
    @include text(400, 0.8125em, var(--text-color-gray));
  }
}
</style>
