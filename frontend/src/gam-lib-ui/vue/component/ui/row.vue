<template>
  <div :class="$style.row">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.row {
  display: grid;
  grid-template-columns: repeat(v-bind(size), 1fr);
  gap: $space-1;
}
</style>
