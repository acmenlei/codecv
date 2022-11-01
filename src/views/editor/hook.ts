import { importCSS } from "@/common/utils";
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