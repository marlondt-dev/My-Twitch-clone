<script setup lang="ts">
import type { Stream } from "@/types/stream";

defineProps<Stream>();
</script>
<template>
  <div class="channel-container">
    <img
      class="channel-img"
      :src="`https://static-cdn.jtvnw.net/jtv_user_pictures/${user_id}-profile_image-70x70.png`"
    />
    <div class="channel-name">
      <p class="channel-name__text">{{ user_name }}</p>
      <p class="channel-name__description">{{ game_name }}</p>
    </div>
    <div class="channel-name__viewers">
      <img
        class="channel-name__viewers__icon"
        src="../../public/Background.png"
      />
      <p>{{ viewer_count }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.channel-container {
  width: 16.25rem;
  height: 2.5rem;
  padding: 0.3125rem 0.625rem;

  @include flex(row, center, space-between);
  line-height: 0.8;
}

.channel-img {
  max-width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
}

.channel-name {
  width: 8.75rem;
  height: 1.875rem;

  &__text {
    @include text(600, 0.875em, var(--text-color-white));
    line-height: 1.05em;
  }

  &__description {
    @include text(400, 0.8125em, var(--text-color-gray));
  }

  &__viewers {
    width: 2.5rem;
    height: 1.875rem;
    @include text(400, 0.8125em, var(--text-color-white));
    display: flex;
    gap: 0.2em;

    &__icon {
      width: 0.5em;
      height: 0.5em;
      border-radius: 562.5em;
    }
  }
}
</style>
