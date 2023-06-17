<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ flag: boolean }>()
const emit = defineEmits(['update:flag'])

const dialogVisible = computed({
  get() {
    return props.flag
  },
  set(visible: boolean) {
    emit('update:flag', visible)
  }
})
</script>

<template>
  <el-drawer v-model="dialogVisible" size="400" :with-header="false" close-on-press-escape>
    <h2>有问题请加微信反馈，谢谢配合！</h2>
    <img width="400" src="@/assets/img/wechat.jpeg" alt="我的微信" />
  </el-drawer>
</template>

<style lang="scss" scoped>
h2,
img {
  margin-top: 30px;
  text-align: center;
}
</style>
