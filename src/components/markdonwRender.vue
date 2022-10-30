<script setup lang='ts'>
import { markdownToHTML } from "markdown-transform-html"
import { onActivated, ref, watch } from "vue";
import "../common/styles/index.css"

const props = defineProps<{ content: string }>();
const renderDOM = ref<HTMLElement>(document.body);

onActivated(() => {
  renderDOM.value.innerHTML = markdownToHTML(props.content);
})

watch(() => props.content, (v) => {
  renderDOM.value.innerHTML = markdownToHTML(props.content);
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
  height: 100%;
  background: #444;
}
.markdown-transform-html {
  height: 100vh;
  overflow: auto;
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