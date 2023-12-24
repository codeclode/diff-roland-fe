<template>
  <div ref="canvas" class="canvas hidden"></div>
</template>
<script setup lang="ts">
import { EChartsOption, EChartsType } from 'echarts';
import { Ref, ref, shallowRef, watch } from 'vue';
import { refreshChart } from "./baseOptions";

const canvas = ref<HTMLDivElement>();
const options = ref<EChartsOption>({
  tooltip: {
    trigger: 'axis'
  },
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
    name: "数据收发量(M)",
    nameLocation: "middle",
    nameGap: 32,
    type: 'value',
  },
  grid: {
    left: "64"
  },
  series: [
    {
      name:"接受",
      data: [150, 230, 224, 218],
      type: 'line'
    },
    {
      name:"发送",
      data: [12, 32, 67, 43],
      type: 'line'
    },
  ]
});
const ctx = shallowRef<EChartsType>();
const resizeListener = ref<() => void>();
watch([canvas, options], () => {
  refreshChart(canvas, ctx, resizeListener, options as Ref<EChartsOption>);
});
</script>
<style scoped>
.canvas.hidden {
  overflow: hidden;
}
</style>