<template>
  <div
    @click="$emit('update:modelValue', !modelValue)"
    :class="[$style.checkbox, modelValue ? $style.selected : null]"
  >
    <div></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.checkbox {
  background-color: $color-white-010;
  width: 32px;
  height: 16px;
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  > div {
    background-color: $color-white-020;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 16px;
    height: 16px;
    border-radius: 16px;
    transition: left 0.2s ease, right 0.2s ease-in;
  }

  &.selected {
    background-color: $color-main;

    > div {
      background-color: #fff;
      left: calc(100% - 16px);
      right: 0;
      transition: left 0.2s ease-in, right 0.2s ease;
    }
  }
}
</style>
