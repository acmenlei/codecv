<script setup lang="ts">
import Tabbar from '../tabbar/tabbar.vue'
import { useRenderHTML } from '../../hook'
import { step } from '../tabbar/hook'
import { useDark } from '@vueuse/core'

const props = defineProps<{ content: string; resumeType: string }>()
defineEmits(['upload-avatar', 'html-convert', 'open-write'])
// hook...
const { renderDOM } = useRenderHTML(props)
const isDark = useDark()
// constants
</script>

<template>
  <div class="outer" :style="{ background: isDark ? '#282c34' : 'var(--bg-theme)' }">
    <Tabbar
      @open-write="$emit('open-write', renderDOM)"
      @html-convert="cnt => $emit('html-convert', cnt)"
      @upload-avatar="path => $emit('upload-avatar', path)"
      :resumeProps="props"
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
}

.jufe {
  position: absolute;
  left: -9990px;
  top: -9990px;
}
</style>
