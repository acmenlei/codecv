import { themes, themeType } from "@/templates/config";
import { Ref, ref } from "vue";

export function useCategory() {
  const category = ref('全部');
  const data: Ref<themeType[]> = ref([...themes]);

  function queryCategory(category: string) {
    if (category === '全部') {
      data.value = [...themes];
      return;
    }
    data.value = themes.filter(resume => resume.name.includes(category));
  }

  return {
    queryCategory,
    category,
    data
  }
}