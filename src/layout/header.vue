<script setup lang='ts'>
import outNav from "@/common/nav/outNav"
</script>

<template>
  <div id="header">
    <div class="logo"><img src="/vite.svg" alt=""></div>
    <ul class="nav">
      <li v-for="navItem in outNav" :class="{ 'active': $route.path === navItem.path }">
        <i :class="navItem.icon"></i>
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{ navItem.name }}</router-link>
        <span v-else>{{ navItem.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
#header {
  background: #fff;
  min-width: 1124px;
  z-index: 1;
  transition: background .5s;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;
}
</style>