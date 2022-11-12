import {  ref } from "vue";
export const step = ref(80);

export function setStep(val: number) {
  step.value = val;
}

export function useAvatar(emits: Function) {
  function setAvatar(event: any) {
    let file = event.target.files[0];
    let path = URL.createObjectURL(file);
    emits('upload-avatar', path)
  }

  return {
    setAvatar
  }
}