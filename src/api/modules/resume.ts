import { post } from '../config'

export interface IResumeConfig {
  content: string
  style: string
}
export function resumeExport(data: IResumeConfig) {
  return post('/resume/export', data, 'blob')
}
