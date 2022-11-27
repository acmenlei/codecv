<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue';
import { createEditor } from '@textbus/editor';
import '@textbus/editor/bundles/textbus.min.css';

const articleEditor = ref();

onMounted(() => {
  const editor = createEditor({ autoFocus: true, styleSheets: ['li { margin-left: 20px }'], placeholder: '内容尽情发挥～' });
  editor.mount(articleEditor.value)
  onUnmounted(() => editor.destroy())
})

</script>

<template>
  <div class="article-editor content-card" data-aos="zoom-out">
    <span class="pointer back" @click="$router.back()">返回</span>
    <input class="title" type="text" placeholder="请填写标题~" />
    <div class="editor" ref="articleEditor"></div>
    <el-select placeholder="岗位方向" class="item">
      <el-option value="前端" label="前端"></el-option>
      <el-option value="前端" label="前端"></el-option>
    </el-select>
    <br />
    <el-input class="item" style="width: 500px" placeholder="携带话题"></el-input>
    <br />
    <button class="item primary btn">发布</button>
    <button class="item plain btn" @click="$router.back()">返回</button>
  </div>
</template>

<style lang='scss' scoped>
.article-editor {
  max-width: 1200px;
  margin: 20px auto;

  .back {
    display: inline-block;
    margin-bottom: 20px;

    &:hover {
      opacity: .5;
    }
  }

  .title {
    width: 100%;
    font-size: 1.1rem;
    padding: 15px 0;
    border: none;
    outline: none;
    border-bottom: 2px solid #eee;
    margin-bottom: 10px;
  }

  .item {
    margin-top: 20px;
    margin-right: 20px;
  }
}
</style>