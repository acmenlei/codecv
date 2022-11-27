<script setup lang='ts'>
import { formatTimefromNow } from '@/common/utils/date';
import UserTooltip from '@/components/userTooltip.vue'

</script>

<template>
  <div class="user-head">
    <img class="pointer mr-10" src="https://avatars.githubusercontent.com/u/54731221?v=4" />
    <user-tooltip class="user-tooltip"/>
    <div class="user-info">
      <span class="user-name">我还能学</span>
      <div class="date-school">
        <span class="datetime">{{ formatTimefromNow(new Date().getTime()) }}</span>
        <span class="school"> 清华大学-2023届 </span>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.user-head {
  margin-bottom: 10px;
  color: #333;
  position: relative;

  img {
    width: 35px;
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
    font-size: .9rem;

    .date-school {
      color: #888;
    }
  }
}
</style>