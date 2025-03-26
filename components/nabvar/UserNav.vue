<script setup lang="ts"></script>
<template>
  <div class="user-container">
    <div><img src="../public/button-prime.png" /></div>
    <div class="user-buttons">
      <MyButton :class="'gray'">Log in</MyButton>
      <MyButton :class="'blue'">Sign Up </MyButton>
      <div><img src="../public/account" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-container {
  width: 18em;
  height: 2.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;

  .user-buttons {
    display: flex;
    gap: 0.62em;
  }
}
</style>
