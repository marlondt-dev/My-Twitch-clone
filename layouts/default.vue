<script setup lang="ts"></script>

<template>
  <div>
    <nav class="container">
      <MyButton :class="'gray'">Log in</MyButton>
      <MyButton :class="'blue'">Sign Up </MyButton>
    </nav>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 95em;
  height: 3.12em;
  background-color: var(--bg-color-gray);
}
</style>
