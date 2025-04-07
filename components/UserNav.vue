<script setup lang="ts">
import { navButtons } from "@/assets/data/texts.json";
</script>
<template>
  <div class="user-container">
    <div><Icon name="iconoir-crown" size="28" style="color: white" /></div>
    <ul class="user-buttons">
      <li>
        <MyButton :class="'gray'">{{ navButtons.login }}</MyButton>
      </li>
      <li>
        <MyButton :class="'blue'">{{ navButtons["sign up"] }}</MyButton>
      </li>
      <li>
        <div><img src="../public/account.png" /></div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.user-container {
  width: 18em;
  height: 2.5em;
  @include flex(row, center);
  gap: 0.5em;

  .user-buttons {
    display: flex;
    gap: 0.62em;
  }
}
</style>
