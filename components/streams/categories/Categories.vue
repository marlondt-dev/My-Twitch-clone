<script setup lang="ts">
import CategoriesCards from "./CategoriesCards.vue";
import { useTwitchData } from '@/composables/useTwitchData'
import type { Category } from '@/types/categoryCard'
const { 
  data: categories, 
  pending: loading, 
  error, 
  startPeriodicRefresh,
} = useTwitchData<Category>('games/top', { first: 6 })
  onMounted(() => {
  startPeriodicRefresh(60000); 
});
</script>
<template>
  <div>
    <StreamsStreamContainer name="Categories" height="category">
      <div class="category-container">
        <div v-if="loading"><h2>Cargando categorias...</h2></div>
        <div v-else-if="error">Error al cargar las categorías</div>
        <CategoriesCards
          v-for="category in categories"
          :key="category.id"
          v-bind="{
            id: category.id,
            name: category.name,
            box_art_url: category.box_art_url
          }"
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
