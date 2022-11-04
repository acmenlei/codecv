export default `# 介绍
如果你想编写一款**比较好的简历排版**，那你可以学习一下下面这些语法，放心，不会花费多少时间.
## 弹性布局
它会被渲染为带\`flex-layout\`类名的弹性盒，而在\`:::\`中间的内容将会被渲染为一个弹性元素, 你可以使用它来构造多列布局，如下.
\`\`\`html
::: start
content...
:::
content...
:::
content...
::: end
\`\`\`
上面的 \`Markdown\` 语法将会被转化为下面的 \`HTML\` 代码.
\`\`\`html
<div class="flex-layout">
  <div class="flex-layout-item">content...</div>
  <div class="flex-layout-item">content...</div>
  <div class="flex-layout-item">content...</div>
<div>
\`\`\`
## 个人信息布局
如果你想单独对简历头部的个人信息进行排版，那你可以考虑使用 \`Head\` 布局，针对性的对个人信息进行样式设置，和弹性布局差不多，你需要使用 \`:::\` 语法对其进行分割，并给出开始和结束标志.
\`\`\`html
::: headStart
content....
::: headStart
\`\`\`
上面的 \`Markdown\` 语法将会被转化为下面的 \`HTML\` 代码.
\`\`\`html
<div class="head-layout">
  content....
<div>
\`\`\`
## 内置图标
我也内置了一些图标，如果你想使用它，你可以通过以下语法使用，**建议使用空格结尾**.
\`\`\`html
icon:github 
\`\`\`
上面的 \`Markdown\` 语法将会被转化为下面的 \`HTML\` 代码.
\`\`\`html
<i class="iconfont icon-github"></i>
\`\`\`
# over
以上就是该简历所支持的一些特殊语法，其他的语法与 原生\`Markdown\` 同步，**如果你有不错的想法**，可以向我提出，\`欢迎给这个项目提供不同的简历模板\`，感谢. [仓库地址](https://github.com/acmenlei/markdown-resume-to-pdf)`