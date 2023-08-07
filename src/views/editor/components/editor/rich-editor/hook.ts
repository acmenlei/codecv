import useEditorStore from '@/store/modules/editor'
import { queryDOM } from '@/utils'
import { resumeDOMStruct2Markdown } from '@/utils/dom2md'
import { nextTick, onActivated, ref } from 'vue'
// 使用编辑模式
export function useToggleEditorMode(resumeType: string) {
  const editorStore = useEditorStore(),
    DOMTree = ref<HTMLElement>()

  function ObserverContent() {
    const content = resumeDOMStruct2Markdown({
      node: DOMTree.value as Node,
      latest: true,
      uid: 0,
      whiteSpace: 0,
      parent: <Node>DOMTree.value?.parentElement
    })
    editorStore.setMDContent(content, resumeType)
  }

  onActivated(() => {
    if (editorStore.writable) {
      nextTick(() => {
        ;(DOMTree.value as HTMLElement).innerHTML = (<HTMLElement>(
          queryDOM('.reference-dom')
        )).innerHTML
      })
    }
  })
  return {
    editorStore,
    DOMTree,
    ObserverContent
  }
}
