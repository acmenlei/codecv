const COOKIE_SESSION = require('express-session')

const instance = COOKIE_SESSION({
    name: "express-app-server",
    keys:["reception, login", "users"],
    maxAge: 60 * 60 * 1000 * 24, // 有效期一天
    httpOnly: true,
    resave: false,
    secret: "receptionloginuserogblogxxxxaaaaawwwww",
    saveUninitialized: true
})

module.exports = {
    instance
}