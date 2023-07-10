<script setup lang="ts">
import ArticleCard from './components/card/card.vue'
import NavBar from '@/components/navBar.vue'
import Empty from '@/components/empty.vue'
import Notice from './components/notice/notice.vue'
import { onActivated } from 'vue'
import { tabs } from './constant'
import { professionals } from './constant'
import { useTab, useData } from './hook'

const {
  data,
  loading,
  noMore,
  conditions,
  resetSub,
  searchSub,
  queryList,
  queryProfessional,
  conditionQuery,
  removeArticle
} = useData()
const { toggleTab } = useTab(conditions, conditionQuery)

onActivated(() => {
  conditionQuery()
})
</script>

<template>
  <div class="community-list content-card">
    <div class="menubar flex">
      <NavBar :tabs="tabs" @tab-click="toggleTab" />
      <div>
        <el-select
          placeholder="岗位方向"
          v-model="conditions.professional"
          @change="searchSub"
          class="mr-10"
        >
          <el-option :key="idx" v-for="(prof, idx) in professionals" :label="prof" :value="prof" />
        </el-select>
        <el-input
          v-model="conditions.keyword"
          placeholder="搜索面经"
          class="mr-10"
          style="width: 190px"
        ></el-input>
        <button @click="searchSub" class="btn primary">搜索</button>
        <button @click="resetSub" class="btn plain">重置</button>
      </div>
    </div>
    <div v-if="data.length" class="article-list" v-infinite-scroll="queryList">
      <ArticleCard
        :key="idx"
        @query-professional="queryProfessional"
        @re-query-list="userId => article.likes.push(userId)"
        @remove="removeArticle(idx)"
        v-for="(article, idx) in data"
        :article="article"
      />
      <p v-if="loading">正在加载..</p>
      <p v-if="noMore">暂时没有更多了～</p>
    </div>
    <!-- 社区公告 -->
    <div v-else>
      <Notice />
      <Empty title="还没有人发布面经，你来做第一个吧～" />
    </div>
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
    font-size: 0.9rem;
    text-align: center;
  }
}
</style>
