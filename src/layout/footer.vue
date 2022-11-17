<script setup lang="ts">
function toGithub() {
  window.open('https://github.com/acmenlei/markdown-resume-to-pdf')
}
</script>

<template>
  <div id="footer" class="flex">
    <div class="left flex">
      <div class="item" @click="toGithub"><i class="iconfont icon-github"></i>Github地址</div>
      <div class="item"><i class="iconfont icon-wechat"></i>x972761675</div>
    </div>
    <div class="middle flex">
      模板可能少了点，如果你有不错的 idea ，欢迎给项目贡献代码哦～ 😊
      <br/>
      点击左侧github仓库地址，迈出你的第一步吧～
    </div>
    <div class="right flex">
      友情链接 todo...
    </div>
  </div>
</template>

<style lang='scss' scoped>
#footer {
  height: 150px;
  width: 100%;
  background: #333;
  color: white;
  font-size: 14px;
  justify-content: space-around;
  align-items: center;

  .item {
    margin-top: 5px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  .left {
    flex-direction: column;
  }

  .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }
}
</style>