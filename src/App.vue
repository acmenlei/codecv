<template>
  <router-view v-slot="{ Component }">
    <keep-alive :max="10" include="editor,home">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css"
import { onMounted } from "vue";

onMounted(() => AOS.init())
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: #f3f5f7;
}
</style>