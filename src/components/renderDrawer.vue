<script setup lang='ts'>
defineProps<{ flag: boolean }>()
</script>

<template>
  <el-drawer v-model="flag" size="400" :with-header="false" close-on-press-escape>
    <h2>有问题请加微信反馈，谢谢配合！</h2>
    <img width="400" src="/wechat.jpg" alt="我的微信">
  </el-drawer>
</template>

<style lang="scss" scoped>
h2, img {
  margin-top: 30px;
  text-align: center;
}
</style>