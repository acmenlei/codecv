<script setup lang="ts">
import ToastModal from '@/components/toast-modal/toastModal.vue'
import Empty from '@/components/empty.vue'
import { Codemirror } from 'vue-codemirror'
import { cssLanguage } from '@codemirror/lang-css'
import { marks } from './constant'
import {
  step,
  setStep,
  useAvatar,
  usePrimaryBGColor,
  useCustomFont,
  useCustomCSS,
  usePrimaryColor,
  useAdjust,
  useFollowRoll,
  restResumeContent
} from './hook'
import { oneDark } from '@codemirror/theme-one-dark'
import { useThemeConfig } from '@/common/global'
import { useResumeType } from '../../hook'

const emits = defineEmits(['upload-avatar', 'html-convert'])

const { resumeType } = useResumeType()
const { cssDialog, cssText, toggleDialog, setStyle, removeStyle } = useCustomCSS(resumeType.value)
const { color, setColor } = usePrimaryColor(resumeType.value)
const { fontOptions, font, setFont } = useCustomFont(resumeType.value)
const { setAvatar } = useAvatar(emits)
const { primaryColor, setPrimaryColor } = usePrimaryBGColor(resumeType.value)
const { adjustMargin, visible, confirmAdjustment, properties } = useAdjust(resumeType.value)
const { followRoll, setFollowRoll } = useFollowRoll()
const { isDark } = useThemeConfig()
</script>

<template>
  <div class="operator resume-tools">
    <el-slider
      size="small"
      class="slider"
      :marks="marks"
      v-model="step"
      @change="setStep"
      :step="10"
      show-stops
    />
    <div class="operator-level2">
      <el-tooltip content="调整元素上下边距" effect="light">
        <i class="iconfont icon-adjust operator-item" @click="adjustMargin"></i>
      </el-tooltip>
      <el-tooltip
        content="上传前请确保你想上传的位置在编辑器中存在 ![个人头像](...) 此占位符"
        effect="light"
      >
        <label for="upload-avatar" class="operator-item card">
          <i class="iconfont icon-zhengjian"></i>
        </label>
      </el-tooltip>
      <input type="file" id="upload-avatar" accept=".png,.jpg,.jpeg" @change="setAvatar" />
      <el-tooltip content="编写CSS" effect="light">
        <i class="operator-item iconfont icon-diy" @click="toggleDialog"></i
      ></el-tooltip>
      <div class="operator-item font-color-picker">
        <el-color-picker @change="setColor" size="small" v-model="color" />
      </div>
      <div class="operator-item main-color-picker">
        <el-color-picker @change="setPrimaryColor" size="small" v-model="primaryColor" />
      </div>
      <el-popconfirm
        width="240"
        confirm-button-text="是的"
        cancel-button-text="点错了"
        title="你想重置简历的所有内容吗？"
        @confirm="restResumeContent(resumeType)"
      >
        <template #reference>
          <i class="operator-item iconfont icon-refresh ml-20"></i>
        </template>
      </el-popconfirm>
      <el-tooltip content="跟随滚动" effect="light">
        <el-switch
          class="operator-item follow-roll"
          size="small"
          v-model="followRoll"
          @change="setFollowRoll"
        />
      </el-tooltip>
      <el-tooltip content="字体设置" effect="light">
        <el-select
          v-model="font"
          class="operator-item font-select"
          @change="setFont"
          placement="bottom"
          size="small"
        >
          <el-option
            v-for="item in fontOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-tooltip>
    </div>
    <br />
  </div>
  <!-- 弹出框 -->
  <ToastModal v-if="cssDialog" :flag="cssDialog" @close="cssDialog = false" width="400px">
    <h4 class="mb-10">编写CSS样式让它作用在模板上</h4>
    <codemirror
      v-model="cssText"
      autofocus
      :style="{ minHeight: '300px', maxHeight: '500px' }"
      :indent-with-tab="true"
      :extensions="isDark ? [cssLanguage, oneDark] : [cssLanguage]"
      placeholder="格式如 .jufe h2 { color: red; }"
    />
    <br />
    <button class="btn primary cursor hover" @click="setStyle">确认</button>
    <button class="btn primary cursor hover" @click="removeStyle">重置</button>
  </ToastModal>
  <!-- 调整边距 -->
  <ToastModal
    v-if="visible"
    :flag="visible"
    @close="confirmAdjustment"
    :width="properties.length ? '525px' : '310px'"
  >
    <div class="properties-container flex" v-if="properties.length">
      <div class="properties-header">
        <span>元素名称</span>
        <span>上边距 (px)</span>
        <span>下边距 (px)</span>
      </div>
      <div class="properties-item" v-for="(property, idx) in properties" :key="idx">
        <el-space>
          <span>{{ property.name }} ({{ property.className || property.tagName }})</span>
          <el-input-number size="small" v-model="property.marginTop" />
          <el-input-number size="small" v-model="property.marginBottom" />
        </el-space>
      </div>
    </div>
    <Empty v-else title="简历中还没有内容 可以先写点东西" />
    <br />
    <h5 style="color: var(--strong-color)">PS: 只显示简历模板中已经使用的</h5>
  </ToastModal>
</template>

<style lang="scss" scoped>
.operator {
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  transform: translateY(-20px);
  z-index: 1;
  background: var(--toolbar-bg);
  padding-top: 20px;

  /* 解决label默认边距的问题 */
  .card {
    height: 25px;
  }
  .slider {
    width: 190mm;
    user-select: none;
    margin: 0 auto;
  }
  .operator-level2 {
    display: flex;
    margin-top: 25px;
    justify-content: center;
    align-items: flex-end;

    .operator-item {
      margin-right: 14px;
    }
    .font-color-picker {
      margin-right: 22px;
    }
    .main-color-picker {
      margin-right: 0;
    }
    #upload-avatar {
      width: 0;
      height: 0;
    }

    i.iconfont {
      color: #f8f8f8;
      font-size: 24px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.properties-container {
  flex-wrap: wrap;
  flex-direction: column;
  overflow: scroll;
  .properties-header {
    padding-bottom: 30px;
    position: relative;
    span {
      font-weight: 600;
      position: absolute;
    }
    span:nth-child(2) {
      transform: translateX(210px);
    }
    span:nth-child(3) {
      transform: translateX(340px);
    }
  }
  .properties-item {
    margin-top: 10px;
    span {
      width: 200px;
      font-size: 14px;
    }
  }
}
</style>
