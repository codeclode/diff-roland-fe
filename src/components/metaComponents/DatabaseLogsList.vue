<template>
  <n-list class="list__container" show-divider>
    <n-list-item v-for="log in logs">
      <template #prefix>
        <n-button type="info">{{ log.dbName }}</n-button>
      </template>
      <template #suffix>
        <n-button type="info">详细信息</n-button>
      </template>
      <n-thing>
        {{ log.description }}
      </n-thing>
    </n-list-item>
  </n-list>
</template>
<script setup lang="ts">
import { NList, NListItem, NThing, NButton } from "naive-ui";
interface Log {
  dbName: string,
  description: string,
  detail: string
}
const logs: Log[] = [{
  dbName: "西安监测站监测数据",
  description: "连接",
  detail: "11111"
}, {
  dbName: "西安监测站时差数据",
  description: "插入",
  detail: "22222"
}, {
  dbName: "卫星伪码授时增强信息",
  description: "清理",
  detail: "22222"
}, {
  dbName: "星地融合授时信息",
  description: "达到预设容量门限告警",
  detail: "33333"
}, {
  dbName: "星地融合授时信息",
  description: "达到预设容量门限告警",
  detail: "33333"
}, {
  dbName: "星地融合授时信息",
  description: "达到预设容量门限告警",
  detail: "33333"
},]

</script>
<style scoped>
.list__container {
  padding: 0 1em;
  background-color: transparent;
  color: #6cf;
}

.list__container:deep(.n-list-item__divider) {
  --n-merged-border-color: #6cf;
}

.list__container:deep(.n-thing) {
  color: #6cf;
}
</style>