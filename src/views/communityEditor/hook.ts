import { useRouter } from 'vue-router';
import { getLocalStorage } from '@/common/hooks/useLcoaStoage';
import { publishCommunity } from '@/services/modules/community';
import useUserStore, { TOKEN } from '@/store/modules/user';
import { createEditor, Editor } from "@textbus/editor";
import { onMounted, onUnmounted, reactive, ref } from "vue";

export function useCommunityArticle() {
  const article = reactive({ professional: '', title: '' });
  const articleEditor = ref(), router = useRouter();
  let editor: Editor;

  async function publishArticle() {
    const { loginState, loginModelToggle, userInfo } = useUserStore();
    if (!loginState.logined || !getLocalStorage(TOKEN)) {
      loginModelToggle();
      return;
    }
    const text = document.createElement('div');
    text.innerHTML = editor.getContent();
    const articleInfo = {
      ...article,
      content: editor.getContent(),
      introduce: text.textContent?.slice(0, 255) || '简介',
      authorId: userInfo.uid
    }
    await publishCommunity(articleInfo);
    router.back();
  }

  onMounted(() => {
    editor = createEditor({ autoFocus: true, styleSheets: ['.tb-list-item { margin-left: 20px }'], placeholder: '内容尽情发挥～' });
    editor.mount(articleEditor.value)
    onUnmounted(() => editor?.destroy())
  })

  return {
    article,
    publishArticle,
    articleEditor
  }
}