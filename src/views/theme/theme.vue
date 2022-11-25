<script setup lang='ts'>
import resumeCard from './components/resumeCard.vue';
import { templateCategory } from './constant';
import { useCategory } from "./hook";

const { queryCategory, data } = useCategory();
</script>

<template>
  <div class="resume-container flex">
    <div class="resume-left-container content-card" data-aos="fade-right">
      <NavBar :tabs="templateCategory" @tab-click="queryCategory" />
      <div class="resume-card-container">
        <resume-card v-for="theme in   data" :key="theme.id" :theme="theme" />
      </div>
    </div>
    <div class="resume-right-container content-card" data-aos="fade-left">
      热门简历排行榜
    </div>
  </div>
</template>

<style lang='scss' scoped>
.resume-container {
  max-width: 1200px;
  margin: 20px auto;

  .resume-left-container {
    margin-right: 20px;

    .resume-card-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>