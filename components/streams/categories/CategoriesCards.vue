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
    @include text(700, 0.875em, var(--text-color-white));
    line-height: 1.3125em;
  }

  &__viewers {
    @include text(400, 0.8125em, var(--text-color-gray));
    line-height: 1.2188em;
  }

  &__tag {
    background-color: var(--button-color-gray);
    border-radius: 562.5em;

    @include text(600, 0.75em, var(--text-color-gray));
    line-height: 1.125em;
  }
}
</style>
