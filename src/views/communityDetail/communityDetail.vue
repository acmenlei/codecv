<script setup lang='ts'>
import UserInfo from '@/components/userInfo.vue';
import HotList from "@/components/hotList.vue"
import CommentsPublish from "./components/publish/publish.vue"
import CommentsList from '@/components/comments.vue';
import { VueMarkdownMenuBar } from 'vue-markdown-menu-bar';
import { onMounted, ref } from 'vue';
import content from "./constant";
import '@/assets/highlight.css';

const renderContent = ref()

onMounted(() => {
  renderContent.value.innerHTML = content
})
</script>
<template>
  <div class="community-detail flex">
    <div class="main-content mr-20">
      <div class="main content-card">
        <user-info class="user-info" />
        <article class="content" ref="renderContent"></article>
        <div class="supports">
          <span>点赞</span>
          <span>评论</span>
          <span>分享</span>
        </div>
        <span class="pointer tag">#前端</span>
      </div>
      <comments-publish />
      <comments-list :data="[]" />
    </div>
    <div class="slide-content">
      <hot-list class="slide-item" />
      <vue-markdown-menu-bar class="slide-item menu-bar content-card" body='.content' width='200px' />
    </div>
  </div>
</template>
<style lang='scss' scoped>
.community-detail {
  max-width: 1200px;
  margin: 20px auto;

  .main-content {
    flex: 1;

    .main {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      .tag {
        color: var(--theme);

        &:hover {
          opacity: .7;
        }
      }
    }

    .user-info {
      padding-left: 20px;
    }

    .content {
      padding: 20px;
      padding-top: 10px;
    }

    .supports {
      text-align: center;
      white-space: nowrap;

      span {
        cursor: pointer;
        margin: 0 20px;
        display: inline-block;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: #eee;
        font-size: .9em;
        color: #666;

        &:hover {
          opacity: .7;
        }
      }
    }
  }

  .slide-content {
    flex-basis: 200px;

    .menu-bar {
      position: sticky;
      top: 80px;
    }

    .slide-item {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>