<script setup lang="ts">
import CategoriesCards from "./CategoriesCards.vue";
import { useCategories } from "@/composables/useCategories";

const { categories, loading, error } = useCategories();
</script>
<template>
  <div>
    <StreamsStreamContainer :name="'Categories'" :height="'category'">
      <div class="category-container">
        <div v-if="loading"><h2>Cargando categorias...</h2></div>
        <div v-else-if="error">Error al cargar los streams</div>
        <CategoriesCards
          v-for="categoryCard in categories"
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
