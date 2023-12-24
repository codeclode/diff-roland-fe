<template>
  <div ref="canvas">

  </div>
</template>
<script setup lang="ts">
import { EChartsOption, EChartsType } from 'echarts';
import { Ref, ref, shallowRef, watch } from 'vue';
import { refreshChart } from "./baseOptions";

const canvas = ref<HTMLDivElement>();
const options = ref<EChartsOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['3天前', '前天', '昨天', '今天'],
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {
    type: 'value',
    name:"次数"
  },
  series: [
    {
      name: '次数',
      type: 'bar',
      barWidth: '60%',
      data: [44, 32, 76, 12]
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