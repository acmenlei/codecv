interface IReusmeDOMStruct {
  node: Node
  latest: boolean
  uid: number
}

// 处理HTML结构转markdown内容
export function resumeDOMStruct2Markdown({ node, latest, uid }: IReusmeDOMStruct) {
  let result = ''

  if (node.nodeType === Node.ELEMENT_NODE) {
    // 递归遍历子节点
    const classList = (node as HTMLElement).classList
    const tagName = (node as HTMLElement).tagName.toLowerCase() // 获取标签名

    if (classList.contains('flex-layout')) {
      result += '\n::: start\n' // 如果是指定的类名，则添加起始语法到结果字符串中
    } else if (classList.contains('iconfont')) {
      result += `icon:${classList[1].slice(5)} ` // 如果是指定的类名，则添加 icon 语法到结果字符串中
    } else if (classList.contains('head-layout')) {
      result += '\n::: headStart\n' // 如果是指定的类名，则添加头部起始语法到结果字符串中
    } else if (classList.contains('main-layout')) {
      result += '\n::: mainStart\n' // 同上
    } else if (tagName === 'a') {
      result += '['
    } else if (['b', 'strong'].includes(tagName)) {
      result += '**'
    } else if (tagName[0] === 'h') {
      result += '#'.repeat(+tagName[1]) + ' '
    } else if (tagName === 'li') {
      result += `${node.parentElement?.tagName.toLowerCase() == 'ul' ? '- ' : uid + '. '}`
    } else if (['td', 'th'].includes(tagName)) {
      result += '| '
    } else if (tagName === 'code') {
      result += '`'
    } else if (tagName === 'i' && classList[0] != 'iconfont') {
      result += '*'
    } else if (tagName === 'br') {
      result += '&nbsp;'
    }

    const children = node.childNodes
    for (let i = 0; i < children.length; i++) {
      // 递归遍历子节点
      const _isOrderItem =
        children[i].nodeType == children[i].ELEMENT_NODE &&
        children[i].parentElement?.tagName.toLowerCase() == 'ol'
      result += resumeDOMStruct2Markdown({
        node: children[i],
        latest: i === children.length - 1,
        uid: _isOrderItem ? ++uid : 0
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
    // 处理文本节点
    const content = (node as Text).textContent || ''
    result += content // 将文本内容添加到结果字符串中
  }
  return result
}
