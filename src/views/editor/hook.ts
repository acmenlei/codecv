import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/common/hooks/useLcoaStoage";
import { errorMessage, successMessage, warningMessage } from "@/common/message";
import { createDIV, createStyle, getCurrentTypeContent, getPdf, Heap, importCSS, optimalizing, Optimalizing, OptimalizingItem, query, removeHeadStyle } from "@/common/utils";
import { markdownToHTML } from "markdown-transform-html";
import { onActivated, onDeactivated, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const AUTO_ONE_PAGE = 'auto-one-page',
  CUSTOM_CSS_STYLE = 'custom-css-style',
  CUSTOM_MARKDOWN_PRIMARY_COLOR = 'custom-markdown-primary-color',
  MARKDOWN_CONTENT = 'markdown-content',
  MARKDOWN_FONT = 'markdown-font',
  A4_HEIGHT = 1123;

const set = setLocalStorage, get = getLocalStorage;

export function useCustomCSS(resumeType: string) {
  let cssDialog = ref(false), cacheKey = CUSTOM_CSS_STYLE + '-' + resumeType;
  let cssText = ref(get(cacheKey) ? get(cacheKey) as string : '');

  function toggleDialog() {
    cssDialog.value = !cssDialog.value;
  }

  function setStyle() {
    cssDialog.value = false;
    let cssValue = cssText.value.trim(), style = query(cacheKey), isAppend = style;
    if (!cssText.value) {
      return;
    }
    if (!style) {
      style = createStyle();
      style.setAttribute(cacheKey, 'true');
    }
    style.textContent = cssValue;
    !isAppend && document.head?.appendChild(style);
    set(cacheKey, cssValue);
  }

  function removeStyle() {
    cssDialog.value = false;
    removeHeadStyle(cacheKey);
    removeLocalStorage(cacheKey);
    cssText.value = '';
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

export function useRenderHTML(props: { content: string, resumeType: string }) {
  const renderDOM = ref<HTMLElement>(document.body);
  onActivated(() => {
    importCSS(props.resumeType);
    renderDOM.value.innerHTML = markdownToHTML(props.content);
    setTimeout(() => splitPage(renderDOM.value), 100);
  })

  watch(() => props.content, (v) => {
    renderDOM.value.innerHTML = markdownToHTML(v);
    setTimeout(() => splitPage(renderDOM.value), 50);
  })
  // 刷新页面（这里是一个比较有问题的点）
  watch(() => props.resumeType, () => {
    location.reload()
  })
  return {
    renderDOM
  }
}
// 分割视图
export function splitPage(renderDOM: HTMLElement) {
  let curHeight = 0, realHeight = 0, target = renderDOM.clientHeight, reRender = document.querySelector('.re-render');

  reRender!.innerHTML = '';
  while (realHeight < target) {
    const wrapper = createDIV(), resumeNode = renderDOM.cloneNode(true) as HTMLElement;
    wrapper.classList.add('jufe-wrapper-page');
    // 创建里面的内容 最小化高度
    let realRenderHeight = Math.min(target - realHeight, A4_HEIGHT);
    const wrapperItem = createDIV();
    wrapperItem.classList.add('jufe-wrapper-page-item');
    wrapperItem.style.height = realRenderHeight + 'px';

    resumeNode.style.position = 'absolute';
    resumeNode.style.top = curHeight + 'px';
    resumeNode.style.left = 0 + 'px';

    wrapperItem.appendChild(resumeNode);
    wrapper.appendChild(wrapperItem);

    curHeight -= A4_HEIGHT + 18;
    realHeight += A4_HEIGHT;

    const splitDOM = createDIV();
    splitDOM.classList.add('jufe-wrapper-page-split');
    curHeight += 18;

    reRender?.appendChild(wrapper);
    reRender?.appendChild(splitDOM);
  }
}

/* 自动一页 Start */
export function useAutoOnePage(resumeType: string) {
  const cacheKey = AUTO_ONE_PAGE + '-' + resumeType, autoOnePage = ref(get(cacheKey))

  async function setAutoOnePage() {
    const container: HTMLElement = document.querySelector('.markdown-transform-html') as HTMLElement;
    if (autoOnePage.value) {
      const difference = A4_HEIGHT - container?.clientHeight;
      if (difference < 0 && difference < -200) {
        warningMessage('你的内容有点太多啦！压缩成一页的话不太美观哦～')
        return
      }
      if (difference > 0 && difference > 500) {
        warningMessage('你的内容有点太少了！压缩成一页的话不太美观哦，再填写一点内容吧～')
        return
      }
      const { differenceConfig, map } = useInitMarginTop(container);
      useOnePageCSSContent(differenceConfig, difference, map, cacheKey)
    } else {
      removeHeadStyle(cacheKey)
    }
    // 缓存3个小时
    set(cacheKey, autoOnePage.value)
    splitPage(container);
  }
  onActivated(() => !query(cacheKey) && setTimeout(setAutoOnePage, 50))

  return {
    autoOnePage,
    setAutoOnePage
  }
}

function useInitMarginTop(container: HTMLElement) {
  const titles = Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6,li,p')), differenceConfig: OptimalizingItem[] = [];
  const visited = new Set, map = new Map
  for (let title of titles) {
    const tag = title.tagName.toLowerCase();
    map.set(tag, (map.get(tag) || 0) + 1)
    if (visited.has(tag)) {
      continue;
    }
    visited.add(tag);
    const top = +getComputedStyle(title, null).marginTop.slice(0, -2);
    const cur = { ...optimalizing[tag as keyof Optimalizing], top, tag }
    // 计算优先级
    let optimal = (cur.max - cur.top) / cur.max;
    cur.optimal = optimal;
    differenceConfig.push(cur)
  }
  return { differenceConfig, map };
}

function useOnePageCSSContent(optimaliza: OptimalizingItem[], difference: number, map: Map<string, number>, cacheKey: string) {
  const heap = new Heap((x, y) => difference < 0 ? x.optimal < y.optimal : x.optimal > y.optimal);
  for (let optimal of optimaliza) {
    heap.push(optimal);
  }

  if (difference < 0) {
    // console.log("超出了一页内容长度：", difference, heap.container)
    while (difference++ < 0) {
      let topEl = heap.pop();
      topEl!.top = topEl!.top - 1 / (map.get(topEl!.tag) || 1);
      topEl!.optimal = (topEl!.max - topEl!.top) / topEl!.max;
      heap.push(topEl as OptimalizingItem)
    }
  } else {
    // console.log("不足一页内容长度：", difference, heap.container)
    while (difference-- > 0) {
      let topEl = heap.pop();
      topEl!.top = topEl!.top + 1 / (map.get(topEl!.tag) || 1);
      topEl!.optimal = (topEl!.max - topEl!.top) / topEl!.max;
      heap.push(topEl as OptimalizingItem)
    }
  }
  // 创建样式表
  const styleDOM = createStyle(), prefix = '.jufe ';
  let cssText = '';
  styleDOM.setAttribute(cacheKey, 'true');

  for (let optimal of heap.container) {
    cssText += `${prefix}${optimal.tag} { margin-top: ${optimal.top}px }`;
  }
  styleDOM.textContent = cssText;
  document.head.appendChild(styleDOM);
}

// todo: 回跳后颜色显示的问题，后续考虑接入后端解决
export function useCustomColor(resumeType: string) {
  const cacheKey = CUSTOM_MARKDOWN_PRIMARY_COLOR + '-' + resumeType,
    color = ref(get(cacheKey) ? get(cacheKey) as string : '#333');

  function setColor(value: string) {
    let styleDOM = query(cacheKey), isAppend = styleDOM,
      prefix = '.markdown-transform-html ',
      doms = ['', 'h1', 'h2', 'a'],
      cssText = "";

    if (!styleDOM) {
      styleDOM = createStyle();
      styleDOM.setAttribute(cacheKey, 'true');
    }
    for (let dom of doms) {
      cssText += `${prefix}${dom} { color: ${value}; ${['h1', 'h2'].includes(dom) ? `border-color: ${value}` : ''} }`
    }
    // 排除head layout布局中的元素 让他继承父元素 (head-layout选择器中定义好了颜色 直接继承即可)
    cssText += `${prefix}.head-layout h1,${prefix}.head-layout h2 { color: inherit; }`
    styleDOM.textContent = cssText;
    !isAppend && document.head.appendChild(styleDOM);
    set(cacheKey, value);
  }

  onActivated(() => !query(cacheKey) && setTimeout(() => setColor(color.value), 50))

  return {
    color,
    setColor
  }
}

// 缓存用户输入的content内容
export function useMarkdownContent(resumeType: Ref<string>) {
  const cacheKey = MARKDOWN_CONTENT + '-' + resumeType.value;
  let content = ref(get(cacheKey) ? get(cacheKey) as string : getCurrentTypeContent(resumeType.value));

  function setContent(str: string) {
    if (!str) {
      return;
    }
    content.value = str;
    setLocalStorage(cacheKey, content.value);
  }

  return {
    content,
    setContent
  }
}

export function useResumeType() {
  const route = useRoute();
  //初始化也需要填上值 否则后续更新不一致会导致刷新死循环
  const resumeType = ref(route.query.type ? String(route.query.type) : 'front_end');
  onActivated(() => {
    resumeType.value = route.query.type ? String(route.query.type) : 'front_end';
  })
  return {
    resumeType
  }
}

export function useDownLoad(type: Ref<string>, content: Ref<string>) {
  const router = useRouter();
  const downloadDynamic = (fileName: string) => {
    getPdf(fileName, document.querySelector('.jufe') as HTMLElement)
  }

  const downloadNative = () => {
    localStorage.setItem('download', JSON.stringify(markdownToHTML(content.value)))
    router.push({ path: '/download', query: { type: type.value } })
  }

  const downloadMD = () => {
    const blob = new Blob([content.value]);
    const url = URL.createObjectURL(blob);
    const aTag = document.createElement('a')
    aTag.download = document.title + '.md';
    aTag.href = url;
    aTag.click();
    URL.revokeObjectURL(url);
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
    const reader = new FileReader();
    reader.readAsText(file, 'utf-8');
    reader.onload = function (event) {
      successMessage('导入成功~')
      setContent(event.target?.result as string || '')
    }
    reader.onerror = function () {
      errorMessage('导入失败!')
    }
  }
  return {
    importMD
  }
}

export function useCustomFont(resumeType: string) {
  const cacheKey = MARKDOWN_FONT + '-' + resumeType;
  const fontOptions = [
    {
      value: 'Helvetica Neue',
      label: 'Helvetica Neue'
    },
    {
      value: '阿里巴巴普惠体 2.0 65 Medium',
      label: '阿里巴巴普惠体 2.0 65 Medium',
    },
    {
      value: 'Menlo-Regular',
      label: 'Menlo-Regular',
    },
    {
      value: "仓耳渔阳体 W02",
      label: "仓耳渔阳体 W02",
    },
  ]
  const font = ref(get(cacheKey) ? get(cacheKey) as string : 'Helvetica Neue')

  function setFont(fontFamily: string) {
    let style = query(cacheKey), isAppend = style;
    if (!style) {
      style = createStyle();
      style.setAttribute(cacheKey, 'true');
    }
    style.textContent = `.jufe { font-family: ${fontFamily}; }`;
    !isAppend && document.head.appendChild(style);
    set(cacheKey, fontFamily);
  }

  onActivated(() => setFont(font.value))

  return {
    fontOptions,
    font,
    setFont
  }
}
// 左右移动伸缩布局
export function useMoveLayout() {
  let left = ref(700), flag = false;

  function move(event: MouseEvent) {
    if (!flag) {
      return;
    }
    left.value = event.clientX;
  }

  function down() {
    flag = true;
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
  return {
    left,
    move,
    down,
  }
}


export function useAvatar(content: Ref<string>, setContent: Function) {
  const matchAvatarSlot = /!\[个人头像\]\(.*\)/;
  function setAvatar(path: string) {
    if (!matchAvatarSlot.test(content.value)) {
      warningMessage('上传前请确保你想上传的位置在编辑器中存在 ![个人头像](...) 此关键字');
      return;
    }
    const newContent = content.value.replace(matchAvatarSlot, `![个人头像](${path})`)
    setContent(newContent);
    successMessage('头像上传成功，如果你想修改为网络图片，你可直接修改对应的链接！')
  }
  return {
    setAvatar
  }
}