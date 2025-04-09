<script setup lang="ts">
import { streamChat } from "@/assets/data/texts.json";
</script>

<template>
  <aside class="chat-container">
    <section class="stream-chat">
      <img
        class="stream-chat__icon"
        src="~/public/arrow-right.png"
        alt="arrow-right"
      />
      <p class="stream-chat__text">{{ streamChat.streamTitle }}</p>
      <img class="stream-chat__icon" src="~/public/twopeople.png" alt="users"/>
    </section>

    <section class="gift-container">
      <Icon name="bytesize:chevron-left" style="color: white" />
      <button class="gift-button">
        <img src="~/public/gift.png" alt="gift" /> {{ streamChat.giftButton }}</button
      ><Icon name="bytesize:chevron-right" style="color: white" />
    </section>
    <section class="online-chat-container">
      <p>{{ streamChat.welcome }}</p>
    </section>
    <section class="chat-message">
      <div class="chat-message__slow">
        <Icon name="iconoir:info-circle-solid" size="18" />
        <p>{{ streamChat.slow }}</p>
      </div>

      <div class="chat-message__send">
        <p>{{ streamChat.message }}</p>
        <Icon name="tdesign:wink" size="16" />
      </div>
    </section>
  </aside>
</template>

<style lang="scss" scoped>
.chat-container {
  width: 21.3125em;
  height: 54.3125em;
  background-color: var(--bg-color-gray);
  @include flex(column, center, flex-start);
  gap: 0.625em;
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
  @include text(600, 0.8125em, var(--button-color-blue));
  background-color: var(--bg-color-gray);
  @include flex(row, center, space-evenly);
}

.online-chat-container {
  width: 20.1875em;
  height: 37.7006em;
  background-color: gray;
}

.chat-message {
  width: 20.1875em;
  height: 4.5938em;

  &__slow {
    height: 2.25rem;
    background-color: rgba(31, 31, 35, 1);
    padding: 0.5em;
    @include text(600, 0.8125em, var(--text-color-gray));
    border: 0.0625em solid rgba(83, 83, 95, 0.48);
    border-radius: 0.375em 0.375em 0.375em 0;
    @include flex(row, center, flex-start);
    gap: 0.7em;
  }

  &__send {
    height: 2.4688em;
    padding: 0.3125em 0.8em;
    border: 0.0625em solid rgba(83, 83, 95, 0.48);
    box-shadow: 0 0 0 0.0625em #dedee366 inset;
    background-color: var(--bg-color-gray);
    border-radius: 0.25em;
    @include text(400, 0.8125em, #ffffffb2);
    @include flex(row, center, space-between);
  }
}
</style>
