<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      width: `${size + 'px'}`,
      height: `${size + 'px'}`,
    }"
  >
    <path
      d="M5.88235 20H4V18.1176L10.1176 12L4 5.88235V4H5.88235L12 10.1176L18.1176 4H20V5.88235L13.8824 12L20 18.1176V20H18.1176L12 13.8824L5.88235 20Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
    size?: number;
  }>(),
  {
    color: '#fefefe',
    size: 16,
  },
);
</script>

<style module lang="scss">
svg {
  display: block;
}
</style>
