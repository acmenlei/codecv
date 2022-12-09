import { onDeactivated } from 'vue';
import { useThrottleFn } from '@vueuse/core';
import { errorMessage, successMessage, warningMessage } from '@/common/message';
import { publishComment, publishCommentReply } from '@/services/modules/comments';
import useUserStore from '@/store/modules/user';
import { Ref, ref } from 'vue';
import { ImageUpload } from '@/common/utils/uploader';
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
export function usePublishShare(
  articleId: number,
  level: number,
  posterCommentId: number,
  replyAuthorId: number,
  replyArticleAuthorId: number,
  replyCommentId: number,
  replyCommentLevel: number,
  emits: Function,
  images: Ref<string[]>) 
  {
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
      authorId: userInfo.uid, // 发表这条评论的作者是谁
      images: images.value.join('~$^$~'),
      level, // 几级评论
      articleId, // 文章ID
      posterCommentId, // 楼主是谁
      replyAuthorId, // 回复的那条评论是谁发表的
      replyArticleAuthorId, // 回复的文章是谁发表的
      replyCommentId, // 回复谁
      replyCommentLevel, // 回复的评论是几级评论
    };
    const rest = await cb(params) as IResponse<unknown>;
    if (rest.code == 200) {
      shareMainContent.value = '';
      images.value.length = 0; // 清空图片内容
      emits('reQueryComments');
    }
    rest.code == 200 ? successMessage(rest.msg) : errorMessage(rest.msg);
  }

  onDeactivated(() => {
    shareMainContent.value = '';
    images.value.length = 0;
  })
  return {
    shareMainContent,
    publish: useThrottleFn(publish, 1000)
  }
}

export function usePickerImage() {
  const images = ref<string[]>([]);

  async function pickerImage() {
    if (images.value.length >= 2) {
      return errorMessage('最多只能上传2张图片！');
    }
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.png,.jpg,.gif,.jpeg,.webp');
    input.click();

    input.onchange = async function () {
      const files = Array.from(input.files as FileList);
      for (let file of files) {
        const path = await ImageUpload(file);
        images.value.push(path);
      }
      input.remove();
    }
  }

  function deleteImage(idx: number) {
    images.value.splice(idx, 1);
  }
  return {
    images,
    pickerImage,
    deleteImage
  }
}