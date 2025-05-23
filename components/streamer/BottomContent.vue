<script setup lang="ts">
import { streamerButtons } from "@/assets/data/texts.json";
import type { Stream } from "@/types/stream";
import { useTwitchData } from "@/composables/useTwitchData";
import { useRoute, useRouter } from "vue-router";

definePageMeta({
  key: (route) => `streamer-${route.params.username}`,
});

const route = useRoute();
const router = useRouter();

const username = computed(() => {
  return Array.isArray(route.params.username)
    ? route.params.username[0]
    : route.params.username;
});

const { data: streams, refresh } = useTwitchData<Stream>(
  "streams",
  { user_login: username.value },
  {
    includeUserProfiles: true,
    componentId: username.value,
  }
);

watch(
  () => route.params.username,
  async (newUsername) => {
    const normalized = Array.isArray(newUsername)
      ? newUsername[0]
      : newUsername;
    if (normalized !== username.value) {
      await router.replace({ path: `/streamer/${normalized}` });
    }
  }
);

watchEffect(() => {
  refresh();
});
</script>
<template>
  <div :key="`streamer-${username}`">
    <section class="content-container">
      <div class="stream">
        <img
          class="stream__img"
          :src="streams[0]?.profile_image_url"
          :alt="streams[0]?.display_name"
        />
        <article class="stream-content">
          <div class="stream-content-top">
            <p class="stream-content-top__text">
              {{ streams[0]?.display_name }}
            </p>
            <div class="stream-content__buttons">
              <MyButton :class="'blue'">
                <img src="~/public/heart.png" alt="Follow"/>
                {{ streamerButtons.follow }}
              </MyButton>
              <MyButton :class="'gray'">
                {{ streamerButtons.suscribe }}
                <img src="~/public/star.png" alt="star" />
                <Icon name="cuida:caret-down-outline" size="24" />
              </MyButton>
            </div>
          </div>

          <div class="stream-content-middle">
            <p class="stream-content-middle__text">
              {{ streams[0]?.title || "Offline" }}
            </p>
            <div class="stream-content-middle__viewers">
              {{ streams[0]?.viewer_count }}
              <img src="~/public/Frame26.png" alt="subscribe options"/>
            </div>
          </div>

          <p class="stream-content__category">{{ streams[0]?.game_name }}</p>
          <span class="stream-content__tags">tags</span>
        </article>
      </div>

      <p class="about">About {{ streams[0]?.display_name }}</p>
      <article class="stream-description">
        <p class="stream-description__text">
          {{ streams[0]?.viewer_count }} followers
        </p>
        <p class="stream-description__text">
          {{ streams[0]?.description || "No description provided" }}
        </p>
        <div class="stream-description-container">
          <img
            class="stream-description-container__rrss"
            src="~/public/youtube.png" alt="Youtube"
          />
          <img
            class="stream-description-container__rrss"
            src="~/public/instagram.png"
           alt=" instagram"/>
          <img
            class="stream-description-container__rrss"
            src="~/public/twitter.png  " alt=" twitter"
          />
          <img
            class="stream-description-container__rrss"
            src="~/public/TikTok.png" alt=" Tiktok"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content-container {
  width: 51.625em;
  height: 23.4375em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  padding: 0 0.625em;
}

.stream {
  width: 50.375em;
  height: 8.6875em;
  display: flex;
  justify-content: space-between;

  &__img {
    width: 4em;
    height: 4em;
    border-radius: 62499.9375em;
  }
}

.stream-content {
  width: 45.8125em;
  height: 8.6875em;

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
  }

  &-top {
    display: flex;
    justify-content: space-between;
  }

  &-top__text {
    color: var(--btn-text-color);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 1.125em;
  }

  &__category {
    color: var(--button-color-blue);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.875em;
    font-weight: 400;
  }

  &__tags {
    background-color: var(--button-color-gray);
    color: var(--text-color-gray);
  }
}

.stream-content-middle {
  width: 45.8125em;
  height: 2.125em;
  display: flex;
  justify-content: space-between;

  &__text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 0.875em;
    color: var(--btn-text-color);
  }

  &__viewers {
    color: rgb(156, 81, 81);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
  }
}

.stream-description {
  width: 50.375em;
  height: 10.875em;
}

.about {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1.125em;
  color: var(--btn-text-color);
}

.stream-description {
  width: 50.375em;
  height: auto;
  padding: 1.25em;
  background-color: var(--bg-color-gray);
  display: flex;
  flex-direction: column;
  gap: 1.375em;

  &__text {
    color: var(--btn-text-color);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.875em;
    font-weight: 400;
  }

  &-container {
    width: 47.875em;
    height: 2.5625em;
    border-top: 0.1em solid gray;
    padding: 1em 0;
    margin: 0 auto;

    &__rrss {
      margin-right: 1em;
    }
  }
}
</style>
