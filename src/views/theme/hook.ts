import { themes, themeType } from "@/templates/config";
import { Ref, ref } from "vue";
import { templateCategory } from "./constant";

export function useCategory() {
  const category = ref('全部');
  const data: Ref<themeType[]> = ref([...themes]);

  function queryCategory(idx: number) {
    category.value = templateCategory[idx];
    if (category.value === '全部') {
      data.value = [...themes];
      return;
    }
    data.value = themes.filter(resume => resume.name.includes(category.value));
  }

  return {
    queryCategory,
    category,
    data
  }
}