const express = require('express');
const { resolve } = require("path");
const cors = require('cors');
const app = express();
const { instance } = require('./authentication/cookie-session');

const ArticleRouter = require("./routes/community")
const UserRouter = require("./routes/user")
const CommunityCommentRouter = require("./routes/communityComment")
const UploadRouter = require("./routes/upload")
const NotificationRouter = require("./routes/notification");

app.use(instance); // 配置cookie
app.use(express.urlencoded({ extended: false })); // 接收post请求数据
app.use(express.json());
app.use("/source", express.static(resolve(__dirname, "public")))
app.use("/docs", express.static(resolve(__dirname, "../", "docs")))
app.use("/upload", express.static(resolve(__dirname, "upload")));

// 跨域配置 （本地开发、内网穿透、码云pages服务）
app.use(cors({
    origin: ['http://codeleilei.gitee.io', 'https://codeleilei.gitee.io','http://localhost:5173'],
    credentials: true,
}));

// 配置前台路由
app.use('/community', ArticleRouter);
app.use('/user', UserRouter);
app.use('/communityComment', CommunityCommentRouter);
app.use('/fileUpload', UploadRouter);
app.use('/notification', NotificationRouter);

// injectSocketIO(io);

app.listen(3001);
