<script setup lang='ts'>
import EmojiPicker from 'vue3-emoji-picker'
import { useEmoji, usePublishShare } from "./hook";
import 'vue3-emoji-picker/css'

const props = withDefaults(defineProps<{ 
  articleId: number, 
  level: number, 
  posterCommentId?: number, 
  replyCommentId?: number, 
  background?: string
}>(), {
  background: '#f8f8f8'
});
const emits = defineEmits(['reQueryComments'])
const { shareMainContent, publish } = usePublishShare(props.articleId, props.level, props.posterCommentId || 0, props.replyCommentId || 0, emits);
const { picker, setEmoji, togglePicker } = useEmoji(shareMainContent);
</script>

<template>
  <div class="community-publish content-card">
    <div class="community-content-edit">
      <textarea :style="{ background }" class="content-edit main-content" v-model="shareMainContent"
        placeholder="唠点什么～" />
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
  padding: 10px;
  z-index: 2;
  position: relative;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  .community-operator-group {
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
    margin: 10px 10px 0 10px;
    font-size: .9rem;
    height: 150px;

    /* background: #f8f8f8; */
    .content-edit {
      border: none;
      display: block;
      outline: none;
      width: 100%;
      padding: 10px;
      background: #f8f8f8;
      color: #555;
      border-radius: 5px;

      &.main-content {
        resize: none;
        height: calc(100% - 41px);
        overflow: auto;
        font-size: 15px;
      }
    }
  }

  .community-content-edit-publish {
    justify-content: space-between;
    margin: 0;
  }
}
</style>