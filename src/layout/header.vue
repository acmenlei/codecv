<script setup lang='ts'>
import outNav from "@/common/nav/outNav"
</script>

<template>
  <div class="header-out">
    <div class="header">
      <div class="logo" @click="$router.replace('/home')">
        <img src="/vite.svg" alt="">
      </div>
      <ul class="nav">
        <li v-for="navItem in outNav" :class="{ 'checked': $route.path === navItem.path }">
          <router-link v-if="!navItem.tooltip" :to="navItem.path">{{ navItem.name }}</router-link>
          <span v-else>{{ navItem.name }}</span>
        </li>
      </ul>

      <div class="user">
        <div class="user-creative mr-20 pointer primary">写面经 <i class="iconfont icon-practice "></i></div>
        <span class="user-nick  mr-10">我头发茂盛</span>
        <img class="pointer mr-10" src="https://avatars.githubusercontent.com/u/54731221?v=4" />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.header-out {
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  z-index: 3;
  position: sticky;
  top: 0;

  .header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .user {
      flex-basis: 250px;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-creative {
        margin-right: 40px;
      }

      .user-nick {
        display: inline-block;
        font-size: .9rem;
        margin-top: 10px;
        color: orange;
      }

      img {
        width: 35px;
        border-radius: 50%;
      }
    }
  }
}
</style>