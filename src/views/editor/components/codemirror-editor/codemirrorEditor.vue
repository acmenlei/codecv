<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { markdownLanguage } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import ContentModeToolbar from '@/views/editor/components/toolbar/contentModeToolbar.vue'
import MarkdownModeToolbar from '@/views/editor/components/toolbar/markdownModeToobar.vue'
// import { cssLanguage } from '@codemirror/lang-css'
import { useResumeType, useAvatar } from '../../hook'
import {
  initEditorState,
  useToggleEditorMode,
  useMoveLayout,
  injectWriableModeAvatarEvent,
  resetCodeMirrorDefaultStyle
} from './hook'
import { useThemeConfig } from '@/common/global'
import './writable.scss'

const { resumeType } = useResumeType()
const { left, down } = useMoveLayout()
const { DOMTree, ObserverContent } = useToggleEditorMode(resumeType.value)
const { setAvatar } = useAvatar(resumeType.value)
const { isDark } = useThemeConfig()
const { writable, editorStore } = initEditorState(resumeType.value)

injectWriableModeAvatarEvent(writable, setAvatar)
resetCodeMirrorDefaultStyle(writable)
</script>

<template>
  <div class="markdown-edit">
    <content-mode-toolbar
      v-if="writable"
      @toggle-editor-mode="editorStore.setWritableMode"
      @content-change="ObserverContent"
    />
    <markdown-mode-toolbar v-if="!writable" @toggle-editor-mode="editorStore.setWritableMode" />
    <codemirror
      v-if="!writable"
      v-model="editorStore.MDContent"
      :style="{
        height: 'calc(100vh - 40px)',
        borderLeft: isDark ? 'none' : '1px solid #ddd',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        minWidth: '400px',
        width: `${left}px`,
        background: '#fff'
      }"
      :autofocus="true"
      :indent-with-tab="true"
      :extensions="isDark ? [markdownLanguage, oneDark] : [markdownLanguage]"
      @change="editorStore.setMDContent"
    />
    <!-- <codemirror
      v-model="cssText"
      autofocus
      :style="{ minHeight: '300px', maxHeight: '500px' }"
      :indent-with-tab="true"
      :extensions="isDark ? [cssLanguage, oneDark] : [cssLanguage]"
      placeholder="格式如 .jufe h2 { color: red; }"
    /> -->
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
</template>

<style lang="scss" scoped>
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
    min-width: 600px;
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
</style>
