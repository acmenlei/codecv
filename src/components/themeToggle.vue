<script setup lang="ts">
import { useThemeConfig } from '@/common/hooks/global'
const { isDark, toggleTheme } = useThemeConfig()
</script>

<template>
  <el-tooltip content="主题切换" placement="bottom-end">
    <i
      :class="[
        'iconfont',
        isDark ? 'icon-moon' : 'icon-shine',
        'mr-20',
        'font-25',
        'pointer',
        'hover'
      ]"
      @click="toggleTheme()"
    ></i>
  </el-tooltip>
</template>
