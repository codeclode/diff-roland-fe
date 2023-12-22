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
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  grid: {
    bottom: 30
  },
  series: [
    {
      type: 'gauge',
      radius: "150%",
      center: ["50%", "79%"],
      startAngle: 180,
      endAngle: 0,
      itemStyle: {
        shadowColor: 'rgba(0,138,255,0.45)',
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        color: {
          type: 'linear',
          x2: 1,
          y2: 0,
          x: 0,
          y: 1,
          colorStops: [{
            offset: 0, color: '#18A058'
          }, {
            offset: 0.45, color: '#2080F0'
          }, {
            offset: 0.78, color: '#F0A020'
          }, {
            offset: 1, color: '#D03050'
          }],
          global: false // 缺省为 false
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 16
        }
      },
      pointer: {
        icon: "diamond",
        itemStyle: {
          color: 'auto'
        },
        offsetCenter:["0%","-15%"]
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      progress: {
        show: true,
        roundCap: true,
        width: 16,
      },
      axisLabel: {
        show: false
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        color: '#6cf',
        fontSize: 12,
        offsetCenter: ["0%", '0']
      },
      data: [
        {
          value: 88
        }
      ]
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