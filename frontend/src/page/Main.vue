<template>
  <div :class="$style.main">
    <Block style="padding: 0; width: 200px">
      <Section title="Today">
        <Row
          v-for="x in targetStore.list"
          :size="isEditMode ? '32px 1fr 30px' : '1fr 30px'"
          style="padding: 5px 0"
          :key="x.id"
        >
          <Button v-if="isEditMode" color="gray" style="padding: 1px; margin-right: 5px"
            ><IconPencil size="24" color="#999999"
          /></Button>
          <div>{{ x.name }}</div>
          <Checkbox v-model="x.status" />
        </Row>
      </Section>
      <Section title="Edit">
        <Row size="1fr 1fr">
          <Button @click="add" color="gray">Add</Button>
          <Button @click="edit" color="gray">Edit</Button>
        </Row>
      </Section>
    </Block>
  </div>
</template>

<script setup lang="ts">
import { Button, Checkbox, Block, Row, Section } from '../gam-lib-ui/vue/component/ui';
import { IconPencil } from '../gam-lib-ui/vue/component/icon';
import { onMounted, ref } from 'vue';
import { API_URL } from '@/const';
import { useTargetStore } from '@/store/target';

const isEditMode = ref(false);
const targetStore = useTargetStore();

onMounted(async () => {
  await targetStore.getList();
});

async function add() {
  await targetStore.add('z');
  await targetStore.getList();
}

function edit() {
  isEditMode.value = !isEditMode.value;
}
</script>

<style module lang="scss">
@import '../gam-lib-ui/vue/vars';

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .time {
    font-size: 24px;
    text-align: center;
  }
}
</style>
