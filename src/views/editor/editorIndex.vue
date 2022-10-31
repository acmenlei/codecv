<script setup lang="ts">
import { onActivated, ref } from 'vue';
import Header from "./ch-cmp/header.vue"
import MarkdownRender from "@/views/editor/ch-cmp/markdonwRender.vue"
import { useRoute, useRouter } from 'vue-router';
import { markdownToHTML } from 'markdown-transform-html';
import { getCurrentTypeContent } from '@/common/utils';

const route = useRoute();
const router = useRouter();
const content = ref('');
const resumeType = ref(String(route.query.type));

onActivated(() => {
  resumeType.value = route.query.type as string;
  content.value = getCurrentTypeContent(String(route.query.type));
})

const download = () => {
  localStorage.setItem('download', JSON.stringify(markdownToHTML(content.value)))
  router.push({ path: '/download', query: { type: resumeType.value } })
}
</script>

<template>
  <Header @download="download" />
  <div id="root">
    <textarea class="markdown-edit" v-model="content"></textarea>
    <markdown-render class="markdown-render" :resumeType="resumeType" :content="content" />
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
