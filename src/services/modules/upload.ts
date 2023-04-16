import { post } from '../config'

export function fileUpload(data: FormData) {
  return post('/fileUpload/upload', data)
}

export function fileMerge(data: { name: string; length: number }) {
  return post('/fileUpload/merge', data)
}

export function getToken() {
  return post('/fileUpload/getToken')
}
