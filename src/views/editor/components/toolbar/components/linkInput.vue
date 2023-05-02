<script setup lang="ts">
import { warningMessage } from '@/common/message'
import { ref } from 'vue'

const emit = defineEmits(['confirm'])

const link = ref('')
const linkText = ref('')

function confirm() {
  if (!link.value || !linkText.value) {
    warningMessage('请填写完整!')
    return
  }
  emit('confirm', link.value, linkText.value)
}
</script>

<template>
  <h3>插入链接</h3>
  &nbsp;
  <el-input v-model="link" placeholder="请输入链接地址"></el-input>
  &nbsp;
  <el-input v-model="linkText" placeholder="请输入链接文本"></el-input>
  &nbsp;
  <br />
  <button class="btn primary pointer hover" @click.stop="confirm">确定</button>
</template>

<style lang="scss" scoped></style>
