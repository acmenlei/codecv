const crypto = require('crypto-js')
const secret = "jiunigehanpiyexiangpojiewodedaima"

// AES加盐密码
function AES(target) {
    return crypto.AES.encrypt(target, secret).toString()
}

// AES密码解析
function AESparse(hash) {
    return crypto.AES.decrypt(hash, secret).toString(crypto.enc.Utf8)
}

module.exports = {
    AES, AESparse
}