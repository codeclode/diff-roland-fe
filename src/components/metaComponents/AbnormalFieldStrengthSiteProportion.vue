<template>
  <div ref="canvas">

  </div>
</template>
<script setup lang="ts">
import { EChartsOption, EChartsType } from 'echarts';
import { computed, Ref, ref, shallowRef, watch } from 'vue';
import { refreshChart } from "./baseOptions";

const canvas = ref<HTMLDivElement>();
const data = ref<number>(75);
const color = computed(() => {
  if (data.value < 25) {
    return "#20A53A"
  } else if (data.value < 60) {
    return "#1F86D3"
  } else if (data.value < 90) {
    return "#EA8B29"
  } else {
    return "#FD6570"
  }
});
const options = computed<EChartsOption>(() => {
  return {
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: 450,
        min: 0,
        radius: "90%",
        max: 100,
        itemStyle: {
          color: color.value,
          shadowColor: "rgba(0,138,255,0.45)",
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
        progress: {
          show: true,
          roundCap: true,
          width: 12,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 12,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          fontSize: 14,
          color: "rgb(67, 144, 212)",
          offsetCenter: [0, 0],
          valueAnimation: true,
          formatter: function (value) {
            return "" + value.toFixed(0) + "%";
          },
        },
        data: [
          {
            value: data.value,
          },
        ],
      },
    ],
  }
});
const ctx = shallowRef<EChartsType>();
const resizeListener = ref<() => void>();
watch([canvas, options], () => {
  refreshChart(canvas, ctx, resizeListener, options as Ref<EChartsOption>);
});
</script>
<style scoped></style>