const randomName = require("chinese-random-name")

function createaUser(username, password) {
  return {
    uid: Date.now(),
    nickName: randomName.generate(),
    avatar: 'https://avatars.githubusercontent.com/u/54731221?v=4',
    school: '五道口职业技术学院',
    username,
    password,
    professional: '前端开发',
    sex: '男',
    origin: '北京市',
    graduation: String(new Date().getFullYear())
  }
}

function createCommunityArticle({ title, content, professional, authorId, introduce }) {
  return {
    title, content, professional,
    articleId: Date.now(),
    hot: 0,
    authorId,
    introduce
  }
}

function createCommunityArticleComment({ content, articleId, level, authorId, images }) {
  return {
    content,
    articleId,
    level,
    commentId: Date.now(),
    authorId,
    images
  }
}

function createCommunityArticleCommentNotification({ commentId, authorId, articleId, replyArticleAuthorId, level, replyCommentLevel }) {
  return {
    level,
    replyCommentLevel, // 回复的那条评论是几级的
    read: 0, // 是否已读
    commentId, // 当前评论ID
    articleId, // 评论的是哪篇文章
    authorId, // 评论者的uid
    replyUserId: replyArticleAuthorId, // 谁发的文章被评论了 我好通过消息去通知他
    replyCommentId: null, // 没有回复任何人
    posterCommentId: null, // 没有上级 本身就是一级
  }
}

function createUpdateCommunityArticle({
  title, content, professional, introduce,
}) {
  return {
    title,
    content,
    professional,
    introduce
  }
}

function createCommunityArticleCommentReply({ content, articleId, level, authorId, posterCommentId, replyAuthorId, images }) {
  return {
    content,
    images,
    articleId,
    level,
    posterCommentId,
    replyAuthorId,
    commentId: Date.now(),
    authorId,
  }
}

function createCommunityArticleReplyNotification({ commentId, authorId, articleId,  posterCommentId, level, replyAuthorId, replyCommentId, replyCommentLevel }) {
  return {
    level,
    replyCommentLevel,
    read: 0, // 是否已读
    commentId, // 当前评论ID
    articleId, // 评论的是哪篇文章
    authorId, // 评论者的uid
    replyUserId: replyAuthorId, // 被评论的是谁 我好通过消息去通知他
    replyCommentId, // 被回复的那条评论
    posterCommentId, // 被回复的那条评论的masterID
  }
}

function createLikeInfo({ articleId, userId }) {
  return {
    likeId: Date.now(),
    articleId,
    userId
  }
}
module.exports = {
  createCommunityArticleCommentNotification,
  createCommunityArticleReplyNotification,
  createaUser,
  createCommunityArticle,
  createUpdateCommunityArticle,
  createCommunityArticleComment,
  createCommunityArticleCommentReply,
  createLikeInfo
}