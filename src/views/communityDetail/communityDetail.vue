<script setup lang='ts'>
import UserInfo from '@/components/userInfo.vue';
import HotList from "@/components/hotList.vue"
import Publish from "./components/publish/publish.vue"
import Comments from '@/components/comments/comments.vue';
import { VueMarkdownMenuBar } from 'vue-markdown-menu-bar';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useArticleDetail } from './hook'
import '@/assets/highlight.css';

const route = useRoute(), delay = ref(false);
const articleId = computed(() => parseInt(route.query.articleId as string));
const { article, total, commentsTotal, queryArticle, pageNumChange, queryComments } = useArticleDetail(articleId.value);

onMounted(() => {
  queryArticle();
  // 暂时解决异步渲染问题
  setTimeout(() => delay.value = true, 200);
})
</script>
<template>
  <div class="community-detail flex">
    <div class="main-content mr-20">
      <div class="main content-card">
        <user-info class="user-info" :user-info="article.authorInfo" :publish-time="article.createTime"/>
        <article class="content" v-html="article.content"></article>
        <div class="supports">
          <span>支持{{ article.like }}</span>
          <span>评论{{ article.comments.length }}</span>
          <span>分享</span>
        </div>
        <span class="pointer tag">#{{ article.professional }}</span>
      </div>
      <Publish :article-id="articleId" :level="1" @re-query-comments="queryComments"/>
      <Comments :data="article.comments" :article-id="articleId" :total='total' :comments-total="commentsTotal"
        @page-num-change="pageNumChange"
        @re-query-comments="queryComments" />
    </div>
    <div class="slide-content">
      <hot-list class="slide-item" />
      <vue-markdown-menu-bar v-if="delay" class="slide-item menu-bar content-card" body='.content' width='200px' />
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