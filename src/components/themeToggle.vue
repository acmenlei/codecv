<script setup lang="ts">
import { useThemeConfig } from '@/common/global'
const { isDark, toggleTheme } = useThemeConfig()
</script>

<template>
  <el-tooltip content="主题切换" placement="bottom-end">
    <i
      :style="{ color: isDark ? '#bfc510' : '#ff7449' }"
      :class="[
        'bold',
        'iconfont',
        isDark ? 'icon-moon' : 'icon-shine',
        'font-25',
        'pointer',
        'hover'
      ]"
      @click="toggleTheme()"
    ></i>
  </el-tooltip>
</template>
