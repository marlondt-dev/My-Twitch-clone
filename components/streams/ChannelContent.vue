<script setup lang="ts">
import type { DirectCard } from "@/types/directCard";
defineProps<DirectCard>();
</script>
<template>
  <div class="channel">
    {{ $props }}
    <h1>{{ userName }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.channel {
  max-width: 23.87em;
  height: 19.901em;
  background-color: black;
  color: white;
}
</style>
