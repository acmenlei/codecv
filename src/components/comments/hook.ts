import { isLogin } from '@/common/hooks/global';
import { errorMessage } from '@/common/message';
import { successMessage } from '@/common/message';
import { removeComment } from '@/services/modules/comments';
import { calcOffsetTop, scrollTo } from "@/common/utils"
import useUserStore from '@/store/modules/user';
import { Ref, ref, watch } from "vue";

// 回复所需要的操作
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
    if (!isLogin()) {
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
// 展示更多
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
// 获取当前评论的具体页数和位置
export function useCommentPosition(position: Ref<number>) {
  const comments = ref()
  // 点击通知后进行评论定位
  watch(() => position.value, () => {
    try {
      const targetComment = comments.value.children[position.value];
      // console.log('具体的目标元素：', targetComment)
      scrollTo(calcOffsetTop(targetComment) - 65);
      targetComment.classList.add('notice')
      setTimeout(() => {
        targetComment.classList.remove('notice')
      }, 1000);
    } catch {
      errorMessage('出了点错，请刷新后重新尝试～')
    }
  })
  return {
    comments
  }
}