<script setup lang="ts">
import { useThemeConfig } from '@/common/global'
import { usePresentation } from '../hook'

const { isDark } = useThemeConfig()
const { presentationData, presentationIndex, styleConfig } = usePresentation()
</script>

<template>
  <div class="presentation">
    <el-tooltip
      v-for="(theme, idx) in presentationData"
      :key="theme.id"
      placement="top"
      :content="theme.name"
    >
      <img
        :class="{ light: !isDark }"
        :style="styleConfig[idx]"
        :src="theme.img"
        :alt="theme.name"
        @click="$router.push({ path: '/editor', query: { type: theme.type } })"
      />
    </el-tooltip>
  </div>

  <ul class="presentation-indicator" data-aos="zoom-in">
    <li
      v-for="idx in styleConfig.length"
      :class="{ active: idx - 1 === presentationIndex, dark: isDark }"
      :key="idx"
      :style="{ left: `${100 * idx}px` }"
    ></li>
  </ul>
</template>

<style lang="scss" scoped>
.presentation {
  width: 550px;
  height: 350px;

  img {
    width: 250px;
    height: 350px;
    position: absolute;
    user-select: none;
    -webkit-user-drag: none;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.8s;
    box-shadow: 0 0 80px #456;
    &.light {
      box-shadow: 0 0 30px #bbb;
    }
    &:nth-child(1) {
      animation: transform1 0.5s linear;
    }
    &:nth-child(2) {
      animation: transform2 0.5s linear;
    }
    &:nth-child(3) {
      animation: transform3 0.5s linear;
    }
    &:nth-child(4) {
      animation: transform4 0.5s linear;
    }
    &:nth-child(5) {
      animation: transform5 0.5s linear;
    }

    @keyframes transform1 {
      from {
        transform: translateX(0) scale(0.7);
      }
      to {
        transform: translateX(-30px) scale(0.7);
      }
    }
    @keyframes transform2 {
      from {
        transform: translateX(-30px) scale(0.8);
      }
      to {
        transform: translateX(80px) scale(0.8);
      }
    }
    @keyframes transform3 {
      from {
        transform: translateX(80px) scale(0.8);
      }
      to {
        transform: translateX(190px) scale(1);
      }
    }
    @keyframes transform4 {
      from {
        transform: translateX(190px) scale(0.8);
      }
      to {
        transform: translateX(300px) scale(0.8);
      }
    }
    @keyframes transform5 {
      from {
        transform: translateX(300px) scale(0.7);
      }
      to {
        transform: translateX(410px) scale(0.7);
      }
    }
  }
}
.presentation-indicator {
  list-style: none;
  position: relative;
  margin-top: 40px;
  li {
    position: absolute;
    top: 0;
    width: 70px;
    height: 2px;
    background: #ddd;
    border-radius: 5px;
    &.dark {
      background: #456;
    }
    &.active {
      background: #ff7449 !important;
      opacity: 0.6;
    }
  }
}
</style>
