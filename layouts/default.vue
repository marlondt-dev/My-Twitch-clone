<script setup lang="ts"></script>

<template>
  <div>
    <nav class="nav-container">
      <NavChannelName />
      <NavSearchBar />
      <UserNav />
    </nav>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  width: 95.62em;
  height: 3.12em;
  margin: auto;
  background-color: var(--bg-color-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.31em 1.25em;
  box-shadow: 0px 0px 2px 0 #000000e5;
  box-shadow: 0px 1px 2px 0 #000000e5;
}
</style>
