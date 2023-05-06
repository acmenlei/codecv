<script setup lang="ts">
import Header from './components/header/header.vue'
import MarkdownRender from '@/views/editor/components/preview/render.vue'
import {
  useMarkdownContent,
  useResumeType,
  useDownLoad,
  useImportMD,
  useMoveLayout,
  useAvatar,
  useWrite,
  injectWriableModeAvatarEvent
} from './hook'
import { Codemirror } from 'vue-codemirror'
import { markdownLanguage } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import { useThemeConfig } from '@/common/hooks/global'
import Toolbar from './components/toolbar/toolbar.vue'
import './style/writable.scss'

const { resumeType } = useResumeType()
const { content, setContent } = useMarkdownContent(resumeType)
const { downloadDynamic, downloadNative, downloadMD } = useDownLoad(resumeType, content)
const { importMD } = useImportMD(setContent)
const { setAvatar } = useAvatar(content, setContent)
const { left, down } = useMoveLayout()
const { startWrite, writable, DOMTree, ObserverContent } = useWrite(setContent)
const { isDark } = useThemeConfig()
injectWriableModeAvatarEvent(writable, setAvatar)
</script>

<template>
  <Header
    @download-dynamic="downloadDynamic"
    @download-native="downloadNative"
    @download-md="downloadMD"
    @import-md="importMD"
  />
  <div id="root">
    <div class="markdown-edit">
      <Toolbar v-if="writable" @content-change="ObserverContent" />
      <codemirror
        v-if="!writable"
        v-model="content"
        :style="{ height: '100vh', width: `${left}px`, background: '#fff' }"
        :autofocus="true"
        :indent-with-tab="true"
        :extensions="isDark ? [markdownLanguage, oneDark] : [markdownLanguage]"
        @change="setContent"
      />
      <div
        ref="DOMTree"
        @input="ObserverContent"
        class="writable-edit-mode"
        :contenteditable="writable"
        :style="{ height: '100vh', width: `${left}px`, overflowY: 'scroll' }"
        v-if="writable"
      ></div>
      <div class="move absolute" @mousedown="down"></div>
    </div>
    <markdown-render
      class="markdown-render"
      :resumeType="resumeType"
      :content="content"
      @open-write="startWrite"
      @upload-avatar="setAvatar"
      @html-convert="setContent"
    />
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
    &::-webkit-scrollbar {
      display: none;
    }

    .writable-edit-mode {
      padding: 20px;
      margin: 0 auto;
      min-width: 550px;
      &:focus {
        outline-color: var(--body-background);
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .move {
      width: 12px;
      height: 100%;
      top: 0;
      z-index: 2;
      background: #ccc;
      cursor: col-resize;
    }
  }
  .markdown-render {
    flex: 1;
  }
}
</style>
