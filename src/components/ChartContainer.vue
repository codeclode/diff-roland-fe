<template>
  <div class="container">
    <div class="chartContainer">
      <NH3 style="margin-bottom: 0;color: rgb(67, 144, 212);">{{ title }}</NH3>
      <div class="canvas" ref="canvas" :style="`overflow:${type === 'chart' ? 'hidden' : 'auto'}`">
        <img style="width: 90%;" v-if="chartType === 'map'" src="/map.png">
        <video class="video" v-if="type === 'video'" src="/video.mp4" controls></video>
        <div v-else-if="type === 'table'">
          <NInput style="background-color:transparent;margin-bottom: 3px;" placeholder="请输入查询条件"></NInput>
          <NDataTable :data="data" :columns="columns" :pagination="paginationReactive">
          </NDataTable>
        </div>
        <div v-else-if="type === 'datas'" class="datas">
          <div v-for="data in datas" class="data" :style="data.style">
            <NH4 :style="data.style">{{ data.title }}</NH4>
            <n-number-animation :from="0" :to="data.num" />
          </div>
        </div>
      </div>
      <svg width="50" height="30" class="outline" stroke="#11acff" stroke-width="5">
        <line x1="0" x2="0" y1="30" y2="10"></line>
        <line x1="0" x2="10" y1="10" y2="0"></line>
        <line x1="10" x2="50" y1="0" y2="0"></line>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, shallowRef, watch } from 'vue';
import { NDataTable, NH3, NInput, NH4, NNumberAnimation } from "naive-ui";

import { EChartsOption, EChartsType } from "echarts";
import { debounce } from "lodash-es";
import { initChart } from "./charts/utils/initChart";
import { cardContentType } from '../utils/types';
import { pieOption, usedOption, lineOption, mapOption, scatter, barOption, areaOption } from "./charts";

export type chartTypes = "pie" | "map" | "used" | "scatter" | "bar" | "line" | "area";

const canvas = ref<HTMLDivElement>();
const props = defineProps<{
  height: number,
  width: number,
  type: cardContentType,
  title: string,
  chartType?: chartTypes
}>();
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}));
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
})

const datas: { title: string, num: number, style: string }[] = [{
  title: "总站点数",
  num: 230,
  style: "color:skyblue;"
}, {
  title: "可用站点",
  num: 175,
  style: "color:green;"
}, {
  title: "异常站点1",
  num: 55,
  style: "color:red;"
},]

const myChart = shallowRef<EChartsType>();

const target: Record<chartTypes, EChartsOption> = {
  "area": areaOption,
  "bar": barOption,
  "line": lineOption,
  "map": mapOption,
  "pie": pieOption,
  "scatter": scatter,
  "used": usedOption
}

function refreshCanvas() {

  if (props.type === "chart" && props.chartType && props.chartType !== 'map') {
    initChart(target[props.chartType], canvas, myChart);
  }
};

watch([canvas], refreshCanvas, {
  immediate: true
});

onMounted(() => {
  const dRefreshCanvas = debounce(() => {
    if (myChart.value) {
      myChart.value.resize();
    }
  }, 300);
  window.addEventListener("resize", () => {
    dRefreshCanvas();
  });
})

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

.chartContainer>.canvas {
  width: 90%;
  height: 90%;
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

.video {
  display: block;
  width: 90%;
  margin: 0 auto;
}

.datas {
  display: flex;
  height: 90%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
}

.data {
  padding: 10px;
  border: 1px solid currentColor;
  border-radius: 10px;
}

.row {
  background-color: transparent;
  color: aqua;
}

:deep(.n-data-table .n-data-table-td) {
  background-color: transparent;
  color: aqua;
}

:deep(.n-data-table .n-data-table-tr) {
  background-color: transparent !important;
  color: aqua;
}
:deep(.n-data-table .n-data-table-thead){
  background-color: transparent !important;
  color: aqua;
}
:deep(.n-data-table .n-data-table-th) {
  background-color: transparent !important;
  color: aqua;
}

:deep(.n-data-table .n-data-table-table) {
  background-color: transparent !important;
  color: aqua;
  font-weight: 600 !important;
}

:deep(.n-data-table .n-data-table__pagination){
  color: aqua !important;;
}
</style>