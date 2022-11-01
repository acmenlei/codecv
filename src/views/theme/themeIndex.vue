<script setup lang='ts'>
import { themes } from '@/common/theme';
import resumeCard from './ch-cmp/resumeCard.vue';

</script>

<template>
  <marquee behavior="" direction="">"目前模板较少，如果觉得简历模板不符合你的预期，可以提供你觉得好看模板给我~  联系微信：x972761675"</marquee>
  <div class="resume-card-container">
    <resume-card v-for="theme in themes" :key="theme.id" :theme="theme"/>
  </div>
</template>

<style lang='scss' scoped>
.resume-card-container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>