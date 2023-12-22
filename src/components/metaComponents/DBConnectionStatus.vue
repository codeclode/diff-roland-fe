<template>
  <div class="connection__container">
    <div v-for="state in status" class="connection__meta">
      <NH4 style="margin-bottom: 0; color: rgb(175, 224, 248);">{{ state.target }}</NH4>
      <NH5 :style="`margin-bottom: 0;margin-top: 0; color: ${state.ok?'#18A059':'#D03050'};`">{{ state.ok ? "正常" :
        "异常" }}
      </NH5>
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
import { NIcon, NH4, NH5 } from "naive-ui";
import { PlugConnected24Regular, RecordStop32Regular } from "@vicons/fluent";
import { ref } from "vue";
interface connectionStatus {
  ok: boolean,
  target: string
}
const status = ref<connectionStatus[]>([{
  ok: false,
  target: "数据传输预处理软件"
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
  justify-content: space-around;
  align-items: center;
  padding: 1em;
}

.connection__meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 3px;
  border-right: 2px solid #6cf;
  box-sizing: border-box;
}

.connection__meta:last-child {
  border-right: 0;
}
</style>