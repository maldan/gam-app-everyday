<template>
  <div :class="$style.container">
    <Input placeholder="Name" v-model="modalStore.data.name" />
    <Input placeholder="Time" v-model="modalStore.data.time" />
    <Row size="1fr 1fr">
      <Button @click="modalStore.ok()" color="gray" text="Ok" />
      <Button @click="modalStore.cancel()" color="gray" text="Cancel" />
    </Row>
  </div>
</template>

<script setup lang="ts">
import { Row, Button, Input } from '@/gam-lib-ui/vue/component/ui';
import { useModalStore } from '@/gam-lib-ui/vue/store/modal';
const modalStore = useModalStore();
</script>

<style module lang="scss">
@import '@/gam-lib-ui/vue/vars';

.container {
}
</style>
