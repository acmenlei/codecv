<script setup lang="ts">
import { numFormat } from '@/utils/format'
import Empty from '../empty.vue'
import { useHotRank } from './hook'

const { hotList, useDetail } = useHotRank()
</script>

<template>
  <div class="hot-list content-card">
    <p class="hot-title slide-title">热门面经</p>
    <ul class="list-style-init" v-if="hotList.length">
      <li
        :key="idx"
        v-for="(article, idx) in hotList"
        class="line-2"
        @click="useDetail(article.articleId)"
      >
        <span :class="['rank', { topRank: idx < 3 }]">{{ idx + 1 }}</span>
        {{ article.title }}
        <i :class="['iconfont icon-hot font-20', { topRank: idx < 3 }]"></i>
        <span :class="{ topRank: idx < 3 }">{{ numFormat(article.hot) }}</span>
      </li>
    </ul>
    <Empty title="还没有面经，快去抢沙发吧." v-else />
  </div>
</template>

<style lang="scss" scoped>
.hot-list {
  .hot-title {
    margin-bottom: 15px;
  }

  li {
    margin-top: 15px;

    span {
      color: var(--font-color);
      &.rank {
        font-weight: bold;
      }
    }
  }

  .topRank {
    color: orangered;
  }
}
</style>
