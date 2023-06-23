<script setup lang="ts">
import { formatTimefromNow } from '@/utils/date'
import { type INotificationList } from '@@types/type'
import Empty from '../empty.vue'

defineProps<{ data: INotificationList[]; total: number }>()
defineEmits(['readNotification', 'queryData'])
</script>

<template>
  <div class="crm">
    <div class="list" v-if="data.length">
      <ul class="flex notification-list list-style-init">
        <li
          v-for="(notif, idx) in data"
          :key="idx"
          class="pointer notification-item"
          @click="$emit('readNotification', notif)"
        >
          <el-badge class="is-read" v-if="!notif.read" value="new"></el-badge>
          <div class="comment-info">
            <el-image
              :lazy="true"
              :src="notif.commentUserInfo.avatar"
              fit="cover"
              loading="lazy"
              alt="头像"
              class="mr-10 avatar"
            />
            <span class="gray">{{ notif.commentUserInfo.nickName }}</span>
            <p class="line-2">
              <span class="gray"
                >{{ formatTimefromNow(notif.commentContent.createTime) }}回复你：</span
              >
              {{ notif.commentContent.content }}
            </p>
          </div>
          <div class="reply-info">
            <div class="mb-10 flex flex-space-between">
              <span>来自：</span>
              <span>{{ formatTimefromNow(notif.replyContent.createTime) }}发布的</span>
            </div>
            <el-image
              :lazy="true"
              :src="notif.replyUserInfo.avatar"
              fit="cover"
              loading="lazy"
              alt="头像"
              class="mr-10 avatar"
            />
            <span>{{ notif.replyUserInfo.nickName }}</span>
            <p v-if="notif.replyContent.content" class="line-2">
              <span>评论内容：</span>
              {{ notif.replyContent.content }}
            </p>
            <p v-else class="line-2">.....</p>
          </div>
        </li>
      </ul>
      <el-pagination
        layout="prev, pager, next"
        style="padding-top: 15px"
        @current-change="(page: number) => $emit('queryData', page)"
        :page-size="10"
        :total="total"
      />
    </div>
    <Empty v-else title="这是暂时还是空的~" />
  </div>
</template>

<style lang="scss" scoped>
.crm {
  .notification-list {
    max-height: 600px;
    overflow: auto;
    padding: 10px;
    flex-direction: column;
    text-align: left;

    li {
      margin-top: 20px;
      position: relative;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;

      .avatar {
        width: 35px;
        height: 35px;
        border-radius: 5px;
      }

      .gray {
        opacity: 0.6;
      }

      .reply-info {
        padding: 10px;
        color: #666;
        background: #f3f5f7;
        border-radius: 5px;
      }

      .comment-info {
        margin-bottom: 10px;
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        border-bottom: none;
      }

      .is-read {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
}
</style>
