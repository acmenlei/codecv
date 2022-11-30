import { useThrottleFn } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';
import { getLocalStorage } from '@/common/hooks/useLcoaStoage';
import { publishCommunity, queryCommunityArticleById, updateCommunity } from '@/services/modules/community';
import useUserStore, { TOKEN } from '@/store/modules/user';
import { createEditor, Editor } from "@textbus/editor";
import { computed, onActivated, onDeactivated, reactive, ref } from "vue";
import { successMessage, warningMessage } from '@/common/message';

export function useCommunityArticle() {
  const article = reactive({ professional: '', title: '' });
  const articleEditor = ref(), router = useRouter(), route = useRoute();
  const articleId = computed(() => route.query.articleId);
  let editor: Editor, editorArticleInfo: IArticle;

  async function publishArticle() {
    const { loginState, loginModelToggle, userInfo } = useUserStore();
    if (!loginState.logined || !getLocalStorage(TOKEN)) {
      loginModelToggle();
      return;
    }
    if (!article.professional || !article.title.trim() || editor.getContent() == '<br>') {
      warningMessage('内容填写完整才能让其他同学看明白～');
      return;
    }
    const text = document.createElement('div');
    text.innerHTML = editor.getContent();
    // 1.处理参数
    let articleInfo = {
      ...article,
      content: editor.getContent(),
      introduce: text.textContent?.slice(0, 255) || '简介',
      authorId: userInfo.uid
    }
    let commonCode = 0;
    // 2.判断是否为编辑模式
    if (articleId.value != null) {
      const updateArticleInfo = Object.assign(articleInfo, { articleId: editorArticleInfo.articleId });
      const { code }: IResponse<unknown> = await updateCommunity(updateArticleInfo) as IResponse<unknown>;
      commonCode = code;
    } else {
      const { code }: IResponse<unknown> = await publishCommunity(articleInfo) as IResponse<unknown>;
      commonCode = code;
    }
    if (commonCode == 200) {
      router.back();
      successMessage('发布成功！');
    }
  }
  // 初始化处理编辑模式 拉取文章信息
  async function isEditMode() {
    if (articleId.value != undefined) {
      const articleData: IResponse<IArticle> = await queryCommunityArticleById({ articleId: parseInt(<string>articleId.value) }) as IResponse<IArticle>;
      editorArticleInfo = articleData.data as IArticle;
      article.title = editorArticleInfo.title;
      article.professional = editorArticleInfo.professional;
      editor.replaceContent(editorArticleInfo.content);
    }
  }
  onActivated(() => {
    editor = createEditor({ autoFocus: true, styleSheets: ['.tb-list-item { margin-left: 20px }'], placeholder: '内容尽情发挥～' });
    editor.mount(articleEditor.value);
    isEditMode();
  })
  onDeactivated(() => {
    article.professional = '';
    article.title = '';
    editor?.destroy();
  })

  return {
    article,
    publishArticle: useThrottleFn(publishArticle, 1000),
    articleEditor
  }
}