<template>
  <div>
    <div v-for="result in results" class="result__container">
      <div class="sys">{{ result.system }}</div>
      <div class="system__container">
        <div class="dt">{{ result.date.toLocaleDateString() }}</div>
        <NButton size="tiny" type="info">详细信息</NButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";

interface result {
  date: Date,
  system: "增强型罗兰性能分析系统" | "数据传输预处理软件" | "增强型罗兰数据综合管理系统"
  detail: string,
}
function generateDate() {
  const stand = (new Date());

  return new Date(Number(stand) - 3600 * 1000 * Math.random() * 24);
}
const results = ref<result[]>([{
  date: generateDate(),
  system: "增强型罗兰性能分析系统",
  detail: "1111111111111"
}, {
  date: generateDate(),
  system: "数据传输预处理软件",
  detail: "1111111111111"
}, {
  date: generateDate(),
  system: "增强型罗兰数据综合管理系统",
  detail: "1111111111111"
}, {
  date: generateDate(),
  system: "数据传输预处理软件",
  detail: "1111111111111"
}, {
  date: generateDate(),
  system: "增强型罗兰数据综合管理系统",
  detail: "1111111111111"
}])
</script>
<style scoped>
.result__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  gap: 1em;
  padding-bottom: .5em;
  padding-top: .5em;
  border-bottom: 1px solid #6cf;
  color: #6cf;
}

.system__container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;
}
</style>