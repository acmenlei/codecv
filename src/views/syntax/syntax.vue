<script setup lang='ts'>
import { markdownToHTML } from 'markdown-transform-html';
import { onMounted, ref } from 'vue';
import './sources/index.css';
import resumeHelper from './sources/help'

const helper = ref();

onMounted(() => {
  helper.value.innerHTML = markdownToHTML(resumeHelper, { highlight: true, lineNumber: true })
})
</script>

<template>
  <div class="syntax-helper" ref="helper" data-aos="fade-right"></div>
</template>ƒ