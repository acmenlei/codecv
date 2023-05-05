const content = `
::: headStart
::: start
![个人头像](https://avatars.githubusercontent.com/u/54731221?v=4)
:::
# 马大佬
男 ｜ 22岁 | icon:phone 15507942222 | icon:email coderleilei@qq.com
求职意向：web前端 ｜ 期望城市：杭州
::: end
::: headEnd

::: mainStart

## 专业技能
1. 熟悉 Vue 框架并理解其核心原理，熟悉 Vue 技术栈，并能进行实际应用
2. 熟悉 React 库及其生态，如 React-Hooks、Redux 等，并能进行实际应用
3. 熟悉常见的数据结构与算法，如链表、树、图等，并能对实际应用进行优化
4. 熟悉 JavaScript、ES6 语法，如 Promise、Generator、Async/Await 等
5. 熟悉 HTML、CSS ，了解 CSS3 动画元素，能编写符合 W3C 标准的页面布局
6. 了解计网相关知识，如 TCP/IP、UDP、HTTP、DNS 协议等

## 教育经历
::: start
::: start
### 上海交通大学
:::
本科
:::
软件工程
::: end
:::
2019 - 2023
::: end

## 实习经历
::: start
::: start
### 腾讯
:::
web前端
::: end
:::
2022.06 - 2022.09
::: end
1.     实习期间主要基于 Vue.js 对公司 B 端管理台进行开发维护，高比真还原原型设计
2.     开发登录、权限控制、财务报表、店铺管理、活动运营、商品订单等模块
3.     根据权限菜单的级联关系对权限码结构进行改造，并设计复杂权限树组件，减少冗余代码量
4.     使用 ECharts 渲染店铺可视化数据，并设计图表组件，极大的减少了项目代码量

## 项目经历

::: start


::: start
### CodeCV Resume

:::
前端开发

::: end
:::
2022.09 - 至今

::: end
**技术栈**： \`TypeScript\` \`Vue3.x\` \`Vite\`
**项目简介**：该项目是一款基于 Vue3.x + 自己编写的 Markdown 词法分析器开发的简历制作工具，它支持将我们编写的Markdown 语法转换为 PDF 文件格式，目前已经开源到 GitHub 社区.
**主要功能**：
- 基于 Markdown 的书写方式，简单易上手，且支持多列布局，编写一套 Markdown 可适配所有模版
- 根据自身喜好DIY简历样式、字体，且提供实时分页预览，可根据比例调整 PDF 预览大小
- 智能自动一页，简历内容不足或过多时，可通过动态计算后自动进行均匀拉伸或收缩
**项目难点**：
- 智能自动一页，收缩会出现内容重叠问题，用户体验差
- 基于原生 Markdown 语法编写的简历排版过于单一，不能实现多列布局

::: start
::: start
### 江小鹿B端管理台
:::
前端开发
::: end
:::
2022.09 - 至今

::: end
**技术栈**： \`Vue.js\` \`ElementUI\` \`Echarts\`
**项目简介**：该项目是一个使用 Vue.js 开发的对接电商小程序的商家端管理系统，是一个前后端分离的 SPA 应用
**工作内容**：
- 登录采用 Cookie + Token 的方式，用户分为店长以及员工，并针对这几种角色对其进行权限控制
- 权限做到按钮级别，并使用单例模式解决了按钮过多引发的频繁拉取权限请求的问题
::: mainEnd


`
export default {
  name: '简约通用 突出内容',
  primaryColor: '#333',
  primaryBackground: '#14A25D',
  img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b314bd3e1fb4ea79ba6f5166321001c~tplv-k3u1fbpfcp-watermark.image?',
  content
}
