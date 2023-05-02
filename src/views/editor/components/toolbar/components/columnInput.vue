<script setup lang="ts">
import { warningMessage } from '@/common/message'
import { ref } from 'vue'

const emit = defineEmits(['confirm'])

const column = ref(2)

function confirm() {
  if (!column.value) {
    warningMessage('请填写完整!')
    return
  }
  emit('confirm', column.value)
}
</script>

<template>
  <h3>请输入需要插入的列数</h3>
  &nbsp;
  <el-input v-model="column" type="number" placeholder="请输入列数"></el-input>
  &nbsp;
  <br />
  <button class="btn primary pointer hover" @click.stop="confirm">确定</button>
</template>

<style lang="scss" scoped></style>
