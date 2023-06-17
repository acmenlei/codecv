<script setup lang="ts">
import { IMenuBarItem } from '../type'
import { scrollTo } from '../../../utils'
import MenuBarItem from '../menu-bar-item/menuBarItem.vue'
import useMenuBarTitleConfigura from './hooks/useMenuBarTitle'
import { StyleValue } from 'vue'
import Empty from '@/components/empty.vue'

const props = defineProps<{
  body: string
  menuTitle?: string
  style: StyleValue
}>()
const emits = defineEmits(['MenuBarClick'])

const oMenuBarTitleData = useMenuBarTitleConfigura(props.body)

function handlerClick(MenuItem: IMenuBarItem) {
  scrollTo(MenuItem.offset)
  emits('MenuBarClick', MenuItem)
}
</script>

<template>
  <div class="o_navigator_menu" :style="style">
    <h3 class="o_menu_title">{{ menuTitle || '目录' }}</h3>
    <div class="o_menu_bar_container" v-if="oMenuBarTitleData.length">
      <MenuBarItem
        :key="idx"
        v-for="(MenuItem, idx) in oMenuBarTitleData"
        :MenuItem="MenuItem"
        @click="handlerClick(MenuItem)"
      />
    </div>
    <Empty v-else title="暂无标题" />
  </div>
</template>

<style scoped>
.o_navigator_menu {
  color: var(--font-color);
  background: var(--background);
  padding: 10px 10px;
  max-height: 100vh;
  overflow: auto;
}

.o_navigator_menu .o_menu_title {
  margin: 0;
  margin: 0 10px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 0.5px solid #eee;
}

.o_menu_bar_container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
