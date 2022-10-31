<script setup lang='ts'>
import { markdownToHTML } from "markdown-transform-html"
import { onActivated, ref, watch } from "vue";
import { importCSS } from "@/common/utils"
const props = defineProps<{ content: string, resumeType: string }>();
const renderDOM = ref<HTMLElement>(document.body);

onActivated(() => {
  importCSS(props.resumeType)
  renderDOM.value.innerHTML = markdownToHTML(props.content);
})

watch(() => props.content, (v) => {
  renderDOM.value.innerHTML = markdownToHTML(v);
})

// 刷新页面（这里是一个比较有问题的点）
watch(() => props.resumeType, (v) => {
  location.reload()
})

</script>

<template>
  <div class="outer">
    <div ref="renderDOM" class="markdown-transform-html"></div>
  </div>

</template>

<style lang="scss" scoped>
.outer {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #444;
}

.markdown-transform-html {
  border: 1px solid #eee;
  padding: 10px 20px;
  background: white;
}

button.download {
  position: fixed;
  right: 50px;
  top: 5px;
  margin-left: 10px;
  height: 40px;
  background: rgb(177, 160, 149);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 8px;
  outline: none;
  border: none;
  white-space: nowrap;

  &:hover {
    opacity: .8;
  }
}
</style>