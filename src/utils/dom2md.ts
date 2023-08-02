interface IResumeDOMStruct {
  node: Node
  parent: Node
  latest: boolean
  uid: number
  whiteSpace: number
}

const TAB_SIZE = 2 // 一个tab为2个空格大小

function isElementNode(node: Node) {
  return node.nodeType === node.ELEMENT_NODE
}

function getTagName(node: HTMLElement) {
  return node?.tagName.toLowerCase()
}

// 处理HTML结构转markdown内容
export function resumeDOMStruct2Markdown({
  parent,
  node,
  latest,
  uid,
  whiteSpace
}: IResumeDOMStruct) {
  let result = ''

  if (node.nodeType === Node.ELEMENT_NODE) {
    // 递归遍历子节点
    const classList = (node as HTMLElement).classList
    const tagName = <string>getTagName(<HTMLElement>node) // 获取标签名
    const isDeepList = // 判断是否是嵌套的列表
        ['ul', 'ol'].includes(<string>getTagName(<HTMLElement>node)) &&
        getTagName(<HTMLElement>parent) == 'li',
      children = node.childNodes
    if (classList.contains('flex-layout')) {
      result += '::: start\n' // 如果是指定的类名，则添加起始语法到结果字符串中
    } else if (classList.contains('iconfont')) {
      result += `icon:${classList[1].slice(5)} ` // 如果是指定的类名，则添加 icon 语法到结果字符串中
    } else if (classList.contains('head-layout')) {
      result += '::: headStart\n' // 如果是指定的类名，则添加头部起始语法到结果字符串中
    } else if (classList.contains('main-layout')) {
      result += '::: mainStart\n' // 同上
    } else if (tagName === 'a') {
      result += '['
    } else if (['b', 'strong'].includes(tagName)) {
      result += '**'
    } else if (tagName[0] === 'h') {
      result += '#'.repeat(+tagName[1]) + ' '
    } else if (tagName === 'li') {
      //ps：需要处理可能出现的子集嵌套问题
      const isOrder = getTagName(<HTMLElement>node.parentElement) == 'ol'
      result += ' '.repeat(whiteSpace) + `${!isOrder ? '- ' : uid + '. '}`
    } else if (['td', 'th'].includes(tagName)) {
      result += '| '
    } else if (tagName === 'code') {
      result += '`'
    } else if (tagName === 'i' && classList[0] != 'iconfont') {
      result += '*'
    } else if (tagName === 'br') {
      result += '&nbsp;'
    } else if (tagName === 'blockquote') {
      result += '> '
    }
    // 处理子内容
    for (let i = 0; i < children.length; i++) {
      const isElement = isElementNode(children[i])
      // 递归遍历子节点
      const _isOrderItem = isElement && getTagName(<HTMLElement>children[i].parentElement) == 'ol'
      // 如果是嵌套list 那么需要换行显示了
      isDeepList && (result += '\n')
      result += resumeDOMStruct2Markdown({
        parent: node,
        node: children[i],
        latest: i === children.length - 1,
        uid: _isOrderItem ? ++uid : 0,
        whiteSpace: isDeepList ? whiteSpace + TAB_SIZE : whiteSpace // 处理列表的嵌套解析
      })
    }
    if (classList.contains('flex-layout')) {
      result += '::: end' // 如果是指定的类名，则添加结束语法到结果字符串中
    } else if (classList.contains('head-layout')) {
      result += '::: headEnd' // 如果是指定的类名，则添加头部结束语法到结果字符串中
    } else if (classList.contains('main-layout')) {
      result += '::: mainEnd' // 同上
    } else if (classList.contains('flex-layout-item') && !latest) {
      result += '\n:::' // 如果是指定的类名，则添加内容语法到结果字符串中
    } else if (tagName == 'a') {
      result += `](${(node as HTMLElement).getAttribute('href')})`
    } else if (['b', 'strong'].includes(tagName)) {
      result += '**'
    } else if (tagName == 'img') {
      const alt = (node as HTMLImageElement).alt
      const isAvatar = alt?.includes('个人头像')
      result += `![${isAvatar ? '个人头像' : alt}](${(node as HTMLImageElement).src})`
    } else if (tagName === 'tr') {
      result += '|'
    } else if (['th', 'td'].includes(tagName)) {
      result += ' '
    } else if (tagName === 'code') {
      result += '`'
    } else if (tagName === 'i' && classList[0] != 'iconfont') {
      result += '*'
    }
    if (
      !['b', 'span', 'strong', 'a', 'i', 'td', 'th', 'thead', 'code', 'ul', 'ol'].includes(tagName)
    ) {
      result += '\n'
    }
  } else {
    // 处理文本节点 清空前后空格
    const content = (node as Text).textContent || ''
    result += content // 将文本内容添加到结果字符串中
  }
  return result
}
