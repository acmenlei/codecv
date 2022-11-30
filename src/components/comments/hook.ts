import { isLogin } from '@/common/hooks/global';
import { errorMessage } from '@/common/message';
import { successMessage } from '@/common/message';
import { removeComment } from '@/services/modules/comments';
import useUserStore from '@/store/modules/user';
import { ref } from "vue";

export function useReply(emits: Function) {
  const { userInfo } = useUserStore();
  const currenId = ref(-1);
  let preId = -1;

  function reply(commentId: number) {
    if (preId === commentId) {
      currenId.value = -1;
      preId = -1;
      return;
    }
    preId = commentId;
    currenId.value = commentId;
  }

  async function remove(commentId: number, articleId: number, level: number) {
    if(!isLogin()) {
      errorMessage('请先登录！');
      window.location.reload();
      return;
    }
    const rest: IResponse<unknown> = await removeComment({ commentId, articleId, level }) as IResponse<unknown>;
    if (rest.code == 200) {
      successMessage(rest.msg);
      emits('reQueryComments');
      return;
    }
    errorMessage(rest.msg);
  }

  return {
    userInfo,
    reply,
    remove,
    currenId
  }
}

export function useShowMore(count: number) {
  const more = ref<boolean>(count > 1);

  function setMore() {
    more.value = false;
  }
  return {
    more,
    setMore
  }
}