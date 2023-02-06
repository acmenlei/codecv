<script setup lang='ts'>
import { importCSS } from "@/common/utils";
import { onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  importCSS(String(route.query.type));
  const content = JSON.parse(localStorage.getItem('download') || '');
  (document.querySelector(".markdown-transform-html") as HTMLElement).innerHTML = content;
  setTimeout(() => {
    window.print();
    router.back();
  }, 100);
})

onUnmounted(() => {
  localStorage.removeItem('download')
})
</script>

<template>
  <div class="markdown-transform-html jufe"></div>
</template>

<style lang="scss" scoped>
.markdown-transform-html {
  width: 210mm;
  min-height: 295mm;
  &::before {
    content: "";
    background: #fff;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
  }
}
</style>