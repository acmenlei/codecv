<script setup lang='ts'>
import { ref } from "vue";
import { useRenderHTML, useCustomCSS, useAutoOnePage, useCustomColor } from "../hook"
import renderDialog from "@/components/renderDialog.vue";

const props = defineProps<{ content: string, resumeType: string }>();
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
// hook...
const { renderDOM } = useRenderHTML(props);
const { cssFlag, cssText, toggleDialog, setStyle, removeStyle } = useCustomCSS(props.resumeType)
const { autoOnePage, setAutoOnePage } = useAutoOnePage(props.resumeType)
const { color, setColor } = useCustomColor(props.resumeType);
</script>

<template>
  <div class="outer">
    <div class="operator">
      <el-slider size="small" class="slider" :marks="marks" v-model="step" :step="10" show-stops />
      <div class="operator-level2">
        <button class="btn custom_css" @click="toggleDialog">DIY简历</button>
        <el-color-picker @change="setColor" size="small" v-model="color" />
        <el-tooltip effect="dark" content="自动一页" placement="bottom">
          <el-switch @change="setAutoOnePage" v-model="autoOnePage" />
        </el-tooltip>
      </div>
    </div>
    <div ref="renderDOM" :style="{ transform: `scale(${step / 100})` }" class="markdown-transform-html jufe"></div>
    <!-- 弹出框 -->
    <renderDialog title="请把你编写的CSS样式粘贴此处～" :flag="cssFlag" @edit-css="setStyle" @reset-css="removeStyle">
      <el-input v-model="cssText" :rows="10" type="textarea" placeholder="格式如：.jufe h2 { color: red }" />
    </renderDialog>
  </div>

</template>

<style lang="scss" scoped>
.outer {
  width: 100%;
  height: 100vh;
  min-width: 794px;
  overflow: auto;
  background: #444;

  .operator {
    width: 794px;
    margin: 0 auto;
    position: sticky;
    top: 0;
    transform: translateY(-20px);
    z-index: 9;
    background: #444;

    .slider {
      width: 100%;
    }

    .operator-level2 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 5px;
    }

    .custom_css {
      cursor: pointer;
      margin: 20px 0 0 0;
      padding: 3px 10px;
      color: white;
      background: var(--theme);
    }
  }
}

.markdown-transform-html {
  border: 1px solid #eee;
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