<script setup lang='ts'>
import Header from "./header.vue"
import Footer from "./footer.vue"
</script>

<template>
  <Header v-if="!['/editor', '/home'].includes($route.path)" />
  <router-view v-slot="{ Component }">
    <keep-alive :max="10" include="editor,syntax,update,theme">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <Footer />
</template>


<style lang="scss" scoped>
#main {
  padding-bottom: 100px;
}
</style>