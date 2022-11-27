<script setup lang='ts'>
import outNav from "@/common/nav/outNav"
import RenderDialog from "@/components/renderDialog.vue";

import { useUser } from "./hook"
const { flag, toggle, update } = useUser();

</script>

<template>
  <div class="header-out">
    <div class="header">
      <div class="logo" @click="$router.replace('/home')">
        <img src="/vite.svg" alt="">
      </div>
      <ul class="nav">
        <li v-for="navItem in outNav" :class="{ 'checked': $route.path.startsWith(navItem.path) }">
          <router-link v-if="!navItem.tooltip" :to="navItem.path">{{ navItem.name }}</router-link>
          <span v-else>{{ navItem.name }}</span>
        </li>
      </ul>

      <div class="user">
        <div class="user-creative mr-20 pointer primary" @click="$router.push('/community/editor')">写面经 <i
            class="iconfont icon-practice "></i></div>
        <span class="user-nick  mr-10">我头发茂盛</span>
        <img @click="flag = !flag" class="pointer mr-10" src="https://avatars.githubusercontent.com/u/54731221?v=4" />
      </div>
    </div>
  </div>
  <render-dialog width="400px" :flag="flag" @cancel="toggle" @confirm="update" title="个人信息修改" reset-text="取消" confirm-text="提交修改">
    <div class="user-preview">
      <img src="https://avatars.githubusercontent.com/u/54731221?v=4" alt="头像" />
      <label>昵称：<p contenteditable>我头发茂盛</p></label>
      <label>毕业学校：<p contenteditable>清华大学</p></label>
      <label>毕业时间：<p><el-date-picker type="year" placeholder="毕业时间"
        /></p></label>
      <label>求职意向：<p contenteditable>前端开发工程师</p></label>
      <label>所在地区：<p contenteditable>北京市</p></label>
    </div>
  </render-dialog>
</template>

<style lang='scss' scoped>
.header-out {
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  z-index: 3;
  position: sticky;
  top: 0;

  .header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .user {
      flex-basis: 250px;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-creative {
        margin-right: 40px;
      }

      .user-nick {
        display: inline-block;
        font-size: .9rem;
        margin-top: 10px;
        color: orange;
      }

      img {
        width: 35px;
        border-radius: 50%;
      }
    }
  }
}

.user-preview {
  overflow: hidden;
  padding-left: 20px;
  img {
    width: 200px;
  }

  label {
    display: block;
    margin-top: 10px;
    height: 35px;
    white-space: nowrap;
    overflow: auto;

    p {
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
      padding: 2px 10px;
      border: none;
      outline: none;
      &:focus {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>