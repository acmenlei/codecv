<script setup lang='ts'>
import { VueMarkdownMenuBar } from "vue-markdown-menu-bar"
import { onMounted, ref } from 'vue';
import '@/assets/highlight.css'
import resumeHelper from './sources/help'

const helper = ref();

onMounted(() => {
  helper.value.innerHTML = resumeHelper;
})
</script>

<template>
  <div id="syntax" class="flex" data-aos="fade-right">
    <el-card shadow="never" style="border: none; overflow: auto;">
      <div class="syntax-helper" ref="helper"></div>
    </el-card>
    <VueMarkdownMenuBar class="slider" body=".syntax-helper" width="300px" />
  </div>
</template>

<style lang="scss" scoped>
#syntax {
  max-width: 1200px;
  margin: 20px auto;

  .slider {
    position: sticky;
    top: 65px;
    margin-left: 20px;
  }
  .syntax-helper {
    padding: 10px;
    max-width: 800px;
  }
}
</style>