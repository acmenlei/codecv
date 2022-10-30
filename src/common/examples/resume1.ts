export default `## 张三-Web前端开发工程师
::: start
icon:user 男 / 2000.01.01 / 江西南昌
icon:phone 155xxxxxx06
::: 
[icon:email xxxxxxxx@163.com](xxxxxxxx@163.com)
[icon:github https://github.com/acmenlei](https://github.com/acmenlei)
::: end

## 教育背景
::: start
- **江西xxxx大学**
- 软件与物联网工程学院 - 软件工程（本科） GPA 3.6 / 4.0
:::

**2021.09 - 2023.07**
::: end

::: start
- **江西xxxxxx学院**
- 信息工程学院 - 软件技术 GPA 3.7 / 4.0

:::

**2018.09 - 2021.07**

::: end

## 专业技能
- 熟悉 Vue 框架并对其源码有过深入研究，且熟悉 Vue 相关技术栈，并能在项目中进行实际应用
- 熟悉 React 库及其生态，如 React-Hooks、Redux 等，并能在项⽬中进⾏实际应⽤
- 熟悉 JavaScript、ES6 语法，如 Promise、Generator、Async/Await 等
- 熟悉 HTML、CSS，如 FlexBox、CSS 动画等，并能编写符合 W3C 标准的页面布局
- 了解常见的数据结构与算法，如链表、树、图论等，并能根据实际应用场景对功能进行优化
- 了解前端工程化，能使用 Vite、Webpack 对项目进行基本的配置
- 了解计算机网络相关知识，如 TCP/IP、UDP、HTTP、HTTPS、DNS 协议等
- 了解 Nodejs 及其生态，如 Express、Sequelize，并能使用 Nodejs 搭建基本的后台服务

## 开源作品
**[icon:github markdown-transform-html](https://github.com/acmenlei/markdown-transform-html)**
- **工具介绍**：基于 TypeScript 开发的 MD 词法分析器，一站式解析 Markdown 语法为 HTML 结构的工具，且可提供代码高亮功能
- **线上演示**：[https://acmenlei.github.io/markdown-transform-html-demo/dist/](https://acmenlei.github.io/markdown-transform-html-demo/dist/)

**[icon:github v3-carousel](https://github.com/acmenlei/v3-carousel)**
- **工具介绍**：基于 Vue3 Composition Api 开发的轮播图组件，轮播内容可完全自定义
- **线上演示**：[https://acmenlei.github.io/v3-carousel/dist/](https://acmenlei.github.io/v3-carousel/dist/)

## 实习经历
::: start
**xxxxxx - xxxxxx - web前端开发实习生 - 杭州(xxxx人以上)**
:::
**2020.12 - 2021.05**
::: end

##### 江小鹿B端管理台

- **技术栈**：\`Vue.js\` \`ElementUI\` \`Echarts\` \`Vuex\` \`Vue-Router\`
- **项目简介**：该项目是一个使用 Vue.js 开发的电商类小程序的商家端管理系统，是一个前后端分离的 SPA 应用
- **工作内容**：

1. 登录采用 Cookie + Token 的方式，用户分为店长以及员工，并针对这几种角色对其进行权限控制
2. 权限做到按钮级别，页面级权限通过 Vue-Router 守卫进行控制、按钮级权限通过 directive 实现，并使用单例模式解决了按钮过多引发的频繁拉取权限的 HTTP 请求
3. 根据权限菜单的级联关系对权限码结构进行改造，并使用 Tree 组件渲染树形结构权限列表，提升可读性
4. 使用 ECharts 可视化渲染店铺商品销售占比、近几个月收支、会员购买商品所占份额图表
5. 对于表格中所有的模糊查询，都使用了节流进行优化，尽量减轻服务器的压力

## 项目经历

::: start
### 个人技术博客
:::
** 2021.12 - 至今 **
::: end

- **技术栈**：\`Vue.js(管理台)\` \`Next.js(前台)\` \`Node.js(服务端)\` \`TypeScript\` \`Echarts\`
- **项目简介**：该项目是凭个人兴趣独立开发的前后端分离的 SSR 应用，共分为前台、管理台、服务端三个部分
- **开发内容（主要介绍下前台）**：

1. 考虑需要较好的 SEO，便采用 Next.js 开发，并参照 React 发展方向大部分使用函数组件和 Hooks 复用逻辑
2. 登录注册采用 Cookie ＋ Session 实现，并对 Cookie 做了一些安全措施，预防 XSS / CSRF 攻击
3. 头像上传基于用户所选图片大小来确定是否使用切片上传, 解决了大图片上传后响应慢的问题
4. 自定义键盘 Hook，解决多个页面的键盘事件监听造成的代码冗余问题，极大提升了代码可读性
5. 换肤采用 CSS3 动画属性以及基于主题色 Dark 以及 Light 进行切换，优化页面性能表现
6. 项目中采用节流对交互按钮进行优化，减轻服务端压力，动画也尽量使用 CSS3 的方式实现，提升用户体验`