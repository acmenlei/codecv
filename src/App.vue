<template>
  <router-view v-slot="{ Component }">
    <keep-alive :max="10" include="editor,home">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
import AOS from 'aos'
import { onMounted } from 'vue'
import 'aos/dist/aos.css'

onMounted(() => AOS.init({ once: true }))
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: var(--body-background);
}
</style>
