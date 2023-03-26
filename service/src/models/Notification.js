const { sequelize } = require("../connect/mysql");
const { Model, DataTypes } = require("sequelize");

class Notification extends Model { }

// read: 0, // 是否已读
// commentId, // 当前评论ID
// articleId, // 评论的是哪篇文章
// authorId, // 评论者的uid
// replyUserId: replyArticleAuthorId, // 谁发的文章被评论了 我好通过消息去通知他
// replyCommentId: null, // 没有回复任何人
// posterCommentId: null, // 没有上级 本身就是一级
Notification.init(
  {
    commentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    read: {
      type: DataTypes.INTEGER
    },
    level: {
      type: DataTypes.INTEGER
    },
    replyCommentLevel: {
      type: DataTypes.INTEGER
    },
    articleId: {
      type: DataTypes.INTEGER
    },
    authorId: {
      type: DataTypes.INTEGER
    },
    replyUserId: {
      type: DataTypes.INTEGER
    },
    replyCommentId: {
      type: DataTypes.INTEGER
    },
    posterCommentId: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "community_notification",
    sequelize,
  }
);

module.exports = Notification;
