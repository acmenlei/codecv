const jwt = require('jsonwebtoken');
const key = "xiuxiangpojiewodemiyao";

/**
 * 加密信息 && 有效时间
 * @param {Object} payload 
 * @param {String | Number | Date} expiresIn 
 */
function GenerateToken(payload, expiresIn) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, key, { expiresIn }, (err, hash) => {
            err ? reject(err.message) : resolve(hash)
        })
    })
}
/**
 * 需要验证的Token
 * @param {String} token 
 */
function VerifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err) => {
            if (err) {
                switch (err.name) {
                    case 'JsonWebTokenError': reject({ code: -999, msg: 'JsonWebTokenError' }); break;
                    case 'TokenExpiredError': reject({ code: -888, msg: 'TokenExpiredError' }); break;
                }
            } else {
                resolve({ code: 200, msg: 'SUCCESS' })
            }
        })
    })
}

module.exports = {
    GenerateToken,
    VerifyToken
}