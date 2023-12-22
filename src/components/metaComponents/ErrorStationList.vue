<template>
  <n-data-table :columns="columns" :data="data" :bordered="false" class="table" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { NDataTable } from "naive-ui";

const columns = [{
  title: '发波台',
  key: 'tower'
}, {
  title: '站点',
  key: 'station'
}];
interface station {
  tower: string,
  station: string
}
const data = ref<station[]>([{
  tower: "蒲城台",
  station: "西安站"
}, {
  tower: "蒲城台",
  station: "西安站"
}, {
  tower: "铜川台",
  station: "xx站"
}])
</script>
<style scoped>
.table {
  --n-td-color: transparent !important;
  --n-th-color: transparent !important;
  --n-th-text-color:rgb(66, 136, 171) !important;
  --n-td-text-color:rgb(80, 161, 202) !important;
  --n-th-text-color-hover:rgb(15, 64, 88) !important;
  --n-td-text-color-hover:rgb(15, 64, 88) !important;
  font-weight: bold;
}
</style>