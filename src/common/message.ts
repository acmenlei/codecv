import { ElMessage } from "element-plus";
import 'element-plus/es/components/message/style/css';

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

export function errorMessage(message: string) {
  ElMessage({
    showClose: true,
    message,
    type: 'error',
  })
}