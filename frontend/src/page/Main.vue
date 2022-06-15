<template>
  <div :class="$style.main">
    <Block style="padding: 0; width: 320px">
      <Section title="TODO">
        <Row
          v-for="x in targetStore.sortedList"
          :size="isEditMode ? '32px 1fr 40px 30px' : '1fr 40px 30px'"
          :class="$style.row"
          :key="x.id"
        >
          <Button v-if="isEditMode" @click="editTarget(x)" color="darkgray" style="padding: 1px; margin-right: 5px">
            <IconPencil size="24" color="#999999" />
          </Button>
          <div>{{ x.name }}</div>
          <div>{{ x.time }}</div>
          <Checkbox @change="changeStat" v-model="x.status" />
        </Row>
      </Section>
      <Section title="Edit">
        <Row size="1fr 1fr">
          <Button @click="add" color="gray">Add</Button>
          <Button @click="edit" color="gray">Edit</Button>
        </Row>
      </Section>
      <Section title="Date">
        <Row size="40px 1fr 40px">
          <Button @click="left" color="gray" style="padding: 2px">
            <IconArrowLeftSmall size="24" color="#999999" />
          </Button>
          <div style="text-align: center">{{ showDate() }}</div>
          <Button @click="right" color="gray" style="padding: 2px">
            <IconArrowRightSmall size="24" color="#999999" />
          </Button>
        </Row>
      </Section>
    </Block>
  </div>
</template>

<script setup lang="ts">
import { Button, Checkbox, Block, Row, Section } from '../gam-lib-ui/vue/component/ui';
import { IconPencil, IconArrowLeftSmall, IconArrowRightSmall } from '../gam-lib-ui/vue/component/icon';
import { onMounted, ref } from 'vue';
import { type ITarget, useTargetStore } from '@/store/target';
import { useModalStore } from '@/gam-lib-ui/vue/store/modal';
import dayjs from 'dayjs';
import { useStatStore } from '@/store/stat';

// Stores
const targetStore = useTargetStore();
const modalStore = useModalStore();
const statStore = useStatStore();

// Vars
const isEditMode = ref(false);
const date = ref(dayjs());

// Hooks
onMounted(async () => {
  await refresh();
});

// Methods
async function add() {
  modalStore.show(
    'target/add',
    {
      name: '',
      time: '00:00',
    },
    async (data: any) => {
      await targetStore.add(data.name, data.time);
      await targetStore.getList();
      modalStore.close();
    },
  );
}

function edit() {
  isEditMode.value = !isEditMode.value;
}

function editTarget(target: ITarget) {
  modalStore.show(
    'target/edit',
    {
      ...target,
    },
    async (data: any) => {
      await targetStore.update(data.id, data.name, data.time);
      await targetStore.getList();
      modalStore.close();
    },
  );
}

function left() {
  date.value = date.value.subtract(1, 'day');
  refresh();
}
function right() {
  date.value = date.value.add(1, 'day');
  refresh();
}

function showDate() {
  if (dayjs(date.value).format('YYYY MMM DD') === dayjs().subtract(1, 'day').format('YYYY MMM DD')) return 'Yesterday';
  if (dayjs(date.value).format('YYYY MMM DD') === dayjs().format('YYYY MMM DD')) return 'Today';
  return dayjs(date.value).format('YYYY MMM DD');
}

async function refresh() {
  await targetStore.getList();
  await statStore.getList(date.value.format('YYYY-MM-DD'));

  for (let i = 0; i < statStore.list.length; i++) {
    const item = targetStore.list.find((x) => x.id === statStore.list[i].id);
    if (!item) continue;
    item.status = statStore.list[i].status;
  }
}

async function changeStat() {
  await statStore.update(targetStore.list, date.value.format('YYYY-MM-DD'));
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

  .row {
    color: $color-white-040;
    padding: 5px 0;
  }
}
</style>
