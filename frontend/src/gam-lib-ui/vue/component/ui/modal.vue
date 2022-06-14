<template>
  <div :class="$style.modal" @click.stop="">
    <div :class="$style.window">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
@import '../../vars';

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .window {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-ui-bg;
    color: $color-white-060;
    padding: 10px;
  }
}
</style>
