<script setup></script>
<template>
  <div class="channel-name">
    <div class="channel-name__icon">
      <NuxtLink to="/"
        ><img src="~/public/midutch-logo.png" alt="Marlon logo"
      /></NuxtLink>
    </div>

    <div class="channel-name__options">
      <Icon name="humbleicons:dots-vertical" style="color:white" size="20"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channel-name {
  width: 9.18em;
  height: 2.5em;
  @include flex(row, center, space-evenly);

  &__icon {
    width: 6.06em;
    height: 1.75em;
  }
}
</style>
