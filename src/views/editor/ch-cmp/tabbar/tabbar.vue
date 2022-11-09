<script setup lang='ts'>
import renderDialog from "@/components/renderDialog.vue";
import { Codemirror } from "vue-codemirror"
import { cssLanguage } from "@codemirror/lang-css"
import { useAutoOnePage, useCustomColor, useCustomCSS, useCustomFont } from "../../hook"
import { marks } from "./constant"
import { step, setStep } from "./hook";

const props = defineProps<{ resumeProps: { content: string; resumeType: string } }>();
const { autoOnePage, setAutoOnePage } = useAutoOnePage(props.resumeProps.resumeType);
const { cssDialog, cssText, toggleDialog, setStyle, removeStyle } = useCustomCSS(props.resumeProps.resumeType);
const { color, setColor } = useCustomColor(props.resumeProps.resumeType);
const { fontOptions, font, setFont } = useCustomFont(props.resumeProps.resumeType);
const extentions = [cssLanguage];

</script>

<template>
  <div class="operator">
    <el-slider size="small" class="slider" :marks="marks" v-model="step" @change="setStep" :step="10" show-stops />
    <div class="operator-level2">
      <!-- <label for="upload-avatar" class="btn upload_avatar operator-item">上传照片</label>
      <input type="file" id="upload-avatar" accept=".png,.jpg,.jpeg" @change="uploadAvatar"/> -->
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
  <!-- 弹出框 -->
  <renderDialog confirm-text="设置样式" reset-text="重置样式" title="请把你编写的CSS样式粘贴此处～" :flag="cssDialog" @confirm="setStyle"
    @cancel="removeStyle">
    <codemirror v-model="cssText" :autofocus="true" :style="{ height: '500px' }" :indent-with-tab="true"
      :extensions="extentions" placeholder="格式如.jufe h2 { color: red; }" />
  </renderDialog>
</template>

<style lang='scss' scoped>
.operator {
  width: 210mm;
  margin: 0 auto;
  position: sticky;
  top: 0;
  transform: translateY(-20px);
  z-index: 1;
  background: var(--bg-theme);

  .slider {
    width: 100%;
    user-select: none;
  }

  .operator-level2 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5px;

    .operator-item {
      margin: 20px 10px 0 10px;
    }

    #upload-avatar {
      width: 0;
      height: 0;
    }
  }

  .custom_css,
  .upload_avatar {
    font-size: .7rem;
    cursor: pointer;
    padding: 3px 10px;
    color: white;
    background: var(--theme);
  }
}
</style>