<script setup lang='ts'>
import nav from "../common/nav"
import ToolTip from "@/components/toolTip.vue"
import { ref } from "vue";

const toggle = ref(false);

const toggleToolTip = () => {
  toggle.value = !toggle.value;
}
</script>

<template>
  <div id="header">
    <div class="logo"><img src="../../public/vite.svg"></div>
    <ul class="nav">
      <li v-for="navItem in nav">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{ navItem.name }}</router-link>
        <ToolTip v-else :toggle='toggle'><span @click="toggleToolTip">{{ navItem.name }}</span></ToolTip>
      </li>
    </ul>
    <div class="user"></div>
  </div>
</template>

<style lang='scss' scoped>
#header {
  background: rgb(177, 160, 149);
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;

  .nav {
    flex: 1;
    display: flex;
    margin-left: 50px;

    li {
      list-style: none;
      margin: 0 20px;
      color: white;
      cursor: pointer;
      white-space: nowrap;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>