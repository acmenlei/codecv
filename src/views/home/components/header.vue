<script setup lang='ts'>
import { homeNav, homeOutNav } from "@/common/nav/homeNav"
import Logo from "@/components/logo.vue";
function toOutNav(path: string) {
  window.location.href = path;
}
</script>

<template>
  <div id="header">
    <Logo/>
    <ul class="nav" data-aos="zoom-out-right">
      <li v-for="navItem in homeNav">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{ navItem.name }}</router-link>
      </li>
      <li v-for="navItem in homeOutNav" @click="toOutNav(navItem.path)">
        <i :class="navItem.icon" /> {{ navItem.name }}
      </li>
    </ul>
    <div class="operator" data-aos="zoom-out-left">
      <button class='linear-color-btn' @click="$router.push('/editor?type=front_end')">
        <i class="iconfont icon-technology "></i> 开始创作</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
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

  .nav {
    li:hover {
      opacity: .8;
    }

    .iconfont {
      font-size: 1.1rem;
      margin-right: 1px;
    }
  }
}
</style>