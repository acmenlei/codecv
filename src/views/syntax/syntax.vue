<script setup lang='ts'>
import { markdownToHTML } from 'markdown-transform-html';
import { onMounted, ref } from 'vue';
import './sources/index.css';
import resumeHelper from './sources/help'

const helper = ref();

onMounted(() => {
  helper.value.innerHTML = markdownToHTML(resumeHelper, { highlight: true, lineNumber: true })
})
// onActivated(() => {
//   console.log("我被缓存了")
// })
</script>

<template>
  <div class="syntax-helper" ref="helper"></div>
</template>ƒ