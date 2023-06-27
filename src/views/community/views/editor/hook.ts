import { useThrottleFn } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import { getLocalStorage } from '@/common/localstorage'
import {
  publishCommunity,
  queryCommunityArticleById,
  updateCommunity
} from '@/api/modules/community'
import useUserStore, { TOKEN } from '@/store/modules/user'
import { createEditor, Editor } from '@textbus/editor'
import { computed, onActivated, onDeactivated, reactive, ref } from 'vue'
import { errorMessage, successMessage, warningMessage } from '@/common/message'
import { uploader } from '@/utils/uploader'
import { IArticle, IResponse } from '@@types/type'

export function useCommunityArticle() {
  const article = reactive({ professional: '', title: '' })
  const articleEditor = ref(),
    router = useRouter(),
    route = useRoute()
  const articleId = computed(() => route.query.articleId)
  let editor: Editor, editorArticleInfo: IArticle

  async function publishArticle() {
    const { loginState, loginModelToggle, userInfo } = useUserStore()
    if (!loginState.logined || !getLocalStorage(TOKEN)) {
      loginModelToggle()
      return
    }
    if (!article.professional || !article.title.trim() || editor.getHTML() == '<br>') {
      warningMessage('内容填写完整才能让其他同学看明白～')
      return
    }
    if (article.title.length > 20) {
      errorMessage('标题过长 请缩减到20字以内～')
      return
    }
    const text = document.createElement('div')
    text.innerHTML = editor.getHTML()
    // 1.处理参数
    const articleInfo = {
      ...article,
      content: editor.getHTML(),
      introduce: text.textContent?.slice(0, 255) || '简介',
      authorId: userInfo.uid
    }
    text.remove() // 删除该临时节点
    let commonCode = 0
    // 2.判断是否为编辑模式
    if (articleId.value != null) {
      const updateArticleInfo = Object.assign(articleInfo, {
        articleId: editorArticleInfo.articleId
      })
      const { code } = (await updateCommunity(updateArticleInfo)) as IResponse<unknown>
      commonCode = code
    } else {
      const { code } = (await publishCommunity(articleInfo)) as IResponse<unknown>
      commonCode = code
    }
    if (commonCode == 200) {
      router.back()
      successMessage('发布成功！')
    }
  }
  // 初始化处理编辑模式 拉取文章信息
  async function isEditMode() {
    if (articleId.value != undefined) {
      const articleData = (await queryCommunityArticleById({
        articleId: parseInt(<string>articleId.value)
      })) as IResponse<IArticle>
      editorArticleInfo = articleData.data as IArticle
      article.title = editorArticleInfo.title
      article.professional = editorArticleInfo.professional
      editor.replaceContent(editorArticleInfo.content)
    }
  }
  onActivated(() => {
    editor = createEditor({
      autoFocus: true,
      zenCoding: true, // 语法糖实时监测
      theme: 'dark',
      autoHeight: true,
      minHeight: '400px',
      uploader,
      styleSheets: ['.tb-list-item { margin-left: 20px } .tb-pre { margin: 10px 0;}'],
      placeholder: '内容尽情发挥～'
    })
    // 异步获取
    setTimeout(() => {
      const toolBar = document.querySelector('.textbus-ui-top') as HTMLElement
      toolBar.style.position = 'sticky'
      toolBar.style.top = '60px'
      toolBar.style.zIndex = '99'
    })
    editor.mount(articleEditor.value)
    isEditMode()
  })
  onDeactivated(() => {
    article.professional = ''
    article.title = ''
    editor?.destroy()
  })

  return {
    article,
    publishArticle: useThrottleFn(publishArticle, 1000),
    articleEditor
  }
}
