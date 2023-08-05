import { templates, type TemplateType } from '@/templates/config'
import { onActivated, Ref, ref } from 'vue'
import { templateCategory } from './constant'
import { getTemplateCondition } from '@/api/modules/resume'
import { errorMessage } from '@/common/message'

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

export function useTemplateCondition() {
  interface ITemplateTypeData {
    [key: string]: string
  }
  const templateData = ref<ITemplateTypeData>({})
  async function templateCondition() {
    const _templateData = await getTemplateCondition()
    if (!_templateData.result) {
      errorMessage(_templateData.msg)
      return
    }
    templateData.value = JSON.parse(_templateData.result)
  }
  onActivated(() => templateCondition())

  return {
    templateData
  }
}
