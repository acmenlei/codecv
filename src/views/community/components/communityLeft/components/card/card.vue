<script setup lang='ts'>
import UserInfo from '@/components/userInfo.vue';
import { useOperator } from "./hook";
import useUserStore from "@/store/modules/user"
import { computed } from 'vue';

const props = defineProps<{ article: IArticle }>();
const emits = defineEmits(['reQueryList', 'queryProfessional', 'remove'])

const clicked = computed(() => props.article.likes.includes(userInfo.uid))
const hasAuthor = computed(() => userInfo.uid == props.article.authorId)
const articleId = computed(() => props.article.articleId)

const { userInfo } = useUserStore();
const { useLike, useRemove, useDetail, useEditor } = useOperator(articleId, emits, clicked);
</script>

<template>
  <article class="pointer">
    <user-info :user-info='article.authorInfo' :publish-time="article.createTime" />
    <h3>{{ article.title }}</h3>
    <p class="intro line-4" @click="useDetail(article)">
      {{ article.introduce }}
    </p>
    <div class="article-bottom">
      <div class="operator-group">
        <span @click="useLike" :class="{ clicked }">
          <i class="iconfont icon-like font-20"></i>
          {{ article.likes.length }}
        </span>
        <span @click="useDetail(article)">
          <i class="iconfont icon-comment font-20"></i>
          {{ article.commentTotal }}
        </span>
        <span @click="useEditor" v-if="hasAuthor">
          <el-tooltip placement="bottom" content="编辑">
            <i class="iconfont icon-edit font-20"></i>
          </el-tooltip>
        </span>
        <span @click="useRemove" v-if="hasAuthor">
          <el-tooltip placement="bottom" content="删除">
            <i class="iconfont icon-delete font-20"></i>
          </el-tooltip>
        </span>
        <span class="visit-people"><i class="iconfont icon-browse font-20"></i> 浏览量 {{ article.hot }}</span>
      </div>
      <span class="tag pointer" @click="$emit('queryProfessional', article.professional)">#{{ article.professional
      }}</span>
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
        margin-right: 20px;
        cursor: pointer;

        &:hover {
          color: var(--theme);
        }
      }
    }
  }

}
</style>