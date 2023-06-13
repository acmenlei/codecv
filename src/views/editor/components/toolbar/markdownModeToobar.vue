<script setup lang="ts">
import RenderIcons from '@/components/renderIcons.vue'
import ColumnInput from './components/columnInput.vue'
import TableInput from './components/tableInput.vue'

import { markdownModeToolbarConfig } from './constants'
import { MulFlag } from './hook'
import { selectIcon } from './hook'
import {
  markdownModeToolbarCommandHandler,
  markdownModeInsertIcon,
  markdownModeInsertMultiColumnsLayout,
  markdownModeInsertTable
} from './hook'
import { tableFlag } from './hook'
</script>

<template>
  <div class="editor-toolbar markdown-mode-toolbar">
    <button
      @click="markdownModeToolbarCommandHandler(toolBarItem.command)"
      :key="idx"
      :data-command="toolBarItem.command"
      v-for="(toolBarItem, idx) in markdownModeToolbarConfig"
    >
      <el-tooltip :content="toolBarItem.tip">
        <i :class="`iconfont icon-${toolBarItem.icon} font-20 mr-10 ml-10 pointer hover`"></i>
      </el-tooltip>
    </button>
  </div>

  <toast-modal v-if="selectIcon" :flag="selectIcon" @close="selectIcon = !selectIcon">
    <render-icons @select-icon="(icon: string) => markdownModeInsertIcon(icon)" />
  </toast-modal>
  <toast-modal v-if="MulFlag" :flag="MulFlag" @close="MulFlag = !MulFlag">
    <column-input @confirm="(c: string) => markdownModeInsertMultiColumnsLayout(c)" />
  </toast-modal>
  <toast-modal v-if="tableFlag" :flag="tableFlag" @close="tableFlag = !tableFlag">
    <table-input @confirm="(c: string, r: string) => markdownModeInsertTable(c, r)" />
  </toast-modal>
</template>

<style lang="scss" scoped>
.markdown-mode-toolbar {
  position: relative;
}
</style>
