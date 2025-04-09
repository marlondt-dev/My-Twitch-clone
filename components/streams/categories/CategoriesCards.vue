<script setup lang="ts">
import type { Category } from "~/types/categoryCard";

defineProps<Category>();
</script>
<template>
  <div class="card">
    <img
      class="card__img"
      :src="box_art_url.replace('{width}', '181').replace('{height}', '242')"
      :alt="name"
    />
    <div class="card-details">
      <p class="card-details__name">{{ name }}</p>
      <p class="card-details__viewers">45545</p>
      <span class="card-details__tag">tag</span>
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
    transition: 0.3s ease;
  }
}

.card__img:hover {
  -webkit-box-shadow: -12px 7px 5px -1px rgba(219, 15, 219, 1);
  -moz-box-shadow: -12px 7px 5px -1px rgba(219, 15, 219, 1);
  box-shadow: -12px 7px 5px -1px rgba(219, 15, 219, 1);
}

.card-details {
  width: 11.3544em;
  height: 4.4375em;
  @include flex(column, left);
  gap: 0.31em;

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
