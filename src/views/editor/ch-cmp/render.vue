<script setup lang='ts'>
import { ref } from "vue";
import { useRenderHTML, useCustomCSS, useAutoOnePage, useCustomColor, useCustomFont } from "../hook"
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
const { fontOptions, font, setFont } = useCustomFont(props.resumeType);
</script>

<template>
  <div class="outer">
    <div class="operator">
      <el-slider size="small" class="slider" :marks="marks" v-model="step" :step="10" show-stops />
      <div class="operator-level2">
        <button class="btn custom_css operator-item" @click="toggleDialog">DIY简历</button>
        <el-color-picker class="operator-item" @change="setColor" size="small" v-model="color" />
        <el-tooltip effect="dark" content="自动一页" placement="bottom">
          <el-switch class="operator-item" size="small" @change="setAutoOnePage" v-model="autoOnePage" />
        </el-tooltip>
        <el-select v-model="font" class="operator-item" @change="setFont" placement="bottom" size="small">
          <el-option v-for="item in fontOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div ref="renderDOM" class="markdown-transform-html jufe"></div>
    <!-- 分页渲染区域 -->
    <div class="re-render" :style="{ transform: `scale(${step / 100})` }"></div>
    <!-- 弹出框 -->
    <renderDialog title="请把你编写的CSS样式粘贴此处～" :flag="cssFlag" @edit-css="setStyle" @reset-css="removeStyle">
      <el-input v-model="cssText" :rows="10" type="textarea" placeholder="格式如：.jufe h2 { color: red }" />
    </renderDialog>
  </div>

</template>

<style lang="scss" scoped>
.outer {
  height: 100vh;
  overflow: auto;
  background: #444;

  .operator {
    width: 210mm;
    margin: 0 auto;
    position: sticky;
    top: 0;
    transform: translateY(-20px);
    z-index: 1;
    background: #444;

    .slider {
      width: 100%;
    }

    .operator-level2 {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 5px;

      .operator-item {
        margin: 20px 10px 0 10px;
      }
    }

    .custom_css {
      font-size: .7rem;
      cursor: pointer;
      padding: 3px 10px;
      color: white;
      background: var(--theme);
    }
  }
}

.jufe {
  position: absolute;
  left: -9990px;
  top: -9990px;
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