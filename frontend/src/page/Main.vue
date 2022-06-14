<template>
  <div :class="$style.main">
    <Block>
      <div v-if="!isChange" :class="$style.time">
        {{ TimeHelper.secondsToHMS(timer) }}
      </div>
      <Input v-if="isChange" v-model="time" />

      <Row size="2" style="margin-top: 10px">
        <Button v-if="!isChange" @click="isChange = !isChange" text="Change" />
        <Button v-if="isChange" @click="change" text="Ok" />
        <Button @click="stop" text="Stop">
          <template #icon-right><IconClose style="margin-left: 5px" /></template>
        </Button>
      </Row>
    </Block>
  </div>
</template>

<script setup lang="ts">
import { Button, Checkbox, Toggle, Input, Block, Row } from '../gam-lib-ui/vue/component/ui';
import { IconClose } from '../gam-lib-ui/vue/component/icon';
import { ref } from 'vue';
import { TimeHelper } from '@/gam-lib-ui/util/TimeHelper';
import { API_URL } from '@/const';

const time = ref('00:00:00');
const isChange = ref(false);
const isStop = ref(false);
const timer = ref(0);

const ring = new Audio(`${API_URL}/main/ring`);

setInterval(() => {
  if (timer.value <= 0) return;

  timer.value -= 1;
  if (timer.value <= 0) {
    ring.play();
  }
}, 1000);

function change() {
  isChange.value = false;
  isStop.value = false;
  timer.value = TimeHelper.HMStoSeconds(time.value);
}

function stop() {
  isStop.value = true;
  ring.pause();
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
