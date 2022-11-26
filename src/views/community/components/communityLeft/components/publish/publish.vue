<script setup lang='ts'>
import EmojiPicker from 'vue3-emoji-picker'
import { useEmoji, usePublishShare } from "./hook";
import 'vue3-emoji-picker/css'

const { shareTitle, shareMainContent, publish } = usePublishShare();
const { picker, setEmoji, togglePicker } = useEmoji(shareMainContent);

</script>

<template>
  <div class="community-publish content-card" data-aos="fade-right">
    <div class="community-operator-group">
      <span class="text mr-20">分享动态</span>
    </div>
    <div class="community-content-edit">
      <input class="content-edit title" v-model="shareTitle" maxlength="30" placeholder="标题" />
      <textarea class="content-edit main-content" v-model="shareMainContent" placeholder="唠点什么～" />
    </div>
    <!-- 图片插入位置 -->
    <div class="community-operator-group flex community-content-edit-publish">
      <div class="community-edit-picker">
        <span class="emoji pointer" @click="togglePicker">表情</span>
        <EmojiPicker class="picker" v-if="picker" :native="true" :hide-search="true" :hide-group-names="true"
          @select="setEmoji" :static-texts="{ skinTone: '换肤' }" />
      </div>
      <button class="btn primary" @click="publish">发表</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.community-publish {
  margin-bottom: 20px;
  padding: 10px;
  z-index: 2;
  position: relative;

  .community-operator-group {
    margin: 10px;

    .community-edit-picker {
      margin-left: 10px;
      color: #555;
      position: relative;

      .picker {
        position: absolute;
        left: 0;
        top: 25px;
      }
    }
  }

  .community-content-edit {
    width: calc(100% - 20px);
    border-radius: 5px;
    margin: 10px;
    font-size: .9rem;
    height: 150px;

    /* background: #f8f8f8; */
    .content-edit {
      border: none;
      display: block;
      outline: none;
      width: 100%;
      padding: 10px 0;

      &.title {
        border-bottom: 1px solid #eee;
        font-size: 1.1rem;
        font-weight: bold;
      }

      &.main-content {
        resize: none;
        height: calc(100% - 41px);
        overflow: auto;
        font-size: 15px;
        letter-spacing: 1px;
      }
    }
  }

  .community-content-edit-publish {
    justify-content: space-between;
    margin: 0;
  }
}
</style>