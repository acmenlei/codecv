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
        :style="{
          height: '100vh',
          borderRadius: '10px',
          width: `${left}px`,
          background: '#fff'
        }"
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
        :style="{ height: 'calc(100vh - 40px)', width: `${left}px`, overflowY: 'scroll' }"
        v-if="writable"
      ></div>
      <div class="move absolute" @mousedown="down">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
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
    border: none;
    outline: none;
    font-size: 15px;
    margin: 0 0 10px 10px;
    border-radius: 10px;
    &::-webkit-scrollbar {
      display: none;
    }

    .writable-edit-mode {
      padding: 20px;
      min-width: 550px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin: 0 auto;
      &:focus {
        outline: none;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .move {
      width: 10px;
      height: 100%;
      top: 0;
      right: -10px;
      z-index: 2;
      border-radius: 10px;
      background: var(--body-background);
      cursor: col-resize;
      &:hover {
        background: var(--theme);
      }
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      span {
        font-weight: bold;
        opacity: 0.7;
        margin-top: -10px;
      }
    }
  }
  .markdown-render {
    flex: 1;
    margin: 0 10px;
    border-radius: 10px;
  }
}
</style>
