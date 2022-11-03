<script setup lang="ts">
import Header from "./ch-cmp/header.vue"
import MarkdownRender from "@/views/editor/ch-cmp/markdonwRender.vue"
import { useMarkdownContent, useResumeType, useDownLoad } from "./hook"

const { resumeType } = useResumeType()
const { content, setContent } = useMarkdownContent(resumeType.value)
const { download } = useDownLoad(resumeType.value, content.value);

</script>

<template>
  <Header @download="download" />
  <div id="root">
    <textarea class="markdown-edit" @input="setContent" v-model="content"></textarea>
    <markdown-render class="markdown-render" :resumeType="resumeType" :content="content" />
  </div>
</template>

<style lang="scss" scoped>
#root {
  display: flex;
  .markdown-edit {
    flex: 1;
    max-width: 800px;
    min-width: 400px;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: auto;
    border: none;
    border-right: 1px solid #999;
    outline: none;
    resize: none;
    padding: 10px;
    font-size: 15px;
  }
  .markdown-render {
    flex: 1;
    padding: 20px;
  }
}
</style>
