<script setup lang="ts">
import CommunityLeft from './components/community-left/communityLeft.vue'
import CommunityRight from './components/community-right/communityRight.vue'
// import CommunityPublish from './components/communityLeft/components/publish/publish.vue';
</script>

<template>
  <div class="community" data-aos="fade-right">
    <div class="community-left-list">
      <!-- <CommunityPublish /> -->
      <CommunityLeft />
    </div>
    <div class="community-right-slider">
      <CommunityRight />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community {
  max-width: var(--max-width);
  /* min-width: 800px; */
  margin: 20px auto;
  display: flex;

  .community-left-list {
    flex: 1;
    padding: 10px;
  }

  .community-right-slider {
    padding: 10px;
    flex-basis: 300px;
  }
}
@media screen and (max-width: 800px) {
  .community-right-slider {
    display: none;
  }
}
</style>
