<script setup lang="ts">
import Header from "./components/header/header.vue"
import MarkdownRender from "@/views/editor/components/preview/render.vue"
import { useMarkdownContent, useResumeType, useDownLoad, useImportMD, useMoveLayout, useAvatar } from "./hook"
import { Codemirror } from 'vue-codemirror'
import { markdownLanguage } from "@codemirror/lang-markdown";

const { resumeType } = useResumeType()
const { content, setContent } = useMarkdownContent(resumeType)
const { downloadDynamic, downloadNative, downloadMD } = useDownLoad(resumeType, content);
const { importMD } = useImportMD(setContent);
const { setAvatar } = useAvatar(content, setContent);
const { left, down } = useMoveLayout();
const extentions = [markdownLanguage];

</script>

<template>
  <Header 
      @download-dynamic="downloadDynamic" 
      @download-native="downloadNative" 
      @download-md="downloadMD"
      @import-md="importMD" />
  <div id="root">
    <div class="markdown-edit">
      <codemirror
          v-model="content"
          :style="{ height: '100vh', width: `${left}px`, background: '#fff'}" 
          :autofocus="true"
          :indent-with-tab="true" 
          :extensions="extentions" 
          @change="setContent" />
      <div class="move absolute" @mousedown="down"></div>
    </div>
    <markdown-render class="markdown-render" :resumeType="resumeType" :content="content" @upload-avatar="setAvatar" />
  </div>
</template>

<style lang="scss" scoped>
#root {
  display: flex;
  .markdown-edit {
    position: relative;
    height: 100vh;
    overflow: auto;
    border: none;
    outline: none;
    font-size: 15px;

    .move {
      width: 10px;
      height: 100%;
      background: #ccc;
      cursor: col-resize;
    }
  }

  .markdown-render {
    flex: 1;
    padding: 10px 20px;
  }
}
</style>
