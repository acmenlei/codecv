<script setup lang="ts">
import Header from './header/header.vue'
import Footer from './footer.vue'
</script>

<template>
  <Header v-if="!['/editor', '/home'].includes($route.path)" />
  <div id="main">
    <el-tooltip placement="bottom" content="返回顶部">
      <el-backtop :bottom="100" />
    </el-tooltip>
    <router-view v-slot="{ Component }">
      <keep-alive
        :max="10"
        include="home,editor,syntax,recruit,template,update,community,communityEditor,communityDetail"
      >
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <Footer v-if="!['/editor'].includes($route.path)" />
</template>

<style lang="scss" scoped>
#main {
  min-height: calc(100vh - 60px);
}
</style>
