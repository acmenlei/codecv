<script setup lang='ts'>
import ArticleCard from './components/card/card.vue';
import NavBar from '@/components/navBar.vue';
import Empty from '@/components/empty.vue';
import { onMounted } from 'vue';

import { tabs } from './constant';
import { professionals } from "@/common/utils/professional"
import { useTab, useInfinityList } from "./hook"

const { data, loading, noMore, conditions, queryList, toggleQueryList } = useInfinityList();
const { toggleTab } = useTab(conditions, toggleQueryList);

onMounted(queryList)

</script>

<template>
  <div class="community-list content-card" data-aos="fade-right">
    <div class="menubar flex">
      <NavBar :tabs="tabs" @tab-click="toggleTab" />
      <div>
        <el-select placeholder="岗位方向" v-model="conditions.professional" @change="toggleQueryList" class="mr-10">
          <el-option v-for="prof in professionals" :label="prof" :value="prof" />
        </el-select>
        <el-input v-model="conditions.keyword" placeholder='搜索面经' class="mr-10" style="width: 190px;"></el-input>
        <button @click="toggleQueryList" class="btn primary">搜索</button>
      </div>
    </div>
    <div v-if="data.length" class="article-list" v-infinite-scroll="queryList">
      <ArticleCard v-for="article in data" :article='article' />
      <p v-if="loading">正在加载..</p>
      <p v-if="noMore">暂时没有更多了～</p>
    </div>
    <Empty v-else title="还没有人发布面经，你来做第一个吧～" />
  </div>
</template>

<style lang="scss" scoped>
.menubar {
  justify-content: space-between;
  align-items: center;
}
.article-list {
  p {
    color: #666;
    font-size: .9rem;
    text-align: center;
  }
}
</style>