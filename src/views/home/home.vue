<script setup lang="ts">
import { useGiteeRepoStars, useRecentTemplate, useTypeNet, useUserComments } from './hook'
import Header from './components/header.vue'
import Presentation from './components/presentation.vue'
import { useDark } from '@vueuse/core'
import { templates } from '@/templates/config'

const animate = ['fade-right', 'fade-up', 'fade-up', 'fade-left']
const isDark = useDark()
useTypeNet()
useRecentTemplate()
const { comments } = useUserComments()
const { repoStars, createAnimateEffect } = useGiteeRepoStars()
</script>

<template>
  <div class="tip">
    您正在访问备用网址，请前往主站获取更加完善的功能及简历模板
    <a class="pointer hover" href="https://wuxiancv.com">点击访问</a>
  </div>
  <div id="home">
    <Header />
    <div class="introduce flex flex-space-around flex-align-around flex-align-center noto-sans-sc">
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

    <div class="user-comments noto-sans-sc">
      <div class="intro">
        <h1 data-aos="zoom-in">😍 来自用户的声音</h1>
        <p class="sub-intro" data-aos="zoom-in">
          CodeCV 简历上线后得到了许多用户的喜欢，同时也收获了一些用户的反馈，看看他们是怎么说的吧～
        </p>
      </div>
      <ul class="flex presentation-module">
        <li class="pointer" v-for="(comment, idx) in comments" :key="idx" data-aos="zoom-in">
          <p>{{ comment.content }}</p>
          <p class="user-comment-info">
            <img :src="comment.avatar" alt="头像" />
            <sub>{{ comment.profession }}</sub>
          </p>
        </li>
      </ul>
      <div class="gitee-repo-stars">
        <a
          v-for="user in repoStars"
          :key="user.login"
          target="_blank"
          :href="user.html_url"
          :data-aos="createAnimateEffect()"
        >
          <img :src="user.avatar_url" :alt="user.name" />
          <sub class="line-1">{{ user.name }}</sub>
        </a>
        <br />
        <a href="https://gitee.com/codeleilei/markdown2pdf/stargazers" target="_blank">...</a>
      </div>
    </div>

    <div class="recent-template noto-sans-sc">
      <div class="intro">
        <h1 data-aos="zoom-in">🤩 最新模板</h1>
        <p class="sub-intro" data-aos="zoom-in">
          如果你有喜欢的模板在这里没有，记得告诉我哦～
          等你下次再来的时候就能看到了，你永远可以相信作者的速度！
        </p>
      </div>
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
  </div>
</template>

<style lang="scss" scoped>
.tip {
  font-size: 13px;
  color: var(--writable-font-color);
  text-align: center;
  a {
    color: var(--strong-color);
  }
}
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
  .intro {
    padding-bottom: 20px;
    padding-top: 10px;
    background: var(--body-background);
    .sub-intro {
      text-align: center;
      color: #999;
      font-size: 14px;
    }
  }

  .introduce {
    color: var(--font-color);
    height: 100vh;
    padding: 20px;
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
      background: var(--body-background);
    }
    ul {
      li {
        position: relative;
        margin-right: 20px;
        background: var(--body-background);
        padding: 20px 20px 60px 20px;
        border-radius: 10px;
        font-family: 'Noto Sans SC';
        font-size: 14px;
        min-width: 220px;

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

  .gitee-repo-stars {
    margin: 0 auto;
    padding: 0 20px 50px 20px;
    text-align: center;
    max-width: var(--max-width);
    p {
      color: var(--writable-font-color);
    }
    a {
      margin: 5px;
      text-decoration: none;
      color: var(--writable-font-color);
      display: inline-flex;
      flex-direction: column;
      max-width: 50px;
      sub {
        font-size: 12px;
        margin-top: 5px;
      }
      .no-avatar,
      img {
        width: 40px;
        border-radius: 50%;
      }
      .no-avatar {
        height: 40px;
        background: var(--theme);
        color: var(--font-color);
        padding: 10px;
        margin-bottom: 10px;
      }
      &:hover {
        opacity: 0.6;
      }
    }
  }

  .recent-template {
    background: var(--background);
    h1 {
      text-align: center;
      padding: 20px 0;
      background: var(--body-background);
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
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
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
