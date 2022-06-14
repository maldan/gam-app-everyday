<template>
  <button :class="[$style.button, $style[color]]">
    <slot name="icon-left"></slot>
    <slot />
    <div v-if="text">{{ text }}</div>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
  color?: "gray";
}>();
</script>

<style module lang="scss">
@import '../../vars';

.button {
  background: $color-main;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  box-shadow: inset 0 0 0 1px $color-white-010;
  outline: none;
  padding: calc($size-1 - 2px) calc($size-2 - 2px);
  border-radius: $radius-1;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darken($color-main, 10%);
  }

  &:active {
    opacity: 0.8;
    position: relative;
    top: 1px;
  }

  &.gray {
    background: $color-foreground-elevation-3;
    box-shadow: inset 0 0 0 1px $color-white-010;
    color: $color-white-060;

    &:hover {
      background-color: $color-foreground-elevation-4;
    }
  }
}
</style>
