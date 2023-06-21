<script setup lang="ts">
import HotList from '@/components/hot-rank/hotList.vue'
import BrowseHistory from '@/components/browse-history/browseHistory.vue'
</script>

<template>
  <div class="community-slider">
    <hot-list />
    <browse-history />
  </div>
</template>

<style lang="scss" scoped>
.community-slider {
  position: sticky;
  top: 80px;
  min-height: 100vh;
}
</style>
