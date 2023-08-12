export interface IResumeConfig {
  content: string
  style: string
  link: string
  name: string
  type?: number
}

const UPSTASH_BASE_URL = import.meta.env.VITE_UPSTASH_BASE_URL as string

export async function resumeExport(data: IResumeConfig) {
  const res = await fetch(import.meta.env.VITE_EXPORT_URL as string, {
    method: 'POST',
    body: JSON.stringify(data)
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
  return await res.json()
}

export function getExportCount() {
  return new Promise((resolve, reject) => {
    fetch(`${UPSTASH_BASE_URL}/get/count`, {
      headers: {
        Authorization: import.meta.env.VITE_UPSTASH_GET_TOKEN as string
      }
    })
      .then(response => response.json())
      .then(data => resolve(data.result))
      .catch(reject)
  })
}

export async function setExportCount() {
  let count: string
  try {
    count = (await getExportCount()) as string
  } catch {
    return Promise.resolve('获取失败...')
  }
  return new Promise(resolve => {
    fetch(`${UPSTASH_BASE_URL}/set/count/${parseInt(count) + 1}`, {
      headers: {
        Authorization: import.meta.env.VITE_UPSTASH_SET_TOKEN as string
      }
    })
      .then(response => response.json())
      .then(data => resolve(data.result))
      .catch(resolve)
  })
}

export async function getTemplateCondition() {
  const res = await fetch(`${UPSTASH_BASE_URL}/get/templateData`, {
    headers: {
      Authorization: import.meta.env.VITE_UPSTASH_GET_TOKEN as string
    }
  })
  return await res.json()
}

export async function setTemplateCondition(params: { name: string }) {
  let data,
    templateData: { [key: string]: string } = {}
  try {
    data = await getTemplateCondition()
  } catch {
    return Promise.resolve({ msg: '获取模板数据失败...', result: null })
  }
  if (data.result) {
    templateData = JSON.parse(data.result)
  }
  templateData[`t${params.name}`] = String(+(templateData[`t${params.name}`] || 0) + 1)
  const res = await fetch(`${UPSTASH_BASE_URL}/set/templateData`, {
    method: 'POST',
    body: JSON.stringify(templateData),
    headers: {
      Authorization: import.meta.env.VITE_UPSTASH_SET_TOKEN as string
    }
  })
  return await res.json()
}
// 获取 Gitee 仓库 star 数量
export function queryGiteeRepoStars() {
  return new Promise(resolve => {
    fetch(import.meta.env.VITE_GITEE_API_URL as string)
      .then(res => res.json())
      .then(data => {
        // 获取仓库 star 数量
        resolve(data)
      })
      .catch(() => resolve([]))
  })
}
