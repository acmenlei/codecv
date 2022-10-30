<script setup lang='ts'>
import Header from "./header.vue"
import Footer from "./footer.vue"
</script>

<template>
  <div id="main">
    <Header />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Footer />
  </div>
</template>