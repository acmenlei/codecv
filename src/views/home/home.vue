<script setup lang='ts'>
import Header from "./components/header.vue"
</script>

<template>
  <Header />
  <div class="introduce flex flex-space-around flex-align-center">
    <img src="/resume-bg-one.svg" alt="" data-aos="fade-right">
    <div class="introduce-r tac" data-aos="fade-left">
      <h2>一款免费的 <span class="highlight">Markdown</span> 简历编写工具</h2>
      <h2>可以将你编写的<span class="highlight">Markdown</span>转为<span class="highlight">PDF</span>格式的文件</h2>
    </div>
  </div>
  <div class="mask"></div>
  <div class="introduce white-bg flex flex-space-around flex-align-center">
    <img src="/resume-bg-two.svg" data-aos="fade-right">
    <div class="introduce-r tac" data-aos="fade-left">
      <h2>多种模板适配，你想要的 <span class="highlight">这里都有</span></h2>
      <h2>智能<span class="highlight">自动一页</span></h2>
      <h2>解决简历内容<span class="highlight">太多/太少</span>引发的尴尬境地</h2>
    </div>
    <div class="ball-bottom" data-aos="fade-right" data-aos-duration="1000"></div>
    <div class="ball-top" data-aos="fade-up" data-aos-duration="1000"></div>
  </div>
  <div class="introduce white-bg flex odd flex-space-around flex-align-center">
    <div class="introduce-r tac" data-aos="fade-right">
      <h2>根据自身喜好 <span class="highlight">DIY</span>简历样式</h2>
      <h2>简历怎么配色<span class="highlight">由你决定</span>～</h2>
    </div>
    <img src="/resume-bg-three.svg" data-aos="fade-left">
    <div class="ball-bottom" data-aos="fade-right" data-aos-duration="1000"></div>
    <div class="ball-top" data-aos="fade-up" data-aos-duration="1000"></div>
  </div>
</template>

<style lang='scss' scoped>
.white-bg {
  background: #fff;
  margin-top: 20px;
}
.introduce {
  color: #333;
  height: 100vh;
  padding: 20px;
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
    opacity: .3;
  }

  .ball-bottom {
    background: #05b2f7;
    bottom: -20%;
    left: -25%;
  }

  .ball-top {
    background: pink;
    top: 10%;
    right: -25%;
  }

  &.odd {
    .ball-bottom {
      background: #69f735;
    }

    .ball-top {
      background: #d27ef9;
    }
  }
  img,.introduce-r {
    z-index: 2;
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #FFDEE9;
  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
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