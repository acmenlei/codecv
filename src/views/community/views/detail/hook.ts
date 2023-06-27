import { useThrottleFn } from '@vueuse/core'
import { warningMessage } from '@/common/message'
import useUserStore from '@/store/modules/user'
import { initialInfo } from '@/store/modules/user'
import { onActivated, onDeactivated, reactive, Ref, ref, watch, watchEffect } from 'vue'
import { queryCommunityArticleById, likeArticle } from '@/api/modules/community'
import { queryCommentPosition, queryCommunityArticleCommentsById } from '@/api/modules/comments'
import { errorMessage } from '@/common/message'
import { isLogin } from '@/common/global'
import { calcOffsetTop, scrollTo } from '@/utils'
import { IArticle, IComment, ICommentPosition, IResponse } from '@@types/type'

export function useArticleDetail(articleId: Ref<number>, posterCommentId: Ref<number>) {
  const article = reactive({
    title: '',
    content: '',
    professional: '',
    authorId: 0,
    likes: [] as number[],
    commentTotal: 0,
    hot: 0,
    createTime: '',
    updateTime: '',
    articleId: articleId.value,
    introduce: '',
    authorInfo: initialInfo,
    comments: [] as IComment[]
  })
  const total = ref(0),
    commentsTotal = ref(0),
    commentsConditions = reactive({ pageNum: 1, pageSize: 10, articleId: articleId.value })
  const position = ref()
  async function queryArticle() {
    if (!articleId.value) {
      errorMessage('出错了')
      return
    }
    const articleData: IResponse<IArticle> = (await queryCommunityArticleById({
      articleId: articleId.value
    })) as IResponse<IArticle>
    if (articleData.code == 200) {
      initArticleInfo(article, articleData.data as IArticle)
    }
  }

  async function queryComments() {
    commentsConditions.articleId = articleId.value
    const commentsData: IResponse<IComment[]> = (await queryCommunityArticleCommentsById(
      commentsConditions
    )) as IResponse<IComment[]>
    if (commentsData.code == 200) {
      article.comments = commentsData.data as IComment[]
      total.value = commentsData.total as number
      commentsTotal.value = commentsData.commentsTotal as number
    }
  }

  function toCommentFieldTop() {
    const anchor = document.querySelector('.anchor') as HTMLElement
    scrollTo(calcOffsetTop(anchor) - 65)
  }

  function pageNumChange(pageNum: number) {
    commentsConditions.pageNum = pageNum
    queryComments()
    toCommentFieldTop()
  }

  async function like(clicked: boolean) {
    if (!isLogin()) return errorMessage('请先登录')
    if (clicked) {
      warningMessage('点过赞了, 不用再点了～')
      return
    }
    const { userInfo } = useUserStore()
    const { code } = (await likeArticle({
      articleId: articleId.value,
      userId: userInfo.uid
    })) as IResponse<unknown>
    if (code == 200) {
      article.likes.push(userInfo.uid)
    }
  }

  const init = useThrottleFn(function () {
    if (!isNaN(articleId.value)) {
      queryComments()
      queryArticle()
    }
  })

  watch(
    () => articleId.value,
    () => {
      init()
    }
  )

  watchEffect(async () => {
    if (isNaN(posterCommentId.value)) return
    // 查询数据 返回具体的comment位置
    const { data, code, msg } = (await queryCommentPosition({
      commentId: posterCommentId.value,
      pageSize: commentsConditions.pageSize,
      articleId: articleId.value
    })) as IResponse<ICommentPosition>
    if (code === 200) {
      commentsConditions.pageNum = (data as ICommentPosition).pageNum
      article.comments = (data as ICommentPosition).data
      position.value = (data as ICommentPosition).position
    } else {
      errorMessage(msg)
    }
  })

  onActivated(init)
  onDeactivated(() => (article.content = ''))

  return {
    commentsConditions,
    total,
    position,
    commentsTotal,
    article,
    like,
    queryArticle,
    pageNumChange,
    queryComments,
    toCommentFieldTop
  }
}

function initArticleInfo(article: IArticle, info: IArticle) {
  article.articleId = info.articleId
  article.title = info.title
  article.content = info.content
  article.commentTotal = info.commentTotal
  article.professional = info.professional
  article.authorId = info.authorId
  article.likes = info.likes
  article.createTime = info.createTime
  article.updateTime = info.updateTime
  article.introduce = info.introduce
  article.authorInfo = info.authorInfo
}

export function useDelayMenuBar(articleId: Ref) {
  // 暂时解决异步渲染问题
  const delay = ref(false)

  function controlMenuBar() {
    delay.value = false
    setTimeout(() => (delay.value = true), 200)
  }

  onActivated(() => {
    controlMenuBar()
  })
  watch(
    () => articleId.value,
    () => {
      controlMenuBar()
    }
  )

  return {
    delay
  }
}
