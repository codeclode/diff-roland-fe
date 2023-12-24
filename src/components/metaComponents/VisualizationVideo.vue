<template>
  <div class="video__container">
    <video src="/video.mp4" controls></video>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.video__container{
  object-fit: contain;
}
.video__container video{
  height: 100%;
  width: 100%;
  display: block;
}
</style>