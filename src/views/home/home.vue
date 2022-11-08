<script setup lang='ts'>
import Header from "./ch-cmp/header.vue"
</script>

<template>
  <Header />
  <div class="introduce flex flex-space-around flex-align-center">
    <img src="/resume-bg.svg" alt="">
    <div class="introduce-r tac">
      <h2>一款免费的 <span class="highlight">Markdown</span> 简历编写工具</h2>
      <h2>可以将你编写的<span class="highlight">Markdown</span>转为<span class="highlight">PDF</span>格式的文件</h2>
    </div>
  </div>
  <div class="mask"></div>
</template>

<style lang='scss' scoped>
.introduce {
  margin-top: 200px;
  color: #333;

  img {
    width: 500px;
  }
}

.mask {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #D9AFD9;
  background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
}

.highlight {
  color: #fd79a8;
  /* color: var(--theme); */
  margin: 0 5px;
}

.introduce-r {
  min-width: 550px;
}
</style>