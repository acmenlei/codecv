<script setup lang='ts'>
import { formatTimefromNow } from "@/common/utils/date" 
</script>

<template>
  <article class="pointer">
    <div class="user-head">
      <img class="pointer mr-10" src="https://avatars.githubusercontent.com/u/54731221?v=4" />
      <div class="user-info">
        <span class="user-name">我还能学</span>
        <div class="date-school">
          <span class="datetime">{{ formatTimefromNow(new Date().getTime()) }}</span>
          <span class="school"> 清华大学-2023届 </span>
        </div>
      </div>
    </div>
    <h3>腾讯云计算前端面筋(一/二/三/hr面)</h3>
    <p>
      怎么理解html语义化标签
      html5新增了哪些东西
      localStorage 和 seesionStorage 和 cookie区别
      html文件不写head和body等内容，只写两行文本，会发生什么
      css选择器的优先级
    </p>
    <div class="operator-group">
      <span>点赞</span>
      <span>分享</span>
      <span>评论</span>
    </div>
  </article>
</template>

<style lang='scss' scoped>
article {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  color: #666;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin-bottom: 5px;
    color: #444;
  }

  .user-head {
    margin-bottom: 10px;
    color: #333;

    img {
      width: 35px;
      border-radius: 5px;
    }

    .user-info {
      display: inline-block;
      font-size: .9rem;

      .date-school {
        color: #888;
      }
    }
  }

  .operator-group {
    margin: 10px 0;

    span {
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        color: var(--theme);
      }
    }
  }
}
</style>