<script setup lang='ts'>
import UserInfo from '@/components/userInfo.vue';

defineProps<{ article: IArticle }>();
</script>

<template>
  <article class="pointer">
    <user-info :user-info='article.authorInfo' :publish-time="article.createTime"/>
    <h3>{{ article.title }}</h3>
    <p class="intro line-4" @click="$router.push(`/community/detail?articleId=${article.articleId}`)">
      {{ article.introduce }}
    </p>
    <div class="article-bottom">
      <div class="operator-group">
        <span>点赞 {{ article.like }}</span>
        <span>评论</span>
        <span>分享</span>
        <span>编辑</span>
        <span>删除</span>
        <span>访客 {{ article.hot }}</span>
      </div>
      <span class="tag pointer">#{{ article.professional }}</span>
    </div>
  </article>
</template>

<style lang='scss' scoped>
article {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  color: #666;
  .intro:hover {
    opacity: .8;
  }
  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin-bottom: 5px;
    color: #444;
  }

  .article-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tag {
      color: var(--theme);

      &:hover {
        opacity: .7;
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

}
</style>