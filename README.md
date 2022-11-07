# markdown-resume
A resume writing tool with markdown syntax, it can convert your markdown syntax to pdf format.
(safari is not supported at this time because safari has some printing limitations)

[The WebSite](https://acmenlei.github.io/markdown-resume-to-pdf/dist/)

# effect
This is a view of the resume editing page
![resume editor page](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7627440f4334084955fb7a8ce7b2e0b~tplv-k3u1fbpfcp-watermark.image?)

# syntax
There are a few new special syntax you may want to know about
## flex layout
```md
::: start
content...
:::
content...
:::
content...
::: end
```
The above content is converted to the following html format
```html
<div class="flex-layout">
  <div class="flex-layout-item">content...</div>
  <div class="flex-layout-item">content...</div>
  <div class="flex-layout-item">content...</div>
<div>
```
## head layout
Based on this you can specify the style of the elements in the head layout
```md
::: headStart
content....
::: headStart
```
The above content is converted to the following html format
```html
<div class="head-layout">
  content....
<div>
```
## icon
The icon must end with a space or a border character
```md
icon:github 
```
The above content is converted to the following html format
```html
<i class="iconfont icon-github"></i>
```
# over
This is a free resume editor markdown, any suggestions are welcome to submit pr, thank you.