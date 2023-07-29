<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import resumeCard from './components/resumeCard.vue'
import Empty from '@/components/empty.vue'

import { templateCategory } from './constant'
import { useCategory } from './hook'

const { queryCategory, data } = useCategory()
</script>

<template>
  <div class="resume-container flex">
    <div class="resume-left-container content-card" data-aos="fade-right">
      <NavBar button="创作模板" :tabs="templateCategory" @tab-click="queryCategory" />
      <div class="resume-card-container" v-if="data.length">
        <resume-card v-for="theme in data" :key="theme.id" :theme="theme" />
      </div>
      <Empty v-else title="暂时没有这类模板 你可以点击右上角创作模板或联系作者添加～" />
    </div>
    <div class="resume-right-container" data-aos="fade-left">
      <div class="resume-notification content-card">
        <strong>公告</strong>
        <br />
        <p>
          如果你觉得项目对你有所帮助，请考虑为
          <a href="https://github.com/acmenlei/codecv" target="_blank">项目</a>
          点一个 star<i class="iconfont icon-star"></i>～
        </p>
      </div>
      <div class="advertising content-card mt-20">
        <p>作者微信</p>
        <img src="@/assets/img/wechat.jpg" alt="relative" />
        <br />
        <br />
        <p>QQ 交流群</p>
        <img src="@/assets/img/qqgroup.jpeg" alt="QQ交流群" class="qqgroup qr" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  max-width: var(--max-width);
  margin: 20px auto;

  .resume-notification {
    strong {
      display: inline-block;
      margin-bottom: 10px;
    }
    a {
      color: #5e75eb;
    }
  }

  .resume-left-container {
    margin-right: 20px;
    .resume-card-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .advertising {
    position: sticky;
    top: 80px;
    img {
      margin-top: 10px;
      width: 170px;
    }
  }
}
@media screen and (max-width: 800px) {
  .resume-right-container {
    display: none;
  }
  .resume-left-container {
    margin-left: 20px;
  }
}
</style>
