<template>
  <div class="connection__container">
    <div v-for="state in status" class="connection__meta">
      <div style="margin-bottom: 0; color: rgb(175, 224, 248);">{{ state.target }}</div>
      <n-icon v-if="state.ok" size="40" color="#18A058">
        <PlugConnected24Regular />
      </n-icon>
      <n-icon v-else size="40" color="#D03050">
        <RecordStop32Regular />
      </n-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NIcon } from "naive-ui";
import { PlugConnected24Regular, RecordStop32Regular } from "@vicons/fluent";
import { ref } from "vue";
interface connectionStatus {
  ok: boolean,
  target: string
}
const status = ref<connectionStatus[]>([{
  ok: false,
  target: "增强型罗兰数据综合管理系统"
}, {
  ok: true,
  target: "增强型罗兰性能分析系统"
}, {
  ok: true,
  target: "增强型罗兰差分效果分析平台"
}, {
  ok: false,
  target: "数据管理分析可视化系统"
}])


</script>
<style scoped>
.connection__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.connection__meta {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}

.connection__meta:last-child {
  border-right: 0;
}
</style>