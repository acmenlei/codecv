const { sequelize } = require("../connect/mysql");
const { Model, DataTypes } = require("sequelize");

class CommunityCommentReply extends Model { }

CommunityCommentReply.init({
  commentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  },
  articleId: {
    type: DataTypes.INTEGER
  },
  content: {
    type: DataTypes.TEXT,
  },
  level: {
    type: DataTypes.INTEGER
  },
  images: {
    type: DataTypes.STRING
  },
  posterCommentId: {
    type: DataTypes.INTEGER,
  },
  replyAuthorId: {
    type: DataTypes.INTEGER,
  },
  authorId: {
    type: DataTypes.INTEGER
  },
  createTime: {
    type: DataTypes.DATE,
  },
},
  {
    tableName: "community_comments_reply",
    sequelize,
  })

module.exports = CommunityCommentReply