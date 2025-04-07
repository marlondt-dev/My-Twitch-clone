<script setup lang="ts">
import type { Stream } from "@/types/stream";

defineProps<{
  stream: Stream;
}>();
</script>
<template>
  <div class="details-container">
    <NuxtLink :to="`/streamer/${stream.user_login}`">
      <img
        :src="
          stream.thumbnail_url
            .replace('{width}', '382')
            .replace('{height}', '210')
        "
      />
    </NuxtLink>
    <div class="live-details">
      <img class="live-details__img" :src="stream.profile_image_url" />
      <div class="live-details__container">
        <NuxtLink :to="`/streamer/${stream.user_login}`"
          ><p class="live-details__title">{{ stream.title }}</p></NuxtLink
        >
        <p class="live-details__user">{{ stream.user_name }}</p>
        <p class="live-details__category">{{ stream.game_name }}</p>
        <div  v-if="stream.tags && stream.tags.length > 0" class="tags-container">
    <span 
      v-for="(tag, index) in stream.tags.slice(0, 2)" 
      :key="index" 
      class="tag"
    >
      {{ tag }}
    </span>
  </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details-container {
  max-width: 23.87em;
  height: auto;
  background-color: black;
  color: white;
  overflow: hidden;

  &__img {
    width: 23.875em;
    height: 13.1512em;
  }
}

.details-container:hover{
    transform: translate(-0.25em, -0.25em); 
  box-shadow: 0.25em 0.25em 0 rgba(145, 70, 255, 0.6); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .details-container:hover img {
  transform: scale(1.03);
  transition: transform 0.3s ease;
}

.live-details {
  width: 23.875em;
  height: auto;
  display: flex;
  justify-content: space-between;

  &__container {
    width: 20.4375em;
    height: auto;
    @include flex(column, left, space-evenly);
  }

  &__img {
    width: 2.6875em;
    height: 2.6875em;
    border-radius: 62499.9375em;
  }

  &__title {
    @include text(600, 0.875em, var(--text-color-white));
    transition: 0.3s ease;
    white-space: nowrap;       
    overflow: hidden;          
    text-overflow: ellipsis; 
    max-width: 100%; 
  }

  &__title:hover {
    color: #a970ff;
  }

  &__category:hover {
    color: #a970ff;
  }

  &__user {
    @include text(400, 0.8125em, var(--text-color-gray));
  }

  &__category {
    @include text(400, 0.8125em, var(--text-color-gray));
    transition: 0.3s ease;
  }
}

.tags-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25em;
  @include text(500, 0.75em, #bf94ff);
  border: 0.063em solid rgba(145, 70, 255, 0.2);
}
</style>
