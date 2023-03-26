const express = require("express");
const CommunityComment = require("../models/CommunityComment");
const CommunityCommentReply = require("../models/CommunityCommentReply");
const Notification = require("../models/Notification");

const router = express.Router()
const Tip = require("../common/tip/tip");
const {
  createCommunityArticleComment,
  createCommunityArticleCommentReply,
  createCommunityArticleCommentNotification,
  createCommunityArticleReplyNotification } = require('../utils/creator')
const { queryCommentAuthorInfo, queryCommentPosition } = require('../utils/format');
const { Op, or } = require("sequelize");

router.post("/queryCommentsByArticleId", async (req, res) => {
  const { articleId, pageSize, pageNum } = req.body
  try {
    const { rows, count } = await CommunityComment.findAndCountAll({
      limit: Number(pageSize),
      offset: (pageNum - 1) * pageSize,
      where: { articleId },
      order: [['commentId', 'DESC']]
    });
    const comments = await queryCommentAuthorInfo(rows)
    let lastCount = count;
    // 查找所有评论的子评论
    for (let comment of comments) {
      const children = await CommunityCommentReply.findAll({
        where: {
          posterCommentId: comment.commentId,
          articleId
        }
      })
      lastCount += children.length;
      comment.children = await queryCommentAuthorInfo(children);
    }
    return res.json({ code: 200, msg: Tip.SEARCH_OK, data: rows, commentsTotal: count, total: lastCount })
  } catch (e) {
    // 网络错误
    console.log(e.message)
    return res.json({ code: -99, msg: Tip.NETWORK_ERROR, e })
  }
})
// 一级评论
router.post("/publish", async (req, res) => {
  const comment = createCommunityArticleComment(req.body);
  // 生成一条通知信息
  const notification = createCommunityArticleCommentNotification(Object.assign(req.body, { commentId: comment.commentId }));
  try {
    const data = await CommunityComment.create(comment);
    res.json({ code: 200, data, msg: Tip.MESSAGE_PUBLISH_OK });
    await Notification.create(notification);
  } catch (e) {
    console.log(e)
    return res.json({ code: -99, msg: Tip.NETWORK_ERROR })
  }
})


// 二级留言接口
router.post("/reply", async (req, res) => {
  const commentReply = createCommunityArticleCommentReply(req.body);
  // 生成一条通知信息
  const notification = createCommunityArticleReplyNotification(Object.assign(req.body, { commentId: commentReply.commentId }));
  try {
    const data = CommunityCommentReply.create(commentReply);
    res.json({ code: 200, data, msg: Tip.MESSAGE_PUBLISH_OK });
    await Notification.create(notification)
  } catch {
    // 网络出错的情况
    return res.json({ code: -99, msg: Tip.NETWORK_ERROR })
  }
})


// 删除留言
router.post("/remove", async (req, res) => {
  const { commentId, level, articleId } = req.body;
  try {
    let count = 0
    if (level == 1) {
      // 删除一级评论(每条评论的id是唯一的)
      count = await CommunityComment.destroy({ where: { commentId, articleId } });
    } else {
      // 删除二级评论
      count = await CommunityCommentReply.destroy({ where: { commentId, articleId } });
    }
    if (!count) {
      return res.json({ code: -998, msg: Tip.SEARCHDATA_IS_NULL })
    }
    if (level == 1) {
      // 删除子集
      count += await CommunityCommentReply.destroy({ where: { posterCommentId: commentId, articleId } })
    }
    // 删除通知
    await Notification.destroy({
      where: {
        [Op.or]: [
          { commentId },
          { posterCommentId: commentId }
        ]
      }
    })
    // await Notification.destroy({ where: { posterCommentId: commentId } })
    return res.json({ code: 200, count, msg: Tip.OPERATOR_OK })
  } catch (e) {
    console.log(e)
    return res.json({ code: -999, msg: Tip.OPERATOR_ERROR })
  }
})

router.post('/queryCommentPosition', async (req, res) => {
  const { commentId, articleId, pageSize } = req.body;
  try {
    const comments = await CommunityComment.findAll({ where: { articleId }, order: [['commentId', 'DESC']] });
    const data = await queryCommentPosition(comments, commentId, pageSize)
    return res.json({ code: 200, msg: Tip.OPERATOR_OK, data })
  } catch (e) {
    console.log(e)
    return res.json({ code: -999, msg: Tip.OPERATOR_ERROR })
  }
})
module.exports = router