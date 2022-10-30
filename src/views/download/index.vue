<script setup lang='ts'>
import { onActivated } from "vue";
import { useRouter } from "vue-router";
import "../../common/styles/index.css"
const router = useRouter()

onActivated(() => {
  const content = JSON.parse(localStorage.getItem('download') || '');
  (document.querySelector(".markdown-transform-html") as HTMLElement).innerHTML = content;
  setTimeout(() => {
    window.print();
    router.back();
  });
})

</script>

<template>
  <div class="markdown-transform-html"></div>
</template>

<style lang="scss" scoped>
.markdown-transform-html {
  width: 750px;
  padding: 10px;
}
</style>