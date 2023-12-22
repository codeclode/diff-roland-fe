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
    data: ['西安监测站监测数据', '西安监测站时差数据', '卫星伪码授时增强信息', '星地融合授时信息'],
    name: "数据库",
    nameGap:6,
    axisLabel: {
      width: 64,
      overflow: "breakAll",
      interval: 0,
    }
  },
  yAxis: {
    type: 'value',
  },
  grid: {
    left: 36,
    right: 56,
    top: 24,
    bottom: 35
  },
  series: [
    {
      data: [120, 200, 150, 80],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
);
const ctx = shallowRef<EChartsType>();
const resizeListener = ref<() => void>();
watch([canvas, options], () => {
  refreshChart(canvas, ctx, resizeListener, options as Ref<EChartsOption>);
});

</script>
<style scoped></style>