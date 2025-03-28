<script setup lang="ts">
defineProps<{
  name: string;
  height?: "live" | "category";
}>();
</script>
<template>
  <div>
    <section class="channels-container" :class="height">
      <p class="channels-container__text">
        <span class="channels-container__text channels-container__text--blue">{{
          name
        }}</span>
        we think you'll like
      </p>
      <slot />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.channels-container {
  width: 76.25em;

  &__text {
    font-weight: 600;
    font-size: 1.125;
    color: var(--btn-text-color);
    margin-bottom: 0.5em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    &--blue {
      font-weight: 600;
      font-size: 1.125;
      color: var(--button-color-blue);
    }
  }
}

.live {
  height: 21.91em;
}
.category {
  height: 22.2638em;
}
</style>
