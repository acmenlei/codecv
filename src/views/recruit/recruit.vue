<script setup lang="ts">
// import NavBar from '@/components/navBar.vue'
import { useData } from './hook'
import { getTagColor } from '@/utils'

// const { form } = useRecruitForm()
const { data, form, query, reset } = useData()
</script>

<template>
  <div class="recruit content-card">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="模糊搜索">
        <el-input v-model="form.keyword" placeholder="关键词搜索" clearable />
      </el-form-item>
      <el-form-item label="工作岗位">
        <el-input v-model="form.job" placeholder="岗位筛选" clearable />
      </el-form-item>
      <el-form-item label="学历要求">
        <el-select v-model="form.educational_required" placeholder="学历要求" clearable>
          <el-option label="985/211本科" value="92" />
          <el-option label="统招本科" value="统招本科" />
          <el-option label="专升本" value="专升本" />
          <el-option label="专科" value="专科" />
        </el-select>
      </el-form-item>
      <el-form-item label="工作经验">
        <el-select v-model="form.type" placeholder="招聘类型" clearable>
          <el-option label="应届生" value="入门" />
          <el-option label="1-3年经验" value="初级" />
          <el-option label="3-5年经验" value="中高级" />
          <el-option label="5-10年经验" value="架构师" />
        </el-select>
      </el-form-item>
      <el-form-item label="作息时间">
        <el-select v-model="form.type" placeholder="筛选作息时间" clearable>
          <el-option label="996" value="996" />
          <el-option label="965" value="965" />
          <el-option label="1075" value="1075" />
          <el-option label="855" value="855" />
          <el-option label="WLB" value="WLB" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button color="var(--theme)" @click="query">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="recruit-limit">
      <el-table :data="data" style="width: 100%">
        <el-table-column label="Logo" prop="logo">
          <template #default="{ row }">
            <img class="corporation_logo" :src="row.logo" alt="" />
          </template>
        </el-table-column>
        <el-table-column label="公司名称" prop="corporation">
          <template #default="{ row }">
            <strong>{{ row.corporation }}</strong>
          </template>
        </el-table-column>
        <el-table-column label="岗位" prop="job" />
        <el-table-column label="工作经验" prop="type">
          <template #default="{ row }">
            <el-tag v-for="(t, index) in row.type" :type="getTagColor(index)" :key="index">{{
              t
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="学历要求" prop="educational_required">
          <template #default="{ row }">
            <el-tag
              v-for="(er, index) in row.educational_required"
              :type="getTagColor(index)"
              :key="index"
              round
              >{{ er }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="公司标签" prop="tags">
          <template #default="{ row }">
            <el-tag v-for="(t, index) in row.tags" :type="getTagColor(index)" :key="index">{{
              t
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" prop="endTime" />
        <el-table-column label="投递链接" prop="external_link">
          <template #default="{ row }">
            <el-link :href="row.external_link" target="_blank">
              {{ row.external_link }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="remark" />
      </el-table>
      <el-pagination class="mt-20" layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recruit {
  max-width: var(--max-width);
  margin: 20px auto;

  .corporation_logo {
    width: 70px;
  }

  :deep(.el-tag) {
    margin-top: 5px;
  }
}
</style>
