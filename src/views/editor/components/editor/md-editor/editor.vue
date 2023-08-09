<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { markdownLanguage } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import { useResumeType } from '../../../hook'
import useEditorStore from '@/store/modules/editor'

import { useThemeConfig } from '@/common/global'
import MarkdownToolbar from '../toolbar/mdTool.vue'
import './md-editor.scss'

defineProps<{ left: number }>()
const { isDark } = useThemeConfig()
const { resumeType } = useResumeType()
const editorStore = useEditorStore()
</script>

<template>
  <markdown-toolbar @toggle-editor-mode="editorStore.setWritableMode" />
  <codemirror
    v-model="editorStore.MDContent"
    :style="{
      height: 'calc(100vh - 40px)',
      borderLeft: isDark ? 'none' : '1px solid #ddd',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      minWidth: '550px',
      width: `${left}px`,
      background: '#fff'
    }"
    :autofocus="true"
    :indent-with-tab="true"
    :extensions="isDark ? [markdownLanguage, oneDark] : [markdownLanguage]"
    @change="(nv: string) => editorStore.setMDContent(nv, resumeType)"
  />
</template>

<style lang="scss" scoped></style>
