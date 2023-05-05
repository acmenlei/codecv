import { themes } from '@/templates/config'
import { ElLoading } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { errorMessage, successMessage } from '../message'
import { markdownToHTML } from 'markdown-transform-html'

export async function importCSS(name: string) {
  const res = await import(`../../templates/modules/${name}/style.scss`)
  return res.default
}

export const getCurrentTypeContent = (type: string): string => {
  for (const theme of themes) {
    if (type === theme.type) {
      return theme.content
    }
  }
  return ''
}

// 计算优先级 以及 处理优先级高的数据
export const optimalizing = {
  h1: { max: 30, min: -15, top: 0, tag: '', optimal: 0 },
  h2: { max: 30, min: -15, top: 0, tag: '', optimal: 0 },
  h3: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  h4: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  h5: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  h6: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  li: { max: 10, min: -15, top: 0, tag: '', optimal: 0 },
  p: { max: 10, min: -15, top: 0, tag: '', optimal: 0 }
}
export type OptimalizingItem = (typeof optimalizing)['h1']
export type Optimalizing = {
  h1: OptimalizingItem
  h2: OptimalizingItem
  h3: OptimalizingItem
  h4: OptimalizingItem
  h5: OptimalizingItem
  h6: OptimalizingItem
  li: OptimalizingItem
  p: OptimalizingItem
}
const defaultCmp = (x: OptimalizingItem, y: OptimalizingItem) => x.optimal > y.optimal // 默认是最大堆
const swap = (arr: OptimalizingItem[], i: number, j: number) =>
  ([arr[i], arr[j]] = [arr[j], arr[i]])
export class Heap {
  // 默认是最大堆
  container: OptimalizingItem[] = []
  cmp = defaultCmp
  constructor(cmp: (x: OptimalizingItem, y: OptimalizingItem) => boolean) {
    this.cmp = cmp
  }
  push(data: OptimalizingItem) {
    const { container, cmp } = this
    container.push(data)
    let index = container.length - 1
    while (index) {
      const parent = Math.floor((index - 1) / 2)
      if (!cmp(container[index], container[parent])) {
        return
      }
      swap(container, index, parent)
      index = parent
    }
  }
  pop() {
    const { container, cmp } = this
    if (!container.length) {
      return null
    }
    swap(container, 0, container.length - 1)
    const res = container.pop()
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1
    while (exchange < length) {
      // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
      const right = index * 2 + 2
      if (right < length && cmp(container[right], container[exchange])) {
        exchange = right
      }
      if (!cmp(container[exchange], container[index])) {
        break
      }
      swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
    return res
  }

  top() {
    if (this.container.length) return this.container[0]
    return null
  }

  isEmpty() {
    return this.container.length === 0
  }
}

export function createStyle() {
  return document.createElement('style')
}

export function createDIV() {
  return document.createElement('div')
}

export function query(attr: string) {
  return document.head.querySelector(`style[${attr}]`)
}

export function removeHeadStyle(attr: string) {
  query(attr)?.remove()
}
function extractRgb(rgbString: string) {
  // 使用正则表达式提取括号中的数字
  const matches = rgbString.match(/\d+/g) as string[]
  // 将字符串转换为数字并返回一个包含RGB值的数组
  return matches.map((match: string) => parseInt(match))
}

export function getPdf(title: string, html: HTMLElement) {
  const { showLoading, closeLoading } = useLoading()
  showLoading('正在导出PDF 请耐心等待...')
  const backgroundColor = getComputedStyle(html).getPropertyValue('background-color')
  const [r, g, b] = extractRgb(backgroundColor)
  html2canvas(html, {
    allowTaint: false,
    logging: false,
    useCORS: true,
    scale: 4,
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

export function useLoading() {
  let loading: any = null
  function showLoading(text: string) {
    loading = ElLoading.service({
      lock: true,
      text,
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  function closeLoading() {
    loading && loading.close()
  }
  return {
    showLoading,
    closeLoading
  }
}

export function scrollTo(targetTop = 0) {
  const documentBody: HTMLElement = document.documentElement || document.body
  // 计算gap
  let GAP = Math.abs(documentBody.scrollTop - targetTop) / 20,
    currentScrollTop = 0,
    preScrollTop = -1

  const _GAP = GAP

  function scrollHelper() {
    currentScrollTop = documentBody.scrollTop
    // 距离目标还有多远
    const currentDistance = currentScrollTop - targetTop
    // 1. 超过了最大最小值
    // 2. 刚好走完了
    if (preScrollTop == currentScrollTop || currentDistance == 0) {
      return
    }
    preScrollTop = currentScrollTop

    window.requestAnimationFrame(function () {
      GAP = currentDistance > 0 ? _GAP : -_GAP
      currentScrollTop -= GAP
      // 如果距离比较小那么直接定位即可
      if (Math.abs(currentDistance) < _GAP) {
        documentBody.scrollTop = targetTop
        return
      }
      documentBody.scrollTop = currentScrollTop
      Math.abs(currentDistance) > 0 && scrollHelper()
    })
  }
  scrollHelper()
}

export function calcOffsetTop(dom: HTMLElement) {
  let height = dom?.offsetTop,
    parent = dom?.offsetParent as HTMLElement
  while (parent !== null) {
    height += parent.offsetTop
    parent = parent.offsetParent as HTMLElement
  }
  return height
}

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
// 简历模块拆分
function contentPackage(DOMStr: string) {
  DOMStr = DOMStr.replaceAll('::: mainStart', '<div class=main-layout>').replaceAll(
    '::: mainEnd',
    '</div>'
  )
  const fragment = document.createElement('div')
  fragment.innerHTML = DOMStr
  const hasMainLayout = fragment.querySelector('.main-layout')
  const searchStart = hasMainLayout || fragment
  const nodes = Array.from(searchStart.childNodes) as HTMLElement[]

  let container = null,
    result = document.createElement('div')

  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) continue
    if (node.tagName.toLocaleLowerCase() === 'h2') {
      if (container) {
        result.appendChild(container)
      }
      container = document.createElement('div')
      container.className = 'resume-module'
      container.appendChild(node)
    } else {
      container ? container.appendChild(node) : result.appendChild(node)
    }
  }
  // 最后的也添加
  container && result.appendChild(container)
  if (hasMainLayout) {
    fragment.replaceChild(result, searchStart)
    result.className = 'main-layout'
    result = fragment
  }
  return result
}

export function convertDOM(DOMStr: string) {
  return contentPackage(markdownToHTML(DOMStr))
}
