const { sequelize } = require("../connect/mysql");
const { Model, DataTypes } = require("sequelize");

class User extends Model { }

User.init({
    uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
    },
    password: {
        type: DataTypes.TEXT,
    },
    sex: {
        type: DataTypes.CHAR,
    },
    graduation: {
        type: DataTypes.STRING,
    },
    school: {
        type: DataTypes.STRING,
    },
    nickName: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
    },
    professional: {
        type: DataTypes.STRING
    },
    origin: {
        type: DataTypes.STRING,
    },
    createTime: {
        type: DataTypes.DATE,
    },
    updateTime: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "users",
    sequelize,
});

module.exports = User;