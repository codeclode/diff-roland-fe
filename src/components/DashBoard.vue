<template>
  <div class="bigScreenContainer">
    <NH1 class="title">{{ dash.title }}</NH1>
    <div class="gridContainer">
      <Card v-for="(layout) in layoutGrids" :title="layout.title" :key="layout.order" :whr="layout.whr"
        :chart-type="layout.chartType" :width="layout.width" :order="layout.order">
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import Card, { CardProp } from './Card.vue';
import { NH1 } from "naive-ui";

type Layout = CardProp
type dashBoard = { layouts: Layout[], title: string }
const rawLayouts1 = reactive<dashBoard>({
  title: "增强型罗兰性能分析系统",
  layouts: [{
    width: 4,
    order: 1,
    whr: 1.5,
    chartType: "DatabaseLogsList",
    title: "数据库日志"
  }, {
    width: 2,
    order: 2,
    whr: 1.5,
    chartType: "DBCPUDash",
    title: "CPU占用率"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "DBDiskDash",
    title: "磁盘占用率"
  }, {
    width: 4,
    order: 3,
    whr: 3,
    chartType: "DataVolumeStatistics",
    title: "时间序列"
  }, {
    width: 4,
    order: 3,
    whr: 2,
    chartType: "LargeScaleGraphOfInputData",
    title: "数据库各输入软件数据量统计"
  }, {
    width: 4,
    order: 3,
    whr: 2,
    chartType: "DBConnectionStatus",
    title: "与各子系统连接状态"
  }]
});
const rawLayouts2 = reactive<dashBoard>({
  title: "数据管理分析可视化系统", layouts: [{
    width: 2,
    order: 1,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "告警统计"
  }, {
    width: 4,
    order: 2,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "监测站地图"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "监控视频"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "当前可用性"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "监控视频"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "可用性统计"
  }, {
    width: 4,
    order: 3,
    whr: 3,
    chartType: "DataVolumeStatistics",
    title: "监测数据面积图"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "数据库空间"
  }]
});
const rawLayouts3 = reactive<dashBoard>({
  title: "增强型罗兰性能分析系统",
  layouts: [{
    width: 4,
    order: 1,
    whr: 1.5,
    chartType: "DataVolumeStatistics",
    title: "监测站地图"
  }, {
    width: 2,
    order: 2,
    whr: 1.5,
    chartType: "AbnormalFieldStrengthSiteProportion",
    title: "场强异常比例"
  }, {
    width: 2,
    order: 3,
    whr: 1.5,
    chartType: "PerimeterDifferenceErrorSiteProportion",
    title: "包周差异常比例"
  }, {
    width: 2,
    order: 4,
    whr: 1.5,
    chartType: "AbnormalSignalToNoiseRatioSiteProportion",
    title: "信噪比异常比例"
  }, {
    width: 2,
    order: 5,
    whr: 1.5,
    chartType: "ErrorStationList",
    title: "异常站点列表"
  }, {
    width: 2,
    order: 6,
    whr: 1.5,
    chartType: "AnalysisDegree",
    title: "精度等级"
  }, {
    width: 4,
    order: 7,
    whr: 3,
    chartType: "AnalysisStation",
    title: "站点数量信息"
  }, {
    width: 2,
    order: 8,
    whr: 1.5,
    chartType: "AnalysisSendData",
    title: "数据发送统计"
  }]
});

const dash = rawLayouts3;

const layoutGrids = computed<Layout[]>(() => {
  return dash.layouts.map((v) => {
    return {
      ...v,
      width: v.width * 6,
    }
  })
})

const scale = ref(1);
function onResize() {
  scale.value = Math.min(Math.floor(innerWidth / 1080 * 100) / 100);
}
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

</script>
<style scoped>
.bigScreenContainer {
  width: 1080px;
  transform-origin: top left;
  transform: scale(v-bind(scale));
  overflow: overlay;
}

.gridContainer {
  width: 1080px;
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  grid-auto-rows: max-content;
  box-sizing: border-box;
  margin: 0;
}

.title {
  color: rgb(67, 144, 212);
  text-align: center;
  margin-bottom: 0;
}
</style>