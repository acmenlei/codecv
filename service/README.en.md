<div style="font-size: 1.5rem;">
  <a href="./README.md">中文</a> |
  <a href="./README.en.md">English</a>
</div>
</br>

## Introduction
> Markdown resume platform server, `Nodejs` prepared. Api documentation check please visit http://localhost:9001/docs after the service start.

- Api documentation: `/docs`
- authentication module (jwt&crypto-js&cookie&session): `src/authentication`
- common logic processing: `src/common`
- Interceptor logic processing: `src/intercepter`
- Scheduled task: src/schedule
- Filter interceptor whiteList: src/whiteList
- Database model: `src/models
- Management system routing interface: `src/routes`
- Front-end routing interface: src/receptionRoutes
- Import file: `src/index`
- permission related logic processing: `src/permission`

## Configure cross-domain
> In the entry file (` index.js`), find the following
```js
app.use(cors({
Origin: `http://localhost:8080`, // here is your address, the front end of the value can be a string | Array < string >
credentials: true // Allows cookies to be carried across domains
})) // Cross-domain
```

## The test environment starts

### Installation dependency

```shell
pnpm install
```

### start
```shell
pnpm start
```

## Project Startup Instructions (please read first)
1. The project depends on `redis`, please start the project` redis` first, otherwise an error will be reported
2. The database structure is under the `/sql` folder