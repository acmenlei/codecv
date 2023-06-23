<script setup lang="ts">
import { formatTimefromNow } from '@/utils/date'
import UserTooltip from '@/components/userTooltip.vue'
import { IUserInfo } from '@@types/type'

defineProps<{ userInfo: IUserInfo; publishTime?: string }>()
</script>

<template>
  <div class="user-head">
    <img class="pointer mr-10" :src="userInfo?.avatar" />
    <user-tooltip class="user-tooltip" :userInfo="userInfo" />
    <div class="user-info">
      <span class="user-name">{{ userInfo?.nickName }}</span>
      <div class="date-school">
        <span v-if="publishTime" class="datetime mr-20"
          >{{ formatTimefromNow(publishTime as string) }}发布</span
        >
        <span class="school">
          <i class="iconfont icon-school"></i>
          {{ userInfo?.school }} - {{ userInfo?.graduation }}届
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-head {
  margin-bottom: 10px;
  color: var(--font-color);
  position: relative;

  img {
    width: 35px;
    height: 35px;
    border-radius: 5px;

    &:hover + .user-tooltip {
      display: block;
    }
  }

  .user-tooltip {
    display: none;
    border: 1px solid #eee;
    position: absolute;
    top: 30px;
    left: 25px;
    z-index: 3;

    &:hover {
      display: block;
    }
  }

  .user-info {
    display: inline-block;
    font-size: 0.9rem;

    .date-school {
      color: #888;
    }
  }
}
</style>
