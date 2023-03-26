/*
 Navicat Premium Data Transfer

 Source Server         : reusme_community
 Source Server Type    : MySQL
 Source Server Version : 80027 (8.0.27)
 Source Host           : localhost:3306
 Source Schema         : resume_community

 Target Server Type    : MySQL
 Target Server Version : 80027 (8.0.27)
 File Encoding         : 65001

 Date: 02/02/2023 13:28:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for community
-- ----------------------------
DROP TABLE IF EXISTS `community`;
CREATE TABLE `community` (
  `articleId` bigint NOT NULL AUTO_INCREMENT,
  `content` text,
  `title` varchar(20) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `authorId` bigint DEFAULT NULL,
  `professional` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hot` bigint DEFAULT '0',
  `introduce` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`articleId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1670323358348 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for community_comments
-- ----------------------------
DROP TABLE IF EXISTS `community_comments`;
CREATE TABLE `community_comments` (
  `commentId` bigint NOT NULL,
  `articleId` bigint NOT NULL,
  `content` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `level` int DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `authorId` bigint DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`commentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for community_comments_reply
-- ----------------------------
DROP TABLE IF EXISTS `community_comments_reply`;
CREATE TABLE `community_comments_reply` (
  `commentId` bigint NOT NULL,
  `articleId` bigint NOT NULL,
  `content` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `level` int DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `posterCommentId` bigint DEFAULT NULL,
  `replyAuthorId` bigint DEFAULT NULL,
  `authorId` bigint DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`commentId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for community_notification
-- ----------------------------
DROP TABLE IF EXISTS `community_notification`;
CREATE TABLE `community_notification` (
  `commentId` bigint NOT NULL,
  `replyUserId` bigint DEFAULT NULL,
  `articleId` bigint DEFAULT NULL,
  `authorId` bigint DEFAULT NULL,
  `replyCommentId` bigint DEFAULT NULL,
  `read` int DEFAULT NULL,
  `posterCommentId` bigint DEFAULT NULL,
  `level` int DEFAULT NULL,
  `replyCommentLevel` int DEFAULT NULL,
  PRIMARY KEY (`commentId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes` (
  `likeId` bigint NOT NULL,
  `userId` bigint NOT NULL,
  `articleId` bigint NOT NULL,
  PRIMARY KEY (`likeId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` bigint NOT NULL,
  `username` varchar(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `sex` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `school` varchar(20) DEFAULT NULL,
  `graduation` varchar(4) DEFAULT NULL,
  `nickName` varchar(16) DEFAULT NULL,
  `professional` varchar(10) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `origin` varchar(10) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

SET FOREIGN_KEY_CHECKS = 1;
