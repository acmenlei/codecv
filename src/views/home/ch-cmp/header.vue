<script setup lang='ts'>
import { homeNav, homeOutNav } from "@/common/nav/homeNav"
function toOutNav(path: string) {
  window.location.href = path;
}
</script>

<template>
  <div id="header">
    <div class="logo" data-aos="zoom-out-right"><img src="/vite.svg" alt=""></div>
    <ul class="nav" data-aos="zoom-out-right">
      <li v-for="navItem in homeNav">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{ navItem.name }}</router-link>
      </li>
      <li v-for="navItem in homeOutNav" @click="toOutNav(navItem.path)">
        <i :class="navItem.icon" /> {{ navItem.name }}
      </li>
    </ul>
    <div class="operator" data-aos="zoom-out-left">
      <button class='use' @click="$router.push('/editor?type=front_end')">
        <i class="iconfont icon-technology "></i> 开始创作</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: background .5s;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;
  color: #555;
  font-weight: bold;

  @keyframes move {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 46%;
    }

    100% {
      background-position: 0% 100%;
    }
  }

  .nav {
    li:hover {
      opacity: .8;
    }

    .iconfont {
      font-size: 1.1rem;
      margin-right: 1px;
    }
  }

  .use {
    outline: none;
    border: none;
    padding: 10px 20px;
    margin-right: 5px;
    border-radius: 5px;
    /* background: var(--theme); */
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #8170ff 100%);
    background-size: 400%;
    color: white;
    cursor: pointer;
    animation: move 6s linear infinite;
    transition: transform .5s;

    &:hover {
      opacity: .8;
      transform: scale(0.9);
    }
  }
}
</style>