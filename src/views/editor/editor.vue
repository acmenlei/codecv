<script setup lang="ts">
import Header from './components/header/header.vue'
import MarkdownRender from '@/views/editor/components/preview/render.vue'
import MarkdownEditor from '@/views/editor/components/codemirror-editor/codemirrorEditor.vue'
import { useResumeType, useDownLoad, useImportMD, useAvatar } from './hook'

const { resumeType } = useResumeType()
const { downloadDynamic, downloadNative, downloadMD } = useDownLoad(resumeType)
const { importMD } = useImportMD(resumeType.value)
const { setAvatar } = useAvatar(resumeType.value)
</script>

<template>
  <Header
    @download-dynamic="downloadDynamic"
    @download-native="downloadNative"
    @download-md="downloadMD"
    @import-md="importMD"
  />
  <div id="root">
    <markdown-editor />
    <markdown-render class="markdown-render" @upload-avatar="setAvatar" />
  </div>
</template>

<style lang="scss" scoped>
#root {
  display: flex;
  .markdown-render {
    flex: 1;
    margin: 0 10px;
    border-radius: 10px;
  }
}
</style>
