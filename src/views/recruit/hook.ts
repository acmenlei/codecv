import { ref, watchEffect } from 'vue'
import { recruits } from './recruits'
export interface IExternalContact {
  app: string
  contact: string
}
export interface IRecruitData {
  logo: string
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
  const form = ref({ keyword: '', job: '', type: '', educational_required: '', icu: '' })
  const data = ref<IRecruitData[]>([])

  function query() {
    data.value = recruits
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
