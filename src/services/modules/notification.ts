import { post } from "../config";

export function queryNotification(data: { pageSize: number, pageNum: number, uid: number }) {
  return post('/notification/list', data);
}

export function updateNotificationState(data: { commentId: number }) {
  return post('/notification/read', data);
}