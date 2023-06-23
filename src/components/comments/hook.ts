import { isLogin } from '@/common/global'
import { errorMessage } from '@/common/message'
import { successMessage } from '@/common/message'
import { removeComment } from '@/api/modules/comments'
import { calcOffsetTop, scrollTo } from '@/utils'
import useUserStore from '@/store/modules/user'
import { nextTick, Ref, ref, watch } from 'vue'
import { type IResponse } from '@@types/type'

// 回复所需要的操作
export function useReply(emits: any) {
  const { userInfo } = useUserStore()
  const currenId = ref(-1)
  let preId = -1

  function reply(commentId: number) {
    if (preId === commentId) {
      currenId.value = -1
      preId = -1
      return
    }
    preId = commentId
    currenId.value = commentId
  }

  async function remove(commentId: number, articleId: number, level: number) {
    if (!isLogin()) {
      errorMessage('请先登录！')
      window.location.reload()
      return
    }
    const rest: IResponse<unknown> = (await removeComment({
      commentId,
      articleId,
      level
    })) as IResponse<unknown>
    if (rest.code == 200) {
      successMessage(rest.msg)
      emits('reQueryComments')
      return
    }
    errorMessage(rest.msg)
  }

  return {
    userInfo,
    reply,
    remove,
    currenId
  }
}
// 展示更多
export function useShowMore(count: number) {
  const more = ref<boolean>(count > 1)

  function setMore() {
    more.value = false
  }
  return {
    more,
    setMore
  }
}
// 获取当前评论的具体页数和位置
export function useCommentPosition(position: Ref<number>) {
  const comments = ref()
  // 点击通知后进行评论定位
  watch(
    () => position.value,
    () => {
      try {
        nextTick(() => {
          const targetComment = comments.value.children[position.value]
          scrollTo(calcOffsetTop(targetComment) - 65)
          targetComment.classList.add('notice')
          setTimeout(() => {
            targetComment.classList.remove('notice')
          }, 1000)
        })
      } catch (e) {
        console.log(e)
        errorMessage('出了点错，请刷新后重新尝试～')
      }
    }
  )
  return {
    comments
  }
}
