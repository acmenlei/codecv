import { ref, onUnmounted } from 'vue'
import { clickedTarget, ensureResetClickedTarget } from '../../hook'
import { reset } from './components/linkInput/hook'

export function useHeading() {
  const level = ref('正文')
  function setHeading() {
    const format = level.value ? level.value : 'p'
    document.execCommand('formatBlock', false, format)
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
  link.appendChild(document.createTextNode(text))
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

export function insertCode() {
  // 创建一个包含多列布局的临时div元素
  const code = document.createElement('span')
  code.innerHTML = `<code class='single-code'>xxx</code>&nbsp;`
  reductionSelection(code)
}

export function insertToTail() {
  const editor = document.querySelector('.writable-edit-mode')
  const p = document.createElement('p')
  p.textContent = '已为您跳出了当前布局容器'
  editor?.appendChild(p)
  const selection = window.getSelection() as Selection
  const range = selection.getRangeAt(0).cloneRange()
  // 还原Selection对象
  selection.removeAllRanges()
  range.setStartAfter(p)
  range.collapse(true)
  selection.addRange(range)
}

export function useToolBarConfig(emit: any) {
  function handleCommand(event: MouseEvent) {
    const editor = document.querySelector('.writable-edit-mode') as HTMLElement
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
      case 'insertToTail':
        insertToTail()
        break
      case 'insertLink':
        linkFlag.value = !linkFlag.value
        // 修改
        reset()
        cursorPosition = saveCursorPosition()
        break
      default:
        document.execCommand(command, false, undefined)
        break
    }
    ;['insertUserInfo', 'insertCode', 'insertToTail'].includes(command) && emit('content-change')
    editor.focus()
  }
  document.addEventListener('click', handleCommand)
  onUnmounted(() => document.removeEventListener('click', handleCommand))
}

function reductionSelection(target: Node) {
  const selection = window.getSelection() as Selection
  const range = selection.getRangeAt(0).cloneRange()
  range.deleteContents()
  range.insertNode(target)
  // 还原Selection对象
  selection.removeAllRanges()
  range.setStartAfter(target)
  range.collapse(true)
  selection.addRange(range)
}

let cursorPosition: {
  startContainer: Node
  startOffset: number
  endContainer: Node
  endOffset: number
} | null
function saveCursorPosition() {
  const selection = window.getSelection() as Selection
  const range = selection.getRangeAt(0)
  const startContainer = range.startContainer
  const startOffset = range.startOffset
  const endContainer = range.endContainer
  const endOffset = range.endOffset
  return {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  }
}

function restoreCursorPosition() {
  if (!cursorPosition) return
  const selection = window.getSelection() as Selection
  const newRange = new Range()
  newRange.setStart(cursorPosition.startContainer, cursorPosition.startOffset)
  newRange.setEnd(cursorPosition.endContainer, cursorPosition.endOffset)
  selection.removeAllRanges()
  selection.addRange(newRange)
  cursorPosition = null
}
