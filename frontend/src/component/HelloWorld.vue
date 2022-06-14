<template>
  <div :class="$style.block">1</div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<style lang="scss" module>
.block {
  width: 32px;
  background-color: #191a1d;
}
</style>
