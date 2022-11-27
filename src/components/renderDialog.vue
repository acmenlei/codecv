<script setup lang='ts'>
withDefaults(defineProps<{ flag: boolean, footer?: boolean, title?: string, confirmText?: string, resetText?: string, width?: string }>(), {
  title: "温馨提示",
  width: '30%',
  confirmText: '提交',
  resetText: '重置',
  footer: true
})
defineEmits(['cancel', 'confirm']);

</script>

<template>
  <el-dialog v-model="flag" :title="title" :style="{ width }" align-center>
    <slot></slot>
    <template #footer v-if="footer">
      <span class="dialog-footer">
        <el-button type="primary" @click="$emit('confirm')">{{ confirmText }}</el-button>
        <el-button type="primary" @click="$emit('cancel')">{{ resetText }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>