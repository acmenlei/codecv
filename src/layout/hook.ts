import { ref } from 'vue';
export function useUser() {
  const flag = ref(false);

  function toggle() {
    flag.value = !flag.value;
  }
  function update() {
    toggle();
    console.log('更新')
  }
  return {
    flag, toggle, update
  }
}