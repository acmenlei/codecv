import { warningMessage } from '@/common/message'
import { errorMessage, successMessage } from '@/common/message'
import { isLogin } from '@/common/global'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { likeArticle, removeCommunity } from '@/api/modules/community'
import { ref, Ref, watchEffect } from 'vue'
import { useBrowseHistory } from '@/components/browse-history/hook'
import { IArticle, IResponse } from '@@types/type'

export function useOperator(articleId: Ref<number>, emits: any, hasClick: Ref<boolean>) {
  const router = useRouter()

  async function useLike() {
    if (!isLogin()) {
      errorMessage('请先登录！')
      return
    }
    if (hasClick.value) {
      warningMessage('你已经赞过了，不用重复点～')
      return
    }
    const { userInfo } = useUserStore()
    await likeArticle({ userId: userInfo.uid, articleId: articleId.value })
    emits('reQueryList', userInfo.uid)
  }

  function useDetail(article: IArticle) {
    const { setBrowseHistory } = useBrowseHistory()
    setBrowseHistory(article)
    router.push(`/community/detail?articleId=${articleId.value}`)
  }
  async function useRemove() {
    const res: IResponse<unknown> = (await removeCommunity({
      articleId: articleId.value
    })) as IResponse<unknown>
    if (res.code == 200) {
      successMessage(res.msg)
      emits('remove')
    }
  }

  function useEditor() {
    router.push(`/community/editor?articleId=${articleId.value}`)
  }

  return {
    useLike,
    useDetail,
    useRemove,
    useEditor
  }
}

export function useCovers(mainContent: Ref<string>) {
  const covers = ref<string[]>([])

  watchEffect(() => {
    const tmpCovers: string[] = []
    mainContent.value.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, ($, $1) => {
      tmpCovers.length < 3 && tmpCovers.push($1)
      return $1
    })
    covers.value = tmpCovers
  })
  return {
    covers
  }
}
