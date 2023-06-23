<script setup lang="ts">
import { IUserInfo } from '@@types/type'

defineProps<{ userInfo: IUserInfo }>()
</script>

<template>
  <div class="user-tooltip flex content-card">
    <div class="head flex">
      <img class="mr-10" :src="userInfo.avatar" alt="头像" />
      <strong class="nick-name">
        {{ userInfo.nickName }}
      </strong>
    </div>
    <p>
      <strong>性别：</strong>
      {{ userInfo.sex }}生
    </p>
    <p>
      <strong>院校：</strong>
      <span>{{ userInfo.school }} -</span>
      <span>{{ userInfo.graduation }}届</span>
    </p>
    <p>
      <strong>求职意向：</strong>
      {{ userInfo.professional }}
    </p>
    <p>
      <strong>所在地区：</strong>
      {{ userInfo.origin }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.user-tooltip {
  width: 200px;
  min-height: 200px;
  font-size: 0.8rem;
  color: #666;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, white 0%, #5fd5f5 200%);

  p {
    margin-top: 10px;
  }

  .head {
    justify-content: space-between;
    align-items: flex-end;

    .nick-name {
      color: orange;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
}
</style>
