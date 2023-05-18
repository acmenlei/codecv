import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/common/hooks/useLcoaStoage'
import { warningMessage } from '@/common/message'
import {
  createDIV,
  createStyle,
  query,
  removeHeadStyle,
  Heap,
  optimalizing,
  Optimalizing,
  OptimalizingItem
} from '@/common/utils'
import { getPrimaryBGColor, getPrimaryColor } from '@/templates/config'
import { onActivated, onMounted, reactive, ref } from 'vue'

const get = getLocalStorage,
  set = setLocalStorage
const CUSTOM_CSS_STYLE = 'custom-css-style',
  CUSTOM_MARKDOWN_PRIMARY_COLOR = 'custom-markdown-primary-color',
  CUSTOM_MARKDOWN_PRIMARY_BG_COLOR = 'custom_markdown_primary_bg_color',
  MARKDOWN_FONT = 'markdown-font',
  AUTO_ONE_PAGE = 'auto-one-page',
  ADJUST_RESUME_MARGIN_TOP = 'ADJUST_RESUME_MARGIN_TOP',
  A4_HEIGHT = 1123

export const step = ref(90)
export function setStep(val: number | any) {
  step.value = val
}

export function useAvatar(emits: any) {
  function setAvatar(event: any) {
    const file = event.target.files[0]
    const path = URL.createObjectURL(file)
    emits('upload-avatar', path)
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
      value: 'Rubik',
      label: 'Rubik'
    },
    {
      value: 'Mukta',
      label: 'Mukta'
    },
    {
      value: 'Noto Sans SC',
      label: 'Noto Sans SC'
    },
    {
      value: 'Open Sans',
      label: 'Open Sans'
    },
    {
      value: 'Helvetica Neue',
      label: 'Helvetica Neue'
    },
    {
      value: 'Exo',
      label: 'Exo'
    },
    {
      value: 'Roboto Mono',
      label: 'Roboto Mono'
    }
  ]
  const font = ref(get(cacheKey) ? (get(cacheKey) as string) : 'Helvetica Neue')

  function setFont(fontFamily: string | null, frist?: boolean) {
    let style = query(cacheKey)
    const isAppend = style
    if (!style) {
      style = createStyle()
      style.setAttribute(cacheKey, 'true')
    }
    style.textContent = `.jufe { font-family: ${fontFamily}, 'Noto Sans SC', 'Helvetica Neue'; }`
    !isAppend && document.head.appendChild(style)
    set(cacheKey, fontFamily)
    !frist && splitPage(<HTMLElement>document.querySelector('.reference-dom'))
  }

  onActivated(() => setFont(font.value, true))

  return {
    fontOptions,
    font,
    setFont
  }
}

// 分割视图
export function splitPage(renderDOM: HTMLElement) {
  let page = 0,
    realHeight = 0
  const target = renderDOM.clientHeight,
    reRender = document.querySelector('.re-render') as HTMLElement
  reRender.innerHTML = ''

  while (target - realHeight > 1) {
    const wrapper = createDIV(),
      resumeNode = renderDOM.cloneNode(true) as HTMLElement
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
}

/* 自动一页 Start */
export function useAutoOnePage(resumeType: string) {
  const cacheKey = AUTO_ONE_PAGE + '-' + resumeType,
    autoOnePage = ref<any>(get(cacheKey))

  async function setAutoOnePage(frist?: boolean) {
    const container: HTMLElement = document.querySelector('.reference-dom') as HTMLElement
    if (autoOnePage.value) {
      const difference = A4_HEIGHT - container?.clientHeight
      if (difference < 0 && difference < -200) {
        warningMessage('你的内容有点太多啦！压缩成一页的话不太美观哦～')
        return
      }
      if (difference > 0 && difference > 500) {
        warningMessage('你的内容有点太少了！压缩成一页的话不太美观哦，再填写一点内容吧～')
        return
      }
      const { differenceConfig, map } = useInitMarginTop(container)
      useOnePageCSSContent(differenceConfig, difference, map, cacheKey)
    } else {
      removeHeadStyle(cacheKey)
    }
    // 缓存3个小时
    set(cacheKey, autoOnePage.value)
    !frist && splitPage(container)
  }
  onActivated(() => !query(cacheKey) && setTimeout(() => setAutoOnePage(true), 50))

  return {
    autoOnePage,
    setAutoOnePage
  }
}

function useInitMarginTop(container: HTMLElement) {
  const titles = Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6,li,p')),
    differenceConfig: OptimalizingItem[] = []
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
    const cur = { ...optimalizing[tag as keyof Optimalizing], top, tag }
    // 计算优先级
    const optimal = cur.top / cur.max
    cur.optimal = optimal
    differenceConfig.push(cur)
  }
  return { differenceConfig, map }
}

function useOnePageCSSContent(
  optimaliza: OptimalizingItem[],
  difference: number,
  map: Map<string, number>,
  cacheKey: string
) {
  const heap = new Heap((x, y) => (difference < 0 ? x.optimal > y.optimal : x.optimal < y.optimal))
  for (const optimal of optimaliza) {
    heap.push(optimal)
  }
  if (difference < 0) {
    // 大顶堆 (收缩要减掉内边距 暂时这么写)
    while (difference++ < 20) {
      const topEl = heap.pop() as OptimalizingItem
      topEl.top = topEl.top - 1 / (map.get(topEl.tag) || 1)
      topEl.optimal = topEl.top / topEl.max
      heap.push(topEl as OptimalizingItem)
    }
  } else {
    // 小顶堆 (拉伸也要减掉内边距 思路同上)
    while (difference-- > 20) {
      const topEl = heap.pop() as OptimalizingItem
      topEl.top = topEl.top + 1 / (map.get(topEl.tag) || 1)
      topEl.optimal = topEl.top / topEl.max
      heap.push(topEl as OptimalizingItem)
    }
  }
  // 创建样式表
  const styleDOM = createStyle(),
    prefix = '.jufe '
  let cssText = ''
  styleDOM.setAttribute(cacheKey, 'true')

  for (const optimal of heap.container) {
    cssText += `${prefix}${optimal.tag} { margin-top: ${optimal.top}px!important; }`
  }
  styleDOM.textContent = cssText
  document.head.appendChild(styleDOM)
}
/* 一键重置 */
export function restResumeContent(resumeType: string) {
  localStorage.removeItem(`${CUSTOM_CSS_STYLE}-${resumeType}`)
  localStorage.removeItem(`${CUSTOM_MARKDOWN_PRIMARY_COLOR}-${resumeType}`)
  localStorage.removeItem(`${CUSTOM_MARKDOWN_PRIMARY_BG_COLOR}-${resumeType}`)
  localStorage.removeItem(`${MARKDOWN_FONT}-${resumeType}`)
  localStorage.removeItem(`${AUTO_ONE_PAGE}-${resumeType}`)
  localStorage.removeItem(`${ADJUST_RESUME_MARGIN_TOP}-${resumeType}`)
  localStorage.removeItem(`markdown-content-${resumeType}`)
  location.reload()
}

// 调节元素边距
export function useAdjust(resumeType: string) {
  const visiable = ref(false),
    marginData = reactive<ElementMarginTop[]>([]),
    cacheKey = ADJUST_RESUME_MARGIN_TOP + '-' + resumeType
  interface ElementMarginTop {
    name: string
    marginTop: number
    tagName: string
    className: string
  }

  function getAllMarginTopValues(element: HTMLElement): ElementMarginTop[] {
    const marginTopValues: ElementMarginTop[] = []
    const seenTags = new Set<string>() // 用于记录已经处理过的标签名
    const seenClassNames = new Set<string>() // 用于记录已经处理过的类名

    function getMarginTopValuesRecursive(el: HTMLElement) {
      if (el !== element) {
        const computedStyle = window.getComputedStyle(el) // 获取计算后的样式
        const marginTop = parseInt(computedStyle.marginTop) // 获取 marginTop 值
        const tagName = el.tagName.toLowerCase() // 获取标签名，转换为小写
        const className = el.className.split(' ')[0] || '' // 获取类名，如果没有则用 'No Class' 代替
        const name = convert(className || tagName)

        // 判断标签名和类名是否已经处理过，如果没有，则将其加入结果数组，并添加到 seenTags 和 seenClassNames 集合中
        if (!seenTags.has(tagName) || !seenClassNames.has(className)) {
          marginTopValues.push({ tagName, name, marginTop, className })
          seenTags.add(tagName)
          seenClassNames.add(className)
        }
      }

      // 遍历当前元素的所有子节点，并递归调用该函数
      const children = el.children
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement
        getMarginTopValuesRecursive(child)
      }
    }

    getMarginTopValuesRecursive(element) // 调用递归函数开始获取 marginTop 值
    return marginTopValues
  }

  function convert(target: string) {
    switch (target) {
      case 'h1':
        return '一级标题'
      case 'h2':
        return '二级标题'
      case 'h3':
        return '三级标题'
      case 'h4':
        return '四级标题'
      case 'h5':
        return '五级标题'
      case 'h6':
        return '六级标题'
      case 'strong':
        return '强调/加粗'
      case 'a':
        return '链接'
      case 'p':
        return '普通文本'
      case 'li':
        return '列表项'
      case 'ul':
        return '无序列表'
      case 'ol':
        return '有序列表'
      case 'single-code':
        return '代码框'
      case 'head-layout':
        return '个人信息栏'
      case 'flex-layout':
        return '多列布局'
      case 'flex-layout-item':
        return '多列布局项'
      case 'iconfont':
        return '字体图标'
      case 'img':
        return '证件照/图片'
      case 'table':
        return '表格'
      case 'thead':
        return '表头'
      case 'tr':
        return '表行'
      case 'th':
        return '表头单元格'
      case 'tbody':
        return '表格主体'
      case 'td':
        return '表格数据单元格'
    }
    return target
  }
  function adjustMargin() {
    setVisiable()
    // 获取dom元素
    const targetElement = document.querySelector('.jufe') as HTMLElement
    const marginTopValues = getAllMarginTopValues(targetElement)
    marginData.length = 0
    console.log(marginData)
    marginData.push(...marginTopValues)
  }

  function confirmAdjustment() {
    setVisiable()
    // console.log(marginData)
    let styleDOM = query(cacheKey),
      cssText = ''
    const isAppend = styleDOM

    if (!styleDOM) {
      styleDOM = createStyle()
      styleDOM.setAttribute(cacheKey, 'true')
    }
    for (const marginItem of marginData) {
      const target = marginItem.className ? `.${marginItem.className}` : marginItem.tagName
      cssText += `.jufe ${target} {margin-top: ${marginItem.marginTop}px!important; }`
    }
    styleDOM.textContent = cssText
    !isAppend && document.head.appendChild(styleDOM)
    set(cacheKey, cssText)
    splitPage(document.querySelector('.reference-dom') as HTMLElement)
  }

  function setVisiable() {
    visiable.value = !visiable.value
  }
  // 初始化css
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
    !isAppend && document.head.appendChild(styleDOM)
    // 初始化不需要做切割
  }
  // 如果页面中没有用户调整了的样式 那么就需要去初始化
  onActivated(() => !query(cacheKey) && initAdjustCSS())
  return { adjustMargin, visiable, confirmAdjustment, marginData }
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
