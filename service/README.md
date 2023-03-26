<div style="font-size: 1.5rem;">
  <a href="./README.md">中文</a> |
  <a href="./README.en.md">English</a>
</div>
</br>

## 介绍
> Markdown简历平台的服务端，`Nodejs`编写. `Api`文档查看请在服务启动后访问http://localhost:9001/docs

- Api文档: `/docs`
- 鉴权模块(jwt&crypto-js&cookie&session): `src/authentication`
- 公共逻辑处理: `src/common`
- 拦截器逻辑处理: `src/intercepter`
- 定时任务: `src/schedule`
- 过滤拦截器白名单: `src/whiteList`
- 数据库模型: `src/models`
- 管理系统路由接口: `src/routes`
- 前端路由接口: `src/receptionRoutes`
- 入口文件: `src/index`
- 权限相关逻辑处理: `src/permission`

## 配置跨域
> 在入口文件(`index.js`)中,找到以下内容
```js
app.use(cors({
    origin: 'http://localhost:8080', // 此处为你的前端地址，值可以是string | Array<string>
    credentials: true // 允许跨域携带cookie
})) // 跨域
```

## 测试环境启动

### 安装依赖
```shell
pnpm install
```
### 启动
```shell
pnpm start
```

## 项目启动说明（请先阅读）
1. 项目依赖`redis`，启动项目请先去启动`redis`，否则报错
2. 数据库结构在`/sql`文件夹下面
