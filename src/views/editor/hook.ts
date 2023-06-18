import { getLocalStorage } from '@/common/locastorage'
import { errorMessage, successMessage, warningMessage } from '@/common/message'
import { convertDOM, getPdf, importCSS } from '@/utils'
import { onActivated, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { splitPage } from './components/tabbar/hook'
import useEditorStore from '@/store/modules/editor'

export const get = getLocalStorage

export function useRenderHTML(resumeType: Ref<string>) {
  const renderDOM = ref<HTMLElement>(document.body)
  const editorStore = useEditorStore()

  onActivated(() => {
    importCSS(resumeType.value)
    renderDOM.value.innerHTML = convertDOM(editorStore.MDContent).innerHTML
    setTimeout(() => splitPage(renderDOM.value), 100)
  })

  watch(
    () => editorStore.MDContent,
    v => {
      renderDOM.value.innerHTML = convertDOM(v).innerHTML
      setTimeout(() => splitPage(renderDOM.value), 50)
    }
  )
  // 刷新页面（这里是一个比较有问题的点）
  watch(
    () => resumeType.value,
    () => {
      location.reload()
    }
  )
  return {
    renderDOM,
    editorStore
  }
}

export function useResumeType() {
  const route = useRoute()
  //初始化也需要填上值 否则后续更新不一致会导致刷新死循环
  const resumeType = ref(route.query.type ? String(route.query.type) : '10front_end')
  onActivated(() => {
    resumeType.value = route.query.type ? String(route.query.type) : '10front_end'
  })
  return {
    resumeType
  }
}

// 导出简历
export function useDownLoad(type: Ref<string>) {
  const router = useRouter(),
    editorStore = useEditorStore()
  const downloadDynamic = (fileName: string) => {
    getPdf(fileName, document.querySelector('.jufe') as HTMLElement)
  }

  const downloadNative = () => {
    localStorage.setItem('download', JSON.stringify(convertDOM(editorStore.MDContent).innerHTML))
    router.push({ path: '/download', query: { type: type.value } })
  }

  const downloadMD = () => {
    const blob = new Blob([editorStore.MDContent])
    const url = URL.createObjectURL(blob)
    const aTag = document.createElement('a')
    aTag.download = document.title + '.md'
    aTag.href = url
    aTag.click()
    URL.revokeObjectURL(url)
    successMessage('导出成功~')
  }
  return {
    downloadMD,
    downloadDynamic,
    downloadNative
  }
}

export function useImportMD(resumeType: string) {
  function importMD(file: File) {
    const reader = new FileReader(),
      { setMDContent } = useEditorStore()
    reader.readAsText(file, 'utf-8')
    reader.onload = function (event) {
      successMessage('导入成功~')

      setMDContent((event.target?.result as string) || '', resumeType)
    }
    reader.onerror = function () {
      errorMessage('导入失败!')
    }
  }
  return {
    importMD
  }
}

export function useAvatar(resumeType: string) {
  const matchAvatarSlot = /!\[个人头像\]\(.*\)/
  function setAvatar(path: string) {
    const { MDContent, setMDContent } = useEditorStore()
    if (!matchAvatarSlot.test(MDContent)) {
      warningMessage('上传前请确保你想上传的位置在编辑器中存在 ![个人头像](...) 此关键字')
      return
    }
    const newContent = MDContent.replace(matchAvatarSlot, `![个人头像](${path})`)
    setMDContent(newContent, resumeType)
    successMessage('头像上传成功，如果你想修改为网络图片，你可直接修改对应的链接！')
    // 可能还需要处理可编辑模式中的头像
    const writableDOM = document.querySelector('.writable-edit-mode')
    if (writableDOM) {
      const avatar: HTMLImageElement | null = writableDOM.querySelector('img[alt*=个人头像]')
      avatar && (avatar.src = path)
    }
  }
  return {
    setAvatar
  }
}

export const clickedTarget = ref<HTMLElement | null>()

export function ensureResetClickedTarget() {
  clickedTarget.value = null
}
