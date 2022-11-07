<script setup lang='ts'>
import navMenu from "./nav.vue";
import RenderDrawer from "@/components/renderDrawer.vue"
import { onActivated, ref } from "vue";

const emits = defineEmits(['download-dynamic', 'download-native', 'download-md', 'import-md']);
const fileName = ref('');
const flag = ref(false);

onActivated(() => fileName.value = document.title)

const exportFile = (type: string) => {
  document.title = fileName.value;
  emits(`download-${type}` as any)
}

const importFile = (event: any) => {
  emits('import-md', event?.target?.files[0])
}

</script>

<template>
  <div id="header">
    <button class="back" @click="$router.back()">返回上一页</button>
    <label for="resume-name-input">简历名称：</label>
    <input id="resume-name-input" type="text" v-model="fileName" />
    <nav-menu @export-md="exportFile('md')" @import-md="importFile" />
    <div class="operator">
      <el-tooltip class="box-item" effect="dark" content="问题反馈" placement="bottom-end">
        <i class="iconfont icon-problem problem" @click="() => flag = !flag"></i>
      </el-tooltip>
      <button class="exportor" @click="exportFile('dynamic')">动态导出PDF</button>
      <button class="exportor" @click="exportFile('native')">打印机导出PDF</button>
    </div>
  </div>
  <RenderDrawer :flag="flag" />
</template>

<style lang='scss' scoped>
#header {
  background: #fff;
  z-index: 9;
  transition: background .5s;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;
  color: #555;

  #resume-name-input {
    border: none;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    color: #555;

    &:focus {
      border-bottom: 1px solid var(--theme);
      ;
    }
  }

  .exportor,
  .back {
    outline: none;
    border: none;
    padding: 8px 15px;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  .back {
    margin-right: 30px;
    cursor: pointer;
    background: var(--theme);
    color: white;
  }

  .problem {
    margin-right: 30px;
    cursor: pointer;
    font-size: 20px;
    line-height: 60px;
  }

  .operator {
    .exportor {
      background: var(--theme);
      color: white;
    }
  }
}
</style>