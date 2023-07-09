import { ref, watchEffect } from 'vue'

export function useRecruitTab() {
  const tabs = ['校招', '社招', '国企', '事业单位']
  function tabClick(idx: number) {
    console.log(idx)
  }
  return {
    tabs,
    tabClick
  }
}

export function useData() {
  const form = ref({ keyword: '', job: '', type: '', educational_required: '', icu: '' })
  const data = ref<IRecruitData[]>([])
  interface IRecruitData {
    logo: string
    job: string
    type: string[]
    corporation: string
    tags: string[]
    endTime: string
    educational_required: string[]
    remark: string
    external_link: string
  }

  function query() {
    console.log('fetch data')
    data.value = Array(10).fill({
      logo: 'https://gw.alicdn.com/imgextra/i3/O1CN0175GaEE1WFD2QbMmw2_!!6000000002758-2-tps-200-53.png',
      type: ['2023届', '1-3年经验'],
      job: '前端开发工程师',
      corporation: '飞猪旅行',
      tags: ['福利待遇好', '面试简单'],
      endTime: '尽快投递',
      educational_required: ['统招本科以上', '不强制要求92', '优秀者可特批'],
      remark: '领导很好，本人亲试。',
      external_link: 'https://alibaba.com/feizhu'
    })
  }

  function reset() {
    form.value = { keyword: '', job: '', type: '', educational_required: '', icu: '' }
  }

  watchEffect(query)
  return {
    data,
    form,
    query,
    reset
  }
}
