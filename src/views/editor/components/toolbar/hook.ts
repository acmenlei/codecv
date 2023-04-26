import { ref } from 'vue'

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
export function insertIcon(iconName: string) {
  selectIcon.value = !selectIcon.value
  const icon = document.createElement('span')
  icon.innerHTML = `<i class='iconfont icon-${iconName}'></i>&nbsp;`
  reductionSelection(icon)
}

export function InsertUserInfo() {
  const info = document.createElement('div')
  info.className = 'head-layout'
  info.innerHTML = '<h1>在此处可以编辑个人信息...</h1>'
  reductionSelection(info)
}

export function insertMulticolumn() {
  const columnCountStr = prompt('请输入列数')
  if (!columnCountStr || isNaN(+columnCountStr)) {
    return
  }
  const columnCount = parseInt(columnCountStr)
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
}

export function insertWhiteSpace() {
  const whiteSpace = document.createElement('span')
  whiteSpace.textContent = '&nbsp;'
  whiteSpace.style.opacity = '0'
  reductionSelection(whiteSpace)
}

export function insertCode() {
  // 创建一个包含多列布局的临时div元素
  const code = document.createElement('span')
  code.innerHTML = `<code class='single-code'>xxx</code>&nbsp;`
  reductionSelection(code)
}

export function InsertBr() {
  const editor = <HTMLElement>document.querySelector('.writable-edit-mode')
  const br = document.createElement('br')
  editor?.appendChild(br)
  // 保存当前的Selection对象
  reductionSelection(br)
}

export function InsertTable() {
  const columnCountStr = prompt('请输入表格列数')
  if (!columnCountStr || isNaN(+columnCountStr)) {
    return
  }
  const rowCountStr = prompt('请输入表格行数')
  if (!rowCountStr || isNaN(+rowCountStr)) {
    return
  }
  const columnCount = +columnCountStr,
    rowCount = +rowCountStr
  const thead = Array(columnCount)
    .fill('')
    .map((_, index) => `<th>content${index + 1}</th>`)
    .join('')
  let row = ''
  for (let i = 0; i < rowCount; i++) {
    const body = Array(columnCount)
      .fill('')
      .map((_, index) => `<td>content${index + 1}</td>`)
      .join('')
    row += `<tr>${body}</tr>`
  }
  const tableHTML = `<thead><tr>${thead}</tr></thead><tbody>${row}</tbody>`
  // 创建一个表格
  const table = document.createElement('table')
  table.innerHTML = tableHTML
  reductionSelection(table)
}

export function useToolBarConfig() {
  document.addEventListener('click', function (event: any) {
    const editor = document.querySelector('.writable-edit-mode') as HTMLElement
    const buttons = event.target.closest('button[data-command]')
    if (!buttons) return
    event.preventDefault()
    const command = buttons.getAttribute('data-command')
    switch (command) {
      case 'insertIcon':
        selectIcon.value = !selectIcon.value
        break
      case 'multiColumns':
        insertMulticolumn()
        break
      case 'insertBr':
        InsertBr()
        break
      case 'insertUserInfo':
        InsertUserInfo()
        break
      case 'insertCode':
        insertCode()
        break
      case 'insertSpace':
        insertWhiteSpace()
        break
      case 'insertTable':
        InsertTable()
        break
      default:
        document.execCommand(command, false, undefined)
        break
    }
    editor.focus()
  })
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
