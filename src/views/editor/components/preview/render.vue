<script setup lang="ts">
import Tabbar from '../tabbar/tabbar.vue'
import { useRenderHTML, useResumeType } from '../../hook'
import { step } from '../tabbar/hook'
import { useThemeConfig } from '@/common/global'

defineEmits(['upload-avatar', 'html-convert'])

const { resumeType } = useResumeType()
const { renderDOM, editorStore } = useRenderHTML(resumeType)
const { isDark } = useThemeConfig()
</script>

<template>
  <div class="outer" :style="{ background: isDark ? '#282c34' : 'var(--bg-theme)' }">
    <Tabbar
      @toggle-editor-mode="editorStore.setWritableMode(renderDOM)"
      @html-convert="cnt => $emit('html-convert', cnt)"
      @upload-avatar="path => $emit('upload-avatar', path)"
    />
    <div ref="renderDOM" class="markdown-transform-html jufe reference-dom"></div>
    <!-- 分页渲染区域 -->
    <div class="re-render" :style="{ transform: `scale(${step / 100})` }"></div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  height: 100vh;
  overflow: auto;
  background: var(--bg-theme);

  .re-render {
    transition: transform 0.3s;
  }
}

.jufe {
  position: absolute;
  left: -9990px;
  top: -9990px;
}
</style>
