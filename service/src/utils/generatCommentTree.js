function generatCommentTree(list) {
  let ret = []
  let levelOneMap = {}, levelTwoMap = []
  // 将一二级的评论放入列表
  for (let comment of list) {
    comment.children = []
    // 处理一级
    if (comment.ll_level == 1) {
      if (levelOneMap[comment.ll_username]) {
        // 不同时间段的不同评论
        levelOneMap[comment.ll_username].push(comment)
      } else {
        levelOneMap[comment.ll_username] = [comment]
      }
      // console.log(levelOneMap, "处理一级")
      continue
    }
    // 处理二级
    levelTwoMap.push(comment)
  }
  // 遍历二级评论树
  for (let comment of levelTwoMap) {
    const pid = comment.ll_pid
    const pUsername = comment.ll_p_username
    // 拿到父节点参数 去一级路由中找对应的父级
    // 找到对应的数据 但是父节点可能会有多个评论 我们只需要找对应时间段的即可
    // 此时我们直接就可以找到对应的时间段的评论即可
    let parentComments = levelOneMap[pUsername]
    // console.log(pUsername, "父节点")
    for (let i = 0, n = parentComments.length; i < n; i++) {
      if (parentComments[i].ll_id === pid) {
        // 找到对应的父节点 拿到父节点的children将自己添加进去
        parentComments[i].children.unshift(comment)
        break
      }
    }
  }
  // 最终将一级评论树挨个添加进ret容器
  for (let comments in levelOneMap) {
    // {0: {}, 1: {}}
    for (let comment of levelOneMap[comments]) {
      if(comment.children) {
        // 放入默认数据中
        comment.dataValues.children = comment.children
      }
      ret.push(comment)
    }
  }
  // 最早发布的评论在最前面
  // const ans = ret.sort((a, b) => b.ll_id - a.ll_id)
  // // console.log(ans, "我是排序后的结构")
  return Promise.resolve(ret)
}

module.exports = {
  generatCommentTree
}