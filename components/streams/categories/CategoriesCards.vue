<script setup lang="ts">
import type { CategoriesCards } from "~/types/categoriesCards";

defineProps<CategoriesCards>();
</script>
<template>
  <div class="card">
    <img class="card__img" :src="categoryImg" :alt="categoryName" />
    <div class="card-details">
      <p class="card-details__name">{{ categoryName }}</p>
      <p class="card-details__viewers">{{ categoryViewers }}</p>
      <p class="card-details__tag">{{ categoryTag }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 11.3544em;
  height: 20.2013em;

  &__img {
    width: 11.3544em;
    height: 15.1387em;
  }
}

.card-details {
  width: 11.3544em;
  height: 4.4375em;

  &__name {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    color: var(--text-color-white);
    font-size: 0.875em;
    line-height: 1.3125em;
    font-weight: 700;
  }

  &__viewers {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    color: var(--text-color-gray);
    font-size: 0.8125em;
    font-weight: 400;
    line-height: 1.2188em;
  }

  &__tag {
    min-width: 1.75em;
    height: 1.25em;
    background-color: var(--button-color-gray);
    padding: 0.125em 0.3125em 0 0.3125em;
    border-radius: 562.5em;
    color: var(--text-color-gray);
    font-size: 0.75em;
    font-weight: 600;
    vertical-align: middle;
    line-height: 1.125em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    line-height: 1.125em;
  }
}
</style>
