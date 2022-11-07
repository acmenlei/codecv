<script setup lang='ts'>
withDefaults(defineProps<{ flag: boolean, title?: string }>(), {
  title: "温馨提示"
})
defineEmits(['edit-css', 'reset-css'])
</script>

<template>
  <n-modal v-model:show="flag" class="custom-card" preset="card" :title="title" :style="{ width: '30%' }" size="small">
    <slot></slot>
    <template #footer>
      <n-space>
        <n-button color="#8a2be2" @click="$emit('edit-css')">设置样式</n-button>
      <n-button color="#8a2be2" type="primary" @click="$emit('reset-css')">
        重置样式
      </n-button>
      </n-space>
    </template>
  </n-modal>
  <!-- <el-dialog v-model="flag" :title="title" width="30%" align-center>
    
    <template #footer>
      <span class="dialog-footer">
        
      </span>
    </template>
  </el-dialog> -->
</template>