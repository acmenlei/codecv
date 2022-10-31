<script setup lang='ts'>
import nav from "@/common/nav/nav"
import RenderModal from "@/components/renderModal.vue"
import { onActivated, ref } from "vue";

const emits = defineEmits(['download']);
const fileName = ref('我的简历');

onActivated(() => {
  fileName.value = document.title;
})

const exportor = async () => {
  document.title = fileName.value;
  emits('download');
}

const toggle = ref(false);
const toggleToolTip = () => {
  toggle.value = !toggle.value;
}
</script>

<template>
  <div id="header">
    <button class="back" @click="$router.back()">返回上一页</button>
    <div class="resume-name">
      <label for="#resume-name-input">
        简历名称：
        <input id="resume-name-input" type="text" v-model="fileName" />
      </label>
    </div>
    <ul class="nav">
      <li v-for="navItem in nav" :class="{ 'active': $route.path === navItem.path }">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{ navItem.name }}</router-link>
        <RenderModal v-else :toggle='toggle'><span @click="toggleToolTip">{{ navItem.name }}</span></RenderModal>
      </li>
    </ul>
    <div class="operator">
      <!-- <button class='save'>保存</button> -->
      <button class="exportor" @click="exportor">导出PDF</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#header {
  background: #fff;
  min-width: 1124px;
  z-index: 1;
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
        border-bottom: 1px solid  var(--theme);;
      }
    }
  }

  .save,
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

  .operator {
    .exportor {
      background: var(--theme);
      color: white;
    }
  }
}
</style>