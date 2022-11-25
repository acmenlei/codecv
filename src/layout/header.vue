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
    </div>
  </div>
</template>

<style lang='scss' scoped>
.header-out {
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  z-index: 1;
  position: sticky;
  top: 0;

  .header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
}
</style>