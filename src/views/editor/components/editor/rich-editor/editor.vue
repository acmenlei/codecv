<script setup lang="ts">
import { useToggleEditorMode } from './hook'
import { checkMouseSelect } from '../toolbar/hook'
import { useResumeType } from '../../../hook'
import RichToolbar from '../toolbar/richTool.vue'
import './writable.scss'

defineProps<{ left: number }>()

const { resumeType } = useResumeType()
const { DOMTree, ObserverContent, editorStore } = useToggleEditorMode(resumeType.value)
</script>

<template>
  <rich-toolbar
    @toggle-editor-mode="editorStore.setWritableMode"
    @content-change="ObserverContent"
  />
  <div
    ref="DOMTree"
    @click="checkMouseSelect"
    @input="ObserverContent"
    class="writable-edit-mode"
    contenteditable
    spellcheck="false"
    :style="{ height: 'calc(100vh - 40px)', width: `${left}px`, overflowY: 'scroll' }"
  ></div>
</template>

<style lang="scss" scoped>
.writable-edit-mode {
  padding: 20px;
  padding-top: 0;
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
</style>
