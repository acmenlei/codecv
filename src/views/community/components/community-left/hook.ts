import { isLogin } from '@/common/global'
import useUserStore from '@/store/modules/user'
import { errorMessage } from '@/common/message'
import { queryCommunity } from '@/api/modules/community'
import { reactive, ref } from 'vue'
import { tabs } from './constant'
import { useThrottleFn } from '@vueuse/core'
import { IArticle, ICommunityCondition, IResponse } from '@@types/type'

export function useTab(conditions: ICommunityCondition, conditionQuery: () => void) {
  const tab = ref(tabs[0])
  function toggleTab(idx: number) {
    tab.value = tabs[idx]
    conditions.tab = idx
    // 切换就要重新计算pageNum了
    conditions.pageNum = 1
    conditionQuery()
  }
  return {
    tab,
    toggleTab
  }
}

export function useData() {
  const { userInfo, loginModelToggle } = useUserStore()
  const data = ref<IArticle[]>([]),
    loading = ref(false),
    noMore = ref(false)
  const conditions = reactive({
    pageNum: 1,
    pageSize: 10,
    keyword: '',
    professional: '',
    tab: 0,
    uid: userInfo.uid
  })
  // 无限滚动
  async function queryList() {
    if (noMore.value) {
      return
    }
    loading.value = true
    conditions.pageNum += 1
    const res = (await queryCommunity(conditions)) as IResponse<IArticle[]>
    if (res.code != 200) {
      return errorMessage(res.msg)
    }
    loading.value = false
    data.value.push(...(<IArticle[]>res.data))
    if ((res.data as IArticle[]).length < conditions.pageSize) {
      noMore.value = true
    }
  }
  // 条件查询
  async function conditionQuery() {
    if (conditions.tab == 2) {
      if (!isLogin()) {
        errorMessage('请先登录再查看。')
        loginModelToggle()
        return
      }
      conditions.uid = userInfo.uid // 只看我自己的
    }
    loading.value = true
    const res = (await queryCommunity(conditions)) as IResponse<IArticle[]>
    if (res.code != 200) {
      return errorMessage(res.msg)
    }
    loading.value = false
    data.value = res.data as IArticle[]
    if (data.value.length < conditions.pageSize) {
      noMore.value = true
    }
  }
  // 点击专业锚点查询
  function queryProfessional(professional: string) {
    if (professional != conditions.professional) {
      conditions.professional = professional
      conditionQuery()
    }
  }
  // 删除文章
  function removeArticle(idx: number) {
    data.value.splice(idx, 1)
  }
  // 重置子查询
  function resetSub() {
    conditions.pageNum = 1
    conditions.keyword = ''
    conditions.professional = ''
    conditionQuery()
  }
  // 搜索
  function searchSub() {
    conditions.pageNum = 1
    conditionQuery()
  }
  return {
    data,
    loading,
    noMore,
    conditions,
    resetSub: useThrottleFn(resetSub, 1000),
    searchSub: useThrottleFn(searchSub, 1000),
    queryList,
    queryProfessional,
    removeArticle,
    conditionQuery
  }
}
