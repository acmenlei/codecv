<script setup lang="ts">
import { numFormat } from '@/utils/format'
import Empty from '@/components/empty.vue'
import UserInfo from '@/components/userInfo.vue'
import Publish from '@/components/publish/publish.vue'
import { useReply, useCommentPosition } from './hook'
import Reply from './reply.vue'
import { computed } from 'vue'
import { type IComment } from '@@types/type'

const emits = defineEmits(['pageNumChange', 'reQueryComments'])
const props = defineProps<{
  data: Array<IComment>
  articleId: number
  pageNum: number
  scrollTo: number
  total: number
  articleAuthorId: number // 回复的当前文章的作者
  commentsTotal: number
}>()

const position = computed(() => props.scrollTo)
const { currenId, reply, userInfo, remove } = useReply(emits)
const { comments } = useCommentPosition(position)
</script>

<template>
  <div class="comments-container content-card">
    <span class="tip">本页评论/回复共 {{ numFormat(total) }} 条</span>
    <div v-if="data.length" class="comments-list mt-20 content-card" ref="comments">
      <div class="comment-item" v-for="(comment, pidx) of data" :key="pidx">
        <UserInfo :user-info="comment.authorInfo" :publish-time="comment.createTime" />
        <p class="comment-content line-4">{{ comment.content }}</p>
        <div class="covers-container" v-if="comment.images">
          <el-image
            :src="cover"
            v-for="(cover, idx) in comment.images.split('~$^$~')"
            :preview-src-list="comment.images.split('~$^$~')"
            :key="idx"
            :initial-index="idx"
            fit="cover"
            :lazy="true"
            loading="lazy"
            class="mr-10 cover-item"
            :preview-teleported="true"
            :hide-on-click-modal="true"
          />
        </div>
        <ul class="list-style-init flex operator">
          <li class="mr-10" @click="reply(comment.commentId)">回复</li>
          <!-- <li class="mr-10">点赞</li> -->
          <li
            v-if="userInfo.uid === comment.authorId"
            @click="remove(comment.commentId, articleId, 1)"
          >
            删除
          </li>
        </ul>
        <!-- 内容输入框 -->
        <Publish
          :article-id="articleId"
          :level="2"
          :poster-comment-id="comment.commentId"
          :reply-comment-id="comment.commentId"
          :reply-comment-level="comment.level"
          :reply-author-id="comment.authorId"
          :reply-article-author-id="articleAuthorId"
          @re-query-comments="$emit('reQueryComments')"
          v-if="currenId === comment.commentId"
        />
        <!-- 二级回复：内容 + 回复了谁-->
        <Reply
          :data="comment.children"
          :comment-id="comment.commentId"
          :article-id="articleId"
          @re-query-comments="$emit('reQueryComments')"
          v-if="comment.children.length"
        />
      </div>
    </div>
    <el-pagination
      v-if="data.length"
      background
      layout="prev, pager, next"
      :total="commentsTotal"
      class="mt-4 mt-20"
      :current-page="pageNum"
      @current-change="(page: number) => $emit('pageNumChange', page)"
    />
    <Empty v-if="!data.length" title="还没有人发表评论..." />
  </div>
</template>

<style lang="scss" scoped>
@keyframes notice {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  0% {
    transform: translateX(0);
  }
}

.notice {
  animation: notice 3s linear;
}

.tip {
  color: var(--font-color);
}

.comments-container {
  margin-top: 20px;
}

.comment-item {
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: '';
    background: var(--theme);
  }

  &::before {
    width: 10px;
    height: 10px;
    left: -20px;
    top: 10px;
    border-radius: 50%;
    opacity: 0.5;
    z-index: 2;
  }

  &::after {
    width: 1px;
    height: calc(100% + 20px);
    left: -16px;
    opacity: 0.2;
    top: 15px;
  }

  .comment-content {
    font-size: 0.9rem;
    color: var(--font-color);
  }

  margin-bottom: 25px;

  .operator {
    justify-content: flex-end;
    font-size: 0.8rem;
    color: var(--font-color);
    li {
      color: inherit;
    }
  }
}
</style>
