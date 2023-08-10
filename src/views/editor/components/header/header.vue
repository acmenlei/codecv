<script setup lang="ts">
import navMenu from './nav.vue'
import Reward from '@/components/reward.vue'
import ThemeToggle from '@/components/themeToggle.vue'
import { wOpen } from '@/utils'
import { useSwitch } from '@/common/global'
import { useFile } from './hook'
import Contact from '@/components/contact.vue'
import ExportTotal from '@/components/exportTotal.vue'

const emit = defineEmits([
  'download-dynamic',
  'download-native',
  'download-md',
  'import-md',
  'download-picture'
])

const { exportFile, importFile, fileName } = useFile(emit)
const { open, toggle } = useSwitch()
</script>

<template>
  <div id="header" class="noto-serif-sc">
    <el-tooltip content="返回上一页">
      <i class="iconfont icon-back font-20 hover" @click="$router.back()"></i>
    </el-tooltip>
    <label for="resume-name-input">简历名称：</label>
    <input id="resume-name-input" type="text" v-model="fileName" />
    <nav-menu
      @export-md="exportFile('md')"
      @import-md="importFile"
      @export-picture="exportFile('picture')"
    />
    <ExportTotal />
    <Reward />
    <button class="exporter server-export btn" @click="exportFile('dynamic')">导出PDF</button>
    <button class="exporter local-export btn" @click="exportFile('native')">备用导出</button>
    <div class="operator">
      <el-tooltip content="给项目贡献代码" placement="bottom-end">
        <i
          class="iconfont icon-github github font-25"
          @click="wOpen('https://github.com/acmenlei/markdown-resume-to-pdf')"
        ></i>
      </el-tooltip>
      <el-tooltip content="问题反馈" placement="bottom-end">
        <i class="iconfont icon-comment problem font-25" @click="toggle"></i>
      </el-tooltip>
      <theme-toggle />
    </div>
  </div>
  <Contact :open="open" @toggle="toggle" />
</template>

<style lang="scss" scoped>
#header {
  z-index: 9;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;
  color: var(--font-color);
  background: var(--background);
  font-weight: 600;

  #resume-name-input {
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 5px;
    background: var(--body-background);
    font-family: var(--font-noto-serif-sc);
  }

  .exporter {
    outline: none;
    border: none;
    padding: 8px 15px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    background: var(--theme);
    color: white;

    &:last-of-type {
      margin-right: 25px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .problem,
  .github,
  .icon-back {
    cursor: pointer;
    margin-right: 18px;
    font-weight: normal;
  }
}
</style>
