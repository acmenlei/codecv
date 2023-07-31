const content = `## 小C - 高级前端开发工程师
::: start
icon:man 男 / 1995.08.01 / icon:phone 15507942706
icon:email coderleilei@163.com
:::
icon:home [https://coderlei.netlify.app](https://coderlei.netlify.app)
icon:juejin [掘金优秀创作者](https://juejin.cn/user/2586468969632445)

:::
icon:github [https://github.com/acmenlei](https://github.com/acmenlei)
icon:gitee [https://gitee.com/codeleilei](https://gitee.com/codeleilei)

::: end

## icon:school 教育经历
::: start
- **华东师范大学 （硕士）** \`985\` \`211\` \`双一流大学\`
:::
**2017.09 - 2020.07**
::: end

::: start
- **华东师范大学 （本科）** \`985\` \`211\` \`双一流大学\`
:::
**2013.09 - 2017.07**
::: end

## icon:work 工作经历
::: start
**icon:bilibili 上海哔哩哔哩科技有限公司** &nbsp;&nbsp;&nbsp;\`负责人\` \`组长\` \`带团队经验\`
:::
**前端开发工程师（2020.08 - 2023.07）**
::: end

- 负责优化主站 PC 端性能，主导推进了100+个优化case ，实现主站首次加载从**3s到0.5s左右**的极致优化
- 负责推进小组团队每周的 codeReview 缓解，给团队成员做技术分享10+次，并得到同事的一致认可
- 阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴

## icon:opensource 开源项目
::: start
icon:github **codecv** &nbsp;&nbsp;\`icon:star 400 +\`
:::
https://github.com/acmenlei/codecv
::: end
- **项目介绍**：可高度扩展、更加自定义的在线简历制作工具，支持markdown写法和word写法，数据同步无缝切换
- **线上地址**：[https://codeleilei.gitee.io/markdown2pdf](https://codeleilei.gitee.io/markdown2pdf)

::: start
icon:github **typenet** &nbsp;&nbsp; \`打字机效果\`
:::
https://github.com/acmenlei/typenet
::: end
- **项目介绍**：一款web打字机，模拟人为打字效果，支持异步链式调用，核心文件大小**1kb**
- **线上地址**：[https://acmenlei.gitee.io/typenet/dist](https://acmenlei.gitee.io/typenet/dist)

## icon:project 项目经历
::: start
**CodeCV Resume**
:::
**2022.09 - 至今**
::: end

- **技术栈**：\`Vue3\` \`TS\` \`Vite\` \`Puppeteer\` \`Serverless\`

- **项目简介**：该项目是一款可高度扩展的 Web 简历制作工具，它支持将用户编写的 Markdown 语法转换为 PDF，目前已经开源到社区，日活100+，GitHub/Gitee Star 440+

- **线上地址**：[https://codeleilei.gitee.io/markdown2pdf](https://codeleilei.gitee.io/markdown2pdf)

- **主要内容**：

  - 对 Markdown 进行词法分析（**需要支持图标、多列布局等**），将它解析为 HTML 结构后转 PDF 导出
  - 内置 **Makrdown 模式和内容模式**两种编辑方式，实现两种模式之间的数据同步，相互转换
  - 内置 TabBar 工具栏，支持多种可扩展功能，如智能一页、滚动跟随、边距调节器、自定义主题等

- **项目难点**：

  - 解决预览 A4 纸效果会出现的**边界内容截断**问题
  - 解决原生 Markdown 语法并不支持多列布局，图标等语法的问题
  - 解决两种编辑模式之间（Markdown 模式 & 内容模式）需要做到**数据同步**，无缝切换的问题

- **项目亮点**：Vite 打包优化将**生产环境包体积压缩了75%**，首屏加载从 **8s 左右 优化至 1.3s 左右**
## icon:trophy 获奖荣誉
- 2019 - 2020年国家奖学金 / 2020 - 2021年国家励志奖学金
- 2019年 CCPC 大学生程序设计大赛上海区预赛金牌

## icon:user 自我评价
自驱力强，对大前端有浓厚的兴趣，持续关注前端领域新玩具/新特性并投入项目使用，保持持续学习的心态 ...`

export default {
  name: '前端/校招/社招',
  font: 'Noto Sans SC',
  primaryColor: '#262D36',
  lineHeight: 21,
  primaryBackground: '#BF1341',
  img: 'https://z4a.net/images/2023/07/31/21campus_it.png',
  content
}
