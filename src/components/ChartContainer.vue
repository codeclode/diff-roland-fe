<template>
  <div class="container">
    <div class="chartContainer">
      <NH3 style="margin-bottom: 0;color: rgb(67, 144, 212);">{{ title }}</NH3>
      <component class="canvas" :is="target[chartType]"></component>
      <svg width="50" height="30" class="outline" stroke="#11acff" stroke-width="5">
        <line x1="0" x2="0" y1="30" y2="10"></line>
        <line x1="0" x2="10" y1="10" y2="0"></line>
        <line x1="10" x2="50" y1="0" y2="0"></line>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { NH3 } from "naive-ui";

import { EChartsOption } from "echarts";
import {
  DatabaseLogsList,
  DataVolumeStatistics,
  DBCPUDash,
  DBDiskDash,
  LargeScaleGraphOfInputData,
  DBConnectionStatus,
  AnalysisStation,
  AnalysisDegree,
  AnalysisSendData,
  ErrorStationList,
  AbnormalFieldStrengthSiteProportion,
  AbnormalSignalToNoiseRatioSiteProportion,
  PerimeterDifferenceErrorSiteProportion,
  VisualizationVideo,
  VisualizationCPU,
  VisualizationDisk,
  VisualizationWarning,
  VisualizationAnalysisResult,
  VisualizationDataVolumn,
  StationMap,
  PreConnection,
  PreLastestMap,
  PreLogsList,
  PreSend,
  PreStationData
} from "./metaComponents";


export type chartTypes = "DataVolumeStatistics" | "LargeScaleGraphOfInputData" | "DatabaseLogsList" |
  "DBCPUDash" | "DBDiskDash" | "DBConnectionStatus" | "AnalysisStation" | "AnalysisDegree" |
  "AnalysisSendData" | "ErrorStationList" | "AbnormalFieldStrengthSiteProportion" |
  "AbnormalSignalToNoiseRatioSiteProportion" | "PerimeterDifferenceErrorSiteProportion" |
  "VisualizationVideo" | "VisualizationDisk" | "VisualizationCPU" | "VisualizationWarning" |
  "VisualizationAnalysisResult" | "VisualizationDataVolumn" | "StationMap" | "PreConnection" |
  "PreLastestMap" | "PreLogsList" | "PreSend" | "PreStationData";

const target: Record<chartTypes, EChartsOption> = {
  "DataVolumeStatistics": DataVolumeStatistics,
  "LargeScaleGraphOfInputData": LargeScaleGraphOfInputData,
  "DatabaseLogsList": DatabaseLogsList,
  "DBCPUDash": DBCPUDash,
  "DBDiskDash": DBDiskDash,
  "DBConnectionStatus": DBConnectionStatus,
  "AnalysisStation": AnalysisStation,
  "AnalysisDegree": AnalysisDegree,
  "AnalysisSendData": AnalysisSendData,
  "ErrorStationList": ErrorStationList,
  "AbnormalFieldStrengthSiteProportion": AbnormalFieldStrengthSiteProportion,
  "AbnormalSignalToNoiseRatioSiteProportion": AbnormalSignalToNoiseRatioSiteProportion,
  "PerimeterDifferenceErrorSiteProportion": PerimeterDifferenceErrorSiteProportion,
  "VisualizationVideo": VisualizationVideo,
  "VisualizationCPU": VisualizationCPU,
  "VisualizationDisk": VisualizationDisk,
  "VisualizationWarning": VisualizationWarning,
  "VisualizationAnalysisResult": VisualizationAnalysisResult,
  "VisualizationDataVolumn": VisualizationDataVolumn,
  "StationMap": StationMap,
  "PreConnection": PreConnection,
  "PreLastestMap": PreLastestMap,
  "PreLogsList": PreLogsList,
  "PreSend": PreSend,
  "PreStationData": PreStationData
}

defineProps<{
  height: number,
  width: number,
  title: string,
  chartType: chartTypes
}>();
const paginationReactive = reactive({
  page: 2,
  pageSize: 4,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    paginationReactive.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
  }
});

</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.chartContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  clip-path: polygon(10px 0, 90% 0, 100% 10%, 100% 100%, 0 100%, 0 10px);
  /* clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px); */
  border-bottom-left-radius: 20px;
  outline: 1px solid blanchedalmond;
  background-image: linear-gradient(to bottom, rgba(50, 163, 255, 0.5) 0%, rgba(50, 163, 255, 0.1) 8%,
      rgba(50, 163, 255, 0) 50%, rgba(50, 163, 255, 0.1) 92%, rgba(50, 163, 255, 0.5) 100%),
    linear-gradient(to right, rgba(50, 163, 255, 0.5) 0%, rgba(50, 163, 255, 0.1) 8%,
      rgba(50, 163, 255, 0) 50%, rgba(50, 163, 255, 0.1) 92%, rgba(50, 163, 255, 0.5) 100%);
  position: relative;
}


.chartContainer:deep(.canvas) {
  width: 90%;
  height: calc(90% - 18px);
  box-sizing: border-box;
  overflow: auto;
  object-fit: contain;
  text-align: center;
}

.outline {
  position: absolute;
  left: 0;
  top: 0;
}

.lines {
  position: absolute;
  left: 4%;
  bottom: 15px;
}
</style>