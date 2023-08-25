<script setup lang="ts">
import {
  useToolBarConfig,
  useHeading,
  insertIcon,
  selectIcon,
  linkFlag,
  insertLink,
  MulFlag,
  tableFlag,
  InsertTable,
  insertMulticolumn
} from './hook'
import { toolbarConfig, headings } from './constants'
import RenderIcons from '@/components/renderIcons.vue'
import ToastModal from '@/components/toast-modal/toastModal.vue'
import LinkInput from './components/linkInput/linkInput.vue'
import ColumnInput from './components/columnInput.vue'
import TableInput from './components/tableInput.vue'

const emit = defineEmits(['content-change', 'toggle-editor-mode'])

const { setHeading, level } = useHeading(emit)
useToolBarConfig(emit)
</script>

<template>
  <div class="editor-toolbar content-mode-tool-bar">
    <button
      :key="idx"
      :data-command="toolBarItem.command"
      v-for="(toolBarItem, idx) in toolbarConfig"
    >
      <el-tooltip :content="toolBarItem.tip">
        <i :class="`iconfont icon-${toolBarItem.icon} font-20 mr-10 ml-10 pointer hover`"></i>
      </el-tooltip>
    </button>
    <select id="headingButton" v-model="level" @change="setHeading">
      <option :value="heading.value" v-for="(heading, idx) in headings" :key="idx">
        {{ heading.label }}
      </option>
    </select>
  </div>
  <toast-modal v-if="selectIcon" :flag="selectIcon" @close="selectIcon = !selectIcon">
    <render-icons @select-icon="(icon: string) => insertIcon(icon, emit)" />
  </toast-modal>
  <toast-modal v-if="linkFlag" :flag="linkFlag" @close="linkFlag = !linkFlag">
    <link-input @confirm="(l: string, t: string) => insertLink(l,t, emit)" />
  </toast-modal>
  <toast-modal v-if="MulFlag" :flag="MulFlag" @close="MulFlag = !MulFlag">
    <column-input @confirm="(c: string) => insertMulticolumn(c, emit)" />
  </toast-modal>
  <toast-modal v-if="tableFlag" :flag="tableFlag" @close="tableFlag = !tableFlag">
    <table-input @confirm="(c: string, r: string) => InsertTable(c, r, emit)" />
  </toast-modal>
</template>

<style lang="scss">
.editor-toolbar {
  width: 100%;
  height: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 0;
  background: var(--background);
  position: sticky;
  top: 0;
  z-index: 3;
  text-align: center;
  select {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: var(--writable-font-color);
    &:hover {
      opacity: 0.8;
    }
  }
  button {
    background: transparent;
    outline: none;
    border: 0;
    i {
      font-size: 16px;
      color: var(--font-color);
      color: var(--writable-font-color);
    }
  }
}
.content-mode-tool-bar {
  padding-left: 10px;
  text-align: left;
}
</style>
