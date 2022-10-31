import { ElMessage } from "element-plus";

export function successMessage(message: string) {
  ElMessage({
    showClose: true,
    message,
    type: 'success',
  })
}

export function warningMessage(message: string) {
  ElMessage({
    showClose: true,
    message,
    type: 'warning',
  })
}