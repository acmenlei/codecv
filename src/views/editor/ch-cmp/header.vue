<script setup lang='ts'>
import nav from "@/common/nav/nav"
import RenderModal from "@/components/renderModal.vue"
import RenderDrawer from "@/components/renderDrawer.vue"
import { onActivated, ref } from "vue";

const emits = defineEmits(['download', 'download-native']);
const fileName = ref('我的简历');
const flag = ref(false);

onActivated(() => {
  fileName.value = document.title;
})

const exportor = () => {
  emits('download', fileName.value);
}

const native_exportor = () => {
  document.title = fileName.value;
  emits('download-native');
}

const toggle = ref(false);
const toggleToolTip = () => {
  toggle.value = !toggle.value;
}
</script>

<template>
  <div id="header">
    <n-button class="back" color="#8a2be2" @click="$router.back()">返回上一页</n-button>
    <div class="resume-name">
      <label for="#resume-name-input">
        简历名称：
        <input id="resume-name-input" type="text" v-model="fileName" />
      </label>
    </div>
    <ul class="nav">
      <li v-for="navItem in nav" :class="{ 'active': $route.path === navItem.path }">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''"><i :class="navItem.icon"></i>{{ navItem.name }}
        </router-link>
        <RenderModal v-else :toggle='toggle'><i :class="navItem.icon"></i><span @click="toggleToolTip">{{ navItem.name
        }}</span></RenderModal>
      </li>
    </ul>
    <n-space class="operator" align="center">
      <n-tooltip class="box-item" trigger="hover">
        <template #trigger>
          <i class="iconfont icon-problem problem" @click="() => flag = !flag"></i>
        </template>
        问题反馈
      </n-tooltip>
      <n-button color="#8a2be2" @click="exportor">
        动态计算导出PDF
      </n-button>
      <n-button color="#8a2be2" @click="native_exportor">
        打印机导出PDF
      </n-button>
    </n-space>
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

  .resume-name {
    input {
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
  }

  .back {
    margin-right: 30px;
  }
  .problem {
    margin-right: 30px;
    cursor: pointer;
    font-size: 20px;
    line-height: 60px;
  }
}
</style>