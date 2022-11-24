<script setup lang='ts'>
import Tabbar from "../tabbar/tabbar.vue";
import { useRenderHTML } from "../../hook"
import { step } from "../tabbar/hook"

const props = defineProps<{ content: string, resumeType: string }>();
defineEmits(['upload-avatar'])
// hook...
const { renderDOM } = useRenderHTML(props);
// constants
</script>

<template>
  <div class="outer">
    <Tabbar :resumeProps="props" @upload-avatar="(path) => $emit('upload-avatar', path)" />
    <div ref="renderDOM" class="markdown-transform-html jufe"></div>
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