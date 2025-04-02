<script setup lang="ts">
import type {Stream} from '@/types/stream'


defineProps<Stream>();
</script>
<template>
  <div class="details-container">
    <NuxtLink to="/streamer">
      <img :src="thumbnail_url.replace('{width}', '382').replace('{height}', '210')" >
</NuxtLink>

    <div class="live-details">

      <img class="live-details__img" :src="thumbnail_url" >
      <div class="live-details__container">
        <p class="live-details__title">{{ title }}</p>
        <p class="live-details__user">{{user_name }}</p>
        <p class="live-details__category">{{ game_name }}</p>
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
