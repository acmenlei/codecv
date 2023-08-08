import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/common/localstorage'
import { createStyle, query, removeHeadStyle, convert, createDIV } from '@/utils'
import {
  getFontFamily,
  getLineHeight,
  getPrimaryBGColor,
  getPrimaryColor
} from '@/templates/config'
import { onActivated, onMounted, reactive, ref } from 'vue'
import { warningMessage } from '@/common/message'

const get = getLocalStorage,
  set = setLocalStorage
export const CUSTOM_CSS_STYLE = 'custom-css-style',
  CUSTOM_MARKDOWN_PRIMARY_COLOR = 'custom-markdown-primary-color',
  CUSTOM_MARKDOWN_PRIMARY_BG_COLOR = 'custom_markdown_primary_bg_color',
  MARKDOWN_FONT = 'markdown-font',
  ADJUST_RESUME_MARGIN_TOP = 'ADJUST_RESUME_MARGIN_TOP',
  AUTO_ONE_PAGE = 'auto-one-page',
  WHITE_SPACE = 'white-space',
  LINE_HEIGHT = 'Line_Height',
  A4_HEIGHT = 1123,
  SELF_HEIGHT = -1234

export const renderCV = ref<HTMLElement>()
export const step = ref<number>(90)
export const pageSize = ref<number>(1)

export function setStep(val: number | any) {
  step.value = val
}

function queryRenderCV() {
  return <HTMLElement>document.querySelector('.reference-dom')
}

export function useAvatar(emits: any) {
  async function setAvatar(event: any) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file) // 暂时用base64处理 后期换cdn
    reader.onload = function (event) {
      emits('upload-avatar', event.target?.result)
    }
  }

  return {
    setAvatar
  }
}

export function useCustomCSS(resumeType: string) {
  const cssDialog = ref(false),
    cacheKey = CUSTOM_CSS_STYLE + '-' + resumeType
  const cssText = ref(get(cacheKey) ? (get(cacheKey) as string) : '')

  function toggleDialog() {
    cssDialog.value = !cssDialog.value
  }

  function setStyle() {
    cssDialog.value = false
    let style = query(cacheKey)

    const cssValue = cssText.value.trim(),
      isAppend = style
    if (!cssText.value) {
      return
    }
    if (!style) {
      style = createStyle()
      style.setAttribute(cacheKey, 'true')
    }
    style.textContent = cssValue
    !isAppend && document.head?.appendChild(style)
    set(cacheKey, cssValue)
  }

  function removeStyle() {
    cssDialog.value = false
    removeHeadStyle(cacheKey)
    removeLocalStorage(cacheKey)
    cssText.value = ''
  }

  onActivated(() => !query(cacheKey) && setTimeout(setStyle, 50))

  return {
    cssDialog,
    cssText,
    toggleDialog,
    setStyle,
    removeStyle
  }
}

export function usePrimaryBGColor(resumeType: string) {
  const cacheKey = CUSTOM_MARKDOWN_PRIMARY_BG_COLOR + '-' + resumeType,
    initialColor = getPrimaryBGColor(resumeType)
  const primaryColor = ref(get(cacheKey) ? (get(cacheKey) as string) : initialColor)

  function setPrimaryColor(color: string | null) {
    if (!color) {
      primaryColor.value = initialColor
      color = initialColor
    }
    let style = query(cacheKey)
    const append = style
    if (!style) {
      style = createStyle()
      style.setAttribute(cacheKey, 'true')
    }
    style.textContent = `:root { --markdown-primary-bg-color: ${color}; }`
    !append && document.head.appendChild(style)
    set(cacheKey, color)
  }

  onActivated(() => !query(cacheKey) && setPrimaryColor(primaryColor.value))

  return {
    primaryColor,
    setPrimaryColor
  }
}

// todo: 回跳后颜色显示的问题，后续考虑接入后端解决
export function usePrimaryColor(resumeType: string) {
  const cacheKey = CUSTOM_MARKDOWN_PRIMARY_COLOR + '-' + resumeType,
    initialColor = getPrimaryColor(resumeType),
    color = ref(get(cacheKey) ? (get(cacheKey) as string) : initialColor)

  function setColor(value: string | null) {
    if (!value) {
      color.value = initialColor
      value = initialColor
    }
    let styleDOM = query(cacheKey)
    const isAppend = styleDOM

    if (!styleDOM) {
      styleDOM = createStyle()
      styleDOM.setAttribute(cacheKey, 'true')
    }
    styleDOM.textContent = `:root { --markdown-primary-color: ${value} }`
    !isAppend && document.head.appendChild(styleDOM)
    set(cacheKey, value)
  }

  onActivated(() => !query(cacheKey) && setColor(color.value))

  return {
    color,
    setColor
  }
}

// 自定义字体
export function useCustomFont(resumeType: string) {
  const cacheKey = MARKDOWN_FONT + '-' + resumeType
  const fontOptions = [
    {
      value: 'Noto Serif SC',
      label: 'Noto Serif SC'
    },
    {
      value: 'Noto Sans SC',
      label: 'Noto Sans SC'
    },
    {
      value: 'Nunito',
      label: 'Nunito(英文)'
    }
  ]
  const font = ref(
    get(cacheKey) ? (get(cacheKey) as string) : getFontFamily(resumeType) || fontOptions[0].value
  )

  function setFont(fontFamily: string | null, first?: boolean) {
    let style = query(cacheKey)
    const isAppend = style
    if (!style) {
      style = createStyle()
      style.setAttribute(cacheKey, 'true')
    }

    style.textContent = `.jufe * { font-family: ${fontFamily}, 'Noto Sans SC', 'Noto Serif SC', 'Nunito', sans-serif, serif; }`
    !isAppend && document.head.appendChild(style)
    set(cacheKey, fontFamily)
    const renderCV = queryRenderCV()
    ensureEmptyPreWhiteSpace(renderCV)
    !first && splitPage(renderCV)
  }

  onActivated(() => setFont(font.value, true))

  return {
    fontOptions,
    font,
    setFont
  }
}

/* 一键重置 */
export function restResumeContent(resumeType: string) {
  localStorage.removeItem(`${CUSTOM_CSS_STYLE}-${resumeType}`)
  localStorage.removeItem(`${CUSTOM_MARKDOWN_PRIMARY_COLOR}-${resumeType}`)
  localStorage.removeItem(`${CUSTOM_MARKDOWN_PRIMARY_BG_COLOR}-${resumeType}`)
  localStorage.removeItem(`${MARKDOWN_FONT}-${resumeType}`)
  localStorage.removeItem(`${AUTO_ONE_PAGE}-${resumeType}`)
  localStorage.removeItem(`${ADJUST_RESUME_MARGIN_TOP}-${resumeType}`)
  localStorage.removeItem(`${LINE_HEIGHT}-${resumeType}`)
  localStorage.removeItem(`markdown-content-${resumeType}`)
  location.reload()
}

// 调节元素边距
export function useAdjust(resumeType: string) {
  const visible = ref(false)
  const properties = reactive<IElementProperty[]>([])
  const cacheKey = ADJUST_RESUME_MARGIN_TOP + '-' + resumeType
  interface IElementProperty {
    name: string
    marginTop: number
    marginBottom: number
    tagName: string
    className: string
  }

  function getProperties(element: HTMLElement): IElementProperty[] {
    const curProperties: IElementProperty[] = []
    const seenTags = new Set<string>() // 用于记录已经处理过的标签名
    const seenClassNames = new Set<string>() // 用于记录已经处理过的类名

    function helper(el: HTMLElement) {
      if (el !== element) {
        const computedStyle = window.getComputedStyle(el) // 获取计算后的样式
        const marginTop = parseInt(computedStyle.marginTop) // 获取 marginTop 值
        const marginBottom = parseInt(computedStyle.marginBottom)
        const tagName = el.tagName.toLowerCase() // 获取标签名，转换为小写
        const className = el.className.split(' ')[0] || '' // 获取类名，如果没有则用 'No Class' 代替
        const name = convert(className || tagName)

        // 判断标签名和类名是否已经处理过，如果没有，则将其加入结果数组，并添加到 seenTags 和 seenClassNames 集合中
        if (!seenTags.has(tagName) || !seenClassNames.has(className)) {
          curProperties.push({ tagName, name, marginBottom, marginTop, className })
          seenTags.add(tagName)
          seenClassNames.add(className)
        }
      }
      // 遍历当前元素的所有子节点，并递归调用该函数
      const children = el.children
      for (let i = 0; i < children.length; i++) helper(children[i] as HTMLElement)
    }

    helper(element) // 调用递归函数开始获取 marginTop 和 lineHeight 值
    return curProperties
  }

  function adjustMargin() {
    setVisible()
    // 获取dom元素
    const targetElement = queryRenderCV()
    const curProperties = getProperties(targetElement)
    properties.length = 0
    properties.push(...curProperties)
  }

  function confirmAdjustment() {
    setVisible()
    let styleDOM = query(cacheKey),
      cssText = ''
    const isAppend = styleDOM

    if (!styleDOM) {
      styleDOM = createStyle()
      styleDOM.setAttribute(cacheKey, 'true')
    }
    for (const property of properties) {
      const target = property.className ? `.${property.className}` : property.tagName
      cssText += `.jufe ${target} {margin-top: ${property.marginTop}px!important; margin-bottom: ${property.marginBottom}px!important;}`
    }
    styleDOM.textContent = cssText
    priorityInsert(isAppend, styleDOM)
    set(cacheKey, cssText)
    const renderCV = queryRenderCV()
    ensureEmptyPreWhiteSpace(renderCV)
    splitPage(renderCV)
  }

  function priorityInsert(isAppend: Element | null, styleDOM: Element) {
    if (!isAppend) {
      // 插入到自动一页css前面 因为调整的优先级是最低的
      const autoOnePage = query(AUTO_ONE_PAGE + '-' + resumeType)
      const customCSS = query(CUSTOM_CSS_STYLE + '-' + resumeType)
      if (autoOnePage || customCSS) {
        const siblingStyle = autoOnePage || customCSS
        document.head.insertBefore(styleDOM, siblingStyle)
      } else {
        // 如果没有的话直接追加到head中
        document.head.appendChild(styleDOM)
      }
    }
  }

  function setVisible() {
    visible.value = !visible.value
  }
  // 进入页面读取历史样式 并初始化CSS
  function initAdjustCSS() {
    const adjustCSS = (get(cacheKey) as string) || ''
    if (!adjustCSS) return
    let styleDOM = query(cacheKey)
    const isAppend = styleDOM
    if (!styleDOM) {
      styleDOM = createStyle()
      styleDOM.setAttribute(cacheKey, 'true')
    }
    styleDOM.textContent = adjustCSS
    priorityInsert(isAppend, styleDOM)
  }
  // 如果页面中没有用户调整了的样式 那么就需要去初始化
  onActivated(() => !query(cacheKey) && initAdjustCSS())
  return { adjustMargin, visible, confirmAdjustment, properties }
}

// 调整行高
export function useLineHeight(resumeType: string) {
  const cacheKey = LINE_HEIGHT + '-' + resumeType
  const h = ref(get(cacheKey) ? +(get(cacheKey) as string) : +getLineHeight(resumeType))
  const lineHeightOptions = Array(30)
    .fill(0)
    .map((item, idx) => ({
      label: `${10 + idx}px`,
      value: 10 + idx
    }))
  function setLineHeight(newH: number, first?: boolean) {
    h.value = newH
    let style = query(cacheKey)
    const isAppend = style
    if (!style) {
      style = createStyle()
      style.setAttribute(cacheKey, 'true')
    }
    style.textContent = `.markdown-transform-html * { line-height: ${newH}px; }`
    !isAppend && document.head.appendChild(style)
    set(cacheKey, newH)
    const renderCV = queryRenderCV()
    ensureEmptyPreWhiteSpace(renderCV)
    !first && splitPage(renderCV)
  }

  onActivated(() => setLineHeight(h.value, true))
  return {
    h,
    lineHeightOptions,
    setLineHeight
  }
}

// 跟随滚动
export function useFollowRoll() {
  const followRoll = ref(false)
  let destory: null | (() => void) = null
  function scrollHandler() {
    if (!followRoll.value) return null
    const wem = document.querySelector('.writable-edit-mode') as HTMLElement
    const cs = document.querySelector('.cm-scroller') as HTMLElement
    const render = document.querySelector('.markdown-render') as HTMLElement
    // const reallRenderHeight = document.querySelector('.jufe') as HTMLElement
    function wemcb() {
      if (followRoll.value) {
        render.scrollTop = render.scrollHeight * (wem.scrollTop / wem.scrollHeight)
      }
    }

    function cscb() {
      if (followRoll.value) {
        render.scrollTop = render.scrollHeight * (cs.scrollTop / cs.scrollHeight)
      }
    }

    cs?.addEventListener('scroll', cscb)
    wem?.addEventListener('scroll', wemcb)

    return () => {
      wem?.removeEventListener('scroll', wemcb)
      cs?.removeEventListener('scroll', cscb)
    }
  }
  function setFollowRoll() {
    destory && destory()
    destory = scrollHandler()
  }
  onMounted(setFollowRoll)
  return {
    followRoll,
    setFollowRoll
  }
}

// 获取元素高度
function calculateElementHeight(element: HTMLElement) {
  // 获取样式对象
  const styles = getComputedStyle(element)
  // 获取元素的内容高度
  // const contentHeight = element.getBoundingClientRect().height
  const contentHeight = element.clientHeight
  // 获取元素的外边距高度
  const marginHeight =
    +styles.getPropertyValue('margin-top').slice(0, -2) +
    +styles.getPropertyValue('margin-bottom').slice(0, -2)
  // 计算元素的总高度
  const totalHeight = contentHeight + marginHeight
  return totalHeight
}

// 获取元素距离目标元素顶部偏移位
function getElementTop(element: HTMLElement, target: HTMLElement) {
  let actualTop = element.offsetTop
  let current = element.offsetParent as HTMLElement

  while (current !== target) {
    actualTop += current.offsetTop
    current = current.offsetParent as HTMLElement
  }
  return actualTop
}

// 分割视图
export function splitPage(renderCV: HTMLElement) {
  handlerWhiteBoundary(renderCV)
  let page = 0,
    realHeight = 0
  const target = renderCV.clientHeight,
    reRender = document.querySelector('.re-render') as HTMLElement
  reRender.innerHTML = ''

  while (target - realHeight > 0) {
    const wrapper = createDIV(),
      resumeNode = renderCV.cloneNode(true) as HTMLElement
    wrapper.classList.add('jufe-wrapper-page')
    // 创建里面的内容 最小化高度
    const realRenderHeight = Math.min(target - realHeight, A4_HEIGHT)
    const wrapperItem = createDIV()
    wrapperItem.classList.add('jufe-wrapper-page-item')
    wrapperItem.style.height = realRenderHeight + 'px'

    resumeNode.style.position = 'absolute'
    resumeNode.style.top = -page * A4_HEIGHT + 'px'
    resumeNode.style.left = 0 + 'px'

    wrapperItem.appendChild(resumeNode)
    wrapper.appendChild(wrapperItem)

    realHeight += A4_HEIGHT
    page++
    reRender?.appendChild(wrapper)
  }
  pageSize.value = page
}

// 确保处理之前将之前的空元素删除 否则在多页情况下多次调用会多次生成空白占位符
export function ensureEmptyPreWhiteSpace(renderCV: HTMLElement) {
  const children = Array.from(renderCV.children) as HTMLElement[]
  for (const child of children) {
    if (child.getAttribute(WHITE_SPACE)) renderCV.removeChild(child)
    else {
      ensureEmptyPreWhiteSpace(child)
    }
  }
}

function createBoundaryWhiteSpace(h: number) {
  const whiteSpace = createDIV()
  whiteSpace.setAttribute(WHITE_SPACE, 'true')
  // 创建边界空白占位符 加上顶部边距
  whiteSpace.style.height = h + 'px'
  return whiteSpace
}

// 处理边界内容截断
export function handlerWhiteBoundary(renderCV: HTMLElement) {
  const pt = +getComputedStyle(renderCV).getPropertyValue('padding-top').slice(0, -2)
  const pb = +getComputedStyle(renderCV).getPropertyValue('padding-bottom').slice(0, -2)
  const children = Array.from(renderCV.children) as HTMLElement[]
  const pageSize = { value: 1 }
  for (const child of children) {
    // 子元素的外边距也需要参与计算
    const height = calculateElementHeight(child)
    const actualTop = getElementTop(child, renderCV)
    // 如果总长度已经超出了一页A4纸的高度（除去底部边距的高度） 那么需要找到边界元素
    if (actualTop + height > A4_HEIGHT * pageSize.value - pb) {
      // 有子节点 继续查找 最小化空白元素的高度
      if (child.children.length) {
        // 新的一页 重新计算新页高度
        findBoundaryElement(child, renderCV, pt, pb, pageSize)
      } else {
        renderCV.insertBefore(
          createBoundaryWhiteSpace(A4_HEIGHT * pageSize.value - actualTop + pt),
          child
        )
        ++pageSize.value
      }
    }
  }
  return renderCV
}

// 排除多列布局不存在边界的情况
function findBoundaryElement(
  node: HTMLElement,
  target: HTMLElement,
  paddingTop: number,
  paddingBottom: number,
  pageSize: { value: number }
) {
  const children = Array.from(node.children) as HTMLElement[]
  for (const child of children) {
    const totalHeight = calculateElementHeight(child)
    const actualTop = getElementTop(child, target)
    if (actualTop + totalHeight > A4_HEIGHT * pageSize.value - paddingBottom) {
      // 直接排除一行段落文字 因为在markdown中一段文本没必要再进行深入，它们内嵌不了什么其他元素
      if (
        child.children.length &&
        !['p', 'li', 'table'].includes(child.tagName.toLocaleLowerCase())
      ) {
        findBoundaryElement(child, target, paddingTop, paddingBottom, pageSize)
      } else {
        // 找到了边界 给边界元素前插入空白元素 将内容挤压至下一页
        node.insertBefore(
          createBoundaryWhiteSpace(A4_HEIGHT * pageSize.value - actualTop + paddingTop),
          child
        )
        pageSize.value++
      }
    }
  }
}

/* 自动一页 Start */
export function useAutoOnePage(resumeType: string) {
  const cacheKey = AUTO_ONE_PAGE + '-' + resumeType,
    autoOnePage = ref<any>(getLocalStorage(cacheKey))
  async function setAutoOnePage(first?: boolean) {
    const renderCV: HTMLElement = queryRenderCV()
    ensureEmptyPreWhiteSpace(renderCV)
    if (autoOnePage.value) {
      const difference = A4_HEIGHT - renderCV?.clientHeight
      if (difference < 0 && difference < -200) {
        warningMessage('你的内容有点太多啦！压缩成一页的话不太美观哦～')
        return
      }
      if (difference > 0 && difference > 500) {
        warningMessage('你的内容有点太少了！压缩成一页的话不太美观哦，再填写一点内容吧～')
        return
      }
      const { differenceConfig, map } = getInitMarginTop(renderCV)
      useOnePageCSSContent(differenceConfig, difference, map, cacheKey, resumeType)
    } else {
      removeHeadStyle(cacheKey)
    }
    // 缓存3个小时
    setLocalStorage(cacheKey, autoOnePage.value)
    !first && splitPage(renderCV)
  }
  onActivated(() => !query(cacheKey) && setTimeout(() => setAutoOnePage(true), 50))

  return {
    autoOnePage,
    setAutoOnePage
  }
}

function getInitMarginTop(container: HTMLElement) {
  const titles = Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6,li,p')),
    differenceConfig: priorityDefineItem[] = []
  const visited = new Set(),
    map = new Map()
  for (const title of titles) {
    const tag = title.tagName.toLowerCase()
    map.set(tag, (map.get(tag) || 0) + 1)
    if (visited.has(tag)) {
      continue
    }
    visited.add(tag)
    const top = +getComputedStyle(title, null).marginTop.slice(0, -2)
    const cur = { ...priorityDefine[tag as keyof priorityDefine], top, tag }
    // 计算优先级
    const optimal = cur.top / cur.max
    cur.optimal = optimal
    differenceConfig.push(cur)
  }
  return { differenceConfig, map }
}

// 计算优先级 以及 处理优先级高的数据
export const priorityDefine = {
  h1: { max: 30, min: -15, top: 0, tag: '', optimal: 0 },
  h2: { max: 30, min: -15, top: 0, tag: '', optimal: 0 },
  h3: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  h4: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  h5: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  h6: { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  li: { max: 10, min: -15, top: 0, tag: '', optimal: 0 },
  p: { max: 10, min: -15, top: 0, tag: '', optimal: 0 }
}
export type priorityDefineItem = (typeof priorityDefine)['h1']
export type priorityDefine = typeof priorityDefine
const defaultCmp = (x: priorityDefineItem, y: priorityDefineItem) => x.optimal > y.optimal // 默认是最大堆
const swap = (arr: priorityDefineItem[], i: number, j: number) =>
  ([arr[i], arr[j]] = [arr[j], arr[i]])
export class Heap {
  // 默认是最大堆
  container: priorityDefineItem[] = []
  cmp = defaultCmp
  constructor(cmp: (x: priorityDefineItem, y: priorityDefineItem) => boolean) {
    this.cmp = cmp
  }
  push(data: priorityDefineItem) {
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

function useOnePageCSSContent(
  priority: priorityDefineItem[],
  difference: number,
  map: Map<string, number>,
  cacheKey: string,
  resumeType: string
) {
  const heap = new Heap((x, y) => (difference < 0 ? x.optimal > y.optimal : x.optimal < y.optimal))
  for (const optimal of priority) {
    heap.push(optimal)
  }
  if (difference < 0) {
    // 大顶堆 (收缩要减掉内边距 暂时这么写)
    while (difference++ < 20) {
      const topEl = heap.pop() as priorityDefineItem
      topEl.top = topEl.top - 1 / (map.get(topEl.tag) || 1)
      topEl.optimal = topEl.top / topEl.max
      heap.push(topEl as priorityDefineItem)
    }
  } else {
    // 小顶堆 (拉伸也要减掉内边距 思路同上)
    while (difference-- > 20) {
      const topEl = heap.pop() as priorityDefineItem
      topEl.top = topEl.top + 1 / (map.get(topEl.tag) || 1)
      topEl.optimal = topEl.top / topEl.max
      heap.push(topEl as priorityDefineItem)
    }
  }
  // 创建样式表
  const styleDOM = createStyle(),
    prefix = '.jufe '
  let cssText = ''
  styleDOM.setAttribute(cacheKey, 'true')

  for (const optimal of heap.container) {
    // 权重加高 防止被覆盖
    cssText += `${prefix}${optimal.tag} { margin-top: ${optimal.top}px!important; }`
  }
  styleDOM.textContent = cssText
  // 插入到自定义CSS前面 因为自动一页的优先级是第二高的
  const customCSS = query(CUSTOM_CSS_STYLE + '-' + resumeType)
  customCSS ? document.head.insertBefore(styleDOM, customCSS) : document.head.appendChild(styleDOM)
}
