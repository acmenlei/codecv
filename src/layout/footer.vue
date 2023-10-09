<template>
  <div class="footer flex noto-sans-sc">
    <ul class="flex" data-aos="fade-right">
      <strong class="title">关于项目</strong>
      <li>
        <a href="https://github.com/acmenlei/codecv" target="_blank">开源代码</a>
      </li>
      <li>
        <a href="https://github.com/acmenlei/typenet" target="_blank">typenet</a>
      </li>
      <li>
        <a href="https://github.com/acmenlei/a4view" target="_blank">a4view</a>
      </li>
    </ul>
    <ul class="flex" data-aos="fade-right">
      <strong class="title">作者</strong>
      <li>
        <a href="https://coderlei.netlify.app" target="_blank">个人博客</a>
      </li>
      <li>
        <a href="https://github.com/acmenlei" target="_blank"
          ><i class="iconfont icon-github"></i> GitHub</a
        >
      </li>
      <li>
        <a href="https://gitee.com/codeleilei" target="_blank"
          ><i class="iconfont icon-gitee"></i> Gitee</a
        >
      </li>
    </ul>
    <ul class="flex" data-aos="fade-left">
      <strong class="title">社交媒体</strong>
      <li>
        <a href="https://juejin.cn/user/2586468969632445" target="_blank"
          ><i class="iconfont icon-juejin"></i> 掘金</a
        >
      </li>
      <li>
        <a href="https://space.bilibili.com/455695921" target="_blank">
          <i class="iconfont icon-bilibili"></i> bilibili</a
        >
      </li>
      <li>
        <a href="https://zhihu.com/people/kuai-le-vans" target="_blank"
          ><i class="iconfont icon-zhihu"></i> 知乎</a
        >
      </li>
    </ul>
    <ul data-aos="fade-left">
      <strong class="title">联系方式</strong>
      <ul class="flex row">
        <li>
          <img src="@/assets/img/wechat.jpg" alt="作者微信" />
          <strong>作者微信</strong>
        </li>
        <li>
          <img src="@/assets/img/qqgroup.jpeg" alt="QQ群问题咨询" />
          <strong>QQ群交流</strong>
        </li>
      </ul>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  justify-content: space-around;
  padding: 20px;
  max-width: var(--max-width);
  margin: 0 auto;

  ul {
    flex-direction: column;
    list-style: none;
    line-height: 30px;
    margin-top: 20px;
    .title {
      margin-bottom: 10px;
    }
    &.row {
      flex-direction: row;
      text-align: center;
      li {
        display: inline-block;
        margin: 0 10px;
        font-size: 12px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    strong {
      display: block;
    }
    img {
      width: 80px;
    }
    li {
      cursor: pointer;
      letter-spacing: 0.5px;

      a {
        text-decoration: none;
        color: #999;
        font-size: 14px;
      }
      &:hover {
        opacity: 0.6;
      }
      .icon-juejin {
        color: #2582ff;
      }
      .icon-bilibili {
        color: #00a1d6;
      }
      .icon-zhihu {
        color: #066de8;
      }
      .icon-gitee {
        color: #c71d23;
      }
      .icon-github {
        color: #777;
      }
    }
  }
}
</style>
