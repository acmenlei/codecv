import { warningMessage } from "@/common/message";
import { Heap, importCSS, optimalizing, Optimalizing, OptimalizingItem } from "@/common/utils";
import { markdownToHTML } from "markdown-transform-html";
import { onActivated, ref, watch } from "vue";

export function useCustomCSS() {
  let cssFlag = ref(false);
  let cssText = ref(""), styles = new Set;

  function removeStyleDOM() {
    const styleDOMs = document.querySelector("head")?.querySelectorAll("style[custom-css-style]");
    styleDOMs?.forEach(style => style.remove())
    styles.clear(); // set中存储的样式表也需要清空
  }

  function toggleDialog() {
    cssFlag.value = !cssFlag.value;
  }

  function appendStyle() {
    cssFlag.value = false;
    let cssValue = cssText.value.trim();
    if (!cssText.value || styles.has(cssValue)) {
      return;
    }
    removeStyleDOM(); // 清空之前的样式表重新来一个新的样式表
    styles.add(cssValue);
    const styleDOM = document.createElement("style");
    styleDOM.setAttribute('custom-css-style', 'true');
    styleDOM.textContent = cssValue;
    document.querySelector('head')?.appendChild(styleDOM);
  }

  function removeStyle() {
    cssFlag.value = false;
    removeStyleDOM();
    cssText.value = '';
  }

  return {
    cssFlag,
    cssText,
    toggleDialog,
    appendStyle,
    removeStyle
  }
}

export function useRenderHTML(props: { content: string, resumeType: string }) {
  const renderDOM = ref<HTMLElement>(document.body);

  onActivated(() => {
    importCSS(props.resumeType)
    renderDOM.value.innerHTML = markdownToHTML(props.content);
  })

  watch(() => props.content, (v) => {
    renderDOM.value.innerHTML = markdownToHTML(v);
  })
  // 刷新页面（这里是一个比较有问题的点）
  watch(() => props.resumeType, () => {
    location.reload()
  })

  return {
    renderDOM
  }
}

/* 自动一页 Start */
export function useAutoOnePage() {
  const autoOnePage = ref(false)

  function removeStyle() {
    const autoOnePageStyles = document.head.querySelectorAll('style[auto-one-page]');
    autoOnePageStyles.forEach(style => style.remove())
  }

  async function setAutoOnePage() {
    if (autoOnePage.value) {
      const container: HTMLElement = document.querySelector('.markdown-transform-html') as HTMLElement;
      const difference = 1123 - container?.clientHeight;
      if (difference < 0 && difference < -200) {
        warningMessage('你的内容有点太多啦！压缩成一页的话不太美观哦～')
        return
      }
      if (difference > 0 && difference > 500) {
        warningMessage('你的内容有点太少了！压缩成一页的话不太美观哦，再填写一点内容吧～')
        return
      }
      const { differenceConfig, map } = useInitMarginTop(container);
      useOnePageCSSContent(differenceConfig, difference, map)
    } else {
      removeStyle()
    }
  }

  onActivated(() => removeStyle())
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

function useOnePageCSSContent(optimaliza: OptimalizingItem[], difference: number, map: Map<string, number>) {
  const heap = new Heap((x, y) => difference < 0 ? x.optimal < y.optimal : x.optimal > y.optimal);
  for (let optimal of optimaliza) {
    heap.push(optimal);
  }

  if (difference < 0) {
    // console.log("超出了一页内容长度：", difference, heap.container)
    while (difference++ < 0) {
      let topEl = heap.pop();
      topEl!.top = topEl!.top - 1 / (map.get(topEl!.tag) || 1);
      // console.log("处理中：", topEl!.tag, 1 / (map.get(topEl!.tag) || 1))
      topEl!.optimal = (topEl!.max - topEl!.top) / topEl!.max;
      heap.push(topEl as OptimalizingItem)
    }
  } else {
    // console.log("不足一页内容长度：", difference, heap.container)
    while (difference-- > 0) {
      let topEl = heap.pop();
      // console.log("处理前：", topEl?.tag, topEl?.top)
      topEl!.top = topEl!.top + 1 / (map.get(topEl!.tag) || 1);
      // console.log("处理后：", topEl?.tag, topEl?.top)
      topEl!.optimal = (topEl!.max - topEl!.top) / topEl!.max;
      heap.push(topEl as OptimalizingItem)
    }
  }
  // 创建样式表
  const styleDOM = document.createElement('style'), prefix = '.jufe ';
  let cssText = '';
  styleDOM.setAttribute('auto-one-page', 'true');

  for (let optimal of heap.container) {
    cssText += `${prefix}${optimal.tag} { margin-top: ${optimal.top}px }`;
  }
  styleDOM.textContent = cssText;
  document.head.appendChild(styleDOM);
}