<script setup lang='ts'>
import Empty from '@/components/empty.vue'

const props = defineProps<{ data: Array<unknown> }>();
</script>

<template>
  <div class="comments-container content-card">
    <span class="tip">评论区</span>
    <div v-if="data.length" class="comments-list mt-20 content-card">
      评论区...
    </div>
    <Empty v-else title="还没有人发表评论..." />
  </div>
</template>

<style lang='scss' scoped>
.tip {
  color: #666;
}
</style>