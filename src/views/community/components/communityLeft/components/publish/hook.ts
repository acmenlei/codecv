import { onActivated, onMounted, Ref, ref } from 'vue';
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
  const shareTitle = ref('');
  const shareMainContent = ref('');

  function publish() {
    console.log('发布到服务端...')
  }
  return {
    shareTitle, shareMainContent, publish
  }
}