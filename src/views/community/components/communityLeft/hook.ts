import useUserStore from '@/store/modules/user';
import { errorMessage } from "@/common/message";
import { queryCommunity } from "@/services/modules/community";
import { reactive, ref } from "vue";
import { tabs } from "./constant";

export function useTab(conditions: ICommunityCondition, toggleQueryList: Function) {
  const tab = ref(tabs[0]);
  function toggleTab(idx: number) {
    tab.value = tabs[idx];
    conditions.tab = idx;
    toggleQueryList();
  }
  return {
    tab, toggleTab
  }
}

export function useInfinityList() {
  const { userInfo, loginState, loginModelToggle } = useUserStore();
  const data = ref<IArticle[]>([]), loading = ref(false), noMore = ref(false);
  const conditions = reactive({ pageNum: 1, pageSize: 10, keyword: '', professional: '', tab: 0, uid: userInfo.uid });

  async function queryList() {
    if (noMore.value) {
      return;
    }
    // console.log('滚动下拉刷新')
    loading.value = true;
    const res: any = await queryCommunity(conditions);
    if (res.code != 200) {
      return errorMessage(res.msg);
    }
    loading.value = false;
    if (res.data.length < conditions.pageSize) {
      noMore.value = true;
    }
    data.value.push(...res.data);
    conditions.pageNum += 1;
  }

  async function toggleQueryList() {
    // console.log('切换tab请求数据')
    if (conditions.tab == 2) {
      if (!loginState.logined) {
        errorMessage('请先登录再查看。');
        loginModelToggle();
        return;
      }
      conditions.uid = userInfo.uid; // 只看我自己的
    }
    loading.value = true;
    // 切换就要重新计算pageNum了
    conditions.pageNum = 1;
    const res: any = await queryCommunity(conditions);
    if (res.code != 200) {
      return errorMessage(res.msg);
    }
    loading.value = false;
    // if (res.data.length < conditions.pageSize) {
    //   noMore.value = true;
    // }
    data.value = res.data;
  }
  return {
    data,
    loading,
    noMore,
    conditions,
    queryList,
    toggleQueryList
  }
}