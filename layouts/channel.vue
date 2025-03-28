<script setup lang="ts"></script>
<template>
  <div>
    <section class="channels-container">
      <p class="channels-container__text">
        <span class="channels-container__text channels-container__text--blue"
          >Live Channels</span
        >
        we think you'll like
      </p>
      <slot />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.channels-container {
  width: 76.25em;
  height: 21.91em;

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

.channels {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 76.25em;
  height: 19.9em;
}

.divider {
  width: 76.25rem;
  height: 2.5rem;
  background-color: gray;
}
</style>
