<script setup lang="ts">
import { numFormat } from '@/utils/format'
import wechat from '@/assets/img/wechat.jpg'

const defaultUserInfo = {
  uid: 0,
  nickName: '磊磊磊磊磊',
  username: 'coderlei',
  sex: '男',
  professional: '前端开发工程师',
  graduation: '2023',
  school: '江西财经大学',
  avatar: 'https://codeleilei.gitee.io/blog/avatar.jpg',
  origin: '江西南昌'
}
</script>

<template>
  <article class="pointer">
    <user-info :user-info="defaultUserInfo" />
    <h3>《关于社区暂时停止服务的公告》</h3>
    <p class="intro line-4">
      各位兄弟姐妹，之前的服务器已经到期了，所以社区暂时就不提供了，但是数据都是在的，以后恢复正常之后账号都是可以正常使用的！简历服务也是可以正常使用的，别说我跑路了😅！有问题或者有更好的建议可以联系我的微信，也欢迎更多志同道合的朋友一起来维护这个项目！
    </p>
    <div class="covers-container">
      <el-image
        :src="wechat"
        :preview-src-list="[wechat]"
        :initial-index="0"
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
        <span>
          <i class="iconfont icon-like font-20"></i>
          {{ numFormat(99999) }}
        </span>
        <span>
          <i class="iconfont icon-comment font-20"></i>
          {{ numFormat(99999) }}
        </span>
        <span class="visit-people">
          <i class="iconfont icon-browse font-20"></i>
          浏览量 {{ numFormat(99999) }}
        </span>
      </div>
      <span class="tag pointer">#社区公告</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 0.5px solid #999;
  color: var(--font-color);
  position: relative;

  .visit-people {
    position: absolute;
    right: -20px;
    top: -5px;
  }

  .intro {
    opacity: 0.9;
    &:hover {
      opacity: 0.8;
    }
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
