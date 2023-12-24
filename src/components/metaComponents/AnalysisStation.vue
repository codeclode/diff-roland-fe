<template>
  <div class="stations__container">
    <div class="station__container--sum">
      <NIcon :size="32" color="#74b0f5">
        <Earth24Regular />
      </NIcon>
      <NH4 style="margin: 0;">站点总数</NH4>
      <NH6 style="margin: 0;">175</NH6>
    </div>
    <div class="station__container--success">
      <NIcon :size="32" color="#18A058">
        <Database20Regular />
      </NIcon>
      <NH4 style="margin: 0;">正常站点</NH4>
      <NH6 style="margin: 0;">175</NH6>
    </div>
    <div class="station__container--error">
      <NIcon :size="32" color="#D03050">
        <WifiOff24Regular />
      </NIcon>
      <NH4 style="margin: 0">异常站点</NH4>
      <NH6 style="margin: 0">0</NH6>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NH4, NIcon, NH6 } from 'naive-ui';
import { Earth24Regular, WifiOff24Regular, Database20Regular } from "@vicons/fluent";


</script>
<style scoped>
.stations__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.station__container--sum>h4,
.station__container--sum>h6 {
  color: #74b0f5;
  user-select: none;
}
.station__container--error>h4,
.station__container--error>h6 {
  color: #D03050;
  user-select: none;
}

.station__container--success>h4,
.station__container--success>h6 {
  color: #18A058;
  user-select: none;
}


.station__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}
</style>