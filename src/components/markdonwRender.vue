<script setup lang='ts'>
import { markdownToHTML } from "markdown-transform-html"
import { onActivated, ref, watch } from "vue";
import { useRouter } from "vue-router";

import "../common/styles/index.css"

const props = defineProps<{ content: string }>();
const renderDOM = ref<HTMLElement>(document.body);
const router = useRouter();

onActivated(() => {
  renderDOM.value.innerHTML = markdownToHTML(props.content);
})

watch(() => props.content, (v) => {
  renderDOM.value.innerHTML = markdownToHTML(props.content);
})

const exportor = async () => {
  localStorage.setItem('download', JSON.stringify(renderDOM.value.innerHTML))
  router.push('/download')
}
</script>

<template>
  <div ref="renderDOM" class="markdown-transform-html"></div>
  <button @click="exportor" class="download">导出PDF</button>

</template>

<style lang="scss" scoped>
.markdown-transform-html {
  height: 100vh;
  overflow: auto;
  border: 1px solid #eee;
  padding: 10px 20px;
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