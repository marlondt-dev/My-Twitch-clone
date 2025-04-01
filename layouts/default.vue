<script setup lang="ts"></script>

<template>
  <div>
    <nav class="nav-container">
      <NavChannelName />
      <NavSearchBar />
      <UserNav />
    </nav>
    <div class="page-container">
      <RecommendedAsideChannels />
      <main class="main-container">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  max-width: 95.62em;
  height: 3.12em;
  margin: auto;
  background-color: var(--bg-color-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.31em 1.25em;
  box-shadow: 0 0 0.125em 0 #000000e5;
  box-shadow: 0 0.0625em 0.125em 0 #000000e5;
}

.page-container {
  display: flex;
  max-width: 95.625em;
  height: 141.688em;
  margin: auto;
  justify-content: space-evenly;
  margin-top: 1.25em;
  padding: 0 1.25rem;
}
</style>
