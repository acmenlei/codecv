# markdown-resume-to-pdf

<div style="font-size: 1.5rem;">
  <a href="./README.md">中文</a> |
  <a href="./README.en.md">English</a>
</div>
</br>

[Online Editor 1](http://codeleilei.gitee.io/markdown2pdf/) [Online Editor 2](https://acmenlei.github.io/markdown-resume-to-pdf/dist/)

> Declaration: This project is released on Github/Gitee, based on the MIT license, free and for open source learning use. And there will be no behavior of selling accounts, paid services, discussion groups, discussion groups, etc. Be careful not to be deceived.

<p>Resume template & Light Mode<p>
<img style="max-width: 1000px" src="./docs/templates.webp" alt="Template" />
<p>Resume editor page & & Dark Mode<p>
<img style="max-width: 1000px" src="./docs/editor.webp" alt="Editor" />

- [Introduction](#introduction)

- [Features to be implemented](#features-to-be-implemented)

- [Prerequisites](#prerequisites)

- [Node](#node)

- [PNPM](#pnpm)

- [Install Dependencies](#install-dependencies)

- [Running in Test Environment](#run-in-development-environment)

- [Environment Variables](#environment-variables)

- [Build](#build)

- [Common Issues](#common-issues)

- [CONTRIBUTING](#contributing)

- [Sponsor](#sponsor)

## Introduction

> A markdown resume creation tool that can convert your written resume to PDF and support multiple templates, completely free.

Advantages:

1. Traditional resume creation method is through UI interface to fill in the form/drag and drop to generate the resume, the process is more complex and tedious. The resume layout based on markdown writing will be very easy to expand, and it is easy to operate. In addition to the commonly used markdown syntax, multiple column layout (Flex) syntax has been added, and the usage will be introduced later.

2. If you are not satisfied with the design of the resume, you can completely change the resume matching by yourself, greatly improving the scalability of the resume.

3. The resume is smartly one page, solving the embarrassing situation caused by too little or too much resume content.

4. Provide a resume community to share the experience during the job search process (the original intention was to establish a platform that combines resumes and interview experiences).

## Features to be implemented

[✓] Mobile adaptation

[✓] Template creation (continuously updated...)

## Prerequisites

> Environment needed before starting the project

### Node

node requires ^16 || ^18 || ^19, it is recommended to use nvm to manage multiple local node versions

```shell
node -v
```

### PNPM

If you have not installed pnpm before

```shell
npm install pnpm -g
```

## Install dependencies

```shell
pnpm install
```

## Run in development environment

```shell
pnpm dev
```

## Environment Variables

> `VITE_BASE_URL` Backend request address, optional (if docking the community API, if you don't want to access the community function, you don't need to fill it in)

## Build

```shell
pnpm build
```

Finally, deploy the dist directory to the server

## Common issues

Q: How to write multi-column layout?

A:

```html
::: start content ::: content ::: content ::: end
<!-- The above syntax will be converted to the following HTML structure (three-column layout) -->
<div class="flex-layout">
  <div class="flex-layout-item">content</div>
  <div class="flex-layout-item">content</div>
  <div class="flex-layout-item">content</div>
  <div></div>
</div>
```

Q: How do I add an icon?

A:

```html
icon:github
<!-- The above syntax will be converted to the following HTML structure -->
<i class="iconfont icon-github"></i>
```

Q: How do I add Spaces?

A: Write `&nbsp` in the editor;

Q: How to write a personal information bar?

A:

```html
::: headStart content ::: headEnd
<!-- The above syntax will be converted to the following HTML structure -->
<div class="head-layout">
  content
  <div></div>
</div>
```

## CONTRIBUTING

Please read before contributing[Contribution Guide](./CONTRIBUTING.md)

## Sponsor

If you think this project is helpful to you and circumstances permit, you can give me a little support. In short, thank you very much for your support ~

<div style="display: flex; gap: 20px;">
	<div style="text-align: center">
		<p>WeChat</p>
		<img style="max-width: 165px" src="./docs/wechat.jpg" alt="WeChat" />
	</div>
	<div style="text-align: center">
		<p>Alipay</p>
		<img style="max-width: 150px" src="./docs/alipay.jpg" alt="Alipay" />
	</div>
</div>

## License

MIT © [Coderlei](./license)
