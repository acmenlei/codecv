<script setup lang='ts'>
import UserInfo from '@/components/userInfo.vue';
import { useOperator } from "./hook";
import useUserStore from "@/store/modules/user"
import { computed } from 'vue';

const props = defineProps<{ article: IArticle }>();
const emits = defineEmits(['reQueryList', 'queryProfessional', 'remove'])
const clicked = computed(() => props.article.likes.includes(userInfo.uid))
const hasAuthor = computed(() => userInfo.uid == props.article.authorId)

const { userInfo } = useUserStore();
const { useLike, useRemove, useDetail, useEditor } = useOperator(props.article.articleId, emits, clicked);
</script>

<template>
  <article class="pointer">
    <user-info :user-info='article.authorInfo' :publish-time="article.createTime" />
    <h3>{{ article.title }}</h3>
    <p class="intro line-4" @click="useDetail">
      {{ article.introduce }}
    </p>
    <div class="article-bottom">
      <div class="operator-group">
        <span @click="useLike" :class="{ clicked }">
          {{ clicked ? '已赞' : '点赞' }} {{ article.likes.length }}
        </span>
        <span @click="useDetail">评论 {{ article.commentTotal }}</span>
        <span @click="useEditor" v-if="hasAuthor">编辑</span>
        <span @click="useRemove" v-if="hasAuthor">删除</span>
        <span class="visit-people"><i class="iconfont icon-user"></i> 浏览量 {{ article.hot }}</span>
      </div>
      <span class="tag pointer" @click="$emit('queryProfessional', article.professional)">#{{ article.professional }}</span>
    </div>
  </article>
</template>

<style lang='scss' scoped>
article {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  color: #666;
  position: relative;
  .visit-people {
    position: absolute;
    right: 0;
    top: 15px;
  }

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