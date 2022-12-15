<script setup lang='ts'>
import NavBar from '@/components/navBar.vue';
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
      <p>...</p>
      <p>暂无...</p>
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
      display: flex;
      flex-wrap: wrap;
    }
  }
}
@media screen and (max-width: 800px) {
  .resume-right-container {
    display: none;
  }
  .resume-left-container  {
    margin-left: 20px;
  }
}
</style>