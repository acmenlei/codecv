import { ref, onUnmounted, onMounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import useEditorStore from '@/store/modules/editor'
import { clickedTarget, ensureResetClickedTarget } from '../../../hook'
import { reset } from './components/linkInput/hook'
import { createText, queryDOM } from '@/utils'

// 标题级别控制
export const level = ref('普通文本')
export function useHeading(emit: any) {
  function setHeading() {
    const tagName = level.value ? level.value : 'p',
      replaceDOM = document.createElement(tagName),
      selection = getSelection()
    let replaced = null,
      parent = null
    if (!selection?.anchorNode) return
    if (selection?.anchorNode?.parentElement) {
      replaceDOM.innerHTML = selection?.anchorNode?.parentElement.innerHTML || ''
      replaced = selection?.anchorNode?.parentElement
      parent = selection?.anchorNode?.parentElement.parentElement as Node
    } else {
      replaceDOM.textContent = selection?.anchorNode?.textContent || ''
      replaced = selection?.anchorNode
      parent = selection?.anchorNode?.parentElement as Node
    }
    parent.replaceChild(replaceDOM, replaced as Node)
    emit('content-change')
  }
  return { setHeading, level }
}
// 图标选择
export const selectIcon = ref(false)
export function insertIcon(iconName: string, emit: any) {
  selectIcon.value = !selectIcon.value
  // 内容模式：直接点击Icon进行替换的情况
  if (clickedTarget.value) {
    clickedTarget.value.className = `iconfont icon-${iconName}`
    emit('content-change')
    clickedTarget.value = null
    return
  }
  const icon = document.createElement('span')
  icon.innerHTML = `<i class='iconfont icon-${iconName}'></i>&nbsp;`
  reductionSelection(icon)
  emit('content-change')
}
// 插入链接
export const linkFlag = ref(false)
export function insertLink(url: string, text: string, emit: any) {
  linkFlag.value = !linkFlag.value
  // 内容模式：直接点击编辑超链接的情况
  if (clickedTarget.value) {
    clickedTarget.value.setAttribute('href', url)
    clickedTarget.value.textContent = text
    emit('content-change')
    clickedTarget.value = null
    return
  }
  restoreCursorPosition()
  const link = document.createElement('a')
  link.href = url
  link.appendChild(createText(text))
  reductionSelection(link)
  emit('content-change')
}

// 多列布局
export const MulFlag = ref(false)
export function insertMulticolumn(column: string, emit: any) {
  MulFlag.value = !MulFlag.value
  restoreCursorPosition()
  const columnCount = parseInt(column)
  const columnWidth = 100 / columnCount
  const placeholders = Array(columnCount)
    .fill('')
    .map(
      (_, index) =>
        `<div class='flex-layout-item' style='widht: ${columnWidth}%'>content${index + 1}</div>`
    )
    .join('')
  const multiColumnsHTML = `<div class='flex-layout'>${placeholders}</div><br>`
  // 创建一个包含多列布局的临时div元素
  const temp = document.createElement('div')
  temp.innerHTML = multiColumnsHTML
  const multiColumnsContainer = <Node>temp.firstChild
  reductionSelection(multiColumnsContainer)
  emit('content-change')
}
// 插入表格
export const tableFlag = ref(false)
export function InsertTable(col: string, row: string, emit: any) {
  tableFlag.value = !tableFlag.value
  restoreCursorPosition()
  const columnCount = +col,
    rowCount = +row
  const thead = Array(columnCount)
    .fill('')
    .map((_, index) => `<th>content${index + 1}</th>`)
    .join('')
  let rowStr = ''
  for (let i = 0; i < rowCount; i++) {
    const body = Array(columnCount)
      .fill('')
      .map((_, index) => `<td>content${index + 1}</td>`)
      .join('')
    rowStr += `<tr>${body}</tr>`
  }
  const tableHTML = `<thead><tr>${thead}</tr></thead><tbody>${rowStr}</tbody>`
  // 创建一个表格
  const table = document.createElement('table')
  table.innerHTML = tableHTML
  reductionSelection(table)
  emit('content-change')
}

export function InsertUserInfo() {
  const info = document.createElement('div')
  info.innerHTML =
    "<div class='head-layout'><h1>在此处可以编辑个人信息...</h1></div><br /><p>这是容器外部,要写在外面的内容从这里开始写...</p>"
  reductionSelection(info)
}
// 插入技能点（单个代码块）
export function insertCode() {
  // 创建一个包含多列布局的临时div元素
  const code = document.createElement('span')
  code.innerHTML = `<code class='single-code'>xxx</code>&nbsp;`
  reductionSelection(code)
}
// 跳出布局容器
export function breakLayout() {
  const p = document.createElement('p')
  p.setAttribute('breakLayout', 'true')
  let parentElement = getSelection()?.getRangeAt(0)?.commonAncestorContainer as HTMLElement,
    child = null
  while (parentElement && parentElement.nodeType != Node.ELEMENT_NODE) {
    child = parentElement
    parentElement = parentElement.parentNode as HTMLElement
  }
  while (
    !['resume-module', 'writable-edit-mode'].includes(parentElement.className) &&
    !['ul', 'ol'].includes(parentElement.nodeName.toLowerCase())
  ) {
    child = parentElement
    parentElement = parentElement.parentNode as HTMLElement
  }
  child?.parentNode?.insertBefore(p, child.nextSibling)
}

export const checkMouseSelect = useThrottleFn(function () {
  const selection = getSelection()
  const range = selection?.getRangeAt(0)
  let parentElement = range?.commonAncestorContainer
  while (parentElement && parentElement.nodeType != Node.ELEMENT_NODE) {
    parentElement = parentElement.parentNode as Node
  }
  const tagName = (<HTMLElement>parentElement).tagName.toLowerCase()
  if (tagName[0] == 'h') {
    level.value = tagName
  } else {
    level.value = '普通文本'
  }
}, 1000)

// 内容模式事件处理
export function useToolBarConfig(emit: any) {
  const editorStore = useEditorStore()
  let editor: HTMLElement

  // 处理工具栏命令
  function handleCommand(event: MouseEvent) {
    const buttons = (event.target as Element).closest('button[data-command]')
    if (!buttons) return
    event.preventDefault()
    ensureResetClickedTarget() // 确保点击替换的对象已经重置
    const command = buttons.getAttribute('data-command') as string
    switch (command) {
      case 'insertIcon':
        selectIcon.value = !selectIcon.value
        break
      case 'multiColumns':
        MulFlag.value = !MulFlag.value
        cursorPosition = saveCursorPosition()
        break
      case 'insertUserInfo':
        InsertUserInfo()
        break
      case 'insertCode':
        insertCode()
        break
      case 'insertTable':
        tableFlag.value = !tableFlag.value
        cursorPosition = saveCursorPosition()
        break
      case 'insertLink':
        linkFlag.value = !linkFlag.value
        // 修改
        reset()
        cursorPosition = saveCursorPosition()
        break
      case 'breakLayout':
        breakLayout()
        break
      case 'toMarkdownMode':
        emit('toggle-editor-mode')
        break
      default:
        document.execCommand(command, false, undefined)
        break
    }
    ;['insertUserInfo', 'insertCode', 'breakLayout'].includes(command) && emit('content-change')
    editor.focus()
  }
  // 键盘回车事件
  const keyboardEvent = useThrottleFn(function (event: KeyboardEvent) {
    const selection = getSelection() as Selection
    const focusNode = <HTMLElement>selection.focusNode
    if (
      editorStore.writable &&
      event.key == 'Enter' &&
      focusNode.tagName?.toLowerCase() == 'blockquote'
    ) {
      const br = document.createElement('br')
      selection.setPosition(br, 0)
      focusNode.parentElement?.replaceChild(br, focusNode) // 删除当前节点
      editor.focus()
    }
  }, 100)

  onMounted(() => {
    editor = <HTMLElement>queryDOM('.writable-edit-mode')
    document.addEventListener('click', handleCommand)
    editor.addEventListener('keydown', keyboardEvent)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleCommand)
    editor.removeEventListener('keydown', keyboardEvent)
  })
}

function reductionSelection(target: Node) {
  const selection = getSelection()
  const range = selection?.getRangeAt(0).cloneRange()
  if (range?.commonAncestorContainer.nodeName.toLowerCase() === 'button') {
    return
  }
  range?.deleteContents()
  range?.insertNode(target)
  // 还原Selection对象
  selection?.removeAllRanges()
  range?.setStartAfter(target)
  range?.collapse(true)
  selection?.addRange(<Range>range)
}

let cursorPosition: {
  startContainer: Node | undefined
  startOffset: number | undefined
  endContainer: Node | undefined
  endOffset: number | undefined
} | null
function saveCursorPosition() {
  const selection = getSelection()
  const range = selection?.getRangeAt(0)
  const startContainer = range?.startContainer
  const startOffset = range?.startOffset
  const endContainer = range?.endContainer
  const endOffset = range?.endOffset
  return {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  }
}

function restoreCursorPosition() {
  if (!cursorPosition) return
  const selection = getSelection()
  const newRange = new Range()
  newRange.setStart(<Node>cursorPosition.startContainer, <number>cursorPosition.startOffset)
  newRange.setEnd(<Node>cursorPosition.endContainer, <number>cursorPosition.endOffset)
  selection?.removeAllRanges()
  selection?.addRange(newRange)
  cursorPosition = null
}

/* markdown 模式工具栏事件处理 */
export function markdownModeToolbarCommandHandler(command: string, emit: any) {
  switch (command) {
    case 'insertBold':
      markdownModeInsertBold()
      break
    case 'insertItalic':
      markdownModeInsertItalic()
      break
    case 'insertUnorderedlist':
      markdownModeInsertUnorderedList()
      break
    case 'insertOrderedlist':
      markdownModeInsertOrderedList()
      break
    case 'insertLink':
      markdownModeInsertLink()
      break
    case 'insertIcon':
      selectIcon.value = !selectIcon.value
      break
    case 'insertAvatar':
      markdownModeInsertAvatar()
      break
    case 'insertHeadLayout':
      markdownModeInsertHeadLayout()
      break
    case 'insertMainLayout':
      markdownModeInsertMainLayout()
      break
    case 'insertMultiColumns':
      cursorPosition = saveCursorPosition()
      MulFlag.value = !MulFlag.value
      break
    case 'insertTable':
      cursorPosition = saveCursorPosition()
      tableFlag.value = !tableFlag.value
      break
    case 'toContentMode':
      emit('toggle-editor-mode')
      break
  }
}

function getCurrentRanger() {
  type MarkdownView = HTMLElement & { cmView: any }
  const selection = getSelection(),
    range = selection?.getRangeAt(0).cloneRange()
  if (!(<MarkdownView>range?.commonAncestorContainer).cmView) return null
  return range
}

export function markdownModeInsertBold() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`**示例文字**`))
}

export function markdownModeInsertItalic() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`*示例文字*`))
}

export function markdownModeInsertUnorderedList() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`- 无序列表项`))
}

export function markdownModeInsertOrderedList() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`1. 有序列表项`))
}

export function markdownModeInsertLink() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`[示例文字](https://github.com/acmenlei)`))
}
export function markdownModeInsertAvatar() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`![个人头像](https://codeleilei.gitee.io/blog/avatar.jpg)`))
}
export function markdownModeInsertIcon(iconName: string) {
  selectIcon.value = false
  const range = getCurrentRanger()
  range?.insertNode(createText(`icon:${iconName} `))
}
export function markdownModeInsertHeadLayout() {
  const range = getCurrentRanger()
  range?.insertNode(createText(`::: headStart\n在这块区域你可以填写你的个人信息\n::: headEnd`))
}

export function markdownModeInsertMainLayout() {
  const range = getCurrentRanger()
  range?.insertNode(
    createText(
      `::: mainStart\n如果你需要对你的主体内容做调整，你可以把你的主体内容写在这块区域内\n**PS：此布局在一个模板中只允许出现一次**\n::: mainEnd`
    )
  )
}

export function markdownModeInsertMultiColumnsLayout(column: string) {
  MulFlag.value = false
  restoreCursorPosition()
  const range = getCurrentRanger()
  let content = '::: start\n',
    i
  for (i = 0; i < +column; i++) {
    content += `第${i + 1}列`
    if (i < +column - 1) {
      content += '\n:::\n'
    }
  }
  content += '\n::: end'
  range?.insertNode(createText(content))
}

export function markdownModeInsertTable(column: string, row: string) {
  tableFlag.value = false
  restoreCursorPosition()
  let thead = '| ',
    tbody = ''
  const range = getCurrentRanger()
  for (let i = 0; i < +column; i++) {
    thead += '列名 | '
  }
  thead = thead.trim()
  thead += '\n'

  for (let i = 0; i < +row; i++) {
    for (let j = 0; j < +column; j++) {
      tbody += '| 内容 '
    }
    tbody = (tbody + '|').trim()
    tbody += '\n'
  }
  range?.insertNode(createText(thead + tbody))
}
