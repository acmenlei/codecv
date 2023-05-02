<script setup lang="ts">
import { warningMessage } from '@/common/message'
import { ref } from 'vue'

const emit = defineEmits(['confirm'])

const col = ref(5)
const row = ref(2)

function confirm() {
  if (!col.value || !row.value) {
    warningMessage('请填写有效的数字!')
    return
  }
  emit('confirm', col.value, row.value)
}
</script>

<template>
  <h3>插入表格行列数</h3>
  &nbsp;
  <el-input v-model="col" type="number" placeholder="请输入列数"></el-input>
  &nbsp;
  <el-input v-model="row" type="number" placeholder="请输入行数"></el-input>
  &nbsp;
  <br />
  <button class="btn primary pointer hover" @click.stop="confirm">确定</button>
</template>

<style lang="scss" scoped></style>
