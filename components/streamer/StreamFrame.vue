<script setup></script>
<template>
  <main class="streamer-container">
    <div class="streamer-content">
      <img
        class="stream-content__img"
        src="https://pbs.twimg.com/media/GM5aSRkXYAAv_0J?format=jpg&name=large "
      />
      <StreamerBottomContent />
    </div>
    <aside><StreamerStreamChat /></aside>
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
