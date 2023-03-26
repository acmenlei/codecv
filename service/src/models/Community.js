const { sequelize } = require("../connect/mysql");
const { Model, DataTypes } = require("sequelize");

class Community extends Model { }

Community.init(
  {
    articleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.TEXT,
    },
    authorId: {
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.TEXT,
    },
    hot: {
      type: DataTypes.INTEGER,
    },
    professional: {
      type: DataTypes.STRING,
    },
    createTime: {
      type: DataTypes.DATE,
    },
    updateTime: {
      type: DataTypes.DATE,
    },
    introduce: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "community",
    sequelize,
  }
);

module.exports = Community;
