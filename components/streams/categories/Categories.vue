<script setup lang="ts">
import CategoriesCards from "./CategoriesCards.vue";
import { categoryCards } from "@/mocks/categoriesCards";
</script>
<template>
  <div>
    <StreamsStreamContainer :name="'Categories'" :height="'category'">
      <div class="category-container">
        <CategoriesCards
          v-for="categoryCard in categoryCards"
          :key="categoryCard.id"
          v-bind="categoryCard"
        />
      </div>
    </StreamsStreamContainer>
  </div>
</template>

<style lang="scss" scoped>
.category-container {
  height: 20.2638em;
  width: 76.25em;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
