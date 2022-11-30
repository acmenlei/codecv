<script setup lang='ts'>
import { professionals } from '@/common/utils/professional'
import { useCommunityArticle } from './hook'
import '@textbus/editor/bundles/textbus.min.css';

const { article, articleEditor, publishArticle } = useCommunityArticle();

</script>

<template>
  <div class="article-editor content-card" data-aos="zoom-out">
    <span class="pointer back" @click="$router.back()">返回</span>
    <div id="toolbar"></div>
    <input class="title" type="text" v-model="article.title" placeholder="请填写二十字以内的标题~" />
    <div class="editor" ref="articleEditor"></div>
    <el-select placeholder="岗位方向" class="item" v-model="article.professional">
      <el-option v-for="item in professionals" :value="item" :label="item"></el-option>
    </el-select>
    <br />
    <button class="item primary btn" @click="publishArticle">发布</button>
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