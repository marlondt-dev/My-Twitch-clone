<script setup lang="ts"></script>
<template>
  <div class="search-pannel">
    <div>
      <input class="search-pannel__search" type="text" placeholder="Search" />
    </div>

    <MyButton class="search-panel__icon" :color="'gray'">
      <img class="search-panel__icon__img" src="../public/SVG.png" />
    </MyButton>
  </div>
</template>

<style lang="scss" scoped>
.search-pannel {
  width: 24.375em;
  height: 2.5em;
  display: flex;
  align-items: center;

  &__search {
    box-shadow: 0px 0px 0px 1px #dedee366 inset;
    border-radius: 0.37em 0em 0.37em 0.37em;
    height: 2.7em;
    width: 22.25em;
    background-color: #18181b;
    padding: 0.9em;
  }
  input::placeholder {
    color: var(--text-color-totalwhite);
  }
  .search-panel__icon {
    width: 2.2em;
    height: 2.7em;
    padding: 0em 0.31em;
    border-radius: 0.37em 0.37em 0.37em 0em;
  }
}
</style>
