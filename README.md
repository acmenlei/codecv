# markdown-resume
A resume writing tool with markdown syntax, it can convert your markdown syntax to pdf format.

(To try)[https://acmenlei.github.io/markdown-resume-to-pdf/dist/]

# syntax
There are a few new special syntax you may want to know about
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

# over
This is a free resume editor markdown, any suggestions are welcome to submit pr, thank you.