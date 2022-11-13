# markdown-resume
一款纯前端编写的 `markdown` 简历制作工具，可以把你编写的简历转换为 `PDF`，支持多种模板，你想要的这里都有.

[Github Page 简历编写地址](https://acmenlei.github.io/markdown-resume-to-pdf/dist/)

[Gitee Page 简历编写地址](https://codeleilei.gitee.io/markdown2pdf/)

# effect
以下是编辑界面的效果图
![resume editor page](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7627440f4334084955fb7a8ce7b2e0b~tplv-k3u1fbpfcp-watermark.image?)

# syntax
因为原生的`Markdown`语法编写出来的简历排版过于单一，所以在此基础上，我扩展了几种**布局语法**，在简历编写的过程中你可能会用到它，如下.
## Flex 布局
```md
::: start
content...
:::
content...
:::
content...
::: end
```
上面的语法将会被转化为下面的`HTML`结构
```html
<div class="flex-layout">
  <div class="flex-layout-item">content...</div>
  <div class="flex-layout-item">content...</div>
  <div class="flex-layout-item">content...</div>
<div>
```
## Head 布局
如果你需要针对个人信息栏做一些特殊处理，我提供了 Head 布局，同样你只需要包裹需要渲染的内容即可.
```md
::: headStart
content....
::: headStart
```
上面的语法将会被转化为下面的`HTML`结构
```html
<div class="head-layout">
  content....
<div>
```
## icon
为了美化简历，我提供了内置图标，你可以通过以下语法进行使用.
```md
icon:github 
```
上面的语法将会被转化为下面的`HTML`结构
```html
<i class="iconfont icon-github"></i>
```
# contribution
目前的模板比较少，欢迎提 `PR` 贡献你觉得好看的模板给我，非常感谢