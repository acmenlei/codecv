import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import useUserStore from "@/store/modules/user"
import { queryNotification, updateNotificationState } from '@/services/modules/notification';
import { useRouter } from 'vue-router';
import { errorMessage } from '@/common/message';

export function useNotificationList(toggleMessageModal: Function) {
  const { userInfo } = useUserStore(), router = useRouter(), commentTotal = ref(0), total = ref(0);
  const conditions = ref({ pageNum: 1, pageSize: 10, uid: 0 });
  const data = ref<INotificationList[]>([]);

  async function queryData() {
    conditions.value.uid = userInfo.uid;
    const res = await queryNotification(conditions.value) as IResponse<INotificationList[]>;
    if (res.code == 200) {
      data.value = res.data as INotificationList[];
      total.value = res.total as number;
      commentTotal.value = (res as any).commentTotal as number;
    } else {
      errorMessage(res.msg);
    }
  }
  async function readNotification(notification: INotificationList) {
    router.push(`/community/detail?articleId=${notification.articleId}`);
    toggleMessageModal();
    if (notification.read != 1) {
      const res = await updateNotificationState({ commentId: notification.commentId }) as IResponse<unknown>;
      if (res.code == 200) queryData();
    }
  }
  function pageNumChange(page: number) {
    conditions.value.pageNum = page;
    queryData();
  }
  onMounted(() => {
    if (userInfo.uid != 0) queryData();
  })
  watch(() => userInfo.uid, () => {
    if (userInfo.uid != 0) queryData();
  })
  return {
    data,
    total,
    commentTotal,
    readNotification,
    pageNumChange
  }
}