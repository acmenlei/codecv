const { sequelize } = require("../connect/mysql");
const { Model, DataTypes } = require("sequelize");

class Like extends Model { }

Like.init(
  {
    likeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    userId: {
      type: DataTypes.INTEGER
    },
    articleId: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "likes",
    sequelize,
  }
);

module.exports = Like;
