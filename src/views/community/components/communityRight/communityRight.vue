<script setup lang='ts'>
import HotList from '@/components/hotList.vue';
import BrowseHistory from '@/components/browseHistory.vue';

</script>

<template>
  <div class="community-slider" data-aos="fade-left">
    <hot-list/>
    <browse-history/>
  </div>
</template>

<style lang='scss' scoped>
.community-slider {
  position: sticky;
  top: 80px;
  min-height: 100vh;
}
</style>