const TOKEN = 'token'
// const USERNAME = 'username'
const RedisClient = require("../connect/redis")
const { VerifyToken } = require('../authentication/token')

// 验证token是否合格
function tokenVerify(token, username) {
    console.log(username, TOKEN)
    return new Promise((resolve, reject) => {
        try {
            RedisClient.get(`${username}:${TOKEN}`, async(err, reply) => {
                if (reply == null) { // 当从redis查询的token为null
                    reject({ msg: err }) // 那么他就是非法操作
                } else {
                    if (token === reply) { // 传进来的和当前的token一致
                        try {
                            await VerifyToken(token) // 继续验证，验证通过 code=200
                            resolve()
                        } catch (e) {
                            reject(e)
                        }
                    }
                    reject({ msg: "错误的token" }) // 否则验证不通过
                }
            })
        } catch (error) {
            resolve(true) // 出错也抛出一个true
        }
    })

}

/* token令牌设置操作并且允许前端获取自定义请求头 */
function setToken(hash, username) {
    RedisClient.SETEX(`${username}:${TOKEN}`, 60 * 60 * 3, hash) // 设置有效时间3小时
}

function deleteToken(username) {
    RedisClient.DEL(`${username}:${TOKEN}`); // 删除token, 客户端的token将失效
}

module.exports = {
    tokenVerify,
    setToken,
    deleteToken,
}