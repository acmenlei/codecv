import { templates, type TemplateType } from '@/templates/config'
import { Ref, ref } from 'vue'
import { templateCategory } from './constant'

export function useCategory() {
  const category = ref('全部')
  const data: Ref<TemplateType[]> = ref([...templates])

  function queryCategory(idx: number) {
    category.value = templateCategory[idx]
    if (category.value === '全部') {
      data.value = [...templates]
      return
    }
    data.value = templates.filter(template => template.name.includes(category.value))
  }

  return {
    queryCategory,
    category,
    data
  }
}
