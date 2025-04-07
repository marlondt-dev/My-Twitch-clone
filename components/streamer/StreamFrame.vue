<script setup lang="ts">
const route = useRoute();
const username = route.params.username;
const hostname = ref("");

onMounted(() => {
  hostname.value = window.location.hostname;
});
</script>
<template>
  <main class="streamer-container">
    <div class="streamer-content">
      <iframe
        :src="`https://player.twitch.tv/?channel=${username}&parent=${hostname}&muted=false`"
        height="720"
        width="100%"
        allowfullscreen
      >
      </iframe>
      <StreamerBottomContent />
    </div>
    <aside>
      <div>
        <iframe
          :src="`https://www.twitch.tv/embed/${username}/chat?parent=${hostname}`"
          height="720"
          width="100%"
        >
        </iframe>
      </div>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.streamer-content {
  width: 51.625em;
  height: 54.3125em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;

  &__img {
    width: 51.625em;
    height: 29.625em;
  }
}

.streamer-container {
  display: flex;
  justify-content: space-between;
}
</style>
