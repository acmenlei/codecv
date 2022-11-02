# markdown-resume
A resume writing tool with markdown syntax, it can convert your markdown syntax to pdf format.

[To try](https://acmenlei.github.io/markdown-resume-to-pdf/dist/)

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