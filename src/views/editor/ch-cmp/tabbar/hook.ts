import { ref } from "vue";
export const step = ref(80);

export function setStep(val: number) {
  step.value = val;
}
