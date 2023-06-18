const content = `::: headStart
::: start
![个人头像](https://codeleilei.gitee.io/blog/avatar.jpg)
:::
# 张三
男 ｜ 22岁 ｜ 生日：1994/10/01 ｜ icon:school 应届生 ｜ 江西南昌
icon:phone 15507942222 ｜ icon:email coderleilei@qq.com ｜ icon:wechat zhangsan03
求职意向：项目经理 ｜ 期望城市：杭州 ｜ 期望薪资：面议
::: end
::: headEnd

::: mainStart
## icon:work 项目经历
::: start
### CodeCV Resume
:::
### 全栈开发
:::
### 2022/09 ～ 2023/05
::: end

**技术栈**： \`TypeScript\` \`Vue3.x\` \`markdown-transform-html\` \`Vite\`&nbsp;
**项目简介**：该项目是一款基于 Vue3.x + 自己编写的 Markdown 词法分析器开发的简历制作工具，它支持将我们编写的 Markdown 语法转换为 PDF 文件格式，目前已经开源到 GitHub 社区.
**线上地址**：[https://codeleilei.gitee.io/markdown2pdf ](https://codeleilei.gitee.io/markdown2pdf )
**主要功能**：
1. 基于 Markdown 的书写方式，简单易上手，且支持多列布局，编写一套 Markdown 可适配所有模版
2. 根据自身喜好DIY简历样式、字体，且提供实时分页预览，可根据比例调整 PDF 预览大小
3. 智能自动一页，简历内容不足或过多时，可通过动态计算后自动进行均匀拉伸或收缩
4. 动态调节简历元素中的边距问题，可扩展性高
**项目难点**：
1. 智能自动一页，收缩会出现内容重叠问题，用户体验差

## icon:comment 自我评价
1.良好的代码编写习惯，有代码洁癖，对代码质量要求较高，并具备良好的团队协作能力
2.热爱前端开发，扎实的前端基础功底，并具备较好的学习能力，对待某个问题喜欢探究背后的原理
3.对待事情认真负责，乐于助人，在校帮助同学解决过多种疑难杂症

## icon:school 毕业院校
::: start
### 中国矿业大学 - 工商管理 - 硕士
研究生学生会主席
...
:::
### 2018/09 ～ 2022/06
::: end
&nbsp;
::: start
### 南昌大学 - 工商管理 - 本科
本科学生会主席
....
:::
### 2018/09 ～ 2022/06
::: end
## icon:trophy  个人荣誉
- 英语CET4、CET6级
- 大学生创新创业大赛国家级立项
- 2021 - 2023 连续两年荣获国家励志奖学金
::: mainEnd`

export default {
  name: '简约通用模板',
  primaryColor: '#7E817D',
  primaryBackground: '#112236',
  img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2268dbf51af544b9b8202ada31526ca4~tplv-k3u1fbpfcp-watermark.image?',
  content
}
