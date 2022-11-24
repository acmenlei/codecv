<script setup lang='ts'>
import resumeCard from './components/resumeCard.vue';
import { templateCategory } from './constant';
import { useCategory } from "./hook";

const { queryCategory, category, data } = useCategory();
</script>

<template>
  <div class="resume-container">
    <div class="check-category">
      <label>简历类型：</label>
      <el-radio-group v-model="category" @change="queryCategory">
        <el-radio-button v-for="cg in templateCategory" :label="cg" />
      </el-radio-group>
    </div>
    <div class="resume-card-container">
      <resume-card v-for="theme in data" :key="theme.id" :theme="theme" />
    </div>
    <p class="tips">
      <mark>Tips</mark>:
      如果你也想定制一个你自己青睐的模板，那欢迎给项目贡献代码，感谢！
    </p>
  </div>
</template>

<style lang='scss' scoped>
.resume-container {
  margin: 50px 0 30px 30px;

  .check-category {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
      font-weight: bold;
      color: #555;
    }
  }

  .resume-card-container {
    padding: 0 0 55px 20px;
    margin-right: 30px;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }
  .tips {
    margin-top: 10px;
    color: #555;
    font-size: 13px;
    mark {
      padding: 2px 5px;
      border-radius: 5px;
      color: #333;
    }
  }
}
</style>