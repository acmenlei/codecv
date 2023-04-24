<script setup lang="ts">
import useScrollTop from './hooks/useScrollTop'
import { IMenuBarItem } from '../type'

const scrollTop = useScrollTop()

defineProps<{ MenuItem: IMenuBarItem }>()
</script>

<template>
  <div class="o_menu-bar_title" :level="MenuItem.level">
    <span :class="{ o_active: scrollTop >= MenuItem.offset && scrollTop < MenuItem.offsetMax }">
      {{ MenuItem.title }}
    </span>
  </div>
</template>

<style scoped>
.o_menu-bar_title {
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  position: relative;
  color: var(--font-color);
  margin-top: 12px;
}

.o_menu-bar_title span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.o_menu-bar_title span:hover {
  background: var(--body-background);
}

.o_menu-bar_title[level='1'] {
  width: 100%;
}

.o_menu-bar_title[level='2'] {
  width: 90%;
}

.o_menu-bar_title[level='3'] {
  width: 80%;
}

.o_menu-bar_title[level='4'] {
  width: 70%;
}

.o_menu-bar_title[level='5'] {
  width: 60%;
}

.o_menu-bar_title[level='6'] {
  width: 50%;
}

.o_active {
  color: var(--theme);
}

.o_active::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 60%;
  background: var(--theme);
  border-radius: 2px;
  transform: translate(-50%, 25%);
}
</style>
