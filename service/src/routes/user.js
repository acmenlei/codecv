const express = require('express');
const User = require('../models/User');
// const Community = require('../models/Community');
// const CommunityComment = require('../models/CommunityComment');
// const CommunityCommentReply = require('../models/CommunityCommentReply');
const router = express.Router()
const Tip = require("../common/tip/tip");
const { AESparse, AES } = require('../authentication/hash');
const { createaUser } = require('../utils/creator');
const { GenerateToken } = require("../authentication/token");
const { tokenVerify, setToken, deleteToken } = require('../intercepter/token')

/**
 * @api {POST} /user/login 登陆后台
 * @apiDescription 前台用户登录
 * @apiName login
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiSamplereq /admin/login
 * @apiGroup User
 * @apiVersion 1.0.0
 */
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const dataValues = await User.findOne({ where: { username } });
    if (dataValues != null) {
      if (AESparse(dataValues.password) === password) {
        try {
          const token = await GenerateToken({ username }, "3h");
          setToken(token, username);
          delete dataValues.password;
          // 今日登录人数增加
          return res.json({ code: 200, token, data: dataValues, msg: Tip.LOGIN_OK });
        } catch (error) {
          return res.json({ code: -999, msg: Tip.NETWORK_ERROR });
        }
      } else {
        return res.json({ code: -999, msg: Tip.LOGIN_FAILED });
      }
    } else {
      // 用户不存在
      return res.json({ code: -999, msg: Tip.USERNAME_IS_NULL });
    }
  } catch (e) {
    return res.json({ code: -999, msg: Tip.LOGIN_FAILED });
  }
})

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const isExist = await User.findOne({ where: { username } });
    if (isExist) {
      return res.json({ err: -999, msg: Tip.REGISTER_IS_EXISTS });
    }
    // 可以注册
    const newUser = createaUser(username, AES(password));
    await User.create(newUser);
    delete newUser.password;
    const token = await GenerateToken({ username }, "3h");
    setToken(token, username);
    return res.json({ code: 200, token, data: newUser, msg: Tip.REGISTER_OK });
  } catch (e) {
    return res.json({ code: -95, e, msg: Tip.REGISTER_FAILURE })
  }
})

/**
 * @api {POST} /user/verify 验证是否登录
 * @apiDescription 前台用户是否登录
 * @apiName verify
 * @apiParam {String} username 用户名
 * @apiSamplereq /user/verify
 * @apiGroup User
 * @apiVersion 1.0.0
 */
router.post("/verify", async (req, res) => {
  const { token, username } = req.body;
  try {
    await tokenVerify(token, username);
    const data = await User.findOne({ where: { username } });
    delete data.password;
    return res.json({ code: 200, data, msg: Tip.LOGIN_OK });
  } catch (reason) {
    return reason.msg === 'TokenExpiredError' ?
      res.json({ code: -888, msg: Tip.TOKEN_IS_EXPIRESE }) : // token过期的情况
      res.json({ code: -999, msg: Tip.TOKEN_IS_UNDEFINED }); // token错误的情况
  }
})

router.post('/queryUserById', async (req, res) => {
  const { uid } = req.body;
  try {
    const data = await User.findOne({ where: { uid } });
    delete data.password;
    return res.json({ code: 200, data, msg: Tip.LOGIN_OK });
  } catch (err) {
    return res.json({ code: -999, msg: Tip.SEARCH_ERROR });
  }
})

router.post("/logout", (req, res) => {
  const { username } = req.body;
  deleteToken(username);
  return res.json({ code: 200, msg: Tip.LOGIN_OUT });
})

// 更新用户信息
router.post('/update', async (req, res) => {
  const { uid, nickName, avatar, professional, school, graduation, sex, origin } = req.body
  try {
    const count = await User.update({ nickName, avatar, professional, school, graduation, sex, origin }, { where: { uid } })
    // 更新其他表里面的信息
    if (!count) {
      return res.json({ code: -98, msg: Tip.SEARCHDATA_IS_NULL })
    }
    return res.json({ code: 200, msg: Tip.OPERATOR_OK })
  } catch (e) {
    return res.json({ code: -99, msg: e.message || Tip.NETWORK_ERROR })
  }
})

// 修改密码
router.post('/pwdUpdate', async (req, res) => {
  const { nPassword, oPassword, username } = req.body
  // 验证旧密码是否一致
  try {
    const dataValues = await User.findOne({ where: { username }, attributes: ['password'] })
    if (!dataValues) {
      return res.json({ code: -99, msg: Tip.SEARCHDATA_IS_NULL })
    }
    // 验证是否正确
    if (AESparse(dataValues.password) === oPassword) {
      // 进行修改
      await User.update({ password: AES(nPassword) }, { where: { username } })
      // 销毁当前登录状态
      deleteToken(username);
      return res.json({ code: 200, msg: Tip.PWD_UPDATE_OK })
    } else {
      return res.json({ code: -999, msg: Tip.PASSWORD_VAILD })
    }
  } catch {
    return res.json({ code: -99, msg: Tip.NETWORK_ERROR })
  }
})

module.exports = router