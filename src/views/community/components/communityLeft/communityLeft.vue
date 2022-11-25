<script setup lang='ts'>
import { tabs } from './constant';
import ArticleCard from './components/articleCard.vue';
import NavBar from '@/components/navBar.vue';

function queryList(idx: number) {
  console.log('点击了', tabs[idx])
}
</script>

<template>
  <div class="community-list content-card" data-aos="fade-right">
    <NavBar :tabs="tabs" @tab-click="queryList"/>
    <div class="article-list">
      <ArticleCard v-for="_ in 10" />
    </div>
  </div>
</template>