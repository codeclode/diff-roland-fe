<template>
  <div ref="canvas"></div>
</template>
<script setup lang="ts">
import { EChartsOption, EChartsType } from 'echarts';
import { Ref, ref, shallowRef, watch } from 'vue';
import { refreshChart } from "./baseOptions";

const canvas = ref<HTMLDivElement>();
const options = ref<EChartsOption>({
  xAxis: {
    type: 'category', 
    boundaryGap: false,
    data: ['12/19', '12/20', '12/21', '12/22'],
    splitLine: {
      show: true,
      lineStyle: {
        color: '#cccccc',
        type: "dashed"
      },
    },
    axisLabel: {
      width: 64,
      overflow: "breakAll",
      interval: 0,
    }
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218],
      type: 'line'
    }
  ]
});
const ctx = shallowRef<EChartsType>();
const resizeListener = ref<() => void>();
watch([canvas, options], () => {
  refreshChart(canvas, ctx, resizeListener, options as Ref<EChartsOption>);
});
</script>
<style scoped></style>