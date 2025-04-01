<script setup lang="ts"></script>
<template>
  <div class="user-container">
    <div><img src="../public/button-prime.png" /></div>
    <ul class="user-buttons">
      <li><MyButton :class="'gray'">Log in</MyButton></li>
      <li><MyButton :class="'blue'">Sign Up </MyButton></li>
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
