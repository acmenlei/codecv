<script setup lang='ts'>
import CommunityLeft from './components/communityLeft/communityLeft.vue';
import CommunityRight from './components/communityRight/communityRight.vue';
import CommunityPublish from './components/communityLeft/components/publish/publish.vue';
</script>

<template>
  <div class="community">
    <div class="community-left-list">
      <CommunityPublish />
      <CommunityLeft />
    </div>
    <div class="community-right-slider">
      <CommunityRight />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.community {
  max-width: 1200px;
  min-width: 800px;
  margin: 20px auto;
  display: flex;

  .community-left-list {
    flex: 1;
    padding: 10px;
  }

  .community-right-slider {
    padding: 10px;
    flex-basis: 200px;
  }
}
</style>