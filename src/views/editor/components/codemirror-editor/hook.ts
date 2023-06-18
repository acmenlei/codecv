import useEditorStore from '@/store/modules/editor'
import {
  Ref,
  computed,
  nextTick,
  onActivated,
  onDeactivated,
  onMounted,
  ref,
  watch,
  watchEffect
} from 'vue'
import { linkFlag, selectIcon } from '../toolbar/hook'
import { clickedTarget } from '../../hook'
import { setClickedLinkText, setClickedLinkURL } from '../toolbar/components/linkInput/hook'
import { getPickerFile } from '@/utils/uploader'
import { resumeDOMStruct2Markdown } from '@/utils'

export function initEditorState(resumetype: string) {
  const editorStore = useEditorStore()
  editorStore.initMDContent(resumetype)

  const writable = computed(() => editorStore.writable)

  return {
    writable,
    editorStore
  }
}

// 左右移动伸缩布局
export function useMoveLayout() {
  const left = ref(500)
  let flag = false

  function move(event: MouseEvent) {
    if (!flag) return
    left.value = event.clientX - 15
  }

  function down() {
    flag = true
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

export function injectWriableModeAvatarEvent(
  writable: Ref<boolean>,
  setAvatar: (path: string) => void
) {
  watchEffect(() => {
    if (!writable.value) return
    nextTick(() => {
      const node = document.querySelector('.writable-edit-mode') as HTMLElement
      setTimeout(() => {
        const avatar = node.querySelector('img[alt*="个人头像"]')
        if (avatar) {
          avatar.addEventListener('click', async function () {
            const file = await getPickerFile({
              multiple: false,
              accept: 'image/png, image/jpeg,image/jpg, '
            })
            const path = URL.createObjectURL(file)
            setAvatar(path)
          })
        }

        injectWritableModeClickedReplace(node)
      })
    })
  })
}

export function injectWritableModeClickedReplace(parentNode: HTMLElement) {
  parentNode.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement,
      className = target.className,
      tagName = target.tagName.toLocaleLowerCase()
    if (className.includes('iconfont')) {
      selectIcon.value = !selectIcon.value
      clickedTarget.value = target
    } else if (tagName === 'a') {
      linkFlag.value = !linkFlag.value
      setClickedLinkText(target)
      setClickedLinkURL(target)
      clickedTarget.value = target
    }
  })
}

export function resetCodeMirrorDefaultStyle(writable: Ref<boolean>) {
  function reset() {
    const editor = document.querySelector('.cm-editor') as HTMLElement
    editor.style.outline = 'none'
  }
  watch(
    () => writable.value,
    n => !n && nextTick(reset)
  )
  onMounted(reset)
}

// 使用编辑模式
export function useToggleEditorMode(resumeType: string) {
  const { writable, setMDContent } = useEditorStore(),
    DOMTree = ref<HTMLElement>()

  function ObserverContent() {
    const content = resumeDOMStruct2Markdown({
      node: DOMTree.value as Node,
      latest: true,
      uid: 0
    })
    setMDContent(content, resumeType)
  }

  onActivated(() => {
    if (writable) {
      nextTick(() => {
        ;(DOMTree.value as HTMLElement).innerHTML = (<HTMLElement>(
          document.querySelector('.reference-dom')
        )).innerHTML
      })
    }
  })
  return {
    writable,
    DOMTree,
    ObserverContent
  }
}
