<script setup lang='ts'>
import Header from "./ch-cmp/header.vue"

</script>

<template>
  <Header />
  <div class="introduce flex flex-space-around flex-align-center">
    <img src="/resume-bg.svg" alt="" data-aos="fade-right">
    <div class="introduce-r tac" data-aos="fade-left">
      <h2>一款免费的 <span class="highlight">Markdown</span> 简历编写工具</h2>
      <h2>可以将你编写的<span class="highlight">Markdown</span>转为<span class="highlight">PDF</span>格式的文件</h2>
    </div>
  </div>
  <div class="mask"></div>
  <div class="introduce flex flex-space-around flex-align-center">
    <img src="/resume-bg-two.svg" data-aos="fade-right">
    <div class="introduce-r tac" data-aos="fade-left">
      <h2>多种模板适配，你想要的 <span class="highlight">这里都有</span></h2>
      <h2>智能<span class="highlight">自动一页</span> 根据喜好<span class="highlight">DIY</span>简历样式</h2>
      <h2>解决简历内容<span class="highlight">太多/太少</span>引发的尴尬境地</h2>
    </div>
    <div class="ball-bottom" data-aos="fade-right" data-aos-duration="1000"></div>
    <div class="ball-top" data-aos="fade-up" data-aos-duration="1000"></div>
  </div>
</template>

<style lang='scss' scoped>
.introduce {
  color: #333;
  height: 100vh;
  padding: 20px;
  margin-top: -40px;
  position: relative;
  overflow: hidden;

  img {
    width: 500px;
    user-select: none;
    -webkit-user-drag: none;
  }

  .ball-bottom,
  .ball-top {
    min-width: 500px;
    min-height: 500px;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    opacity: .4;
  }

  .ball-bottom {
    background: skyblue;
    bottom: -20%;
    left: -25%;
  }

  .ball-top {
    background: pink;
    top: 10%;
    right: -25%;
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
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
  min-width: 500px;
  padding: 0 40px;
}
</style>