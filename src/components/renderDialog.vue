<script setup lang='ts'>
withDefaults(defineProps<{ flag: boolean, title?: string, confirmText: string, resetText: string }>(), {
  title: "温馨提示"
})
defineEmits(['cancel', 'confirm']);

</script>

<template>
  <el-dialog v-model="flag" :title="title" width="30%" align-center>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="$emit('confirm')">{{ confirmText }}</el-button>
        <el-button type="primary" @click="$emit('cancel')">{{ resetText }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>