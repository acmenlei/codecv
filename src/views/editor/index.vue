<script setup lang="ts">
import { ref } from 'vue';
import Header from "./ch-cmp/header.vue"
import MarkdownRender from "@/components/markdonwRender.vue"
import resumeContent from "../../common/examples/resume1"
import { useRouter } from 'vue-router';
import { markdownToHTML } from 'markdown-transform-html';

const router = useRouter()

const content = ref(resumeContent);

const download = () => {
  localStorage.setItem('download', JSON.stringify(markdownToHTML(content.value)))
  router.push('/download')
}
</script>

<template>
  <Header @download="download" />
  <div id="root">
    <textarea class="markdown-edit" v-model="content"></textarea>
    <markdown-render class="markdown-render" :content="content" />
  </div>
</template>

<style lang="scss" scoped>
#root {
  display: flex;

  .markdown-edit {
    flex: 1;
    max-width: 800px;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: auto;
    border: none;
    border-right: 1px solid #999;
    outline: none;
    resize: none;
    padding: 10px;
    font-size: 16px;
  }

  .markdown-render {
    flex: 1;
    padding: 20px;
  }
}
</style>
