<script setup lang="ts"></script>
<template>
  <aside class="chat-container">
    <section class="stream-chat">
      <img
        class="stream-chat__icon"
        src="../../public/arrow-right.png"
        alt="arrow-right"
      />
      <p class="stream-chat__text">stream chat</p>
      <img class="stream-chat__icon" src="../../public/twopeople.png" />
    </section>

    <section class="gift-container">
      <Icon name="bytesize:chevron-left" style="color: white" />
      <button class="gift-button">Gift a Sub now to be #1!</button
      ><Icon name="bytesize:chevron-right" style="color: white" />
    </section>
  </aside>
</template>

<style lang="scss" scoped>
.chat-container {
  width: 21.3125em;
  height: 54.3125em;
  background-color: var(--bg-color-gray);
  @include flex(column, center, flex-start);
}

.stream-chat {
  width: 21.3125em;
  height: 3em;
  border-bottom: 0.0625em solid gray;
  @include flex(row, center, space-between);
  padding: 0.5625em 0.625em;

  &__icon {
    height: 1.25em;
    width: 1.25em;
  }

  &__text {
    @include text(600, 0.8125em, var(--text-color-white));
    text-transform: uppercase;
  }
}

.gift-container {
  width: 20.1875em;
  height: 4.4375em;
  border-bottom: 0.0625em solid gray;
  @include flex(row, center, space-between);
}

.gift-button {
  width: 16.4375em;
  height: 4.375em;
}
</style>
