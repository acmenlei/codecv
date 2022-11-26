import { ref } from "vue";
import { tabs } from "./constant";

export function useProfessional() {
  const professional = ref('');

  return { professional }
}

export function useTab() {
  const tab = ref(tabs[0]);

  function toggleTab(idx: number) {
    tab.value = tabs[idx];
  }
  return {
    tab, toggleTab
  }
}