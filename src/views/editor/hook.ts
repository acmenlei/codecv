import { getLocalStorage, setLocalStorage } from '@/common/hooks/useLcoaStoage'
import { errorMessage, showMessageVN, successMessage, warningMessage } from '@/common/message'
import {
  convertDOM,
  getCurrentTypeContent,
  getPdf,
  importCSS,
  resumeDOMStruct2Markdown
} from '@/common/utils'
import { nextTick, onActivated, onDeactivated, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { splitPage } from './components/tabbar/hook'

const MARKDOWN_CONTENT = 'markdown-content',
  get = getLocalStorage
// 给每个元素套上tooltip组件
// function handlerHTMLToolTip(HTMLContent: string) {
//   const vitrualDOM = document.createElement('div');  // 内部虚拟节点
//   vitrualDOM.innerHTML = HTMLContent;
//   vitrualDOM.innerHTML = dfsPriorityTraversal(vitrualDOM, '', 'div') as string;
//   return vitrualDOM;
// }
// // 深度优先处理
// function dfsPriorityTraversal(DOM: HTMLElement, parentClass: string, parentTag: string) {
//   let HTMLSubContent = '';
//   if (DOM.nodeType == 1) {
//     const className = DOM.className ? `class='${DOM.className}'` : '';
//     HTMLSubContent += `<el-tooltip placement=bottom content=${parentClass || parentTag}><${DOM.tagName.toLowerCase()} ${className}>`
//     const childrens = Array.from(DOM.childNodes);
//     if (!childrens) return;
//     for (const children of childrens) {
//       if (DOM.className) {
//         HTMLSubContent += dfsPriorityTraversal(children as HTMLElement, DOM.className, '');
//       } else {
//         HTMLSubContent += dfsPriorityTraversal(children as HTMLElement, '', DOM.tagName.toLowerCase());
//       }
//     }
//   } else {
//     return `<el-tooltip placement=bottom content=${parentClass || parentTag}>${DOM.textContent}</el-tooltip>`
//   }
//   HTMLSubContent += `</${DOM.tagName.toLowerCase()}></el-tooltip>`;
//   return HTMLSubContent;
// }

export function useRenderHTML(props: { content: string; resumeType: string }) {
  const renderDOM = ref<HTMLElement>(document.body)

  onActivated(() => {
    importCSS(props.resumeType)
    renderDOM.value.innerHTML = convertDOM(props.content).innerHTML
    setTimeout(() => splitPage(renderDOM.value), 100)
  })

  watch(
    () => props.content,
    v => {
      renderDOM.value.innerHTML = convertDOM(v).innerHTML
      setTimeout(() => splitPage(renderDOM.value), 50)
    }
  )
  // 刷新页面（这里是一个比较有问题的点）
  watch(
    () => props.resumeType,
    () => {
      location.reload()
    }
  )
  return {
    renderDOM
  }
}

// 缓存用户输入的content内容
export function useMarkdownContent(resumeType: Ref<string>) {
  const cacheKey = MARKDOWN_CONTENT + '-' + resumeType.value
  const content = ref(
    get(cacheKey) ? (get(cacheKey) as string) : getCurrentTypeContent(resumeType.value)
  )

  function setContent(str: string) {
    if (!str) {
      return
    }
    content.value = str
    setLocalStorage(cacheKey, content.value)
  }

  return {
    content,
    setContent
  }
}

export function useResumeType() {
  const route = useRoute()
  //初始化也需要填上值 否则后续更新不一致会导致刷新死循环
  const resumeType = ref(route.query.type ? String(route.query.type) : 'front_end')
  onActivated(() => {
    resumeType.value = route.query.type ? String(route.query.type) : 'front_end'
  })
  return {
    resumeType
  }
}

export function useDownLoad(type: Ref<string>, content: Ref<string>) {
  const router = useRouter()
  const downloadDynamic = (fileName: string) => {
    getPdf(fileName, document.querySelector('.jufe') as HTMLElement)
  }

  const downloadNative = () => {
    localStorage.setItem('download', JSON.stringify(convertDOM(content.value).innerHTML))
    router.push({ path: '/download', query: { type: type.value } })
  }

  const downloadMD = () => {
    const blob = new Blob([content.value])
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

export function useImportMD(setContent: (str: string) => void) {
  function importMD(file: File) {
    const reader = new FileReader()
    reader.readAsText(file, 'utf-8')
    reader.onload = function (event) {
      successMessage('导入成功~')
      setContent((event.target?.result as string) || '')
    }
    reader.onerror = function () {
      errorMessage('导入失败!')
    }
  }
  return {
    importMD
  }
}

// 左右移动伸缩布局
export function useMoveLayout() {
  const left = ref(500)
  let flag = false

  function move(event: MouseEvent) {
    if (!flag) {
      return
    }
    left.value = event.clientX
  }

  function down() {
    flag = true
  }

  function up() {
    flag = false
  }

  onActivated(() => {
    window.addEventListener('mouseup', up)
    window.addEventListener('mousemove', move)
  })

  onDeactivated(() => {
    window.removeEventListener('mouseup', up)
    window.removeEventListener('mousemove', move)
  })
  return { left, move, down }
}

export function useAvatar(content: Ref<string>, setContent: (c: string) => void) {
  const matchAvatarSlot = /!\[个人头像\]\(.*\)/
  function setAvatar(path: string) {
    if (!matchAvatarSlot.test(content.value)) {
      warningMessage('上传前请确保你想上传的位置在编辑器中存在 ![个人头像](...) 此关键字')
      return
    }
    const newContent = content.value.replace(matchAvatarSlot, `![个人头像](${path})`)
    setContent(newContent)
    successMessage('头像上传成功，如果你想修改为网络图片，你可直接修改对应的链接！')
    // 可能还需要处理可编辑模式中的头像
    const writableDOM = document.querySelector('.writable-edit-mode')
    if (writableDOM) {
      const avatar: HTMLImageElement | null = writableDOM.querySelector('img[alt*=个人头像]')
      console.log(avatar, '头像')
      avatar && (avatar.src = path)
    }
  }
  return {
    setAvatar
  }
}

// 使用编辑模式
export function useWrite(setContent: (cnt: string) => void) {
  const writable = ref(false),
    DOMTree = ref<HTMLElement>()

  function startWrite(html: HTMLElement) {
    writable.value = !writable.value
    showMessageVN('您已切换至', writable.value ? '内容模式' : 'Markdown模式')
    if (writable.value) {
      nextTick(() => {
        ;(DOMTree.value as HTMLElement).innerHTML = html.innerHTML
      })
    }
  }

  function ObserverContent() {
    const content = resumeDOMStruct2Markdown({
      node: DOMTree.value as Node,
      latest: true,
      uid: 0
    })
    setContent(content)
  }
  return {
    writable,
    DOMTree,
    startWrite,
    ObserverContent
  }
}
