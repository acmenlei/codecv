<script setup lang='ts'>
withDefaults(defineProps<{ flag: boolean, title?: string }>(), {
  title: "温馨提示"
})
defineEmits(['edit-css', 'reset-css'])
</script>

<template>
  <el-dialog v-model="flag" :title="title" width="30%" align-center>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="$emit('edit-css')">设置样式</el-button>
        <el-button type="primary" @click="$emit('reset-css')">
          重置样式
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>