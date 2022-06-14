<template>
  <div :class="$style.toggle">
    <button
      @click="$emit('update:modelValue', x)"
      v-for="x in list"
      :class="[$style.button, modelValue === x ? $style.selected : '']"
      :key="x"
    >
      {{ x }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  list: string[];
  modelValue: string;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.toggle {
  display: flex;

  .button {
    padding: $space-1 $space-2;
    height: 24px;
    background: $color-foreground-elevation-1;
    border-radius: $radius-1;
    color: $color-white-040;
    line-height: 1rem;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;

    &.selected {
      background-color: $color-blue;
      color: #fff;
    }
  }
}
</style>
