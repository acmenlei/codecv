import { warningMessage } from '@/common/message';
import { errorMessage, successMessage } from '@/common/message';
import { isLogin } from '@/common/hooks/global';
import useUserStore from '@/store/modules/user';
import { useRouter } from "vue-router";
import { likeArticle, removeCommunity } from '@/services/modules/community';
import { Ref } from 'vue';

export function useOperator(articleId: number, emits: Function, hasClick: Ref<boolean>) {
  const router = useRouter();

  async function useLike() {
     if (!isLogin()) {
      errorMessage('请先登录！');
      return;
    }
    if (hasClick.value) {
      warningMessage('你已经赞过了，不用重复点～');
      return;
    }
    const { userInfo } = useUserStore();
    await likeArticle({ userId: userInfo.uid, articleId });
    emits('reQueryList', userInfo.uid)
  }

  function useDetail() {
    router.push(`/community/detail?articleId=${articleId}`);
  }
  async function useRemove() {
    const res: IResponse<unknown> = await removeCommunity({ articleId }) as IResponse<unknown>;
    if(res.code == 200) {
      successMessage(res.msg);
      emits('remove')
    }
  }

  function useEditor() {
    router.push(`/community/editor?articleId=${articleId}`)
  }

  return {
    useLike, useDetail, useRemove, useEditor
  }
}
