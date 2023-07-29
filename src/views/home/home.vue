<script setup lang="ts">
import { useTypeNet } from './hook'
import Header from './components/header.vue'
import Presentation from './components/presentation.vue'
import { useDark } from '@vueuse/core'
// import { templates } from '@/templates/config'

useTypeNet()
const isDark = useDark()
</script>

<template>
  <Header />
  <div class="introduce flex flex-space-around flex-align-around flex-align-center noto-serif-sc">
    <div class="introduce-l" data-aos="slide-right">
      <div class="typenet-text"></div>
      <button
        @click="$router.push('/template')"
        :class="['start btn pointer', { 'dark-start': isDark }]"
      >
        马上开始 <i class="iconfont icon-goto"></i>
      </button>
    </div>
    <div class="introduce-r">
      <Presentation />
    </div>
  </div>
</template>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  width: 100%;
}
.introduce {
  color: var(--font-color);
  height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;

  background: linear-gradient(
    45deg,
    var(--background),
    var(--background),
    var(--linear-background) 100%,
    var(--background)
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

@media screen and (max-width: 800px) {
  .introduce {
    .introduce-r {
      display: none;
    }
  }
}
</style>
