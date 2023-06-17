<script setup lang="ts">
import { numFormat } from '@/utils/format'
import Empty from '../empty.vue'
import { useBrowseHistory } from './hook'

const { data, useDetail } = useBrowseHistory()
</script>

<template>
  <div class="browse-history-list mt-20 content-card">
    <p class="browse-history-title slide-title">浏览历史</p>
    <ul class="list-style-init history-list" v-if="data.length">
      <li
        v-for="(history, idx) in data"
        :key="idx"
        class="line-2"
        @click="useDetail(history.articleId)"
      >
        {{ history.title }}
        <span>
          <i class="iconfont icon-browse font-20"></i>
          {{ numFormat(history.hot) }}
        </span>
      </li>
    </ul>
    <Empty title="你还没浏览过任何文章" v-else />
  </div>
</template>

<style lang="scss" scoped>
.history-list {
  li {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    span {
      color: var(--font-color);
      white-space: nowrap;
    }
  }

  .gray {
    color: #999;
  }
}
</style>
