<script setup lang='ts'>
import resumeCard from './ch-cmp/resumeCard.vue';
import { templateCategory } from './constant';
import { useCategory } from "./hook";

const { queryCategory, category, data } = useCategory();
</script>

<template>
  <div class="check-category">
    <label>简历类型：</label>
    <el-radio-group v-model="category" @change="queryCategory">
      <el-radio-button v-for="cg in templateCategory" :label="cg" />
    </el-radio-group>
  </div>
  <div class="resume-card-container">
    <resume-card v-for="theme in data" :key="theme.id" :theme="theme" />
  </div>
</template>

<style lang='scss' scoped>
.check-category {
  display: flex;
  align-items: center;
  margin: 50px 0 0 25px;

  label {
    font-weight: bold;
    color: #555;
  }
}

.resume-card-container {
  padding: 0 10px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
</style>