<script setup lang="ts">
import Publish from '@/components/publish/publish.vue'
import UserInfoComp from '@/components/userInfo.vue'
import { useReply, useShowMore } from './hook'
import { ICommentReply } from '@@types/type'

const emits = defineEmits(['reQueryComments'])
const props = defineProps<{ data: ICommentReply[]; commentId: number; articleId: number }>()
const { currenId, reply, userInfo, remove } = useReply(emits)
const { more, setMore } = useShowMore(props.data.length)
</script>

<template>
  <div class="comments-list mt-20 content-card">
    <div class="comment-item" :key="idx" v-for="(comment, idx) in more ? data.slice(0, 1) : data">
      <user-info-comp :user-info="comment.authorInfo" :publish-time="comment.createTime" />
      <p class="comment-content line-4">
        <span class="reply-text pointer">@{{ comment.replyNickName }}：</span>
        {{ comment.content }}
      </p>
      <div class="covers-container" v-if="comment.images">
        <el-image
          :key="idx"
          :src="cover"
          v-for="(cover, idx) in comment.images.split('~$^$~')"
          :preview-src-list="comment.images.split('~$^$~')"
          :initial-index="idx"
          fit="cover"
          loading="lazy"
          :lazy="true"
          class="mr-10 cover-item"
          :preview-teleported="true"
          :hide-on-click-modal="true"
        />
      </div>
      <ul class="list-style-init flex operator">
        <li class="mr-10" @click="reply(comment.commentId)">回复</li>
        <li
          v-if="userInfo.uid === comment.authorId"
          @click="remove(comment.commentId, articleId, 2)"
        >
          删除
        </li>
      </ul>
      <Publish
        v-if="currenId === comment.commentId"
        :article-id="articleId"
        :level="2"
        :reply-comment-level="comment.level"
        :poster-comment-id="commentId"
        :reply-comment-id="comment.commentId"
        :reply-author-id="comment.authorId"
        background="white"
        @re-query-comments="$emit('reQueryComments')"
      />
    </div>
    <span v-if="more" @click="setMore" class="pointer showMore">显示全部...</span>
  </div>
</template>

<style lang="scss" scoped>
.content-card {
  background: var(--background);

  .showMore {
    color: var(--theme);
    font-size: 0.9rem;
  }
}

.comment-item {
  .comment-content {
    font-size: 0.9rem;
    color: var(--font-color);

    .reply-text {
      color: var(--theme);
    }
  }

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
