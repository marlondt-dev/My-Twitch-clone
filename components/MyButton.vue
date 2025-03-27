<script setup lang="ts">
defineProps<{
  color?: "blue" | "gray";
}>();
</script>

<template>
  <button class="btn" :class="color"><slot /></button>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.btn {
  padding: 0.4em 0.5em;
  font-weight: bold;
  border-radius: 0.25em;
  height: 1.87em;
}

.blue {
  background-color: var(--button-color-blue);
  color: #ffffff;

  @include desktop {
    background-color: red;
  }
}

.gray {
  background-color: var(--button-color-gray);
  color: var(--text-color-white);
}
</style>
