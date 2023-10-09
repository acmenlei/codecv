<script setup lang="ts">
import { homeNav, homeOutNav } from '@/common/nav/homeNav'
import Logo from '@/components/logo.vue'
import ThemeToggle from '@/components/themeToggle.vue'
function toOutNav(path: string) {
  window.location.href = path
}
</script>

<template>
  <div id="header" class="noto-sans-sc">
    <Logo />
    <ul class="nav" data-aos="zoom-out-right">
      <li v-for="(navItem, idx) in homeNav" :key="idx">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{
          navItem.name
        }}</router-link>
      </li>
      <li v-for="(navItem, idx) in homeOutNav" @click="toOutNav(navItem.path)" :key="idx">
        <i :class="navItem.icon" :style="{ color: navItem.color }" />
        {{ navItem.name }}
      </li>
    </ul>
    <div class="operator" data-aos="zoom-out-left">
      <theme-toggle />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  position: absolute;
  top: 20px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  font-weight: 500;
}
</style>
