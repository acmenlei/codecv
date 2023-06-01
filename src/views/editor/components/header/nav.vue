<script setup lang="ts">
import nav from '@/common/nav/nav'
import ToastModal from '@/components/toast-modal/toastModal.vue'
import RenderIcons from '@/components/renderIcons.vue'

import { ref } from 'vue'

defineEmits(['export-md', 'import-md'])
const toggle = ref(false)
</script>

<template>
  <ul class="nav">
    <li v-for="(navItem, idx) in nav" :key="idx">
      <template v-if="navItem.children">
        <el-dropdown class="el-dropdown">
          <!-- 父菜单 -->
          <div class="el-dropdown-link">{{ navItem.name }}</div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(subNavItem, sidx) in navItem.children" :key="sidx">
                <!-- 子菜单 -->
                <label for="import_md" v-if="subNavItem.startsWith('导入')">
                  导入MD
                  <input
                    accept=".md"
                    id="import_md"
                    type="file"
                    @change="$emit('import-md', $event)"
                  />
                </label>
                <span v-else @click="$emit('export-md')">{{ subNavItem }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <!-- 不是级联菜单走这里 -->
      <template v-else>
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{
          navItem.name
        }}</router-link>
        <span v-else @click="toggle = !toggle">{{ navItem.name }}</span>
      </template>
    </li>
  </ul>
  <ToastModal v-if="toggle" :flag="toggle" @close="toggle = !toggle" width="450px">
    <RenderIcons />
  </ToastModal>
</template>

<style lang="scss" scoped>
.nav {
  li {
    font-family: 'Exo', monospace;
    a {
      color: inherit;
    }
  }
}
.el-dropdown {
  line-height: inherit;

  .el-dropdown-link {
    color: orange;
    font-weight: bold;
    outline: none;
  }
}

#import_md {
  width: 0;
  height: 0;
}

label[for='import_md'] {
  color: inherit;
  cursor: pointer;
}
</style>
