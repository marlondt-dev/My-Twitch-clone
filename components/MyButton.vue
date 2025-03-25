<script setup lang="ts">
defineProps<{
  color?: "blue" | "gray";
}>();
</script>

<template>
  <button class="btn" :class="color"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.4em 0.5em;
  font-weight: bold;
  border-radius: 5%;
}

.blue {
  background-color: var(--button-color-blue);
  color: var(--text-color-white);
}

.gray {
  background-color: var(--button-color-gray);
  color: var(--text-color-white);
}
</style>
