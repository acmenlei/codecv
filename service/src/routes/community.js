const express = require("express");
const Community = require("../models/Community");
const Like = require("../models/Like");
const CommunityComment = require("../models/CommunityComment");
const CommunityCommentReply = require("../models/CommunityCommentReply");
const router = express.Router()
const Tip = require("../common/tip/tip");
const { Op } = require('../connect/mysql');
const { createCommunityArticle, createUpdateCommunityArticle, createLikeInfo } = require("../utils/creator")
const { queryArticleAuthorInfo, queryArticleAuthorInfoSingle, queryLikeCount, queryCommentsCount, formatTime } = require('../utils/format');
/**
 * @api {POST} /community/list 获取文章列表
 * @apiDescription 权限验证(将token和username携带在请求头)
 * @apiName list
 * @apiParam {Number} pageSize 每页数据条数
 * @apiParam {Number} pageNum 第几页
 * @apiParam (可选) {String} category 模糊查询类别（可选）
 * @apiParam (可选) {String} title 模糊查询标题（可选）
 * @apiSampleRequest /community/list
 * @apiGroup Community
 * @apiVersion 1.0.0
 */
router.post("/list", async (request, response) => {
    // 每页数据 方向
    const { pageSize, pageNum, professional, keyword, tab, uid } = request.body;
    try {
        const filterCondition = {
            professional,
            authorId: uid,
            [Op.or]: [
                { title: { [Op.like]: `%${keyword}%` } },
                { content: { [Op.like]: `%${keyword}%` } },
            ]
        };
        // 如果存在再查询 不存在则不放入where条件
        !professional && delete filterCondition.professional;
        tab != 2 && delete filterCondition.authorId;
        !keyword && delete filterCondition[Op.or];
        // console.log('查询条件：', filterCondition)
        const lastest = {
            limit: Number(pageSize),
            offset: (pageNum - 1) * pageSize,
            where: filterCondition,
            order: [['articleId', 'DESC']],
        }
        tab != 1 && delete lastest.order;
        // 查询每页文章并 统计文章总数
        const { rows, count } = await Community.findAndCountAll(lastest);
        let data = await queryArticleAuthorInfo(rows);
        data = await queryLikeCount(data);
        data = await queryCommentsCount(data);
        return response.json({ data, total: count, msg: Tip.SEARCH_OK, code: 200 })
    } catch (e) {
        console.log(e)
        return response.json({ msg: Tip.SEARCH_ERROR, code: -999, e })
    }
})
// 发表
router.post('/publish', async (req, res) => {
    const article = createCommunityArticle(req.body);
    try {
        await Community.create(article)
        return res.json({ code: 200, msg: Tip.CONTENT_PUBLISH_OK });
    } catch (err) {
        return res.json({ code: -999, msg: Tip.OPERATOR_ERROR });
    }
})

// 更新
router.post('/update', async (req, res) => {
    const articleId = req.body.articleId;
    const article = createUpdateCommunityArticle(req.body);
    try {
        await Community.update(article, { where: { articleId } })
        return res.json({ code: 200, msg: Tip.CONTENT_UPDATE_OK });
    } catch (err) {
        return res.json({ code: -999, msg: Tip.OPERATOR_ERROR });
    }
})

// 喜欢
router.post('/like', async (req, res) => {
    const like = createLikeInfo(req.body);
    const { articleId, userId } = req.body;
    try {
        const data = await Like.findOne({ where: { articleId, userId } });
        if (!data) {
            await Like.create(like);
            return res.json({ msg: Tip.OPERATOR_OK, code: 200 })
        }
        return res.json({ code: -999, msg: Tip.HAS_LIKED })
    } catch (err) {
        return res.json({ msg: Tip.OPERATOR_ERROR, code: -999 })
    }
})

// 删除
router.post('/remove', async (req, res) => {
    const { articleId } = req.body;
    try {
        const data = await Community.findOne({ where: { articleId } });
        if (!data) {
            return res.json({ msg: Tip.IS_NO_EXIST, code: -999 })
        }
        await CommunityComment.destroy({ where: { articleId } });
        await CommunityCommentReply.destroy({ where: { articleId } });
        await Like.destroy({ where: { articleId } })
        return res.json({ msg: Tip.OPERATOR_OK, code: 200 })
    } catch (err) {
        return res.json({ msg: Tip.OPERATOR_ERROR, code: -999 })
    }
})
/**
 * @api {POST} /Community/single 获取单篇文章
 * @apiDescription 根据文章ID获取单篇文章
 * @apiName single
 * @apiParam {Number} id 文章ID
 * @apiSampleRequest /Community/single
 * @apiGroup Community
 * @apiVersion 1.0.0
 */
router.post("/queryArticleById", async (request, response) => {
    const { articleId } = request.body;
    try {
        const data = await Community.findOne({ where: { articleId } })
        if (!data) {
            return response.json({ code: -998, msg: Tip.SEARCHDATA_IS_NULL })
        }
        let rest = await queryArticleAuthorInfoSingle(data);
        rest = await queryLikeCount(rest);
        response.json({ code: 200, data: rest, msg: Tip.SEARCH_OK })
        // 访问量+1
        await Community.update({ hot: data.hot + 1 }, { where: { articleId } })
    } catch (e) {
        return response.json({ code: -999, msg: Tip.SEARCH_ERROR })
    }
})

router.post('/queryCommunityHotRank', async (req, res) => {
    const { start, end, requireCount } = req.body;
    let startTime = start, endTime = end, now = Date.now();
    // 只要不传递起止参数 那就查询默认的三十天
    if (!start || !end) {
        startTime = formatTime(now - 1000 * 60 * 60 * 24 * 30);
        endTime = formatTime(now);
    }
    try {
        const { rows, count } = await Community.findAndCountAll({
            order: [['hot', 'DESC']],
            [Op.and]: {
                time_scheduled: { [Op.between]: [startTime, endTime] }
            },
            limit: requireCount,
            offset: 0,
        })
        return res.json({ code: 200, msg: Tip.SEARCH_OK, data: rows, count })
    } catch (e) {
        return res.json({ code: -999, msg: Tip.SEARCH_ERROR });
    }
})
module.exports = router;