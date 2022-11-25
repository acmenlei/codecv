<script setup lang='ts'>
import Header from "./header.vue"
import Footer from "./footer.vue"
</script>

<template>
  <Header v-if="!['/editor', '/home'].includes($route.path)" />
  <div id="main">
    <el-tooltip placement="bottom" content="返回顶部">
      <el-backtop :bottom="100" />
    </el-tooltip>
    <router-view v-slot="{ Component }">
      <keep-alive :max="10" include="editor,syntax,update,theme">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <Footer v-if="!['/home', '/editor'].includes($route.path)" />
</template>

<style lang="scss" scoped>
#main {
  min-height: calc(100vh - 100px);
}
</style>