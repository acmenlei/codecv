<script setup lang="ts">
function toGithub() {
  window.open('https://github.com/acmenlei/markdown-resume-to-pdf')
}
</script>

<template>
  <div id="footer">
    <span class="item mr-20 pointer" @click="toGithub"><i class="iconfont icon-github"></i>Github地址</span>
    <span class="item mr-20 pointer"><i class="iconfont icon-wechat"></i>x972761675</span>
  </div>
</template>

<style lang='scss' scoped>
#footer {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #999;
  .item {
    .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }
  }
}
</style>