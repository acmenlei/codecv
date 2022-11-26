<script setup lang='ts'>
import { professionals, tabs } from './constant';
import ArticleCard from './components/card/card.vue';
import NavBar from '@/components/navBar.vue';
import { useProfessional, useTab } from "./hook"
import { watchEffect } from 'vue';

const { professional } = useProfessional();
const { tab, toggleTab } = useTab();

watchEffect(() => {
  console.log('重新查询数据', tab.value, professional.value)
})

</script>

<template>
  <div class="community-list content-card" data-aos="fade-right">
    <div class="menubar flex">
      <NavBar :tabs="tabs" @tab-click="toggleTab" />
      <el-select placeholder="岗位方向" v-model="professional">
        <el-option v-for="prof in professionals" :label="prof" :value="prof" />
      </el-select>
    </div>
    <div class="article-list">
      <ArticleCard v-for="_ in 10" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menubar {
  justify-content: space-between;
  align-items: center;
}
</style>