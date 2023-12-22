<template>
  <div class="cardContainer">
    <ChartContainer :title="title" :chart-type="chartType" :height="gHeight" :width="width"></ChartContainer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import ChartContainer, { chartTypes } from './ChartContainer.vue';
export type WhrOption = 0.5 | 0.75 | 1 | 1.5 | 2 | 3
export type CardProp = {
  order: number,
  width: number,
  whr?: WhrOption,
  chartType: chartTypes,
  title: string
}
const props = withDefaults(defineProps<CardProp>(), {
  whr: 1,
});
const gHeight = ref(props.width / props.whr);


</script>
<style scoped>
.cardContainer {
  order: v-bind(order);
  grid-column-start: span v-bind(width);
  grid-row-start: span v-bind(gHeight);
  overflow-y: auto;
  aspect-ratio: v-bind(whr)/1;
  box-sizing: border-box;
}
</style>