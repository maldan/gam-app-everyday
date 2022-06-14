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
    <path d="M6.4 14.66L5 19L9.34 17.6L6.4 14.66Z" :fill="color" />
    <path d="M14.2138 6.82356L7.38324 13.6541L10.353 16.6239L17.1836 9.79336L14.2138 6.82356Z" :fill="color" />
    <path
      d="M18.79 7.17L16.83 5.21C16.55 4.93 16.13 4.93 15.85 5.21L15.22 5.84L18.16 8.78L18.79 8.15C19.07 7.87 19.07 7.45 18.79 7.17Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
    size?: number | string;
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
