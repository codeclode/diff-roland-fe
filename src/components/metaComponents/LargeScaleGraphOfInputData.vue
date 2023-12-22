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
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: { color: "#6cf", overflow: "breakAll" },
    width: 12,
  },
  series: [
    {
      name: '数据库',
      type: 'pie',
      radius: '75%',
      data: [
        { value: 1048, name: '数据传输预处理软件' },
        { value: 735, name: '增强型罗兰性能分析系统' },
        { value: 580, name: '增强型罗兰差分效果分析平台' },
        { value: 484, name: '数据管理分析可视化系统' },
      ],
      left:"20%",
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ],
  xAxis: { show: false },
  yAxis: { show: false }
});
const ctx = shallowRef<EChartsType>();
const resizeListener = ref<() => void>();

watch([canvas, options], () => {
  refreshChart(canvas, ctx, resizeListener, options as Ref<EChartsOption>);
});
</script>
<style scoped></style>