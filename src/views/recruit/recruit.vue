<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import { useRecruitTab } from './hook'

const { tabs, tabClick } = useRecruitTab()
</script>

<template>
  <div class="recruit content-card">
    <!-- <div class="recruit-type flex"> -->
    <NavBar :tabs="tabs" @tab-click="tabClick" />
    <!-- </div> -->
    <div class="recruit-limit">recruit-limit</div>
  </div>
</template>

<style lang="scss" scoped>
.recruit {
  max-width: 1200px;
  margin: 20px auto;
}
</style>
