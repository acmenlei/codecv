const router = require("express").Router();
const Notification = require('../models/Notification')
const { queryNotificationUserAndCommentInfo } = require('../utils/format')
const Tip = require('../common/tip/tip')

router.post('/list', async (req, res) => {
  const { pageNum, pageSize, uid } = req.body;
  try {
    const { rows, count: total } = await Notification.findAndCountAll({
      limit: Number(pageSize),
      offset: (pageNum - 1) * pageSize,
      where: { replyUserId: uid },
      order: [['commentId', 'DESC']]
    });
    const data = await queryNotificationUserAndCommentInfo(rows);
    const { count } = await Notification.findAndCountAll({ limit: 1, offset: 0, where: { replyUserId: uid, read: 0 } });
    return res.json({ code: 200, msg: Tip.SEARCH_OK, data, commentTotal: count, total })

  } catch (error) {
    console.log(error)
    return res.json({ code: -999, msg: Tip.SEARCH_ERROR })
  }
})

router.post('/read', async (req, res) => {
  const { commentId } = req.body;
  try {
    await Notification.update({ read: 1 }, { where: { commentId } });
    return res.json({ code: 200, msg: Tip.OPERATOR_OK })
  } catch (error) {
    console.log(error)
    return res.json({ code: -999, msg: Tip.OPERATOR_ERROR })
  }
})

module.exports = router;

