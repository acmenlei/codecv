<script setup lang="ts">
import { setExportCount, setTemplateCondition } from '@/api/modules/resume'
import { importCSS } from '@/utils'
import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useEditorStore from '@/store/modules/editor'

const route = useRoute()
const router = useRouter()
const editorStore = useEditorStore()
onMounted(() => {
  if (!route.query.type) return
  importCSS(String(route.query.type))
  ;(document.querySelector('.markdown-transform-html') as HTMLElement).innerHTML =
    editorStore.nativeContent
  editorStore.resetNativeContent() // 重置
  setTimeout(() => {
    setExportCount()
    setTemplateCondition({ name: String(route.query.type) })
    window.print()
    router.back()
  }, 100)
})

onUnmounted(() => {
  localStorage.removeItem('download')
})
</script>

<template>
  <div class="markdown-transform-html jufe"></div>
</template>

<style lang="scss" scoped>
.jufe {
  width: 210mm;
  position: relative;
  min-height: 295mm;
  z-index: 1;
  &::after {
    content: '';
    background: inherit;
    z-index: -2;
    position: fixed;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
  }
}
</style>
