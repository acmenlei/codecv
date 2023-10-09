<script setup lang="ts">
import nav from '@/common/nav/nav'
import { refreshGuide } from '../guide/guide'

defineEmits(['export-md', 'import-md', 'export-picture'])
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
                <span v-else-if="subNavItem.includes('导出MD')" @click="$emit('export-md')">{{
                  subNavItem
                }}</span>
                <span v-else @click="$emit('export-picture')">{{ subNavItem }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <!-- 不是级联菜单走这里 -->
      <template v-else>
        <router-link :to="navItem.path || ''">{{ navItem.name }}</router-link>
      </template>
    </li>
    <li class="use-guide" @click="refreshGuide()">开启引导</li>
  </ul>
</template>

<style lang="scss" scoped>
.el-dropdown {
  line-height: inherit;

  .el-dropdown-link {
    color: orange;
    font-weight: 500;
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
.nav {
  font-weight: 500;
  margin-right: 20px;
  li {
    margin-right: 10px;
  }
}
</style>
