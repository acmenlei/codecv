<script setup lang="ts">
import Header from "./ch-cmp/header/header.vue"
import MarkdownRender from "@/views/editor/ch-cmp/render.vue"
import { useMarkdownContent, useResumeType, useDownLoad, useImportMD } from "./hook"

const { resumeType } = useResumeType()
const { content, setContent, setContentCache } = useMarkdownContent(resumeType)
const { downloadDynamic, downloadNative, downloadMD } = useDownLoad(resumeType, content);
const { importMD } = useImportMD(setContent);
</script>

<template>
  <Header @download-dynamic="downloadDynamic" @download-native="downloadNative" @download-md="downloadMD" @import-md="importMD"/>
  <div id="root">
    <textarea class="markdown-edit" @input="setContentCache" v-model="content"></textarea>
    <markdown-render class="markdown-render" :resumeType="resumeType" :content="content" />
  </div>
</template>

<style lang="scss" scoped>
#root {
  display: flex;

  .markdown-edit {
    flex: 1;
    max-width: 650px;
    height: 100vh;
    overflow: auto;
    border: none;
    border-right: 1px solid #999;
    outline: none;
    resize: horizontal;
    padding: 10px;
    font-size: 15px;
  }

  .markdown-render {
    flex: 1;
    padding: 10px 40px;
  }
}
</style>
