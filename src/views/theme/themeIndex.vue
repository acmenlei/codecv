<script setup lang='ts'>
import { themes } from '@/common/theme';
import resumeCard from './ch-cmp/resumeCard.vue';

</script>

<template>
  <div class="resume-card-container">
    <resume-card v-for="theme in themes" :key="theme.id" :theme="theme"/>
  </div>
</template>

<style lang='scss' scoped>
.resume-card-container {
  padding: 20px;
/* 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
}
</style>