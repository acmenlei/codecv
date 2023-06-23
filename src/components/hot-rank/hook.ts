import { useRouter } from 'vue-router'
import { errorMessage } from '@/common/message'
import { queryCommunityHotRank } from '@/api/modules/community'
import { onMounted, ref } from 'vue'
import { IArticle, IResponse } from '@@types/type'

export function useHotRank() {
  const hotList = ref<IArticle[]>([]),
    router = useRouter()

  async function queryHotRankList() {
    const hotRankList = (await queryCommunityHotRank({ requireCount: 10 })) as IResponse<IArticle[]>
    if (hotRankList.code === 200) {
      hotList.value = hotRankList.data as IArticle[]
      return
    }
    errorMessage(hotRankList.msg)
  }

  function useDetail(articleId: number) {
    router.push(`/community/detail?articleId=${articleId}`)
  }
  // 请求一次就行
  onMounted(() => queryHotRankList())

  return {
    useDetail,
    hotList
  }
}
