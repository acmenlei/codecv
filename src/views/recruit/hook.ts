import { ref, watchEffect } from 'vue'
import { recruits } from './recruits'

export const EducationalRequiredOptions = [
  '985/211本科',
  '不强制要求92',
  '优秀可特批',
  '统招本科',
  '专升本',
  '专科'
]
export const WorkAndResetTimeOptions = [
  '996',
  '855',
  '965',
  '1075',
  'WLB',
  '下午茶',
  '餐补',
  '房补',
  '五险一金',
  '六险一金',
  '福利待遇好',
  '面试简单',
  '看中基础',
  '创业公司',
  '互联网大厂',
  '不打卡',
  '弹性上班'
]
export const WorkEXPOptions = ['应届生', '一年以内', '1-3年经验', '3-5年经验', '5-10年经验']
export interface IExternalContact {
  app: string
  contact: string
}
export interface IRecruitData {
  logo?: string
  job: string
  type: string[]
  corporation: string
  tags: string[]
  endTime: string
  educational_required: string[]
  remark: string
  external_link: string | IExternalContact
}
export function useData() {
  const form = ref({
    pageNum: 1,
    pageSize: 8,
    keyword: '',
    job: '',
    type: '',
    educational_required: '',
    icu: ''
  })
  const data = ref<IRecruitData[]>([])
  function query() {
    let curRecruits: IRecruitData[] = recruits
    const params = form.value
    if (params.educational_required) {
      curRecruits = curRecruits.filter(recruit =>
        recruit.educational_required.includes(params.educational_required)
      )
    }
    if (params.keyword) {
      curRecruits = curRecruits.filter(
        recruit =>
          recruit.corporation.includes(params.keyword) || recruit.remark.includes(params.keyword)
      )
    }
    if (params.job) {
      curRecruits = curRecruits.filter(recruit => recruit.job.includes(params.job))
    }
    if (params.type) {
      curRecruits = curRecruits.filter(recruit => recruit.type.includes(params.type))
    }
    if (params.icu) {
      curRecruits = curRecruits.filter(recruit => recruit.tags.includes(params.icu))
    }
    const start = (params.pageNum - 1) * params.pageSize
    data.value = curRecruits.slice(start, start + params.pageSize)
  }

  function pageNumChange(page: number) {
    form.value.pageNum = page
    query()
  }

  function reset() {
    form.value = {
      pageNum: 1,
      pageSize: 8,
      keyword: '',
      job: '',
      type: '',
      educational_required: '',
      icu: ''
    }
  }

  watchEffect(query)
  return {
    data,
    form,
    query,
    reset,
    pageNumChange
  }
}
