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
  dbName: "综合性能分析与发布分系统",
  description: "ip地址变换",
  detail: "11111"
}, {
  dbName: "罗兰差分增强分系统",
  description: "系统崩溃",
  detail: "22222"
}, {
  dbName: "FTP服务器",
  description: "地址信息变换",
  detail: "22222"
}, {
  dbName: "监测运控子系统",
  description: "端口号发生变化",
  detail: "33333"
}, {
  dbName: "罗兰授时发播分系统",
  description: "ip地址变换",
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