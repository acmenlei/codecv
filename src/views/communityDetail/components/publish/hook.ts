import { useThrottleFn } from '@vueuse/core';
import { errorMessage, successMessage, warningMessage } from '@/common/message';
import { publishComment, publishCommentReply } from '@/services/modules/comments';
import useUserStore from '@/store/modules/user';
import { Ref, ref } from 'vue';
export function useEmoji(mainContent: Ref<string>) {
  const picker = ref(false);

  function togglePicker() {
    picker.value = !picker.value;
  }

  function setEmoji(emoji: any) {
    togglePicker();
    mainContent.value += emoji.i;
  }

  return {
    picker, togglePicker, setEmoji
  }
}
// 评论和回复的逻辑都在这。
export function usePublishShare(articleId: number, level: number, posterCommentId: number, replyAuthorId: number, emits: Function) {
  const shareMainContent = ref('');
  const { loginState, loginModelToggle, userInfo } = useUserStore();

  async function publish() {
    if (!loginState.logined) {
      loginModelToggle();
      return;
    }
    if (!shareMainContent.value.trim()) {
      warningMessage('你发个空内容是想干嘛呢？？？');
      return;
    }
    if (shareMainContent.value.length > 200) {
      warningMessage('太多了存不下, 删到200字以内吧');
      return;
    }
    const cb = level == 1 ? publishComment : publishCommentReply;
    const params = {
      content: shareMainContent.value.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      authorId: userInfo.uid,
      level,
      articleId,
      posterCommentId,
      replyAuthorId
    };
    const rest: IResponse<unknown> = await cb(params) as IResponse<unknown>;
    if (rest.code == 200) {
      shareMainContent.value = '';
      emits('reQueryComments');
    }
    rest.code == 200 ? successMessage(rest.msg) : errorMessage(rest.msg);
  }
  return {
    shareMainContent,
    publish: useThrottleFn(publish, 1000)
  }
}