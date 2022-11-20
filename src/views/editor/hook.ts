import { getLocalStorage, setLocalStorage } from "@/common/hooks/useLcoaStoage";
import { errorMessage, successMessage, warningMessage } from "@/common/message";
import { getCurrentTypeContent, getPdf, importCSS } from "@/common/utils";
import { markdownToHTML } from "markdown-transform-html";
import { onActivated, onDeactivated, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { splitPage } from "./ch-cmp/tabbar/hook";

const  MARKDOWN_CONTENT = 'markdown-content', get = getLocalStorage;

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
  return { left, move, down }
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