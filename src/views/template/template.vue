<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import resumeCard from './components/resumeCard.vue'
import Empty from '@/components/empty.vue'
import { templateCategory } from './constant'
import { useCategory, useTemplateData } from './hook'
import { numFormat } from '@/utils/format'

const { queryCategory, data } = useCategory()
const { ranks } = useTemplateData()
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
      <div class="resume-hot-rank content-card mb-20">
        <strong class="mb-20">简历模板热度排行</strong>
        <ul v-if="ranks.length">
          <li
            v-for="(t, idx) in ranks"
            :key="t.type"
            class="flex hover pointer"
            @click="$router.push({ path: `/editor`, query: { type: t.type } })"
          >
            <el-tooltip :content="t.name" placement="left">
              <p class="line-1">
                <span class="mr-10">{{ idx + 1 }}</span
                >{{ t.name }}
              </p>
            </el-tooltip>
            <sub> <i class="iconfont icon-hot"></i> {{ numFormat(+String(t.hot)) }}</sub>
          </li>
        </ul>
        <Empty title="正在加载中" v-else />
      </div>
      <div class="resume-notification content-card">
        <strong>公告</strong>
        <p>
          如果你觉得项目对你有所帮助，请考虑为
          <a href="https://github.com/acmenlei/codecv" target="_blank">项目</a>
          点一个 <i class="iconfont icon-star"></i>，若遇到 BUG 请通过下方微信/
          <a href="https://github.com/acmenlei/codecv/issues" target="_blank">issues</a>
          描述并复现你所遇到的问题，当然你也可以为项目贡献你的代码，良好的用户体验需要大家一起来构建～
        </p>
      </div>
      <div class="advertising content-card mt-20">
        <p>联系作者</p>
        <img src="@/assets/img/wechat.jpg" alt="relative" />
        <br />
        <br />
        <p>QQ 群</p>
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
    font-size: 15px;
    line-height: 28px;
    strong {
      display: inline-block;
      margin-bottom: 10px;
      padding-bottom: 5px;
      color: var(--theme);
    }
    a {
      color: #5e75eb;
    }
  }

  .resume-hot-rank {
    strong {
      display: inline-block;
      color: var(--theme);
    }
    li {
      font-size: 14px;
      line-height: 30px;
      p {
        max-width: 135px;
      }
      sub {
        font-weight: bold;
        white-space: nowrap;
        color: orangered;
        text-align: right;
        flex-grow: 1;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        p span {
          color: orangered;
        }
      }
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
