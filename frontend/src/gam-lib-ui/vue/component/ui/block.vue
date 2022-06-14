<template>
  <div :class="$style.block">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
@import "../../vars";

.block {
  padding: 10px;
  background-color: #191a1d;
  border-radius: $radius-3;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
