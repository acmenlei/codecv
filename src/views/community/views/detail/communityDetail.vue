<script setup lang="ts">
import UserInfoComp from '@/components/userInfo.vue'
import HotList from '@/components/hot-rank/hotList.vue'
import BrowseHistory from '@/components/browse-history/browseHistory.vue'
import Publish from '@/components/publish/publish.vue'
import Comments from '@/components/comments/comments.vue'
import MenuBar from '@/components/menu-bar/menu-bar/MenuBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { useArticleDetail, useDelayMenuBar } from './hook'
import '@/assets/highlight.css'
import { numFormat } from '@/utils/format'

const route = useRoute()
const articleId = computed(() => parseInt(route.query.articleId as string))
const posterCommentId = computed(() => parseInt(route.query.posterCommentId as string))
const { userInfo } = useUserStore()
const {
  article,
  total,
  position,
  commentsTotal,
  like,
  pageNumChange,
  toCommentFieldTop,
  queryComments,
  commentsConditions
} = useArticleDetail(articleId, posterCommentId)
const { delay } = useDelayMenuBar(articleId)
const clicked = computed(() => article.likes.includes(userInfo.uid))
const isAuthor = computed(() => article.authorId == userInfo.uid)
</script>
<template>
  <div class="community-detail flex">
    <div class="main-content mr-20">
      <div class="main content-card">
        <user-info-comp
          class="user-info"
          :user-info="article.authorInfo"
          :publish-time="article.createTime"
        />
        <article class="content" v-html="article.content"></article>
        <div class="supports mb-20">
          <span @click="like(clicked)" :class="{ clicked }">
            <i class="iconfont icon-like font-20"></i>
            {{ numFormat(article.likes.length) }}
          </span>
          <span @click="toCommentFieldTop">
            <i class="iconfont icon-comment font-20"></i>
            {{ numFormat(article.comments.length) }}
          </span>
          <span>
            <el-tooltip placement="bottom" content="分享给朋友">
              <i class="iconfont icon-share font-20"></i>
            </el-tooltip>
          </span>
          <span v-if="isAuthor" @click="$router.push(`/community/editor?articleId=${articleId}`)">
            <el-tooltip placement="bottom" content="编辑">
              <i class="iconfont icon-edit font-20"></i>
            </el-tooltip>
          </span>
        </div>
        <span class="pointer tag mr-20">#{{ article.professional }}</span>
        <span class="pointer hover" @click="$router.back()">返回上一页</span>
        <span class="pointer hover back absolute" @click="$router.back()">返回上一页</span>
      </div>
      <Publish
        :article-id="articleId"
        :level="1"
        :reply-article-author-id="article.authorId"
        @re-query-comments="queryComments"
      />
      <i class="anchor"></i>
      <Comments
        :data="article.comments"
        :article-id="articleId"
        :total="total"
        :page-num="commentsConditions.pageNum"
        :scroll-to="position"
        :comments-total="commentsTotal"
        :article-author-id="article.authorId"
        @page-num-change="pageNumChange"
        @re-query-comments="queryComments"
      />
    </div>
    <div class="slide-content">
      <hot-list class="slide-item" />
      <browse-history />
      <menu-bar
        v-if="delay"
        class="slide-item menu-bar content-card"
        body=".content"
        :style="{ width: '300px' }"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.community-detail {
  max-width: var(--max-width);
  margin: 20px auto;

  .main-content {
    flex: 1;
    position: relative;

    .main {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      .tag {
        color: var(--theme);

        &:hover {
          opacity: 0.7;
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
        background: var(--body-background);
        font-size: 0.9em;
        color: var(--font-color);

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .back {
    top: 20px;
    right: 20px;
  }

  .slide-content {
    flex-basis: 300px;

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

@media screen and (max-width: 800px) {
  .slide-content {
    display: none;
  }
  .main-content {
    margin-left: 20px;
  }
}
</style>
