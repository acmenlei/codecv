<script setup lang="ts">
import { ref } from 'vue';
import MarkdownRender from "@/components/markdonwRender.vue"
import resumeContent from "../../common/examples/resume1"

const content = ref(resumeContent);

</script>

<template>
  <div id="root">
    <textarea class="markdown-edit" v-model="content"></textarea>
    <markdown-render class="markdown-render" :content="content" />
  </div>
</template>

<style lang="scss" scoped>
#root {
  display: flex;
  .markdown-edit {
    flex: 1;
    max-width: 800px;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: auto;
    border: none;
    border-right: 1px solid #999;
    outline: none;
    resize: none;
    padding: 10px;
    font-size: 16px;
  }
}
</style>
