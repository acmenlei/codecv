/* 后台状态统一管理 */
const TOKEN_IS_UNDEFINED = '请先登录再来发言!';
const TOKEN_IS_EXPIRESE = '登录信息已过期，请重新登陆后操作!';
const REGISTER_FAILURE = '账户信息注册失败!';
const REGISTER_IS_EXISTS = '注册账户已经存在请重新注册!';
const REGISTER_OK = '注册成功!';
const LOGIN_OUT = '退出登陆成功!';
const NETWORK_ERROR = '网络出错!';
const LOGIN_OK = '登陆成功!';
const LOGIN_FAILED = '登陆失败, 密码错误!';
const USERNAME_IS_NULL = '登陆账户不存在!';
const SEARCH_OK = '查询成功';
const SEARCH_ERROR = '查询失败';
const OPERATOR_OK = '操作成功'
const OPERATOR_ERROR = '操作失败 请检查网络'
const SEARCHDATA_IS_NULL = '数据不存在, 请检查后重新尝试'
const LOGIN_IS_NULL = '未登录'
const MESSAGE_PUBLISH_OK = '你的留言发表成功啦'
const CONTENT_PUBLISH_OK = '你的面经发表成功啦，谢谢你的分享～'
const CONTENT_UPDATE_OK = ' 面经信息已修改～'
const HAS_LIKED = '你已经为它点过赞了～'
const IS_NO_EXIST = '不存在的数据～'
const PWD_UPDATE_OK = '登录状态失效了，请重新登录！'
const PASSWORD_VAILD = '密码错误, 请重新输入!'

module.exports = {
    TOKEN_IS_UNDEFINED,
    TOKEN_IS_EXPIRESE,
    REGISTER_FAILURE,
    REGISTER_OK,
    LOGIN_OUT,
    NETWORK_ERROR,
    LOGIN_OK,
    LOGIN_FAILED,
    USERNAME_IS_NULL,
    REGISTER_IS_EXISTS,
    SEARCH_OK,
    SEARCH_ERROR,
    OPERATOR_OK,
    OPERATOR_ERROR,
    SEARCHDATA_IS_NULL,
    LOGIN_IS_NULL,
    MESSAGE_PUBLISH_OK,
    CONTENT_PUBLISH_OK,
    CONTENT_UPDATE_OK,
    HAS_LIKED,
    IS_NO_EXIST,
    PWD_UPDATE_OK,
    PASSWORD_VAILD
}