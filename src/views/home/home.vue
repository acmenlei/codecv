<script setup lang="ts">
import { useRecentTemplate, useTypeNet, useUserComments } from './hook'
import Header from './components/header.vue'
import Presentation from './components/presentation.vue'
import { useDark } from '@vueuse/core'
import { templates } from '@/templates/config'

const { comments } = useUserComments()
const isDark = useDark()
useTypeNet()
useRecentTemplate()
const animate = ['fade-right', 'fade-up', 'fade-up', 'fade-left']
</script>

<template>
  <div id="home">
    <Header />
    <div class="introduce flex flex-space-around flex-align-around flex-align-center noto-serif-sc">
      <div class="introduce-l" data-aos="fade-right">
        <div class="typenet-text"></div>
        <button
          @click="$router.push('/template')"
          :class="['start btn pointer', { 'dark-start': isDark }]"
        >
          快速开始 <i class="iconfont icon-goto"></i>
        </button>
      </div>
      <div class="introduce-r">
        <Presentation />
      </div>
    </div>

    <div class="user-comments noto-serif-sc">
      <h1 data-aos="zoom-in">😍 真实评价</h1>
      <p class="module-intro" data-aos="zoom-in">
        CodeCV上线后得到了一些用户的反馈，看看他们是怎么说的吧～
      </p>
      <ul class="flex presentation-module">
        <li v-for="(comment, idx) in comments" :key="idx" data-aos="zoom-in">
          <p>{{ comment.content }}</p>
          <p class="user-comment-info">
            <img :src="comment.avatar" alt="头像" />
            <sub>{{ comment.profession }}</sub>
          </p>
        </li>
      </ul>
    </div>

    <div class="recent-template noto-serif-sc">
      <h1 data-aos="zoom-in">🤩 最新模板</h1>
      <p class="module-intro" data-aos="zoom-in">如果你有喜欢的模板在这里没有，记得告诉我哦～</p>
      <ul class="flex presentation-module">
        <li
          class="pointer"
          v-for="(t, idx) in templates.slice(0, 4)"
          :key="idx"
          :data-aos="animate[idx]"
          @click="$router.push({ path: '/editor', query: { type: t.type } })"
        >
          <img :src="t.img" alt="" />
          <span>{{ t.hot }}+使用</span>
          <p>{{ t.name }}</p>
        </li>
      </ul>
    </div>
    <div class="footer flex noto-serif-sc">
      <!-- <ul class="flex">
        <li>
          <i class="iconfont icon-github"></i>
          <a href="https://github.com/acmenlei/codecv" target="_blank">GitHub Repo</a>
        </li>
        <li>
          <i class="iconfont icon-home"></i>
          <a href="https://coderlei.netlify.app" target="_blank">我的个人网站</a>
        </li>

        <li>
          <i class="iconfont icon-juejin"></i>
          <a href="https://juejin.cn/user/2586468969632445" target="_blank">我的掘金文章</a>
        </li>
      </ul>
      <ul class="flex">
        <li><i class="iconfont icon-problem" style="margin-right: 3px"></i> 问题咨询</li>
        <img src="@/assets/img/wechat.jpg" alt="" />
      </ul>
      <ul class="flex">
        <li>CodeCV QQ群聊问题咨询</li>
        <img src="@/assets/img/qqgroup.jpeg" alt="" />
      </ul> -->
      暂无尾部信息
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  height: 100%;
  width: 100%;
  overflow: hidden;

  // 首页公共样式
  .presentation-module {
    color: var(--writable-font-color);
    max-width: var(--max-width);
    margin: 0 auto;
    list-style: none;
    padding: 50px 0;
  }
  .module-intro {
    text-align: center;
    color: #999;
    font-size: 14px;
  }

  .introduce {
    color: var(--font-color);
    height: 90vh;
    padding: 20px;
    padding-top: 100px;
    position: relative;
    overflow: hidden;

    background: linear-gradient(
      30deg,
      var(--background),
      var(--background),
      var(--linear-background) 100%
    );
    .introduce-l {
      z-index: 2;
      .typenet-text {
        width: 500px;
        height: 300px;
      }
      .start {
        font-size: 1.1rem;
        padding: 10px 20px 10px 25px;
        border-radius: 40px;
        background: #000;
        margin-top: 10px;
        color: white;
        &:hover {
          transition: transform 0.4s;
          transform: translateY(5px);
          opacity: 0.8;
        }
      }
      .dark-start {
        background: #ff7449;
      }
    }
  }

  .user-comments {
    background: var(--background);

    h1 {
      text-align: center;
      padding: 20px 0;
    }
    ul {
      li {
        position: relative;
        margin-right: 20px;
        background: var(--body-background);
        padding: 20px 20px 60px 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        font-family: 'Noto Sans SC';
        font-size: 14px;
        min-width: 250px;
        &:last-child {
          margin-right: 0;
        }

        p {
          line-height: 25px;
          sub {
            color: #999;
          }
        }
        .user-comment-info {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 60px;
          text-align: right;
          width: 100%;
          padding: 0 0 10px 20px;
          display: flex;
          align-items: center;
          sub {
            margin-top: 20px;
          }
          img {
            user-select: none;
            -webkit-user-drag: none;
            width: 40px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .recent-template {
    background: var(--background);
    h1 {
      text-align: center;
      padding: 20px 0;
    }
    ul {
      justify-content: space-around;
      list-style: none;
      li {
        flex: 1;
        margin: 0 20px 20px 20px;
        transition: transform 0.5s;
        text-align: center;
        position: relative;
        max-width: 250px;

        span {
          position: absolute;
          top: 0;
          left: 0;
          letter-spacing: 1px;
          padding: 5px 10px;
          background: var(--theme);
          color: #f8f8f8;
          font-size: 12px;
          border-bottom-right-radius: 10px;
          border-top-left-radius: 10px;
        }
        &:hover {
          transform: translateY(20px);
        }
        img {
          width: 100%;
          box-shadow: 0 0 30px var(--body-background);
          border-radius: 10px;
        }
      }
    }
  }

  .footer {
    justify-content: space-around;
    padding: 20px;
    max-width: var(--max-width);
    margin: 0 auto;

    /* ul {
      flex-direction: column;
      list-style: none;
      height: 100%;
      justify-content: center;
      align-items: center;
      line-height: 30px;

      img {
        margin-top: 15px;
        height: 150px;
      }
      li {
        cursor: pointer;
        a {
          text-decoration: none;
          color: var(--font-color);
        }
        i {
          font-size: 20px;
          margin-right: 10px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    } */
  }
}

@media screen and (max-width: 800px) {
  .introduce {
    .introduce-r {
      display: none;
    }
  }
  .user-comments {
    ul {
      flex-direction: column;
      li {
        margin-left: 20px;
      }
    }
  }
  .recent-template {
    ul {
      flex-wrap: wrap;
      li {
        margin-left: 20px;
        text-align: center;
        img {
          width: 70%;
          min-width: 200px;
        }
      }
    }
  }
}
</style>
