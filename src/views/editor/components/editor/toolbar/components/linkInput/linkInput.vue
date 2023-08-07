<script setup lang="ts">
import { useLinkInput } from './hook'

const emit = defineEmits(['confirm'])
const { link, linkText, confirm } = useLinkInput(emit)
const title = link.value ? '修改链接' : '插入链接'
</script>

<template>
  <h3>{{ title }}</h3>
  &nbsp;
  <el-input v-model="link" placeholder="请输入链接地址"></el-input>
  &nbsp;
  <el-input v-model="linkText" placeholder="请输入链接文本"></el-input>
  &nbsp;
  <br />
  <button class="btn primary pointer hover" @click.stop="confirm">确定</button>
</template>
