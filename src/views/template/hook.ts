import { templates, type TemplateType } from '@/templates/config'
import { onMounted, Ref, ref } from 'vue'
import { templateCategory } from './constant'
import { getTemplateCondition } from '@/api/modules/resume'
import { errorMessage } from '@/common/message'

export function useCategory() {
  const category = ref('全部')
  const data: Ref<TemplateType[]> = ref([...templates.value])

  function queryCategory(idx: number) {
    category.value = templateCategory[idx]
    if (category.value === '全部') {
      data.value = [...templates.value]
      return
    }
    data.value = templates.value.filter(template => template.name.includes(category.value))
  }

  return {
    queryCategory,
    category,
    data
  }
}

export function useTemplateData() {
  const ranks = ref<TemplateType[]>([])
  async function templateCondition() {
    const _templateData = await getTemplateCondition()
    if (!_templateData.result) {
      errorMessage(_templateData.msg)
      return
    }
    const templateData = JSON.parse(_templateData.result)
    templates.value.forEach(template => (template.hot = templateData[`t${template.type}`]))
    ranks.value = [...templates.value]
      .sort((a, b) => (b.hot as number) - (a.hot as number))
      .slice(0, 10)
  }
  onMounted(() => templateCondition())

  return {
    templateCondition,
    ranks
  }
}
