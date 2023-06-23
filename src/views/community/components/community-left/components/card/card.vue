<script setup lang="ts">
import UserInfoComp from '@/components/userInfo.vue'
import { useOperator, useCovers } from './hook'
import useUserStore from '@/store/modules/user'
import { computed } from 'vue'
import { numFormat } from '@/utils/format'
import { IArticle } from '@@types/type'

const props = defineProps<{ article: IArticle }>()
const emits = defineEmits(['reQueryList', 'queryProfessional', 'remove'])

const clicked = computed(() => props.article.likes.includes(userInfo.uid))
const hasAuthor = computed(() => userInfo.uid == props.article.authorId)
const articleId = computed(() => props.article.articleId)
const articleContent = computed(() => props.article.content)

const { covers } = useCovers(articleContent)
const { userInfo } = useUserStore()
const { useLike, useRemove, useDetail, useEditor } = useOperator(articleId, emits, clicked)
</script>

<template>
  <article class="pointer">
    <user-info-comp :user-info="article.authorInfo" :publish-time="article.createTime" />
    <h3 @click="useDetail(article)">{{ article.title }}</h3>
    <p class="intro line-4" @click="useDetail(article)">
      {{ article.introduce }}
    </p>
    <!-- 图片插入 -->
    <div class="covers-container" v-if="covers.length">
      <el-image
        :key="idx"
        :src="cover"
        v-for="(cover, idx) in covers"
        :preview-src-list="covers"
        :initial-index="idx"
        fit="cover"
        :lazy="true"
        loading="lazy"
        class="mr-10 cover-item"
        :preview-teleported="true"
        :hide-on-click-modal="true"
      />
    </div>
    <div class="article-bottom">
      <div class="operator-group">
        <span @click="useLike" :class="{ clicked }">
          <i class="iconfont icon-like font-20"></i>
          {{ numFormat(article.likes.length) }}
        </span>
        <span @click="useDetail(article)">
          <i class="iconfont icon-comment font-20"></i>
          {{ numFormat(article.commentTotal) }}
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
        <span class="visit-people">
          <i class="iconfont icon-browse font-20"></i>
          浏览量 {{ numFormat(article.hot) }}
        </span>
      </div>
      <span class="tag pointer" @click="$emit('queryProfessional', article.professional)"
        >#{{ article.professional }}</span
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--font-color);
  position: relative;

  .visit-people {
    position: absolute;
    right: -20px;
    top: -5px;
  }

  .intro:hover {
    opacity: 0.8;
  }

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin-bottom: 5px;
    color: var(--font-color);
  }

  .article-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tag {
      color: var(--theme);

      &:hover {
        opacity: 0.7;
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
