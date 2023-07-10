import { onActivated, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import { getLocalStorage } from '@/common/localstorage'
import { errorMessage, successMessage, warningMessage } from '@/common/message'
import { importCSS, useLoading } from '@/utils'
import { splitPage } from './components/tabbar/hook'
import useEditorStore from '@/store/modules/editor'
import { convertDOM } from '@/utils/moduleCombine'

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
// 导出简历｜markdown内容
export function useDownLoad(type: Ref<string>) {
  const router = useRouter(),
    editorStore = useEditorStore()

  function extractRgb(rgbString: string) {
    // 使用正则表达式提取括号中的数字
    const matches = rgbString.match(/\d+/g) as string[]
    // 将字符串转换为数字并返回一个包含RGB值的数组
    return matches.map((match: string) => parseInt(match))
  }

  function getPdf(title: string, html: HTMLElement) {
    const { showLoading, closeLoading } = useLoading()
    showLoading('正在导出PDF 请耐心等待...')
    const backgroundColor = getComputedStyle(html).getPropertyValue('background-color')
    const [r, g, b] = extractRgb(backgroundColor)

    html2canvas(html, {
      allowTaint: false,
      logging: false,
      useCORS: true,
      scale: 2.5,
      backgroundColor
    })
      .then(canvas => {
        const pdf = new jsPDF('p', 'mm', 'a4') // A4纸，纵向
        // 设置背景颜色和处理多余部分
        pdf.setFillColor(r, g, b)
        pdf.rect(0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height, 'F')
        const ctx = canvas.getContext('2d')
        const a4w = 210
        const a4h = 297 // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
        const imgHeight = Math.floor((a4h * canvas.width) / a4w) // 按A4显示比例换算一页图像的像素高度（必须向下取整，否则高度溢出）
        let renderedHeight = 0
        while (renderedHeight < canvas.height) {
          const page = document.createElement('canvas')
          page.width = canvas.width
          page.height = Math.min(imgHeight, canvas.height - renderedHeight)
          // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
          page
            .getContext('2d')
            ?.putImageData(
              ctx?.getImageData(
                0,
                renderedHeight,
                canvas.width,
                Math.min(imgHeight, canvas.height - renderedHeight)
              ) as ImageData,
              0,
              0
            )
          pdf.addImage(
            page.toDataURL('image/jpeg', 1.0),
            'JPEG',
            0,
            0,
            a4w,
            Math.min(a4h, (a4w * page.height) / page.width)
          ) // 添加图像到页面，保留0mm边距
          renderedHeight += imgHeight
          if (canvas.height - renderedHeight > 1) {
            pdf.addPage() // 如果后面还有内容，添加一个空页
            // 设置背景颜色和处理多余部分
            pdf.setFillColor(r, g, b)
            pdf.rect(0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height, 'F')
            // 将图像添加到页面中
          }
        }
        // 保存文件
        pdf.save(`${title}.pdf`)
        successMessage('PDF导出成功')
      })
      .catch(error => {
        errorMessage('导出失败, ' + error)
      })
      .finally(closeLoading)
  }
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
    const { writable } = useEditorStore()
    if (writable) {
      return warningMessage('请先切换到Markdown模式')
    }
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
