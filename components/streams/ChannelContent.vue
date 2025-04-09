<template>
  <div class="details-container">
    <NuxtLink :to="`/streamer/${stream.user_login}`" class="thumbnail-link">
      <div class="image-container">
        <img
          class="thumbnail"
          :src="
            stream.thumbnail_url
              .replace('{width}', '440')
              .replace('{height}', '248')
          "
          alt="stream picture"
        />
        <div class="viewer-count">
          <span class="live-indicator"></span>
          {{ formatViewerCount(stream.viewer_count) }}
        </div>
      </div>
    </NuxtLink>
    <div class="live-details">
      <NuxtLink :to="`/streamer/${stream.user_login}`" class="profile-link">
        <img
          class="live-details__img"
          :src="stream.profile_image_url"
          alt="stream profile picture"
        />
      </NuxtLink>
      <div class="live-details__container">
        <NuxtLink :to="`/streamer/${stream.user_login}`">
          <p class="live-details__title" :title="stream.title">
            {{ stream.title }}
          </p>
        </NuxtLink>
        <p class="live-details__user">{{ stream.user_name }}</p>
        <p class="live-details__category">{{ stream.game_name }}</p>
        <div
          v-if="stream.tags && stream.tags.length > 0"
          class="tags-container"
        >
          <span
            v-for="(tag, index) in stream.tags.slice(0, 3)"
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

<script setup lang="ts">
import type { Stream } from "@/types/stream";

defineProps<{
  stream: Stream;
}>();

function formatViewerCount(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  }
  return count.toString();
}
</script>

<style lang="scss" scoped>
.details-container {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  color: white;
  overflow: hidden;
  position: relative;
  border-radius: 0.25em;
}

.thumbnail-link {
  display: block;
  width: 100%;
}

.live-details {
  width: 100%;
  height: auto;
  display: flex;
  gap: 0.5em;
  padding: 0.5em 0;

  &__container {
    width: 100%;
    flex: 1;
    min-width: 0;
    height: auto;
    @include flex(column, left, space-evenly);
  }

  &__img {
    width: 2.6875em;
    height: 2.6875em;
    border-radius: 50%;
    object-fit: cover;
  }

  &__title {
    @include text(600, 0.875em, var(--text-color-white));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    transition: color 0.3s ease;
    line-height: 1.2;
    margin-bottom: 0.25em;
  }

  &__title:hover {
    color: #a970ff;
  }

  &__user {
    @include text(400, 0.8125em, var(--text-color-gray));
    margin-bottom: 0.25em;
  }

  &__category {
    @include text(400, 0.8125em, var(--text-color-gray));
    transition: color 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__category:hover {
    color: #a970ff;
  }
}

.image-container {
  position: relative;
  border-radius: 0.25em;
  overflow: visible;
  aspect-ratio: 16/9;
}

.thumbnail {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.25em;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  z-index: 1;
}

.viewer-count {
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.1em 0.5em;
  border-radius: 0.25em;
  font-size: 0.75em;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25em;
}

.live-indicator {
  display: inline-block;
  width: 0.5em;
  height: 0.5em;
  background-color: #e91916;
  border-radius: 50%;
}

.image-container:hover .thumbnail {
  transform: translate(0.5em, -0.5em);
  box-shadow: -0.5em 0.5em 0 rgba(145, 70, 255, 0.6);
}

.tags-container {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.25rem;
  flex-wrap: wrap;
}

.tag {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.15rem 0.35rem;
  border-radius: 0.25em;
  @include text(500, 0.7em, #bf94ff);
  border: 0.063em solid rgba(145, 70, 255, 0.2);
  white-space: nowrap;
}

@media (max-width: 64em) {
  .live-details__title {
    font-size: 0.8em;
  }

  .live-details__user,
  .live-details__category {
    font-size: 0.75em;
  }

  .tag {
    font-size: 0.65em;
  }
}

@media (max-width: 30em) {
  .live-details {
    align-items: flex-start;
  }
}
</style>
