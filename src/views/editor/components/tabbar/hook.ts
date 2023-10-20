import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/common/localstorage'
import { createStyle, query, removeHeadStyle, convert, createDIV } from '@/utils'
import { getFontFamily, getPrimaryBGColor, getPrimaryColor } from '@/templates/config'
import { onActivated, onMounted, reactive, ref } from 'vue'

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

// 分割视图
export function splitPage(renderCV: HTMLElement) {
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
