<script setup lang="ts">
import ToastModal from '@/components/toast-modal/toastModal.vue'
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
  useAutoOnePage,
  useAdjust,
  useFollowRoll,
  restResumeContent
} from './hook'
import { oneDark } from '@codemirror/theme-one-dark'
import { useThemeConfig } from '@/common/global'
import { computed } from 'vue'

const emits = defineEmits(['upload-avatar', 'toggle-editor-mode', 'html-convert'])
const props = defineProps<{ resumeProps: { content: string; resumeType: string } }>()
const resumeType = computed(() => props.resumeProps.resumeType)

const { autoOnePage, setAutoOnePage } = useAutoOnePage(resumeType.value)
const { cssDialog, cssText, toggleDialog, setStyle, removeStyle } = useCustomCSS(resumeType.value)
const { color, setColor } = usePrimaryColor(resumeType.value)
const { fontOptions, font, setFont } = useCustomFont(resumeType.value)
const { setAvatar } = useAvatar(emits)
const { primaryColor, setPrimaryColor } = usePrimaryBGColor(resumeType.value)
const { adjustMargin, visiable, confirmAdjustment, marginData } = useAdjust(resumeType.value)
const { followRoll, setFollowRoll } = useFollowRoll()
const { isDark } = useThemeConfig()
</script>

<template>
  <div class="operator">
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
      <el-tooltip content="调整元素边距" effect="light">
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
      <el-color-picker class="operator-item" @change="setColor" size="small" v-model="color" />
      &nbsp;&nbsp; &nbsp;
      <el-color-picker
        class="operator-item"
        @change="setPrimaryColor"
        size="small"
        v-model="primaryColor"
      />
      <el-popconfirm
        width="240"
        confirm-button-text="是的"
        cancel-button-text="点错了"
        title="你想重置简历的所有内容吗？"
        @confirm="restResumeContent(resumeProps.resumeType)"
      >
        <template #reference>
          <i class="operator-item iconfont icon-refresh ml-20"></i>
        </template>
      </el-popconfirm>
      <el-tooltip content="切换编辑模式" effect="light">
        <i class="iconfont icon-write operator-item" @click="$emit('toggle-editor-mode')"></i>
      </el-tooltip>
      <el-tooltip content="自动一页" effect="light">
        <el-switch
          class="operator-item"
          size="small"
          active-color="var(--theme)"
          @change="() => setAutoOnePage()"
          v-model="autoOnePage"
        />
      </el-tooltip>
      <el-tooltip content="跟随滚动" effect="light">
        <el-switch
          class="operator-item"
          size="small"
          active-color="var(--theme)"
          v-model="followRoll"
          @change="setFollowRoll"
        />
      </el-tooltip>
      <el-select
        v-model="font"
        class="operator-item"
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
  <ToastModal v-if="visiable" :flag="visiable" @close="confirmAdjustment" width="400px">
    <h4>调节简历内容的上边距（单位px）</h4>
    <div class="margin-container flex">
      <div class="margin-item" v-for="(marginItem, idx) in marginData" :key="idx">
        <el-space>
          <span>{{ marginItem.name }} ({{ marginItem.className || marginItem.tagName }})</span>
          <el-input-number size="small" v-model="marginItem.marginTop" />
        </el-space>
      </div>
    </div>
    <br />
    <h5 style="color: var(--theme)">PS: 只显示简历模板中已经使用的</h5>
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
  :deep(.el-slider__bar) {
    background: var(--theme);
  }
  .operator-level2 {
    display: flex;
    margin-top: 25px;
    justify-content: center;
    align-items: flex-end;

    :deep(.operator-item) {
      margin-right: 14px;
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

.margin-container {
  flex-wrap: wrap;
  flex-direction: column;
  overflow: scroll;
  .margin-item {
    margin-top: 10px;
    span {
      width: 200px;
      font-size: 14px;
    }
  }
}
</style>
