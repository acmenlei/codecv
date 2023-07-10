<script setup lang="ts">
import navMenu from './nav.vue'
import Reward from '@/components/reward.vue'
import ThemeToggle from '@/components/themeToggle.vue'
import { wOpen } from '@/utils'
import { useSwitch } from '@/common/global'
import { useMDFile } from './hook'
import Contact from '@/components/contact.vue'

const emit = defineEmits(['download-dynamic', 'download-native', 'download-md', 'import-md'])

const { exportFile, importFile, fileName } = useMDFile(emit)
const { open, toggle } = useSwitch()
</script>

<template>
  <div id="header">
    <el-tooltip content="返回上一页">
      <i class="iconfont icon-back mr-20 font-20 pointer hover" @click="$router.back()"></i>
    </el-tooltip>
    <label for="resume-name-input">简历名称：</label>
    <input id="resume-name-input" type="text" v-model="fileName" />
    <nav-menu @export-md="exportFile('md')" @import-md="importFile" />
    <Reward />
    <button class="exportor" @click="exportFile('dynamic')">动态导出PDF</button>
    <button class="exportor" @click="exportFile('native')">打印机导出PDF</button>
    <div class="operator">
      <el-tooltip content="给项目贡献代码" placement="bottom-end">
        <i
          class="iconfont icon-github github font-25"
          @click="wOpen('https://github.com/acmenlei/markdown-resume-to-pdf')"
        ></i>
      </el-tooltip>
      <el-tooltip content="问题反馈" placement="bottom-end">
        <i class="iconfont icon-problem problem font-25" @click="toggle"></i>
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

  #resume-name-input {
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 16px;
    background: var(--body-background);

    &:focus {
      border-bottom: 1.5px solid var(--theme);
    }
  }

  .exportor {
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
  .github {
    cursor: pointer;
    margin-right: 18px;
  }
}
</style>
