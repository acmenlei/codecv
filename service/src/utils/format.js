const dayjs = require('dayjs');
const CommunityCommentReply = require('../models/CommunityCommentReply');
const CommunityComment = require('../models/CommunityComment');
const Community = require('../models/Community');
const Like = require('../models/Like');
const User = require('../models/User')

function formatTime(time) {
  return dayjs(time).format("YYYY-MM-DD HH:mm:ss")
}

async function queryArticleAuthorInfoSingle(article) {
  const authorId = article.authorId;
  const authorInfo = await User.findOne({ where: { uid: authorId } });
  delete authorInfo.dataValues.password;
  return Object.assign(article.dataValues, { authorInfo });
}

async function queryArticleAuthorInfo(articles) {
  let result = []
  for (let article of articles) {
    const authorId = article.authorId;
    const authorInfo = await User.findOne({ where: { uid: authorId } });
    delete authorInfo.dataValues.password;
    result.push(Object.assign(article.dataValues, { authorInfo }))
  }
  return Promise.resolve(result)
}

async function queryCommentAuthorInfo(comments) {
  let result = []
  for (let comment of comments) {
    const authorId = comment.authorId;
    const authorInfo = await User.findOne({ where: { uid: authorId } });
    let replyUserInfo = {};
    if (comment.replyAuthorId != null) {
      replyUserInfo = await User.findOne({ where: { uid: comment.replyAuthorId } });
    }
    delete authorInfo.dataValues.password;
    const params = { authorInfo, replyNickName: replyUserInfo.nickName };
    if (comment.replyAuthorId == null) {
      delete params.replyNickName;
    }
    result.push(Object.assign(comment.dataValues, params))
  }
  return Promise.resolve(result)
}

async function queryLikeCount(articles) {
  if (!Array.isArray(articles)) {
    const articleId = articles.articleId;
    const likes = await Like.findAll({ where: { articleId } });
    const data = [];
    for (let like of likes) {
      data.push(like.dataValues.userId)
    }
    articles.likes = data;
  } else {
    for (let article of articles) {
      const articleId = article.articleId;
      const likes = await Like.findAll({ where: { articleId } });
      const data = [];
      for (let like of likes) {
        data.push(like.dataValues.userId)
      }
      article.likes = data;
    }
  }
  return articles;
}

// 查询评论数量
async function queryCommentsCount(articles) {
  for (let article of articles) {
    const articleId = article.articleId;
    let total = 0;
    const { count } = await CommunityComment.findAndCountAll({ limit: 1, offset: 0, where: { articleId } })
    total += count;
    const { count: count2 } = await CommunityCommentReply.findAndCountAll({ limit: 1, offset: 0, where: { articleId } })
    total += count2;
    article.commentTotal = total;
  }
  return articles;
}

// 消息通知数据格式化 添加用户信息 以及回复内容
async function queryNotificationUserAndCommentInfo(notifications) {
  for (let notif of notifications) {
    const currentCommentId = notif.commentId,
      replyCommentId = notif.replyCommentId,
      authorId = notif.authorId, // 用这个来查回复者用户信息
      replyUserId = notif.replyUserId, // 用这个来查被回复人的信息
      articleId = notif.articleId; // replyCommentId没有的话就查文章ID
    const info = { replyContent: '' };

    if (!replyCommentId) {
      // 说明是发表评论 不是回复 查文章信息
      const title = await Community.findOne({ attributes: ['title', 'createTime'], where: { articleId } });
      info.replyContent = title;
    } else {
      // 是回复 查回复者和被回复者和评论的相关信息
      let content;
      if (notif.replyCommentLevel == 2) {
        content = await CommunityCommentReply.findOne({ attributes: ['content', 'createTime'], where: { commentId: replyCommentId } });
      } else {
        content = await CommunityComment.findOne({ attributes: ['content', 'createTime'], where: { commentId: replyCommentId } });
      }
      info.replyContent = content;
    }
    // 被回复者的信息
    info.replyUserInfo = await User.findOne({ attributes: { exclude: ['password'] }, where: { uid: replyUserId } });
    // 回复者的信息
    info.commentUserInfo = await User.findOne({ attributes: { exclude: ['password'] }, where: { uid: authorId } });
    // 回复内容
    let commentContent;
    if (notif.level == 2) {
      commentContent = await CommunityCommentReply.findOne({ attributes: ['content', 'createTime'], where: { commentId: currentCommentId } });
    } else {
      commentContent = await CommunityComment.findOne({ attributes: ['content', 'createTime'], where: { commentId: currentCommentId } });
    }
    info.commentContent = commentContent;
    info.posterCommentId = notif.posterCommentId || currentCommentId;
    notif.dataValues = Object.assign(info, { read: notif.read, articleId, commentId: currentCommentId, replyCommentId });
  }
  return notifications;
}

async function queryCommentPosition (comments, commentId, pageSize) {
  let data = [], pageNum = 0, position = 0, i = 0, n = comments.length;
  // console.log(n, '内容')
  for (; i < n; i++) {
    if(comments[i].commentId == commentId) {
      position = i % pageSize;
      break;
    }
    pageNum += i % pageSize == 0 ? 1 : 0;
  }
  if(pageNum == 0) 
    pageNum = 1;
  data = comments.slice((pageNum - 1) * pageSize, pageNum * pageSize);
  // console.log(i, pageNum, position);
  const commentRes = await queryCommentAuthorInfo(data)
  // 查找所有评论的子评论
  for (let comment of commentRes) {
    const children = await CommunityCommentReply.findAll({
      where: {
        posterCommentId: comment.commentId,
        articleId: comment.articleId
      }
    })
    comment.children = await queryCommentAuthorInfo(children);
  }
  return { data: commentRes, pageNum, position }
}

module.exports = {
  queryLikeCount,
  formatTime,
  queryCommentsCount,
  queryArticleAuthorInfo,
  queryCommentAuthorInfo,
  queryArticleAuthorInfoSingle,
  queryNotificationUserAndCommentInfo,
  queryCommentPosition
}