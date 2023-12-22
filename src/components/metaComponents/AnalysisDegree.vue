<template>
  <div ref="canvas"></div>
</template>
<script setup lang="ts">
import { EChartsOption, EChartsType } from 'echarts';
import { Ref, ref, shallowRef, watch } from 'vue';
import { refreshChart } from "./baseOptions";

const canvas = ref<HTMLDivElement>();
const options = ref<EChartsOption>({
  tooltip: {
    trigger: 'item'
  },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      name: '精度等级',
      type: 'pie',
      labelLine: {
        show: false
      },
      radius: '90%',
      label:{
        position:"inside",
        color:"white",
        formatter:"{b}\n{c}"
      },
      data: [
        { value: 1048, name: '等级4' },
        { value: 735, name: '等级3' },
        { value: 580, name: '等级2' },
        { value: 484, name: '等级1' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
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