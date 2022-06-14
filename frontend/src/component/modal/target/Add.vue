<template>
  <div :class="$style.container">
    <Row size="1fr 1fr">
      <Button @click="modalStore.ok()" color="gray" text="Ok" />
      <Button @click="modalStore.cancel()" color="gray" text="Cancel" />
    </Row>
  </div>
</template>

<script setup lang="ts">
import { Row, Button } from '@/gam-lib-ui/vue/component/ui';
import { useModalStore } from '@/gam-lib-ui/vue/store/modal';
const modalStore = useModalStore();
</script>

<style module lang="scss">
@import '@/gam-lib-ui/vue/vars';

.container {
  display: grid;
  grid-template-columns: v-bind(size);
  gap: $space-1;
  align-items: center;
}
</style>
