<template>
  <div :class="$style.container">
    <input
      :class="$style.input"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.container {
  height: $space-4;
  width: 100%;

  .input {
    appearance: none;
    color: inherit;
    line-height: 1rem;
    padding: $space-1 $space-2;
    width: 100%;
    height: 100%;
    min-height: 24px;
    outline: none;
    background: $color-foreground-elevation-1;
    border-radius: $radius-1;
    border: 1px solid transparent;
    box-sizing: border-box;
  }
}
</style>
