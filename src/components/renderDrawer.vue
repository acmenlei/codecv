<script setup lang='ts'>
defineProps<{ flag: boolean }>()
</script>

<template>
  <n-drawer v-model:show="flag" :width="450">
    <n-drawer-content title="联系方式">
      <img width="400" src="/wechat.jpg" alt="我的微信">
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="scss" scoped>
img {
  margin-top: 30px;
  text-align: center;
}
</style>