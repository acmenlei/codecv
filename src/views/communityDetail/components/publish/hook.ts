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

export function usePublishShare() {
  const shareMainContent = ref('');
  const { loginState, loginModelToggle } = useUserStore();
  
  function publish() {
    if(!loginState.logined) {
      loginModelToggle();
      return;
    }
    console.log('发布到服务端...')
  }
  return {
    shareMainContent, publish
  }
}