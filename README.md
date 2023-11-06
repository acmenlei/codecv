# codecv

只 `fork` 不 `star` 真的很没品，这是一款使用 `markdown` 制作简历的工具，它可以将你编写的 `markdown` 简历转换为 `PDF`。

<div style="font-size: 1.5rem;">
  <a href="./README.md">中文</a> |
  <a href="./README.en.md">English</a>
</div>
</br>

[线上地址 1](https://codecv.top) [线上地址 2](https://codeleilei.gitee.io/markdown2pdf)

> 声明：此项目发布于 GitHub/Gitee，免费且作为开源学习使用，使用业余时间进行持续开发，部署请在网站显眼位置注明原作者及原仓库地址，未经作者允许请勿用于商业用途！

## 😄 Docker 快速部署

你可以直接使用我已经构建好的镜像来运行

```sh
docker run -d -t -p 8080:80 --name codecv --restart=always docker.io/wenyang0/codecv:latest
```

或者，如果您愿意，也可以自己手动编译。

```sh
#下载代码
git clone https://github.com/acmenlei/codecv.git

#docker 编译
cd codecv/
docker build -t codecv:v1 .

#启动服务
docker run -d -t -p 8080:80 --name codecv --restart=always codecv:v1
```

最后,打开你的浏览器访问服务的地址 http://serverIP:8080 即可（模板请自行编写与设计）



## 😄 在本地安装调试

```shell
# 安装yarn包(有一个包需要使用yarn命令才能安装)
npm i -g yarn

#安装包
yarn install

#执行yarn install如果报错： yarn:无法加载文件 C\Users\talen\...\yarn.ps1
#	打开Power Shell
# 执行 set-ExecutionPolicy RemoteSigned 
set-ExecutionPolicy RemoteSigned 	
#选择 A或者Y 解除脚本不信任 重新执行 yarn install

#启动项目
npm run dev  或 yarn run dev
```

## 🤩 效果预览

<p>简历模板</p>

<img style="max-width: 1000px" src="./docs/templates.webp" alt="模板" />

<p>简历编辑和暗黑主题</p>

<img style="max-width: 1000px" src="./docs/editor.webp" alt="编辑页" />

<p>内置多种矢量图标</p>

<img style="max-width: 1000px" src="./docs/iconfont.webp" alt="矢量图标" />

## ✊🏻 待实现功能

[✓] 移动端适配

[✓] 内容模式体验优化

[✓] 模板设计（持续更新... 欢迎为仓库贡献模板）

## 🤔 常见问题

[语法问题请查看使用指南](https://codeleilei.gitee.io/markdown2pdf/#/syntax/helper)

**Q**: 为什么导出 `PDF` 后乱码？

**A**: 可能是缓存了旧的字体，请点击预览顶部工具栏中的重置简历内容进行重置，当然重置前请保证内容你已经保存

**Q**: 为什么导出失败？

**A**: 目前服务部署在 `netlify serverless` 服务上，因为是国外服务器，访问容易出错，请多尝试几遍，当然你也可以使用本地导出 `PDF` 替换

## 🙏 赞助

如果你觉得这个项目对你有帮助，并且情况允许的话，可以给我一点点支持，总之非常感谢支持～

<div style="display: flex; gap: 20px;">
	<div style="text-align: center">
		<p>WeChat</p>
		<img style="width: 165px" src="./docs/wechat.jpg" alt="微信" />
	</div>
	<div style="text-align: center">
		<p>Alipay</p>
		<img style="width: 150px" src="./docs/alipay.jpg" alt="支付宝" />
	</div>
</div>

## License

MIT © [Coderlei](./license)
