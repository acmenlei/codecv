<script setup lang='ts'>
import { markdownToHTML } from "markdown-transform-html"
import { onActivated, ref, watch } from "vue";
import { importCSS } from "@/common/utils"

const props = defineProps<{ content: string, resumeType: string }>();
const renderDOM = ref<HTMLElement>(document.body);
const step = ref(100);

const marks = {
  0: '0%',
  10: '10%',
  20: '20%',
  30: '30%',
  40: '40%',
  50: '50%',
  60: '60%',
  70: '70%',
  80: '80%',
  90: '90%',
  100: '100%',
}

onActivated(() => {
  importCSS(props.resumeType)
  renderDOM.value.innerHTML = markdownToHTML(props.content);
})

watch(() => props.content, (v) => {
  renderDOM.value.innerHTML = markdownToHTML(v);
})
// 刷新页面（这里是一个比较有问题的点）
watch(() => props.resumeType, (v) => {
  location.reload()
})
</script>

<template>
  <div class="outer">
    <el-slider class="slider" :marks="marks" v-model="step" :step="10" show-stops />
    <div ref="renderDOM" :style="{ transform: `scale(${step / 100})` }" class="markdown-transform-html"></div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  width: 100%;
  height: 100vh;
  min-width: 794px;
  overflow: auto;
  background: #444;

  .slider {
    margin: 0 auto;
    width: 794px;
    transform: translateY(-20px);
    position: sticky;
    top: 0;
    color: white;
  }
}

.markdown-transform-html {
  border: 1px solid #eee;
  padding: 10px 20px;
  background: white;
}

button.download {
  position: fixed;
  right: 50px;
  top: 5px;
  margin-left: 10px;
  height: 40px;
  background: rgb(177, 160, 149);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 8px;
  outline: none;
  border: none;
  white-space: nowrap;

  &:hover {
    opacity: .8;
  }
}
</style>