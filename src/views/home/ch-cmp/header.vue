<script setup lang='ts'>
import nav from "@/common/nav/homeNav"

</script>

<template>
  <div id="header">
    <div class="logo" data-aos="zoom-out-right"><img src="/vite.svg" alt=""></div>
    <ul class="nav" data-aos="zoom-out-right">
      <li v-for="navItem in nav">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{ navItem.name }}</router-link>
      </li>
    </ul>
    <div class="operator" data-aos="zoom-out-left">
      <button class='use' @click="$router.push('/editor?type=front_end')">开始使用</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#header {
  position: sticky;
  top: 0;
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