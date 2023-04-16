import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export function formatTime(time: string | number) {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}
// 以当前时间为基准返回如：几秒前..几分钟前...字样
export function formatTimefromNow(time: string | number) {
  return dayjs(time).fromNow()
}
