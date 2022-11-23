<script setup lang='ts'>
import { markdownToHTML } from 'markdown-transform-html';
import { VueMarkdownMenuBar } from "vue-markdown-menu-bar"
import { onMounted, ref } from 'vue';
import './sources/index.css';
import "vue-markdown-menu-bar/styles/lightgreen.css";
import resumeHelper from './sources/help'

const helper = ref();

onMounted(() => {
  helper.value.innerHTML = markdownToHTML(resumeHelper, { highlight: true, lineNumber: true })
})
</script>

<template>
  <div id="syntax" class="flex" data-aos="fade-right">
    <el-card shadow="none">
      <div class="syntax-helper" ref="helper"></div>
    </el-card>
    <VueMarkdownMenuBar class="slider" body=".syntax-helper" width="200px" />
  </div>
</template>

<style lang="scss" scoped>
#syntax {
  margin: 20px;
  justify-content: center;

  .slider {
    position: sticky;
    top: 0;
    margin-left: 20px;
  }
}
</style>