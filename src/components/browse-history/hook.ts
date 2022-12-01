import { getLocalStorage, setLocalStorage } from "@/common/hooks/useLcoaStoage";
import { onActivated, ref } from "vue";
import { useRouter } from "vue-router";

export function useBrowseHistory() {
  const BROWSE_HISTORY = '__BROWSE_HISTORY__', max = 10, data = ref<IArticle[]>([]);
  const router = useRouter();

  function setBrowseHistory(article: IArticle) {
    let history = getBrowseHistory();
    if (history.length >= max) {
      history.pop();
    }
    history.unshift(article);
    setLocalStorage(BROWSE_HISTORY, history, 60 * 60 * 1000 * 24 * 365);
  }

  function getBrowseHistory() {
    return (getLocalStorage(BROWSE_HISTORY) || <IArticle[]>[]) as IArticle[];
  }

  function setData(historys: IArticle[]) {
    data.value = historys;
  }

  function useDetail(articleId: number) {
    router.push(`/community/detail?articleId=${articleId}`)
  }

  onActivated(() => {
    setData(getBrowseHistory() || []);
  })
  return {
    data,
    useDetail,
    setBrowseHistory,
    getBrowseHistory
  }
}
