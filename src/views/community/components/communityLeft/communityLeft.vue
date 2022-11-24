<script setup lang='ts'>
import { tabs } from './constant';
import ArticleCard from './components/articleCard.vue';

</script>

<template>
  <div class="community-list community-card" data-aos="fade-right">
    <ul class="article-tabs">
      <li v-for="tab in tabs">{{ tab }}</li>
    </ul>
    <div class="article-list">
      <ArticleCard v-for="_ in 10" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.community-list {
  .article-tabs {
    padding: 10px 0;
    margin-bottom: 20px;

    li {
      display: inline-block;
      list-style: none;
      cursor: pointer;
      margin-right: 10px;

      &:first-child {
        color: var(--theme);
      }
    }
  }
}
</style>