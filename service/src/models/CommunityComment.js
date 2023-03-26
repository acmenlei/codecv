const { sequelize } = require("../connect/mysql");
const { Model, DataTypes } = require("sequelize");

class CommunityComment extends Model { }

CommunityComment.init({
  commentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  articleId: {
    type: DataTypes.INTEGER
  },
  content: {
    type: DataTypes.STRING
  },
  images: {
    type: DataTypes.STRING
  },
  authorId: {
    type: DataTypes.INTEGER
  },
  createTime: {
    type: DataTypes.DATE,
  },
  level: {
    type: DataTypes.INTEGER
  }
},
  {
    tableName: "community_comments",
    sequelize,
  })

module.exports = CommunityComment