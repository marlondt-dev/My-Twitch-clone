<script setup lang="ts">
import { channelContainers } from "@/assets/data/texts.json";

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
        {{ channelContainers.like }}
      </p>
      <slot />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.channels-container {
  width: 76.25em;
  margin: 1em;

  &__text {
    @include text(600, 1.125em, var(--btn-text-color));
    margin-bottom: 0.5em;

    &--blue {
      @include text(600, 1.125em, var(--button-color-blue));
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
