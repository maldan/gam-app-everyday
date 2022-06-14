<template>
  <div :class="$style.section">
    <div :class="$style.header">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.section {
  background-color: $color-ui-bg;
  padding: $space-3 $space-3;
  border-bottom: 1px solid $color-white-005;

  &:hover {
    background-color: $color-ui-bg-hover;
  }

  .header {
    margin-bottom: 10px;
  }
}
</style>
