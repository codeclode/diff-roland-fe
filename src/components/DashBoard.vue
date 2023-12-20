<template>
  <div class="bigScreenContainer">
    <NH1 v-if="title" class="title">{{ title }}</NH1>
    <div class="gridContainer">
      <Card v-for="(layout) in layoutGrids" :title="layout.title" :type="layout.type" :key="layout.order"
        :whr="layout.whr" :chart-type="layout.chartType" :width="layout.width" :order="layout.order">
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import Card, { CardProp } from './Card.vue';
import { NH1 } from "naive-ui";

defineProps<{
  title?: string
}>();
type Layout = CardProp
const rawLayouts1 = reactive<Layout[]>([{
  width: 4,
  order: 1,
  whr: 1.5,
  type: "table",
  title: "测试表格"
}, {
  width: 2,
  order: 2,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "CPU占用率"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "磁盘占用率"
}, {
  width: 4,
  order: 3,
  whr: 3,
  type: "chart",
  chartType: "bar",
  title: "时间序列"
}, {
  width: 4,
  order: 3,
  whr: 2,
  type: "chart",
  chartType: "pie",
  title: "数据库大小比例图"
}, {
  width: 4,
  order: 3,
  whr: 2,
  type: "chart",
  chartType: "area",
  title: "内存/时间变化"
}])
const rawLayouts2 = reactive<Layout[]>([{
  width: 2,
  order: 1,
  whr: 1.5,
  type: "chart",
  chartType: "bar",
  title: "告警统计"
}, {
  width: 4,
  order: 2,
  whr: 1.5,
  type: "chart",
  chartType: "map",
  title: "监测站地图"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "video",
  title: "监控视频"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "当前可用性"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "video",
  title: "监控视频"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "chart",
  chartType: "line",
  title: "可用性统计"
}, {
  width: 4,
  order: 3,
  whr: 3,
  type: "chart",
  chartType: "area",
  title: "监测数据面积图"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "数据库空间"
},])
const rawLayouts3 = reactive<Layout[]>([{
  width: 4,
  order: 1,
  whr: 1.5,
  type: "chart",
  chartType: "map",
  title: "监测站地图"
}, {
  width: 2,
  order: 2,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "场强异常比例"
}, {
  width: 2,
  order: 3,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "包周差异常比例"
}, {
  width: 2,
  order: 4,
  whr: 1.5,
  type: "chart",
  chartType: "used",
  title: "信噪比异常比例"
}, {
  width: 2,
  order: 5,
  whr: 1.5,
  type: "table",
  title: "异常站点列表"
}, {
  width: 2,
  order: 6,
  whr: 1.5,
  type: "chart",
  chartType: "pie",
  title: "精度等级"
}, {
  width: 4,
  order: 7,
  whr: 3,
  type: "datas",
  title: "站点数量信息"
}, {
  width: 2,
  order: 8,
  whr: 1.5,
  type: "chart",
  chartType: "area",
  title: "数据发送统计"
},])

const layoutGrids = computed<Layout[]>(() => {
  return rawLayouts1.map((v) => {
    return {
      ...v,
      width: v.width * 6,
    }
  })
})

const scale = ref(1);
function onResize() {
  console.log(innerWidth);

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