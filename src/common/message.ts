import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import { h } from 'vue'

export function successMessage(message: string) {
  ElMessage({
    showClose: true,
    message,
    type: 'success'
  })
}

export function warningMessage(message: string) {
  ElMessage({
    showClose: true,
    message,
    type: 'warning'
  })
}

export function errorMessage(message: string) {
  ElMessage({
    showClose: true,
    message,
    type: 'error'
  })
}

export function showMessageVN(message: string, strong: string) {
  ElMessage({
    message: h('p', null, [
      h('span', null, message),
      h('strong', { style: 'color: teal; margin: 0 5px' }, strong)
    ]),
    offset: 60
  })
}
